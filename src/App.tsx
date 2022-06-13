import { lazy, Suspense } from 'react'
import { Provider } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import { store } from '../src/store/store'
import Layout from './components/Layout'
import Home from './pages/Home'
import Login from 'pages/Login'
import PrivatRouter from 'components/PrivatRouter/PrivatRouter'
// import Navigate from 'components/Navigate'
// import User from 'pages/User'
// import NotFound from './pages/NotFound'
// import ForgotPassword from 'pages/ForgotPassword'
// import Registration from 'pages/Registration'

const User = lazy(() => import('./pages/User'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Registration = lazy(() => import('pages/Registration'))
const ForgotPassword = lazy(() => import('pages/ForgotPassword'))

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={
              <PrivatRouter>
                <Home />
              </PrivatRouter>
            }
          />
          <Route
            path="user"
            element={
              <PrivatRouter>
                <Suspense fallback={null}>
                  <User />
                </Suspense>
              </PrivatRouter>
            }
          />
          <Route path="login" element={<Login />} />
          <Route
            path="*"
            element={
              <Suspense fallback={null}>
                <NotFound />
              </Suspense>
            }
          />
          <Route
            path="forgot-password"
            element={
              <Suspense fallback={null}>
                <ForgotPassword />
              </Suspense>
            }
          />
          <Route
            path="registration"
            element={
              <Suspense fallback={null}>
                <Registration />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Provider>
  )
}

export default App
