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
import { generate_filmpresa_ticket, toTitleCase } from "../_shared/ticket.ts";
import {
  Contact,
  EventTimeslot,
  FilmpresaReceipient,
  IFilmpresaRsvp,
  ITicket,
} from "../_shared/types.ts";

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
      if (!appointment) {
        return;
      }
      let oldTicket = await get_ticket_by_appointment_id(appointment.id);
      if (oldTicket) {
        await delete_ticket_timeslots(oldTicket.id);
      } else {
        oldTicket = await create_ticket({
          appointment_id: appointment.id,
          event_id: rsvp.event_id,
        });
      }
      const eventTimeslots = await createTicketTimeslots(
        rsvp.event_timeslot,
        oldTicket.id
      );
      const sortedEventTimeslots = sortEventTimeslots(eventTimeslots);
      const bigliettoHTML = formatInviteHTML(sortedEventTimeslots);
      const emails = await get_appointment_emails_by_appointment_id(
        appointment.id
      );
      if (!emails)
        return new Response(
          JSON.stringify({ message: "No emails found for this appointment" }),
          {
            headers: { ...corsHeaders, ...jsonHeaders },
            status: 404,
          }
        );
      const recipients = emails.map(
        (appointment) => appointment.email
      ) as string[];
      const contact = await get_contact_by_id(appointment.contact_id as number);
      await processTicketEmail({
        ticket: oldTicket,
        contact: contact,
        emails: recipients,
        emailHtml: bigliettoHTML,
        receipient: rsvp.receipient,
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
      const eventTimeslots = await createTicketTimeslots(
        rsvp.event_timeslot,
        ticket.id
      );
      const sortedEventTimeslots = sortEventTimeslots(eventTimeslots);
      const bigliettoHTML = formatInviteHTML(sortedEventTimeslots);
      const emails = [rsvp.appointment.email];
      await processTicketEmail({
        ticket: ticket,
        contact: contact,
        emails: emails,
        emailHtml: bigliettoHTML,
        receipient: rsvp.receipient,
      });
      await create_appointment_meta({
        event_id: rsvp.event_id,
        appointment_id: appointment.id,
        appointment_email: appointment_email.id,
        action: "accepted",
        status: "accepted",
      });
      return;
    }
  } catch (_error) {
    throw new Response(JSON.stringify({ message: "Error processing RSVP" }), {
      headers: { ...corsHeaders, ...jsonHeaders },
      status: 500,
    });
  }
};

const sortEventTimeslots = (eventTimeslots: EventTimeslot[]) => {
  eventTimeslots.sort((a, b) => {
    const time_startA = a.date as string;
    const time_startB = b.date as string;
    const dateA = new Date(time_startA).getTime();
    const dateB = new Date(time_startB).getTime();
    if (dateA > dateB) return 1;
    if (dateA < dateB) return -1;
    if (time_startA > time_startB) return 1;
    if (time_startA < time_startB) return -1;
    return 0;
  });
  return eventTimeslots;
};

const createTicketTimeslots = async (
  eventTimeslotIds: number[],
  ticketId: string
) => {
  const eventTimeslots: EventTimeslot[] = [];
  await Promise.all(
    eventTimeslotIds.map(async (event_timeslot_id) => {
      const ticketTimeslot = await create_ticket_timeslot({
        event_timeslot_id: event_timeslot_id,
        ticket_id: ticketId,
      });
      eventTimeslots.push(ticketTimeslot.event_timeslot);
    })
  );
  return eventTimeslots;
};

const formatInviteHTML = (eventTimeslots: EventTimeslot[]) => {
  const sortedEventTimeslots = sortEventTimeslots(eventTimeslots);
  let html: string = "";
  sortedEventTimeslots.forEach((event_timeslot) => {
    html += ` <tr><td align="left" style="padding:0;Margin:0">
                <p
                  align="left"
                  style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#2456C8;font-size:14px; font-weight: bold;"
                >
                  ${event_timeslot.title_email}
                </p>
                <p
                  align="center"
                  style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px"
                >
                  ${event_timeslot.description_HTML}
                </p>
              </td></tr> <hr /> <br />`;
  });
  const customisedHTML = customize_filmpresa_html(html);
  return customisedHTML;
};

interface IFimpresaTicketMail {
  ticket: ITicket;
  contact: Contact;
  emails: string[];
  emailHtml: string;
  receipient: FilmpresaReceipient;
}

const processTicketEmail = async (ticketMail: IFimpresaTicketMail) => {
  const { ticket, contact, emails, emailHtml, receipient } = ticketMail;
  const firstName = toTitleCase(contact.first_name as string);
  const ticketName = `${firstName} - ${contact.last_name}`;
  const receipients =
    receipient === "user" ? emails : [bigliettoConfig.ticketEmail];
  const mailSubject =
    receipient === "user"
      ? `Ecco il tuo biglietto per Premio Film Impresa 2024`
      : ticketName;
  const pdfTicket = await generate_filmpresa_ticket({
    type: "base64",
    ticket_id: ticket.id,
    contact: contact,
    event: ticket.event,
  });
  await EmailService.sendEmail(mailProvider, {
    from: `Premio Film Impresa ${bigliettoConfig.email}`,
    subject: mailSubject,
    to: receipients,
    html: emailHtml,
    attachments: [
      {
        name: `Premio Film Impresa - ${ticketName}.pdf`,
        file: pdfTicket,
      },
    ],
  });
};
