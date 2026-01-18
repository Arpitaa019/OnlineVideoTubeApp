import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '@/layouts/main-layout/MainLayout';
import AuthLayout from '@/layouts/auth-layout/AuthLayout';
import StudioLayout from '@/layouts/studio-layout/StudioLayout';
import WatchLayout from '@/layouts/watch-layout/WatchLayout';

// Pages
import HomePage from '@/pages/home/HomePage';
import WatchPage from '@/pages/watch/WatchPage';
import ChannelPage from '@/pages/channel/ChannelPage';
import SearchPage from '@/pages/search/SearchPage';
import LibraryPage from '@/pages/library/LibraryPage';
import SubscriptionsPage from '@/pages/subscriptions/SubscriptionsPage';
import TrendingPage from '@/pages/trending/TrendingPage';
import HistoryPage from '@/pages/history/HistoryPage';
import LikedVideosPage from '@/pages/liked-videos/LikedVideosPage';
import WatchLaterPage from '@/pages/watch-later/WatchLaterPage';
import StudioPage from '@/pages/studio/StudioPage';
import SettingsPage from '@/pages/settings/SettingsPage';
import LiveStreamPage from '@/pages/livestream/LiveStreamPage';
import PremiumPage from '@/pages/premium/PremiumPage';
import LoginPage from '@/pages/auth/LoginPage';
import RegisterPage from '@/pages/auth/RegisterPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'trending', element: <TrendingPage /> },
      { path: 'subscriptions', element: <SubscriptionsPage /> },
      { path: 'library', element: <LibraryPage /> },
      { path: 'history', element: <HistoryPage /> },
      { path: 'liked-videos', element: <LikedVideosPage /> },
      { path: 'watch-later', element: <WatchLaterPage /> },
      { path: 'search', element: <SearchPage /> },
      { path: 'channel/:channelId/*', element: <ChannelPage /> },
      { path: 'premium', element: <PremiumPage /> },
      { path: 'settings', element: <SettingsPage /> },
    ],
  },
  {
    path: '/watch/:videoId',
    element: <WatchLayout />,
    children: [
      { index: true, element: <WatchPage /> },
    ],
  },
  {
    path: '/live/:streamId',
    element: <WatchLayout />,
    children: [
      { index: true, element: <LiveStreamPage /> },
    ],
  },
  {
    path: '/studio',
    element: <StudioLayout />,
    children: [
      { index: true, element: <StudioPage /> },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
