import apiClient from './apiClient';
import { API_ENDPOINTS } from '../../constants/api';

export const playlistService = {
  getPlaylists: (params) => {
    return apiClient.get(API_ENDPOINTS.PLAYLISTS.BASE, { params });
  },

  getPlaylistById: (id) => {
    return apiClient.get(API_ENDPOINTS.PLAYLISTS.BY_ID(id));
  },

  createPlaylist: (data) => {
    return apiClient.post(API_ENDPOINTS.PLAYLISTS.BASE, data);
  },

  updatePlaylist: (id, data) => {
    return apiClient.put(API_ENDPOINTS.PLAYLISTS.BY_ID(id), data);
  },

  deletePlaylist: (id) => {
    return apiClient.delete(API_ENDPOINTS.PLAYLISTS.BY_ID(id));
  },

  addVideoToPlaylist: (playlistId, videoId) => {
    return apiClient.post(API_ENDPOINTS.PLAYLISTS.ADD_VIDEO(playlistId), { videoId });
  },

  removeVideoFromPlaylist: (playlistId, videoId) => {
    return apiClient.delete(API_ENDPOINTS.PLAYLISTS.REMOVE_VIDEO(playlistId, videoId));
  },

  reorderPlaylist: (playlistId, videoIds) => {
    return apiClient.put(`${API_ENDPOINTS.PLAYLISTS.BY_ID(playlistId)}/reorder`, { videoIds });
  },
};

export default playlistService;
