import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

// Slices
import authReducer from './slices/authSlice';
import videoReducer from './slices/videoSlice';
import channelReducer from './slices/channelSlice';
import playlistReducer from './slices/playlistSlice';
import commentReducer from './slices/commentSlice';
import notificationReducer from './slices/notificationSlice';
import subscriptionReducer from './slices/subscriptionSlice';
import searchReducer from './slices/searchSlice';
import playerReducer from './slices/playerSlice';
import uiReducer from './slices/uiSlice';

// Middleware
import { apiMiddleware } from './middleware/apiMiddleware';
import { analyticsMiddleware } from './middleware/analyticsMiddleware';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    video: videoReducer,
    channel: channelReducer,
    playlist: playlistReducer,
    comment: commentReducer,
    notification: notificationReducer,
    subscription: subscriptionReducer,
    search: searchReducer,
    player: playerReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['player/setVideoElement'],
        ignoredPaths: ['player.videoElement'],
      },
    }).concat(apiMiddleware, analyticsMiddleware),
});

setupListeners(store.dispatch);

export default store;
