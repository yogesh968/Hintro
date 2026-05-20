import axios from 'axios';
import { getStoredUser } from '../utils/storage';

const BASE_URL = 'https://mock-backend-hintro.vercel.app';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  const userId = getStoredUser();
  if (userId) {
    config.headers['x-user-id'] = userId;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message || error.message || 'Something went wrong';
    return Promise.reject(new Error(message));
  }
);

export default apiClient;
