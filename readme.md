- This edge function is triggered every day at midnight(UTC) by a [cron job](https://github.com/WawinyEdwin/quivo-mailerlitesync/blob/main/sql/sync_to_mailerlite_cron.sql)

- Logs regarding the function can be seen [ here](https://supabase.com/dashboard/project/frdznxvduztcsimohtsa/functions/mailerlitesync/logs?ite=&its=)

- You can invoke the sync manually through the `index.js` script
    - To setup, install the necessary dependencies `npm i`
    - Run the script `node index.js`