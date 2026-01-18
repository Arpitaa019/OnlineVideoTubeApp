export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
export const API_TIMEOUT = 30000;
export const WS_BASE_URL = import.meta.env.VITE_WS_BASE_URL || 'ws://localhost:5000';

// API Endpoints
export const API_ENDPOINTS = {
  // Auth
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    VERIFY_EMAIL: '/auth/verify-email',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
  },
  
  // Videos
  VIDEOS: {
    BASE: '/videos',
    BY_ID: (id) => `/videos/${id}`,
    UPLOAD: '/videos/upload',
    UPDATE: (id) => `/videos/${id}`,
    DELETE: (id) => `/videos/${id}`,
    LIKE: (id) => `/videos/${id}/like`,
    DISLIKE: (id) => `/videos/${id}/dislike`,
    VIEW: (id) => `/videos/${id}/view`,
    TRENDING: '/videos/trending',
    RECOMMENDED: '/videos/recommended',
    RELATED: (id) => `/videos/${id}/related`,
  },
  
  // Channels
  CHANNELS: {
    BASE: '/channels',
    BY_ID: (id) => `/channels/${id}`,
    VIDEOS: (id) => `/channels/${id}/videos`,
    PLAYLISTS: (id) => `/channels/${id}/playlists`,
    ABOUT: (id) => `/channels/${id}/about`,
    SUBSCRIBE: (id) => `/channels/${id}/subscribe`,
    UNSUBSCRIBE: (id) => `/channels/${id}/unsubscribe`,
  },
  
  // Comments
  COMMENTS: {
    BY_VIDEO: (videoId) => `/videos/${videoId}/comments`,
    BY_ID: (id) => `/comments/${id}`,
    ADD: '/comments',
    UPDATE: (id) => `/comments/${id}`,
    DELETE: (id) => `/comments/${id}`,
    LIKE: (id) => `/comments/${id}/like`,
    REPLIES: (id) => `/comments/${id}/replies`,
  },
  
  // Playlists
  PLAYLISTS: {
    BASE: '/playlists',
    BY_ID: (id) => `/playlists/${id}`,
    ADD_VIDEO: (id) => `/playlists/${id}/videos`,
    REMOVE_VIDEO: (playlistId, videoId) => `/playlists/${playlistId}/videos/${videoId}`,
  },
  
  // Search
  SEARCH: {
    ALL: '/search',
    VIDEOS: '/search/videos',
    CHANNELS: '/search/channels',
    PLAYLISTS: '/search/playlists',
    AUTOCOMPLETE: '/search/autocomplete',
  },
  
  // User
  USER: {
    PROFILE: '/user/profile',
    UPDATE_PROFILE: '/user/profile',
    SUBSCRIPTIONS: '/user/subscriptions',
    HISTORY: '/user/history',
    LIKED_VIDEOS: '/user/liked-videos',
    WATCH_LATER: '/user/watch-later',
    LIBRARY: '/user/library',
  },
  
  // Livestream
  LIVESTREAM: {
    BASE: '/livestreams',
    BY_ID: (id) => `/livestreams/${id}`,
    START: '/livestreams/start',
    END: (id) => `/livestreams/${id}/end`,
    ACTIVE: '/livestreams/active',
  },
  
  // Notifications
  NOTIFICATIONS: {
    BASE: '/notifications',
    MARK_READ: (id) => `/notifications/${id}/read`,
    MARK_ALL_READ: '/notifications/read-all',
    PREFERENCES: '/notifications/preferences',
  },
  
  // Analytics
  ANALYTICS: {
    VIDEO: (id) => `/analytics/videos/${id}`,
    CHANNEL: (id) => `/analytics/channels/${id}`,
    OVERVIEW: '/analytics/overview',
  },
  
  // Subscription/Payment
  SUBSCRIPTION: {
    PLANS: '/subscriptions/plans',
    SUBSCRIBE: '/subscriptions/subscribe',
    CANCEL: '/subscriptions/cancel',
    STATUS: '/subscriptions/status',
  },
};
