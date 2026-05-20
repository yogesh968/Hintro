import apiClient from './axios';

export const fetchProfile = () => apiClient.get('/api/auth/profile');
