import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { corsHeaders } from "../_shared/cors.ts";
import { IEmail } from "../_shared/types.ts";
import { EmailService } from "../_shared/email-service.ts";

type Communication = "transactional" | "campaign" | "ticket";

interface ICommunication {
  type: Communication; // Will be changed to a more explicit type
  email: IEmail[];
  // Other data
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method === "POST") {
    const comms: ICommunication = await req.json();
    const provider = "mailgun"; // we can set this as an env
    const response = await EmailService.sendEmail(provider, comms.email[0]);
    return new Response(JSON.stringify({ ...response }), {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
      status: 200,
    });
  }

  return new Response(JSON.stringify({ message: "Error sending emails!" }), {
    headers: { ...corsHeaders, "Content-Type": "application/json" },
    status: 500,
  });
});
