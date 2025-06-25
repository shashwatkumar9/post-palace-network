
-- Create admin roles and permissions
CREATE TYPE admin_role AS ENUM ('super_admin', 'content_moderator', 'finance_admin', 'support_admin');
CREATE TYPE approval_status AS ENUM ('pending', 'approved', 'rejected');
CREATE TYPE blog_status AS ENUM ('draft', 'published', 'archived');

-- Create admin users table
CREATE TABLE public.admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  admin_role admin_role NOT NULL,
  permissions JSONB DEFAULT '{}',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id)
);

-- Create website submissions table (for publisher approval)
CREATE TABLE public.website_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  publisher_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  website_url TEXT NOT NULL,
  domain_authority INTEGER,
  traffic_monthly INTEGER,
  price_per_post DECIMAL(10,2) NOT NULL,
  content_guidelines JSONB,
  categories TEXT[],
  sample_posts TEXT[],
  contact_email TEXT,
  additional_info TEXT,
  status approval_status DEFAULT 'pending',
  admin_notes TEXT,
  reviewed_by UUID REFERENCES public.admin_users(id),
  reviewed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create blog posts table
CREATE TABLE public.blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content JSONB NOT NULL,
  featured_image TEXT,
  author_id UUID NOT NULL REFERENCES public.admin_users(id),
  status blog_status DEFAULT 'draft',
  published_at TIMESTAMPTZ,
  meta_title TEXT,
  meta_description TEXT,
  tags TEXT[],
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create PR review table (for article review)
CREATE TABLE public.pr_reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID NOT NULL REFERENCES public.guest_post_orders(id) ON DELETE CASCADE,
  reviewer_id UUID REFERENCES public.admin_users(id),
  status approval_status DEFAULT 'pending',
  feedback TEXT,
  reviewed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(order_id)
);

-- Enable RLS on admin tables
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.website_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pr_reviews ENABLE ROW LEVEL SECURITY;

-- Admin RLS Policies
CREATE POLICY "Admin users can view all admin data" ON public.admin_users
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.admin_users au 
      WHERE au.user_id = auth.uid() AND au.is_active = true
    )
  );

CREATE POLICY "Super admins can manage admin users" ON public.admin_users
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.admin_users au 
      WHERE au.user_id = auth.uid() AND au.admin_role = 'super_admin' AND au.is_active = true
    )
  );

-- Website submissions policies
CREATE POLICY "Publishers can view their submissions" ON public.website_submissions
  FOR SELECT USING (auth.uid() = publisher_id);

CREATE POLICY "Publishers can create submissions" ON public.website_submissions
  FOR INSERT WITH CHECK (auth.uid() = publisher_id);

CREATE POLICY "Admins can manage website submissions" ON public.website_submissions
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.admin_users au 
      WHERE au.user_id = auth.uid() AND au.is_active = true
    )
  );

-- Blog posts policies
CREATE POLICY "Anyone can read published blog posts" ON public.blog_posts
  FOR SELECT USING (status = 'published');

CREATE POLICY "Admins can manage blog posts" ON public.blog_posts
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.admin_users au 
      WHERE au.user_id = auth.uid() AND au.is_active = true
    )
  );

-- PR reviews policies
CREATE POLICY "Admins can manage PR reviews" ON public.pr_reviews
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.admin_users au 
      WHERE au.user_id = auth.uid() AND au.is_active = true
    )
  );

CREATE POLICY "Order owners can view their PR reviews" ON public.pr_reviews
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.guest_post_orders gpo 
      WHERE gpo.id = order_id AND (gpo.buyer_id = auth.uid() OR gpo.publisher_id = auth.uid())
    )
  );

-- Function to create admin user
CREATE OR REPLACE FUNCTION public.create_admin_user(
  user_email TEXT,
  user_password TEXT,
  user_full_name TEXT,
  user_admin_role admin_role
)
RETURNS UUID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  new_user_id UUID;
  new_admin_id UUID;
BEGIN
  -- Create auth user
  INSERT INTO auth.users (email, encrypted_password, email_confirmed_at, raw_user_meta_data)
  VALUES (
    user_email,
    crypt(user_password, gen_salt('bf')),
    NOW(),
    json_build_object('full_name', user_full_name)
  )
  RETURNING id INTO new_user_id;
  
  -- Create admin record
  INSERT INTO public.admin_users (user_id, admin_role)
  VALUES (new_user_id, user_admin_role)
  RETURNING id INTO new_admin_id;
  
  RETURN new_admin_id;
END;
$$;

-- Add indexes for better performance
CREATE INDEX idx_website_submissions_status ON public.website_submissions(status);
CREATE INDEX idx_blog_posts_slug ON public.blog_posts(slug);
CREATE INDEX idx_blog_posts_status ON public.blog_posts(status);
CREATE INDEX idx_pr_reviews_status ON public.pr_reviews(status);
CREATE INDEX idx_admin_users_role ON public.admin_users(admin_role);
