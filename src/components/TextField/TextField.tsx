import React, { FC } from 'react'
import { TextField as MUITextField } from '@mui/material'

interface ITextFieldProps {
  value: any
  onChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void
  error?: boolean
  helperText?: string
  fullWidth?: boolean
  multiline?: boolean
  id?: string
  label?: string
  type?: string
  placeholder?: string
  inputProps?: { 'data-testid': string }
  sx?: any
  onBlur?: any
  ref?: any
}

const TextField: FC<ITextFieldProps> = (props) => {
  return <MUITextField {...props} />
}

export default TextField
