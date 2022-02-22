import { NavLink } from 'react-router-dom'

const Link = ({ children, to }: any) => {
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
