import axios from 'axios';
import { API_ENDPOINTS } from './endpoints';
import {
  requestTokenInterceptor,
  successResponseInterceptor,
  errorResponseInterceptor,
} from './interceptors';

/**
 * Pre-configured Axios instance for the Authentication API (DummyJSON).
 */
export const authApiClient = axios.create({
  baseURL: API_ENDPOINTS.AUTH.BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Pre-configured Axios instance for the Users API (JSONPlaceholder).
 */
export const usersApiClient = axios.create({
  baseURL: API_ENDPOINTS.USERS.BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Bind interceptors to inject tokens and handle global errors
authApiClient.interceptors.request.use(requestTokenInterceptor);
authApiClient.interceptors.response.use(
  successResponseInterceptor,
  errorResponseInterceptor,
);

usersApiClient.interceptors.request.use(requestTokenInterceptor);
usersApiClient.interceptors.response.use(
  successResponseInterceptor,
  errorResponseInterceptor,
);
