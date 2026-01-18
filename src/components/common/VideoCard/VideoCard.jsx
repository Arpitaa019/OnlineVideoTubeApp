import React from 'react';
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { ROUTES } from '../../../constants/routes';
import './VideoCard.css';

const VideoCard = ({ video, showChannel = true, size = 'medium' }) => {
  const formatViews = (views) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`;
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`;
    }
    return views;
  };

  const formatDuration = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  const getPublishedTime = (date) => {
    try {
      return formatDistanceToNow(new Date(date), { addSuffix: true });
    } catch {
      return date;
    }
  };

  return (
    <div className={`video-card ${size}`}>
      <Link to={ROUTES.WATCH_PATH(video.id)} className="video-card__thumbnail-link">
        <div className="video-card__thumbnail">
          <img 
            src={video.thumbnail || '/placeholder-thumbnail.jpg'} 
            alt={video.title}
            loading="lazy"
          />
          {video.duration && (
            <span className="video-card__duration">
              {typeof video.duration === 'number' 
                ? formatDuration(video.duration) 
                : video.duration}
            </span>
          )}
          {video.quality && (
            <span className="video-card__quality">{video.quality}</span>
          )}
          {video.isLive && (
            <span className="video-card__live-badge">LIVE</span>
          )}
        </div>
      </Link>

      <div className="video-card__details">
        {showChannel && video.channel && (
          <Link 
            to={ROUTES.CHANNEL_PATH(video.channel.id)} 
            className="video-card__avatar"
          >
            <img 
              src={video.channel.avatar || '/default-avatar.jpg'} 
              alt={video.channel.name}
            />
          </Link>
        )}

        <div className="video-card__info">
          <Link to={ROUTES.WATCH_PATH(video.id)} className="video-card__title">
            <h3>{video.title}</h3>
          </Link>

          {showChannel && video.channel && (
            <Link 
              to={ROUTES.CHANNEL_PATH(video.channel.id)} 
              className="video-card__channel"
            >
              <span>{video.channel.name}</span>
              {video.channel.verified && (
                <svg className="video-card__verified" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              )}
            </Link>
          )}

          <div className="video-card__metadata">
            <span>{formatViews(video.views)} views</span>
            <span className="video-card__separator">•</span>
            <span>{video.publishedAt ? getPublishedTime(video.publishedAt) : video.published}</span>
          </div>

          {video.tags && video.tags.length > 0 && (
            <div className="video-card__tags">
              {video.tags.slice(0, 2).map((tag, index) => (
                <span key={index} className="video-card__tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
