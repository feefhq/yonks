/* eslint-env jest */
import { fireEvent, render } from '@testing-library/react'
import App from './App'

describe('<App />', () => {
  it('should render an element', () => {
    render(<App />)
  })

  describe('stop / start', () => {
    it('should change the button label', () => {
      const { queryByText, getByText } = render(<App />)
      expect(getByText(/start/i)).toBeInTheDocument()

      fireEvent.click(getByText(/start/i))
      expect(queryByText(/start/i)).toBeNull()
      expect(getByText(/stop/i)).toBeInTheDocument()

      fireEvent.click(getByText(/stop/i))
      expect(queryByText(/stop/i)).toBeNull()
      expect(getByText(/start/i)).toBeInTheDocument()
    })
  })
})
