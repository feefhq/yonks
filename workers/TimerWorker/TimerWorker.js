const startTime = performance.now()

/* eslint-disable no-undef */
setInterval(() => self.postMessage(performance.now() - startTime), 1000)
/* eslint-enable no-undef */
