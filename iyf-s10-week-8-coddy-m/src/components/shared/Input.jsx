function Input({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  name, 
  required = false, 
  disabled = false,
  className = ''
}) {
  return (
    <input 
      type={type} 
      name={name} 
      placeholder={placeholder} 
      value={value} 
      onChange={onChange} 
      required={required} 
      disabled={disabled} 
      className={`input ${className}`.trim()} 
    />
  )
}
export default Input