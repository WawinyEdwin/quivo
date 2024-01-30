import { encodeBase64 } from "https://deno.land/std@0.212.0/encoding/base64.ts";
import { corsHeaders } from "./cors.ts";
import { IEmail } from "./types.ts";

const DOMAIN = Deno.env.get("MAILGUN_DOMAIN") as string;
const API_URL = Deno.env.get("MAILGUN_API_URL") as string;
const API_KEY = Deno.env.get("MAILGUN_API_KEY") as string;

export class EmailService {
  // deno-lint-ignore no-explicit-any
  private static providers: Record<string, (email: IEmail) => Promise<any>> = {
    mailgun: EmailService.sendMailgunEmail,
    // We can add as may providers as we want
    // And plug in new ones effortlessly
  };

  public static sendEmail(provider: string, email: IEmail) {
    if (!this.providers[provider]) {
      throw new Error(`Provider '${provider}' not supported.`);
    }
    return this.providers[provider](email);
  }

  private static async sendMailgunEmail(
    email: IEmail
  ): Promise<{ id: string; message: string }> {
    const MESSAGES_URL = `${API_URL}/v3/${DOMAIN}/messages`;
    const credentials = encodeBase64(`api:${API_KEY}`);
    const mailgun_headers = {
      Authorization: "Basic " + credentials,
    };

    const formData = new FormData();
    formData.append("from", email.from);
    email.to.forEach((recipient) => formData.append("to", recipient));
    formData.append("subject", email.subject);
    if (email.text) formData.append("text", email.text);
    if (email.html) formData.append("html", email.html);
    if (email.attachments) {
      email.attachments.forEach((attachment) =>
        formData.append(
          "attachment",
          new File([attachment.file], attachment.name)
        )
      );
    }

    try {
      const response = await fetch(MESSAGES_URL, {
        method: "POST",
        headers: mailgun_headers,
        body: formData,
      });
      return await response.json();
    } catch (error) {
      console.error(error);
      throw new Response("Error, sending communication!", {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      });
    }
  }
}
