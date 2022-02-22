import { Link, Outlet } from 'react-router-dom'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import {
  AppBar,
  Container,
  Divider,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'

const Layout = () => {
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

export default Layout
