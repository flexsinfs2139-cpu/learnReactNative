import { createMMKV } from 'react-native-mmkv';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Todo } from '../types/todo_types';

// Instantiate MMKV using the v4 factory function (Nitro Modules architecture)
const mmkvInstance = createMMKV();

// Custom adapter bridging Zustand storage to MMKV API
const mmkvStorageAdapter = createJSONStorage<Todo[]>(() => ({
  setItem: (key, value) => mmkvInstance.set(key, value),
  getItem: (key) => mmkvInstance.getString(key) ?? null,
  removeItem: (key) => mmkvInstance.remove(key),
}));

interface TodoStoreState {
  todos: Todo[];
  addTodo: (title: string) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  clearAll: () => void;
}

/**
 * Zustand store to manage and persist Todo tasks globally.
 * Persisted using MMKV storage.
 */
export const useTodoStore = create<TodoStoreState>()(
  persist(
    (set) => ({
      todos: [],

      addTodo: (title) =>
        set((state) => {
          const newTodo: Todo = {
            id: Date.now().toString(),
            title: title.trim(),
            isCompleted: false,
          };
          return { todos: [newTodo, ...state.todos] };
        }),

      deleteTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),

      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
          ),
        })),

      clearAll: () => set({ todos: [] }),
    }),
    {
      name: 'todo-storage', // storage key name
      storage: mmkvStorageAdapter, // custom MMKV persistence adapter
    },
  ),
);
