import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { videoService } from '@/features/video/services/videoService';
import { setVideos, setTrending, setRecommended } from '@/store/slices/videoSlice';
import VideoGrid from '@/features/video/components/VideoGrid';
import VideoCardSkeleton from '@/features/video/components/VideoCardSkeleton';
import './HomePage.css';

export default function HomePage() {
  const dispatch = useDispatch();
  const { videos, trending, recommended } = useSelector((state) => state.video);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    loadVideos();
  }, [activeTab]);

  const loadVideos = async () => {
    setIsLoading(true);
    try {
      switch (activeTab) {
        case 'trending':
          const trendingData = await videoService.getTrending();
          dispatch(setTrending(trendingData));
          break;
        case 'recommended':
          const recommendedData = await videoService.getRecommended();
          dispatch(setRecommended(recommendedData));
          break;
        default:
          const allVideos = await videoService.getAll();
          dispatch(setVideos(allVideos));
      }
    } catch (error) {
      console.error('Failed to load videos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getCurrentVideos = () => {
    switch (activeTab) {
      case 'trending':
        return trending;
      case 'recommended':
        return recommended;
      default:
        return videos;
    }
  };

  return (
    <div className="home-page">
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          All
        </button>
        <button
          className={`tab ${activeTab === 'trending' ? 'active' : ''}`}
          onClick={() => setActiveTab('trending')}
        >
          Trending
        </button>
        <button
          className={`tab ${activeTab === 'recommended' ? 'active' : ''}`}
          onClick={() => setActiveTab('recommended')}
        >
          Recommended
        </button>
      </div>

      {isLoading ? (
        <div className="video-grid">
          {Array.from({ length: 12 }).map((_, i) => (
            <VideoCardSkeleton key={i} />
          ))}
        </div>
      ) : (
        <VideoGrid videos={getCurrentVideos()} />
      )}
    </div>
  );
}
