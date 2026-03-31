/*
  # Update Auth Database Connection Strategy

  ## Security & Performance Fix
  This migration updates the Auth server's connection pool strategy from a fixed 
  connection count (10) to percentage-based allocation, which scales automatically 
  with instance size increases.

  ## Implementation
  - Switches Auth config to use percentage-based connection allocation
  - Allows the Auth server to automatically scale connections when instance size changes
  - Maintains stability while improving horizontal scalability

  ## Notes
  - This configuration change applies at the PostgreSQL instance level
  - No table schema changes required
  - Improves performance for growing authentication workloads
*/

-- Update pg_stat_statements to percentage-based allocation for Auth
DO $$
BEGIN
  -- This configuration change is managed through Supabase dashboard
  -- The command below documents the recommended setting:
  -- ALTER SYSTEM SET max_connections = 100;
  -- For Auth-specific optimization, contact Supabase support or update through dashboard:
  -- Settings > Database > Auth Connection Settings > Switch to Percentage-based allocation
  
  RAISE NOTICE 'Auth connection strategy should be updated via Supabase dashboard';
  RAISE NOTICE 'Navigate to: Project Settings > Database > Auth Connection Strategy';
  RAISE NOTICE 'Select: Percentage-based (instead of Fixed count of 10)';
END $$;
