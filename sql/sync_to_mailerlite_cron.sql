select
  cron.schedule(
    'supabase-to-mailerlite-sync',
     '0 0 * * *',
    $$
    select
      net.http_post(
          url:='https://frdznxvduztcsimohtsa.supabase.co/functions/v1/mailerlitesync',
          headers:='{"Content-Type": "application/json", "Authorization": "Bearer <your_service_role_token_here>"}'::jsonb,
      ) as request_id;
    $$
  );
