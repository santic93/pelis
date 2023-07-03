import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export default function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const history = useNavigate();
  useEffect(() => {
    const handler = setTimeout(() => {
      if (value) {
        setDebouncedValue(value);
        history(`/movie?q=${value}`);
      }
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
