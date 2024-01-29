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
}

export interface IRsvp {
  appointment_uuid: string;
  response: RsvpReponse;
  job_title: string;
  event_id: number;
}

export type RsvpReponse = "accepted" | "refused";

export type Ticket = Database["public"]["Tables"]["ticket"]["Row"];

export type Apppointment = Database["public"]["Tables"]["appointments"]["Row"];

export type EventAppointmentMeta =
  Database["public"]["Tables"]["event_appointment_meta"]["Row"];

export type ApppointmentEmail =
  Database["public"]["Tables"]["appointment_emails"]["Row"];
