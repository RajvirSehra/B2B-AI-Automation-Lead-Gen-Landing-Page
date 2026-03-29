import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface AuditRequest {
  full_name: string;
  email: string;
  company_name?: string;
  phone?: string;
  message?: string;
}

export async function submitAuditRequest(data: AuditRequest) {
  const { data: result, error } = await supabase
    .from('audit_requests')
    .insert([data])
    .select()
    .maybeSingle();

  if (error) throw error;
  return result;
}
