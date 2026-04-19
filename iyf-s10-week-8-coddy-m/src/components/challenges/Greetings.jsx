function Greeting({ name = 'Guest', timeOfDay = 'morning' }) {
  const getMessage = () => {
    switch(timeOfDay.toLowerCase()) {
      case 'morning': return 'Good morning';
      case 'afternoon': return 'Good afternoon';
      case 'evening': return 'Good evening';
      default: return 'Hello';
    }
  }

  return (
    <div className="card">
      <h2>👋 {getMessage()}, {name}!</h2>
      <p style={{ color: 'var(--secondary)', marginTop: '8px' }}>
        Welcome to CommunityHub.
      </p>
    </div>
  )
}

export default Greeting