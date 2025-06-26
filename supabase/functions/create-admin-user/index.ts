
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { email, password, fullName, adminRole } = await req.json()

    // Create auth user
    const { data: authData, error: authError } = await supabaseClient.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: {
        full_name: fullName
      }
    })

    if (authError) {
      throw authError
    }

    const userId = authData.user.id

    // Create profile
    const { error: profileError } = await supabaseClient
      .from('profiles')
      .insert({
        id: userId,
        email,
        full_name: fullName,
        user_role: 'publisher'
      })

    if (profileError) {
      throw profileError
    }

    // Create admin user record
    const { error: adminError } = await supabaseClient
      .from('admin_users')
      .insert({
        user_id: userId,
        admin_role: adminRole,
        permissions: {
          manage_users: adminRole === 'super_admin',
          manage_content: ['super_admin', 'content_moderator'].includes(adminRole),
          manage_finances: ['super_admin', 'finance_admin'].includes(adminRole),
          manage_settings: adminRole === 'super_admin'
        },
        is_active: true
      })

    if (adminError) {
      throw adminError
    }

    // Create wallet
    const { error: walletError } = await supabaseClient
      .from('wallets')
      .insert({
        user_id: userId,
        balance: 0.00,
        currency: 'USD'
      })

    if (walletError) {
      throw walletError
    }

    return new Response(
      JSON.stringify({ success: true, userId }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})
