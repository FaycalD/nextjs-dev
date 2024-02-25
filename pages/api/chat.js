import { getSession } from 'next-auth/client';
import { supabase } from '../../lib/db';
import { getChatModel } from '../../lib/ai';

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { data: tenant } = await supabase
    .from('tenants')
    .select('*')
    .eq('user_id', session.user.id)
    .single();

  if (!tenant) {
    return res.status(404).json({ error: 'Tenant not found' });
  }

  const chatModel = getChatModel(tenant.ai_model);

  if (req.method === 'POST') {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const response = await chatModel.generateResponse(message);

    await supabase
      .from('chat_history')
      .insert([
        { tenant_id: tenant.id, user_id: session.user.id, message, response }
      ]);

    return res.status(200).json({ message: response });
  }

  if (req.method === 'GET') {
    const { data: chatHistory } = await supabase
      .from('chat_history')
      .select('*')
      .eq('tenant_id', tenant.id)
      .order('created_at', { ascending: false });

    return res.status(200).json(chatHistory);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}