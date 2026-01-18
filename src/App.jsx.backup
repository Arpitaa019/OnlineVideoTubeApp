import { useMemo, useState } from 'react'
import './App.css'
import LayoutShell from './components/LayoutShell'
import Chip from './components/Chip'

const videos = [
  {
    id: 1,
    title: 'Cityscape at dusk timelapse',
    duration: '08:24',
    quality: '4K',
    views: 182000,
    published: '2024-12-20',
    channel: 'Urban Frames',
    tags: ['City', 'Timelapse'],
    category: 'Travel',
  },
  {
    id: 2,
    title: 'Quick 15-minute dinner ideas',
    duration: '12:15',
    quality: 'HD',
    views: 94000,
    published: '2024-12-12',
    channel: 'Kitchen Lab',
    tags: ['Food', 'Tutorial'],
    category: 'Food',
  },
  {
    id: 3,
    title: 'Trail running through alpine ridge',
    duration: '22:48',
    quality: '4K',
    views: 204000,
    published: '2024-12-05',
    channel: 'Move Outdoors',
    tags: ['Fitness', 'Outdoors'],
    category: 'Sports',
  },
  {
    id: 4,
    title: 'Beginner guitar chord progressions',
    duration: '09:52',
    quality: 'HD',
    views: 121000,
    published: '2024-11-28',
    channel: 'Soundcraft',
    tags: ['Music', 'Tutorial'],
    category: 'Music',
  },
  {
    id: 5,
    title: 'Indie game dev log #12',
    duration: '16:03',
    quality: 'HD',
    views: 76000,
    published: '2024-11-18',
    channel: 'Pixel North',
    tags: ['Gaming', 'Devlog'],
    category: 'Gaming',
  },
  {
    id: 6,
    title: 'Night photography tips in rain',
    duration: '11:44',
    quality: '4K',
    views: 143000,
    published: '2024-11-10',
    channel: 'Glass&Grain',
    tags: ['Photography', 'Tips'],
    category: 'Learning',
  },
  {
    id: 7,
    title: 'Minimal workspace setup tour',
    duration: '07:58',
    quality: 'HD',
    views: 132000,
    published: '2024-11-02',
    channel: 'Desk Mode',
    tags: ['Productivity', 'Setup'],
    category: 'Lifestyle',
  },
  {
    id: 8,
    title: 'Coastal drone flyover',
    duration: '05:36',
    quality: '4K',
    views: 221000,
    published: '2024-10-25',
    channel: 'Skyline',
    tags: ['Drone', 'Nature'],
    category: 'Travel',
  },
  {
    id: 9,
    title: '45-minute strength routine',
    duration: '33:47',
    quality: 'HD',
    views: 99000,
    published: '2024-10-18',
    channel: 'Lift Lab',
    tags: ['Fitness', 'Strength'],
    category: 'Sports',
  },
  {
    id: 10,
    title: 'Cinematic b-roll pack',
    duration: '14:11',
    quality: '4K',
    views: 178000,
    published: '2024-10-08',
    channel: 'FrameWorks',
    tags: ['Cinematic', 'Assets'],
    category: 'Learning',
  },
  {
    id: 11,
    title: 'Weekend cabin vlog',
    duration: '18:04',
    quality: 'HD',
    views: 84000,
    published: '2024-09-30',
    channel: 'Woodland Road',
    tags: ['Vlog', 'Travel'],
    category: 'Lifestyle',
  },
  {
    id: 12,
    title: 'News recap: weekly brief',
    duration: '06:40',
    quality: 'HD',
    views: 154000,
    published: '2024-09-22',
    channel: 'Daily Scope',
    tags: ['News', 'Recap'],
    category: 'News',
  },
]

const heroVideo = {
  id: 101,
  title: 'Immerse in coastal sunrise drone flyover',
  subtitle: 'See the golden hour from above with calm scoring.',
  duration: '05:12',
  quality: '4K',
  views: 482000,
  published: '2024-12-28',
  channel: 'Skyline',
  tags: ['Drone', 'Nature', 'Cinematic'],
}

const trending = videos.slice(0, 4)
const recent = videos.slice(4, 8)

const durationFilters = ['< 10 min', '10-30 min', '30+ min']
const qualityFilters = ['HD', '4K']
const categoryFilters = ['All', 'Travel', 'Food', 'Sports', 'Music', 'Gaming', 'Learning', 'Lifestyle', 'News']
const tagFilters = ['Tutorial', 'Travel', 'Fitness', 'Music', 'Gaming', 'Photography']
const sortOptions = [
  { value: 'views', label: 'Most views' },
  { value: 'newest', label: 'Newest' },
  { value: 'oldest', label: 'Oldest' },
]

function durationBucket(duration) {
  const [m, s] = duration.split(':').map(Number)
  const totalMinutes = m + s / 60
  if (totalMinutes < 10) return '< 10 min'
  if (totalMinutes <= 30) return '10-30 min'
  return '30+ min'
}

