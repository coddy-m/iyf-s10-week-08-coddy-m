function Header() {
  return (
    <header className="card" style={{ borderRadius: 0, marginBottom: 0 }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '12px 20px',
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}>
        <h1 style={{ fontSize: '1.5rem', color: 'var(--primary)' }}>CommunityHub</h1>
        <nav>
          <a href="#" style={{ marginRight: '16px', textDecoration: 'none', color: 'var(--dark)' }}>Home</a>
          <a href="#" style={{ marginRight: '16px', textDecoration: 'none', color: 'var(--dark)' }}>Posts</a>
          <a href="#" style={{ textDecoration: 'none', color: 'var(--dark)' }}>About</a>
        </nav>
        <button className="btn btn-primary btn-small">Login</button>
      </div>
    </header>
  )
}

export default Header