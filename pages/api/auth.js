import { supabase } from '../../lib/auth';

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'POST':
      const { email, password } = req.body;
      let { user, error } = await supabase.auth.signIn({ email, password });

      if (error) return res.status(401).json({ error: error.message });
      return res.status(200).json({ user });

    case 'DELETE':
      const { error: signOutError } = await supabase.auth.signOut();

      if (signOutError) return res.status(500).json({ error: signOutError.message });
      return res.status(200).json({ message: 'User signed out' });

    default:
      res.setHeader('Allow', ['POST', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}