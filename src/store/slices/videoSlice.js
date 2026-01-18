import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  videos: [],
  currentVideo: null,
  trending: [],
  recommended: [],
  isLoading: false,
  error: null,
};

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    setVideos: (state, action) => {
      state.videos = action.payload;
    },
    setCurrentVideo: (state, action) => {
      state.currentVideo = action.payload;
    },
    setTrending: (state, action) => {
      state.trending = action.payload;
    },
    setRecommended: (state, action) => {
      state.recommended = action.payload;
    },
    addVideo: (state, action) => {
      state.videos.unshift(action.payload);
    },
    updateVideo: (state, action) => {
      const index = state.videos.findIndex(v => v.id === action.payload.id);
      if (index !== -1) {
        state.videos[index] = { ...state.videos[index], ...action.payload };
      }
      if (state.currentVideo?.id === action.payload.id) {
        state.currentVideo = { ...state.currentVideo, ...action.payload };
      }
    },
    deleteVideo: (state, action) => {
      state.videos = state.videos.filter(v => v.id !== action.payload);
    },
    incrementViews: (state, action) => {
      if (state.currentVideo?.id === action.payload) {
        state.currentVideo.views += 1;
      }
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setVideos,
  setCurrentVideo,
  setTrending,
  setRecommended,
  addVideo,
  updateVideo,
  deleteVideo,
  incrementViews,
  setLoading,
  setError,
} = videoSlice.actions;

export default videoSlice.reducer;
