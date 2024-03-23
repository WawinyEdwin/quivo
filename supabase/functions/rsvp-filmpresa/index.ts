import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import {
  bigliettoConfig,
  jsonHeaders,
  mailProvider,
} from "../_shared/constants.ts";
import { corsHeaders } from "../_shared/cors.ts";
import { customize_filmpresa_html } from "../_shared/customize_html.ts";
import { EmailService } from "../_shared/email-service.ts";
import {
  create_appointment,
  create_appointment_email,
  create_appointment_meta,
  create_company,
  create_contact,
  create_ticket,
  create_ticket_timeslot,
  delete_ticket_timeslots,
  get_appointment_by_uuid,
  get_appointment_emails_by_appointment_id,
  get_contact_by_id,
  get_ticket_by_appointment_id,
} from "../_shared/supabase/db.ts";
import { generate_filmpresa_ticket } from "../_shared/ticket.ts";
import { EventTimeslot, IFilmpresaRsvp } from "../_shared/types.ts";

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method === "POST") {
    await handle_rsvp(req);
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

const handle_rsvp = async (req: Request) => {
  try {
    const rsvp: IFilmpresaRsvp = await req.json();
    if (rsvp.appointment_uuid) {
      const appointment = await get_appointment_by_uuid(rsvp.appointment_uuid);
      const oldTicket = await get_ticket_by_appointment_id(appointment.id);
      if (oldTicket) {
        await delete_ticket_timeslots(oldTicket.id);
      }
      const eventTimeslots: EventTimeslot[] = [];
      await Promise.all(
        rsvp.event_timeslot.map(async (event_timeslot_id) => {
          const ticketTimeslot = await create_ticket_timeslot({
            event_timeslot_id,
            ticket_id: oldTicket.id,
          });
          eventTimeslots.push(ticketTimeslot.event_timeslot);
        })
      );
      let html: string = "";
      eventTimeslots.forEach((event_timeslot) => {
        html += ` <tr><td align="left" style="padding:0;Margin:0">
                  <p
                    align="center"
                    style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px"
                  >
                    ${event_timeslot.title_email}
                    ${event_timeslot.description_HTML}
                  </p>
                </td></tr>`;
      });
      const bigliettoHTML = customize_filmpresa_html(html);
      const emails = await get_appointment_emails_by_appointment_id(
        appointment.id
      );
      const recipients = emails.map((appointment) => appointment.email);
      const contact = await get_contact_by_id(appointment.contact_id as number);
      const pdfTicket = await generate_filmpresa_ticket({
        type: "base64",
        ticket_id: oldTicket.id,
        contact: contact,
        event: oldTicket.event,
      });
      await EmailService.sendEmail(mailProvider, {
        from: `Premio Film Impresa ${bigliettoConfig.email}`,
        subject: `Ecco il tuo biglietto per Premio Film Impresa 2024`,
        to: [recipients.join(",")],
        html: bigliettoHTML,
        attachments: [
          {
            name: `Premio Film Impresa - ${rsvp.contact.first_name} ${rsvp.contact.last_name}.pdf`,
            file: pdfTicket,
          },
        ],
      });
      return;
    } else {
      const contact = await create_contact({
        workspace_id: rsvp.contact.workspace_id,
        first_name: rsvp.contact.first_name,
        last_name: rsvp.contact.last_name,
        source: rsvp.source,
      });
      const company = await create_company({
        workspace_id: rsvp.company.workspace_id,
        name: rsvp.company.name,
      });
      const appointment = await create_appointment({
        workspace_id: rsvp.appointment.workspace_id,
        contact_id: contact.id,
        company_id: company.id,
        job_title: rsvp.appointment.job_title,
        source: rsvp.source,
      });
      const appointment_email = await create_appointment_email({
        workspace_id: rsvp.appointment.workspace_id,
        appointment_id: appointment.id,
        email: rsvp.appointment.email,
      });
      const ticket = await create_ticket({
        appointment_id: appointment.id,
        event_id: rsvp.event_id,
      });
      const eventTimeslots: EventTimeslot[] = [];
      await Promise.all(
        rsvp.event_timeslot.map(async (event_timeslot_id) => {
          const ticketTimeslot = await create_ticket_timeslot({
            event_timeslot_id,
            ticket_id: ticket.id,
          });
          eventTimeslots.push(ticketTimeslot.event_timeslot);
        })
      );
      let html: string = "";
      eventTimeslots.forEach((event_timeslot) => {
        html += ` <tr><td align="left" style="padding:0;Margin:0">
                <p
                  align="center"
                  style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px"
                >
                  ${event_timeslot.title_email}
                  ${event_timeslot.description_HTML}
                </p>
              </td></tr>`;
      });
      const bigliettoHTML = customize_filmpresa_html(html);
      const pdfTicket = await generate_filmpresa_ticket({
        type: "base64",
        ticket_id: ticket.id,
        contact: contact,
        event: ticket.event,
      });
      await EmailService.sendEmail(mailProvider, {
        from: `Premio Film Impresa ${bigliettoConfig.email}`,
        subject: `Ecco il tuo biglietto per Premio Film Impresa 2024`,
        to: [appointment_email.email as string],
        html: bigliettoHTML,
        attachments: [
          {
            name: `Premio Film Impresa - ${rsvp.contact.first_name} ${rsvp.contact.last_name}.pdf`,
            file: pdfTicket,
          },
        ],
      });
      await create_appointment_meta({
        event_id: rsvp.event_id,
        appointment_id: appointment.id,
        appointment_email: appointment_email.id,
        action: "accepted",
        status: "accepted",
      });
      console.log("here");
      return;
    }
  } catch (error) {
    console.log("Error on Ticket Generation:", error);
  }
};
