import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { User } from '../types/user_types';

interface Props {
  user: User;
  onPress: () => void;
}

export default function UserItem({
  user,
  onPress,
}: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && styles.pressedCard,
      ]}
      onPress={onPress}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          {user.name.charAt(0)}
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.name}>
          {user.name}
        </Text>

        <Text style={styles.username}>
          @{user.username}
        </Text>

        <Text style={styles.email}>
          {user.email}
        </Text>
      </View>

      <Text style={styles.arrow}>
        ›
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    padding: 16,
    marginBottom: 12,

    borderRadius: 16,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 3,
  },

  pressedCard: {
    opacity: 0.8,
  },

  avatar: {
    width: 50,
    height: 50,

    borderRadius: 25,

    backgroundColor: '#2563EB',

    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '700',
  },

  content: {
    flex: 1,
    marginLeft: 14,
  },

  name: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111827',
  },

  username: {
    marginTop: 2,
    color: '#2563EB',
  },

  email: {
    marginTop: 4,
    color: '#64748B',
  },

  arrow: {
    fontSize: 24,
    color: '#CBD5E1',
  },
});