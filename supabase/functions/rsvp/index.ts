import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import {
  BadRequestResponse,
  jsonHeaders,
  mailProvider,
  quivoAddress,
} from "../_shared/constants.ts";
import { corsHeaders } from "../_shared/cors.ts";
import { EmailService } from "../_shared/email-service.ts";
import {
  create_ticket,
  get_appointment_by_id,
  get_appointment_emails_by_appointment_id,
  update_appointment,
  update_appointment_meta,
} from "../_shared/supabase/db.ts";
import { generate_ticket } from "../_shared/ticket.ts";
import { IRsvp } from "../_shared/types.ts";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method === "POST") {
    const rsvp: IRsvp = await req.json();
    const { appointment_uuid, event_id, job_title, response } = rsvp;
    const appointment = await get_appointment_by_id(appointment_uuid);
    console.log(appointment);

    // for now we keep it lean only checker we have is a valid appointment_id
    if (!appointment) {
      return new Response(JSON.stringify({ message: "Invalid RSVP" }), {
        ...BadRequestResponse,
      });
    }
    if (response === "refused") {
      await update_appointment_meta(response, event_id);
      return new Response(
        JSON.stringify({ message: "RSVP response saved successfully" }),
        {
          ...jsonHeaders,
          status: 200,
        }
      );
    }
    if (response === "accepted") {
      const updatedAppointment = await update_appointment(
        job_title,
        appointment_uuid
      );
      const ticket = await create_ticket({
        appointment_id: updatedAppointment.id,
        event_id,
        status: response,
      });
      await update_appointment_meta(response, event_id);
      const generatedTicket = await generate_ticket({
        type: "base64",
        ticket_id: ticket.id,
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
            name: `${ticket.id}.pdf`,
            file: generatedTicket as Uint8Array,
          },
        ],
      });
      return new Response(
        JSON.stringify({ message: "RSVP successful, Event ticket sent" }),
        {
          ...jsonHeaders,
          status: 200,
        }
      );
    }
  }
  return new Response(
    JSON.stringify({ message: "Error processing RSVP tickets" })
  );
});
