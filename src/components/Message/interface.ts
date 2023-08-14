import { UserInfo } from "../../interface/userInfo"

export interface IMessage {
  my: boolean
  main: boolean
  avatar?: string
  message: string
  created_at: number
  user: UserInfo
  prevUser: UserInfo | null
  isSameDate: boolean
}
