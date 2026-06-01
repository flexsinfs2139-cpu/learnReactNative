import {
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import AppScreen from './app_screen';

interface AppErrorViewProps {
  message: string;
  onRetry?: () => void;
}

export default function AppErrorView({
  message,
  onRetry,
}: AppErrorViewProps) {
  return (
    <AppScreen>
      <View style={styles.container}>
        <Text style={styles.emoji}>⚠️</Text>

        <Text style={styles.title}>
          Something went wrong
        </Text>

        <Text style={styles.message}>
          {message}
        </Text>

        {onRetry && (
          <Pressable
            style={styles.button}
            onPress={onRetry}>
            <Text style={styles.buttonText}>
              Retry
            </Text>
          </Pressable>
        )}
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },

  emoji: {
    fontSize: 64,
    marginBottom: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
  },

  message: {
    textAlign: 'center',
    color: '#64748B',
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#2563EB',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});