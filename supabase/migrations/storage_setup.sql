-- 1. Create the bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('bank-slips', 'bank-slips', true)
ON CONFLICT (id) DO NOTHING;

-- 2. Set up RLS for the bucket
-- Allow public read access to all objects in the bank-slips bucket
CREATE POLICY "Public Access" ON storage.objects
  FOR SELECT USING (bucket_id = 'bank-slips');

-- Allow authenticated users to upload files to their own folder within the bucket
CREATE POLICY "Authenticated users can upload bank slips" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'bank-slips' 
    AND auth.role() = 'authenticated'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );

-- Allow users to delete their own files
CREATE POLICY "Users can delete their own bank slips" ON storage.objects
  FOR DELETE USING (
    bucket_id = 'bank-slips' 
    AND auth.uid()::text = (storage.foldername(name))[1]
  );
