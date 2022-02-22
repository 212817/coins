import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { Grid, SelectChangeEvent } from '@mui/material'
import { useDebounce } from '../../hooks/useDebounce'
import { fetchCoins } from '../../store/actions'
import Select from '../Select/Select'
import TextField from '../TextField/TextField'

const Currencies = [
  { id: 1, item: 'USD' },
  { id: 2, item: 'EUR' },
]
const DELAY = 900

const FilterBar = () => {
  const [isErr, setErr] = useState(false)
  const dispatch = useDispatch()

  const [searchParams, setSearchParams] = useSearchParams({
    filter: 'BTC,ETH,LUNA',
    current: 'USD',
  })

  const debouncedSearchTerm = useDebounce(
    searchParams.get('filter') || '',
    DELAY
  )

  useEffect(() => {
    let curr = searchParams.get('current') || 'USD'
    dispatch(fetchCoins(debouncedSearchTerm, curr))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm, searchParams.get('current')])

  const handleSelectCurrency = (event: SelectChangeEvent<string>) => {
    let current = event.target.value
    let filter = searchParams.get('filter') || ''
    setSearchParams({ filter, current })
  }

  const handleSearchField = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    let filter = event.target.value
    let current = searchParams.get('current') || ''
    setErr(false)
    if (/\d/.test(filter)) {
      setErr(true)
    }
    if (filter) {
      setSearchParams({ filter, current })
    } else {
      setSearchParams({ filter: '' })
    }
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={2} md={1}>
        <Select
          id="Select"
          value={searchParams.get('current') || ''}
          onChange={handleSelectCurrency}
          options={Currencies}
          testid="SelectCurrent"
          inputProps={{ 'data-testid': 'optionCurrent' }}
          sx={{ mt: 1 }}
        />
      </Grid>
      <Grid item xs={12} sm={10} md={11}>
        <TextField
          error={isErr}
          helperText={isErr ? 'Use only letters' : ''}
          value={searchParams.get('filter')}
          onChange={handleSearchField}
          fullWidth
          multiline={true}
          id="outlined-search"
          label="Search field"
          type="search"
          placeholder="Search..."
          inputProps={{ 'data-testid': 'InputCoins' }}
          sx={{ mt: 1 }}
        />
      </Grid>
    </Grid>
  )
}

export default FilterBar
