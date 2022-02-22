import { ICoins } from '../../types/ICoin'
import { IActions } from '../actions'

export interface ICoinsState {
  coins: ICoins[];
  isLoading: boolean;
  error: string;
}

const initialState: ICoinsState = {
  coins: [],
  isLoading: false,
  error: '',
}

const coinsReducer = (state = initialState, action: IActions | any) => {
  switch (action.type) {
    case 'COINS_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: '',
      }
    case 'COINS_SUCCESS':
      return {
        ...state,
        coins: action.payload,
        isLoading: false,
      }
    case 'COINS_ERROR':
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }
    default:
      return state
  }
}

export default coinsReducer
