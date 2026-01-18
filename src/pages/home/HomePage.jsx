import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setVideos, setTrending, setRecommended } from '@/store/slices/videoSlice';
import VideoGrid from '@/features/video/components/VideoGrid';
import VideoCardSkeleton from '@/features/video/components/VideoCardSkeleton';
import './HomePage.css';

// Dummy video data
const DUMMY_VIDEOS = [
  {
    id: '1',
    title: 'Big Buck Bunny - Open Source Animation',
    thumbnail: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
    duration: '9:56',
    views: '1.2M',
    uploadDate: '2 days ago',
    channel: {
      name: 'Blender Foundation',
      avatar: 'https://yt3.googleusercontent.com/ytc/AIdro_kGRphLJ8YMH2hF_uc8uFvVNH5HW0M5RsaZYRzW=s176-c-k-c0x00ffffff-no-rj',
    },
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  },
  {
    id: '2',
    title: 'Elephants Dream - Fantasy Short Film',
    thumbnail: 'https://orange.blender.org/wp-content/themes/orange/images/media/gallery/s1_proog_emo.jpg',
    duration: '10:53',
    views: '856K',
    uploadDate: '1 week ago',
    channel: {
      name: 'Orange Open Movie',
      avatar: 'https://yt3.googleusercontent.com/ytc/AIdro_kGRphLJ8YMH2hF_uc8uFvVNH5HW0M5RsaZYRzW=s176-c-k-c0x00ffffff-no-rj',
    },
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  },
  {
    id: '3',
    title: 'For Bigger Blazes - Demo Video',
    thumbnail: 'https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
    duration: '15:00',
    views: '2.3M',
    uploadDate: '3 days ago',
    channel: {
      name: 'Google Demo',
      avatar: 'https://yt3.googleusercontent.com/ytc/AIdro_kGRphLJ8YMH2hF_uc8uFvVNH5HW0M5RsaZYRzW=s176-c-k-c0x00ffffff-no-rj',
    },
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  },
  {
    id: '4',
    title: 'Sintel - Epic Fantasy Adventure',
    thumbnail: 'https://durian.blender.org/wp-content/uploads/2010/06/05.8b_comp_000302.jpg',
    duration: '14:48',
    views: '3.1M',
    uploadDate: '5 days ago',
    channel: {
      name: 'Durian Project',
      avatar: 'https://yt3.googleusercontent.com/ytc/AIdro_kGRphLJ8YMH2hF_uc8uFvVNH5HW0M5RsaZYRzW=s176-c-k-c0x00ffffff-no-rj',
    },
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
  },
  {
    id: '5',
    title: 'Subaru Outback On Street And Dirt',
    thumbnail: 'https://storage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
    duration: '8:32',
    views: '456K',
    uploadDate: '1 day ago',
    channel: {
      name: 'Auto Channel',
      avatar: 'https://yt3.googleusercontent.com/ytc/AIdro_kGRphLJ8YMH2hF_uc8uFvVNH5HW0M5RsaZYRzW=s176-c-k-c0x00ffffff-no-rj',
    },
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
  },
  {
    id: '6',
    title: 'Tears of Steel - Sci-Fi Short',
    thumbnail: 'https://mango.blender.org/wp-content/uploads/2012/05/01_thom_celia_bridge.jpg',
    duration: '12:14',
    views: '1.8M',
    uploadDate: '4 days ago',
    channel: {
      name: 'Mango Open Movie',
      avatar: 'https://yt3.googleusercontent.com/ytc/AIdro_kGRphLJ8YMH2hF_uc8uFvVNH5HW0M5RsaZYRzW=s176-c-k-c0x00ffffff-no-rj',
    },
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
  },
  {
    id: '7',
    title: 'Volkswagen GTI Review',
    thumbnail: 'https://storage.googleapis.com/gtv-videos-bucket/sample/images/VolkswagenGTIReview.jpg',
    duration: '7:21',
    views: '678K',
    uploadDate: '6 days ago',
    channel: {
      name: 'Car Reviews',
      avatar: 'https://yt3.googleusercontent.com/ytc/AIdro_kGRphLJ8YMH2hF_uc8uFvVNH5HW0M5RsaZYRzW=s176-c-k-c0x00ffffff-no-rj',
    },
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
  },
  {
    id: '8',
    title: 'We Are Going On Bullrun',
    thumbnail: 'https://storage.googleapis.com/gtv-videos-bucket/sample/images/WeAreGoingOnBullrun.jpg',
    duration: '11:43',
    views: '932K',
    uploadDate: '2 weeks ago',
    channel: {
      name: 'Adventure Channel',
      avatar: 'https://yt3.googleusercontent.com/ytc/AIdro_kGRphLJ8YMH2hF_uc8uFvVNH5HW0M5RsaZYRzW=s176-c-k-c0x00ffffff-no-rj',
    },
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
  },
  {
    id: '9',
    title: 'What care can you get for a grand?',
    thumbnail: 'https://storage.googleapis.com/gtv-videos-bucket/sample/images/WhatCarCanYouGetForAGrand.jpg',
    duration: '6:09',
    views: '234K',
    uploadDate: '3 weeks ago',
    channel: {
      name: 'Budget Cars',
      avatar: 'https://yt3.googleusercontent.com/ytc/AIdro_kGRphLJ8YMH2hF_uc8uFvVNH5HW0M5RsaZYRzW=s176-c-k-c0x00ffffff-no-rj',
    },
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
  },
  {
    id: '10',
    title: 'Big Buck Bunny - Remastered',
    thumbnail: 'https://peach.blender.org/wp-content/uploads/bbb-splash.png',
    duration: '9:56',
    views: '5.2M',
    uploadDate: '1 month ago',
    channel: {
      name: 'Blender Foundation',
      avatar: 'https://yt3.googleusercontent.com/ytc/AIdro_kGRphLJ8YMH2hF_uc8uFvVNH5HW0M5RsaZYRzW=s176-c-k-c0x00ffffff-no-rj',
    },
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  },
  {
    id: '11',
    title: 'For Bigger Escape - Adventure',
    thumbnail: 'https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
    duration: '13:25',
    views: '1.5M',
    uploadDate: '5 days ago',
    channel: {
      name: 'Travel & Adventure',
      avatar: 'https://yt3.googleusercontent.com/ytc/AIdro_kGRphLJ8YMH2hF_uc8uFvVNH5HW0M5RsaZYRzW=s176-c-k-c0x00ffffff-no-rj',
    },
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  },
  {
    id: '12',
    title: 'For Bigger Fun - Entertainment',
    thumbnail: 'https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
    duration: '8:47',
    views: '892K',
    uploadDate: '1 week ago',
    channel: {
      name: 'Entertainment Hub',
      avatar: 'https://yt3.googleusercontent.com/ytc/AIdro_kGRphLJ8YMH2hF_uc8uFvVNH5HW0M5RsaZYRzW=s176-c-k-c0x00ffffff-no-rj',
    },
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  },
];

