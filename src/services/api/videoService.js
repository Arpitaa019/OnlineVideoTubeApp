import apiClient from './apiClient';
import { API_ENDPOINTS } from '../../constants/api';

export const videoService = {
  // Get videos
  getVideos: (params) => {
    return apiClient.get(API_ENDPOINTS.VIDEOS.BASE, { params });
  },

  getVideoById: (id) => {
    return apiClient.get(API_ENDPOINTS.VIDEOS.BY_ID(id));
  },

  getTrending: (params) => {
    return apiClient.get(API_ENDPOINTS.VIDEOS.TRENDING, { params });
  },

  getRecommended: (params) => {
    return apiClient.get(API_ENDPOINTS.VIDEOS.RECOMMENDED, { params });
  },

  getRelated: (id) => {
    return apiClient.get(API_ENDPOINTS.VIDEOS.RELATED(id));
  },

  // Video interactions
  incrementView: (id) => {
    return apiClient.post(API_ENDPOINTS.VIDEOS.VIEW(id));
  },

  likeVideo: (id) => {
    return apiClient.post(API_ENDPOINTS.VIDEOS.LIKE(id));
  },

  dislikeVideo: (id) => {
    return apiClient.post(API_ENDPOINTS.VIDEOS.DISLIKE(id));
  },

  // Video management
  uploadVideo: (formData, onUploadProgress) => {
    return apiClient.post(API_ENDPOINTS.VIDEOS.UPLOAD, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress,
    });
  },

  updateVideo: (id, data) => {
    return apiClient.put(API_ENDPOINTS.VIDEOS.UPDATE(id), data);
  },

  deleteVideo: (id) => {
    return apiClient.delete(API_ENDPOINTS.VIDEOS.DELETE(id));
  },

  // History
  getWatchHistory: (params) => {
    return apiClient.get('/videos/history', { params });
  },

  clearHistory: () => {
    return apiClient.delete('/videos/history');
  },

  // Watch later
  getWatchLater: () => {
    return apiClient.get('/videos/watch-later');
  },

  addToWatchLater: (videoId) => {
    return apiClient.post(`/videos/${videoId}/watch-later`);
  },

  removeFromWatchLater: (videoId) => {
    return apiClient.delete(`/videos/${videoId}/watch-later`);
  },

  // Liked videos
  getLikedVideos: (params) => {
    return apiClient.get('/videos/liked', { params });
  },
};

export default videoService;
