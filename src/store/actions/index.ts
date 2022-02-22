import { Dispatch } from 'redux'
import { AxiosResponse } from 'axios'
import API from '../../API/api'
import { ICoins } from '../../types/ICoin'

function transformData(data: AxiosResponse<any, any>, curr: string): ICoins[] {
  if (data.data.Response === 'Error') return []
  let Raw = Object.values(data.data.RAW).map((item: any) => {
    return {
      id: item[curr].FROMSYMBOL,
      name: item[curr].FROMSYMBOL,
      currentPrice: item[curr].PRICE,
      openPrice: item[curr].OPENDAY,
      tosymbol: item[curr].TOSYMBOL,
    }
  })
  let Display = Object.values(data.data.DISPLAY).map((item: any) => {
    return {
      currentPriceDispl: item[curr].PRICE,
      openPriceDispl: item[curr].OPENDAY,
      tosymbolDispl: item[curr].TOSYMBOL,
    }
  })
  return Raw.map((item, index) => ({ ...item, ...Display[index] }))
}

export const fetchCoins =
  (params: string, curr: string) => (dispatch: Dispatch) => {
    dispatch(getCoinsRequest())

    API.get(`pricemultifull?fsyms=${params}&tsyms=${curr}`)
      .then((res) => transformData(res, curr))
      .then((res) => {
        dispatch(getCoinsSuccess(res))
      })
      .catch((err) => dispatch(getCoinsError(err.message)))
  }

export const getCoinsRequest = () => {
  return {
    type: 'COINS_REQUEST',
  }
}

export const getCoinsSuccess = (data: ICoins[]) => {
  return {
    type: 'COINS_SUCCESS',
    payload: data,
  }
}

export const getCoinsError = (data: string) => {
  return {
    type: 'COINS_ERROR',
    payload: data,
  }
}

export type IActions = ReturnType<
  typeof getCoinsRequest | typeof getCoinsSuccess | typeof getCoinsError
>
