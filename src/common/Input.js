import React from 'react'

export default ({
  label,
  value,
  onChange,
  placeholder,
  icon,
  type = 'text',
  error
}) => (
  <div className="field">
    <label className="label">{label}</label>
    <div
      className={`control ${icon ? 'has-icons-left' : ''} ${
        error ? 'has-icons-right' : ''
      }`}
    >
      <input
        className={error ? 'input is-danger' : 'input'}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={
          evt => onChange(evt.target.value)
          //setField('email', evt.target.value)
        }
      />
      {error && (
        <span className="icon is-small is-right">
          <i className="fas fa-exclamation-triangle" />
        </span>
      )}
      {icon && (
        <span className="icon is-small is-left">
          <i className={`fas fa-${icon}`} />
        </span>
      )}
    </div>
    {error && <p className="help is-danger">{error}</p>}
  </div>
)
