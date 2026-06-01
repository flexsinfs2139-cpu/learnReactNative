import {
  Pressable,
  Text,
  View,
} from 'react-native';

import { styles } from '../syles/todo_style';
import { Todo } from '../types/todo_types';

interface Props {
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
}

export default function TodoItem({
  todo,
  onToggle,
  onDelete,
}: Props) {
  return (
    <View style={styles.todoCard}>
      <Pressable
        style={styles.todoContent}
        onPress={onToggle}>
        <Text>
          {todo.isCompleted ? '✅' : '⬜'}
        </Text>

        <Text
          style={[
            styles.todoTitle,
            todo.isCompleted &&
              styles.completedTodo,
          ]}>
          {todo.title}
        </Text>
      </Pressable>

      <Pressable onPress={onDelete}>
        <Text style={styles.deleteIcon}>
          🗑
        </Text>
      </Pressable>
    </View>
  );
}