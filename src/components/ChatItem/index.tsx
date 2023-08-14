import { FC } from "react"
import { defineTimeFormat } from "../../utils/defineTimeFomrat"
import { Avatar } from "../Avatar"
import { Time } from "../Time"
import "./chat-item.scss"
import { IChatItem } from "./interface"

export const ChatItem: FC<IChatItem> = ({
  avatar,
  title,
  last_message,
  isActive,
  onClick,
}) => {
  const selectedClassname: string = isActive ? "chat-item--selected" : ""

  return (
    <div
      className={`chat-item ${selectedClassname}`}
      onClick={onClick}
      tabIndex={1}
    >
      <Avatar size="md" src={avatar} />

      <div className="chat-item__info">
        <div>
          <div className="chat-item__title">{title}</div>

          <Time
            messageTime={last_message.created_at}
            timeFormat={defineTimeFormat(last_message.created_at)}
            color="gray"
          />
        </div>

        <div className="chat-item__message">{last_message.message}</div>
      </div>
    </div>
  )
}
