import { AnyAction } from 'redux'
import { actionTypesUsers } from 'store/actions/actionTypes.actions'
import { IUser, IUserState } from 'types/IUser'

const initialState: IUserState = {
  user: {} as IUser,
  isAuth: false,
  error: '',
}

const userReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case actionTypesUsers.USER_REQUEST:
      return {
        ...state,
        isAuth: false,
        error: '',
      }
    case actionTypesUsers.USER_LOGIN:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      }
    case actionTypesUsers.USER_LOGOUT:
      return {
        ...state,
        user: {},
        isAuth: false,
      }
    case actionTypesUsers.USER_ERROR:
      return {
        ...state,
        error: action.payload,
        isAuth: false,
      }
    default:
      return state
  }
}

export default userReducer
