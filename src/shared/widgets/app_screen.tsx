import { ReactNode } from 'react';

import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface AppScreenProps {
  children: ReactNode;
}

export default function AppScreen({
  children,
}: AppScreenProps) {
  return (
    <SafeAreaView
      style={styles.container}
      edges={['top']}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});