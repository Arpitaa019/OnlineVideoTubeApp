import { addToast } from '../slices/uiSlice';

export const apiMiddleware = (store) => (next) => (action) => {
  // Handle API errors globally
  if (action.type.endsWith('/rejected')) {
    const error = action.payload || action.error;
    store.dispatch(
      addToast({
        type: 'error',
        message: error.message || 'An error occurred',
        duration: 5000,
      })
    );
  }

  // Handle successful operations
  if (action.type.includes('/fulfilled') && action.meta?.successMessage) {
    store.dispatch(
      addToast({
        type: 'success',
        message: action.meta.successMessage,
        duration: 3000,
      })
    );
  }

  return next(action);
};
