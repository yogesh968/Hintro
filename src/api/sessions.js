import apiClient from './axios';

export const fetchStats = () => apiClient.get('/api/call-sessions/stats');

export const fetchSessions = (limit = 10) =>
  apiClient.get(`/api/call-sessions?limit=${limit}`);
