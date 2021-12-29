/* eslint-env jest */
import { render } from '@testing-library/react'
import Clock from './Clock'

describe('<Clock />', () => {
  it('should render an element', () => {
    render(<Clock />)
  })

  describe('delta', () => {
    it('should display zero time', () => {
      const { getByText } = render(<Clock />)
      expect(getByText(/00:00/)).toBeInTheDocument()
    })

    it('should display single minutes and seconds', () => {
      const { getByText } = render(<Clock delta={(2 * 60 + 3) * 1000} />)
      expect(getByText(/02:03/)).toBeInTheDocument()
    })

    it('should display double minutes and seconds', () => {
      const { getByText } = render(<Clock delta={(12 * 60 + 13) * 1000} />)
      expect(getByText(/12:13/)).toBeInTheDocument()
    })
  })
})
