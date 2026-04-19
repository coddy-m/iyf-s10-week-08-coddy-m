import PostCard from './PostCard'

function PostList({ posts, onToggleLike, onDelete }) {
  if (!posts || posts.length === 0) {
    return (
      <div className="card" style={{ textAlign: 'center', padding: '40px' }}>
        <p style={{ color: '#6b7280' }}>No posts found. Create one above! 🎉</p>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {posts.map(post => (
        <PostCard 
          key={post.id}
          post={post}
          onToggleLike={onToggleLike}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default PostList