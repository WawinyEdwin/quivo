import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL"),
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")
);

const mailerlite_url = Deno.env.get("MAILERLITE_API_URL");
const mailerlite_token = Deno.env.get("MAILERLITE_API_KEY");

const mailerlite_headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${mailerlite_token}`,
};

const requestsPerMinute = 120;
const interval = (60 * 1000) / requestsPerMinute;

interface IMailerLiteData {
  email: string;
  fields: {
    first_name: string;
    last_name2: string;
    gender: string;
    personal_title: string;
    date_of_birth: string;
    quivo_appointment_id2: string;
    quivo_contact_id: string;
    company_id: string;
    company_name: string;
    proffesional_title: string;
    contact_status: string;
  };
}

async function sendRequest(data: IMailerLiteData) {
  try {
    const response = await fetch(mailerlite_url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: mailerlite_headers,
    });
    console.log(response.status);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

serve(async (req) => {
  const { data, error } = await supabase.rpc("get_appointment_details");
  if (error) {
    console.error("Supabase RPC error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }

  let index = 0;

  function processNextRecord() {
    if (index < data.length) {
      const obj = data[index];
      const payload: IMailerLiteData = {
        email: obj.email,
        fields: {
          first_name: obj.first_name,
          last_name2: obj.last_name,
          gender: obj.gender,
          personal_title: obj.personal_title,
          date_of_birth: obj.date_of_birth,
          quivo_appointment_id2: obj.appointment_id,
          quivo_contact_id: obj.contact_id,
          company_id: obj.company_id,
          company_name: obj.company_name,
          proffesional_title: obj.job_title,
          contact_status: obj.contact_status,
        },
      };
      sendRequest(payload);
      index++;
      setTimeout(processNextRecord, interval);
    }
  }

  processNextRecord();
  return new Response("OK");
});
