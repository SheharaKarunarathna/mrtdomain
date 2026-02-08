-- Add price column to domain_requests to track the amount paid/to be paid
ALTER TABLE domain_requests ADD COLUMN IF NOT EXISTS price numeric(10, 2) DEFAULT 0.00;
