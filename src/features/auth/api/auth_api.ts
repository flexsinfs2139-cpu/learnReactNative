import axios from 'axios';

import {
    LoginRequest,
    LoginResponse,
} from '../types/auth_types';

export async function loginApi(
  request: LoginRequest,
): Promise<LoginResponse> {
  const response = await axios.post(
    'https://dummyjson.com/auth/login',
    request,
  );

  return response.data;
}