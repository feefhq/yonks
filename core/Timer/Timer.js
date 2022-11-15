class Timer extends EventTarget {
  #delay = 100
  #elapsed = 0
  #interval
  #onUpdate
  #startTime

  constructor (props = { onUpdate: () => {} }) {
    super()
    this.#onUpdate = props?.onUpdate
    this.update = this.update.bind(this)
  }

  get detail () {
    return {
      elapsed: this.#elapsed
    }
  }

  start () {
    this.#startTime = performance.now() - this.#elapsed
    this.#interval = setInterval(this.update, this.#delay)
    const newEvent = new CustomEvent('start', { detail: this.detail })
    this.dispatchEvent(newEvent)
  }

  update () {
    this.#elapsed = performance.now() - this.#startTime
    this.#onUpdate(this.#elapsed)
    this.dispatchEvent(new CustomEvent('update', { detail: this.detail }))
  }

  pause () {
    clearInterval(this.#interval)
    this.#interval = null
  }
}

export default Timer
