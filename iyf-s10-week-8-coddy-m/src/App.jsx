import { useState } from 'react'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Sidebar from './components/Layout/Sidebar'
import PostList from './components/Post/PostList'
import CreatePost from './components/Post/CreatePost'
import './index.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Getting Started with React", excerpt: "Learn the basics of React and build amazing UIs with modern tooling.", author: "Alice Chen", date: "Jan 15, 2026", likes: 12, isLiked: false },
    { id: 2, title: "JavaScript Best Practices", excerpt: "Write cleaner, more maintainable JavaScript code that scales.", author: "Bob Martinez", date: "Jan 10, 2026", likes: 8, isLiked: false },
    { id: 3, title: "Understanding JSX", excerpt: "JSX makes React components feel like HTML while keeping JS power.", author: "Charlie Kim", date: "Jan 5, 2026", likes: 15, isLiked: false }
  ])

  const [searchTerm, setSearchTerm] = useState('')

  // ✅ ROBUST SEARCH FILTER
  const filteredPosts = posts.filter(post => {
    const term = searchTerm.toLowerCase().trim()
    if (!term) return true // Show all if search is empty
    
    return (
      post.title.toLowerCase().includes(term) ||
      post.excerpt.toLowerCase().includes(term) ||
      post.author.toLowerCase().includes(term)
    )
  })

  const handleToggleLike = (postId) => {
    setPosts(prev => prev.map(post => {
      if (post.id === postId) {
        const willBeLiked = !post.isLiked
        return { ...post, isLiked: willBeLiked, likes: willBeLiked ? post.likes + 1 : post.likes - 1 }
      }
      return post
    }))
  }

  const handleDelete = (postId) => {
    if (window.confirm('Delete this post?')) {
      setPosts(prev => prev.filter(post => post.id !== postId))
    }
  }

  const handleAddPost = (newPostData) => {
    const newPost = {
      id: Date.now(),
      ...newPostData,
      likes: 0,
      isLiked: false,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    }
    setPosts(prev => [newPost, ...prev])
  }

  const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0)

  return (
    <div className="app-wrapper">
      <Header />
      <div className="main-container">
        <Sidebar 
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm} 
          totalPosts={posts.length} 
          totalLikes={totalLikes} 
        />
        <main className="main-content">
          <CreatePost onAddPost={handleAddPost} />
          
          {/* ✅ Pass filteredPosts, not all posts */}
          <PostList 
            posts={filteredPosts} 
            onToggleLike={handleToggleLike} 
            onDelete={handleDelete} 
          />
          
          {/* Optional: Show search result count */}
          {searchTerm && (
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Showing {filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''} for "{searchTerm}"
            </p>
          )}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App