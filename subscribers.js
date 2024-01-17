import "dotenv/config";

const mailerlite_url = process.env.MAILERLITE_API_URL;
const mailerlite_headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
};

async function getSubscriber() {
  try {
    const response = await fetch(mailerlite_url, {
      method: "GET",
      headers: mailerlite_headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const subscriberData = await response.json();
    console.log("Subscriber data:", subscriberData["data"]);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

getSubscriber();
