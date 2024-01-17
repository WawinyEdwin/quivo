import { createClient } from "@supabase/supabase-js";
import "dotenv/config";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const mailerlite_url = process.env.MAILERLITE_API_URL;
const mailerlite_headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
};

// Bypass 120req/min limit by MailerLite
const requestsPerMinute = 120;
const interval = (60 * 1000) / requestsPerMinute;

const get_email_data = async () => {
  const { data, error } = await supabase.rpc("get_appointment_details");
  if (error) {
    console.log("Supabase Error", error);
  }
  return data;
};

async function sendRequest(data) {
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

const data = await get_email_data();

// The mailerlite API upserts data so running this multiple times
// does not invalidates the records.
async function syncToMailerLite() {
  let index = 0;
  function processNextRecord() {
    if (index < data.length) {
      const obj = data[index];
      const payload = {
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
  return;
}

// Start the script with `node index.js`
syncToMailerLite();
