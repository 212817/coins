import { useState } from 'react'
import { useSelector } from 'react-redux'
import { DataGrid, GridColDef, GridSortModel } from '@mui/x-data-grid'
import type {} from '@mui/x-data-grid/themeAugmentation'
import { Box } from '@mui/material'
import { ICoins } from '../../types/ICoin'
import { ICoinsState } from '../../store/reducers/CoinsReducer'

let columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Coin name',
    flex: 50,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'currentPrice',
    headerName: 'Current Price',
    flex: 70,
    align: 'center',
    headerAlign: 'center',
    sortComparator: (a: any, b: any): number => {
      let aa = parseFloat(a.replace(/[^.\d]/g, ''))
      let bb = parseFloat(b.replace(/[^.\d]/g, ''))
      return aa - bb
    },
  },
  {
    field: 'openPrice',
    headerName: 'Opening price',
    flex: 70,
    align: 'center',
    headerAlign: 'center',
    sortComparator: (a: any, b: any): number => {
      let aa = parseFloat(a.replace(/[^.\d]/g, ''))
      let bb = parseFloat(b.replace(/[^.\d]/g, ''))
      return aa - bb
    },
  },
  {
    field: 'priceIncrease',
    headerName: 'Price Increase',
    flex: 130,
    align: 'center',
    headerAlign: 'center',
  },
]

const TableCoins = () => {
  const [sortModel, setSortModel] = useState<GridSortModel>([
    {
      field: 'priceIncrease',
      sort: 'desc',
    },
  ])

  const { coins } = useSelector((state: ICoinsState) => state)

  const increase = (current: number, open: number, tosymbol: string) => {
    let reducedСur = current * 1e8
    let reducedOpen = open * 1e8
    let relative = Math.round((reducedСur / reducedOpen) * 1000 - 1000) / 1000
    let absolute = Math.round(reducedСur - reducedOpen) / 1e8
    return `${relative}% (${tosymbol} ${absolute})`
  }

  const rows = coins?.map((item: ICoins) => {
    return {
      id: item.id,
      name: item.name,
      currentPrice: item.currentPriceDispl,
      openPrice: item.openPriceDispl,
      priceIncrease: increase(
        item.currentPrice,
        item.openPrice,
        item.tosymbolDispl
      ),
    }
  })

  return (
    <Box sx={{ width: '100%', marginTop: '10px' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        sortModel={sortModel}
        onSortModelChange={(model) => setSortModel(model)}
        showCellRightBorder={true}
        showColumnRightBorder={true}
        autoHeight={true}
        columnBuffer={4}
        rowsPerPageOptions={[10]}
        sx={{
          '& .MuiDataGrid-columnHeader': {
            background: '#A4C2F4',
          },
          '& .MuiDataGrid-withBorder': {
            borderRight: '1px solid #e0e0e0',
          },
        }}
      />
    </Box>
  )
}

export default TableCoins
