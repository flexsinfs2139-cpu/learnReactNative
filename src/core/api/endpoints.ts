/**
 * Central API base URLs and route paths.
 */
export const API_ENDPOINTS = {
  // DummyJSON (used for Authentication)
  AUTH: {
    BASE_URL: 'https://dummyjson.com',
    LOGIN: '/auth/login',
  },

  // JSONPlaceholder (used for Users list & details)
  USERS: {
    BASE_URL: 'https://jsonplaceholder.typicode.com',
    LIST: '/users',
    DETAIL: (id: string | number) => `/users/${id}`,
  },
};
