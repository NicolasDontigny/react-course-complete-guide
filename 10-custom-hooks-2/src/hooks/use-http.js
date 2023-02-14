import { useCallback, useState } from 'react';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [data, setData] = useState([]);

  const sendRequest = useCallback(async (handleData, url, params = {}) => {
    console.log('sendRequest');
    setIsLoading(true);
    setError(null);
    try {
      const requestConfig = {
        method: params.method || 'GET',
        headers: params.headers || {},
        body: params.body ? JSON.stringify(params.body) : null,
      };
      console.log('requestConfig: ', requestConfig);
      const response = await fetch(url, requestConfig);

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

      handleData(data);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // useEffect(() => {
  //   sendRequest();
  // }, [sendRequest]);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
