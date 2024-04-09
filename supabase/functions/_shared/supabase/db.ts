import { jsonHeaders } from "../constants.ts";
import { corsHeaders } from "../cors.ts";
import {
  Appointment,
  AppointmentEmail,
  Company,
  Contact,
  IAppointment,
  IAppointmentContact,
  IEventAppointmentMeta,
  IEventMeta,
  ITicket,
  ITicketTimeslot,
} from "../types.ts";
import { supabaseAdmin } from "./index.ts";

export async function delete_ticket_timeslots(ticket_id: string) {
  const { error } = await supabaseAdmin
    .from("ticket_timeslot")
    .delete()
    .eq("ticket_id", ticket_id);
  if (error) {
    throw new Response(JSON.stringify({ message: error.message }), {
      headers: { ...corsHeaders, ...jsonHeaders },
      status: 500,
    });
  }
}

export async function create_ticket_timeslot(ticket_timeslot: {
  ticket_id: string;
  event_timeslot_id: number;
}): Promise<ITicketTimeslot> {
  const { data, error } = await supabaseAdmin
    .from("ticket_timeslot")
    .insert([
      {
        ...ticket_timeslot,
      },
    ])
    .select("id, event_timeslot:event_timeslot_id(*)");
  if (error) {
    throw new Response(JSON.stringify({ message: error.message }), {
      headers: { ...corsHeaders, ...jsonHeaders },
      status: 500,
    });
  }
  return data?.[0] as unknown as ITicketTimeslot;
}

export async function create_appointment_email(appointment_email: {
  workspace_id: string;
  appointment_id: number;
  email: string;
}): Promise<AppointmentEmail> {
  const { data, error } = await supabaseAdmin
    .from("appointment_emails")
    .insert([
      {
        ...appointment_email,
      },
    ])
    .select("*");
  if (error) {
    throw new Response(JSON.stringify({ message: error.message }), {
      headers: { ...corsHeaders, ...jsonHeaders },
      status: 500,
    });
  }
  return data?.[0];
}

export async function create_appointment(appointment: {
  workspace_id: string;
  contact_id: number;
  company_id: number;
  job_title: string;
  source: string;
  appointment_category_id?: number;
}): Promise<Appointment> {
  const { data, error } = await supabaseAdmin
    .from("appointments")
    .insert([
      {
        ...appointment,
      },
    ])
    .select("*");
  if (error) {
    throw new Response(JSON.stringify({ message: error.message }), {
      headers: { ...corsHeaders, ...jsonHeaders },
      status: 500,
    });
  }
  return data?.[0];
}

export async function create_company(company: {
  workspace_id: string;
  name: string;
}): Promise<Company> {
  const { data, error } = await supabaseAdmin
    .from("companies")
    .insert([
      {
        ...company,
      },
    ])
    .select("*");
  if (error) {
    throw new Response(JSON.stringify({ message: error.message }), {
      headers: { ...corsHeaders, ...jsonHeaders },
      status: 500,
    });
  }
  return data?.[0];
}

export async function create_contact(contact: {
  workspace_id: string;
  first_name: string;
  last_name: string;
  source: string;
}): Promise<Contact> {
  const { data, error } = await supabaseAdmin
    .from("contacts")
    .insert([
      {
        ...contact,
      },
    ])
    .select("*");
  if (error) {
    throw new Response(JSON.stringify({ message: error.message }), {
      headers: { ...corsHeaders, ...jsonHeaders },
      status: 500,
    });
  }
  return data?.[0];
}

export async function update_contacts(
  contact: Partial<Contact>,
  contact_id: number
): Promise<Contact> {
  const { data, error } = await supabaseAdmin
    .from("contacts")
    .update({ date_of_birth: contact.date_of_birth })
    .eq("id", contact_id)
    .select("*");
  if (error) {
    throw new Response(JSON.stringify({ message: error.message }), {
      headers: { ...corsHeaders, ...jsonHeaders },
      status: 500,
    });
  }
  return data?.[0];
}

export async function create_ticket(ticket: {
  event_id: number;
  appointment_id: number;
}) {
  const { data, error } = await supabaseAdmin
    .from("ticket")
    .insert([
      {
        ...ticket,
        status: "active",
      },
    ])
    .select("id, event:event_id(*), status, entry, created_at, seat_id");
  if (error) {
    throw new Response(JSON.stringify({ message: error.message }), {
      headers: { ...corsHeaders, ...jsonHeaders },
      status: 500,
    });
  }
  return data?.[0] as unknown as ITicket;
}

export async function get_appointment_by_uuid(
  appointment_uuid: string
): Promise<Appointment> {
  const { data, error } = await supabaseAdmin
    .from("appointments")
    .select("*")
    .eq("uuid", appointment_uuid);
  if (error) {
    throw new Response(JSON.stringify({ message: error.message }), {
      headers: { ...corsHeaders, ...jsonHeaders },
      status: 500,
    });
  }
  return data?.[0];
}

