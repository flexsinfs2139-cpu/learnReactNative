import { authApiClient } from '@/core/api/axios';
import { API_ENDPOINTS } from '@/core/api/endpoints';
import {
  LoginRequest,
  LoginResponse,
} from '../types/auth_types';

/**
 * Sends a login request to the secure authentication endpoint.
 * @param request - The credentials containing username and password.
 * @returns The user details and session token upon success.
 */
export async function loginApi(
  request: LoginRequest,
): Promise<LoginResponse> {
  const response = await authApiClient.post<LoginResponse>(
    API_ENDPOINTS.AUTH.LOGIN,
    request,
  );

  return response.data;
}