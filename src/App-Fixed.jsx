import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import store from './store';
import { ROUTES } from './constants/routes';
import './App.css';

// Layouts
import MainLayout from './layouts/main-layout/MainLayout';
import AuthLayout from './layouts/auth-layout/AuthLayout';
import WatchLayout from './layouts/watch-layout/WatchLayout';
import StudioLayout from './layouts/studio-layout/StudioLayout';

// Pages
import HomePage from './pages/home/HomePage';
import WatchPage from './pages/watch/WatchPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import SearchPage from './pages/search/SearchPage';
import TrendingPage from './pages/trending/TrendingPage';
import SubscriptionsPage from './pages/subscriptions/SubscriptionsPage';
import LibraryPage from './pages/library/LibraryPage';
import HistoryPage from './pages/history/HistoryPage';
import LikedVideosPage from './pages/liked-videos/LikedVideosPage';
import WatchLaterPage from './pages/watch-later/WatchLaterPage';
import ChannelPage from './pages/channel/ChannelPage';
import SettingsPage from './pages/settings/SettingsPage';
import PremiumPage from './pages/premium/PremiumPage';
import StudioDashboard from './pages/studio/StudioDashboard';
import LivestreamPage from './pages/livestream/LivestreamPage';

// Contexts
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = store.getState().auth.isAuthenticated;
  return isAuthenticated ? children : <Navigate to={ROUTES.AUTH.LOGIN} replace />;
};

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AuthProvider>
          <Router>
            <div className="app">
              <Routes>
                {/* Auth Routes */}
                <Route path={ROUTES.AUTH.LOGIN} element={
                  <AuthLayout>
                    <LoginPage />
                  </AuthLayout>
                } />
                <Route path={ROUTES.AUTH.REGISTER} element={
                  <AuthLayout>
                    <RegisterPage />
                  </AuthLayout>
                } />

                {/* Watch Page with Custom Layout */}
                <Route path={ROUTES.WATCH} element={
                  <WatchLayout>
                    <WatchPage />
                  </WatchLayout>
                } />

                {/* Livestream Page */}
                <Route path={ROUTES.LIVESTREAM} element={
                  <WatchLayout>
                    <LivestreamPage />
                  </WatchLayout>
                } />

                {/* Studio Routes (Protected) */}
                <Route path={`${ROUTES.STUDIO}/*`} element={
                  <ProtectedRoute>
                    <StudioLayout>
                      <StudioDashboard />
                    </StudioLayout>
                  </ProtectedRoute>
                } />

                {/* Main App Routes */}
                <Route path="/" element={<MainLayout />}>
                  <Route index element={<HomePage />} />
                  <Route path={ROUTES.TRENDING} element={<TrendingPage />} />
                  <Route path={ROUTES.SUBSCRIPTIONS} element={
                    <ProtectedRoute>
                      <SubscriptionsPage />
                    </ProtectedRoute>
                  } />
                  <Route path={ROUTES.LIBRARY} element={
                    <ProtectedRoute>
                      <LibraryPage />
                    </ProtectedRoute>
                  } />
                  <Route path={ROUTES.HISTORY} element={
                    <ProtectedRoute>
                      <HistoryPage />
                    </ProtectedRoute>
                  } />
                  <Route path={ROUTES.LIKED_VIDEOS} element={
                    <ProtectedRoute>
                      <LikedVideosPage />
                    </ProtectedRoute>
                  } />
                  <Route path={ROUTES.WATCH_LATER} element={
                    <ProtectedRoute>
                      <WatchLaterPage />
                    </ProtectedRoute>
                  } />
                  <Route path={ROUTES.SEARCH} element={<SearchPage />} />
                  <Route path={ROUTES.CHANNEL} element={<ChannelPage />} />
                  <Route path={ROUTES.PREMIUM} element={<PremiumPage />} />
                  <Route path={ROUTES.SETTINGS} element={
                    <ProtectedRoute>
                      <SettingsPage />
                    </ProtectedRoute>
                  } />
                  
                  {/* 404 */}
                  <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
                </Route>
              </Routes>

              {/* Global Toast Notifications */}
              <Toaster
                position="bottom-center"
                toastOptions={{
                  duration: 3000,
                  style: {
                    background: 'var(--surface)',
                    color: 'var(--text-primary)',
                    borderRadius: '8px',
                  },
                  success: {
                    iconTheme: {
                      primary: '#10b981',
                      secondary: '#fff',
                    },
                  },
                  error: {
                    iconTheme: {
                      primary: '#ef4444',
                      secondary: '#fff',
                    },
                  },
                }}
              />
            </div>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
