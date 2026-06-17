import { usersApiClient } from '@/core/api/api_client';
import { API_ENDPOINTS } from '@/core/api/api_endpoints';

import type { User } from '../types/user';

export const getUser = async (
  id: string,
): Promise<User> => {
  const response = await usersApiClient.get(
    API_ENDPOINTS.USERS.DETAIL(id),
  );

  return response.data;
};
