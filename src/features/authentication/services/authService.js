import axiosInstance from '@/services/api/axiosConfig';
import { API_ENDPOINTS } from '@/constants/api';

export const authService = {
  async login(credentials) {
    const response = await axiosInstance.post(API_ENDPOINTS.AUTH.LOGIN, credentials);
    return response.data;
  },

  async register(userData) {
    const response = await axiosInstance.post(API_ENDPOINTS.AUTH.REGISTER, userData);
    return response.data;
  },

  async logout() {
    const response = await axiosInstance.post(API_ENDPOINTS.AUTH.LOGOUT);
    return response.data;
  },

  async getCurrentUser() {
    const response = await axiosInstance.get('/auth/me');
    return response.data;
  },

  async verifyEmail(token) {
    const response = await axiosInstance.post(API_ENDPOINTS.AUTH.VERIFY_EMAIL, { token });
    return response.data;
  },

  async forgotPassword(email) {
    const response = await axiosInstance.post(API_ENDPOINTS.AUTH.FORGOT_PASSWORD, { email });
    return response.data;
  },

  async resetPassword(token, newPassword) {
    const response = await axiosInstance.post(API_ENDPOINTS.AUTH.RESET_PASSWORD, {
      token,
      newPassword,
    });
    return response.data;
  },
};
