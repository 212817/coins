import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

/* Creating a new instance of axios with the baseURL and withCredentials set to true. */
const $api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
})

/* This is adding the token to the header of the request. */
$api.interceptors.request.use((config) => {
  if (config.headers)
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
  return config
})

/* This is the code that is intercepting the response and checking if the response is a 401. If it is a
401, it will make a request to the refresh endpoint and then retry the original request. */
$api.interceptors.response.use(
  (config) => {
    return config
  },
  async (error) => {
    const originalRequest = error.config
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true
      try {
        const response = await axios.get(`${API_URL}/refresh`, {
          withCredentials: true,
        })
        localStorage.setItem('token', response.data.accessToken)
        return $api.request(originalRequest)
      } catch (e) {
        console.log('NOT AUTHORIZED')
      }
    }
    throw error
  }
)

export default $api
