import apiClient from './apiClient';
import { API_ENDPOINTS } from '../../constants/api';

export const channelService = {
  getChannelById: (id) => {
    return apiClient.get(API_ENDPOINTS.CHANNELS.BY_ID(id));
  },

  getChannelVideos: (id, params) => {
    return apiClient.get(API_ENDPOINTS.CHANNELS.VIDEOS(id), { params });
  },

  getChannelPlaylists: (id, params) => {
    return apiClient.get(API_ENDPOINTS.CHANNELS.PLAYLISTS(id), { params });
  },

  getChannelAbout: (id) => {
    return apiClient.get(API_ENDPOINTS.CHANNELS.ABOUT(id));
  },

  subscribe: (id) => {
    return apiClient.post(API_ENDPOINTS.CHANNELS.SUBSCRIBE(id));
  },

  unsubscribe: (id) => {
    return apiClient.post(API_ENDPOINTS.CHANNELS.UNSUBSCRIBE(id));
  },

  getSubscriptions: () => {
    return apiClient.get('/channels/subscriptions');
  },

  createChannel: (data) => {
    return apiClient.post(API_ENDPOINTS.CHANNELS.BASE, data);
  },

  updateChannel: (id, data) => {
    return apiClient.put(API_ENDPOINTS.CHANNELS.BY_ID(id), data);
  },

  uploadChannelArt: (id, formData) => {
    return apiClient.post(`/channels/${id}/art`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

export default channelService;
