import { useState, useEffect } from 'react';
import axios from 'axios';

const APIKEY = process.env.REACT_APP_API_KEY;
const baseURL = 'https://developer-lostark.game.onstove.com/';

const api = axios.create({
  baseURL: baseURL,
  headers: {
    'accept': 'application/json',
    'Authorization': `Bearer ${APIKEY}`
  }
});

const useApi = (endpoint = {}) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await api.get(endpoint);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, isLoading, error };
};

export default useApi;
