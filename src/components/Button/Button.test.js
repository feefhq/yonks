/* eslint-env jest */
import { render } from '@testing-library/react'
import Button from './Button'

describe('<Button />', () => {
  it('should render an element', () => {
    render(<Button />)
  })
})
