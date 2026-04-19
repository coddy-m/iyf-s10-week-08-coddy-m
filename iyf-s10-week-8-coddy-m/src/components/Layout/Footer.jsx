function Footer() {
  return (
    <footer className="card" style={{ borderRadius: 0, marginTop: 'auto', textAlign: 'center', padding: '20px' }}>
      <p style={{ color: 'var(--secondary)', fontSize: '0.875rem' }}>
        &copy; {new Date().getFullYear()} CommunityHub. All rights reserved.
      </p>
      <div style={{ marginTop: '8px', display: 'flex', gap: '16px', justifyContent: 'center' }}>
        <a href="#" style={{ color: 'var(--secondary)', textDecoration: 'none', fontSize: '0.875rem' }}>Privacy</a>
        <a href="#" style={{ color: 'var(--secondary)', textDecoration: 'none', fontSize: '0.875rem' }}>Terms</a>
        <a href="#" style={{ color: 'var(--secondary)', textDecoration: 'none', fontSize: '0.875rem' }}>Contact</a>
      </div>
    </footer>
  )
}

export default Footer