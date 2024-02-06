import pandas as pd
import psycopg2
import simplejson as json
import os
from dotenv import load_dotenv
import argparse
import numpy
from psycopg2.extensions import register_adapter, AsIs

# Register custom adapters for NumPy float64 and int64 types with psycopg2
# This allows psycopg2 to properly handle NumPy numerical types when inserting data into PostgreSQL
def addapt_numpy_float64(numpy_float64):
    return AsIs(numpy_float64)
def addapt_numpy_int64(numpy_int64):
    return AsIs(numpy_int64)
register_adapter(numpy.float64, addapt_numpy_float64)
register_adapter(numpy.int64, addapt_numpy_int64)

load_dotenv()

DB_CONFIG = {
    'dbname': os.environ.get('DB_NAME', 'postgres'),
    'user': os.environ.get('DB_USER', 'postgres'),
    'password': os.environ.get('DB_PASSWORD'),
    'host': os.environ.get('DB_HOST'),
    'port': os.environ.get('DB_PORT', '5432')
}

def import_data_from_sheet(cursor, spreadsheet_path, sheet_name, verbose_mode):
    df = pd.read_excel(spreadsheet_path, sheet_name=sheet_name, engine='openpyxl')

    # Convert date columns to string format (ISO format)
    for col in df.select_dtypes(include=['datetime']).columns:
        df[col] = df[col].dt.strftime('%Y-%m-%d')

    print(f"⏬ Importing {sheet_name} sheet into staging table (\"import.import_data\")...")

    for _, row in df.iterrows():
        # Assume first column is the import ID
        import_id = row.iloc[0]
        data_json = json.dumps(row.to_dict(), ignore_nan=True)

        insert_sql = """INSERT INTO import.import_data (id, import_row, table_name) VALUES (%s, %s, %s);"""

        if verbose_mode:
          print(f"{insert_sql % (import_id, data_json, sheet_name)}")
              
        cursor.execute(insert_sql, (import_id, data_json, sheet_name))

def main(workspace_id, spreadsheet, reset_workspace, verbose_mode):
    conn = psycopg2.connect(**DB_CONFIG)
    cursor = conn.cursor()

    print(f"📦 Workspace ID: {workspace_id}")

    xls = pd.ExcelFile(spreadsheet)
    sheet_names = xls.sheet_names
    
    print(f"🧹 Cleaning staging table ...")
    cursor.execute(f"DELETE FROM import.import_data;")

    for sheet_name in sheet_names:
        import_data_from_sheet(cursor, spreadsheet, sheet_name, verbose_mode)

    conn.commit()
    print(f"💾 Committed staging data.")

    if reset_workspace:
        print(f"💣 Resetting workspace ...")
        cursor.execute(f"SELECT import.reset_workspace({workspace_id});")

    print(f"🌪️ Performing data transformation ...")
    cursor.execute(f"SELECT import.run_import({workspace_id});")

    print(f"✅ Import complete for workspace {workspace_id}")

    conn.commit()
    cursor.close()
    conn.close()

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Data import script')
    parser.add_argument('--workspace-id', type=int, required=True, help='The workspace ID')
    parser.add_argument('--reset-workspace', action='store_true', help='Whether to reset workspace or not')
    parser.add_argument('--spreadsheet', type=str, required=True, help='Path to spreadsheet')
    parser.add_argument('--verbose', action='store_true', help='Output SQL statements')

    args = parser.parse_args()

    main(args.workspace_id, args.spreadsheet, args.reset_workspace, args.verbose)