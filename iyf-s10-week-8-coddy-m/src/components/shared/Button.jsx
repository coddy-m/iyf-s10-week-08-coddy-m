function Button({ 
  children, 
  text, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false,
  loading = false,
  type = 'button',
  className = ''
}) {
  const baseClass = `btn btn-${variant} btn-${size}`
  const fullClass = `${baseClass} ${className}`.trim()

  return (
    <button 
      type={type}
      className={fullClass}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? '⏳ Loading...' : (children || text)}
    </button>
  )
}

export default Button