import { useState, useEffect } from 'react';
import { fetchStats } from '../api/sessions';

export const useStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getStats = async () => {
      try {
        setLoading(true);
        const response = await fetchStats();
        setStats(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getStats();
  }, []);

  return { stats, loading, error };
};
