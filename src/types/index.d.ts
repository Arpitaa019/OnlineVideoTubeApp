// User Types
export interface User {
  id: string;
  username: string;
  email: string;
  displayName: string;
  avatar?: string;
  bio?: string;
  channelId?: string;
  isPremium: boolean;
  createdAt: string;
  updatedAt: string;
}

// Video Types
export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: number;
  views: number;
  likes: number;
  dislikes: number;
  channelId: string;
  channel: Channel;
  category: string;
  tags: string[];
  isLive: boolean;
  visibility: 'public' | 'unlisted' | 'private';
  monetizationEnabled: boolean;
  createdAt: string;
  updatedAt: string;
}

// Channel Types
export interface Channel {
  id: string;
  name: string;
  handle: string;
  description: string;
  avatar: string;
  banner: string;
  subscriberCount: number;
  videoCount: number;
  totalViews: number;
  isVerified: boolean;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

// Comment Types
export interface Comment {
  id: string;
  content: string;
  videoId: string;
  userId: string;
  user: User;
  parentId?: string;
  likes: number;
  dislikes: number;
  replyCount: number;
  createdAt: string;
  updatedAt: string;
}

// Playlist Types
export interface Playlist {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  visibility: 'public' | 'unlisted' | 'private';
  videoCount: number;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

// Subscription Types
export interface Subscription {
  id: string;
  userId: string;
  channelId: string;
  channel: Channel;
  notificationEnabled: boolean;
  subscribedAt: string;
}

// Notification Types
export interface Notification {
  id: string;
  type: 'video_upload' | 'comment' | 'like' | 'subscription' | 'livestream';
  title: string;
  message: string;
  thumbnailUrl?: string;
  actionUrl?: string;
  isRead: boolean;
  userId: string;
  createdAt: string;
}

// LiveStream Types
export interface LiveStream {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  streamKey: string;
  streamUrl: string;
  chatEnabled: boolean;
  viewers: number;
  channelId: string;
  channel: Channel;
  status: 'live' | 'ended' | 'scheduled';
  scheduledAt?: string;
  startedAt?: string;
  endedAt?: string;
  createdAt: string;
}

// Analytics Types
export interface VideoAnalytics {
  videoId: string;
  views: number;
  watchTime: number;
  averageViewDuration: number;
  likes: number;
  dislikes: number;
  comments: number;
  shares: number;
  subscribers: number;
  impressions: number;
  clickThroughRate: number;
}

// Premium Subscription Types
export interface PremiumPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  interval: 'monthly' | 'yearly';
  features: string[];
}

// Search Types
export interface SearchResult {
  videos: Video[];
  channels: Channel[];
  playlists: Playlist[];
  totalResults: number;
}

// Pagination Types
export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    totalCount: number;
    hasNext: boolean;
    hasPrevious: boolean;
  };
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: string[];
}

export interface ApiError {
  message: string;
  statusCode: number;
  errors?: Record<string, string[]>;
}
