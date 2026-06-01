import { StyleSheet, Text } from 'react-native';

interface Props {
  name: string;
}

export default function Greeting({
  name,
}: Props) {
  if (!name.trim()) {
    return null;
  }

  return (
    <Text style={styles.greeting}>
      Hello, {name} 👋
    </Text>
  );
}

const styles = StyleSheet.create({
  greeting: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
});