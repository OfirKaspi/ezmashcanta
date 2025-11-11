-- Supabase Database Schema for Mortgage Landing Page
-- Run this SQL in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  mortgage_type TEXT NOT NULL CHECK (mortgage_type IN ('new', 'refinance', 'reverse')),
  source TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  ip_address INET,
  user_agent TEXT,
  converted BOOLEAN DEFAULT FALSE,
  notes TEXT
);

-- Add indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_mortgage_type ON leads(mortgage_type);
CREATE INDEX IF NOT EXISTS idx_leads_converted ON leads(converted);

-- Enable Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from authenticated users or service role
-- Adjust this based on your security requirements
CREATE POLICY "Allow public inserts" ON leads
  FOR INSERT
  WITH CHECK (true);

-- Optional: Create policy for service role to read all leads
-- This would be used server-side with service role key
CREATE POLICY "Service role can read all leads" ON leads
  FOR SELECT
  USING (true);

