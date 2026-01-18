function Chip({ label, active = false, size = 'md', onClick, title }) {
  const classes = ['chip']
  if (size === 'sm') classes.push('chip-sm')
  if (active) classes.push('active')

  return (
    <button
      type="button"
      className={classes.join(' ')}
      onClick={onClick}
      title={title || label}
    >
      {label}
    </button>
  )
}

export default Chip
