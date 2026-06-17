import axios from 'axios';
import { API_ENDPOINTS } from './api_endpoints';

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
