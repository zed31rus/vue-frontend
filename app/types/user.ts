export interface User {
  allowEmailFind: boolean
  allowLoginFind: boolean
  avatar: string | null
  createdAt: string
  email: string
  emailConfirmed: boolean
  isAdmin: boolean
  login: string
  nickname: string
  uuid: string
}
