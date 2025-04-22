import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wdjmkejewswmklcjyepk.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indkam1rZWpld3N3bWtsY2p5ZXBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzMzM0NzIsImV4cCI6MjA2MDkwOTQ3Mn0.RqynIDMUQq0Phx_3A2DpES7FakN7e5DLQl4WV4DJFCs'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

