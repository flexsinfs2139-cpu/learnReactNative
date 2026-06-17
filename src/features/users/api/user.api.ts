import { usersApiClient } from '@/core/api/api_client';
import { API_ENDPOINTS } from '@/core/api/api_endpoints';

import type { User } from '../types/user';

export const getUsers = async (): Promise<User[]> => {
  const response = await usersApiClient.get(
    API_ENDPOINTS.USERS.LIST,
  );

  return response.data;
};
