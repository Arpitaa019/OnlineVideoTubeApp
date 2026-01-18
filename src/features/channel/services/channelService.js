import axiosInstance from '@/services/api/axiosConfig';
import { API_ENDPOINTS } from '@/constants/api';

export const channelService = {
  async getById(id) {
    const response = await axiosInstance.get(API_ENDPOINTS.CHANNELS.BY_ID(id));
    return response.data;
  },

  async getVideos(id, params = {}) {
    const response = await axiosInstance.get(API_ENDPOINTS.CHANNELS.VIDEOS(id), { params });
    return response.data;
  },

  async getPlaylists(id, params = {}) {
    const response = await axiosInstance.get(API_ENDPOINTS.CHANNELS.PLAYLISTS(id), { params });
    return response.data;
  },

  async getAbout(id) {
    const response = await axiosInstance.get(API_ENDPOINTS.CHANNELS.ABOUT(id));
    return response.data;
  },

  async subscribe(id) {
    const response = await axiosInstance.post(API_ENDPOINTS.CHANNELS.SUBSCRIBE(id));
    return response.data;
  },

  async unsubscribe(id) {
    const response = await axiosInstance.delete(API_ENDPOINTS.CHANNELS.UNSUBSCRIBE(id));
    return response.data;
  },

  async update(id, updateData) {
    const response = await axiosInstance.put(API_ENDPOINTS.CHANNELS.BY_ID(id), updateData);
    return response.data;
  },
};
