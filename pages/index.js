import { Timer } from 'components/Timer'
import styles from './index.module.css'

function HomePage () {
  const stateStyles = [styles.root].join(' ')

  return (
    <div className={stateStyles}>
      <Timer />
    </div>
  )
}

export default HomePage
