import React from 'react';
import './VideoInfo.css';

const VideoInfo = ({ video }) => {
  if (!video) return null;

  return (
    <div className="video-info">
      <h1 className="video-title">{video.title}</h1>
      <div className="video-meta">
        <span>{video.views} views</span>
        <span>{video.uploadDate}</span>
      </div>
      <div className="video-description">
        <p>{video.description}</p>
      </div>
    </div>
  );
};

export default VideoInfo;
