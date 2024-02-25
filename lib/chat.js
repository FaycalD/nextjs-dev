import { createClient } from '@supabase/supabase-js';
import { VercelAI } from '@vercel/ai-sdk';
import { OpenAI, Anthropic, HuggingFace, LangChain } from './ai';

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const vercelAI = new VercelAI();

const models = {
  openai: new OpenAI(),
  anthropic: new Anthropic(),
  huggingface: new HuggingFace(),
  langchain: new LangChain(),
};

export async function getChatHistory(tenantId) {
  const { data, error } = await supabase
    .from('chats')
    .select('*')
    .eq('tenant_id', tenantId)
    .order('timestamp', { ascending: false });

  if (error) throw error;
  return data;
}

export async function sendMessage(tenantId, message, model = 'openai') {
  const aiModel = models[model];
  if (!aiModel) throw new Error(`Unsupported AI model: ${model}`);

  const response = await aiModel.generateResponse(message);
  const { data, error } = await supabase
    .from('chats')
    .insert([
      { tenant_id: tenantId, message, response, timestamp: new Date() },
    ]);

  if (error) throw error;
  return data;
}

export async function streamChat(tenantId) {
  return vercelAI.streamChat(tenantId);
}