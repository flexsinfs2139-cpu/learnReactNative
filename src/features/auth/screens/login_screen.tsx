import { router } from 'expo-router';
import {
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

import { useLogin } from '../hooks/useLogin';

export default function LoginScreen() {
  const login = useLogin();

  async function handleLogin() {
    const success = await login.login();

    if (success) {
      router.replace('/users');
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={
        Platform.OS === 'ios'
          ? 'padding'
          : undefined
      }>
      <View style={styles.card}>
        <Text style={styles.title}>
          Welcome Back 👋
        </Text>

        <Text style={styles.subtitle}>
          Sign in to continue
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          autoCapitalize="none"
          value={login.username}
          onChangeText={login.setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={login.password}
          onChangeText={login.setPassword}
        />

        {!!login.error && (
          <Text style={styles.error}>
            {login.error}
          </Text>
        )}

        <Pressable
          style={[
            styles.button,
            login.loading &&
              styles.disabledButton,
          ]}
          disabled={login.loading}
          onPress={handleLogin}>
          {login.loading ? (
            <ActivityIndicator
              color="#FFF"
            />
          ) : (
            <Text
              style={styles.buttonText}>
              Login
            </Text>
          )}
        </Pressable>

        <View style={styles.demoCard}>
          <Text style={styles.demoTitle}>
            Demo Credentials
          </Text>

          <Text style={styles.demoText}>
            Username: emilys
          </Text>

          <Text style={styles.demoText}>
            Password: emilyspass
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    justifyContent: 'center',
    padding: 24,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 5,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#0F172A',
  },

  subtitle: {
    fontSize: 16,
    color: '#64748B',
    marginTop: 6,
    marginBottom: 24,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 16,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#2563EB',
    paddingVertical: 16,
    borderRadius: 14,
    marginTop: 8,
  },

  disabledButton: {
    opacity: 0.7,
  },

  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
  },

  error: {
    color: '#DC2626',
    marginBottom: 12,
    fontWeight: '500',
  },

  demoCard: {
    marginTop: 24,
    padding: 16,
    borderRadius: 14,
    backgroundColor: '#EFF6FF',
  },

  demoTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 8,
    color: '#1E40AF',
  },

  demoText: {
    color: '#334155',
    marginBottom: 4,
  },
});