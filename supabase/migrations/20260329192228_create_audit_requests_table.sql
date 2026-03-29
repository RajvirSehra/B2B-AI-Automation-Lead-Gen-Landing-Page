/*
  # Create Audit Requests Table

  ## Purpose
  Store lead information from the "Request an Automation Audit" form on the landing page.

  ## New Tables
  - `audit_requests`
    - `id` (uuid, primary key) - Unique identifier for each request
    - `full_name` (text) - Contact's full name
    - `email` (text) - Contact's email address
    - `company_name` (text, optional) - Company name if provided
    - `phone` (text, optional) - Phone number if provided
    - `message` (text, optional) - Additional details about their needs
    - `created_at` (timestamptz) - Timestamp of request submission
    - `status` (text) - Request status (new, contacted, qualified, closed)

  ## Security
  - Enable RLS on audit_requests table
  - Allow public insert access (for form submissions from non-authenticated users)
  - Allow authenticated users to read all requests (for internal team access)

  ## Notes
  - This table is designed for lead capture from public-facing landing page
  - New requests default to 'new' status for easy filtering
  - Email validation should be handled client-side
*/

CREATE TABLE IF NOT EXISTS audit_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  company_name text DEFAULT '',
  phone text DEFAULT '',
  message text DEFAULT '',
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE audit_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert for audit requests"
  ON audit_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read all requests"
  ON audit_requests
  FOR SELECT
  TO authenticated
  USING (true);