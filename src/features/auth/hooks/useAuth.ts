import { useEffect, useState } from 'react';
import { getToken, removeToken } from '@/core/storage/storage';

/**
 * Custom hook to manage authentication session state.
 * Retrieves tokens securely from storage and exposes status indicators.
 */
export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  /**
   * Checks the secure storage for the presence of the authentication token.
   */
  async function checkAuth() {
    try {
      setIsLoading(true);
      const token = await getToken();
      setIsAuthenticated(!!token);
    } catch (error) {
      console.error('Failed to check authentication status:', error);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  }

  /**
   * Logs out the user by clearing the secure storage token.
   */
  async function logout() {
    try {
      await removeToken();
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  }

  useEffect(() => {
    checkAuth();
  }, []);

  return {
    isAuthenticated,
    isLoading,
    checkAuth,
    logout,
  };
}