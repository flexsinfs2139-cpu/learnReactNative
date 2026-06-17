import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
} from 'react-native';

import { UserCard } from '../components/UserCard';
import { useUsers } from '../hooks/useUsers';

export default function UsersScreen() {
  const {
    data,
    isLoading,
    error,
  } = useUsers();

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

  if (error) {
    return (
      <View>
        <Text>Failed to load users</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{
        padding: 16,
        paddingBottom: 24,
      }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <UserCard user={item} />
      )}
    />
  );
}
