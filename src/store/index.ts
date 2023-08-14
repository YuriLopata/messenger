import { configureStore } from '@reduxjs/toolkit';
import messagesSlice from './messagesSlice';
import chatsSlice from './chatsSlice';
import activeChatSlice from './activeChatSlice';

export const store = configureStore({
  reducer: {
    chats: chatsSlice,
    messages: messagesSlice,
    activeChat: activeChatSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
