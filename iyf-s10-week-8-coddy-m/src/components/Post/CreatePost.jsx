import { useState } from 'react'
import Input from '../shared/Input'
import Button from '../shared/Button'

function CreatePost({ onAddPost }) {
  const [formData, setFormData] = useState({ title: '', content: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear success message when user starts typing
    if (successMessage) setSuccessMessage('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validation
    if (!formData.title.trim() || !formData.content.trim()) {
      alert('Please fill in both title and content')
      return
    }
    
    setIsSubmitting(true)
    
    // Simulate small delay for better UX (optional)
    setTimeout(() => {
      // ✅ Create new post object and pass to parent
      onAddPost({
        title: formData.title.trim(),
        excerpt: formData.content.trim().substring(0, 150) + 
                 (formData.content.length > 150 ? '...' : ''),
        author: "You", // In real app, this would come from auth context
        content: formData.content.trim()
      })
      
      // Reset form
      setFormData({ title: '', content: '' })
      setIsSubmitting(false)
      
      // Show success feedback
      setSuccessMessage('✅ Post published successfully!')
      setTimeout(() => setSuccessMessage(''), 3000)
    }, 300)
  }

  const isFormValid = formData.title.trim() && formData.content.trim()

  return (
    <form onSubmit={handleSubmit} className="card">
      <h3 style={{ marginBottom: '16px' }}>✨ Create New Post</h3>
      
      {/* Success message */}
      {successMessage && (
        <div style={{ 
          background: '#dcfce7', 
          color: '#166534', 
          padding: '10px 14px', 
          borderRadius: '6px', 
          marginBottom: '12px',
          fontSize: '0.9rem'
        }}>
          {successMessage}
        </div>
      )}
      
      <div style={{ marginBottom: '12px' }}>
        <label style={{ 
          display: 'block', 
          marginBottom: '4px', 
          fontWeight: '500',
          fontSize: '0.9rem'
        }}>
          Title *
        </label>
        <Input
          name="title"
          placeholder="What's your post about?"
          value={formData.title}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
      </div>
      
      <div style={{ marginBottom: '16px' }}>
        <label style={{ 
          display: 'block', 
          marginBottom: '4px', 
          fontWeight: '500',
          fontSize: '0.9rem'
        }}>
          Content *
        </label>
        <textarea
          name="content"
          placeholder="Share your thoughts..."
          value={formData.content}
          onChange={handleChange}
          rows="5"
          className="input"
          style={{ 
            resize: 'vertical', 
            minHeight: '120px',
            fontFamily: 'inherit'
          }}
          required
          disabled={isSubmitting}
        />
        <p style={{ 
          fontSize: '0.75rem', 
          color: 'var(--secondary)', 
          marginTop: '4px',
          textAlign: 'right'
        }}>
          {formData.content.length}/500 characters
        </p>
      </div>
      
      <div style={{ display: 'flex', gap: '10px' }}>
        <Button 
          type="submit" 
          variant="primary" 
          disabled={!isFormValid || isSubmitting}
          loading={isSubmitting}
        >
          {isSubmitting ? 'Publishing...' : '🚀 Publish Post'}
        </Button>
        
        <Button 
          type="button"
          variant="secondary"
          onClick={() => {
            setFormData({ title: '', content: '' })
            setSuccessMessage('')
          }}
          disabled={isSubmitting}
        >
          Clear
        </Button>
      </div>
    </form>
  )
}

export default CreatePost