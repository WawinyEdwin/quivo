export interface IEmail {
  from: string;
  to: string[];
  subject: string;
  text?: string;
  html?: string;
  attachments?: string[];
}

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

export interface IRequestAuth {
  req: Request;
  communicationType: Communication;
  senderEmail: string;
  recipientEmail: string;
  targetWorkspace: string | undefined;
}

export type Communication = "transactional" | "campaign" | "ticket";
