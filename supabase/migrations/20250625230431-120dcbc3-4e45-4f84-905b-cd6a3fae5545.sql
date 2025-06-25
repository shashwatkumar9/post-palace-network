
-- Create enum types for various statuses and types
CREATE TYPE payment_method_type AS ENUM ('stripe', 'paypal', 'payoneer');
CREATE TYPE transaction_type AS ENUM ('deposit', 'withdrawal', 'purchase', 'earning', 'refund');
CREATE TYPE transaction_status AS ENUM ('pending', 'completed', 'failed', 'cancelled');
CREATE TYPE order_status AS ENUM ('pending', 'in_progress', 'completed', 'cancelled', 'dispute');
CREATE TYPE user_role AS ENUM ('buyer', 'publisher', 'both');

-- Create user profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  user_role user_role DEFAULT 'buyer',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create wallets table
CREATE TABLE public.wallets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  balance DECIMAL(10,2) DEFAULT 0.00 CHECK (balance >= 0),
  currency TEXT DEFAULT 'USD',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, currency)
);

-- Create payment methods table
CREATE TABLE public.payment_methods (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  method_type payment_method_type NOT NULL,
  account_details JSONB NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create transactions table
CREATE TABLE public.transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  wallet_id UUID NOT NULL REFERENCES public.wallets(id) ON DELETE CASCADE,
  transaction_type transaction_type NOT NULL,
  amount DECIMAL(10,2) NOT NULL CHECK (amount > 0),
  currency TEXT DEFAULT 'USD',
  status transaction_status DEFAULT 'pending',
  payment_method payment_method_type,
  external_transaction_id TEXT,
  description TEXT,
  metadata JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create guest post orders table
CREATE TABLE public.guest_post_orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  buyer_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  publisher_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  content JSONB NOT NULL, -- Rich text editor content
  target_url TEXT NOT NULL,
  anchor_text TEXT NOT NULL,
  requirements JSONB, -- Publisher's requirements
  amount DECIMAL(10,2) NOT NULL CHECK (amount > 0),
  currency TEXT DEFAULT 'USD',
  status order_status DEFAULT 'pending',
  deadline TIMESTAMPTZ,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create publisher requirements table
CREATE TABLE public.publisher_requirements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  publisher_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  website_url TEXT NOT NULL,
  domain_authority INTEGER,
  traffic_monthly INTEGER,
  price_per_post DECIMAL(10,2) NOT NULL CHECK (price_per_post > 0),
  content_guidelines JSONB,
  turnaround_time INTEGER, -- in days
  categories TEXT[],
  sample_posts TEXT[],
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wallets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payment_methods ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.guest_post_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.publisher_requirements ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert their own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- RLS Policies for wallets
CREATE POLICY "Users can view their own wallet" ON public.wallets
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update their own wallet" ON public.wallets
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own wallet" ON public.wallets
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- RLS Policies for payment methods
CREATE POLICY "Users can manage their own payment methods" ON public.payment_methods
  FOR ALL USING (auth.uid() = user_id);

-- RLS Policies for transactions
CREATE POLICY "Users can view their own transactions" ON public.transactions
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own transactions" ON public.transactions
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- RLS Policies for guest post orders
CREATE POLICY "Buyers can view their orders" ON public.guest_post_orders
  FOR SELECT USING (auth.uid() = buyer_id);
CREATE POLICY "Publishers can view orders assigned to them" ON public.guest_post_orders
  FOR SELECT USING (auth.uid() = publisher_id);
CREATE POLICY "Buyers can create orders" ON public.guest_post_orders
  FOR INSERT WITH CHECK (auth.uid() = buyer_id);
CREATE POLICY "Buyers and publishers can update relevant orders" ON public.guest_post_orders
  FOR UPDATE USING (auth.uid() = buyer_id OR auth.uid() = publisher_id);

-- RLS Policies for publisher requirements
CREATE POLICY "Publishers can manage their requirements" ON public.publisher_requirements
  FOR ALL USING (auth.uid() = publisher_id);
CREATE POLICY "Anyone can view active publisher requirements" ON public.publisher_requirements
  FOR SELECT USING (is_active = true);

-- Create function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1))
  );
  
  INSERT INTO public.wallets (user_id, balance, currency)
  VALUES (NEW.id, 0.00, 'USD');
  
  RETURN NEW;
END;
$$;

-- Create trigger for new user registration
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create function to update wallet balance
CREATE OR REPLACE FUNCTION public.update_wallet_balance()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = ''
AS $$
BEGIN
  IF NEW.status = 'completed' AND OLD.status != 'completed' THEN
    IF NEW.transaction_type IN ('deposit', 'earning', 'refund') THEN
      UPDATE public.wallets 
      SET balance = balance + NEW.amount,
          updated_at = NOW()
      WHERE id = NEW.wallet_id;
    ELSIF NEW.transaction_type IN ('withdrawal', 'purchase') THEN
      UPDATE public.wallets 
      SET balance = balance - NEW.amount,
          updated_at = NOW()
      WHERE id = NEW.wallet_id AND balance >= NEW.amount;
    END IF;
  END IF;
  RETURN NEW;
END;
$$;

-- Create trigger for wallet balance updates
CREATE TRIGGER on_transaction_status_change
  AFTER UPDATE ON public.transactions
  FOR EACH ROW EXECUTE FUNCTION public.update_wallet_balance();
