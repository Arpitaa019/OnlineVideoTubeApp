import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  channels: [],
  currentChannel: null,
  subscribedChannels: [],
  isLoading: false,
  error: null,
};

const channelSlice = createSlice({
  name: 'channel',
  initialState,
  reducers: {
    setChannels: (state, action) => {
      state.channels = action.payload;
    },
    setCurrentChannel: (state, action) => {
      state.currentChannel = action.payload;
    },
    setSubscribedChannels: (state, action) => {
      state.subscribedChannels = action.payload;
    },
    updateChannel: (state, action) => {
      if (state.currentChannel?.id === action.payload.id) {
        state.currentChannel = { ...state.currentChannel, ...action.payload };
      }
    },
    subscribe: (state, action) => {
      if (state.currentChannel?.id === action.payload) {
        state.currentChannel.subscriberCount += 1;
      }
      state.subscribedChannels.push(action.payload);
    },
    unsubscribe: (state, action) => {
      if (state.currentChannel?.id === action.payload) {
        state.currentChannel.subscriberCount -= 1;
      }
      state.subscribedChannels = state.subscribedChannels.filter(id => id !== action.payload);
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
  setChannels,
  setCurrentChannel,
  setSubscribedChannels,
  updateChannel,
  subscribe,
  unsubscribe,
  setLoading,
  setError,
} = channelSlice.actions;

export default channelSlice.reducer;
