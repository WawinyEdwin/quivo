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
          uuid: string;
          workspace_id: number | null;
        };
        Insert: {
          appointment_id: number;
          email?: string | null;
          id?: number;
          is_preferred?: boolean;
          uuid?: string;
          workspace_id?: number | null;
        };
        Update: {
          appointment_id?: number;
          email?: string | null;
          id?: number;
          is_preferred?: boolean;
          uuid?: string;
          workspace_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "appointment_email_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "alessandro_export";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "appointment_email_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "alessandro_view";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "appointment_email_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_inticket_with_email_view";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "appointment_email_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_meta";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "appointment_email_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_meta_for_export";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "appointment_email_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "appointment_email_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets_checkin";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "appointment_email_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets_seats";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "appointment_email_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "appointments";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "appointment_email_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "attendance_log_with_links";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "appointment_email_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "contatti_e_incarichi";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "appointment_email_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "liste_invitati_due";
            referencedColumns: ["appointment_id"];
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
            referencedRelation: "alessandro_export";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "appointment_list_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "alessandro_view";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "appointment_list_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_inticket_with_email_view";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "appointment_list_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_meta";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "appointment_list_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_meta_for_export";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "appointment_list_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "appointment_list_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets_checkin";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "appointment_list_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets_seats";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "appointment_list_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "appointments";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "appointment_list_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "attendance_log_with_links";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "appointment_list_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "contatti_e_incarichi";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "appointment_list_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "liste_invitati_due";
            referencedColumns: ["appointment_id"];
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
          }
        ];
      };
      appointment_list_bak20240309: {
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
            foreignKeyName: "public_appointment_list_bak20240309_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "alessandro_export";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "public_appointment_list_bak20240309_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "alessandro_view";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "public_appointment_list_bak20240309_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_inticket_with_email_view";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "public_appointment_list_bak20240309_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_meta";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "public_appointment_list_bak20240309_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_meta_for_export";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "public_appointment_list_bak20240309_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "public_appointment_list_bak20240309_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets_checkin";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "public_appointment_list_bak20240309_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets_seats";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "public_appointment_list_bak20240309_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "appointments";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_appointment_list_bak20240309_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "attendance_log_with_links";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "public_appointment_list_bak20240309_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "contatti_e_incarichi";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "public_appointment_list_bak20240309_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "liste_invitati_due";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "public_appointment_list_bak20240309_list_id_fkey";
            columns: ["list_id"];
            isOneToOne: false;
            referencedRelation: "list";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_appointment_list_bak20240309_list_id_fkey";
            columns: ["list_id"];
            isOneToOne: false;
            referencedRelation: "selected_invited_lists";
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
            referencedRelation: "alessandro_export";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "appointment_phones_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "alessandro_view";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "appointment_phones_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_inticket_with_email_view";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "appointment_phones_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_meta";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "appointment_phones_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_meta_for_export";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "appointment_phones_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "appointment_phones_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets_checkin";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "appointment_phones_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets_seats";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "appointment_phones_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "appointments";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "appointment_phones_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "attendance_log_with_links";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "appointment_phones_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "contatti_e_incarichi";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "appointment_phones_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "liste_invitati_due";
            referencedColumns: ["appointment_id"];
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
            foreignKeyName: "appointments_cind_id_fkey";
            columns: ["cind_id"];
            isOneToOne: false;
            referencedRelation: "event_attendance_log";
            referencedColumns: ["cind_id"];
          },
          {
            foreignKeyName: "appointments_cind_id_fkey";
            columns: ["cind_id"];
            isOneToOne: false;
            referencedRelation: "event_attendance_log_live";
            referencedColumns: ["cind_id"];
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
            referencedRelation: "alessandro_export";
            referencedColumns: ["contact_id"];
          },
          {
            foreignKeyName: "appointments_contact_id_fkey";
            columns: ["contact_id"];
            isOneToOne: false;
            referencedRelation: "alessandro_view";
            referencedColumns: ["contact_id"];
          },
          {
            foreignKeyName: "appointments_contact_id_fkey";
            columns: ["contact_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_meta";
            referencedColumns: ["contact_id"];
          },
          {
            foreignKeyName: "appointments_contact_id_fkey";
            columns: ["contact_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_meta_for_export";
            referencedColumns: ["contact_id"];
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
            referencedRelation: "contatti_e_incarichi";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "appointments_contact_id_fkey";
            columns: ["contact_id"];
            isOneToOne: false;
            referencedRelation: "current_workspace_contacts";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "appointments_contact_id_fkey";
            columns: ["contact_id"];
            isOneToOne: false;
            referencedRelation: "liste_invitati_due";
            referencedColumns: ["contact_id"];
          },
          {
            foreignKeyName: "appointments_contact_id_fkey";
            columns: ["contact_id"];
            isOneToOne: false;
            referencedRelation: "simplified_view_contacts_with_appointments";
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
      appointments_bak20240224: {
        Row: {
          appointment_category_id: number | null;
          cind_id: number | null;
          company_id: number | null;
          contact_id: number | null;
          created_at: string | null;
          external_code: string | null;
          id: number | null;
          job_office: string | null;
          job_title: string | null;
          job_title_category_id: number | null;
          source: string | null;
          uuid: string | null;
          workspace_id: number | null;
        };
        Insert: {
          appointment_category_id?: number | null;
          cind_id?: number | null;
          company_id?: number | null;
          contact_id?: number | null;
          created_at?: string | null;
          external_code?: string | null;
          id?: number | null;
          job_office?: string | null;
          job_title?: string | null;
          job_title_category_id?: number | null;
          source?: string | null;
          uuid?: string | null;
          workspace_id?: number | null;
        };
        Update: {
          appointment_category_id?: number | null;
          cind_id?: number | null;
          company_id?: number | null;
          contact_id?: number | null;
          created_at?: string | null;
          external_code?: string | null;
          id?: number | null;
          job_office?: string | null;
          job_title?: string | null;
          job_title_category_id?: number | null;
          source?: string | null;
          uuid?: string | null;
          workspace_id?: number | null;
        };
        Relationships: [];
      };
      appointments_bak20240309: {
        Row: {
          appointment_category_id: number | null;
          cind_id: number | null;
          company_id: number | null;
          contact_id: number | null;
          created_at: string | null;
          external_code: string | null;
          id: number | null;
          job_office: string | null;
          job_title: string | null;
          job_title_category_id: number | null;
          source: string | null;
          uuid: string | null;
          workspace_id: number | null;
        };
        Insert: {
          appointment_category_id?: number | null;
          cind_id?: number | null;
          company_id?: number | null;
          contact_id?: number | null;
          created_at?: string | null;
          external_code?: string | null;
          id?: number | null;
          job_office?: string | null;
          job_title?: string | null;
          job_title_category_id?: number | null;
          source?: string | null;
          uuid?: string | null;
          workspace_id?: number | null;
        };
        Update: {
          appointment_category_id?: number | null;
          cind_id?: number | null;
          company_id?: number | null;
          contact_id?: number | null;
          created_at?: string | null;
          external_code?: string | null;
          id?: number | null;
          job_office?: string | null;
          job_title?: string | null;
          job_title_category_id?: number | null;
          source?: string | null;
          uuid?: string | null;
          workspace_id?: number | null;
        };
        Relationships: [];
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
      bibbia: {
        Row: {
          id: number;
          name: string | null;
        };
        Insert: {
          id?: number;
          name?: string | null;
        };
        Update: {
          id?: number;
          name?: string | null;
        };
        Relationships: [];
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
          short_name: string | null;
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
          short_name?: string | null;
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
          short_name?: string | null;
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
      contact_bibbia: {
        Row: {
          bibbia_id: number | null;
          contact_id: number | null;
          id: number;
        };
        Insert: {
          bibbia_id?: number | null;
          contact_id?: number | null;
          id?: number;
        };
        Update: {
          bibbia_id?: number | null;
          contact_id?: number | null;
          id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "public_contact_bibbia_bibbia_id_fkey";
            columns: ["bibbia_id"];
            isOneToOne: false;
            referencedRelation: "bibbia";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_temp_bibbia_contact_id_fkey";
            columns: ["contact_id"];
            isOneToOne: false;
            referencedRelation: "contacts_bup_8marzo";
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
          bibbia_id: number | null;
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
          bibbia_id?: number | null;
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
          bibbia_id?: number | null;
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
            foreignKeyName: "contacts_personal_title_id_fkey";
            columns: ["personal_title_id"];
            isOneToOne: false;
            referencedRelation: "simplified_view_contacts_with_appointments";
            referencedColumns: ["personal_title_id"];
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
          },
          {
            foreignKeyName: "public_contacts_bibbia_id_fkey";
            columns: ["bibbia_id"];
            isOneToOne: false;
            referencedRelation: "bibbia";
            referencedColumns: ["id"];
          }
        ];
      };
      contacts_bup_8marzo: {
        Row: {
          bibbia_id: number | null;
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
          bibbia_id?: number | null;
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
          bibbia_id?: number | null;
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
            foreignKeyName: "public_contacts_bup_8marzo_bibbia_id_fkey";
            columns: ["bibbia_id"];
            isOneToOne: false;
            referencedRelation: "bibbia";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_contacts_bup_8marzo_contact_status_id_fkey";
            columns: ["contact_status_id"];
            isOneToOne: false;
            referencedRelation: "contact_statuses";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_contacts_bup_8marzo_contact_status_id_fkey";
            columns: ["contact_status_id"];
            isOneToOne: false;
            referencedRelation: "contacts_with_appointments";
            referencedColumns: ["contact_status_id"];
          },
          {
            foreignKeyName: "public_contacts_bup_8marzo_personal_title_id_fkey";
            columns: ["personal_title_id"];
            isOneToOne: false;
            referencedRelation: "contacts_with_appointments";
            referencedColumns: ["personal_title_id"];
          },
          {
            foreignKeyName: "public_contacts_bup_8marzo_personal_title_id_fkey";
            columns: ["personal_title_id"];
            isOneToOne: false;
            referencedRelation: "personal_titles";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_contacts_bup_8marzo_personal_title_id_fkey";
            columns: ["personal_title_id"];
            isOneToOne: false;
            referencedRelation: "simplified_view_contacts_with_appointments";
            referencedColumns: ["personal_title_id"];
          },
          {
            foreignKeyName: "public_contacts_bup_8marzo_workspace_id_fkey";
            columns: ["workspace_id"];
            isOneToOne: false;
            referencedRelation: "workspace_members_view";
            referencedColumns: ["workspace_id"];
          },
          {
            foreignKeyName: "public_contacts_bup_8marzo_workspace_id_fkey";
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
          action: string | null;
          appointment_email: number | null;
          appointment_id: number | null;
          conferma: string | null;
          created_at: string;
          email_sent: boolean | null;
          event_id: number | null;
          id: number;
          note: string | null;
          status: string | null;
        };
        Insert: {
          action?: string | null;
          appointment_email?: number | null;
          appointment_id?: number | null;
          conferma?: string | null;
          created_at?: string;
          email_sent?: boolean | null;
          event_id?: number | null;
          id?: number;
          note?: string | null;
          status?: string | null;
        };
        Update: {
          action?: string | null;
          appointment_email?: number | null;
          appointment_id?: number | null;
          conferma?: string | null;
          created_at?: string;
          email_sent?: boolean | null;
          event_id?: number | null;
          id?: number;
          note?: string | null;
          status?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "event_appointment_meta_appointment_email_fkey";
            columns: ["appointment_email"];
            isOneToOne: false;
            referencedRelation: "appointment_emails";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "alessandro_export";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "alessandro_view";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_inticket_with_email_view";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_meta";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_meta_for_export";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets_checkin";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets_seats";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "appointments";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "attendance_log_with_links";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "contatti_e_incarichi";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "liste_invitati_due";
            referencedColumns: ["appointment_id"];
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
      event_appointment_meta_ASSEMBLEA: {
        Row: {
          action: string | null;
          appointment_email: number | null;
          appointment_id: number | null;
          conferma: string | null;
          created_at: string;
          email_sent: boolean | null;
          event_id: number | null;
          id: number;
          note: string | null;
          status: string | null;
        };
        Insert: {
          action?: string | null;
          appointment_email?: number | null;
          appointment_id?: number | null;
          conferma?: string | null;
          created_at?: string;
          email_sent?: boolean | null;
          event_id?: number | null;
          id?: number;
          note?: string | null;
          status?: string | null;
        };
        Update: {
          action?: string | null;
          appointment_email?: number | null;
          appointment_id?: number | null;
          conferma?: string | null;
          created_at?: string;
          email_sent?: boolean | null;
          event_id?: number | null;
          id?: number;
          note?: string | null;
          status?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "public_event_appointment_meta_ASSEMBLEA_appointment_email_fkey";
            columns: ["appointment_email"];
            isOneToOne: false;
            referencedRelation: "appointment_emails";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_event_appointment_meta_ASSEMBLEA_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "alessandro_export";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "public_event_appointment_meta_ASSEMBLEA_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "alessandro_view";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "public_event_appointment_meta_ASSEMBLEA_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_inticket_with_email_view";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "public_event_appointment_meta_ASSEMBLEA_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_meta";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "public_event_appointment_meta_ASSEMBLEA_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_meta_for_export";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "public_event_appointment_meta_ASSEMBLEA_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "public_event_appointment_meta_ASSEMBLEA_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets_checkin";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "public_event_appointment_meta_ASSEMBLEA_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets_seats";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "public_event_appointment_meta_ASSEMBLEA_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "appointments";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_event_appointment_meta_ASSEMBLEA_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "attendance_log_with_links";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "public_event_appointment_meta_ASSEMBLEA_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "contatti_e_incarichi";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "public_event_appointment_meta_ASSEMBLEA_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "liste_invitati_due";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "public_event_appointment_meta_ASSEMBLEA_event_id_fkey";
            columns: ["event_id"];
            isOneToOne: false;
            referencedRelation: "event";
            referencedColumns: ["id"];
          }
        ];
      };
      event_appointment_meta_bak20240310: {
        Row: {
          action: string | null;
          appointment_email: number | null;
          appointment_id: number | null;
          conferma: string | null;
          created_at: string;
          email_sent: boolean | null;
          event_id: number | null;
          id: number;
          note: string | null;
          status: string | null;
        };
        Insert: {
          action?: string | null;
          appointment_email?: number | null;
          appointment_id?: number | null;
          conferma?: string | null;
          created_at?: string;
          email_sent?: boolean | null;
          event_id?: number | null;
          id?: number;
          note?: string | null;
          status?: string | null;
        };
        Update: {
          action?: string | null;
          appointment_email?: number | null;
          appointment_id?: number | null;
          conferma?: string | null;
          created_at?: string;
          email_sent?: boolean | null;
          event_id?: number | null;
          id?: number;
          note?: string | null;
          status?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "public_event_appointment_meta_bak20240310_appointment_email_fke";
            columns: ["appointment_email"];
            isOneToOne: false;
            referencedRelation: "appointment_emails";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_event_appointment_meta_bak20240310_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "alessandro_export";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "public_event_appointment_meta_bak20240310_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "alessandro_view";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "public_event_appointment_meta_bak20240310_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_inticket_with_email_view";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "public_event_appointment_meta_bak20240310_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_meta";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "public_event_appointment_meta_bak20240310_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_meta_for_export";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "public_event_appointment_meta_bak20240310_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "public_event_appointment_meta_bak20240310_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets_checkin";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "public_event_appointment_meta_bak20240310_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets_seats";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "public_event_appointment_meta_bak20240310_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "appointments";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_event_appointment_meta_bak20240310_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "attendance_log_with_links";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "public_event_appointment_meta_bak20240310_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "contatti_e_incarichi";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "public_event_appointment_meta_bak20240310_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "liste_invitati_due";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "public_event_appointment_meta_bak20240310_event_id_fkey";
            columns: ["event_id"];
            isOneToOne: false;
            referencedRelation: "event";
            referencedColumns: ["id"];
          }
        ];
      };
      event_appointment_meta_bak20241003_1700: {
        Row: {
          action: string | null;
          appointment_email: number | null;
          appointment_id: number | null;
          conferma: string | null;
          created_at: string;
          email_sent: boolean | null;
          event_id: number | null;
          id: number;
          note: string | null;
          status: string | null;
        };
        Insert: {
          action?: string | null;
          appointment_email?: number | null;
          appointment_id?: number | null;
          conferma?: string | null;
          created_at?: string;
          email_sent?: boolean | null;
          event_id?: number | null;
          id?: number;
          note?: string | null;
          status?: string | null;
        };
        Update: {
          action?: string | null;
          appointment_email?: number | null;
          appointment_id?: number | null;
          conferma?: string | null;
          created_at?: string;
          email_sent?: boolean | null;
          event_id?: number | null;
          id?: number;
          note?: string | null;
          status?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "public_event_appointment_meta_bak20241003_1700_appointment_emai";
            columns: ["appointment_email"];
            isOneToOne: false;
            referencedRelation: "appointment_emails";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_event_appointment_meta_bak20241003_1700_appointment_id_f";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "alessandro_export";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "public_event_appointment_meta_bak20241003_1700_appointment_id_f";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "alessandro_view";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "public_event_appointment_meta_bak20241003_1700_appointment_id_f";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_inticket_with_email_view";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "public_event_appointment_meta_bak20241003_1700_appointment_id_f";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_meta";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "public_event_appointment_meta_bak20241003_1700_appointment_id_f";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_meta_for_export";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "public_event_appointment_meta_bak20241003_1700_appointment_id_f";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "public_event_appointment_meta_bak20241003_1700_appointment_id_f";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets_checkin";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "public_event_appointment_meta_bak20241003_1700_appointment_id_f";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets_seats";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "public_event_appointment_meta_bak20241003_1700_appointment_id_f";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "appointments";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_event_appointment_meta_bak20241003_1700_appointment_id_f";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "attendance_log_with_links";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "public_event_appointment_meta_bak20241003_1700_appointment_id_f";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "contatti_e_incarichi";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "public_event_appointment_meta_bak20241003_1700_appointment_id_f";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "liste_invitati_due";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "public_event_appointment_meta_bak20241003_1700_event_id_fkey";
            columns: ["event_id"];
            isOneToOne: false;
            referencedRelation: "event";
            referencedColumns: ["id"];
          }
        ];
      };
      event_ASSEMBLEA: {
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
            referencedRelation: "list";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "event_list_list_id_fkey";
            columns: ["list_id"];
            isOneToOne: false;
            referencedRelation: "selected_invited_lists";
            referencedColumns: ["id"];
          }
        ];
      };
      event_timeslot: {
        Row: {
          created_at: string | null;
          date: string | null;
          description_HTML: string | null;
          event_id: number | null;
          id: number;
          location_name: string | null;
          public: boolean;
          slug: string | null;
          status: string | null;
          time_end: string | null;
          time_start: string | null;
          title_email: string | null;
          title_slot: string | null;
          workspace_id: number | null;
        };
        Insert: {
          created_at?: string | null;
          date?: string | null;
          description_HTML?: string | null;
          event_id?: number | null;
          id?: number;
          location_name?: string | null;
          public?: boolean;
          slug?: string | null;
          status?: string | null;
          time_end?: string | null;
          time_start?: string | null;
          title_email?: string | null;
          title_slot?: string | null;
          workspace_id?: number | null;
        };
        Update: {
          created_at?: string | null;
          date?: string | null;
          description_HTML?: string | null;
          event_id?: number | null;
          id?: number;
          location_name?: string | null;
          public?: boolean;
          slug?: string | null;
          status?: string | null;
          time_end?: string | null;
          time_start?: string | null;
          title_email?: string | null;
          title_slot?: string | null;
          workspace_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "public_event_timeslot_event_id_fkey";
            columns: ["event_id"];
            isOneToOne: false;
            referencedRelation: "event";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_event_timeslot_workspace_id_fkey";
            columns: ["workspace_id"];
            isOneToOne: false;
            referencedRelation: "workspace_members_view";
            referencedColumns: ["workspace_id"];
          },
          {
            foreignKeyName: "public_event_timeslot_workspace_id_fkey";
            columns: ["workspace_id"];
            isOneToOne: false;
            referencedRelation: "workspaces";
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
          workspace_id: number | null;
        };
        Insert: {
          id?: number;
          last_updated?: string | null;
          name?: string | null;
          notes?: string | null;
          workspace_id?: number | null;
        };
        Update: {
          id?: number;
          last_updated?: string | null;
          name?: string | null;
          notes?: string | null;
          workspace_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "list_workspace_id_fkey";
            columns: ["workspace_id"];
            isOneToOne: false;
            referencedRelation: "workspace_members_view";
            referencedColumns: ["workspace_id"];
          },
          {
            foreignKeyName: "list_workspace_id_fkey";
            columns: ["workspace_id"];
            isOneToOne: false;
            referencedRelation: "workspaces";
            referencedColumns: ["id"];
          }
        ];
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
            referencedRelation: "alessandro_export";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "seat_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "alessandro_view";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "seat_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_inticket_with_email_view";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "seat_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_meta";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "seat_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_meta_for_export";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "seat_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "seat_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets_checkin";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "seat_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets_seats";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "seat_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "appointments";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "seat_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "attendance_log_with_links";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "seat_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "contatti_e_incarichi";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "seat_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "liste_invitati_due";
            referencedColumns: ["appointment_id"];
          }
        ];
      };
      temp: {
        Row: {
          appointment_category_id: number | null;
          contact_id: number | null;
        };
        Insert: {
          appointment_category_id?: number | null;
          contact_id?: number | null;
        };
        Update: {
          appointment_category_id?: number | null;
          contact_id?: number | null;
        };
        Relationships: [];
      };
      temp_color: {
        Row: {
          color_id: number | null;
          created_at: string;
          id: number;
        };
        Insert: {
          color_id?: number | null;
          created_at?: string;
          id?: number;
        };
        Update: {
          color_id?: number | null;
          created_at?: string;
          id?: number;
        };
        Relationships: [];
      };
      ticket: {
        Row: {
          appointment_id: number | null;
          created_at: string | null;
          entry: string | null;
          event_id: number | null;
          id: string;
          seat_id: number | null;
          show: boolean | null;
          status: string | null;
        };
        Insert: {
          appointment_id?: number | null;
          created_at?: string | null;
          entry?: string | null;
          event_id?: number | null;
          id?: string;
          seat_id?: number | null;
          show?: boolean | null;
          status?: string | null;
        };
        Update: {
          appointment_id?: number | null;
          created_at?: string | null;
          entry?: string | null;
          event_id?: number | null;
          id?: string;
          seat_id?: number | null;
          show?: boolean | null;
          status?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "public_ticket_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "alessandro_export";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "public_ticket_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "alessandro_view";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "public_ticket_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_inticket_with_email_view";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "public_ticket_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_meta";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "public_ticket_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_meta_for_export";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "public_ticket_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "public_ticket_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets_checkin";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "public_ticket_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets_seats";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "public_ticket_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "appointments";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_ticket_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "attendance_log_with_links";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "public_ticket_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "contatti_e_incarichi";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "public_ticket_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "liste_invitati_due";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "public_ticket_event_id_fkey";
            columns: ["event_id"];
            isOneToOne: false;
            referencedRelation: "event";
            referencedColumns: ["id"];
          }
        ];
      };
      ticket_ASSEMBLEA: {
        Row: {
          appointment_id: number | null;
          created_at: string | null;
          entry: string | null;
          event_id: number | null;
          id: string;
          seat_id: number | null;
          show: boolean | null;
          status: string | null;
        };
        Insert: {
          appointment_id?: number | null;
          created_at?: string | null;
          entry?: string | null;
          event_id?: number | null;
          id?: string;
          seat_id?: number | null;
          show?: boolean | null;
          status?: string | null;
        };
        Update: {
          appointment_id?: number | null;
          created_at?: string | null;
          entry?: string | null;
          event_id?: number | null;
          id?: string;
          seat_id?: number | null;
          show?: boolean | null;
          status?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "public_ticket_ASSEMBLEA_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "alessandro_export";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "public_ticket_ASSEMBLEA_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "alessandro_view";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "public_ticket_ASSEMBLEA_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_inticket_with_email_view";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "public_ticket_ASSEMBLEA_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_meta";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "public_ticket_ASSEMBLEA_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_meta_for_export";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "public_ticket_ASSEMBLEA_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "public_ticket_ASSEMBLEA_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets_checkin";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "public_ticket_ASSEMBLEA_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets_seats";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "public_ticket_ASSEMBLEA_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "appointments";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_ticket_ASSEMBLEA_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "attendance_log_with_links";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "public_ticket_ASSEMBLEA_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "contatti_e_incarichi";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "public_ticket_ASSEMBLEA_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "liste_invitati_due";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "public_ticket_ASSEMBLEA_event_id_fkey";
            columns: ["event_id"];
            isOneToOne: false;
            referencedRelation: "event";
            referencedColumns: ["id"];
          }
        ];
      };
      ticket_timeslot: {
        Row: {
          created_at: string;
          event_timeslot_id: number | null;
          id: number;
          ticket_id: string | null;
        };
        Insert: {
          created_at?: string;
          event_timeslot_id?: number | null;
          id?: number;
          ticket_id?: string | null;
        };
        Update: {
          created_at?: string;
          event_timeslot_id?: number | null;
          id?: number;
          ticket_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "public_ticket_timeslot_event_timeslot_id_fkey";
            columns: ["event_timeslot_id"];
            isOneToOne: false;
            referencedRelation: "event_timeslot";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_ticket_timeslot_ticket_id_fkey";
            columns: ["ticket_id"];
            isOneToOne: false;
            referencedRelation: "all_appointments_view";
            referencedColumns: ["ticket_code"];
          },
          {
            foreignKeyName: "public_ticket_timeslot_ticket_id_fkey";
            columns: ["ticket_id"];
            isOneToOne: false;
            referencedRelation: "all_appointments_with_email_view";
            referencedColumns: ["ticket_code"];
          },
          {
            foreignKeyName: "public_ticket_timeslot_ticket_id_fkey";
            columns: ["ticket_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets_checkin";
            referencedColumns: ["ticket_uuid"];
          },
          {
            foreignKeyName: "public_ticket_timeslot_ticket_id_fkey";
            columns: ["ticket_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets_with_entry";
            referencedColumns: ["ticket_code"];
          },
          {
            foreignKeyName: "public_ticket_timeslot_ticket_id_fkey";
            columns: ["ticket_id"];
            isOneToOne: false;
            referencedRelation: "event_ticket_view";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_ticket_timeslot_ticket_id_fkey";
            columns: ["ticket_id"];
            isOneToOne: false;
            referencedRelation: "liveticket";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_ticket_timeslot_ticket_id_fkey";
            columns: ["ticket_id"];
            isOneToOne: false;
            referencedRelation: "liveticket2";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_ticket_timeslot_ticket_id_fkey";
            columns: ["ticket_id"];
            isOneToOne: false;
            referencedRelation: "ticket";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_ticket_timeslot_ticket_id_fkey";
            columns: ["ticket_id"];
            isOneToOne: false;
            referencedRelation: "ticket_to_hide";
            referencedColumns: ["id"];
          }
        ];
      };
      "ticket-extra": {
        Row: {
          created_at: string;
          description: string | null;
          entry: string | null;
          full_name: string | null;
          id: number;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          entry?: string | null;
          full_name?: string | null;
          id?: number;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          entry?: string | null;
          full_name?: string | null;
          id?: number;
        };
        Relationships: [];
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
      alessandro_export: {
        Row: {
          app_id: number | null;
          bibbia: string | null;
          contact_id: number | null;
          created_at: string | null;
          first_name: string | null;
          last_name: string | null;
          meta_action: string | null;
          rn: number | null;
        };
        Relationships: [];
      };
      alessandro_view: {
        Row: {
          app_id: number | null;
          bibbia: string | null;
          contact_id: number | null;
          created_at: string | null;
          first_name: string | null;
          last_name: string | null;
          meta_action: string | null;
        };
        Relationships: [];
      };
      all_appointments_view: {
        Row: {
          accept_link: string | null;
          cind: string | null;
          company: string | null;
          email_uuid: string | null;
          external_code: string | null;
          first_name: string | null;
          job_title: string | null;
          last_name: string | null;
          list_name: string | null;
          logged_action: string | null;
          refuse_link: string | null;
          ticket_code: string | null;
        };
        Relationships: [];
      };
      all_appointments_with_email_view: {
        Row: {
          accept_link: string | null;
          cind: string | null;
          company: string | null;
          email: string | null;
          email_uuid: string | null;
          external_code: string | null;
          first_name: string | null;
          job_title: string | null;
          last_name: string | null;
          list_name: string | null;
          logged_action: string | null;
          refuse_link: string | null;
          ticket_code: string | null;
        };
        Relationships: [];
      };
      all_guest_inticket_with_email_view: {
        Row: {
          appo_id: number | null;
          bibbia: string | null;
          categoria: string | null;
          cognome: string | null;
          email: string | null;
          job_title: string | null;
          last_action: string | null;
          nome: string | null;
          presso: string | null;
        };
        Relationships: [];
      };
      all_guest_meta: {
        Row: {
          app_id: number | null;
          bibbia: string | null;
          carica: string | null;
          categoria: string | null;
          cognome: string | null;
          contact_id: number | null;
          created_at: string | null;
          meta_action: string | null;
          nome: string | null;
          presso: string | null;
        };
        Relationships: [];
      };
      all_guest_meta_for_export: {
        Row: {
          app_id: number | null;
          bibbia: string | null;
          carica: string | null;
          categoria: string | null;
          cognome: string | null;
          contact_id: number | null;
          created_at: string | null;
          meta_action: string | null;
          nome: string | null;
          presso: string | null;
          rn: number | null;
        };
        Relationships: [];
      };
      all_guest_tickets: {
        Row: {
          appo_id: number | null;
          bibbia: string | null;
          categoria: string | null;
          cognome: string | null;
          job_title: string | null;
          last_action: string | null;
          nome: string | null;
          presso: string | null;
          rn: number | null;
        };
        Relationships: [];
      };
      all_guest_tickets_checkin: {
        Row: {
          appointment_id: number | null;
          bibbia: string | null;
          carica: string | null;
          categoria: string | null;
          ckeckin: string | null;
          cognome: string | null;
          created_at: string | null;
          fila: string | null;
          last_action: string | null;
          nome: string | null;
          posto: string | null;
          presso: string | null;
          rn: number | null;
          settore: string | null;
          ticket_uuid: string | null;
        };
        Relationships: [];
      };
      all_guest_tickets_seats: {
        Row: {
          appo_id: number | null;
          bibbia: string | null;
          categoria: string | null;
          cognome: string | null;
          job_title: string | null;
          last_action: string | null;
          nome: string | null;
          presso: string | null;
          rn: number | null;
          row: string | null;
          seat: string | null;
          sector: string | null;
        };
        Relationships: [];
      };
      all_guest_tickets_with_entry: {
        Row: {
          accept_link: string | null;
          cind: string | null;
          company: string | null;
          email_uuid: string | null;
          entry: string | null;
          external_code: string | null;
          first_name: string | null;
          job_title: string | null;
          last_name: string | null;
          list_name: string | null;
          logged_action: string | null;
          refuse_link: string | null;
          ticket_code: string | null;
        };
        Relationships: [];
      };
      appointment_list_view: {
        Row: {
          appointment_id: number | null;
          id: number | null;
          list_id: number | null;
        };
        Insert: {
          appointment_id?: number | null;
          id?: number | null;
          list_id?: number | null;
        };
        Update: {
          appointment_id?: number | null;
          id?: number | null;
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
            foreignKeyName: "appointment_list_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "alessandro_export";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "appointment_list_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "alessandro_view";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "appointment_list_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_inticket_with_email_view";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "appointment_list_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_meta";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "appointment_list_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_meta_for_export";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "appointment_list_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "appointment_list_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets_checkin";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "appointment_list_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets_seats";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "appointment_list_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "attendance_log_with_links";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "appointment_list_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "contatti_e_incarichi";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "appointment_list_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "liste_invitati_due";
            referencedColumns: ["appointment_id"];
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
          }
        ];
      };
      attendance_log_with_links: {
        Row: {
          accept_link: string | null;
          action: string | null;
          appointment_id: number | null;
          cind_name: string | null;
          city: string | null;
          company_name: string | null;
          email: string | null;
          first_name: string | null;
          job_title: string | null;
          last_name: string | null;
          refuse_link: string | null;
          region: string | null;
          ticket_id: string | null;
        };
        Relationships: [];
      };
      confermati_non_seduti: {
        Row: {
          bibbia: string | null;
          carica: string | null;
          cognome: string | null;
          colore: string | null;
          lettera: string | null;
          nome: string | null;
          presso: string | null;
        };
        Relationships: [];
      };
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
      contatti_e_incarichi: {
        Row: {
          appointment_category_id: number | null;
          appointment_id: number | null;
          associative_status: string | null;
          cind_name: string | null;
          company_external_code: string | null;
          company_name: string | null;
          contact_external_code: string | null;
          contact_source: string | null;
          first_name: string | null;
          id: number | null;
          job_title: string | null;
          last_name: string | null;
          logged_action: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "appointments_appointment_category_id_fkey";
            columns: ["appointment_category_id"];
            isOneToOne: false;
            referencedRelation: "appointment_categories";
            referencedColumns: ["id"];
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
      event_attendance_log: {
        Row: {
          appointment_email: string | null;
          appointment_id: number | null;
          cind_id: number | null;
          cind_name: string | null;
          city: string | null;
          company_name: string | null;
          conferma: string | null;
          created_at: string | null;
          event_id: number | null;
          first_name: string | null;
          id: number | null;
          job_title: string | null;
          last_name: string | null;
          link_accepted: string | null;
          link_refused: string | null;
          logged_action: string | null;
          note: string | null;
          region: string | null;
          state: string | null;
          status: string | null;
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
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "alessandro_export";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "alessandro_view";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_inticket_with_email_view";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_meta";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_meta_for_export";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets_checkin";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets_seats";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "attendance_log_with_links";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "contatti_e_incarichi";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "liste_invitati_due";
            referencedColumns: ["appointment_id"];
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
      event_attendance_log_link: {
        Row: {
          appointment_email: string | null;
          appointment_id: number | null;
          city: string | null;
          company_name: string | null;
          conferma: string | null;
          created_at: string | null;
          event_id: number | null;
          first_name: string | null;
          id: number | null;
          job_title: string | null;
          last_name: string | null;
          link_accepted: string | null;
          link_refused: string | null;
          logged_action: string | null;
          note: string | null;
          region: string | null;
          state: string | null;
          status: string | null;
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
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "alessandro_export";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "alessandro_view";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_inticket_with_email_view";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_meta";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_meta_for_export";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets_checkin";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets_seats";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "attendance_log_with_links";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "contatti_e_incarichi";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "liste_invitati_due";
            referencedColumns: ["appointment_id"];
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
      event_attendance_log_live: {
        Row: {
          appointment_email: string | null;
          appointment_id: number | null;
          bibbia: string | null;
          cind_id: number | null;
          cind_name: string | null;
          city: string | null;
          company_name: string | null;
          conferma: string | null;
          created_at: string | null;
          event_id: number | null;
          first_name: string | null;
          id: number | null;
          job_title: string | null;
          last_name: string | null;
          link_accepted: string | null;
          link_refused: string | null;
          logged_action: string | null;
          note: string | null;
          region: string | null;
          state: string | null;
          status: string | null;
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
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "alessandro_export";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "alessandro_view";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_inticket_with_email_view";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_meta";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_meta_for_export";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets_checkin";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets_seats";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "attendance_log_with_links";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "contatti_e_incarichi";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "liste_invitati_due";
            referencedColumns: ["appointment_id"];
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
      event_attendance_log_new: {
        Row: {
          appointment_email: string | null;
          appointment_id: number | null;
          city: string | null;
          company_name: string | null;
          conferma: string | null;
          created_at: string | null;
          event_id: number | null;
          first_name: string | null;
          id: number | null;
          job_title: string | null;
          last_name: string | null;
          logged_action: string | null;
          note: string | null;
          region: string | null;
          state: string | null;
          status: string | null;
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
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "alessandro_export";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "alessandro_view";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_inticket_with_email_view";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_meta";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_meta_for_export";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets_checkin";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets_seats";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "attendance_log_with_links";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "contatti_e_incarichi";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "event_appointment_meta_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "liste_invitati_due";
            referencedColumns: ["appointment_id"];
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
      event_ticket_view: {
        Row: {
          created_at: string | null;
          first_name: string | null;
          id: string | null;
          job_title: string | null;
          last_name: string | null;
          name: string | null;
          seat: string | null;
          seat_row: string | null;
          seat_sector: string | null;
        };
        Relationships: [];
      };
      guest_list_view: {
        Row: {
          appointment_id: number | null;
          id: number | null;
          list_id: number | null;
        };
        Insert: {
          appointment_id?: number | null;
          id?: number | null;
          list_id?: number | null;
        };
        Update: {
          appointment_id?: number | null;
          id?: number | null;
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
            foreignKeyName: "appointment_list_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "alessandro_export";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "appointment_list_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "alessandro_view";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "appointment_list_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_inticket_with_email_view";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "appointment_list_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_meta";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "appointment_list_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_meta_for_export";
            referencedColumns: ["app_id"];
          },
          {
            foreignKeyName: "appointment_list_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "appointment_list_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets_checkin";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "appointment_list_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "all_guest_tickets_seats";
            referencedColumns: ["appo_id"];
          },
          {
            foreignKeyName: "appointment_list_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "attendance_log_with_links";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "appointment_list_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "contatti_e_incarichi";
            referencedColumns: ["appointment_id"];
          },
          {
            foreignKeyName: "appointment_list_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "liste_invitati_due";
            referencedColumns: ["appointment_id"];
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
          }
        ];
      };
      liste_invitati: {
        Row: {
          accept_link: string | null;
          appointment_creation_date: string | null;
          appointment_emails_uuid: string | null;
          cind: string | null;
          company: string | null;
          contact_creation_date: string | null;
          external_code: string | null;
          first_name: string | null;
          job_title: string | null;
          last_name: string | null;
          list_id: number | null;
          list_name: string | null;
          refuse_link: string | null;
          source: string | null;
        };
        Relationships: [
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
          }
        ];
      };
      liste_invitati_due: {
        Row: {
          accept_link: string | null;
          appointment_creation_date: string | null;
          appointment_emails_uuid: string | null;
          appointment_id: number | null;
          bibbia_name: string | null;
          company: string | null;
          contact_creation_date: string | null;
          contact_external_code: string | null;
          contact_id: number | null;
          first_name: string | null;
          job_title: string | null;
          last_name: string | null;
          list_id: number | null;
          list_name: string | null;
          logged_action: string | null;
          refuse_link: string | null;
          source: string | null;
        };
        Relationships: [
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
          }
        ];
      };
      liveticket: {
        Row: {
          appointment_category_id: number | null;
          created_at: string | null;
          entry: string | null;
          first_name: string | null;
          id: string | null;
          job_title: string | null;
          last_name: string | null;
          name: string | null;
          seat: string | null;
          seat_row: string | null;
          seat_sector: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "appointments_appointment_category_id_fkey";
            columns: ["appointment_category_id"];
            isOneToOne: false;
            referencedRelation: "appointment_categories";
            referencedColumns: ["id"];
          }
        ];
      };
      liveticket2: {
        Row: {
          appointment_category_id: number | null;
          created_at: string | null;
          entry: string | null;
          first_name: string | null;
          id: string | null;
          job_title: string | null;
          last_name: string | null;
          name: string | null;
          seat: string | null;
          seat_row: string | null;
          seat_sector: string | null;
          show: boolean | null;
        };
        Relationships: [
          {
            foreignKeyName: "appointments_appointment_category_id_fkey";
            columns: ["appointment_category_id"];
            isOneToOne: false;
            referencedRelation: "appointment_categories";
            referencedColumns: ["id"];
          }
        ];
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
      simplified_view_contacts_with_appointments: {
        Row: {
          appointments: Json | null;
          bibbia_id: number | null;
          bibbia_name: string | null;
          date_of_birth: string | null;
          first_name: string | null;
          id: number | null;
          last_name: string | null;
          personal_title_id: number | null;
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
          },
          {
            foreignKeyName: "public_contacts_bibbia_id_fkey";
            columns: ["bibbia_id"];
            isOneToOne: false;
            referencedRelation: "bibbia";
            referencedColumns: ["id"];
          }
        ];
      };
      ticket_to_hide: {
        Row: {
          first_name: string | null;
          id: string | null;
          job_title: string | null;
          name: string | null;
          row: string | null;
          seat: string | null;
          sector: string | null;
          upper: string | null;
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
      cancel_connection: {
        Args: {
          connection_id: string;
          updated_by: string;
        };
        Returns: Json;
      };
      check_ticket: {
        Args: {
          event_id: number;
          appointment_ids: number[];
        };
        Returns: Json;
      };
      check_ticket_exist: {
        Args: {
          appointment_id_input: number;
        };
        Returns: {
          appointment_id: number | null;
          created_at: string | null;
          entry: string | null;
          event_id: number | null;
          id: string;
          seat_id: number | null;
          show: boolean | null;
          status: string | null;
        }[];
      };
      checkin: {
        Args: {
          appointment_id_input: number;
        };
        Returns: string;
      };
      confermatinonsedutipercategoria: {
        Args: {
          letter_input: string;
        };
        Returns: {
          app_id: number;
          cognome: string;
          nome: string;
          carica: string;
          azienda: string;
          categoria: string;
          lettera: string;
          bibbia: string;
          conferma: string;
          note: string;
          colore: string;
        }[];
      };
      confirmed_not_seated_bycat: {
        Args: {
          letter_input: string;
        };
        Returns: {
          app_id: number;
          cognome: string;
          nome: string;
          carica: string;
          azienda: string;
          colore: string;
          categoria: string;
          lettera: string;
          cind: string;
          fila: string;
          posto: string;
          settore: string;
          flag: string;
          conferma: string;
          note: string;
          ticket: string;
          contatto: string;
        }[];
      };
      create_ticket: {
        Args: {
          appointment_id_input: number;
        };
        Returns: string;
      };
      create_ticket_no_entry: {
        Args: {
          appointment_id_input: number;
          seat_id_input: number;
        };
        Returns: string;
      };
      delete_all_seats: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      delete_seat: {
        Args: {
          record_input: number;
        };
        Returns: string;
      };
      elenco_invitati: {
        Args: Record<PropertyKey, never>;
        Returns: {
          cognome: string;
          nome: string;
          carica: string;
          azienda: string;
          codice_esterno: string;
          cind: string;
          source: string;
          data_creazione_contatto: string;
          data_creazione_appointment: string;
          nome_lista: string;
          id_appointment_list: number;
        }[];
      };
      get_all_cat: {
        Args: Record<PropertyKey, never>;
        Returns: {
          nome: string;
          code: string;
          lettera: string;
          colore: string;
          tipo: string;
        }[];
      };
      get_all_registered: {
        Args: Record<PropertyKey, never>;
        Returns: {
          app_id: number;
          cognome: string;
          nome: string;
          azienda: string;
          categoria: string;
          dataora: string;
        }[];
      };
      get_all_seats: {
        Args: Record<PropertyKey, never>;
        Returns: {
          fila: string;
          posto: string;
          settore: string;
          descrizione: string;
          cod: number;
          cognome: string;
          nome: string;
          carica: string;
          id: number;
          flag: string;
        }[];
      };
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
      get_attendance:
        | {
            Args: {
              complete: boolean;
            };
            Returns: {
              first_name: string;
              last_name: string;
              id: number;
              event_id: number;
              appointment_id: number;
              status: string;
              created_at: string;
              note: string;
              conferma: string;
              logged_action: string;
              appointment_email: string;
            }[];
          }
        | {
            Args: {
              complete: boolean;
              items: number;
              page: number;
            };
            Returns: {
              first_name: string;
              last_name: string;
              id: number;
              event_id: number;
              appointment_id: number;
              status: string;
              created_at: string;
              note: string;
              conferma: string;
              logged_action: string;
              appointment_email: string;
            }[];
          };
      get_attendance_paginated: {
        Args: {
          complete: boolean;
          items: number;
          page: number;
        };
        Returns: {
          first_name: string;
          last_name: string;
          id: number;
          event_id: number;
          appointment_id: number;
          status: string;
          created_at: string;
          note: string;
          conferma: string;
          logged_action: string;
          appointment_email: string;
        }[];
      };
      get_current_user_id: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      get_invited_lists: {
        Args: Record<PropertyKey, never>;
        Returns: {
          id: number;
          name: string;
          notes: string;
          contacts_count: number;
          has_duplicates: boolean;
        }[];
      };
      get_jsonb_param_value: {
        Args: {
          args: Json;
          param_name: string;
          default_value?: string;
        };
        Returns: string;
      };
      get_seat_list: {
        Args: Record<PropertyKey, never>;
        Returns: {
          fila: string;
          posto: string;
          settore: string;
          descrizione: string;
          cognome: string;
          nome: string;
        }[];
      };
      get_selected_invited_lists_detail: {
        Args: {
          selected_list_id: number;
          items: number;
          page: number;
        };
        Returns: {
          id: number;
          notes: string;
          name: string;
          appointments_count: number;
          has_duplicates: boolean;
          appointments: Json;
        }[];
      };
      get_selected_invited_lists_detail_csv: {
        Args: {
          selected_list_id: number;
        };
        Returns: {
          first_name: string;
          last_name: string;
          company_name: string;
          link_accepted: string;
          link_refused: string;
          email: string;
        }[];
      };
      get_selected_invited_lists_detail_new: {
        Args: {
          selected_list_id: number;
          items: number;
          page: number;
        };
        Returns: {
          id: number;
          notes: string;
          name: string;
          appointments_count: number;
          has_duplicates: boolean;
          appointments: Json;
        }[];
      };
      how_many_in: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      insert_appointments_list: {
        Args: {
          appointment_ids: number[];
          list_ids: number[];
        };
        Returns: undefined;
      };
      insert_reserved_seat: {
        Args: {
          fila_input: string;
          posto_input: string;
          settore_input: string;
          description_input: string;
        };
        Returns: string;
      };
      insert_seat: {
        Args: {
          fila_input: string;
          posto_input: string;
          settore_input: string;
          description_input: string;
          record_input: number;
        };
        Returns: string;
      };
      is_current_user_super_user: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
      list_confirmed_no_seated: {
        Args: Record<PropertyKey, never>;
        Returns: {
          app_id: number;
          cognome: string;
          nome: string;
          carica: string;
          azienda: string;
          colore: string;
          categoria: string;
          lettera: string;
          cind: string;
          fila: string;
          posto: string;
          settore: string;
          flag: string;
          conferma: string;
          note: string;
          ticket: string;
        }[];
      };
      list_has_duplicates: {
        Args: {
          searched_list_id: number;
        };
        Returns: Database["public"]["CompositeTypes"]["duplicates_table"][];
      };
      listadeiconfermatinonseduti: {
        Args: Record<PropertyKey, never>;
        Returns: {
          app_id: number;
          cognome: string;
          nome: string;
          carica: string;
          azienda: string;
          categoria: string;
          lettera: string;
          bibbia: string;
          conferma: string;
          note: string;
          colore: string;
        }[];
      };
      new_cog_search: {
        Args: {
          cog_input: string;
        };
        Returns: {
          app_id: number;
          cognome: string;
          nome: string;
          carica: string;
          azienda: string;
          colore: string;
          categoria: string;
          lettera: string;
          cind: string;
          fila: string;
          posto: string;
          settore: string;
          flag: string;
          conferma: string;
          note: string;
          ticket: string;
        }[];
      };
      new_confirmed_not_seated_bycat:
        | {
            Args: Record<PropertyKey, never>;
            Returns: {
              cognome: string;
              nome: string;
              carica: string;
              presso: string;
              bibbia: string;
              colore: string;
              lettera: string;
            }[];
          }
        | {
            Args: {
              letter_input: string;
            };
            Returns: {
              app_id: number;
              cognome: string;
              nome: string;
              carica: string;
              azienda: string;
              colore: string;
              categoria: string;
              lettera: string;
              cind: string;
              fila: string;
              posto: string;
              settore: string;
              flag: string;
              conferma: string;
              note: string;
              ticket: string;
            }[];
          };
      pippo: {
        Args: {
          description_input: string;
          fila_input: string;
          posto_input: string;
          settore_input: string;
          id_input: number;
        };
        Returns: string;
      };
      remove_all_seat_from_tickets: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      reset_checkin: {
        Args: Record<PropertyKey, never>;
        Returns: string;
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
          email: string;
        }[];
      };
      search_already_seated: {
        Args: {
          contact_input: number;
        };
        Returns: {
          seat: string;
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
      search_cog_for_checkin: {
        Args: {
          cog_input: string;
        };
        Returns: {
          app_id: number;
          cognome: string;
          nome: string;
          carica: string;
          azienda: string;
          colore: string;
          categoria: string;
          lettera: string;
          cind: string;
          fila: string;
          posto: string;
          settore: string;
          flag: string;
          conferma: string;
          note: string;
          ticket: string;
        }[];
      };
      search_cog_for_seat: {
        Args: {
          cog_input: string;
        };
        Returns: {
          app_id: number;
          cognome: string;
          nome: string;
          carica: string;
          azienda: string;
          colore: string;
          categoria: string;
          lettera: string;
          cind: string;
          fila: string;
          posto: string;
          settore: string;
          flag: string;
          conferma: string;
          note: string;
          ticket: string;
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
      search_contacts_with_appointments_test: {
        Args: {
          args: Json;
        };
        Returns: Database["public"]["CompositeTypes"]["search_contacts_results"][];
      };
      search_ticket: {
        Args: {
          scan_input: string;
        };
        Returns: {
          app_id: number;
          cognome: string;
          nome: string;
          carica: string;
          azienda: string;
          colore: string;
          categoria: string;
          lettera: string;
          cind: string;
          fila: string;
          posto: string;
          settore: string;
          flag: string;
          conferma: string;
          note: string;
          ticket: string;
        }[];
      };
      seat_id_to_ticket: {
        Args: {
          id_input: string;
          seat_id_input: number;
        };
        Returns: string;
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
      uncheck_one: {
        Args: {
          id_input: number;
        };
        Returns: string;
      };
      update_cat: {
        Args: {
          appointment_id_input: number;
          cat_id_input: number;
        };
        Returns: string;
      };
      update_notes: {
        Args: {
          appointment_id_input: number;
          note_input: string;
        };
        Returns: string;
      };
      update_ticket_without_seat_id: {
        Args: {
          id_input: number;
        };
        Returns: string;
      };
      upsert_contact_test: {
        Args: {
          input: Json;
        };
        Returns: Json;
      };
      upsert_contact_test_2: {
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
        contact_id: number | null;
        first_name: string | null;
        last_name: string | null;
        appointment_id: number | null;
      };
      search_contacts_results: {
        contact_id: number | null;
        contact_first_name: string | null;
        contact_last_name: string | null;
        contact_date_of_birth: string | null;
        workspace_id: number | null;
        contact_status_id: number | null;
        contact_status_name: string | null;
        personal_title_id: number | null;
        personal_title_name: string | null;
        appointment_details: Json | null;
      };
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
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
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
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
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
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
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;
