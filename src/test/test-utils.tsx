import { FC, ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'
import * as redux from 'react-redux';
import { render as rtlRender } from '@testing-library/react'
import { ICoins } from '../types/ICoin'


interface IPropType {
  children: ReactElement
}

const AllTheProviders: FC<IPropType> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>
}

const render = (
  ui: ReactElement,
  data: { coins: ICoins[] } | [] = []
) => {
  const spyOnUseSelector = jest.spyOn(redux, 'useSelector').mockReturnValue(data);
  const spyOnUseDispatch = jest.spyOn(redux, 'useDispatch').mockReturnValue(jest.fn())
  return {
    ...rtlRender(ui, { wrapper: AllTheProviders }), spyOnUseSelector, spyOnUseDispatch
  }
}

export * from '@testing-library/react'
export { render }
