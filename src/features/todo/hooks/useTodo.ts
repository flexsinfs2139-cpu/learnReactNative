import { useState } from 'react';
import { useTodoStore } from '../store/todo_store';

/**
 * Custom hook to bridge UI components to the persisted Zustand Todo store.
 * Optimizes performance by keeping text input state local while persisting the task array globally.
 */
export function useTodo() {
  // Select values and actions selectively from Zustand store to limit rendering scope
  const todos = useTodoStore((state) => state.todos);
  const addTodoInStore = useTodoStore((state) => state.addTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const clearAll = useTodoStore((state) => state.clearAll);

  // Local state for input text prevents full global store re-renders on every keystroke
  const [text, setText] = useState('');

  /**
   * Triggers adding a new task to the global store if the input is not empty.
   */
  const addTodo = () => {
    if (!text.trim()) {
      return;
    }
    addTodoInStore(text);
    setText('');
  };

  // Derived state calculations
  const totalCount = todos.length;
  const completedCount = todos.filter((item) => item.isCompleted).length;

  return {
    todos,
    text,
    setText,

    addTodo,
    deleteTodo,
    toggleTodo,
    clearAll,

    totalCount,
    completedCount,
  };
}