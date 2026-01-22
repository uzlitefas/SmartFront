import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL!;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface News {
  id: string;
  title: string;
  content: string;
  image_url: string | null;
  category: string;
  published_date: string;
  author: string | null;
  is_featured: boolean;
  created_at: string;
}
