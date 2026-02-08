-- Create a table for domain names
CREATE TABLE domain_names (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text UNIQUE NOT NULL,
  status text DEFAULT 'available' CHECK (status IN ('available', 'occupied', 'parked')),
  owner_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at timestamp with time zone DEFAULT now()
);

-- Enable RLS
ALTER TABLE domain_names ENABLE ROW LEVEL SECURITY;

-- Everyone can search domain names
CREATE POLICY "Public domain search" ON domain_names
  FOR SELECT USING (true);

-- Insert some dummy data for testing
INSERT INTO domain_names (name, status) VALUES 
('moratuwa.mrt.lk', 'occupied'),
('university.mrt.lk', 'occupied'),
('tech.mrt.lk', 'available');
