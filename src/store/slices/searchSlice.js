import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: '',
  results: {
    videos: [],
    channels: [],
    playlists: [],
  },
  suggestions: [],
  recentSearches: [],
  isLoading: false,
  error: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setResults: (state, action) => {
      state.results = action.payload;
    },
    setSuggestions: (state, action) => {
      state.suggestions = action.payload;
    },
    addRecentSearch: (state, action) => {
      const exists = state.recentSearches.some(s => s === action.payload);
      if (!exists) {
        state.recentSearches.unshift(action.payload);
        if (state.recentSearches.length > 10) {
          state.recentSearches.pop();
        }
      }
    },
    clearRecentSearches: (state) => {
      state.recentSearches = [];
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
  setQuery,
  setResults,
  setSuggestions,
  addRecentSearch,
  clearRecentSearches,
  setLoading,
  setError,
} = searchSlice.actions;

export default searchSlice.reducer;
