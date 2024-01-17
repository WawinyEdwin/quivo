-- This is the RPC call
BEGIN
RETURN QUERY
select
ae.email, 
c.id as contact_id, 
c.first_name, 
c.last_name,
c.gender, 
c.personal_title, 
c.date_of_birth, 
a.job_title, 
a.id as appointment_id, 
a.company_id, 
cmp.name 
from
contacts c
join appointments a on a.contact_id = c.id
join appointment_emails ae on ae.appointment_id = a.id
join companies cmp on cmp.id = a.company_id
where
a.workspace_id = 114;
END;
