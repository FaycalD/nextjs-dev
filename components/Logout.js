import { useAuth } from '../lib/auth';
import { Button } from '@radix-ui/react-primitives';

export default function Logout() {
  const { signOut } = useAuth();

  return (
    <Button onClick={signOut} className="text-white bg-red-500 hover:bg-red-700">
      Logout
    </Button>
  );
}