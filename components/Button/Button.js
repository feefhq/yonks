import styles from './Button.module.css'

/**
 * A simple HTML button, with customised styling.
 */
const Button = ({ children, color, onClick, ...rest }) => {
  const styleClassNames = [styles.root, styles[color]].join(' ')

  return (
    <button className={styleClassNames} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}

export default Button
