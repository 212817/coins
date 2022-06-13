import React, { memo, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import {
  AppBar,
  Container,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import { AccountCircle } from '@mui/icons-material'

import { RootState } from 'store/store'
import { checkAuth, logout } from 'store/actions/userActions'
import WithNavigate, { Props } from 'components/HOC/withNavigate'

const Layout = ({ navigate, pathname }: Props) => {
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = useState(null)
  const { isAuth } = useSelector((state: RootState) => state.user)

  const handleMenu = useCallback((event: React.BaseSyntheticEvent) => {
    setAnchorEl(event.currentTarget)
  }, [])

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    dispatch(logout())
    setAnchorEl(null)
  }

  const handleUser = () => {
    setAnchorEl(null)
    navigate('/user')
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth(() => navigate(pathname)))
    }
  }, [])
  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      <header>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton size="large" edge="start" color="inherit">
                <Link
                  to={`/`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <AttachMoneyIcon />
                </Link>
              </IconButton>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                Coins
              </Typography>
              {isAuth && (
                <div>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleUser}>My account</MenuItem>
                    <MenuItem onClick={handleLogout}>Log out</MenuItem>
                  </Menu>
                </div>
              )}
            </Toolbar>
          </AppBar>
        </Box>
      </header>
      <Divider sx={{ height: 10, m: 0.5 }} />
      <main className="container" style={{ paddingBottom: '50px' }}>
        <Outlet />
      </main>
      <footer style={{ bottom: '0px', position: 'absolute' }}>
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="body1" color="inherit">
              © 2022 Coins list
            </Typography>
          </Toolbar>
        </Container>
      </footer>
    </Box>
  )
}

export default WithNavigate(memo(Layout))
