export interface IUser {
  email: string
  firstName: string
  id: string
  isActivated: boolean
  lastName: string
}

export interface IUserState {
  user: IUser
  isAuth: boolean
  error: string
}
