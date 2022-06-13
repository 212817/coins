import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY

/* Creating a new instance of axios with a custom config. */
export default axios.create({
  baseURL: `https://min-api.cryptocompare.com/data/`,
  headers: { 'Content-Type': 'application/json', authorization: `${API_KEY}` },
})
