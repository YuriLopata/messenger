import { FC } from "react"
import { ChatInfo } from "../../interface/chatInfo"
import { ChatItem } from "../ChatItem"
import { IChatItemList } from "./interface"

export const ChatItemList: FC<IChatItemList> = ({
  chats,
  activeChat,
  handleChatClick,
}) => {
  const isChatActive = (chatId: string) => {
    if (activeChat && chatId === activeChat.id) return true
    return false
  }

  return (
    <ul className="chat-item-list">
      {chats.map((chat: ChatInfo) => (
        <li key={chat.id}>
          <ChatItem
            isActive={isChatActive(chat.id)}
            onClick={() => handleChatClick(chat)}
            {...chat}
          />
        </li>
      ))}
    </ul>
  )
}
