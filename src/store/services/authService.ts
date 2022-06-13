import axios from 'axios'
import $api from '../../API/apiDB'

const API_URL = process.env.REACT_APP_API_URL

export const regService = (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  return $api.post('/registration', { firstName, lastName, email, password })
}

export const loginService = (email: string, password: string) => {
  return $api.post('/login', { email, password })
}

export const logoutService = () => {
  return $api.post('/logout')
}

export const checkAuthService = () => {
  return axios.get(`${API_URL}/refresh`, {
    withCredentials: true,
  })
}
