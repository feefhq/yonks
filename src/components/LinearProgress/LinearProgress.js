import styles from './LinearProgress.module.css'

/**
 * A linear progress bar.
 *
 * @param {Object} props
 * @param {number} props.progress
 */
const LinearProgress = props => {
  const { progress = 0 } = props
  const title = `${progress}%`

  return (
    <div className={styles.root} title={title}>
      <div className={styles.progress} style={{ width: title }} />
    </div>
  )
}

export default LinearProgress
