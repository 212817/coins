import { Dispatch } from 'redux'

import {
  checkAuthService,
  loginService,
  logoutService,
  regService,
} from 'store/services/authService'
import { IUserState } from 'types/IUser'
import { actionTypesUsers } from './actionTypes.actions'

export const login =
  (email: string, password: string, callback: () => void) =>
  (dispatch: Dispatch) => {
    dispatch(getUserRequest())
    loginService(email, password)
      .then((res) => {
        dispatch(getUserSuccess(res.data.user))
        localStorage.setItem('token', res.data.accessToken)
        callback()
      })
      .catch((err) => dispatch(getUserError(err?.message)))
  }

export const checkAuth = (callback: () => void) => (dispatch: Dispatch) => {
  checkAuthService()
    .then((res) => {
      dispatch(getUserSuccess(res.data.user))
      localStorage.setItem('token', res.data.accessToken)
      callback()
    })
    .catch((e) => {
      localStorage.removeItem('token')
      console.log(`erorre ${e.response?.data?.message}`)
      callback()
    })
}

export const registration =
  (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    callback: () => void
  ) =>
  (dispatch: Dispatch) => {
    dispatch(getUserRequest())
    regService(firstName, lastName, email, password)
      .then((res) => {
        dispatch(getUserSuccess(res.data.user))
        localStorage.setItem('token', res.data.accessToken)
        callback()
      })
      .catch((err) => {
        if (err.response) {
          dispatch(getUserError(err.response.data.message))
        } else if (err.request) {
          dispatch(getUserError(err.request.data.message))
        } else {
          dispatch(getUserError(err?.message))
        }
      })
  }

export const logout = () => (dispatch: Dispatch) => {
  logoutService()
    .then(() => {
      localStorage.removeItem('token')
      dispatch(getUserLogout())
    })
    .catch((err) => dispatch(getUserError(err?.message)))
}

export const getUserRequest = () => {
  return {
    type: actionTypesUsers.USER_REQUEST,
  }
}

export const getUserSuccess = (data: IUserState) => {
  return {
    type: actionTypesUsers.USER_LOGIN,
    payload: data,
  }
}

export const getUserLogout = () => {
  return {
    type: actionTypesUsers.USER_LOGOUT,
  }
}

export const getUserError = (data: string) => {
  return {
    type: actionTypesUsers.USER_ERROR,
    payload: data,
  }
}
