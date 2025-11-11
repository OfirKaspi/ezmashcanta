import { createClient } from '@supabase/supabase-js';
import { CONFIG } from '@/config/config';

const supabaseUrl = CONFIG.SUPABASE_URL;
const supabaseAnonKey = CONFIG.SUPABASE_ANON_KEY;

// Create Supabase client with fallback for build time
// In production, these should be set in environment variables
const createSupabaseClient = () => {
  if (!supabaseUrl || !supabaseAnonKey || supabaseUrl === "" || supabaseAnonKey === "") {
    // Return a mock client for build time - will fail at runtime if not configured
    console.warn('⚠️ Supabase environment variables not set. Form submissions will not work until configured.');
    return createClient(
      'https://placeholder.supabase.co',
      'placeholder-anon-key'
    );
  }
  return createClient(supabaseUrl, supabaseAnonKey);
};

export const supabase = createSupabaseClient();

