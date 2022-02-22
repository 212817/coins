import { useLocation, Navigate } from 'react-router-dom'

const PrivatRouter = ({ children }: any) => {
  const location = useLocation()
  const AUTH = true

  if (!AUTH) {
    return <Navigate to="/login" state={{ from: location }} />
  }
  return children
}

export default PrivatRouter
