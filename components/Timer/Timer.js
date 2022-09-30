import { useEffect, useRef, useState } from 'react'

const DEFAULT_DURATION = 10 * 1000 * 60

/**
 * @param {object} props Component properties
 * @param {number} props.duration How long the timer will last
 */
const Timer = ({ duration = DEFAULT_DURATION }) => {
  /** @type {React.MutableRefObject<Worker>} */
  const workerRef = useRef()

  /** @type {[number, function] */
  const [elapsed, setElapsed] = useState(0)

  const [remaining, setRemaining] = useState(performance.now() + duration)

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
    setRemaining(duration - elapsed)
  }, [elapsed])

  return (
    <>
      {Math.floor((remaining / 1000 / 60) % 60)
        .toString()
        .padStart(2, 0)}
      :
      {Math.ceil((remaining / 1000) % 60)
        .toString()
        .padStart(2, 0)}
    </>
  )
}

export default Timer
