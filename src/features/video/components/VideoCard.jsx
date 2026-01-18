import { Link } from 'react-router-dom';
import { formatViews, formatTimeAgo } from '@/utils/formatters/videoFormatter';
import './VideoCard.css';

export default function VideoCard({ video }) {
  const {
    id,
    title,
    thumbnailUrl,
    duration,
    views,
    createdAt,
    channel,
  } = video;

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Link to={`/watch/${id}`} className="video-card">
      <div className="video-thumbnail">
        <img src={thumbnailUrl} alt={title} loading="lazy" />
        <span className="video-duration">{formatDuration(duration)}</span>
      </div>
      
      <div className="video-details">
        <Link to={`/channel/${channel.id}`} className="channel-avatar">
          <img src={channel.avatar} alt={channel.name} />
        </Link>
        
        <div className="video-info">
          <h3 className="video-title">{title}</h3>
          <Link to={`/channel/${channel.id}`} className="channel-name">
            {channel.name}
            {channel.isVerified && <span className="verified-badge">✓</span>}
          </Link>
          <div className="video-meta">
            <span>{formatViews(views)} views</span>
            <span>•</span>
            <span>{formatTimeAgo(createdAt)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
