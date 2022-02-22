import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import coinsReducer from './reducers/CoinsReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(
  coinsReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
)
