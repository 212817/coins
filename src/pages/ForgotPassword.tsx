import { Controller, useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Box, Button, Container, Paper } from '@mui/material'

import Link from 'components/Link/Link'
import TextField from 'components/TextField/TextField'
interface IFormInput {
  email: string
}

const defaultValues = { email: '' }

const schema = yup
  .object({
    email: yup
      .string()
      .email('Entered value does not match email format')
      .required('Please enter email'),
  })
  .required()

const ForgotPassword = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ defaultValues, resolver: yupResolver(schema) })

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data)
  }

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ mt: 2, p: 2 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Can't login?</h1>
          <p>
            Enter your email address and we will send you a link to restore
            access to your account.
          </p>
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
          <Box sx={{ mt: 2, display: 'flex' }}>
            <Button type="submit" variant="contained">
              get login link
            </Button>
            <Link to="/registration">Registration</Link>
            <Link to="/login">Log in?</Link>
          </Box>
        </form>
      </Paper>
    </Container>
  )
}

export default ForgotPassword
