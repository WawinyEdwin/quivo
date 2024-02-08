export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      appointment_categories: {
        Row: {
          can_vote: boolean | null;
          code: string | null;
          color: string | null;
          created_at: string;
          id: number;
          is_active: boolean | null;
          label: string | null;
          letter: string | null;
          name: string | null;
          type: string | null;
          workspace_id: number | null;
        };
        Insert: {
          can_vote?: boolean | null;
          code?: string | null;
          color?: string | null;
          created_at?: string;
          id?: number;
          is_active?: boolean | null;
          label?: string | null;
          letter?: string | null;
          name?: string | null;
          type?: string | null;
          workspace_id?: number | null;
        };
        Update: {
          can_vote?: boolean | null;
          code?: string | null;
          color?: string | null;
          created_at?: string;
          id?: number;
          is_active?: boolean | null;
          label?: string | null;
          letter?: string | null;
          name?: string | null;
          type?: string | null;
          workspace_id?: number | null;
        };
        Relationships: [];
      };
      appointment_emails: {
        Row: {
          appointment_id: number;
          email: string | null;
          id: number;
          is_preferred: boolean;
          workspace_id: number | null;
        };
        Insert: {
          appointment_id: number;
          email?: string | null;
          id?: number;
          is_preferred?: boolean;
          workspace_id?: number | null;
        };
        Update: {
          appointment_id?: number;
          email?: string | null;
          id?: number;
          is_preferred?: boolean;
          workspace_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "appointment_email_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "appointments";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "appointment_emails_workspace_id_fkey";
            columns: ["workspace_id"];
            isOneToOne: false;
            referencedRelation: "workspace_members_view";
            referencedColumns: ["workspace_id"];
          },
          {
            foreignKeyName: "appointment_emails_workspace_id_fkey";
            columns: ["workspace_id"];
            isOneToOne: false;
            referencedRelation: "workspaces";
            referencedColumns: ["id"];
          }
        ];
      };
      appointment_list: {
        Row: {
          appointment_id: number | null;
          id: number;
          list_id: number | null;
        };
        Insert: {
          appointment_id?: number | null;
          id?: number;
          list_id?: number | null;
        };
        Update: {
          appointment_id?: number | null;
          id?: number;
          list_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "appointment_list_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "appointments";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "appointment_list_list_id_fkey";
            columns: ["list_id"];
            isOneToOne: false;
            referencedRelation: "invited_lists";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "appointment_list_list_id_fkey";
            columns: ["list_id"];
            isOneToOne: false;
            referencedRelation: "list";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "appointment_list_list_id_fkey";
            columns: ["list_id"];
            isOneToOne: false;
            referencedRelation: "selected_invited_lists";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "appointment_list_list_id_fkey";
            columns: ["list_id"];
            isOneToOne: false;
            referencedRelation: "selected_invited_lists_detail";
            referencedColumns: ["id"];
          }
        ];
      };
      appointment_phones: {
        Row: {
          appointment_id: number | null;
          created_at: string;
          id: number;
          phone: string | null;
          type: string | null;
          workspace_id: number | null;
        };
        Insert: {
          appointment_id?: number | null;
          created_at?: string;
          id?: number;
          phone?: string | null;
          type?: string | null;
          workspace_id?: number | null;
        };
        Update: {
          appointment_id?: number | null;
          created_at?: string;
          id?: number;
          phone?: string | null;
          type?: string | null;
          workspace_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "appointment_phones_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "appointments";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "appointment_phones_workspace_id_fkey";
            columns: ["workspace_id"];
            isOneToOne: false;
            referencedRelation: "workspace_members_view";
            referencedColumns: ["workspace_id"];
          },
          {
            foreignKeyName: "appointment_phones_workspace_id_fkey";
            columns: ["workspace_id"];
            isOneToOne: false;
            referencedRelation: "workspaces";
            referencedColumns: ["id"];
          }
        ];
      };
      appointments: {
        Row: {
          appointment_category_id: number | null;
          cind_id: number | null;
          company_id: number | null;
          contact_id: number | null;
          created_at: string;
          external_code: string | null;
          id: number;
          job_office: string | null;
          job_title: string | null;
          job_title_category_id: number | null;
          source: string | null;
          uuid: string;
          workspace_id: number | null;
        };
        Insert: {
          appointment_category_id?: number | null;
          cind_id?: number | null;
          company_id?: number | null;
          contact_id?: number | null;
          created_at?: string;
          external_code?: string | null;
          id?: number;
          job_office?: string | null;
          job_title?: string | null;
          job_title_category_id?: number | null;
          source?: string | null;
          uuid?: string;
          workspace_id?: number | null;
        };
        Update: {
          appointment_category_id?: number | null;
          cind_id?: number | null;
          company_id?: number | null;
          contact_id?: number | null;
          created_at?: string;
          external_code?: string | null;
          id?: number;
          job_office?: string | null;
          job_title?: string | null;
          job_title_category_id?: number | null;
          source?: string | null;
          uuid?: string;
          workspace_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "appointments_appointment_category_id_fkey";
            columns: ["appointment_category_id"];
            isOneToOne: false;
            referencedRelation: "appointment_categories";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "appointments_cind_id_fkey";
            columns: ["cind_id"];
            isOneToOne: false;
            referencedRelation: "cinds";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "appointments_company_id_fkey";
            columns: ["company_id"];
            isOneToOne: false;
            referencedRelation: "companies";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "appointments_company_id_fkey";
            columns: ["company_id"];
            isOneToOne: false;
            referencedRelation: "current_workspace_companies";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "appointments_contact_id_fkey";
            columns: ["contact_id"];
            isOneToOne: false;
            referencedRelation: "contacts";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "appointments_contact_id_fkey";
            columns: ["contact_id"];
            isOneToOne: false;
            referencedRelation: "contacts_with_appointments";
            referencedColumns: ["contact_id"];
          },
          {
            foreignKeyName: "appointments_contact_id_fkey";
            columns: ["contact_id"];
            isOneToOne: false;
            referencedRelation: "current_workspace_contacts";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "appointments_job_title_id_fkey";
            columns: ["job_title_category_id"];
            isOneToOne: false;
            referencedRelation: "job_title_categories";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "appointments_workspace_id_fkey";
            columns: ["workspace_id"];
            isOneToOne: false;
            referencedRelation: "workspace_members_view";
            referencedColumns: ["workspace_id"];
          },
          {
            foreignKeyName: "appointments_workspace_id_fkey";
            columns: ["workspace_id"];
            isOneToOne: false;
            referencedRelation: "workspaces";
            referencedColumns: ["id"];
          }
        ];
      };
      associations: {
        Row: {
          created_at: string;
          id: number;
          name: string | null;
          workspace_id: number | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          name?: string | null;
          workspace_id?: number | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          name?: string | null;
          workspace_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "associations_workspace_id_fkey";
            columns: ["workspace_id"];
            isOneToOne: false;
            referencedRelation: "workspace_members_view";
            referencedColumns: ["workspace_id"];
          },
          {
            foreignKeyName: "associations_workspace_id_fkey";
            columns: ["workspace_id"];
            isOneToOne: false;
            referencedRelation: "workspaces";
            referencedColumns: ["id"];
          }
        ];
      };
      associative_status: {
        Row: {
          created_at: string;
          id: number;
          name: string | null;
          workspace_id: number | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          name?: string | null;
          workspace_id?: number | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          name?: string | null;
          workspace_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "associative_status_workspace_id_fkey";
            columns: ["workspace_id"];
            isOneToOne: false;
            referencedRelation: "workspace_members_view";
            referencedColumns: ["workspace_id"];
          },
          {
            foreignKeyName: "associative_status_workspace_id_fkey";
            columns: ["workspace_id"];
            isOneToOne: false;
            referencedRelation: "workspaces";
            referencedColumns: ["id"];
          }
        ];
      };
      cinds: {
        Row: {
          code: string | null;
          created_at: string;
          id: number;
          name: string | null;
          workspace_id: number | null;
        };
        Insert: {
          code?: string | null;
          created_at?: string;
          id?: number;
          name?: string | null;
          workspace_id?: number | null;
        };
        Update: {
          code?: string | null;
          created_at?: string;
          id?: number;
          name?: string | null;
          workspace_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "cinds_workspace_id_fkey";
            columns: ["workspace_id"];
            isOneToOne: false;
            referencedRelation: "workspace_members_view";
            referencedColumns: ["workspace_id"];
          },
          {
            foreignKeyName: "cinds_workspace_id_fkey";
            columns: ["workspace_id"];
            isOneToOne: false;
            referencedRelation: "workspaces";
            referencedColumns: ["id"];
          }
        ];
      };
      companies: {
        Row: {
          address: string | null;
          associative_status_id: number | null;
          city: string | null;
          company_section_id: number | null;
          company_type_id: number | null;
          country: string | null;
          created_at: string;
          email: string | null;
          external_code: string | null;
          id: number;
          name: string | null;
          pec: string | null;
          postal_code: string | null;
          region: string | null;
          source: string | null;
          state: string | null;
          tax_code: string | null;
          vat_number: string | null;
          workspace_id: number | null;
        };
        Insert: {
          address?: string | null;
          associative_status_id?: number | null;
          city?: string | null;
          company_section_id?: number | null;
          company_type_id?: number | null;
          country?: string | null;
          created_at?: string;
          email?: string | null;
          external_code?: string | null;
          id?: number;
          name?: string | null;
          pec?: string | null;
          postal_code?: string | null;
          region?: string | null;
          source?: string | null;
          state?: string | null;
          tax_code?: string | null;
          vat_number?: string | null;
          workspace_id?: number | null;
        };
        Update: {
          address?: string | null;
          associative_status_id?: number | null;
          city?: string | null;
          company_section_id?: number | null;
          company_type_id?: number | null;
          country?: string | null;
          created_at?: string;
          email?: string | null;
          external_code?: string | null;
          id?: number;
          name?: string | null;
          pec?: string | null;
          postal_code?: string | null;
          region?: string | null;
          source?: string | null;
          state?: string | null;
          tax_code?: string | null;
          vat_number?: string | null;
          workspace_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "companies_associative_status_id_fkey";
            columns: ["associative_status_id"];
            isOneToOne: false;
            referencedRelation: "associative_status";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "companies_company_section_id_fkey";
            columns: ["company_section_id"];
            isOneToOne: false;
            referencedRelation: "company_sections";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "companies_company_type_id_fkey";
            columns: ["company_type_id"];
            isOneToOne: false;
            referencedRelation: "company_types";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "companies_workspace_id_fkey";
            columns: ["workspace_id"];
            isOneToOne: false;
            referencedRelation: "workspace_members_view";
            referencedColumns: ["workspace_id"];
          },
          {
            foreignKeyName: "companies_workspace_id_fkey";
            columns: ["workspace_id"];
            isOneToOne: false;
            referencedRelation: "workspaces";
            referencedColumns: ["id"];
          }
        ];
      };
      company_sections: {
        Row: {
          created_at: string;
          id: number;
          name: string | null;
          workspace_id: number | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          name?: string | null;
          workspace_id?: number | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          name?: string | null;
          workspace_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "company_sections_workspace_id_fkey";
            columns: ["workspace_id"];
            isOneToOne: false;
            referencedRelation: "workspace_members_view";
            referencedColumns: ["workspace_id"];
          },
          {
            foreignKeyName: "company_sections_workspace_id_fkey";
            columns: ["workspace_id"];
            isOneToOne: false;
            referencedRelation: "workspaces";
            referencedColumns: ["id"];
          }
        ];
      };
      company_types: {
        Row: {
          created_at: string;
          description: string | null;
          examples: string | null;
          id: number;
          name: string | null;
          workspace_id: number | null;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          examples?: string | null;
          id?: number;
          name?: string | null;
          workspace_id?: number | null;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          examples?: string | null;
          id?: number;
          name?: string | null;
          workspace_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "company_types_workspace_id_fkey";
            columns: ["workspace_id"];
            isOneToOne: false;
            referencedRelation: "workspace_members_view";
            referencedColumns: ["workspace_id"];
          },
          {
            foreignKeyName: "company_types_workspace_id_fkey";
            columns: ["workspace_id"];
            isOneToOne: false;
            referencedRelation: "workspaces";
            referencedColumns: ["id"];
          }
        ];
      };
      contact_statuses: {
        Row: {
          created_at: string;
          id: number;
          name: string | null;
          workspace_id: number | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          name?: string | null;
          workspace_id?: number | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          name?: string | null;
          workspace_id?: number | null;
        };
        Relationships: [];
      };
      contacts: {
        Row: {
          contact_status_id: number | null;
          created_at: string;
          date_of_birth: string | null;
          external_code: string | null;
          first_name: string | null;
          gender: string | null;
          id: number;
          last_name: string | null;
          personal_email: string | null;
          personal_title: string | null;
          personal_title_id: number | null;
          source: string | null;
          workspace_id: number | null;
        };
        Insert: {
          contact_status_id?: number | null;
          created_at?: string;
          date_of_birth?: string | null;
          external_code?: string | null;
          first_name?: string | null;
          gender?: string | null;
          id?: number;
          last_name?: string | null;
          personal_email?: string | null;
          personal_title?: string | null;
          personal_title_id?: number | null;
          source?: string | null;
          workspace_id?: number | null;
        };
        Update: {
          contact_status_id?: number | null;
          created_at?: string;
          date_of_birth?: string | null;
          external_code?: string | null;
          first_name?: string | null;
          gender?: string | null;
          id?: number;
          last_name?: string | null;
          personal_email?: string | null;
          personal_title?: string | null;
          personal_title_id?: number | null;
          source?: string | null;
          workspace_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "contacts_contact_status_id_fkey";
            columns: ["contact_status_id"];
            isOneToOne: false;
            referencedRelation: "contact_statuses";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "contacts_contact_status_id_fkey";
            columns: ["contact_status_id"];
            isOneToOne: false;
            referencedRelation: "contacts_with_appointments";
            referencedColumns: ["contact_status_id"];
          },
          {
            foreignKeyName: "contacts_personal_title_id_fkey";
            columns: ["personal_title_id"];
            isOneToOne: false;
            referencedRelation: "contacts_with_appointments";
            referencedColumns: ["personal_title_id"];
          },
          {
            foreignKeyName: "contacts_personal_title_id_fkey";
            columns: ["personal_title_id"];
            isOneToOne: false;
            referencedRelation: "personal_titles";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "contacts_workspace_id_fkey";
            columns: ["workspace_id"];
            isOneToOne: false;
            referencedRelation: "workspace_members_view";
            referencedColumns: ["workspace_id"];
          },
          {
            foreignKeyName: "contacts_workspace_id_fkey";
            columns: ["workspace_id"];
            isOneToOne: false;
            referencedRelation: "workspaces";
            referencedColumns: ["id"];
          }
        ];
      };
      event: {
        Row: {
          created_at: string | null;
          date_end: string | null;
          date_start: string | null;
          description: string | null;
          id: number;
          location_address: string | null;
          location_name: string | null;
          name: string | null;
          path: string | null;
          slug: string | null;
          status: string | null;
        };
        Insert: {
          created_at?: string | null;
          date_end?: string | null;
          date_start?: string | null;
          description?: string | null;
          id?: number;
          location_address?: string | null;
          location_name?: string | null;
          name?: string | null;
          path?: string | null;
          slug?: string | null;
          status?: string | null;
        };
        Update: {
          created_at?: string | null;
          date_end?: string | null;
          date_start?: string | null;
          description?: string | null;
          id?: number;
          location_address?: string | null;
          location_name?: string | null;
          name?: string | null;
          path?: string | null;
          slug?: string | null;
          status?: string | null;
        };
        Relationships: [];
      };
      event_appointment_meta: {
        Row: {
          appointment_id: number | null;
          conferma: string | null;
          event_id: number | null;
          id: number;
          last_change: string;
          note: string | null;
          status: string | null;
        };
        Insert: {
          appointment_id?: number | null;
          conferma?: string | null;
          event_id?: number | null;
          id?: number;
          last_change?: string;
          note?: string | null;
          status?: string | null;
        };
        Update: {
          appointment_id?: number | null;
          conferma?: string | null;
          event_id?: number | null;
          id?: number;
          last_change?: string;
          note?: string | null;
          status?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "appointments";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "event_appointment_meta_event_id_fkey";
            columns: ["event_id"];
            isOneToOne: false;
            referencedRelation: "event";
            referencedColumns: ["id"];
          }
        ];
      };
      event_list: {
        Row: {
          event_id: number;
          list_id: number;
        };
        Insert: {
          event_id: number;
          list_id: number;
        };
        Update: {
          event_id?: number;
          list_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "event_list_event_id_fkey";
            columns: ["event_id"];
            isOneToOne: false;
            referencedRelation: "event";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "event_list_list_id_fkey";
            columns: ["list_id"];
            isOneToOne: false;
            referencedRelation: "invited_lists";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "event_list_list_id_fkey";
            columns: ["list_id"];
            isOneToOne: false;
            referencedRelation: "list";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "event_list_list_id_fkey";
            columns: ["list_id"];
            isOneToOne: false;
            referencedRelation: "selected_invited_lists";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "event_list_list_id_fkey";
            columns: ["list_id"];
            isOneToOne: false;
            referencedRelation: "selected_invited_lists_detail";
            referencedColumns: ["id"];
          }
        ];
      };
      job_title_categories: {
        Row: {
          created_at: string;
          description: string | null;
          id: number;
          name: string | null;
          workspace_id: number | null;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          id?: number;
          name?: string | null;
          workspace_id?: number | null;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          id?: number;
          name?: string | null;
          workspace_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "job_titles_workspace_id_fkey";
            columns: ["workspace_id"];
            isOneToOne: false;
            referencedRelation: "workspace_members_view";
            referencedColumns: ["workspace_id"];
          },
          {
            foreignKeyName: "job_titles_workspace_id_fkey";
            columns: ["workspace_id"];
            isOneToOne: false;
            referencedRelation: "workspaces";
            referencedColumns: ["id"];
          }
        ];
      };
      list: {
        Row: {
          id: number;
          last_updated: string | null;
          name: string | null;
          notes: string | null;
        };
        Insert: {
          id?: number;
          last_updated?: string | null;
          name?: string | null;
          notes?: string | null;
        };
        Update: {
          id?: number;
          last_updated?: string | null;
          name?: string | null;
          notes?: string | null;
        };
        Relationships: [];
      };
      logs: {
        Row: {
          action_type: string | null;
          changed_at: string | null;
          id: number;
          metadata: Json | null;
          record_id: number | null;
          table_name: string | null;
          triggered_by: string | null;
        };
        Insert: {
          action_type?: string | null;
          changed_at?: string | null;
          id?: number;
          metadata?: Json | null;
          record_id?: number | null;
          table_name?: string | null;
          triggered_by?: string | null;
        };
        Update: {
          action_type?: string | null;
          changed_at?: string | null;
          id?: number;
          metadata?: Json | null;
          record_id?: number | null;
          table_name?: string | null;
          triggered_by?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "logs_triggered_by_fkey";
            columns: ["triggered_by"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      personal_titles: {
        Row: {
          created_at: string;
          id: number;
          name: string | null;
          workspace_id: number | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          name?: string | null;
          workspace_id?: number | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          name?: string | null;
          workspace_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "personal_titles_workspace_id_fkey";
            columns: ["workspace_id"];
            isOneToOne: false;
            referencedRelation: "workspace_members_view";
            referencedColumns: ["workspace_id"];
          },
          {
            foreignKeyName: "personal_titles_workspace_id_fkey";
            columns: ["workspace_id"];
            isOneToOne: false;
            referencedRelation: "workspaces";
            referencedColumns: ["id"];
          }
        ];
      };
      roles: {
        Row: {
          created_at: string;
          id: number;
          name: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          name?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          name?: string | null;
        };
        Relationships: [];
      };
      roles_weweb: {
        Row: {
          id: string;
          name: string | null;
        };
        Insert: {
          id?: string;
          name?: string | null;
        };
        Update: {
          id?: string;
          name?: string | null;
        };
        Relationships: [];
      };
      seat: {
        Row: {
          appointment_id: number | null;
          created_at: string;
          description: string | null;
          id: number;
          row: string | null;
          seat: string | null;
          sector: string | null;
        };
        Insert: {
          appointment_id?: number | null;
          created_at?: string;
          description?: string | null;
          id?: number;
          row?: string | null;
          seat?: string | null;
          sector?: string | null;
        };
        Update: {
          appointment_id?: number | null;
          created_at?: string;
          description?: string | null;
          id?: number;
          row?: string | null;
          seat?: string | null;
          sector?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "seat_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "appointments";
            referencedColumns: ["id"];
          }
        ];
      };
      ticket: {
        Row: {
          appointment_id: number | null;
          created_at: string | null;
          entry: string | null;
          event_id: number | null;
          id: string;
          seat_id: number | null;
          status: string | null;
        };
        Insert: {
          appointment_id?: number | null;
          created_at?: string | null;
          entry?: string | null;
          event_id?: number | null;
          id?: string;
          seat_id?: number | null;
          status?: string | null;
        };
        Update: {
          appointment_id?: number | null;
          created_at?: string | null;
          entry?: string | null;
          event_id?: number | null;
          id?: string;
          seat_id?: number | null;
          status?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "ticket_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "appointments";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "ticket_seat_id_fkey";
            columns: ["seat_id"];
            isOneToOne: false;
            referencedRelation: "seat";
            referencedColumns: ["id"];
          }
        ];
      };
      user_meta: {
        Row: {
          active_workspace: number | null;
          is_super_user: boolean | null;
          user_id: string;
        };
        Insert: {
          active_workspace?: number | null;
          is_super_user?: boolean | null;
          user_id: string;
        };
        Update: {
          active_workspace?: number | null;
          is_super_user?: boolean | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "user_meta_active_workspace_fkey";
            columns: ["active_workspace"];
            isOneToOne: false;
            referencedRelation: "workspace_members_view";
            referencedColumns: ["workspace_id"];
          },
          {
            foreignKeyName: "user_meta_active_workspace_fkey";
            columns: ["active_workspace"];
            isOneToOne: false;
            referencedRelation: "workspaces";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "user_meta_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      user_profile: {
        Row: {
          created_at: string;
          email: string | null;
          first_name: string | null;
          id: number;
          last_name: string | null;
          user_id: string | null;
        };
        Insert: {
          created_at?: string;
          email?: string | null;
          first_name?: string | null;
          id?: number;
          last_name?: string | null;
          user_id?: string | null;
        };
        Update: {
          created_at?: string;
          email?: string | null;
          first_name?: string | null;
          id?: number;
          last_name?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "user_profile_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "user_meta";
            referencedColumns: ["user_id"];
          }
        ];
      };
      user_roles_weweb: {
        Row: {
          id: string;
          roleId: string;
          userId: string;
        };
        Insert: {
          id: string;
          roleId: string;
          userId: string;
        };
        Update: {
          id?: string;
          roleId?: string;
          userId?: string;
        };
        Relationships: [
          {
            foreignKeyName: "user_roles_weweb_id_fkey";
            columns: ["id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "user_roles_weweb_roleId_fkey";
            columns: ["roleId"];
            isOneToOne: false;
            referencedRelation: "roles_weweb";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "user_roles_weweb_userId_fkey";
            columns: ["userId"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      workspace_members: {
        Row: {
          created_at: string;
          id: number;
          role_id: number;
          user_id: string | null;
          workspace_id: number | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          role_id: number;
          user_id?: string | null;
          workspace_id?: number | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          role_id?: number;
          user_id?: string | null;
          workspace_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "workspace_members_role_id_fkey";
            columns: ["role_id"];
            isOneToOne: false;
            referencedRelation: "roles";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "workspace_members_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "user_meta";
            referencedColumns: ["user_id"];
          },
          {
            foreignKeyName: "workspace_members_workspace_id_fkey";
            columns: ["workspace_id"];
            isOneToOne: false;
            referencedRelation: "workspace_members_view";
            referencedColumns: ["workspace_id"];
          },
          {
            foreignKeyName: "workspace_members_workspace_id_fkey";
            columns: ["workspace_id"];
            isOneToOne: false;
            referencedRelation: "workspaces";
            referencedColumns: ["id"];
          }
        ];
      };
      workspaces: {
        Row: {
          createdAt: string;
          id: number;
          name: string | null;
        };
        Insert: {
          createdAt?: string;
          id?: number;
          name?: string | null;
        };
        Update: {
          createdAt?: string;
          id?: number;
          name?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      contacts_with_appointments: {
        Row: {
          appointment_details: Json | null;
          contact_date_of_birth: string | null;
          contact_first_name: string | null;
          contact_id: number | null;
          contact_last_name: string | null;
          contact_status_id: number | null;
          contact_status_name: string | null;
          personal_title_id: number | null;
          personal_title_name: string | null;
          workspace_id: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "contacts_workspace_id_fkey";
            columns: ["workspace_id"];
            isOneToOne: false;
            referencedRelation: "workspaces";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "contacts_workspace_id_fkey";
            columns: ["workspace_id"];
            isOneToOne: false;
            referencedRelation: "workspace_members_view";
            referencedColumns: ["workspace_id"];
          }
        ];
      };
      current_user_workspaces: {
        Row: {
          role_id: number | null;
          role_name: string | null;
          user_id: string | null;
          workspace_id: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "workspace_members_role_id_fkey";
            columns: ["role_id"];
            isOneToOne: false;
            referencedRelation: "roles";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "workspace_members_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "user_meta";
            referencedColumns: ["user_id"];
          },
          {
            foreignKeyName: "workspace_members_workspace_id_fkey";
            columns: ["workspace_id"];
            isOneToOne: false;
            referencedRelation: "workspaces";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "workspace_members_workspace_id_fkey";
            columns: ["workspace_id"];
            isOneToOne: false;
            referencedRelation: "workspace_members_view";
            referencedColumns: ["workspace_id"];
          }
        ];
      };
      current_workspace_companies: {
        Row: {
          id: number | null;
        };
        Insert: {
          id?: number | null;
        };
        Update: {
          id?: number | null;
        };
        Relationships: [];
      };
      current_workspace_contacts: {
        Row: {
          id: number | null;
        };
        Insert: {
          id?: number | null;
        };
        Update: {
          id?: number | null;
        };
        Relationships: [];
      };
      invited_lists: {
        Row: {
          contacts_count: number | null;
          has_duplicates: boolean | null;
          id: number | null;
          name: string | null;
          notes: string | null;
        };
        Relationships: [];
      };
      selected_invited_lists: {
        Row: {
          color: string | null;
          email: string | null;
          first_name: string | null;
          id: number | null;
          is_duplicate: boolean | null;
          last_name: string | null;
          list_name: string | null;
          name: string | null;
        };
        Relationships: [];
      };
      selected_invited_lists_detail: {
        Row: {
          appointments: Json | null;
          appointments_count: number | null;
          has_duplicates: boolean | null;
          id: number | null;
          name: string | null;
          notes: string | null;
        };
        Relationships: [];
      };
      workspace_members_view: {
        Row: {
          id: number | null;
          role_name: string | null;
          user_email: string | null;
          user_first_name: string | null;
          user_id: string | null;
          user_last_name: string | null;
          workspace_id: number | null;
          workspace_name: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "workspace_members_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "user_meta";
            referencedColumns: ["user_id"];
          }
        ];
      };
    };
    Functions: {
      get_appointment_details: {
        Args: Record<PropertyKey, never>;
        Returns: {
          email: string;
          contact_id: number;
          first_name: string;
          last_name: string;
          gender: string;
          personal_title: string;
          date_of_birth: string;
          contact_status: Database["public"]["Enums"]["contact_status_type"];
          job_title: string;
          appointment_id: number;
          company_id: number;
          company_name: string;
        }[];
      };
      get_current_user_id: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      get_jsonb_param_value: {
        Args: {
          args: Json;
          param_name: string;
          default_value?: string;
        };
        Returns: string;
      };
      insert_appointments_list: {
        Args: {
          appointment_ids: number[];
          list_ids: number[];
        };
        Returns: undefined;
      };
      is_current_user_super_user: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
      list_has_duplicates: {
        Args: {
          searched_list_id: number;
        };
        Returns: Database["public"]["CompositeTypes"]["duplicates_table"][];
      };
      rsvp_get_details: {
        Args: {
          appointment_uuid: string;
        };
        Returns: {
          first_name: string;
          last_name: string;
          company_name: string;
          has_ticket: boolean;
        }[];
      };
      search_cog: {
        Args: {
          cog_input: string;
        };
        Returns: {
          id: number;
          cognome: string;
          nome: string;
          azienda: string;
          carica: string;
          colore: string;
          categoria: string;
          cind: string;
        }[];
      };
      search_companies: {
        Args: {
          args: Json;
        };
        Returns: undefined;
      };
      search_contacts_with_appointments: {
        Args: {
          args: Json;
        };
        Returns: Database["public"]["CompositeTypes"]["search_contacts_results"][];
      };
      search_contacts_with_appointments_paginated: {
        Args: {
          args: Json;
          page_size?: number;
          page_number?: number;
        };
        Returns: Json;
      };
      search_contacts_with_appointments_v2: {
        Args: {
          args: Json;
        };
        Returns: {
          id: number;
          contact_first_name: string;
          contact_last_name: string;
          contact_date_of_birth: string;
          contact_status_id: number;
          appointments: Json;
        }[];
      };
      search_contacts_with_appointments_v3: {
        Args: {
          args: Json;
        };
        Returns: Database["public"]["CompositeTypes"]["search_contacts_results"][];
      };
      select_lists_event: {
        Args: {
          current_event_id: number;
          filter_string: string;
        };
        Returns: {
          id: number;
          name: string;
          event_id: number;
          appointments_count: number;
          is_selected: boolean;
        }[];
      };
      set_active_workspace: {
        Args: {
          workspace_id: number;
        };
        Returns: undefined;
      };
      upsert_contact_test: {
        Args: {
          input: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      contact_status_type: "active" | "inactive";
    };
    CompositeTypes: {
      duplicates_table: {
        contact_id: number;
        first_name: string;
        last_name: string;
        appointment_id: number;
      };
      search_contacts_results: {
        contact_id: number;
        contact_first_name: string;
        contact_last_name: string;
        contact_date_of_birth: string;
        workspace_id: number;
        contact_status_id: number;
        contact_status_name: string;
        personal_title_id: number;
        personal_title_name: string;
        appointment_details: Json;
      };
    };
  };
};

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never;
