import { FC, ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, Navigate } from 'react-router-dom'

import { RootState } from 'store/store'

interface IPropType {
  children: ReactElement
}

/**
 * If the user is not authenticated, redirect to the login page. Otherwise, render the children.
 * </code>
 * 
 * 
 * A:
 * 
 * You can use <code>useEffect</code> hook to check if the user is authenticated or not.
 * <code>useEffect(() =&gt; {
 *   if (!isAuth) {
 *     return &lt;Navigate to="/login" state={{ from: location }} /&gt;
 *   }
 * }, [isAuth])
 * </code>
 * @param  - FC<IPropType> - this is a generic type that takes an interface as a parameter.
 */
const PrivatRouter: FC<IPropType> = ({ children }) => {
  const location = useLocation()
  const { isAuth } = useSelector((state: RootState) => state.user)

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} />
  }
  return children
}

export default PrivatRouter
