# VideoTube - Netflix & Hotstar Clone

A full-featured video streaming platform built with React, Redux, and .NET Core backend.

## 🚀 Features

### Core Features
- ✅ **Video Streaming** - HLS video player with quality selection
- ✅ **User Authentication** - Login, Register, JWT-based auth
- ✅ **Video Upload** - Upload and manage videos
- ✅ **Search & Discovery** - Advanced search with filters
- ✅ **Subscriptions** - Subscribe to channels
- ✅ **Playlists** - Create and manage playlists
- ✅ **Comments** - Comment system with replies
- ✅ **Likes & Dislikes** - Video interactions
- ✅ **Watch History** - Track viewing history
- ✅ **Watch Later** - Save videos for later
- ✅ **Trending** - Trending videos page
- ✅ **Recommendations** - Personalized video recommendations

### Advanced Features
- ✅ **Live Streaming** - Real-time live streaming support
- ✅ **Notifications** - Real-time push notifications
- ✅ **Dark/Light Theme** - Theme switching
- ✅ **Responsive Design** - Mobile-first design
- ✅ **Video Player Controls** - Custom controls with keyboard shortcuts
- ✅ **Theater Mode** - Enhanced viewing experience
- ✅ **Analytics** - Video and channel analytics
- ✅ **Premium Subscription** - Premium features and monetization
- ✅ **Channel Management** - Creator studio for content creators
- ✅ **Settings** - User preferences and account settings

## 🛠️ Tech Stack

### Frontend
- **React 19.2** - UI library
- **Redux Toolkit** - State management
- **React Router** - Routing
- **Video.js** - Video player
- **Axios** - HTTP client
- **Tailwind CSS** - Styling
- **React Hot Toast** - Notifications
- **React Icons** - Icon library
- **Framer Motion** - Animations
- **date-fns** - Date formatting

### Backend
- **.NET Core** - API backend
- **Entity Framework** - ORM
- **JWT** - Authentication
- **SignalR** - Real-time communication
- **SQL Server** - Database

## 📦 Installation

### Prerequisites
- Node.js >= 18.x
- .NET Core SDK >= 7.x
- SQL Server

### Frontend Setup

1. Clone the repository
\`\`\`bash
cd OnlineVideoTubeApp
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Create `.env` file
\`\`\`env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_WS_BASE_URL=ws://localhost:5000
\`\`\`

4. Start development server
\`\`\`bash
npm run dev
\`\`\`

The app will be available at `http://localhost:5173`

### Backend Setup

1. Navigate to backend directory
2. Update connection string in `appsettings.json`
3. Run migrations
\`\`\`bash
dotnet ef database update
\`\`\`
4. Start the API
\`\`\`bash
dotnet run
\`\`\`

## 📁 Project Structure

\`\`\`
src/
├── components/          # Reusable components
│   ├── common/         # Common UI components
│   │   ├── Avatar/
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Dropdown/
│   │   ├── Input/
│   │   ├── Loader/
│   │   ├── Modal/
│   │   ├── Skeleton/
│   │   ├── Toast/
│   │   └── VideoCard/
│   └── navigation/     # Navigation components
│       ├── Header/
│       ├── Sidebar/
│       ├── Footer/
│       └── MobileNav/
├── features/           # Feature modules
│   ├── video/
│   ├── channel/
│   ├── authentication/
│   ├── comments/
│   ├── playlist/
│   ├── search/
│   ├── subscription/
│   ├── notification/
│   ├── payment/
│   ├── livestream/
│   └── analytics/
├── layouts/            # Layout components
│   ├── main-layout/
│   ├── auth-layout/
│   ├── watch-layout/
│   └── studio-layout/
├── pages/              # Page components
│   ├── home/
│   ├── watch/
│   ├── channel/
│   ├── search/
│   ├── trending/
│   ├── subscriptions/
│   ├── library/
│   ├── history/
│   ├── liked-videos/
│   ├── watch-later/
│   ├── settings/
│   ├── premium/
│   ├── auth/
│   └── studio/
├── store/              # Redux store
│   ├── slices/        # Redux slices
│   └── middleware/    # Redux middleware
├── services/           # API services
│   ├── api/
│   ├── storage/
│   └── websocket/
├── hooks/              # Custom hooks
│   ├── api/
│   ├── common/
│   └── ui/
├── utils/              # Utility functions
│   ├── formatters/
│   ├── helpers/
│   └── validators/
├── constants/          # Constants
│   ├── api.js
│   └── routes.js
└── context/            # React contexts
    ├── AuthContext.jsx
    └── ThemeContext.jsx
\`\`\`

## 🎨 Features in Detail

### Video Player
- HLS streaming support
- Quality selector (Auto, 1080p, 720p, 480p, 360p)
- Playback speed control (0.25x - 2x)
- Keyboard shortcuts
  - Space/K: Play/Pause
  - Arrow Left: Rewind 5s
  - Arrow Right: Forward 5s
  - Arrow Up: Volume up
  - Arrow Down: Volume down
  - M: Mute/Unmute
  - F: Fullscreen
  - T: Theater mode
- Subtitles support
- Auto-play next video
- Picture-in-Picture mode

### Search
- Real-time search suggestions
- Filters: Type, Duration, Upload date, Sort by
- Search in videos, channels, and playlists
- Trending searches

### User Dashboard
- Video management
- Analytics and insights
- Channel customization
- Subscriber management
- Comment moderation
- Revenue tracking

### Notifications
- Real-time notifications
- Push notifications for:
  - New uploads from subscribed channels
  - Comments on your videos
  - Likes and replies
  - Channel milestones
  - Live stream alerts

## 🔑 Environment Variables

\`\`\`env
# API Configuration
VITE_API_BASE_URL=http://localhost:5000/api
VITE_WS_BASE_URL=ws://localhost:5000

# Optional: Analytics
VITE_GA_TRACKING_ID=your_ga_id
\`\`\`

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚦 Available Scripts

\`\`\`bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
\`\`\`

## 🔐 Authentication Flow

1. User registers/logs in
2. Backend returns JWT token
3. Token stored in localStorage
4. Token included in all API requests
5. Automatic token refresh on expiry
6. Logout clears token

## 🎯 API Endpoints

### Auth
- POST `/api/auth/login` - Login
- POST `/api/auth/register` - Register
- POST `/api/auth/refresh` - Refresh token
- POST `/api/auth/logout` - Logout

### Videos
- GET `/api/videos` - Get videos
- GET `/api/videos/:id` - Get video by ID
- POST `/api/videos` - Upload video
- PUT `/api/videos/:id` - Update video
- DELETE `/api/videos/:id` - Delete video
- POST `/api/videos/:id/like` - Like video
- POST `/api/videos/:id/view` - Increment view

### Channels
- GET `/api/channels/:id` - Get channel
- POST `/api/channels/:id/subscribe` - Subscribe
- POST `/api/channels/:id/unsubscribe` - Unsubscribe

### Comments
- GET `/api/videos/:id/comments` - Get comments
- POST `/api/comments` - Add comment
- PUT `/api/comments/:id` - Update comment
- DELETE `/api/comments/:id` - Delete comment

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Built with ❤️ by the VideoTube Team

## 🙏 Acknowledgments

- Netflix & Hotstar for design inspiration
- Video.js for the video player
- React community for amazing tools and libraries

---

**Note:** This is a learning project and not intended for commercial use without proper modifications and security audits.