function App() {
  const [selectedDuration, setSelectedDuration] = useState('')
  const [selectedQuality, setSelectedQuality] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedTag, setSelectedTag] = useState('')
  const [sortBy, setSortBy] = useState('views')
  const [pagesLoaded, setPagesLoaded] = useState(1)
  const pageSize = 8
  const [activeView, setActiveView] = useState('list') // list | detail
  const [selectedVideo, setSelectedVideo] = useState(null)

  const filtered = useMemo(() => {
    return videos
      .filter((v) => {
        if (selectedDuration && durationBucket(v.duration) !== selectedDuration) return false
        if (selectedQuality && v.quality !== selectedQuality) return false
        if (selectedCategory && selectedCategory !== 'All' && v.category !== selectedCategory)
          return false
        if (selectedTag && !v.tags.includes(selectedTag)) return false
        return true
      })
      .sort((a, b) => {
        if (sortBy === 'views') return b.views - a.views
        if (sortBy === 'newest') return new Date(b.published) - new Date(a.published)
        if (sortBy === 'oldest') return new Date(a.published) - new Date(b.published)
        return 0
      })
  }, [selectedCategory, selectedDuration, selectedQuality, selectedTag, sortBy])

  const visible = useMemo(() => filtered.slice(0, pagesLoaded * pageSize), [filtered, pagesLoaded])

  const canLoadMore = visible.length < filtered.length

  const resetPagination = () => setPagesLoaded(1)

  const openDetail = (video) => {
    setSelectedVideo(video)
    setActiveView('detail')
  }

  const backToList = () => {
    setActiveView('list')
    setSelectedVideo(null)
  }

  return (
    <LayoutShell footer>
      <section className="hero">
        <div className="hero-media">
          <div className="hero-overlay">
            <div className="badge quality">{heroVideo.quality}</div>
            <div className="badge duration">{heroVideo.duration}</div>
          </div>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Featured</p>
          <h2>{heroVideo.title}</h2>
          <p className="subhead">{heroVideo.subtitle}</p>
          <div className="hero-meta">
            <span>{heroVideo.channel}</span>
            <span>· {heroVideo.views.toLocaleString()} views</span>
          </div>
          <div className="hero-tags">
            {heroVideo.tags.map((tag) => (
              <Chip key={tag} label={tag} size="sm" />
            ))}
          </div>
          <div className="hero-actions">
            <button className="btn" type="button" onClick={() => openDetail(heroVideo)}>
              Watch now
            </button>
            <button className="btn ghost" type="button">
              Save
            </button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h3>Trending</h3>
        </div>
        <div className="grid">
          {trending.map((video) => (
            <article className="card" key={video.id} onClick={() => openDetail(video)}>
              <div className="thumb">
                <div className="badge duration">{video.duration}</div>
                <div className="badge quality">{video.quality}</div>
              </div>
              <div className="card-body">
                <div className="card-title">{video.title}</div>
                <div className="card-meta">{video.channel}</div>
                <div className="card-meta">
                  {video.views.toLocaleString()} views · {new Date(video.published).toDateString()}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h3>Recent</h3>
        </div>
        <div className="grid">
          {recent.map((video) => (
            <article className="card" key={video.id} onClick={() => openDetail(video)}>
              <div className="thumb">
                <div className="badge duration">{video.duration}</div>
                <div className="badge quality">{video.quality}</div>
              </div>
              <div className="card-body">
                <div className="card-title">{video.title}</div>
                <div className="card-meta">{video.channel}</div>
                <div className="card-meta">
                  {video.views.toLocaleString()} views · {new Date(video.published).toDateString()}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="filters-panel">
        <div className="filters-row">
          <div className="filters-label">Duration</div>
          <div className="chips-line">
            {durationFilters.map((label) => (
              <Chip
                key={label}
                label={label}
            {activeView === 'list' && (
              <>
                <div className="section-head spaced">
                  <h3>All videos</h3>
                </div>
                <div className="grid">
                  {visible.map((video) => (
                    <article className="card" key={video.id} onClick={() => openDetail(video)}>
                      <div className="thumb">
                        <div className="badge duration">{video.duration}</div>
                        <div className="badge quality">{video.quality}</div>
                        <div className="hover-preview">Preview</div>
                      </div>
                      <div className="card-body">
                        <div className="card-title">{video.title}</div>
                        <div className="card-meta">{video.channel}</div>
                        <div className="card-meta">
                          {video.views.toLocaleString()} views · {new Date(video.published).toDateString()}
                        </div>
                        <div className="card-actions">
                          <div className="tag-row">
                            {video.tags.map((tag) => (
                              <Chip key={tag} label={tag} size="sm" />
                            ))}
                          </div>
                          <button className="btn ghost save-btn" type="button">
                            Save
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="pager-row">
                  <div className="pager-meta">
                    Showing {visible.length} of {filtered.length} videos
                  </div>
                  {canLoadMore && (
                    <button className="btn" type="button" onClick={() => setPagesLoaded((p) => p + 1)}>
                      Load more
                    </button>
                  )}
                </div>
              </>
            )}

            {activeView === 'detail' && selectedVideo && (
              <section className="detail">
                <button className="btn ghost" type="button" onClick={backToList}>
                  ← Back
                </button>
                <div className="player">
                  <div className="player-frame">Player area (embed)</div>
                </div>
                <h2>{selectedVideo.title}</h2>
                <div className="detail-meta">
                  <span>{selectedVideo.channel}</span>
                  <span>· {selectedVideo.views.toLocaleString()} views</span>
                  <span>· {new Date(selectedVideo.published).toDateString()}</span>
                </div>
                <div className="detail-actions">
                  <button className="btn">Like</button>
                  <button className="btn ghost">Share</button>
                  <button className="btn ghost">Save</button>
                  <button className="btn ghost">Report</button>
                </div>
                <p className="detail-desc">
                  Brief description placeholder. Add a synopsis, chapters, or links here.
                </p>
                <div className="tag-row">
                  {selectedVideo.tags.map((tag) => (
                    <Chip key={tag} label={tag} size="sm" />
                  ))}
                </div>

                <div className="section-head spaced">
                  <h4>Comments</h4>
                  <select className="sort-select" aria-label="Sort comments">
                    <option>Top</option>
                    <option>New</option>
                  </select>
                </div>
                <div className="comment-box">
                  <textarea rows="3" placeholder="Add a comment" />
                  <div className="comment-actions">
                    <button className="btn ghost" type="button">
                      Cancel
                    </button>
                    <button className="btn" type="button">
                      Post
                    </button>
                  </div>
                </div>
                <div className="comments">
                  {[1, 2, 3].map((id) => (
                    <div className="comment" key={id}>
                      <div className="avatar small" aria-hidden>
                        <span>U{id}</span>
                      </div>
                      <div>
                        <div className="comment-head">
                          <span className="author">User {id}</span>
                          <span className="time">· {id}h ago</span>
                        </div>
                        <p className="comment-body">Great footage, love the pacing.</p>
                        <div className="comment-actions-line">
                          <button className="btn ghost" type="button">
                            Reply
                          </button>
                          <button className="btn ghost" type="button">
                            Like
                          </button>
                        </div>
                        <div className="reply-thread">
                          <div className="comment reply">
                            <div className="avatar small" aria-hidden>
                              <span>R</span>
                            </div>
                            <div>
                              <div className="comment-head">
                                <span className="author">Creator</span>
                                <span className="time">· 30m ago</span>
                              </div>
                              <p className="comment-body">Thanks for watching!</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="section-head spaced">
                  <h4>Related</h4>
                </div>
                <div className="grid related-grid">
                  {videos.slice(0, 4).map((video) => (
                    <article className="card" key={`related-${video.id}`} onClick={() => openDetail(video)}>
                      <div className="thumb">
                        <div className="badge duration">{video.duration}</div>
                        <div className="badge quality">{video.quality}</div>
                      </div>
                      <div className="card-body">
                        <div className="card-title">{video.title}</div>
                        <div className="card-meta">{video.channel}</div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}
              />
            ))}
          </div>
        </div>

        <div className="filters-row">
          <div className="filters-label">Tags</div>
          <div className="chips-line">
            {tagFilters.map((label) => (
              <Chip
                key={label}
                label={label}
                active={selectedTag === label}
                onClick={() => {
                  setSelectedTag((prev) => (prev === label ? '' : label))
                  resetPagination()
                }}
              />
            ))}
          </div>
        </div>

        <div className="filters-row sort-row">
          <div className="filters-label">Sort</div>
          <select
            className="sort-select"
            aria-label="Sort videos"
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value)
              resetPagination()
            }}
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </section>

      <div className="grid">
        {visible.map((video) => (
          <article className="card" key={video.id}>
            <div className="thumb">
              <div className="badge duration">{video.duration}</div>
              <div className="badge quality">{video.quality}</div>
              <div className="hover-preview">Preview</div>
            </div>
            <div className="card-body">
              <div className="card-title">{video.title}</div>
              <div className="card-meta">{video.channel}</div>
              <div className="card-meta">
                {video.views.toLocaleString()} views · {new Date(video.published).toDateString()}
              </div>
              <div className="card-actions">
                <div className="tag-row">
                  {video.tags.map((tag) => (
                    <Chip key={tag} label={tag} size="sm" />
                  ))}
                </div>
                <button className="btn ghost save-btn" type="button">
                  Save
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
      </div>

      <div className="pager-row">
        <div className="pager-meta">
          Showing {visible.length} of {filtered.length} videos
        </div>
        {canLoadMore && (
          <button className="btn" type="button" onClick={() => setPagesLoaded((p) => p + 1)}>
            Load more
          </button>
        )}
      </div>
    </LayoutShell>
  )
}

export default App
