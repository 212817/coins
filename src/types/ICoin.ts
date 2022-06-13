export interface ICoins {
  id: string
  name: string
  currentPrice: number
  openPrice: number
  tosymbol: string
  currentPriceDispl: string
  openPriceDispl: string
  tosymbolDispl: string
}

export interface ICoinsState {
  coins: ICoins[]
  isLoading: boolean
  error: string
}

type ICoinsRawValue = {
  FROMSYMBOL: string
  PRICE: number
  OPENDAY: number
  TOSYMBOL: string
}

type ICoinsDispValue = {
  [key: string]: string
}

export type IDataCoinsCurrRaw = {
  [curr: string]: ICoinsRawValue
}

export type IDataCoinsCurrDispl = {
  [curr: string]: ICoinsDispValue
}

export type IDataCoins = {
  RAW: IDataCoinsCurrRaw[]
  DISPLAY: IDataCoinsCurrDispl[]
}
