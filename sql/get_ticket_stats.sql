drop function if exists get_ticket_stats(event_id int);

CREATE OR REPLACE FUNCTION get_ticket_stats(event_id int)
RETURNS JSON AS $$
DECLARE
    stats_json JSON;
    total_tickets_issued int;
    checked_in_tickets int;
    vip_tickets_issued int;
    vip_tickets_checked_in int;
    vip_journalist_tickets_issued int;
    vip_journalist_tickets_checked_in int;
    external_tickets_issued int;
    external_tickets_checked_in int;
    company_tickets_issued int;
    company_tickets_checked_in int;
BEGIN
    SELECT COUNT(*) INTO total_tickets_issued
    FROM public.ticket
    WHERE public.ticket.event_id = $1;

    SELECT COUNT(*) INTO checked_in_tickets
    FROM public.ticket
    WHERE public.ticket.event_id = $1 AND entry IS NOT NULL;

    SELECT COUNT(*) INTO external_tickets_issued
    FROM public.ticket
    WHERE public.ticket.event_id = $1 AND appointment_id IN (
        SELECT id FROM public.appointments WHERE appointment_category_id = 661
    );

    SELECT COUNT(*) INTO external_tickets_checked_in
    FROM public.ticket
    WHERE public.ticket.event_id = $1 AND appointment_id IN (
        SELECT id FROM public.appointments WHERE appointment_category_id = 661
    ) AND entry IS NOT NULL;

    SELECT COUNT(*) INTO vip_journalist_tickets_checked_in
    FROM public.ticket
    WHERE public.ticket.event_id = $1 AND appointment_id IN (
        SELECT id FROM public.appointments WHERE appointment_category_id = 663
    ) AND entry IS NOT NULL;

      SELECT COUNT(*) INTO vip_journalist_tickets_issued
    FROM public.ticket
    WHERE public.ticket.event_id = $1 AND appointment_id IN (
        SELECT id FROM public.appointments WHERE appointment_category_id = 663
    );

    SELECT COUNT(*) INTO vip_tickets_issued
    FROM public.ticket
    WHERE public.ticket.event_id = $1 AND appointment_id IN (
        SELECT id FROM public.appointments WHERE appointment_category_id = 660
    );

    SELECT COUNT(*) INTO vip_tickets_checked_in
    FROM public.ticket
    WHERE public.ticket.event_id = $1 AND appointment_id IN (
        SELECT id FROM public.appointments WHERE appointment_category_id = 660
    ) AND entry IS NOT NULL;

     SELECT COUNT(*) INTO company_tickets_issued
    FROM public.ticket
    WHERE public.ticket.event_id = $1 AND appointment_id IN (
        SELECT id FROM public.appointments WHERE appointment_category_id = 662
    );

    SELECT COUNT(*) INTO company_tickets_checked_in
    FROM public.ticket
    WHERE public.ticket.event_id = $1 AND appointment_id IN (
        SELECT id FROM public.appointments WHERE appointment_category_id = 662
    ) AND entry IS NOT NULL;

    stats_json := json_build_object(
        'total_tickets_issued', total_tickets_issued,
        'checked_in_tickets', checked_in_tickets,
        'vip_tickets_issued', vip_tickets_issued,
        'vip_tickets_checked_in', vip_tickets_checked_in,
        'vip_journalist_tickets_issued', vip_journalist_tickets_issued,
        'vip_journalist_tickets_checked_in', vip_journalist_tickets_checked_in,
        'external_tickets_issued', external_tickets_issued,
        'external_tickets_checked_in', external_tickets_checked_in,
        'company_tickets_issued', company_tickets_issued,
        'company_tickets_checked_in', company_tickets_checked_in
    );

    RETURN stats_json;
END;
$$ LANGUAGE plpgsql;
