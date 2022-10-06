const { Timer } = require('core/Timer')

const onUpdate = elapsed => {
  self.postMessage(elapsed)
}

const timer = new Timer({ onUpdate })

self.onmessage = ({ data }) => {
  switch (data.action) {
    case 'start':
      timer.start()
      break
    case 'pause':
      timer.pause()
      break
    default:
      break
  }
}
