export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      admin_users: {
        Row: {
          admin_role: Database["public"]["Enums"]["admin_role"]
          created_at: string | null
          id: string
          is_active: boolean | null
          permissions: Json | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          admin_role: Database["public"]["Enums"]["admin_role"]
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          permissions?: Json | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          admin_role?: Database["public"]["Enums"]["admin_role"]
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          permissions?: Json | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      blog_posts: {
        Row: {
          author_id: string
          content: Json
          created_at: string | null
          excerpt: string | null
          featured_image: string | null
          id: string
          meta_description: string | null
          meta_title: string | null
          published_at: string | null
          slug: string
          status: Database["public"]["Enums"]["blog_status"] | null
          tags: string[] | null
          title: string
          updated_at: string | null
        }
        Insert: {
          author_id: string
          content: Json
          created_at?: string | null
          excerpt?: string | null
          featured_image?: string | null
          id?: string
          meta_description?: string | null
          meta_title?: string | null
          published_at?: string | null
          slug: string
          status?: Database["public"]["Enums"]["blog_status"] | null
          tags?: string[] | null
          title: string
          updated_at?: string | null
        }
        Update: {
          author_id?: string
          content?: Json
          created_at?: string | null
          excerpt?: string | null
          featured_image?: string | null
          id?: string
          meta_description?: string | null
          meta_title?: string | null
          published_at?: string | null
          slug?: string
          status?: Database["public"]["Enums"]["blog_status"] | null
          tags?: string[] | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "blog_posts_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "admin_users"
            referencedColumns: ["id"]
          },
        ]
      }
      guest_post_orders: {
        Row: {
          amount: number
          anchor_text: string
          buyer_id: string
          content: Json
          created_at: string | null
          currency: string | null
          deadline: string | null
          id: string
          notes: string | null
          publisher_id: string | null
          requirements: Json | null
          status: Database["public"]["Enums"]["order_status"] | null
          target_url: string
          title: string
          updated_at: string | null
        }
        Insert: {
          amount: number
          anchor_text: string
          buyer_id: string
          content: Json
          created_at?: string | null
          currency?: string | null
          deadline?: string | null
          id?: string
          notes?: string | null
          publisher_id?: string | null
          requirements?: Json | null
          status?: Database["public"]["Enums"]["order_status"] | null
          target_url: string
          title: string
          updated_at?: string | null
        }
        Update: {
          amount?: number
          anchor_text?: string
          buyer_id?: string
          content?: Json
          created_at?: string | null
          currency?: string | null
          deadline?: string | null
          id?: string
          notes?: string | null
          publisher_id?: string | null
          requirements?: Json | null
          status?: Database["public"]["Enums"]["order_status"] | null
          target_url?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      payment_methods: {
        Row: {
          account_details: Json
          created_at: string | null
          id: string
          is_active: boolean | null
          method_type: Database["public"]["Enums"]["payment_method_type"]
          updated_at: string | null
          user_id: string
        }
        Insert: {
          account_details: Json
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          method_type: Database["public"]["Enums"]["payment_method_type"]
          updated_at?: string | null
          user_id: string
        }
        Update: {
          account_details?: Json
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          method_type?: Database["public"]["Enums"]["payment_method_type"]
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      pr_reviews: {
        Row: {
          created_at: string | null
          feedback: string | null
          id: string
          order_id: string
          reviewed_at: string | null
          reviewer_id: string | null
          status: Database["public"]["Enums"]["approval_status"] | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          feedback?: string | null
          id?: string
          order_id: string
          reviewed_at?: string | null
          reviewer_id?: string | null
          status?: Database["public"]["Enums"]["approval_status"] | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          feedback?: string | null
          id?: string
          order_id?: string
          reviewed_at?: string | null
          reviewer_id?: string | null
          status?: Database["public"]["Enums"]["approval_status"] | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pr_reviews_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: true
            referencedRelation: "guest_post_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pr_reviews_reviewer_id_fkey"
            columns: ["reviewer_id"]
            isOneToOne: false
            referencedRelation: "admin_users"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string
          full_name: string | null
          id: string
          updated_at: string | null
          user_role: Database["public"]["Enums"]["user_role"] | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email: string
          full_name?: string | null
          id: string
          updated_at?: string | null
          user_role?: Database["public"]["Enums"]["user_role"] | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string
          full_name?: string | null
          id?: string
          updated_at?: string | null
          user_role?: Database["public"]["Enums"]["user_role"] | null
        }
        Relationships: []
      }
      publisher_requirements: {
        Row: {
          categories: string[] | null
          content_guidelines: Json | null
          created_at: string | null
          domain_authority: number | null
          id: string
          is_active: boolean | null
          price_per_post: number
          publisher_id: string
          sample_posts: string[] | null
          traffic_monthly: number | null
          turnaround_time: number | null
          updated_at: string | null
          website_url: string
        }
        Insert: {
          categories?: string[] | null
          content_guidelines?: Json | null
          created_at?: string | null
          domain_authority?: number | null
          id?: string
          is_active?: boolean | null
          price_per_post: number
          publisher_id: string
          sample_posts?: string[] | null
          traffic_monthly?: number | null
          turnaround_time?: number | null
          updated_at?: string | null
          website_url: string
        }
        Update: {
          categories?: string[] | null
          content_guidelines?: Json | null
          created_at?: string | null
          domain_authority?: number | null
          id?: string
          is_active?: boolean | null
          price_per_post?: number
          publisher_id?: string
          sample_posts?: string[] | null
          traffic_monthly?: number | null
          turnaround_time?: number | null
          updated_at?: string | null
          website_url?: string
        }
        Relationships: []
      }
      transactions: {
        Row: {
          amount: number
          created_at: string | null
          currency: string | null
          description: string | null
          external_transaction_id: string | null
          id: string
          metadata: Json | null
          payment_method:
            | Database["public"]["Enums"]["payment_method_type"]
            | null
          status: Database["public"]["Enums"]["transaction_status"] | null
          transaction_type: Database["public"]["Enums"]["transaction_type"]
          updated_at: string | null
          user_id: string
          wallet_id: string
        }
        Insert: {
          amount: number
          created_at?: string | null
          currency?: string | null
          description?: string | null
          external_transaction_id?: string | null
          id?: string
          metadata?: Json | null
          payment_method?:
            | Database["public"]["Enums"]["payment_method_type"]
            | null
          status?: Database["public"]["Enums"]["transaction_status"] | null
          transaction_type: Database["public"]["Enums"]["transaction_type"]
          updated_at?: string | null
          user_id: string
          wallet_id: string
        }
        Update: {
          amount?: number
          created_at?: string | null
          currency?: string | null
          description?: string | null
          external_transaction_id?: string | null
          id?: string
          metadata?: Json | null
          payment_method?:
            | Database["public"]["Enums"]["payment_method_type"]
            | null
          status?: Database["public"]["Enums"]["transaction_status"] | null
          transaction_type?: Database["public"]["Enums"]["transaction_type"]
          updated_at?: string | null
          user_id?: string
          wallet_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "transactions_wallet_id_fkey"
            columns: ["wallet_id"]
            isOneToOne: false
            referencedRelation: "wallets"
            referencedColumns: ["id"]
          },
        ]
      }
      wallets: {
        Row: {
          balance: number | null
          created_at: string | null
          currency: string | null
          id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          balance?: number | null
          created_at?: string | null
          currency?: string | null
          id?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          balance?: number | null
          created_at?: string | null
          currency?: string | null
          id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      website_submissions: {
        Row: {
          additional_info: string | null
          admin_notes: string | null
          categories: string[] | null
          contact_email: string | null
          content_guidelines: Json | null
          created_at: string | null
          domain_authority: number | null
          id: string
          price_per_post: number
          publisher_id: string
          reviewed_at: string | null
          reviewed_by: string | null
          sample_posts: string[] | null
          status: Database["public"]["Enums"]["approval_status"] | null
          traffic_monthly: number | null
          updated_at: string | null
          website_url: string
        }
        Insert: {
          additional_info?: string | null
          admin_notes?: string | null
          categories?: string[] | null
          contact_email?: string | null
          content_guidelines?: Json | null
          created_at?: string | null
          domain_authority?: number | null
          id?: string
          price_per_post: number
          publisher_id: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          sample_posts?: string[] | null
          status?: Database["public"]["Enums"]["approval_status"] | null
          traffic_monthly?: number | null
          updated_at?: string | null
          website_url: string
        }
        Update: {
          additional_info?: string | null
          admin_notes?: string | null
          categories?: string[] | null
          contact_email?: string | null
          content_guidelines?: Json | null
          created_at?: string | null
          domain_authority?: number | null
          id?: string
          price_per_post?: number
          publisher_id?: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          sample_posts?: string[] | null
          status?: Database["public"]["Enums"]["approval_status"] | null
          traffic_monthly?: number | null
          updated_at?: string | null
          website_url?: string
        }
        Relationships: [
          {
            foreignKeyName: "website_submissions_reviewed_by_fkey"
            columns: ["reviewed_by"]
            isOneToOne: false
            referencedRelation: "admin_users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      create_admin_user: {
        Args: {
          user_email: string
          user_password: string
          user_full_name: string
          user_admin_role: Database["public"]["Enums"]["admin_role"]
        }
        Returns: string
      }
    }
    Enums: {
      admin_role:
        | "super_admin"
        | "content_moderator"
        | "finance_admin"
        | "support_admin"
      approval_status: "pending" | "approved" | "rejected"
      blog_status: "draft" | "published" | "archived"
      order_status:
        | "pending"
        | "in_progress"
        | "completed"
        | "cancelled"
        | "dispute"
      payment_method_type: "stripe" | "paypal" | "payoneer"
      transaction_status: "pending" | "completed" | "failed" | "cancelled"
      transaction_type:
        | "deposit"
        | "withdrawal"
        | "purchase"
        | "earning"
        | "refund"
      user_role: "buyer" | "publisher" | "both"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      admin_role: [
        "super_admin",
        "content_moderator",
        "finance_admin",
        "support_admin",
      ],
      approval_status: ["pending", "approved", "rejected"],
      blog_status: ["draft", "published", "archived"],
      order_status: [
        "pending",
        "in_progress",
        "completed",
        "cancelled",
        "dispute",
      ],
      payment_method_type: ["stripe", "paypal", "payoneer"],
      transaction_status: ["pending", "completed", "failed", "cancelled"],
      transaction_type: [
        "deposit",
        "withdrawal",
        "purchase",
        "earning",
        "refund",
      ],
      user_role: ["buyer", "publisher", "both"],
    },
  },
} as const
