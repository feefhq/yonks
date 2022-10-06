/* eslint-env jest */

const { default: Timer } = require('./Timer')

describe('Timer', () => {
  it('should return an instance', () => {
    const timer = new Timer()
    expect(timer).toBeTruthy()
  })
})
