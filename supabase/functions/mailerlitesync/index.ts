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
    Quivo_Contact_ID: string;
    Name: string;
    Gender: string;
    Personal_Title: string;
    Date_of_Birth: string;
    Quivo_Appointment_ID: string;
    Company: string;
    Company_ID: string;
    Job_Title: String;
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
          Quivo_Contact_ID: obj.contact_id,
          Name: obj.first_name + " " + obj.last_name,
          Gender: obj.gender,
          Personal_Title: obj.personal_title,
          Date_of_Birth: obj.date_of_birth,
          Quivo_Appointment_ID: obj.appointment_id,
          Company_ID: obj.company_id,
          Company: obj.name,
          Job_Title: obj.job_title,
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
