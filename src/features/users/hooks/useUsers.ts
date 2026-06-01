import { useEffect, useState } from 'react';

import { getUsers } from '../api/user_api';
import { User } from '../types/user_item';

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState<string | null>(null);

  const loadUsers = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await getUsers();

      setUsers(response);
    } catch (e) {
      setError('Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return {
    users,
    loading,
    error,
    loadUsers,
  };
}