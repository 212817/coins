import userEvent from '@testing-library/user-event'
import FilterBar from './FilterBar'
import { render, screen, fireEvent } from '../../test/test-utils'

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(() => {}),
  useSelector: jest.fn(),
}))

describe('Select in FilterBar', () => {
  it('render select with default value', () => {
    render(<FilterBar />)
    const Element = screen.getByTestId('SelectCurrent')
    expect(Element).toBeInTheDocument()
    expect(Element).toHaveTextContent('USD')
  })
  it('Select change value', () => {
    render(<FilterBar />)
    const Element = screen.getByTestId('SelectCurrent')
    expect(Element).toHaveTextContent('USD')

    fireEvent.change(screen.getByTestId('optionCurrent'), {
      target: {
        value: 'EUR',
      },
    })
    expect(Element).toHaveTextContent('EUR')
  })
})

describe('Input in FilterBar', () => {
  it('render input with default value', () => {
    render(<FilterBar />)
    const Element = screen.getByTestId('InputCoins')
    expect(Element).toBeInTheDocument()
    expect(Element).toHaveTextContent('BTC,ETH,LUNA')
  })
  it('input change value', () => {
    render(<FilterBar />)
    const Element = screen.getByTestId('InputCoins')
    userEvent.type(Element, 'LUN')
    expect(Element).toHaveTextContent('LUN')
  })
})
