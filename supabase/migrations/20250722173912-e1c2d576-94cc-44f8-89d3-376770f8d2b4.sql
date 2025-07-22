
-- Let's see what admin users and profiles exist
SELECT 
  u.id as user_id,
  u.email,
  p.full_name,
  au.admin_role,
  au.is_active
FROM auth.users u
LEFT JOIN public.profiles p ON u.id = p.id
LEFT JOIN public.admin_users au ON u.id = au.user_id
WHERE u.email LIKE '%admin%' OR au.admin_role IS NOT NULL;

-- Let's also check if there's an orphaned profile without an admin_users record
SELECT p.*, au.admin_role
FROM public.profiles p
LEFT JOIN public.admin_users au ON p.id = au.user_id
WHERE au.user_id IS NULL AND p.email LIKE '%admin%';

-- Clean up and create admin user properly
-- First, let's create the admin_users record for any existing admin profile
INSERT INTO public.admin_users (user_id, admin_role, permissions, is_active, created_at, updated_at)
SELECT 
  p.id,
  'super_admin'::admin_role,
  '{
    "manage_users": true,
    "manage_content": true,
    "manage_finances": true,
    "manage_settings": true
  }'::jsonb,
  true,
  NOW(),
  NOW()
FROM public.profiles p
LEFT JOIN public.admin_users au ON p.id = au.user_id
WHERE p.email = 'admin@prplatform.com' AND au.user_id IS NULL;

-- Ensure there's a wallet for the admin user
INSERT INTO public.wallets (user_id, balance, currency, created_at, updated_at)
SELECT 
  p.id,
  0.00,
  'USD',
  NOW(),
  NOW()
FROM public.profiles p
LEFT JOIN public.wallets w ON p.id = w.user_id
WHERE p.email = 'admin@prplatform.com' AND w.user_id IS NULL;

-- If no admin user exists at all, create one
DO $$
DECLARE
    admin_exists boolean;
    new_user_id uuid;
BEGIN
    -- Check if admin user exists
    SELECT EXISTS(
        SELECT 1 FROM auth.users WHERE email = 'admin@prplatform.com'
    ) INTO admin_exists;
    
    -- If no admin user exists, create one
    IF NOT admin_exists THEN
        -- Generate a new UUID
        new_user_id := gen_random_uuid();
        
        -- Create auth user
        INSERT INTO auth.users (id, email, encrypted_password, email_confirmed_at, raw_user_meta_data, created_at, updated_at)
        VALUES (
            new_user_id,
            'admin@prplatform.com',
            crypt('AdminPass123!', gen_salt('bf')),
            NOW(),
            '{"full_name": "Platform Administrator"}'::jsonb,
            NOW(),
            NOW()
        );
        
        -- Create profile
        INSERT INTO public.profiles (id, email, full_name, user_role, created_at, updated_at)
        VALUES (
            new_user_id,
            'admin@prplatform.com',
            'Platform Administrator',
            'publisher'::user_role,
            NOW(),
            NOW()
        );
        
        -- Create admin record
        INSERT INTO public.admin_users (user_id, admin_role, permissions, is_active, created_at, updated_at)
        VALUES (
            new_user_id,
            'super_admin'::admin_role,
            '{
                "manage_users": true,
                "manage_content": true,
                "manage_finances": true,
                "manage_settings": true
            }'::jsonb,
            true,
            NOW(),
            NOW()
        );
        
        -- Create wallet
        INSERT INTO public.wallets (user_id, balance, currency, created_at, updated_at)
        VALUES (
            new_user_id,
            0.00,
            'USD',
            NOW(),
            NOW()
        );
    END IF;
END $$;
