import React, { FC } from "react"
import { IMessageDate } from "./interface"
import { Time } from "../Time"
import "./message-date.scss"

export const MessageDate: FC<IMessageDate> = ({messageDate}) => {
  return (
    <div className="component-message-date">
      <Time
        messageTime={messageDate}
        timeFormat="DD.MM.YYYY"
        fontSize="fz12px"
      />
    </div>
  )
}
