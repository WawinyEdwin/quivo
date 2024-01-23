The Edge function can be invoked by making a POST call to https://frdznxvduztcsimohtsa.supabase.co/functions/v1/ticket-generation
with a sample data 
```
{
  "type": <text>, // This is the type of generation, <base64, download>  
  "ticket_id": <uuid | ticket.id>,
}
```

Note: An JWT is required for this request. 