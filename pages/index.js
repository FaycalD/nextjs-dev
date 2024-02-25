import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '../components/UserProvider';
import Chat from '../components/Chat';
import Login from '../components/Login';
import TenantSelector from '../components/TenantSelector';
import { useTenant } from '../lib/tenant';
import 'tailwindcss/tailwind.css';

export default function Home() {
  const { user } = useUser();
  const { tenant, setTenant } = useTenant();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user]);

  if (!user) {
    return <Login />;
  }

  if (!tenant) {
    return <TenantSelector onSelect={setTenant} />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-9/12 flex-1 text-center">
        <Chat />
      </main>
    </div>
  );
}