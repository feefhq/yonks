const { Timer } = require('core/Timer')

const onUpdate = event => {
  self.postMessage(event.detail.elapsed)
}

const timer = new Timer()
timer.addEventListener('update', onUpdate)

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
