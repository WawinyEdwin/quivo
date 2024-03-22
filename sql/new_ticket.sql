CREATE OR REPLACE FUNCTION check_ticket(event_id bigint, appointment_ids bigint[]) 
RETURNS JSON AS $$
DECLARE
    ticket JSON;
    app_id bigint;
BEGIN
    ticket := '[]'::JSON;

    FOREACH app_id IN ARRAY appointment_ids LOOP
        IF NOT EXISTS (
            SELECT 1
            FROM ticket
            WHERE ticket.event_id = $1 AND ticket.appointment_id = app_id
        ) THEN
            INSERT INTO ticket (event_id, appointment_id)
            VALUES ($1, app_id);
        END IF;
    END LOOP;

    SELECT json_agg(t) INTO ticket
    FROM (
        SELECT *
        FROM ticket 
        WHERE ticket.appointment_id = ANY ($2) AND ticket.event_id = $1
    ) t;

    RETURN ticket;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
