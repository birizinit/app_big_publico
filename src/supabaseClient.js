import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xlglobxaxgiaafzsvtdg.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsZ2xvYnhheGdpYWFmenN2dGRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcyOTUwMTIsImV4cCI6MjA3Mjg3MTAxMn0.z5X-kXGreQfE0xgdZJ83ZhVRH1yoqidnhKbl6LkOUmw'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
