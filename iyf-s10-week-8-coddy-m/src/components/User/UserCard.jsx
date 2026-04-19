function UserCard({ user }) {
  return (
    <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <div style={{
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        background: 'var(--primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1.25rem'
      }}>
        {user.name?.[0]?.toUpperCase() || 'U'}
      </div>
      <div>
        <strong>{user.name || 'Anonymous'}</strong>
        {user.role && <p style={{ color: 'var(--secondary)', fontSize: '0.875rem', margin: 0 }}>{user.role}</p>}
      </div>
    </div>
  )
}

export default UserCard