export const jsonHeaders = {
  "Content-Type": "application/json",
};

export const UnauthorizedResponse = {
  headers: jsonHeaders,
  status: 401,
};

export const BadRequestResponse = {
  headers: jsonHeaders,
  status: 400,
};

export const mailProvider = "mailgun";

export const quivoAddress = "invites@quivo.it";
