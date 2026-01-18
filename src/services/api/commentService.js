import apiClient from './apiClient';
import { API_ENDPOINTS } from '../../constants/api';

export const commentService = {
  getCommentsByVideo: (videoId, params) => {
    return apiClient.get(API_ENDPOINTS.COMMENTS.BY_VIDEO(videoId), { params });
  },

  addComment: (data) => {
    return apiClient.post(API_ENDPOINTS.COMMENTS.ADD, data);
  },

  updateComment: (id, text) => {
    return apiClient.put(API_ENDPOINTS.COMMENTS.UPDATE(id), { text });
  },

  deleteComment: (id) => {
    return apiClient.delete(API_ENDPOINTS.COMMENTS.DELETE(id));
  },

  likeComment: (id) => {
    return apiClient.post(`${API_ENDPOINTS.COMMENTS.BY_ID(id)}/like`);
  },

  dislikeComment: (id) => {
    return apiClient.post(`${API_ENDPOINTS.COMMENTS.BY_ID(id)}/dislike`);
  },

  getReplies: (commentId, params) => {
    return apiClient.get(`${API_ENDPOINTS.COMMENTS.BY_ID(commentId)}/replies`, { params });
  },

  addReply: (commentId, text) => {
    return apiClient.post(`${API_ENDPOINTS.COMMENTS.BY_ID(commentId)}/replies`, { text });
  },
};

export default commentService;
