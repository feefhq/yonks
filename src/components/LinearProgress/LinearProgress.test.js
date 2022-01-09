/* eslint-env jest */
import { render } from '@testing-library/react'
import LinearProgress from './LinearProgress'

describe('<LinearProgress />', () => {
  it('should render an element', () => {
    render(<LinearProgress />)
  })

  it('should default to 0%', () => {
    const { getByTitle } = render(<LinearProgress />)
    expect(getByTitle('0%')).toBeInTheDocument()
  })

  it('should be 5%', () => {
    const { getByTitle } = render(<LinearProgress progress={50} />)
    expect(getByTitle('50%')).toBeInTheDocument()
  })

  it('should be 100%', () => {
    const { getByTitle } = render(<LinearProgress progress={100} />)
    expect(getByTitle('100%')).toBeInTheDocument()
  })
})
