/* eslint-env jest */
import TimerWorker from './TimerWorker'

describe('TimerWorrker', () => {
  it('should be a function', () => {
    TimerWorker()
  })

  it('should return the period', () => {
    const period = 1000
    expect(TimerWorker(period)).toBe(period)
  })
})
