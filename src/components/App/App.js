import React from 'react'
import Button from '../Button'
import Clock from '../Clock'

/**
 * The main app.
 */
const App = props => {
  const [active, setActive] = React.useState(false)
  const [delta, setDelta] = React.useState(25 * 60 * 1000)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDelta(delta - 100)
    }, 100)

    if (!active) clearInterval(interval)

    return () => clearInterval(interval)
  }, [active, delta])

  const handleClick = () => {
    setActive(!active)
  }

  const buttonLabel = active ? 'Stop' : 'Start'

  return (
    <>
      <Clock delta={delta} />
      <Button label={buttonLabel} onClick={handleClick} />
    </>
  )
}

export default App
