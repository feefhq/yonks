import React from 'react'
import Button from '../Button'
import Clock from '../Clock'
import LinearProgress from '../LinearProgress'
import styles from './App.module.css'

/**
 * The main app.
 */
const App = props => {
  const period = 25 * 60 * 1000
  const [active, setActive] = React.useState(false)
  const [delta, setDelta] = React.useState(period)
  const [progress, setProgress] = React.useState(100)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDelta(delta - 100)
      setProgress((100 / period) * delta)
    }, 100)

    if (!active) clearInterval(interval)

    return () => clearInterval(interval)
  }, [active, delta, period])

  const handleClick = () => {
    setActive(!active)
  }

  const buttonLabel = active ? 'Stop' : 'Start'

  return (
    <div className={styles.root}>
      <LinearProgress progress={progress} />
      <Clock delta={delta} />
      <Button label={buttonLabel} onClick={handleClick} />
    </div>
  )
}

export default App
