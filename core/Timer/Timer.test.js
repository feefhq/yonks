/* eslint-env jest */

const { default: Timer } = require('./Timer')

describe('Timer', () => {
  let timer = null

  beforeEach(() => {
    timer = new Timer()
  })

  it('should return an instance', () => {
    expect(timer).toBeTruthy()
  })

  describe('start()', () => {
    /**
     * Difficult to assert that the listener is called with the appropriate
     * arguments and detail, because JSDOM appears to be only giving
     * `{ isTrusted: false }` as an arg.
     */
    it('should dispatch event', () => {
      const listener = jest.fn()
      timer.addEventListener('start', listener)
      timer.start()
      expect(listener).toBeCalledTimes(1)
      timer.start()
      expect(listener).toBeCalledTimes(2)
    })
  })

  xdescribe('update()', () => {
    it('should dispatch event', () => {
      const listener = jest.fn()
      timer.addEventListener('update', listener)
      timer.update()
      expect(listener).toBeCalledTimes(1)
      timer.update()
      expect(listener).toBeCalledTimes(2)
    })
  })
})
