import { useState, useEffect } from 'react';
import { fetchSessions } from '../api/sessions';

export const useSessions = (limit = 10) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSessions = async () => {
      try {
        setLoading(true);
        const response = await fetchSessions(limit);
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getSessions();
  }, [limit]);

  return { 
    sessions: data?.callSessions || [], 
    pagination: data?.pagination || null,
    loading, 
    error 
  };
};
