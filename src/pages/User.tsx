import { useSelector } from 'react-redux'
import {
  Alert,
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material'

import { fetchUsers } from 'store/services/fetchUsers'
import { RootState } from 'store/store'

const User = () => {
  const { user } = useSelector((state: RootState) => state.user)

  const handlerUsers = () => {
    fetchUsers()
      .then((res) => console.log(res?.data))
      .catch((e) => console.log(e))
  }

  return (
    <Container maxWidth="sm">
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        My account
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary={`Name: ${user.firstName}  ${user.lastName}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`email: ${user.email}`} />
        </ListItem>
        {!user.isActivated && (
          <Alert severity="error">
            You need to activate your account using the link sent to your email
          </Alert>
        )}
      </List>
      <Button variant="outlined" onClick={handlerUsers}>
        get all users in console
      </Button>
    </Container>
  )
}

export default User
