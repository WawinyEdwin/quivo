import { BadRequestResponse, UnauthorizedResponse } from "./constants.ts";
import { decode_jwt } from "./supabase/index.ts";
import { IRequestAuth } from "./types.ts";

export function authorize_request(requestAuth: IRequestAuth) {
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
        return authorize_admin_user(authorization, targetWorkspace);
      }
      break;

    case "ticket":
      //  user can send an email only to himself , in case of being anonymous,
      if (authorization) {
        const authorizedAnonymousUser = authorize_anonymous_user(
          authorization,
          recipientEmail
        );
        if (!(authorizedAnonymousUser instanceof Response)) {
          return authorizedAnonymousUser;
        }

        if (targetWorkspace) {
          const authorizedAdminUser = authorize_admin_user(
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

export function authorize_anonymous_user(
  token: string,
  recipientEmail: string
) {
  const decodedToken = decode_jwt(token);
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

export function authorize_admin_user(token: string, targetWorkspace: string) {
  const decodedToken = decode_jwt(token);
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
