import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

interface AppEmptyStateProps {
  title?: string;
  message?: string;
  emoji?: string;
}

export default function AppEmptyState({
  title = 'Nothing here',
  message = 'No data available.',
  emoji = '📭',
}: AppEmptyStateProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>
        {emoji}
      </Text>

      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.message}>
        {message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    marginTop: 40,
  },

  emoji: {
    fontSize: 64,
    marginBottom: 12,
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },

  message: {
    textAlign: 'center',
    color: '#64748B',
  },
});