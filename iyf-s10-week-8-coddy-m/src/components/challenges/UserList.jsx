import UserCard from '../User/UserCard'

function UserList({ users }) {
  if (!users || users.length === 0) {
    return (
      <div className="card">
        <p style={{ color: 'var(--secondary)', textAlign: 'center' }}>
          No users to display. 👻
        </p>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )
}

export default UserList