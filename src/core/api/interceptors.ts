import { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { getToken } from '../storage/storage';

/**
 * Attaches the securely stored access token to the Authorization header of outgoing requests.
 */
export async function requestTokenInterceptor(
  config: InternalAxiosRequestConfig,
): Promise<InternalAxiosRequestConfig> {
  try {
    const token = await getToken();
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (error) {
    console.error('Request interceptor token retrieval failed:', error);
  }
  return config;
}

/**
 * Handles incoming responses and extracts values or intercepts global errors.
 */
export function successResponseInterceptor(response: AxiosResponse): AxiosResponse {
  return response;
}

/**
 * Intercepts response errors (such as 401 Unauthorized or network timeouts)
 * and formats them cleanly or triggers session clearing.
 */
export function errorResponseInterceptor(error: AxiosError): Promise<never> {
  const status = error.response?.status;

  if (status === 401) {
    console.warn('Unauthorized request detected. Session might need reset.');
    // In a fully integrated flow, you could trigger logout() or redirect to /login here.
  }

  // Format error messages nicely
  const errorMessage =
    (error.response?.data as { message?: string })?.message ||
    error.message ||
    'An unexpected network error occurred';

  return Promise.reject(new Error(errorMessage));
}
