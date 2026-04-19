import { useState } from 'react'
import UserCard from './UserCard'
import Button from '../shared/Button'
import Input from '../shared/Input'

function UserProfile() {
  const [user, setUser] = useState({ name: '', email: '', bio: '' })
  const [isEditing, setIsEditing] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsEditing(false)
  }

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3>👤 Your Profile</h3>
        <Button 
          variant={isEditing ? 'secondary' : 'primary'} 
          size="small"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? 'Cancel' : 'Edit'}
        </Button>
      </div>

      {isEditing ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Input name="name" placeholder="Your name" value={user.name} onChange={handleChange} />
          <Input name="email" type="email" placeholder="your@email.com" value={user.email} onChange={handleChange} />
          <textarea 
            name="bio" 
            placeholder="Tell us about yourself..." 
            value={user.bio} 
            onChange={handleChange}
            className="input"
            rows="3"
            style={{ resize: 'vertical' }}
          />
          <Button type="submit" variant="primary">Save Changes</Button>
        </form>
      ) : (
        <>
          <UserCard user={user} />
          {user.bio && <p style={{ marginTop: '12px', color: 'var(--secondary)' }}>{user.bio}</p>}
          {!user.name && <p style={{ color: 'var(--secondary)', fontStyle: 'italic' }}>Complete your profile to get started!</p>}
        </>
      )}
    </div>
  )
}

export default UserProfile