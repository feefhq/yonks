class Timer {
  #elapsed = 0
  #elapsedPercentage = 0
  #interval
  #onUpdate
  #startTime

  constructor (props) {
    this.onUpdate = props?.onUpdate
  }

  start () {
    this.#startTime = performance.now() - this.#elapsed

    this.interval = setInterval(() => {
      this.#elapsed = performance.now() - this.#startTime
      this.onUpdate(this.#elapsed)
    }, 100)
  }

  pause () {
    clearInterval(this.interval)
  }
}

export default Timer
