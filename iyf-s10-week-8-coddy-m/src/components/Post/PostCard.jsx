function PostCard({ post, onToggleLike, onDelete }) {
  return (
    <article className="card">
      <h3 style={{ marginBottom: '8px' }}>{post.title}</h3>
      <p style={{ color: '#6b7280', marginBottom: '12px', lineHeight: '1.5' }}>
        {post.excerpt}
      </p>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        fontSize: '0.85rem'
      }}>
        <span style={{ color: '#9ca3af' }}>
          By <strong style={{ color: '#374151' }}>{post.author}</strong> • {post.date}
        </span>
        
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          {/* ✅ FIXED: Uses onToggleLike to match App.jsx */}
          <button
            className={`like-btn ${post.isLiked ? 'liked' : ''}`}
            onClick={() => onToggleLike(post.id)}
            aria-label={post.isLiked ? "Unlike post" : "Like post"}
          >
            {post.isLiked ? '❤️' : '🤍'} {post.likes}
          </button>

          <button
            className="delete-btn"
            onClick={() => onDelete(post.id)}
            aria-label="Delete post"
          >
            🗑️
          </button>
        </div>
      </div>
    </article>
  )
}

export default PostCard