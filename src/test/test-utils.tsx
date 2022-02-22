import { FC, ReactElement } from 'react'
import { render } from '@testing-library/react'
import { HashRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ICoins } from '../types/ICoin'

const AllTheProviders: FC = ({ children }: any) => {
  return <HashRouter>{children}</HashRouter>
}

const customRender = (
  ui: ReactElement,
  data: { coins: ICoins[] } | [] = []
) => {
  const select = (useSelector as jest.Mock).mockImplementation((selectorFn: any) =>
    selectorFn(data)
  )
  const dispatch = (useDispatch as jest.Mock).mockReturnValue(jest.fn())
  return { ...render(ui, { wrapper: AllTheProviders }), select, dispatch }
}

export * from '@testing-library/react'
export { customRender as render }
