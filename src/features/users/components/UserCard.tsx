import { Text, View } from 'react-native';

import type { User } from '../types/user';

type Props = {
  user: User;
};

export function UserCard({ user }: Props) {
  const initials = user.name
    .split(' ')
    .map(part => part[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <View
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 16,
        marginBottom: 12,

        borderWidth: 1,
        borderColor: '#F1F5F9',

        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 8,

        elevation: 3,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            width: 52,
            height: 52,
            borderRadius: 26,
            backgroundColor: '#EEF2FF',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 12,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              color: '#4F46E5',
            }}
          >
            {initials}
          </Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              color: '#0F172A',
            }}
          >
            {user.name}
          </Text>

          <Text
            style={{
              fontSize: 14,
              color: '#64748B',
              marginTop: 2,
            }}
          >
            @{user.username}
          </Text>
        </View>
      </View>

      <View
        style={{
          height: 1,
          backgroundColor: '#F1F5F9',
          marginVertical: 14,
        }}
      />

      <Text
        style={{
          fontSize: 14,
          color: '#475569',
          marginBottom: 6,
        }}
      >
        📧 {user.email}
      </Text>

      <Text
        style={{
          fontSize: 14,
          color: '#475569',
          marginBottom: 6,
        }}
      >
        📞 {user.phone}
      </Text>

      <Text
        style={{
          fontSize: 14,
          color: '#475569',
        }}
      >
        🌐 {user.website}
      </Text>
    </View>
  );
}
