import {
  FlatList,
  Pressable,
  Text,
  View,
} from 'react-native';


import TodoInput from '../components/todo_input';
import TodoItem from '../components/todo_item';


import { useTodo } from '../hooks/useTodo';
import { styles } from '../styles/todo_style';

export default function TodoScreen() {
  const todo = useTodo();

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>
          📝 Todo App
        </Text>

        <Text style={styles.count}>
          Total: {todo.totalCount}
        </Text>
      </View>

      <View style={styles.statsRow}>
        <Text style={styles.statText}>
          Completed: {todo.completedCount}
        </Text>

        <Pressable onPress={todo.clearAll}>
          <Text style={styles.statText}>
            Clear All
          </Text>
        </Pressable>
      </View>

      <TodoInput
        value={todo.text}
        onChange={todo.setText}
        onAdd={todo.addTodo}
      />

      <FlatList
        data={todo.todos}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyEmoji}>
              📭
            </Text>

            <Text style={styles.emptyText}>
              No todos yet
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            onToggle={() =>
              todo.toggleTodo(item.id)
            }
            onDelete={() =>
              todo.deleteTodo(item.id)
            }
          />
        )}
      />
    </View>
  );
}