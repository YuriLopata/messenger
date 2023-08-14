import { FC, useEffect, useRef } from "react"
import { useSelector } from "react-redux/es/exports"
import { MessageInfo } from "../../interface/messageInfo"
import { RootState } from "../../store"
import { timestampToDate } from "../../utils/timestampToDate"
import { Header } from "../Header"
import { Input } from "../Input"
import { Message } from "../Message"
import { MessageDate } from "../MessageDate"
import { NewMessage } from "../NewMessage"
import "./chat.scss"

export const Chat: FC = () => {
  const chatFieldRef = useRef<HTMLDivElement>(null)
  const { activeChat } = useSelector((state: RootState) => state.activeChat)
  const { messages } = useSelector((state: RootState) => state.messages)

  const scrollToBottom = (): void => {
    const chatFieldContainer = chatFieldRef.current

    if (chatFieldContainer) {
      chatFieldContainer.scrollTop = chatFieldContainer.scrollHeight
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <div className="chat">
      <Header title={activeChat?.title} />

      <div className="chat__field" ref={chatFieldRef}>
        {messages.map((item: MessageInfo, index: number) => {
          const isFirstMessage = index === 0
          const prevItem = messages[index - 1]
          const prevMessageAuthor = isFirstMessage ? null : prevItem.user

          const toShowNewMessage =
            !item?.user?.you && item?.is_new && !prevItem?.is_new

          const isSameDate = () => {
            if (
              !isFirstMessage &&
              timestampToDate(messages[index]?.created_at, "DD.MM.YYYY") ===
                timestampToDate(prevItem?.created_at, "DD.MM.YYYY")
            )
              return true
            return false
          }

          return (
            <div key={item.id} className="message">
              {!isSameDate() && <MessageDate messageDate={item.created_at} />}

              {toShowNewMessage && <NewMessage />}

              <Message
                my={item.user.you}
                main={activeChat && activeChat.users.length > 2 ? false : true}
                prevUser={prevMessageAuthor}
                isSameDate={isSameDate()}
                {...item}
              />
            </div>
          )
        })}
      </div>

      <Input />
    </div>
  )
}
