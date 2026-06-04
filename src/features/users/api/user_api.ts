import { usersApiClient } from '@/core/api/axios';
import { API_ENDPOINTS } from '@/core/api/endpoints';
import { User } from '../types/user_types';

/**
 * Retrieves the list of users from the server.
 * @returns A promise that resolves to an array of User objects.
 */
export async function getUsers(): Promise<User[]> {
  const response = await usersApiClient.get<User[]>(
    API_ENDPOINTS.USERS.LIST,
  );

  return response.data;
}

/**
 * Retrieves details for a specific user.
 * @param id - The unique user identifier.
 * @returns A promise that resolves to the matching User object details.
 */
export async function getUserById(
  id: string,
): Promise<User> {
  const response = await usersApiClient.get<User>(
    API_ENDPOINTS.USERS.DETAIL(id),
  );

  return response.data;
}