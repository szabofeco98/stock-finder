import { useState, useEffect } from 'react';

export type UseDebounceProps = [string, string, (event: React.ChangeEvent<HTMLInputElement>) => void];

export const useDebounce = (initialValue = '', delay = 500): UseDebounceProps => {
  const [value, setValue] = useState<string>(initialValue);
  const [debounceValue, setDebounceValue] = useState<string>(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return [value, debounceValue, handleValueChange];
};
