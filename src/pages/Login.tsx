import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { Button, Container, Paper } from '@mui/material'
import { Box } from '@mui/system'
import TextField from 'components/TextField/TextField'
import Link from '../components/Link/Link'

interface IFormInput {
  password: string
  email: string
}

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data)
  }

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ mt: 2, p: 2 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Log in to your account</h1>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: 'Please enter email',
              pattern: {
                value: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}/,
                message: 'Wrong email',
              },
            }}
            render={({ field }: any) => (
              <TextField
                {...field}
                ref={null}
                error={errors.email ? true : false}
                helperText={errors?.email?.message}
                fullWidth
                label="Enter your email"
                type="email"
                sx={{ mt: 2 }}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: 'Please enter password',
              minLength: {
                value: 3,
                message: 'Length must be greater than 3 characters',
              },
              maxLength: {
                value: 32,
                message: 'Length must be less than 3 characters',
              },
            }}
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
