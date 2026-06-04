import { useState } from 'react';

import { saveToken } from '@/core/storage/storage';

import { loginApi } from '../api/auth_api';

export function useLogin() {
  const [username, setUsername] =
    useState('');

  const [password, setPassword] =
    useState('');

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState('');

  async function login(): Promise<boolean> {
    try {
      setError('');
      setLoading(true);

      if (!username.trim()) {
        setError('Username is required');
        return false;
      }

      if (!password.trim()) {
        setError('Password is required');
        return false;
      }

      const response =
        await loginApi({
          username,
          password,
        });

      await saveToken(
        response.accessToken,
      );

      return true;
    } catch (error) {
      setError('Invalid credentials');
      return false;
    } finally {
      setLoading(false);
    }
  }

  return {
    username,
    password,

    setUsername,
    setPassword,

    loading,
    error,

    login,
  };
}