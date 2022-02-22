import { useSelector } from 'react-redux'
import { Container, Typography } from '@mui/material'
import { ICoinsState } from 'store/reducers/CoinsReducer'
import TableCoins from 'components/TableCoins/TableCoins'
import FilterBar from 'components/FilterBar/FilterBar'

const Home = () => {
  const { isLoading, error } = useSelector((state: ICoinsState) => state)

  return (
    <Container maxWidth="lg">
      <Typography component="div" sx={{ flexGrow: 1 }}>
        You can sort and filter table columns by any of the fields.
      </Typography>
      <FilterBar />
      {error && <h1>{error}</h1>}
      <TableCoins />
      {isLoading && <span>Loading...</span>}
    </Container>
  )
}

export default Home
