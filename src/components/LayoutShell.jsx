import { useEffect, useMemo, useState } from 'react'
import './LayoutShell.css'

function ThemeToggle({ theme, onToggle }) {
  return (
    <button className="btn" onClick={onToggle} aria-label="Toggle theme">
      {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
    </button>
  )
}

function LayoutShell({ children, footer = false }) {
  const [theme, setTheme] = useState('dark')
  const [searchTerm, setSearchTerm] = useState('')
  const [searchFocus, setSearchFocus] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const navItems = useMemo(
    () => [
      { label: 'Home', href: '#' },
      { label: 'Trending', href: '#' },
      { label: 'Categories', href: '#' },
      { label: 'Subscriptions', href: '#' },
      { label: 'Library', href: '#' },
    ],
    [],
  )

  const categories = useMemo(
    () => ['All', 'Music', 'Sports', 'Gaming', 'News', 'Learning', 'Live'],
    [],
  )

  const quickFilters = useMemo(
    () => ['HD', '4K', '< 10 min', '10-30 min', '30+ min'],
    [],
  )

  const suggestionPool = useMemo(
    () => [
      'Top highlights',
      'Daily mix',
      'Live streams',
      'Short documentaries',
      'Music videos',
      'Tech reviews',
      'Workout routines',
      'Travel vlogs',
      'Comedy shorts',
    ],
    [],
  )

  const suggestions = useMemo(() => {
    if (!searchTerm) return suggestionPool.slice(0, 5)
    return suggestionPool.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }, [searchTerm, suggestionPool])

  return (
    <div className={`layout-shell ${theme}`}>
      <header className="shell-header">
        <div className="brand">VideoTube</div>

        <nav className="primary-nav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="search">
          <div className="search-input">
            <select aria-label="Category filter">
              {categories.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
            <input
              type="search"
              placeholder="Search videos"
              aria-label="Search"
              value={searchTerm}
              onFocus={() => setSearchFocus(true)}
              onBlur={() => setSearchFocus(false)}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {searchFocus && suggestions.length > 0 && (
            <div className="search-suggestions" role="listbox">
              {suggestions.map((item) => (
                <button
                  key={item}
                  className="suggestion"
                  type="button"
                  onMouseDown={() => setSearchTerm(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="header-actions">
          <ThemeToggle
            theme={theme}
            onToggle={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
          />
          <button className="btn ghost">Upload</button>
          <div className="avatar" aria-hidden>
            <span>SA</span>
          </div>
        </div>
      </header>

      <div className="shell-body">
        <aside className="sidebar">
          <nav>
            <ul>
              {navItems.map((item) => (
                <li key={item}>
                  <a href="#" aria-label={item}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="main">
          <div className="filter-bar">
            <div className="quick-filters" aria-label="Quick filters">
              {quickFilters.map((filter) => (
                <button className="chip" key={filter} type="button">
                  {filter}
                </button>
              ))}
            </div>
          </div>
          {children}
        </main>
      </div>

      {footer && (
        <footer className="footer">
          <div className="footer-left">
            <div className="brand">VideoTube</div>
            <div className="footer-links">
              <a href="#">About</a>
              <a href="#">Help</a>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
          <div className="footer-right">
            <select aria-label="Language selector">
              <option>English</option>
              <option>Deutsch</option>
              <option>Español</option>
            </select>
          </div>
        </footer>
      )}
    </div>
  )
}

export default LayoutShell
