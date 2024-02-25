import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

export async function getChatHistory(tenantId) {
  const { data, error } = await supabase
    .from('chat_history')
    .select('*')
    .eq('tenant_id', tenantId)
    .order('timestamp', { ascending: false })

  if (error) {
    console.error('Error fetching chat history:', error)
    return null
  }

  return data
}

export async function saveChatMessage(tenantId, message) {
  const { data, error } = await supabase
    .from('chat_history')
    .insert([
      { tenant_id: tenantId, message: message, timestamp: new Date() }
    ])

  if (error) {
    console.error('Error saving chat message:', error)
    return null
  }

  return data
}