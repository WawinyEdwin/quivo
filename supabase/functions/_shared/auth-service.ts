import { decodeJWT } from "./supabase.ts";
import {
  UnauthorizedResponse,
  IRequestAuth,
  BadRequestResponse,
} from "./common.ts";

export function authorizeRequest(requestAuth: IRequestAuth) {
  const {
    req,
    communicationType,
    senderEmail,
    recipientEmail,
    targetWorkspace,
  } = requestAuth;
  const authorization = req.headers.get("Authorization");

  switch (communicationType) {
    case "transactional":
      // custom authorization logic
      break;

    case "campaign":
      // Admin and the person's workspace is the workspace he is sending the e-mail from.
      if (authorization && senderEmail && targetWorkspace) {
        return authorizeAdminUser(authorization, targetWorkspace);
      }
      break;

    case "ticket":
      //  user can send an email only to himself , in case of being anonymous,
      if (authorization) {
        const authorizedAnonymousUser = authorizeAnonymousUser(
          authorization,
          recipientEmail
        );
        if (!(authorizedAnonymousUser instanceof Response)) {
          return authorizedAnonymousUser;
        }

        if (targetWorkspace) {
          const authorizedAdminUser = authorizeAdminUser(
            authorization,
            targetWorkspace
          );
          if (!(authorizedAdminUser instanceof Response)) {
            return authorizedAdminUser;
          }
        }
      }
      break;

    default:
      return new Response(
        JSON.stringify({
          message: "Invalid data",
        }),
        BadRequestResponse
      );
  }

  return new Response(
    JSON.stringify({
      message: "Unauthorized: Authorization header or user email is missing",
    }),
    UnauthorizedResponse
  );
}

export function authorizeAnonymousUser(token: string, recipientEmail: string) {
  const decodedToken = decodeJWT(token);
  const { user, email } = decodedToken;
  if (user === "anonymous" && email === recipientEmail) {
    return decodedToken;
  } else {
    return new Response(
      JSON.stringify({
        message: "Unauthorized: Anonymous authorization failed",
      }),
      UnauthorizedResponse
    );
  }
}

export function authorizeAdminUser(token: string, targetWorkspace: string) {
  const decodedToken = decodeJWT(token);
  const { role, workspace } = decodedToken;
  if (role === "admin" && workspace === targetWorkspace) {
    return decodedToken;
  } else {
    return new Response(
      JSON.stringify({
        message: "unAuthorized: Admin authorization failed",
      }),
      UnauthorizedResponse
    );
  }
}
