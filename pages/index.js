import { Timer } from 'components/Timer'
import { useState } from 'react'
import styles from './index.module.css'

function HomePage () {
  const [timer, setTimer] = useState(false)

  const stateStyles = [timer ? styles.active : styles.inactive].join(' ')

  return (
    <div className={stateStyles}>
      <button onClick={() => setTimer(!timer)}>
        {timer ? 'Stop' : 'Start'}
      </button>
      {timer && <Timer />}
    </div>
  )
}

export default HomePage
