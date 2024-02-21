import {
  Appointment,
  AppointmentEmail,
  Contact,
  IAppointmentContact,
  IEventAppointmentMeta,
  IEventMeta,
  Ticket,
} from "../types.ts";
import { supabaseAdmin } from "./index.ts";

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
    console.log(error);
  }
  return data?.[0];
}

export async function create_ticket(ticket: {
  event_id: number;
  appointment_id: number;
}): Promise<Ticket> {
  const { data, error } = await supabaseAdmin
    .from("ticket")
    .insert([
      {
        ...ticket,
        status: "active",
      },
    ])
    .select("*");
  if (error) {
    console.log(error);
  }
  return data?.[0];
}

export async function get_appointment_by_uuid(
  appointment_uuid: string
): Promise<Appointment> {
  const { data, error } = await supabaseAdmin
    .from("appointments")
    .select("*")
    .eq("uuid", appointment_uuid);
  if (error) {
    console.log(error);
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
    console.log("Update Appointment", error);
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
    console.log("Create Appointment Meta", error);
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
    console.log(error);
  }
  return data?.[0] as unknown as AppointmentEmail;
}

export async function get_ticket_by_appointment_id(
  appointment_id: number
): Promise<Ticket> {
  const { data, error } = await supabaseAdmin
    .from("ticket")
    .select("*")
    .eq("appointment_id", appointment_id);
  if (error) {
    console.log(error);
  }
  return data?.[0];
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
    console.log(error);
  }
  return data?.[0] as unknown as IAppointmentContact;
}

export async function get_appointment_by_id(appointment_id: number) {
  const { data, error } = await supabaseAdmin
    .from("appointments")
    .select(`id, contact:appointments_contact_id_fkey(*)`)
    .eq("id", appointment_id);
  if (error) {
    console.log(error);
  }
  return data?.[0] as unknown as Appointment;
}

export async function get_contact_by_id(contact_id: number): Promise<Contact> {
  const { data, error } = await supabaseAdmin
    .from("contacts")
    .select("*")
    .eq("id", contact_id);
  if (error) {
    console.log(error);
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
    console.log(error);
  }
  return data as unknown as AppointmentEmail[];
}
