function Card({ children, title, variant = 'default', className = '' }) {
  const variantClass = variant !== 'default' ? `card-${variant}` : ''
  const fullClass = `card ${variantClass} ${className}`.trim()

  return (
    <div className={fullClass}>
      {title && <h3 className="card-title" style={{ marginBottom: '12px' }}>{title}</h3>}
      <div className="card-body">
        {children}
      </div>
    </div>
  )
}

export default Card