export default function HomePage() {
  const dispatch = useDispatch();
  const { videos, trending, recommended } = useSelector((state) => state.video);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    loadVideos();
  }, [activeTab]);

  const loadVideos = async () => {
    setIsLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      switch (activeTab) {
        case 'trending':
          dispatch(setTrending(DUMMY_VIDEOS.slice(0, 6)));
          break;
        case 'recommended':
          dispatch(setRecommended(DUMMY_VIDEOS.slice(3, 9)));
          break;
        default:
          dispatch(setVideos(DUMMY_VIDEOS));
      }
    } catch (error) {
      console.error('Failed to load videos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getCurrentVideos = () => {
    switch (activeTab) {
      case 'trending':
        return trending;
      case 'recommended':
        return recommended;
      default:
        return videos;
    }
  };

  return (
    <div className="home-page">
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          All
        </button>
        <button
          className={`tab ${activeTab === 'trending' ? 'active' : ''}`}
          onClick={() => setActiveTab('trending')}
        >
          Trending
        </button>
        <button
          className={`tab ${activeTab === 'recommended' ? 'active' : ''}`}
          onClick={() => setActiveTab('recommended')}
        >
          Recommended
        </button>
      </div>

      {isLoading ? (
        <div className="video-grid">
          {Array.from({ length: 12 }).map((_, i) => (
            <VideoCardSkeleton key={i} />
          ))}
        </div>
      ) : (
        <VideoGrid videos={getCurrentVideos()} />
      )}
    </div>
  );
}
