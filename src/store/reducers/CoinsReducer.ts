import { AnyAction } from 'redux'
import { actionTypesCoins } from 'store/actions/actionTypes.actions'
import { ICoins, ICoinsState } from '../../types/ICoin'

const initialState: ICoinsState = {
  coins: [] as ICoins[],
  isLoading: false,
  error: '',
}

const coinsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case actionTypesCoins.COINS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: '',
      }
    case actionTypesCoins.COINS_SUCCESS:
      return {
        ...state,
        coins: action.payload,
        isLoading: false,
      }
    case actionTypesCoins.COINS_ERROR:
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
