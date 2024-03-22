import { Database } from "./supabase/types.ts";

export interface IEmail {
  from: string;
  to: string[];
  subject: string;
  text?: string;
  html?: string;
  attachments?: {
    name: string;
    file: Uint8Array;
  }[];
}

export interface IRequestAuth {
  req: Request;
  communicationType: Communication;
  senderEmail: string;
  recipientEmail: string;
  targetWorkspace: string | undefined;
}

export type Communication = "transactional" | "campaign" | "ticket";

export interface ITicket {
  appointment_id: number;
  event_id: number;
  status: string;
  id: string;
}

export type TicketGeneration = "base64" | "download";

export interface ITicketData {
  type: TicketGeneration;
  ticket_id: string;
  event: Event;
  contact: Contact;
}

export interface IRsvp {
  appointment_uuid?: string;
  invite: string;
  response: RsvpReponse;
  job_title?: string;
  date_of_birth?: string;
  event_id: number;
}

export type EventTimeslot =
  Database["public"]["Tables"]["event_timeslot"]["Row"];

export type Company = Database["public"]["Tables"]["companies"]["Row"];

export type Event = Database["public"]["Tables"]["event"]["Row"];

export type RsvpReponse = "accepted" | "refused" | "resent";

export type Ticket = Database["public"]["Tables"]["ticket"]["Row"];

export type Appointment = Database["public"]["Tables"]["appointments"]["Row"];

export type EventAppointmentMeta =
  Database["public"]["Tables"]["event_appointment_meta"]["Row"];

export type AppointmentEmail =
  Database["public"]["Tables"]["appointment_emails"]["Row"];

export type Contact = Database["public"]["Tables"]["contacts"]["Row"];

export interface ITicketTimeslot {
  id: number;
  event_timeslot: EventTimeslot;
}

export interface IEventAppointmentMeta {
  id: number;
  status: string;
  event: Event;
}

export interface IAppointmentContact {
  appointment: {
    id: number;
    contact: Contact;
  };
}

export interface IEventMeta {
  status: string;
  event_id: number;
  appointment_id: number;
  action: string;
  conferma?: string;
  note?: string;
  appointment_email: number;
  email_sent?: boolean;
}

export interface IAppointment {
  id: number;
  contact: Contact;
}

export interface ITicket {
  id: string;
  appointment_id: number;
  event: Event;
  status: string;
  entry: string;
  created_at: string;
  seat_id: string;
}
