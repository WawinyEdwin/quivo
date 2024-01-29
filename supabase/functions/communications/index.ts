import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { authorize_request } from "../_shared/auth-service.ts";
import { jsonHeaders } from "../_shared/constants.ts";
import { corsHeaders } from "../_shared/cors.ts";
import { EmailService } from "../_shared/email-service.ts";
import { Communication, IEmail, IRequestAuth } from "../_shared/types.ts";

interface ICommunication {
  type: Communication; // Will be changed to a more explicit type
  email: IEmail[];
  workspace?: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method === "POST") {
    const comms: ICommunication = await req.json();
    const requestAuth: IRequestAuth = {
      req,
      communicationType: comms.type,
      senderEmail: comms.email[0].from,
      recipientEmail: comms.email[0].to[0],
      targetWorkspace: comms.workspace,
    };
    const _authorizedUser = authorize_request(requestAuth);
    const provider = "mailgun"; // we can set this as an env
    const response = await EmailService.sendEmail(provider, comms.email[0]);
    return new Response(JSON.stringify({ message: response.message }), {
      headers: {
        ...corsHeaders,
        ...jsonHeaders,
      },
      status: 200,
    });
  }

  return new Response(JSON.stringify({ message: "Error sending emails!" }), {
    headers: { ...corsHeaders, ...jsonHeaders },
    status: 500,
  });
});
