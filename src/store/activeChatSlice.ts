import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ChatInfo } from "../interface/chatInfo"

interface ActiveChatState {
  activeChat: ChatInfo | null | undefined
}

const initialState: ActiveChatState = {
  activeChat: null,
}

const activeChatSlice = createSlice({
  name: "activeChat",
  initialState,
  reducers: {
    setActiveChat: (
      state,
      action: PayloadAction<ChatInfo | null | undefined>
    ) => {
      state.activeChat = action.payload
    },
  },
})

export const { setActiveChat } = activeChatSlice.actions
export default activeChatSlice.reducer
