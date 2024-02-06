-- Given FK from spreadsheet, find the imported record's actual FK in the DB
CREATE
OR REPLACE FUNCTION import.get_imported_record_fk(search_table_name TEXT, search_id DECIMAL) RETURNS BIGINT AS $ $
SELECT
  fk_id
FROM
  import.import_data
WHERE
  table_name = search_table_name
  AND id = search_id :: BIGINT
LIMIT
  1;

$ $ LANGUAGE SQL;

-- 💣 Delete all data from specified workspace
CREATE
OR REPLACE FUNCTION import.reset_workspace(search_workspace_id BIGINT) RETURNS VOID AS $ $ DECLARE BEGIN
delete from
  associations
where
  workspace_id = search_workspace_id;

delete from
  appointment_emails
where
  appointment_id IN (
    select
      id
    from
      appointments
    where
      workspace_id = search_workspace_id
  );

delete from
  appointments
where
  workspace_id = search_workspace_id;

delete from
  appointment_categories
where
  workspace_id = search_workspace_id;

delete from
  job_title_categories
where
  workspace_id = search_workspace_id;

delete from
  companies
where
  workspace_id = search_workspace_id;

delete from
  company_types
where
  workspace_id = search_workspace_id;

delete from
  contacts
where
  workspace_id = search_workspace_id;

delete from
  contact_statuses
where
  workspace_id = search_workspace_id;

delete from
  personal_titles
where
  workspace_id = search_workspace_id;

delete from
  cinds
where
  workspace_id = search_workspace_id;

delete from
  contact_statuses
where
  workspace_id = search_workspace_id;

delete from
  company_sections
where
  workspace_id = search_workspace_id;

delete from
  associative_status
where
  workspace_id = search_workspace_id;

delete from
  appointment_phones
where
  workspace_id = search_workspace_id;

END $ $ LANGUAGE PLPGSQL VOLATILE;

-- ↔️ Convert each spreadsheet row to a database record in the appropriate table
CREATE
OR REPLACE FUNCTION import.run_import(associated_workspace_id BIGINT) RETURNS VOID AS $ $ DECLARE rec RECORD;

updated_fk_id BIGINT;

BEGIN FOR rec IN (
  SELECT
    id,
    table_name,
    import_row
  FROM
    import.import_data
  ORDER BY
    -- Ensure we read records in correct order to enforce data relationships
    CASE
      table_name
      WHEN 'personal_titles' THEN 10
      WHEN 'contact_statuses' THEN 13
      WHEN 'contacts' THEN 20
      WHEN 'company_types' THEN 30
      WHEN 'associative_status' THEN 33
      WHEN 'company_sections' THEN 37
      WHEN 'companies' THEN 40
      WHEN 'job_title_categories' THEN 50
      WHEN 'cinds' THEN 53
      WHEN 'appointment_categories' THEN 57
      WHEN 'appointments' THEN 60
      WHEN 'associations' THEN 70
      WHEN 'appointment_emails' THEN 80
      WHEN 'appointment_phones' THEN 90
      ELSE 999
    END
) LOOP
SELECT
  NULL INTO updated_fk_id;

-- 📛 personal_titles record
IF (rec.table_name = 'personal_titles') THEN
INSERT INTO
  personal_titles (workspace_id, name)
VALUES
  (
    associated_workspace_id,
    rec.import_row ->> 'name'
  ) ON CONFLICT (workspace_id, name) DO NOTHING RETURNING id INTO updated_fk_id;

-- 🔠 cinds record
ELSIF (rec.table_name = 'cinds') THEN
INSERT INTO
  cinds (workspace_id, name, code)
VALUES
  (
    associated_workspace_id,
    rec.import_row ->> 'name',
    rec.import_row ->> 'code'
  ) ON CONFLICT (workspace_id, name, code) DO NOTHING RETURNING id INTO updated_fk_id;

-- 📝 appointment_categories record
ELSIF (rec.table_name = 'appointment_categories') THEN
INSERT INTO
  appointment_categories (workspace_id, name, color)
VALUES
  (
    associated_workspace_id,
    rec.import_row ->> 'name',
    rec.import_row ->> 'color'
  ) ON CONFLICT (workspace_id, name) DO NOTHING RETURNING id INTO updated_fk_id;

-- 📖 contacts record
ELSIF (rec.table_name = 'contacts') THEN
INSERT INTO
  contacts (
    workspace_id,
    personal_title_id,
    first_name,
    last_name,
    contact_status_id,
    date_of_birth,
    personal_email,
    gender,
    external_code,
    source
  )
