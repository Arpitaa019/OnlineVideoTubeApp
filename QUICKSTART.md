# Quick Start - VideoTube Application

## Prerequisites
✅ Node.js >= 18.x installed
✅ .NET Core API running on http://localhost:5000
✅ All npm dependencies installed

## Start in 3 Steps

### 1. Install Dependencies (if not done)
```bash
npm install
```

### 2. Create Environment File
Already created: `.env.local` with:
```
VITE_API_BASE_URL=http://localhost:5000/api
VITE_WS_BASE_URL=ws://localhost:5000
```

### 3. Start Development Server
```bash
npm run dev
```

🚀 Open http://localhost:5173 in your browser

## What's Included

### ✅ Complete Features
- Video streaming with HLS player
- User authentication (login/register)
- Video search and discovery
- Channel subscriptions
- Playlists
- Comments
- Watch history
- Liked videos
- Watch later
- Trending page
- Dark/Light theme
- Responsive design
- And much more!

### ✅ All Pages
- Home (video grid)
- Watch (video player)
- Search
- Trending
- Subscriptions
- Library
- History
- Liked Videos
- Watch Later
- Channel Pages
- Settings
- Premium
- Login/Register
- Creator Studio

### ✅ State Management
- 10 Redux slices for complete state management
- API client with JWT authentication
- Token refresh mechanism
- Persistent localStorage

### ✅ UI Components
- Video cards
- Video player
- Header with search
- Sidebar navigation
- Skeleton loaders
- Toast notifications
- Modals
- Forms with validation

## File Structure Highlights

```
src/
├── components/
│   ├── common/VideoCard/       ← Video card component
│   ├── navigation/Header/      ← Main header
│   └── navigation/Sidebar/     ← Sidebar navigation
├── features/video/
│   └── components/VideoPlayer.jsx  ← Video player
├── pages/
│   ├── home/HomePage.jsx       ← Home page
│   ├── watch/WatchPage.jsx     ← Watch page
│   └── auth/                   ← Login/Register
├── store/
│   ├── slices/                 ← Redux slices
│   └── index.js                ← Store config
├── services/api/               ← API services
└── constants/
    ├── api.js                  ← API endpoints
    └── routes.js               ← Route constants
```

## Testing Checklist

1. ✅ Visit http://localhost:5173
2. ✅ Browse videos on home page
3. ✅ Click on a video to watch
4. ✅ Test video player controls
5. ✅ Try login/register
6. ✅ Test search functionality
7. ✅ Check trending page
8. ✅ Toggle dark/light theme

## Next Steps

1. **Customize Branding**
   - Update logo in `Header.jsx`
   - Change colors in `tailwind.config.js`

2. **Connect Your Backend**
   - Ensure API endpoints match `src/constants/api.js`
   - Test all API integrations

3. **Add Content**
   - Upload videos through your .NET API
   - Configure HLS streaming

4. **Deploy**
   - Run `npm run build`
   - Deploy `dist` folder

## Need Help?

- 📖 See `SETUP-GUIDE.md` for detailed documentation
- 📖 See `README-COMPLETE.md` for feature list
- 💡 Check component files for usage examples

## API Endpoint Requirements

Your .NET Core API should implement:

### Auth
- POST `/api/auth/login`
- POST `/api/auth/register`

### Videos
- GET `/api/videos` - List videos
- GET `/api/videos/:id` - Get video details
- GET `/api/videos/trending` - Trending videos
- POST `/api/videos/:id/like` - Like video
- POST `/api/videos/:id/view` - Track view

### Channels
- GET `/api/channels/:id`
- POST `/api/channels/:id/subscribe`

### Comments
- GET `/api/videos/:videoId/comments`
- POST `/api/comments`

### Search
- GET `/api/search?q=...`

---

🎉 **You're all set! Start the server and enjoy your Netflix-like streaming platform!**
