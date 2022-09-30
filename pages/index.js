import { Timer } from 'components/Timer'
import { useState } from 'react'

function HomePage () {
  const [timer, setTimer] = useState(false)

  return (
    <>
      <h1>Yonks</h1>
      {timer && <Timer />}
      <button onClick={() => setTimer(!timer)}>
        {timer ? 'Stop' : 'Start'}
      </button>
    </>
  )
}

export default HomePage
