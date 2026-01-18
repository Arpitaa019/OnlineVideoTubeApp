import React from 'react';
import './Skeleton.css';

const Skeleton = ({ 
  variant = 'text', 
  width, 
  height, 
  borderRadius,
  animation = 'pulse',
  count = 1,
  className = '' 
}) => {
  const getStyle = () => {
    const style = {};
    
    if (width) style.width = typeof width === 'number' ? `${width}px` : width;
    if (height) style.height = typeof height === 'number' ? `${height}px` : height;
    if (borderRadius) style.borderRadius = typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius;
    
    return style;
  };

  const getVariantClass = () => {
    switch (variant) {
      case 'text':
        return 'skeleton-text';
      case 'circular':
        return 'skeleton-circular';
      case 'rectangular':
        return 'skeleton-rectangular';
      default:
        return 'skeleton-text';
    }
  };

  const skeletons = Array(count).fill(null);

  return (
    <>
      {skeletons.map((_, index) => (
        <div
          key={index}
          className={`skeleton ${getVariantClass()} skeleton-${animation} ${className}`}
          style={getStyle()}
        />
      ))}
    </>
  );
};

export default Skeleton;
