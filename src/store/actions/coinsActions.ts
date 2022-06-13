import { Dispatch } from 'redux'
import { AxiosResponse } from 'axios'

import API from '../../API/api'
import {
  ICoins,
  IDataCoins,
  IDataCoinsCurrDispl,
  IDataCoinsCurrRaw,
} from '../../types/ICoin'
import { actionTypesCoins } from './actionTypes.actions'

/**
 * It takes an AxiosResponse object and a currency string, and returns an array of ICoins objects
 * @param data - AxiosResponse<IDataCoins>
 * @param {string} curr - string - the currency you want to get the data in
 * @returns An array of objects.
 */
function transformDataCoins(
  data: AxiosResponse<IDataCoins>,
  curr: string
): ICoins[] {
  if (data.status !== 200) return []
  let Raw = Object.values(data.data.RAW).map((item: IDataCoinsCurrRaw) => {
    return {
      id: item[curr].FROMSYMBOL,
      name: item[curr].FROMSYMBOL,
      currentPrice: item[curr].PRICE,
      openPrice: item[curr].OPENDAY,
      tosymbol: item[curr].TOSYMBOL,
    }
  })
  let Display = Object.values(data.data.DISPLAY).map(
    (item: IDataCoinsCurrDispl) => {
      return {
        currentPriceDispl: item[curr].PRICE,
        openPriceDispl: item[curr].OPENDAY,
        tosymbolDispl: item[curr].TOSYMBOL,
      }
    }
  )
  return Raw.map((item, index) => ({ ...item, ...Display[index] }))
}

export const fetchCoins =
  (params: string, curr: string) => (dispatch: Dispatch) => {
    dispatch(getCoinsRequest())
    API.get(`pricemultifull?fsyms=${params}&tsyms=${curr}`)
      .then((res) => transformDataCoins(res, curr))
      .then((res) => {
        dispatch(getCoinsSuccess(res))
      })
      .catch((err) => dispatch(getCoinsError(err.message)))
  }

export const getCoinsRequest = () => {
  return {
    type: actionTypesCoins.COINS_REQUEST,
  }
}

export const getCoinsSuccess = (data: ICoins[]) => {
  return {
    type: actionTypesCoins.COINS_SUCCESS,
    payload: data,
  }
}

export const getCoinsError = (data: string) => {
  return {
    type: actionTypesCoins.COINS_ERROR,
    payload: data,
  }
}
