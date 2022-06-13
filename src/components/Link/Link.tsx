import { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
interface IPropType {
  children: ReactNode
  to: string
}

const Link: FC<IPropType> = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      style={{
        marginLeft: '1rem',
        alignSelf: 'center',
      }}
    >
      {children}
    </NavLink>
  )
}

export default Link
