import { createContext, useState, useEffect } from 'react';
import { supabase } from '../lib/auth';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const session = supabase.auth.session();

    setUser(session?.user ?? null);
    setLoading(false);

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  const value = {
    user,
    loading,
    signIn: (data) => supabase.auth.signIn(data),
    signOut: () => supabase.auth.signOut(),
  };

  return (
    <UserContext.Provider value={value}>
      {!loading && children}
    </UserContext.Provider>
  );
}