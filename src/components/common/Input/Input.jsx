import { useState } from 'react';
import './Input.css';

export default function Input({
  label,
  type = 'text',
  name,
  value,
  onChange,
  onBlur,
  onFocus,
  placeholder,
  disabled = false,
  required = false,
  error,
  helperText,
  icon,
  className = '',
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const inputClasses = [
    'input-wrapper',
    isFocused && 'input-focused',
    error && 'input-error',
    disabled && 'input-disabled',
    icon && 'input-with-icon',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="input-container">
      {label && (
        <label htmlFor={name} className="input-label">
          {label}
          {required && <span className="input-required">*</span>}
        </label>
      )}
      
      <div className={inputClasses}>
        {icon && <span className="input-icon">{icon}</span>}
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className="input-field"
          {...props}
        />
      </div>
      
      {(error || helperText) && (
        <div className={error ? 'input-error-text' : 'input-helper-text'}>
          {error || helperText}
        </div>
      )}
    </div>
  );
}
