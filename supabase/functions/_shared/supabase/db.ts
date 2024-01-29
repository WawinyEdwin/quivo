import { BadRequestResponse } from "../constants.ts";
import {
  Apppointment,
  ApppointmentEmail,
  EventAppointmentMeta,
  ITicket,
  Ticket,
} from "../types.ts";
import { supabase } from "./index.ts";

export async function create_ticket(
  ticket: Omit<ITicket, "id">
): Promise<Ticket> {
  const { data, error } = await supabase
    .from("ticket")
    .insert([
      {
        ...ticket,
      },
    ])
    .select("*");
  if (error) {
    console.log(error);
    throw new Response(
      JSON.stringify({ message: "Error creating the ticket" }),
      BadRequestResponse
    );
  }
  return data?.[0];
}

export async function get_appointment_by_id(
  appointment_id: string
): Promise<Apppointment> {
  const { data, error } = await supabase
    .from("appointments")
    .select("*")
    .eq("id", appointment_id);
  if (error) {
    console.log("here");
    console.log(error.details);
    throw new Response(
      JSON.stringify({ message: "Error fetching appointment" }),
      BadRequestResponse
    );
  }
  return data?.[0];
}

export async function update_appointment(
  job_title: string,
  appointment_uuid: string
): Promise<Apppointment> {
  const { data, error } = await supabase
    .from("appointments")
    .update({ job_title: job_title })
    .eq("id", appointment_uuid)
    .select("*");
  if (error) {
    console.log(error);
    throw new Response(
      JSON.stringify({ message: "Error updating appointment" }),
      BadRequestResponse
    );
  }
  return data?.[0];
}

export async function update_appointment_meta(
  status: string,
  event_id: number
): Promise<EventAppointmentMeta> {
  const { data, error } = await supabase
    .from("event_appointment_meta")
    .update({ status })
    .eq("event_id", event_id)
    .select("*");
  if (error) {
    console.log(error);
    throw new Response(
      JSON.stringify({ message: "Error updating appointment metadata" }),
      BadRequestResponse
    );
  }
  return data?.[0];
}

export async function get_appointment_emails_by_appointment_id(
  appointment_id: number
): Promise<Partial<ApppointmentEmail>> {
  const { data, error } = await supabase
    .from("appointment_emails")
    .select("email")
    .eq("id", appointment_id);
  if (error) {
    console.log(error);
    throw new Response(
      JSON.stringify({ message: "Error fetching appointment emails" }),
      BadRequestResponse
    );
  }
  return data?.[0];
}
