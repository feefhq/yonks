import { Button } from 'components/Button'
import { useEffect, useRef, useState } from 'react'

import styles from './Timer.module.css'

const DEFAULT_DURATION = 25 * 1000 * 60

/**
 * @param {object} props Component properties
 * @param {number} props.duration How long the timer will last
 */
const Timer = ({ duration = DEFAULT_DURATION, onStart = () => {} }) => {
  /** @type {React.MutableRefObject<Worker>} */
  const workerRef = useRef()

  /** @type {[number, function] */
  const [elapsed, setElapsed] = useState(0)
  const [active, setActive] = useState(false)

  const [remainderSeconds, setRemainderSeconds] = useState(0)
  const [remainderMinutes, setRemainderMinutes] = useState(0)

  useEffect(() => {
    if (!window.Worker) return
    /* eslint-disable no-undef */
    const worker = new Worker(new URL('/workers/TimerWorker', import.meta.url))
    /* eslint-enable no-undef */
    workerRef.current = worker
    worker.onmessage = event => {
      setElapsed(event.data)
    }
    return () => {
      workerRef.current.terminate()
    }
  }, [workerRef])

  useEffect(() => {
    const remainingSeconds = Math.ceil((duration - elapsed) / 1000)
    setRemainderSeconds(remainingSeconds % 60)
    setRemainderMinutes(Math.floor(remainingSeconds / 60) % 60)
  }, [elapsed])

  const handleActive = () => {
    workerRef.current.postMessage({ action: active ? 'pause' : 'start' })
    setActive(!active)
  }

  const className = [styles.root, active ? styles.active : styles.pause].join(
    ' '
  )

  return (
    <div className={className}>
      <time>
        {remainderMinutes.toString()}:
        {remainderSeconds.toString().padStart(2, 0)}
      </time>
      <Button name='Buttony' onClick={handleActive}>
        {active ? 'Pause' : 'Start'}
      </Button>
    </div>
  )
}

export default Timer
