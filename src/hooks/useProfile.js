import { useState, useEffect } from 'react';
import { fetchProfile } from '../api/profile';

export const useProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      try {
        setLoading(true);
        const response = await fetchProfile();
        setProfile(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getProfile();
  }, []);

  return { profile, loading, error };
};
