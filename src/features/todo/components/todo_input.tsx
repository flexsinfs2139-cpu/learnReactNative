import {
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';

import { styles } from '../styles/todo_style';

interface Props {
  value: string;
  onChange: (value: string) => void;
  onAdd: () => void;
}

export default function TodoInput({
  value,
  onChange,
  onAdd,
}: Props) {
  return (
    <View style={styles.inputRow}>
      <TextInput
        style={styles.input}
        placeholder="What needs to be done?"
        value={value}
        onChangeText={onChange}
      />

      <Pressable
        style={styles.addButton}
        onPress={onAdd}>
        <Text style={styles.buttonText}>
          Add
        </Text>
      </Pressable>
    </View>
  );
}