import {
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';

import { User } from './user_types';

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
      <Text style={styles.name}>
        {user.name}
      </Text>

      <Text style={styles.username}>
        @{user.username}
      </Text>

      <Text style={styles.email}>
        {user.email}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
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
    opacity: 0.7,
  },

  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },

  username: {
    marginTop: 4,
    fontSize: 14,
    color: '#2563EB',
  },

  email: {
    marginTop: 8,
    fontSize: 14,
    color: '#64748B',
  },
});