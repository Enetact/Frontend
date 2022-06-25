import { useAuthContext } from '@/context/AuthContext';
import { useEffect } from 'react';

export default function Logout() {
  const { logout } = useAuthContext();

  useEffect(() => {
    logout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
