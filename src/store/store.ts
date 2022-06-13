import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'

import coinsReducer from './reducers/CoinsReducer'
import userReducer from './reducers/UserReducer'

export const rootReducer = combineReducers({ user: userReducer, coins: coinsReducer })
let middleware = [ReduxThunk]

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)


export type RootState = ReturnType<typeof store.getState>
export type Reducer = typeof rootReducer;
export type State = ReturnType<Reducer>;
export type Store = typeof store;
