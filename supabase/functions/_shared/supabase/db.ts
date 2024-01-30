import {
  Appointment,
  ApppointmentEmail,
  EventAppointmentMeta,
  Ticket,
} from "../types.ts";
import { supabaseAdmin } from "./index.ts";

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
    .select("*");
  if (error) {
    console.log(error);
  }
  return data?.[0];
}

export async function create_appointment_meta(
  status: string,
  event_id: number,
  appointment_id: number
): Promise<EventAppointmentMeta> {
  const { data, error } = await supabaseAdmin
    .from("event_appointment_meta")
    .insert({ status, event_id, appointment_id })
    .select("*");
  if (error) {
    console.log(error);
  }
  return data?.[0];
}

export async function get_appointment_emails_by_appointment_id(
  appointment_id: number
): Promise<ApppointmentEmail> {
  const { data, error } = await supabaseAdmin
    .from("appointment_emails")
    .select("*")
    .eq("appointment_id", appointment_id);
  if (error) {
    console.log(error);
  }
  return data?.[0];
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
