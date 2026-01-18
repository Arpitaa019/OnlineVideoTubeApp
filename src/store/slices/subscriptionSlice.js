import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  subscriptions: [],
  premiumPlan: null,
  isLoading: false,
  error: null,
};

const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {
    setSubscriptions: (state, action) => {
      state.subscriptions = action.payload;
    },
    addSubscription: (state, action) => {
      state.subscriptions.push(action.payload);
    },
    removeSubscription: (state, action) => {
      state.subscriptions = state.subscriptions.filter(s => s.channelId !== action.payload);
    },
    setPremiumPlan: (state, action) => {
      state.premiumPlan = action.payload;
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
  setSubscriptions,
  addSubscription,
  removeSubscription,
  setPremiumPlan,
  setLoading,
  setError,
} = subscriptionSlice.actions;

export default subscriptionSlice.reducer;
