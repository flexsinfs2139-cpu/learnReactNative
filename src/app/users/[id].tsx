import {
  ActivityIndicator,
  Text,
  View,
} from 'react-native';

import { useLocalSearchParams } from 'expo-router';

import { useUser } from '../../features/users/hooks/useUsers';

export default function UserDetailsScreen() {
  const { id } = useLocalSearchParams<{
    id: string;
  }>();

  const {
    data: user,
    isLoading,
    error,
  } = useUser(id);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator />
      </View>
    );
  }

  if (error || !user) {
    return (
      <View>
        <Text>User not found</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: '700',
          marginBottom: 16,
        }}
      >
        {user.name}
      </Text>

      <Text>Email: {user.email}</Text>
      <Text>Phone: {user.phone}</Text>
      <Text>Website: {user.website}</Text>
      <Text>Username: {user.username}</Text>
    </View>
  );
}
