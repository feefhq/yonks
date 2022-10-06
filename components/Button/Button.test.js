/* eslint-env jest */
import { render } from '@testing-library/react'
import Button from './Button'

describe('<Button />', () => {
  it('should render an element', () => {
    const children = 'Test button'
    const { getByText } = render(<Button>{children}</Button>)
    expect(getByText(children)).toBeTruthy()
  })

  it('should pass additional props', () => {
    const title = 'Test title'
    const { getByTitle } = render(<Button title={title} />)
    expect(getByTitle(title)).toBeTruthy()
  })
})
