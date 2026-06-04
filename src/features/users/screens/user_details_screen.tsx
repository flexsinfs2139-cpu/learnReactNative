import { useLocalSearchParams } from 'expo-router';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import {
    AppErrorView,
    AppLoader,
    AppScreen,
} from '@/shared/widgets';

import { useUserDetails } from '../hooks/useUserDetails';

export default function UserDetailsScreen() {
  const { id } = useLocalSearchParams<{
    id: string;
  }>();

  const userDetails =
    useUserDetails(id);

  if (userDetails.loading) {
    return <AppLoader />;
  }

  if (userDetails.error) {
    return (
      <AppErrorView
        message={userDetails.error}
      />
    );
  }

  const user = userDetails.user;

  if (!user) {
    return (
      <AppErrorView
        message="User details not found"
      />
    );
  }

  return (
    <AppScreen>
      <View style={styles.container}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {user.name.charAt(0)}
          </Text>
        </View>

        <Text style={styles.name}>
          {user.name}
        </Text>

        <Text style={styles.username}>
          @{user.username}
        </Text>

        <View style={styles.infoCard}>
          <Text style={styles.info}>
            📧 {user.email}
          </Text>

          <Text style={styles.info}>
            📞 {user.phone}
          </Text>

          <Text style={styles.info}>
            🌐 {user.website}
          </Text>
        </View>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#F8FAFC',
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  avatarText: {
    color: '#FFF',
    fontSize: 42,
    fontWeight: '700',
  },

  name: {
    marginTop: 20,
    fontSize: 28,
    fontWeight: '700',
  },

  username: {
    color: '#64748B',
    marginTop: 4,
  },

  infoCard: {
    width: '100%',
    backgroundColor: '#FFF',
    marginTop: 30,
    padding: 20,
    borderRadius: 16,
  },

  info: {
    fontSize: 16,
    marginBottom: 16,
  },
});