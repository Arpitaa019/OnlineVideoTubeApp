import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import {
  setPlaying,
  setCurrentTime,
  setDuration,
  setVolume,
  setMuted,
  setPlaybackRate,
  setQuality,
  setFullscreen,
  setVideoElement,
} from '@/store/slices/playerSlice';
import './VideoPlayer.css';

const VideoPlayer = ({ src, poster, onEnded, autoPlay = false, className = '' }) => {
  const dispatch = useDispatch();
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const containerRef = useRef(null);

  const {
    isPlaying,
    volume,
    muted,
    playbackRate,
    quality,
    fullscreen,
    theater,
  } = useSelector((state) => state.player);

  const [showControls, setShowControls] = useState(true);
  const [controlsTimeout, setControlsTimeout] = useState(null);

  useEffect(() => {
    if (!videoRef.current) return;

    // Initialize Video.js player
    const player = videojs(videoRef.current, {
      controls: true,
      autoplay: autoPlay,
      preload: 'auto',
      fluid: true,
      responsive: true,
      playbackRates: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
      controlBar: {
        children: [
          'playToggle',
          'volumePanel',
          'currentTimeDisplay',
          'timeDivider',
          'durationDisplay',
          'progressControl',
          'playbackRateMenuButton',
          'qualitySelector',
          'fullscreenToggle',
        ],
      },
    });

    playerRef.current = player;

    // Set sources
    if (src) {
      player.src({
        src: src,
        type: 'application/x-mpegURL', // HLS
      });
    }

    if (poster) {
      player.poster(poster);
    }

    // Event listeners
    player.on('play', () => {
      dispatch(setPlaying(true));
    });

    player.on('pause', () => {
      dispatch(setPlaying(false));
    });

    player.on('timeupdate', () => {
      dispatch(setCurrentTime(player.currentTime()));
    });

    player.on('loadedmetadata', () => {
      dispatch(setDuration(player.duration()));
    });

    player.on('volumechange', () => {
      dispatch(setVolume(player.volume()));
    });

    player.on('ratechange', () => {
      dispatch(setPlaybackRate(player.playbackRate()));
    });

    player.on('ended', () => {
      dispatch(setPlaying(false));
      if (onEnded) onEnded();
    });

    player.on('fullscreenchange', () => {
      dispatch(toggleFullscreen());
    });

    dispatch(setVideoElement(player));

    // Cleanup
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        dispatch(setVideoElement(null));
      }
    };
  }, [src]);

  // Update player volume
  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.volume(volume);
      playerRef.current.muted(muted);
    }
  }, [volume, muted]);

  // Update playback rate
  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.playbackRate(playbackRate);
    }
  }, [playbackRate]);

  // Handle mouse move for controls
  const handleMouseMove = () => {
    setShowControls(true);
    
    if (controlsTimeout) {
      clearTimeout(controlsTimeout);
    }

    if (isPlaying) {
      const timeout = setTimeout(() => {
        setShowControls(false);
      }, 3000);
      setControlsTimeout(timeout);
    }
  };

  const handleMouseLeave = () => {
    if (isPlaying) {
      setShowControls(false);
    }
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!playerRef.current) return;

      switch (e.key) {
        case ' ':
        case 'k':
          e.preventDefault();
          if (playerRef.current.paused()) {
            playerRef.current.play();
          } else {
            playerRef.current.pause();
          }
          break;
        case 'ArrowLeft':
          e.preventDefault();
          playerRef.current.currentTime(Math.max(0, playerRef.current.currentTime() - 5));
          break;
        case 'ArrowRight':
          e.preventDefault();
          playerRef.current.currentTime(
            Math.min(playerRef.current.duration(), playerRef.current.currentTime() + 5)
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          playerRef.current.volume(Math.min(1, playerRef.current.volume() + 0.1));
          break;
        case 'ArrowDown':
          e.preventDefault();
          playerRef.current.volume(Math.max(0, playerRef.current.volume() - 0.1));
          break;
        case 'm':
          e.preventDefault();
          playerRef.current.muted(!playerRef.current.muted());
          break;
        case 'f':
          e.preventDefault();
          if (playerRef.current.isFullscreen()) {
            playerRef.current.exitFullscreen();
          } else {
            playerRef.current.requestFullscreen();
          }
          break;
        case 't':
          e.preventDefault();
          dispatch(toggleTheater());
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [dispatch]);

  return (
    <div
      ref={containerRef}
      className={`video-player-container ${theater ? 'theater-mode' : ''} ${
        fullscreen ? 'fullscreen-mode' : ''
      } ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div data-vjs-player>
        <video
          ref={videoRef}
          className="video-js vjs-big-play-centered vjs-theme-netflix"
          playsInline
        />
      </div>

      {/* Custom overlays can be added here */}
      {showControls && (
        <div className="video-player-overlay">
          {/* Additional custom controls */}
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
