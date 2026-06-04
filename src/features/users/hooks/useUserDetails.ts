import { useEffect, useState } from 'react';

import { getUserById } from '../api/user_api';
import { User } from '../types/user_types';

/**
 * Custom hook to fetch and manage detail state for a specific user.
 * Uses strict typing to ensure layout safety.
 * @param id - The ID of the user to load.
 */
export function useUserDetails(id: string) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Run initial fetch on mount
  useEffect(() => {
    loadUser();
  }, []);

  /**
   * Fetches user details from the API server and sets state.
   */
  async function loadUser() {
    try {
      setLoading(true);
      setError('');
      const data = await getUserById(id);
      setUser(data);
    } catch (e) {
      setError('Failed to load user details');
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