-- Update admin user email to match new domain
UPDATE auth.users 
SET email = 'admin@wholepr.com' 
WHERE email = 'admin@prplatform.com';

UPDATE public.profiles 
SET email = 'admin@wholepr.com' 
WHERE email = 'admin@prplatform.com';