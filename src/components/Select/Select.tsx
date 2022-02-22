import { FC } from 'react'
import { MenuItem, Select as MUISelect, SelectChangeEvent } from '@mui/material'

interface Iitem {
  id: number | string;
  item: string;
}
interface Ioptions extends Array<Iitem> {}

interface ISelectProps {
  id: string;
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  options: Ioptions;
  testid?: string;
  inputProps?: { 'data-testid': string };
  sx?: any;
}

const Select: FC<ISelectProps> = ({ options, testid, ...props }) => {
  return (
    <MUISelect data-testid={testid} {...props}>
      {options.map((item) => (
        <MenuItem key={item.id} value={item.item}>
          {item.item}
        </MenuItem>
      ))}
    </MUISelect>
  )
}

export default Select
