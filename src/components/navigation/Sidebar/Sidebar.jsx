import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Sidebar.css';

export default function Sidebar() {
  const { sidebarOpen } = useSelector((state) => state.ui);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const menuItems = [
    { path: '/', icon: '🏠', label: 'Home' },
    { path: '/trending', icon: '🔥', label: 'Trending' },
    { path: '/subscriptions', icon: '📺', label: 'Subscriptions', authRequired: true },
  ];

  const libraryItems = [
    { path: '/library', icon: '📚', label: 'Library', authRequired: true },
    { path: '/history', icon: '🕐', label: 'History', authRequired: true },
    { path: '/liked-videos', icon: '👍', label: 'Liked Videos', authRequired: true },
    { path: '/watch-later', icon: '⏰', label: 'Watch Later', authRequired: true },
  ];

  return (
    <aside className={`sidebar ${!sidebarOpen ? 'sidebar-mini' : ''}`}>
      <nav className="sidebar-nav">
        <div className="sidebar-section">
          {menuItems.map((item) => {
            if (item.authRequired && !isAuthenticated) return null;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `sidebar-item ${isActive ? 'active' : ''}`
                }
              >
                <span className="sidebar-icon">{item.icon}</span>
                {sidebarOpen && <span className="sidebar-label">{item.label}</span>}
              </NavLink>
            );
          })}
        </div>

        {isAuthenticated && (
          <>
            <div className="sidebar-divider" />
            <div className="sidebar-section">
              {libraryItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `sidebar-item ${isActive ? 'active' : ''}`
                  }
                >
                  <span className="sidebar-icon">{item.icon}</span>
                  {sidebarOpen && <span className="sidebar-label">{item.label}</span>}
                </NavLink>
              ))}
            </div>
          </>
        )}

        <div className="sidebar-divider" />
        
        <div className="sidebar-section">
          <NavLink
            to="/premium"
            className={({ isActive }) =>
              `sidebar-item ${isActive ? 'active' : ''}`
            }
          >
            <span className="sidebar-icon">⭐</span>
            {sidebarOpen && <span className="sidebar-label">Premium</span>}
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `sidebar-item ${isActive ? 'active' : ''}`
            }
          >
            <span className="sidebar-icon">⚙️</span>
            {sidebarOpen && <span className="sidebar-label">Settings</span>}
          </NavLink>
        </div>
      </nav>
    </aside>
  );
}