VALUES
  (
    associated_workspace_id,
    import.get_imported_record_fk(
      'personal_titles',
      (rec.import_row ->> 'IMPORT_personal_title_id') :: DECIMAL
    ),
    rec.import_row ->> 'first_name',
    rec.import_row ->> 'last_name',
    import.get_imported_record_fk(
      'contact_statuses',
      (rec.import_row ->> 'IMPORT_contact_status_id') :: DECIMAL
    ),
    (rec.import_row ->> 'date_of_birth') :: DATE,
    rec.import_row ->> 'personal_email',
    rec.import_row ->> 'gender',
    rec.import_row ->> 'external_code',
    rec.import_row ->> 'source',
  ) ON CONFLICT (workspace_id, personal_email) DO NOTHING RETURNING id INTO updated_fk_id;

-- 🧾 company_types record
ELSIF (rec.table_name = 'company_types') THEN
INSERT INTO
  company_types (workspace_id, name, description, examples)
VALUES
  (
    associated_workspace_id,
    rec.import_row ->> 'name',
    rec.import_row ->> 'description',
    rec.import_row ->> 'examples'
  ) ON CONFLICT (workspace_id, name) DO NOTHING RETURNING id INTO updated_fk_id;

-- 🏢 companies record
ELSIF (rec.table_name = 'companies') THEN
INSERT INTO
  companies (
    workspace_id,
    company_type_id,
    name,
    address,
    city,
    postal_code,
    region,
    state,
    country,
    email,
    pec,
    vat_number,
    tax_code,
    external_code,
    associative_status_id,
    source,
    company_section_id
  )
VALUES
  (
    associated_workspace_id,
    import.get_imported_record_fk(
      'company_types',
      (rec.import_row ->> 'IMPORT_company_type_id') :: DECIMAL
    ),
    rec.import_row ->> 'company_name',
    rec.import_row ->> 'address',
    rec.import_row ->> 'city',
    rec.import_row ->> 'postal_code',
    rec.import_row ->> 'region',
    rec.import_row ->> 'state',
    rec.import_row ->> 'country',
    rec.import_row ->> 'email',
    rec.import_row ->> 'pec',
    rec.import_row ->> 'vat_number',
    rec.import_row ->> 'tax_code',
    rec.import_row ->> 'external_code',
    import.get_imported_record_fk(
      'associative_status',
      (
        rec.import_row ->> 'IMPORT_associative_status_id'
      ) :: DECIMAL
    ),
    rec.import_row ->> 'source',
    import.get_imported_record_fk(
      'company_sections',
      (
        rec.import_row ->> 'IMPORT_company_section_id'
      ) :: DECIMAL
    ),
  ) ON CONFLICT (workspace_id, name, address) DO NOTHING RETURNING id INTO updated_fk_id;

-- 🏢 job_title_categories record
ELSIF (rec.table_name = 'job_title_categories') THEN
INSERT INTO
  job_title_categories (workspace_id, name, description)
VALUES
  (
    associated_workspace_id,
    rec.import_row ->> 'name',
    rec.import_row ->> 'description'
  ) ON CONFLICT (workspace_id, name) DO NOTHING RETURNING id INTO updated_fk_id;

-- 🏢 appointments record
ELSIF (rec.table_name = 'appointments') THEN
INSERT INTO
  appointments (
    workspace_id,
    contact_id,
    company_id,
    job_title_category_id,
    cind_id,
    appointment_category_id,
    job_office,
    job_title,
    external_code,
    source
  )
VALUES
  (
    associated_workspace_id,
    import.get_imported_record_fk(
      'contacts',
      (rec.import_row ->> 'IMPORT_contact_id') :: DECIMAL
    ),
    import.get_imported_record_fk(
      'companies',
      (rec.import_row ->> 'IMPORT_company_id') :: DECIMAL
    ),
    import.get_imported_record_fk(
      'job_title_categories',
      (
        rec.import_row ->> 'IMPORT_job_title_category_id'
      ) :: DECIMAL
    ),
    import.get_imported_record_fk(
      'cinds',
      (rec.import_row ->> 'IMPORT_cind_id') :: DECIMAL
    ),
    import.get_imported_record_fk(
      'appointment_categories',
      (
        rec.import_row ->> 'IMPORT_appointment_category_id'
      ) :: DECIMAL
    ),
    rec.import_row ->> 'job_office',
    rec.import_row ->> 'job_title',
    rec.import_row ->> 'external_code',
    rec.import_row ->> 'source'
  ) ON CONFLICT (
    workspace_id,
    contact_id,
    company_id,
    cind_id,
    appointment_category_id,
    job_title_category_id
  ) DO NOTHING RETURNING id INTO updated_fk_id;

