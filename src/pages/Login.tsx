import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Button, Container, Paper } from '@mui/material'
import { Box } from '@mui/system'

import TextField from 'components/TextField/TextField'
import Link from '../components/Link/Link'
import { login } from 'store/actions/userActions'

interface IFormInput {
  email: string
  password: string
}

const defaultValues = { email: '', password: '' }

const schema = yup
  .object({
    email: yup
      .string()
      .email('Entered value does not match email format')
      .required('Please enter email'),
    password: yup
      .string()
      .required('Please enter password')
      .min(3, 'Length must be greater than 3 characters')
      .max(32, 'Length must be less than 32 characters'),
  })
  .required()

type ILocationState = {
  from: {
    pathname: string
  }
}

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ defaultValues, resolver: yupResolver(schema) })

  const fromPage = (location.state as ILocationState)?.from?.pathname || '/'

  const onSubmit: SubmitHandler<IFormInput> = ({ email, password }) => {
    dispatch(login(email, password, () => navigate(fromPage)))
  }

  if (localStorage.getItem('token')) {
    return (
      <Container maxWidth="sm">
        <div> ... loading </div>
      </Container>
    )
  }

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ mt: 2, p: 2 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Log in to your account</h1>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                ref={null}
                error={errors.email ? true : false}
                helperText={errors?.email?.message}
                fullWidth
                label="Enter your email"
                sx={{ mt: 2 }}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                ref={null}
                error={errors.password ? true : false}
                helperText={errors?.password?.message}
                fullWidth
                label="Enter your password"
                type="password"
                sx={{ mt: 2 }}
              />
            )}
          />
          <Box sx={{ mt: 2, display: 'flex' }}>
            <Button type="submit" variant="contained">
              Log in
            </Button>
            <Link to="/forgot-password">Forgot password?</Link>
            <Link to="/registration">Registration</Link>
          </Box>
        </form>
      </Paper>
    </Container>
  )
}

export default Login
