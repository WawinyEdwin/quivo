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
    console.log(response.json())
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
