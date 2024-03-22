import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { encodeBase64 } from "https://deno.land/std@0.212.0/encoding/base64.ts";
import { corsHeaders } from "../_shared/cors.ts";
import { generate_ticket } from "../_shared/ticket.ts";
import { ITicketData } from "../_shared/types.ts";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method === "POST") {
    const ticketData: ITicketData = await req.json();
    const ticket = await generate_ticket(ticketData);
    if (ticket) {
      const base64Ticket = encodeBase64(ticket);
      if (ticketData.type === "base64") {
        return new Response(JSON.stringify({ pdfBase64: base64Ticket }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        });
      }
      if (ticketData.type === "download") {
        return new Response(ticket, {
          headers: {
            ...corsHeaders,
            "Content-Type": "application/pdf",
            "Content-Disposition": `attachment; filename="test.pdf"`,
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
