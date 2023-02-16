import { useCallback, useState } from 'react';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (config, handleData) => {
    setIsLoading(true);
    try {
      const response = await fetch(config.url, {
        method: config.method || 'GET',
        headers: config.headers || {},
        body: config.body ? JSON.stringify(config.body) : null,
      });

      const data = await response.json();
      handleData(data);
    } catch (err) {
      console.log('ERROR: ', err.message);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    error,
    fetchData,
  };
};

export default useHttp;
