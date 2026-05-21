import apiClient from './axios';

export const loginUser = (email, password) => apiClient.post('/api/auth/login', { email, password });
