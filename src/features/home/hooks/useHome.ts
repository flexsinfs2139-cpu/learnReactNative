import { useCallback, useEffect, useMemo, useState } from 'react';

export function useHome() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // useEffect
  useEffect(() => {
    console.log('Screen Mounted');

    return () => {
      console.log('Screen Disposed');
    };
  }, []);

  // useEffect with dependency
  useEffect(() => {
    console.log('Counter Changed:', count);
  }, [count]);

  // useCallback
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  // useMemo
  const counterType = useMemo(() => {
    console.log('Calculating Counter Type');

    if (count > 0) return 'Positive';
    if (count < 0) return 'Negative';

    return 'Neutral';
  }, [count]);

  return {
    count,
    name,
    setName,
    increment,
    decrement,
    reset,
    counterType,
    isNegativeLimitReached: count <= -10,
  };
}