import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { Grid, SelectChangeEvent } from '@mui/material'

import { useDebounce } from '../../hooks/useDebounce'
import { fetchCoins } from '../../store/actions/coinsActions'
import Select from '../Select/Select'
import TextField from '../TextField/TextField'

const CURRENCIES = [
  { id: 1, item: 'USD' },
  { id: 2, item: 'EUR' },
]
const DELAY = 900

const REGEXP = /\d/

/**
 * It's a React component that renders a search field and a select dropdown. The search field is used
 * to filter the list of coins. The select dropdown is used to change the currency of the coins.
 * 
 * The component uses the useSearchParams hook to manage the search parameters. The hook uses the
 * useState hook to store the search parameters in the component's state. The useSearchParams hook also
 * uses the useEffect hook to update the search parameters in the URL.
 * 
 * The component uses the useDebounce hook to debounce the search term. The useDebounce hook uses the
 * useState hook to store the debounced search term in the component's state. The useDebounce hook also
 * uses the useEffect hook to update the debounced search term.
 * 
 * The component uses the useDispatch hook to dispatch an action to the Redux store. The useDispatch
 * hook uses the useState hook to store the dispatch function
 */
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
    if (REGEXP.test(filter)) {
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
          options={CURRENCIES}
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
