import Input from '../shared/Input'
import Button from '../shared/Button'

function Sidebar({ searchTerm, onSearchChange, totalPosts, totalLikes }) {
  const popularPosts = [
    { title: "Understanding JSX", likes: 15 },
    { title: "Getting Started with React", likes: 12 },
    { title: "JavaScript Best Practices", likes: 8 }
  ]
  const tags = ['React', 'JavaScript', 'WebDev', 'Tutorial', 'Frontend', 'UI/UX']

  return (
    <aside className="sidebar">
      <div className="card sidebar-section">
        <h3>🔍 Search</h3>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Input 
            type="text" 
            placeholder="Search by title, content, or author..." 
            value={searchTerm} 
            onChange={(e) => onSearchChange(e.target.value)} 
            style={{ flex: 1 }}
          />
          {searchTerm && (
            <Button variant="secondary" size="sm" onClick={() => onSearchChange('')}>
              ✕
            </Button>
          )}
        </div>
      </div>

      <div className="card sidebar-section">
        <h3>📊 Stats</h3>
        <div className="stat-item"><span>Total Posts</span><strong>{totalPosts}</strong></div>
        <div className="stat-item"><span>Total Likes</span><strong>{totalLikes} ❤️</strong></div>
      </div>

      <div className="card sidebar-section">
        <h3>🔥 Popular</h3>
        {popularPosts.map((post, idx) => (
          <div key={idx} className="stat-item">
            <span style={{ fontWeight: 500 }}>{post.title}</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{post.likes} ❤️</span>
          </div>
        ))}
      </div>

      <div className="card sidebar-section">
        <h3>🏷️ Tags</h3>
        <div className="tag-list">{tags.map(tag => <span key={tag} className="tag">{tag}</span>)}</div>
      </div>
    </aside>
  )
}
export default Sidebar