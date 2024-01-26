import jwt from "npm:jsonwebtoken";
import { UnauthorizedResponse } from "./common.ts";

const jwtSecret = Deno.env.get("SUPABASE_JWT_SECRET") as string;

export function decodeJWT(token: string) {
  try {
    return jwt.verify(token, jwtSecret);
  } catch (error) {
    console.log(error);
    throw new Response(
      JSON.stringify({ message: "Invalid Token Provided" }),
      UnauthorizedResponse
    );
  }
}
