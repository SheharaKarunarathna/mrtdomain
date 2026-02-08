-- Create a table for domain registration requests
CREATE TABLE domain_requests (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  full_name text NOT NULL,
  desired_subdomain text NOT NULL,
  description text,
  email text NOT NULL,
  phone text NOT NULL,
  hosting_requirement text,
  special_requirements text,
  bank_slip_url text, -- URL to the file in Supabase Storage
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at timestamp with time zone DEFAULT now()
);

-- Enable Row Level Security (RLS)No
ALTER TABLE domain_requests ENABLE ROW LEVEL SECURITY;

-- Policy: Users can see their own requests
CREATE POLICY "Users can view their own requests" ON domain_requests
  FOR SELECT USING (auth.uid() = user_id);

-- Policy: Anyone can submit a request (or restrict to logged in users)
CREATE POLICY "Anyone can submit a request" ON domain_requests
  FOR INSERT WITH CHECK (true);

-- Create a storage bucket for bank slips if not already existing
-- Note: This part might need to be done via the Supabase UI for 'Public' access settings
-- But here is the SQL anyway:
-- INSERT INTO storage.buckets (id, name, public) VALUES ('bank-slips', 'bank-slips', true);
