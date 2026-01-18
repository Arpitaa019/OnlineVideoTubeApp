import './VideoCardSkeleton.css';

export default function VideoCardSkeleton() {
  return (
    <div className="video-card-skeleton">
      <div className="skeleton-thumbnail" />
      <div className="skeleton-details">
        <div className="skeleton-avatar" />
        <div className="skeleton-info">
          <div className="skeleton-title" />
          <div className="skeleton-title short" />
          <div className="skeleton-meta" />
        </div>
      </div>
    </div>
  );
}
