import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import jwt from "npm:jsonwebtoken";
import { UnauthorizedResponse } from "../constants.ts";

console.log(Deno.env.get("SUPABASE_DB_URL"));

const jwtSecret = Deno.env.get("SUPABASE_JWT_SECRET") as string;
const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string;
const _anonKey = Deno.env.get("SUPABASE_ANON_KEY") as string;
const supabaseUrl = Deno.env.get("SUPABASE_URL") as string;
export const supabase = createClient(supabaseUrl, serviceRoleKey);

export function decode_jwt(token: string) {
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
