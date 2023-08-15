import { FC, useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { getChatList } from "../../api/chats"
import { getMessageList } from "../../api/messages"
import { Chat } from "../../components/Chat"
import { ChatItemList } from "../../components/ChatItemList"
import { LowResAlert } from "../../components/LowResAlert"
import "../../index.scss"
import { ChatInfo } from "../../interface/chatInfo"
import { IPage } from "../../interface/page"
import { RootState } from "../../store"
import { setActiveChat } from "../../store/activeChatSlice"
import { setChats } from "../../store/chatsSlice"
import { setMessages } from "../../store/messagesSlice"

export const PageIndex: FC<IPage> = ({ title }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  const navigate = useNavigate()
  const location = useLocation()

  const dispatch = useDispatch()
  const { chats } = useSelector((state: RootState) => state.chats)
  const { activeChat } = useSelector((state: RootState) => state.activeChat)

  const handleChatClick = useCallback(
    (chat: ChatInfo): void => {
      dispatch(setActiveChat(chat))
      navigate(`/messenger/${chat.id}`)
    },
    [dispatch, navigate]
  )

  const setMessageList = useCallback(
    async (chatId: string) => {
      const resronseData = await getMessageList(chatId)
      dispatch(setMessages(resronseData.response.reverse()))
    },
    [dispatch]
  )

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth < 700)
    }
    window.addEventListener("resize", checkScreenWidth)
    checkScreenWidth()
    return () => {
      window.removeEventListener("resize", checkScreenWidth)
    }
  }, [])

  useEffect(() => {
    const setChatList = async () => {
      const responseData = await getChatList()
      dispatch(setChats(responseData))
    }
    setChatList()
  }, [dispatch])

  useEffect(() => {
    const chatId = location.pathname.split("/messenger/")[1]
    const chat = chats?.find((chat: ChatInfo) => chat?.id === chatId)

    dispatch(setActiveChat(chat))
    if (chat) setMessageList(chat.id)
  }, [chats, dispatch, location.pathname, setMessageList])

  useEffect(() => {
    document.title = title || "Messenger"
  }, [title])

  return (
    <div className="wrapper">
      {isMobile ? (
        <LowResAlert />
      ) : (
        <>
          <div className="chats">
            <header>
              <h2>All chats</h2>
            </header>

            <ChatItemList
              chats={chats}
              activeChat={activeChat}
              handleChatClick={handleChatClick}
            />
          </div>

          {activeChat && <Chat />}
        </>
      )}
    </div>
  )
}
