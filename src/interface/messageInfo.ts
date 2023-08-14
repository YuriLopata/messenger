import { UserInfo } from "./userInfo"

export interface MessageInfo {
    created_at: number
    id: string
    is_new: boolean
    message: string
    user: UserInfo
  }