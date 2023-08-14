import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { MessageInfo } from "../interface/messageInfo"

interface MessagesState {
  messages: MessageInfo[]
}

const initialState: MessagesState = {
  messages: [],
}

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<MessageInfo[]>) => {
      state.messages = action.payload
    },
  },
})

export const { setMessages } = messagesSlice.actions
export default messagesSlice.reducer
