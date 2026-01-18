import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    setComments: (state, action) => {
      state.comments = action.payload;
    },
    addComment: (state, action) => {
      state.comments.unshift(action.payload);
    },
    updateComment: (state, action) => {
      const index = state.comments.findIndex(c => c.id === action.payload.id);
      if (index !== -1) {
        state.comments[index] = { ...state.comments[index], ...action.payload };
      }
    },
    deleteComment: (state, action) => {
      state.comments = state.comments.filter(c => c.id !== action.payload);
    },
    likeComment: (state, action) => {
      const comment = state.comments.find(c => c.id === action.payload);
      if (comment) {
        comment.likes += 1;
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
  setComments,
  addComment,
  updateComment,
  deleteComment,
  likeComment,
  setLoading,
  setError,
} = commentSlice.actions;

export default commentSlice.reducer;
