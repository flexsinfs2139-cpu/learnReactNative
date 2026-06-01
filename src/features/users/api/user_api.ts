import axios from 'axios';

import { User } from '../types/user_types';

export async function getUsers(): Promise<User[]> {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users',
  );

  return response.data;
}

export async function getUserById(
  id: string,
) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );

  return response.data;
}