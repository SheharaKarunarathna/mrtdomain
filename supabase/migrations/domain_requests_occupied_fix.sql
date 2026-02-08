-- Add the 'occupied' column to the domain_requests table
ALTER TABLE domain_requests 
ADD COLUMN occupied text DEFAULT 'NO';

-- Update search policy to allow everyone to check availability
-- (If you already enabled RLS in the previous step)
CREATE POLICY "Public check availability" ON domain_requests
  FOR SELECT USING (true);
