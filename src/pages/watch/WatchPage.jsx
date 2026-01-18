import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import VideoPlayer from '@/features/video/components/VideoPlayer';
import VideoInfo from '@/features/video/components/VideoInfo';
import CommentSection from '@/features/comments/components/CommentSection';
import VideoRecommendations from '@/features/video/components/VideoRecommendations';
import { videoService } from '@/features/video/services/videoService';
import { setCurrentVideo, incrementViews } from '@/store/slices/videoSlice';
import './WatchPage.css';

export default function WatchPage() {
  const { videoId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentVideo } = useSelector((state) => state.video);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (videoId) {
      loadVideo(videoId);
    }
  }, [videoId]);

  const loadVideo = async (id) => {
    setIsLoading(true);
    try {
      const videoData = await videoService.getById(id);
      dispatch(setCurrentVideo(videoData));
      
      // Record view
      await videoService.recordView(id);
      dispatch(incrementViews(id));
    } catch (error) {
      console.error('Failed to load video:', error);
      navigate('/');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading || !currentVideo) {
    return <div className="watch-page-loading">Loading video...</div>;
  }

  return (
    <div className="watch-page">
      <div className="watch-content">
        <div className="video-section">
          <VideoPlayer video={currentVideo} />
          <VideoInfo video={currentVideo} />
          <CommentSection videoId={currentVideo.id} />
        </div>
        <div className="recommendations-section">
          <VideoRecommendations currentVideoId={currentVideo.id} />
        </div>
      </div>
    </div>
  );
}
