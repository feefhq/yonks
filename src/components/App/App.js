import Button from '../Button'
import React from 'react'

/**
 * The main app.
 */
const App = props => {
  const [active, setActive] = React.useState(false)
  const buttonLabel = active ? 'Stop' : 'Start'

  const handleClick = () => {
    setActive(!active)
  }

  return <Button label={buttonLabel} onClick={handleClick} />
}

export default App
