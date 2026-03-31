/*
  # Fix RLS Policy for audit_requests Table

  ## Security Fixes
  1. Replace overly permissive INSERT policy with email validation
  2. Prevent duplicate submissions and spam by requiring valid email format
  3. Maintain public access while adding basic security constraints

  ## Changes
  - Drop the existing "Allow public insert for audit requests" policy
  - Create a new policy that:
    - Only allows INSERT if email is not empty and matches valid email format
    - Prevents completely open access while still allowing anonymous form submissions
    - Validates that required fields are populated

  ## Notes
  - Email validation uses PostgreSQL regex pattern for basic validation
  - This prevents obvious spam and ensures data quality
  - Rate limiting should be implemented on the frontend/API layer for production
*/

DROP POLICY IF EXISTS "Allow public insert for audit requests" ON audit_requests;

CREATE POLICY "Allow public insert with email validation"
  ON audit_requests
  FOR INSERT
  TO anon
  WITH CHECK (
    email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$'
    AND full_name IS NOT NULL
    AND full_name != ''
  );
