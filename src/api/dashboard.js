import apiClient from './axios';

export const fetchDashboard = () => apiClient.get('/api/auth/dashboard');
