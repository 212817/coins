import TableCoins from './TableCoins'
import { render, screen } from '../../test/test-utils'

const mockState = {
  coins: [
    {
      id: 'BTC',
      name: 'BTC',
      currentPrice: 37359.0,
      currentPriceDispl: '€ 37,359.0',
      openPrice: 37250.3,
      openPriceDispl: '€ 37,250.3',
      tosymbol: 'EUR',
      tosymbolDispl: '€',
    },
    {
      id: 'ETH',
      name: 'ETH',
      currentPrice: 2549.04,
      currentPriceDispl: '€ 2,549.04',
      openPrice: 2574.93,
      openPriceDispl: '€ 2,574.93',
      tosymbol: 'EUR',
      tosymbolDispl: '€',
    },
  ],
}

const emptyState = { coins: [] }

describe('Table Coins', () => {

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('render table with {coins: []}', () => {
    render(<TableCoins />, emptyState)
    expect(screen.getByRole('grid')).toBeInTheDocument()
    expect(screen.getByText('No rows')).toBeInTheDocument()
    expect(screen.getByText('Opening price')).toBeInTheDocument()
  })
  it('render table with data', () => {
    render(<TableCoins />, mockState)
    expect(screen.getByRole('grid')).toBeInTheDocument()
    expect(screen.getByText('BTC')).toBeInTheDocument()
    expect(screen.getByText('€ 37,359.0')).toBeInTheDocument()
    expect(screen.getByText('€ 37,250.3')).toBeInTheDocument()
    expect(screen.getByText('0.003% (€ 108.7)')).toBeInTheDocument()
  })
})
