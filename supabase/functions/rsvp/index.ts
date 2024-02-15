import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import {
  jsonHeaders,
  mailProvider,
  unindustriaConfig,
} from "../_shared/constants.ts";
import { corsHeaders } from "../_shared/cors.ts";
import { EmailService } from "../_shared/email-service.ts";
import {
  create_appointment_meta,
  create_ticket,
  find_appointment_by_appointment_email_uuid,
  get_appointment_email_by_appointment_email_uuid,
  get_appointment_emails_by_appointment_id,
  get_ticket_by_appointment_id,
  update_appointment_by_uuid,
  update_contacts,
} from "../_shared/supabase/db.ts";
import { generate_ticket } from "../_shared/ticket.ts";
import { IRsvp } from "../_shared/types.ts";

async function handle_ticket_creation(
  appointmentId: number,
  event_id: number
): Promise<string> {
  const oldTicket = await get_ticket_by_appointment_id(appointmentId);

  if (!oldTicket) {
    const ticket = await create_ticket({
      appointment_id: appointmentId,
      event_id,
    });
    console.log("Old Ticket not found, creating new ticket");
    return ticket.id;
  }
  console.log("Old Ticket found, updating ticket");

  return oldTicket.id;
}

async function handle_rsvp(req: Request): Promise<void> {
  const rsvp: IRsvp = await req.json();

  try {
    if (rsvp.appointment_uuid) {
      if (rsvp.job_title) {
        update_appointment_by_uuid(rsvp.job_title, rsvp.appointment_uuid);
      }
      // const appointment = await get_appointment_by_uuid(appointment_uuid);
      // update_contacts(
      //   { date_of_birth: rsvp.date_of_birth },
      //   appointment.contact_id as number
      // );
    }

    const appointmentEmail = await find_appointment_by_appointment_email_uuid(
      rsvp.invite
    );

    if (!appointmentEmail) {
      throw new Error("Appointment not found");
    }

    const appointment = appointmentEmail.appointment;

    if (rsvp.date_of_birth) {
      update_contacts(
        { date_of_birth: rsvp.date_of_birth },
        appointment.contact.id as number
      );
    }

    const invokerAppointmentEmail =
      await get_appointment_email_by_appointment_email_uuid(rsvp.invite);

    if (!invokerAppointmentEmail) {
      throw new Error("No Appointment emails found");
    }

    const appointmentMeta = await create_appointment_meta({
      action: rsvp.response,
      event_id: rsvp.event_id,
      appointment_id: appointment.id,
      appointment_email: invokerAppointmentEmail.id,
      status: rsvp.response,
    });

    if (!appointmentMeta) {
      throw new Error("Appointment Meta not found");
    }

    if (rsvp.response === "accepted") {
      const ticketId = await handle_ticket_creation(
        appointment.id,
        rsvp.event_id
      );

      const generatedTicket = await generate_ticket({
        type: "base64",
        ticket_id: ticketId,
        event: appointmentMeta.event,
        contact: appointment.contact,
      });

      const emails = await get_appointment_emails_by_appointment_id(
        appointment.id
      );
      console.log("Emails:", emails);

      const recipients = emails.map((appointment) => appointment.email);

      console.log("Sending Email to:", recipients.join(", "));

      EmailService.sendEmail(mailProvider, {
        from: unindustriaConfig.email,
        subject: `Registrazione completata con successo!`,
        to: [recipients.join(", ")],
        html: unindustriaConfig.template,
        attachments: [
          {
            name: `${ticketId}.pdf`,
            file: generatedTicket,
          },
        ],
      });
    }
  } catch (error) {
    console.log("Error on Ticket Generation:", error);
  }
}

serve((req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method === "POST") {
    handle_rsvp(req);
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

  return new Response(JSON.stringify({ message: "Invalid Request" }), {
    headers: { ...corsHeaders, ...jsonHeaders },
    status: 500,
  });
});