--- 🏛️ associations record
ELSIF (rec.table_name = 'associations') THEN
INSERT INTO
  associations (workspace_id, name)
VALUES
  (
    associated_workspace_id,
    rec.import_row ->> 'name'
  ) ON CONFLICT (workspace_id, name) DO NOTHING RETURNING id INTO updated_fk_id;

-- ✉️ appointment_emails record
ELSIF (rec.table_name = 'appointment_emails') THEN
INSERT INTO
  appointment_emails (
    appointment_id,
    email,
    is_preferred,
    workspace_id
  )
VALUES
  (
    import.get_imported_record_fk(
      'appointments',
      (rec.import_row ->> 'IMPORT_appointment_id') :: DECIMAL
    ),
    rec.import_row ->> 'email',
    rec.import_row ->> 'is_preferred',
    associated_workspace_id
  ) ON CONFLICT (appointment_id, email) DO NOTHING RETURNING id INTO updated_fk_id;

--- appointment_phones record
ELSIF (rec.table_name = 'appointment_phones') THEN
INSERT INTO
  appointment_phones (
    phone,
    type,
    workspace_id,
    appointment_id
  )
VALUES
  (
    rec.import_row ->> 'phone',
    rec.import_row ->> 'type',
    rec.import_row ->> 'workspace_id',
    import.get_imported_record_fk(
      'appointments',
      (rec.import_row ->> 'IMPORT_appointment_id') :: DECIMAL
    ),
  ) --- associative_status record
  ELSIF (rec.table_name = 'associative_status') THEN
INSERT INTO
  associative_status (name, workspace_id,)
VALUES
  (
    rec.import_row ->> 'name',
    rec.import_row ->> 'workspace_id',
  ) --- company sections record
  ELSIF (rec.table_name = 'company_sections') THEN
INSERT INTO
  company_sections (name, workspace_id,)
VALUES
  (
    rec.import_row ->> 'name',
    rec.import_row ->> 'workspace_id',
  ) --- contact_statuses table
  ELSIF (rec.table_name = 'contact_statuses') THEN
INSERT INTO
  contact_statuses (name, workspace_id)
VALUES
  (
    rec.import_row ->> 'name',
    rec.import_row ->> 'workspace_id'
  ) -- 🤷‍♂️ Raise a warning if the record's table_name is undefined in this script.
  ELSE RAISE WARNING 'Undefined handler for table_name: "%"',
  rec.table_name;

END IF;

UPDATE
  import.import_data
SET
  fk_id = updated_fk_id,
  imported_timestamp = now()
WHERE
  id = rec.id
  AND table_name = rec.table_name
  AND updated_fk_id IS NOT NULL;

END LOOP;

EXCEPTION
WHEN OTHERS THEN RAISE EXCEPTION E 'Error processing "%" record (id: %)\n%\n%',
rec.table_name,
rec.id,
jsonb_pretty(rec.import_row) :: TEXT,
SQLERRM;

END $ $ LANGUAGE PLPGSQL VOLATILE;

CREATE POLICY "Any user can see appointment_emails in their workspaces" ON appointment_emails FOR
SELECT
  USING (
    EXISTS (
      SELECT
        1
      FROM
        appointments a
        JOIN current_user_workspaces cuw ON a.workspace_id = cuw.workspace_id
      WHERE
        a.id = appointment_emails.appointment_id
    )
  );

alter table
  appointments drop constraint unique_workspace_appointments;

alter table
  appointments
add
  constraint unique_workspace_appointments unique (
    workspace_id,
    contact_id,
    company_id,
    cind_id,
    appointment_category_id,
    job_title_id
  );

CREATE POLICY "Admin/ editors can insert appointment_emails in their group" ON appointment_emails FOR
INSERT
  WITH CHECK (
    EXISTS (
      SELECT
        1
      FROM
        appointments a
        JOIN current_user_workspaces cuw ON a.workspace_id = cuw.workspace_id
      WHERE
        a.id = appointment_emails.appointment_id
        AND cuw.role_name IN ('Admin', 'Editor')
    )
  );

CREATE POLICY "Admin/ editors can delete appointment_emails in their group" ON appointment_emails FOR DELETE USING (
  EXISTS (
    SELECT
      1
    FROM
      appointments a
      JOIN current_user_workspaces cuw ON a.workspace_id = cuw.workspace_id
    WHERE
      a.id = appointment_emails.appointment_id
      AND cuw.role_name IN ('Admin', 'Editor')
  )
);