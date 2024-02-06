# Import script

This script imports data from an Excel spreadsheet into the database.

The script will import records into a staging table: `import.import_data`.

This staging table is then used to populate the main tables in the database by calling a function: `import.run_import(<workspace_id>)`.

## Setup

Install dependencies:

```
pip install pandas psycopg2 openpyxl
```

Rename `.env.example` to `.env` and replace the database connection values with your own.

## Running the script:

Example:
```
python3 import-data.py --spreadsheet=db-with-magic.xlsx --workspace-id=114 --reset-workspace --verbose
```
❗ Important: Convert all Excel formulas to values before running the script. Otherwise, the script will not be able to read the data correctly.  

❗ Important: Altering column names will break the import process. The `run_import` function in the database uses the column names to map the data to the correct columns in the database.

## Command Line Parameters:

`--spreadsheet`: Path to the Excel spreadsheet that you want to import. 

`--workspace-id`: Indicates the workspace ID where the data should be imported. For example, `--workspace-id=114`` specifies workspace `114``.

`--reset-workspace`: (Optional) If provided, this flag indicates that the workspace specified by --workspace-id should be reset prior to the import. It triggers the `import.reset_workspace(<workspace_id>)` function in the database.

`--verbose`: (Optional) If included, the script will print detailed logging information during its execution.
