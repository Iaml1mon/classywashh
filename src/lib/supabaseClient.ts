import { createClient } from '@supabase/supabase-js'

// Default values (only used if environment variables aren't available)
const defaultSupabaseUrl = 'https://wdjmkejewswmklcjyepk.supabase.co'
const defaultSupabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indkam1rZWpld3N3bWtsY2p5ZXBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzMzM0NzIsImV4cCI6MjA2MDkwOTQ3Mn0.RqynIDMUQq0Phx_3A2DpES7FakN7e5DLQl4WV4DJFCs'

// Use environment variables if available, fallback to defaults if not
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || defaultSupabaseUrl
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || defaultSupabaseAnonKey

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
