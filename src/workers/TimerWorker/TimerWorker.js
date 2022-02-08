self.onmessage = message => {
  switch (message.data.event) {
    case 'start':
      handleStart()
      break
    default:
      break
  }
}

function handleStart () {
  self.postMessage({
    event: 'started'
  })
}

/**
 *
 * @param {number} period
 */
const TimerWorker = period => {
  setTimeout(() => {}, 1000)
  return period
}

export default TimerWorker
