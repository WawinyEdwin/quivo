

Request

```json
{
    "invite": "<appointment_emails.uuid | uuid>",
    "response": "<accepted | text>",
    "job_title": "<appointment.job_title | text> NULLABLE",
    "date_of_birth": "<contact.date_of_birth | text> NULLABLE",
    "event_id": "<event.id | int8>"
}

```

Response - 200

```json
{
    "message": "RSVP ticket is being generated and will be sent shortly"
}

```
