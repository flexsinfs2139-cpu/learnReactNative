import { router } from 'expo-router';
import {
  Pressable,
  Text,
  View
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from '../styles/onboarding_styles';

export default function OnboardingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>🚀</Text>

        <Text style={styles.title}>
          Welcome to Learning RN
        </Text>

        <Text style={styles.subtitle}>
          Learn React Native with Expo,
          TypeScript, Zustand and React Query.
        </Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={() => router.replace('/login')}>
        <Text style={styles.buttonText}>
          Get Started
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}


// router.push('/todo') → Back button returns to onboarding
// router.replace('/todo') → Onboarding removed from navigation stack