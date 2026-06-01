import { useState } from 'react';

import { Todo } from '../types/todo_types';

export function useTodo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (!text.trim()) {
      return;
    }

    const newTodo: Todo = {
      id: Date.now().toString(),
      title: text,
      isCompleted: false,
    };

    setTodos((prev) => [newTodo, ...prev]);
    setText('');
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) =>
      prev.filter((item) => item.id !== id),
    );
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              isCompleted: !item.isCompleted,
            }
          : item,
      ),
    );
  };

  const clearAll = () => {
    setTodos([]);
  };

  const completedCount = todos.filter(
    (item) => item.isCompleted,
  ).length;

  return {
    todos,
    text,
    setText,

    addTodo,
    deleteTodo,
    toggleTodo,
    clearAll,

    totalCount: todos.length,
    completedCount,
  };
}