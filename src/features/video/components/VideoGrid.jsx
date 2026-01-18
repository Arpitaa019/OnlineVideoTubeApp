import VideoCard from './VideoCard';
import './VideoGrid.css';

export default function VideoGrid({ videos }) {
  if (!videos || videos.length === 0) {
    return (
      <div className="empty-state">
        <p>No videos found</p>
      </div>
    );
  }

  return (
    <div className="video-grid">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
