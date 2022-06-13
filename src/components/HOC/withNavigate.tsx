import { useLocation, useNavigate } from 'react-router-dom'

export type Props = {
  navigate: (to: string) => void
  pathname: string
}

/**
 * It takes a component as an argument and returns a new component that has the `navigate` and
 * `pathname` props
 * @param Wrapper - React.ComponentType<P & Props>
 * @returns A function that takes a component and returns a component.
 */
function WithNavigate<P>(Wrapper: React.ComponentType<P & Props>) {
  return function N(props: P) {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    return <Wrapper {...props} navigate={navigate} pathname={pathname} />
  }
}

export default WithNavigate
