drop  function get_appointment_details();

CREATE OR REPLACE FUNCTION get_appointment_details()
RETURNS TABLE (
  email TEXT,
  contact_id BIGINT,
  first_name TEXT,
  last_name TEXT,
  gender TEXT,
  personal_title TEXT,
  date_of_birth DATE,
  contact_status contact_status_type,
  job_title TEXT,
  appointment_id BIGINT,
  company_id BIGINT,
  company_name TEXT
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    ae.email, 
    c.id as contact_id, 
    c.first_name,
    c.last_name, 
    c.gender, 
    c.personal_title, 
    c.date_of_birth, 
    c.contact_status, 
    a.job_title, 
    a.id as appointment_id, 
    a.company_id, 
    cmp.name 
  FROM
    contacts c
    JOIN appointments a ON a.contact_id = c.id
    JOIN appointment_emails ae ON ae.appointment_id = a.id
    JOIN companies cmp ON cmp.id = a.company_id
  WHERE
    a.workspace_id = 114;
END;
$$ LANGUAGE plpgsql;
