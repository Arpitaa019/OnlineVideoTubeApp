import apiClient from './apiClient';
import { API_ENDPOINTS } from '../../constants/api';

export const authService = {
  login: (credentials) => {
    return apiClient.post(API_ENDPOINTS.AUTH.LOGIN, credentials);
  },

  register: (userData) => {
    return apiClient.post(API_ENDPOINTS.AUTH.REGISTER, userData);
  },

  logout: () => {
    return apiClient.post(API_ENDPOINTS.AUTH.LOGOUT);
  },

  refreshToken: (refreshToken) => {
    return apiClient.post(API_ENDPOINTS.AUTH.REFRESH, { refreshToken });
  },

  verifyEmail: (token) => {
    return apiClient.post(API_ENDPOINTS.AUTH.VERIFY_EMAIL, { token });
  },

  forgotPassword: (email) => {
    return apiClient.post(API_ENDPOINTS.AUTH.FORGOT_PASSWORD, { email });
  },

  resetPassword: (token, password) => {
    return apiClient.post(API_ENDPOINTS.AUTH.RESET_PASSWORD, { token, password });
  },

  getCurrentUser: () => {
    return apiClient.get('/auth/me');
  },

  updateProfile: (data) => {
    return apiClient.put('/auth/profile', data);
  },

  changePassword: (currentPassword, newPassword) => {
    return apiClient.put('/auth/password', { currentPassword, newPassword });
  },
};

export default authService;
