import { corsHeaders } from "./cors.ts";

export const jsonHeaders = {
  "Content-Type": "application/json",
};

export const UnauthorizedResponse = {
  headers: {
    ...jsonHeaders,
    ...corsHeaders
  },
  status: 401,
};

export const BadRequestResponse = {
  headers: {
    ...jsonHeaders,
    ...corsHeaders,
  },
  status: 400,
};

export const mailProvider = "mailgun";

export const quivoAddress = "invites@mail.quivo.it";
