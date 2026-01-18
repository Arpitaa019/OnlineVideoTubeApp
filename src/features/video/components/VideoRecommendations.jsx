import React from 'react';
import './VideoRecommendations.css';

const VideoRecommendations = ({ videos = [] }) => {
  return (
    <div className="video-recommendations">
      <h3>Recommended</h3>
      <div className="recommendations-list">
        {videos.map((video) => (
          <div key={video.id} className="recommendation-item">
            <img src={video.thumbnail} alt={video.title} />
            <div className="recommendation-info">
              <h4>{video.title}</h4>
              <p>{video.channel}</p>
              <p>{video.views} views</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoRecommendations;
