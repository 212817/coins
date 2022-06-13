import { useState } from 'react'
import { useSelector } from 'react-redux'
import {
  DataGrid,
  GridCellValue,
  GridColDef,
  GridSortModel,
} from '@mui/x-data-grid'
import type { } from '@mui/x-data-grid/themeAugmentation'
import { Box } from '@mui/material'

import { ICoins } from '../../types/ICoin'
import { RootState } from 'store/store'

const sortComparators = () => {
  return (a: GridCellValue, b: GridCellValue) => {
    let aa = parseFloat((a as string).replace(/[^.\d]/g, ''))
    let bb = parseFloat((b as string).replace(/[^.\d]/g, ''))
    return aa - bb
  }
}

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
    sortComparator: sortComparators(),
    type: 'string',
  },
  {
    field: 'openPrice',
    headerName: 'Opening price',
    flex: 70,
    align: 'center',
    headerAlign: 'center',
    sortComparator: sortComparators(),
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

  const { coins } = useSelector((state: RootState) => state.coins)

  /**
   * It takes a current price, an open price, and a currency symbol, and returns a string that says how
   * much the current price has increased or decreased from the open price
   * @param {number} current - number - current price
   * @param {number} open - the price of the coin at the time of the last update
   * @param {string} tosymbol - string - the currency symbol to which the price is converted
   * @returns A string with the following format: `% ( )`
   */
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
