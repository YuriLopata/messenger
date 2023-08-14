import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ChatInfo } from "../interface/chatInfo"

interface ChatsState {
  chats: ChatInfo[]
}

const initialState: ChatsState = {
  chats: [],
}

const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    setChats: (state, action: PayloadAction<ChatInfo[]>) => {
      state.chats = action.payload
    },
  },
})

export const { setChats } = chatsSlice.actions
export default chatsSlice.reducer
