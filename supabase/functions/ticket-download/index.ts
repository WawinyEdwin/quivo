import { encodeBase64 } from "https://deno.land/std@0.212.0/encoding/base64.ts";
import { corsHeaders } from "../_shared/cors.ts";
import {
  get_appointment_by_id,
  get_ticket_by_id,
} from "../_shared/supabase/db.ts";
import { generate_ticket } from "../_shared/ticket.ts";
import { ITicketData } from "../_shared/types.ts";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("Ok", { headers: corsHeaders });
  }

  if (req.method === "POST") {
    const { ticket_id, type } = await req.json();
    if (!ticket_id) {
      return new Response("Ticket ID is required", {
        status: 400,
        headers: { ...corsHeaders },
      });
    }

    const ticketInfo = await get_ticket_by_id(ticket_id);
    if (!ticketInfo) {
      return new Response("Ticket not found", {
        status: 404,
        headers: { ...corsHeaders },
      });
    }

    const appointment = await get_appointment_by_id(ticketInfo.appointment_id);
    const ticketData: ITicketData = {
      type,
      ticket_id,
      event: ticketInfo.event,
      contact: appointment.contact,
    };
    const ticketBuffer = await generate_ticket(ticketData);
    
    if (ticketBuffer) {
      const base64Ticket = encodeBase64(ticketBuffer);
      if (ticketData.type === "base64") {
        return new Response(JSON.stringify({ pdfBase64: base64Ticket }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        });
      }

      if (ticketData.type === "download") {
        return new Response(ticketBuffer, {
          headers: {
            ...corsHeaders,
            "Content-Type": "application/pdf",
            "Content-Disposition": `attachment; filename="${ticketData.ticket_id}.pdf"`,
          },
          status: 200,
        });
      }
    }
  }
  return new Response(JSON.stringify({ message: "Error Generating Ticket" }), {
    headers: { ...corsHeaders, "Content-Type": "application/json" },
    status: 500,
  });
});
