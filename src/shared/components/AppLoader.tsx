import { ActivityIndicator, StyleSheet, View } from 'react-native';

import AppScreen from './app_screen';

export default function AppLoader() {
  return (
    <AppScreen>
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});