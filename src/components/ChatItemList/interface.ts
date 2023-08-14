import { ChatInfo } from "../../interface/chatInfo";

export interface IChatItemList {
    chats: ChatInfo[]
    activeChat: ChatInfo | null | undefined
    handleChatClick: (chat: ChatInfo) => void
}