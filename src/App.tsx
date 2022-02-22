import { Provider } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { store } from '../src/store/store'
import Layout from './components/Layout'
import Home from './pages/Home'
import Login from 'pages/Login'
import NotFound from './pages/NotFound'
import PrivatRouter from 'components/PrivatRouter/PrivatRouter'
import ForgotPassword from 'pages/ForgotPassword'
import Registration from 'pages/Registration'

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
          <Route path="*" element={<NotFound />} />
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="registration" element={<Registration />} />
        </Route>
      </Routes>
    </Provider>
  )
}

export default App
