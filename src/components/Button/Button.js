import styles from './Button.module.css'

/**
 * A simple button.
 *
 * @param {Object} props
 * @param {string} props.label
 * @param {function()} props.onClick
 */
const Button = props => {
  const { label, onClick } = props
  return (
    <button className={styles.root} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button
