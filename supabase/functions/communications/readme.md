The Edge function can be invoked by making a POST call to https://frdznxvduztcsimohtsa.supabase.co/functions/v1/communications
with a sample data 
```
{
    "type": "communication",
    "email": [
        {
            "from": "<an_email_to_represent>",
            "to": [
                "<email_for_the_recipient>"
            ],
            "subject": "<email_subject>",
            "html": "<optional: an html_template_string>"
            "text": "<optional: email_text_content>
        }
    ]
}
```

Note: An JWT is required for this request. 