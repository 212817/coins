import React, { FC, RefObject } from 'react'
import {
  TextField as MUITextField,
  SxProps,
  InputBaseProps,
} from '@mui/material'

interface ITextFieldProps {
  value: string | number | null
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
  sx?: SxProps
  onBlur?: InputBaseProps['onBlur']
  ref?: null | RefObject<HTMLInputElement>
}

const TextField: FC<ITextFieldProps> = (props) => {
  return <MUITextField {...props} />
}

export default TextField
