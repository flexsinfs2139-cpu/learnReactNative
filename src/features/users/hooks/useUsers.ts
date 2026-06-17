import { useQuery } from '@tanstack/react-query';

import { getUser } from '../api/get_user.api';

export const useUser = (id: string) => {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => getUser(id),
    enabled: !!id,
  });
};
