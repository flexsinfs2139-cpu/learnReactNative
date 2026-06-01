import { useEffect, useState } from 'react';

import { getUserById } from '../api/user_api';

export function useUserDetails(
  id: string,
) {
  const [user, setUser] = useState<any>(
    null,
  );

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState('');

  useEffect(() => {
    loadUser();
  }, []);

  async function loadUser() {
    try {
      setLoading(true);

      const data =
        await getUserById(id);

      setUser(data);
    } catch {
      setError(
        'Failed to load user',
      );
    } finally {
      setLoading(false);
    }
  }

  return {
    user,
    loading,
    error,
    loadUser,
  };
}