export async function update_appointment_by_uuid(
  job_title: string,
  appointment_uuid: string
): Promise<Appointment> {
  const { data, error } = await supabaseAdmin
    .from("appointments")
    .update({ job_title: job_title })
    .eq("uuid", appointment_uuid)
    .select("*")
    .single();
  if (error) {
    throw new Response(JSON.stringify({ message: error.message }), {
      headers: { ...corsHeaders, ...jsonHeaders },
      status: 500,
    });
  }
  return data;
}

export async function create_appointment_meta(
  eventMeta: IEventMeta
): Promise<IEventAppointmentMeta> {
  const { data, error } = await supabaseAdmin
    .from("event_appointment_meta")
    .insert({ ...eventMeta })
    .select(`id, status, event:event_appointment_meta_event_id_fkey(*)`);
  if (error) {
    throw new Response(JSON.stringify({ message: error.message }), {
      headers: { ...corsHeaders, ...jsonHeaders },
      status: 500,
    });
  }
  return data?.[0] as unknown as IEventAppointmentMeta;
}

export const update_appointment_meta = async (
  id: number,
  eventMeta: Partial<IEventMeta>
) => {
  return await supabaseAdmin
    .from("event_appointment_meta")
    .update({ ...eventMeta })
    .eq("id", id)
    .select(`id, status, event:event_appointment_meta_event_id_fkey(*)`);
};

export async function get_appointment_email_by_appointment_email_uuid(
  appointment_email_uuid: string
): Promise<AppointmentEmail> {
  const { data, error } = await supabaseAdmin
    .from("appointment_emails")
    .select("*")
    .eq("uuid", appointment_email_uuid);
  if (error) {
    throw new Response(JSON.stringify({ message: error.message }), {
      headers: { ...corsHeaders, ...jsonHeaders },
      status: 500,
    });
  }
  return data?.[0] as unknown as AppointmentEmail;
}

export async function get_ticket_by_appointment_id(appointment_id: number) {
  const { data, error } = await supabaseAdmin
    .from("ticket")
    .select("id, event:event_id(*), status, entry, created_at, seat_id")
    .eq("appointment_id", appointment_id);
  if (error) {
    throw new Response(JSON.stringify({ message: error.message }), {
      headers: { ...corsHeaders, ...jsonHeaders },
      status: 500,
    });
  }
  return data?.[0] as unknown as ITicket;
}

export async function find_appointment_by_appointment_email_uuid(
  appointmentEmailUuid: string
) {
  const { data, error } = await supabaseAdmin
    .from("appointment_emails")
    .select(
      `appointment:appointment_email_appointment_id_fkey (id, contact:appointments_contact_id_fkey(*))`
    )
    .eq("uuid", appointmentEmailUuid);
  if (error) {
    throw new Response(JSON.stringify({ message: error.message }), {
      headers: { ...corsHeaders, ...jsonHeaders },
      status: 500,
    });
  }
  return data?.[0] as unknown as IAppointmentContact;
}

export async function get_appointment_by_id(appointment_id: number) {
  const { data, error } = await supabaseAdmin
    .from("appointments")
    .select(`id, contact:appointments_contact_id_fkey(*)`)
    .eq("id", appointment_id);
  if (error) {
    throw new Response(JSON.stringify({ message: error.message }), {
      headers: { ...corsHeaders, ...jsonHeaders },
      status: 500,
    });
  }
  return data?.[0] as unknown as IAppointment;
}

export async function get_contact_by_id(contact_id: number): Promise<Contact> {
  const { data, error } = await supabaseAdmin
    .from("contacts")
    .select("*")
    .eq("id", contact_id);
  if (error) {
    throw new Response(JSON.stringify({ message: error.message }), {
      headers: { ...corsHeaders, ...jsonHeaders },
      status: 500,
    });
  }
  return data?.[0];
}

export async function get_appointment_emails_by_appointment_id(
  appointment_id: number
) {
  const { data, error } = await supabaseAdmin
    .from("appointment_emails")
    .select("*")
    .eq("appointment_id", appointment_id);

  if (error) {
    throw new Response(JSON.stringify({ message: error.message }), {
      headers: { ...corsHeaders, ...jsonHeaders },
      status: 500,
    });
  }
  return data as unknown as AppointmentEmail[];
}

export const get_ticket_by_id = async (ticket_id: string) => {
  const { data, error } = await supabaseAdmin
    .from("ticket")
    .select(
      "id, appointment_id, event:public_ticket_event_id_fkey(*), status, entry, created_at, seat_id"
    )
    .eq("id", ticket_id)
    .single();
  if (error) {
    throw new Response(JSON.stringify({ message: error.message }), {
      headers: { ...corsHeaders, ...jsonHeaders },
      status: 500,
    });
  }
  return data as unknown as ITicket;
};
