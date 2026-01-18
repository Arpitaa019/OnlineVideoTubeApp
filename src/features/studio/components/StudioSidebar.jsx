import React from 'react';
import './StudioSidebar.css';

const StudioSidebar = () => {
  return (
    <div className="studio-sidebar">
      <nav>
        <a href="/studio/dashboard">Dashboard</a>
        <a href="/studio/videos">Videos</a>
        <a href="/studio/analytics">Analytics</a>
        <a href="/studio/comments">Comments</a>
      </nav>
    </div>
  );
};

export default StudioSidebar;
