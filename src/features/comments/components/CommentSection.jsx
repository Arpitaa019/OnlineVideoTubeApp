import React from 'react';
import './CommentSection.css';

const CommentSection = ({ videoId, comments = [] }) => {
  return (
    <div className="comment-section">
      <h3>{comments.length} Comments</h3>
      <div className="comment-input">
        <input type="text" placeholder="Add a comment..." />
      </div>
      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment-item">
            <img src={comment.avatar} alt={comment.author} />
            <div className="comment-content">
              <div className="comment-header">
                <span className="comment-author">{comment.author}</span>
                <span className="comment-date">{comment.date}</span>
              </div>
              <p className="comment-text">{comment.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
