import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPlaying: false,
  isMuted: false,
  volume: 1,
  currentTime: 0,
  duration: 0,
  playbackRate: 1,
  quality: 'auto',
  isFullscreen: false,
  isPictureInPicture: false,
  subtitlesEnabled: false,
  autoplay: true,
  videoElement: null,
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
    setMuted: (state, action) => {
      state.isMuted = action.payload;
    },
    setVolume: (state, action) => {
      state.volume = action.payload;
    },
    setCurrentTime: (state, action) => {
      state.currentTime = action.payload;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
    },
    setPlaybackRate: (state, action) => {
      state.playbackRate = action.payload;
    },
    setQuality: (state, action) => {
      state.quality = action.payload;
    },
    setFullscreen: (state, action) => {
      state.isFullscreen = action.payload;
    },
    setPictureInPicture: (state, action) => {
      state.isPictureInPicture = action.payload;
    },
    setSubtitlesEnabled: (state, action) => {
      state.subtitlesEnabled = action.payload;
    },
    setAutoplay: (state, action) => {
      state.autoplay = action.payload;
    },
    setVideoElement: (state, action) => {
      state.videoElement = action.payload;
    },
    resetPlayer: (state) => {
      return { ...initialState, autoplay: state.autoplay, volume: state.volume };
    },
  },
});

export const {
  setPlaying,
  setMuted,
  setVolume,
  setCurrentTime,
  setDuration,
  setPlaybackRate,
  setQuality,
  setFullscreen,
  setPictureInPicture,
  setSubtitlesEnabled,
  setAutoplay,
  setVideoElement,
  resetPlayer,
} = playerSlice.actions;

export default playerSlice.reducer;
