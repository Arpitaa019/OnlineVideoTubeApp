import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '@/store/slices/uiSlice';
import './Header.css';

export default function Header() {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-button" onClick={handleToggleSidebar}>
          ☰
        </button>
        <Link to="/" className="logo">
          <span className="logo-icon">▶</span>
          <span className="logo-text">VideoTube</span>
        </Link>
      </div>

      <div className="header-center">
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search videos, channels..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            🔍
          </button>
        </form>
      </div>

      <div className="header-right">
        {isAuthenticated ? (
          <>
            <button className="icon-button" title="Upload">
              📹
            </button>
            <button className="icon-button" title="Notifications">
              🔔
            </button>
            <div className="user-menu">
              <img
                src={user?.avatar || '/default-avatar.png'}
                alt={user?.displayName}
                className="user-avatar"
              />
            </div>
          </>
        ) : (
          <Link to="/auth/login" className="sign-in-button">
            Sign In
          </Link>
        )}
      </div>
    </header>
  );
}
