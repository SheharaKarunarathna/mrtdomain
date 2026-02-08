-- 1. Add email column to profiles table
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS email text;

-- 2. Update the trigger function to include email
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, phone, organization)
  VALUES (
    new.id,
    new.email, -- Get email from auth.users top-level column
    new.raw_user_meta_data->>'full_name', 
    new.raw_user_meta_data->>'phone',
    new.raw_user_meta_data->>'organization'
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Note: We do NOT add hashed_password to public.profiles.
-- Supabase Auth stores passwords securely in the auth.users table using bcrypt.
-- Storing even hashed passwords in a public table is a security risk and unnecessary.
