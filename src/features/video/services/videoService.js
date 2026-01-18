import axiosInstance from '@/services/api/axiosConfig';
import { API_ENDPOINTS } from '@/constants/api';

export const videoService = {
  async getAll(params = {}) {
    const response = await axiosInstance.get(API_ENDPOINTS.VIDEOS.BASE, { params });
    return response.data;
  },

  async getById(id) {
    const response = await axiosInstance.get(API_ENDPOINTS.VIDEOS.BY_ID(id));
    return response.data;
  },

  async getTrending(params = {}) {
    const response = await axiosInstance.get(API_ENDPOINTS.VIDEOS.TRENDING, { params });
    return response.data;
  },

  async getRecommended(params = {}) {
    const response = await axiosInstance.get(API_ENDPOINTS.VIDEOS.RECOMMENDED, { params });
    return response.data;
  },

  async getRelated(videoId, params = {}) {
    const response = await axiosInstance.get(API_ENDPOINTS.VIDEOS.RELATED(videoId), { params });
    return response.data;
  },

  async upload(videoData) {
    const formData = new FormData();
    Object.keys(videoData).forEach((key) => {
      if (videoData[key] !== null && videoData[key] !== undefined) {
        formData.append(key, videoData[key]);
      }
    });

    const response = await axiosInstance.post(API_ENDPOINTS.VIDEOS.UPLOAD, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  async update(id, updateData) {
    const response = await axiosInstance.put(API_ENDPOINTS.VIDEOS.UPDATE(id), updateData);
    return response.data;
  },

  async delete(id) {
    const response = await axiosInstance.delete(API_ENDPOINTS.VIDEOS.DELETE(id));
    return response.data;
  },

  async like(id) {
    const response = await axiosInstance.post(API_ENDPOINTS.VIDEOS.LIKE(id));
    return response.data;
  },

  async dislike(id) {
    const response = await axiosInstance.post(API_ENDPOINTS.VIDEOS.DISLIKE(id));
    return response.data;
  },

  async recordView(id) {
    const response = await axiosInstance.post(API_ENDPOINTS.VIDEOS.VIEW(id));
    return response.data;
  },
};
