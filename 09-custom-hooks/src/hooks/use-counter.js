import React from 'react';
import { useEffect, useState } from 'react';
import Card from '../components/Card';

// Must start with 'use' for React to detect a custom hook
const useCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return counter;
};

export default useCounter;
