import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  Alert,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Paper,
} from '@mui/material'
import { Box } from '@mui/system'

import { RootState } from 'store/store'
import { registration } from 'store/actions/userActions'
import Link from 'components/Link/Link'
import TextField from 'components/TextField/TextField'

interface IFormInput {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  showPassword: boolean
}
const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  showPassword: false,
}

const schema = yup
  .object({
    firstName: yup
      .string()
      .min(2, 'Length must be greater than 2 characters')
      .required('Please enter name'),
    lastName: yup
      .string()
      .min(2, 'Length must be greater than 2 characters')
      .required('Please enter last name'),

    email: yup
      .string()
      .email('Entered value does not match email format')
      .required('Please enter email'),
    password: yup
      .string()
      .required('Please enter password')
      .min(3, 'Length must be greater than 3 characters')
      .max(32, 'Length must be less than 32 characters'),
    confirmPassword: yup
      .string()
      .required('Please enter password')
      .oneOf([yup.ref('password')], 'Passwords don`t match')
      .min(3, 'Length must be greater than 3 characters')
      .max(32, 'Length must be less than 32 characters'),
  })
  .required()

const Registration = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IFormInput>({ defaultValues, resolver: yupResolver(schema) })

  const { error } = useSelector((state: RootState) => state.user)

  const onSubmit: SubmitHandler<IFormInput> = ({
    firstName,
    lastName,
    email,
    password,
  }) => {
    dispatch(
      registration(firstName, lastName, email, password, () => navigate('/'))
    )
  }

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ mt: 2, p: 2 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Registration</h1>
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                ref={null}
                error={errors.firstName ? true : false}
                helperText={errors?.firstName?.message}
                fullWidth
                label="Enter your Name"
                type="firstName"
                sx={{ mt: 2 }}
              />
            )}
          />

          <Controller
            name="lastName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                ref={null}
                error={errors.lastName ? true : false}
                helperText={errors?.lastName?.message}
                fullWidth
                label="Enter your Last Name"
                type="lastName"
                sx={{ mt: 2 }}
              />
            )}
          />

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
                type="email"
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
                type={watch('showPassword') ? 'text' : 'password'}
                sx={{ mt: 2 }}
              />
            )}
          />

          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                ref={null}
                error={errors.confirmPassword ? true : false}
                helperText={errors?.confirmPassword?.message}
                fullWidth
                label="Enter your password"
                type={watch('showPassword') ? 'text' : 'password'}
                sx={{ mt: 2 }}
              />
            )}
          />
          <Controller
            name="showPassword"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                label="show password"
                control={<Checkbox {...field} ref={null} />}
              />
            )}
          />

          <Box sx={{ mt: 2, display: 'flex' }}>
            <Button type="submit" variant="contained">
              Registration
            </Button>
            <Link to="/forgot-password">Forgot password?</Link>
            <Link to="/login">Log in?</Link>
          </Box>
          {error ? <Alert severity="error"> {error} </Alert> : null}
        </form>
      </Paper>
    </Container>
  )
}

export default Registration
