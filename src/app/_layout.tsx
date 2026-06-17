import { Stack } from 'expo-router';

import { AppQueryProvider } from '@/core/providers/query_provider';

export default function RootLayout() {
  return (
    <AppQueryProvider>
      <Stack />
    </AppQueryProvider>
  );
}
