export const analyticsMiddleware = (store) => (next) => (action) => {
  // Track important user actions
  const analyticsEvents = {
    'video/setCurrentVideo': 'video_view',
    'auth/setUser': 'user_login',
    'channel/subscribe': 'channel_subscribe',
    'video/incrementViews': 'video_watch',
  };

  if (analyticsEvents[action.type]) {
    // Send analytics event (implement your analytics service)
    console.log('[Analytics]', analyticsEvents[action.type], action.payload);
    
    // Example: window.gtag('event', analyticsEvents[action.type], { data: action.payload });
  }

  return next(action);
};
