const { createClient } = supabase

const SUPABASE_URL = 'https://xxxx.supabase.co'
const SUPABASE_KEY = 'tu-anon-key'

const db = createClient(SUPABASE_URL, SUPABASE_KEY)