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
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
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
