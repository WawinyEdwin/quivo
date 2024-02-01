import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import {
  jsonHeaders,
  mailProvider,
  quivoAddress,
} from "../_shared/constants.ts";
import { corsHeaders } from "../_shared/cors.ts";
import { EmailService } from "../_shared/email-service.ts";
import {
  create_appointment_meta,
  create_ticket,
  get_appointment_by_uuid,
  get_appointment_emails_by_appointment_id,
  get_ticket_by_appointment_id,
  update_appointment_by_uuid,
} from "../_shared/supabase/db.ts";
import { generate_ticket } from "../_shared/ticket.ts";
import { Appointment, IRsvp } from "../_shared/types.ts";

async function handle_ticket_creation(
  updatedAppointment: Appointment,
  event_id: number
): Promise<string> {
  const oldTicket = await get_ticket_by_appointment_id(updatedAppointment.id);

  if (!oldTicket) {
    const ticket = await create_ticket({
      appointment_id: updatedAppointment.id,
      event_id,
    });
    return ticket.id;
  }
  
  return oldTicket.id;
}

async function generate_and_send_ticket(
  updatedAppointment: Appointment,
  ticketId: string
): Promise<void> {
  const generatedTicket = await generate_ticket({
    type: "base64",
    ticket_id: ticketId,
  });

  const appointment_emails = await get_appointment_emails_by_appointment_id(
    updatedAppointment.id
  );

  await EmailService.sendEmail(mailProvider, {
    from: quivoAddress,
    subject: `Ticket for Event`,
    to: [appointment_emails.email as string],
    text: "Here is your ticket for the event",
    attachments: [
      {
        name: `${ticketId}.pdf`,
        file: generatedTicket as Uint8Array,
      },
    ],
  });
}

async function handle_rsvp(req: Request): Promise<Response> {
  const rsvp: IRsvp = await req.json();
  const { appointment_uuid, event_id, job_title, response } = rsvp;

  try {
    if (job_title) {
      await update_appointment_by_uuid(job_title, appointment_uuid);
    }
    
    // Required for now
    const appointment = await get_appointment_by_uuid(appointment_uuid);
    await create_appointment_meta(response, event_id, appointment.id);

    if (response === "accepted") {
      const ticketId = await handle_ticket_creation(appointment, event_id);
      await generate_and_send_ticket(appointment, ticketId);

      return new Response(
        JSON.stringify({
          message: "RSVP ticket is being generated and will be sent shortly",
        }),
        {
          headers: {
            ...corsHeaders,
            ...jsonHeaders,
          },
          status: 200,
        }
      );
    }

    if (response === "refused") {
      return new Response(
        JSON.stringify({ message: "RSVP response saved successfully" }),
        {
          headers: {
            ...corsHeaders,
            ...jsonHeaders,
          },
          status: 200,
        }
      );
    }

    return new Response(
      JSON.stringify({ message: "Invalid Response Provided!" }),
      {
        headers: { ...corsHeaders, ...jsonHeaders },
        status: 500,
      }
    );
  } catch (error) {
    console.log("Error on Ticket Gen:", error);

    return new Response(
      JSON.stringify({ message: "Error Generating Ticket" }),
      {
        headers: { ...corsHeaders, ...jsonHeaders },
        status: 500,
      }
    );
  }
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method === "POST") {
    return await handle_rsvp(req);
  }

  return new Response(JSON.stringify({ message: "Invalid Request" }), {
    headers: { ...corsHeaders, ...jsonHeaders },
    status: 500,
  });
});
