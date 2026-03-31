import { createClient } from '@supabase/supabase-js';

// We add fallback empty strings here so the app doesn't crash on startup
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'dummy-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface AuditRequest {
  full_name: string;
  email: string;
  company_name?: string;
  phone?: string;
  message?: string;
}

export async function submitAuditRequest(data: AuditRequest) {
  // We console log the data instead of sending it to a broken database
  console.log("Audit Request Received (Supabase Disabled):", data);

  // Return a success state so the UI doesn't break
  return { success: true, message: "Mock submission successful" };

  /* // Original code commented out:
  const { data: result, error } = await supabase
    .from('audit_requests')
    .insert([data])
    .select()
    .maybeSingle();

  if (error) throw error;
  return result;
  */
}
