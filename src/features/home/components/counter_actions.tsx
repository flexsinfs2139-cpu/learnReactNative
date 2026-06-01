import {
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';

interface Props {
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
  disabled: boolean;
}

export default function CounterActions({
  onIncrement,
  onDecrement,
  onReset,
  disabled,
}: Props) {
  return (
    <View style={styles.row}>
      <Pressable
        style={styles.button}
        onPress={onIncrement}>
        <Text style={styles.text}>+</Text>
      </Pressable>

      <Pressable
        disabled={disabled}
        style={[
          styles.button,
          disabled && styles.disabled,
        ]}
        onPress={onDecrement}>
        <Text style={styles.text}>-</Text>
      </Pressable>

      <Pressable
        style={styles.reset}
        onPress={onReset}>
        <Text style={styles.text}>Reset</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 24,
  },

  button: {
    flex: 1,
    backgroundColor: '#2563EB',
    paddingVertical: 14,
    borderRadius: 12,
  },

  reset: {
    flex: 1.5,
    backgroundColor: '#F59E0B',
    paddingVertical: 14,
    borderRadius: 12,
  },

  disabled: {
    backgroundColor: '#94A3B8',
  },

  text: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '600',
  },
});