import { FC } from "react"
import { IMessage } from "./interface"
import { Avatar } from "../Avatar"
import "./message.scss"
import { Time } from "../Time"

export const Message: FC<IMessage> = ({
  my,
  main,
  message,
  created_at,
  user,
  prevUser,
  isSameDate,
}) => {
  const isSameUser = user.id === prevUser?.id
  const toShowUser = (!my && !main && !isSameUser) || (!my && !main && !isSameDate)
  const isPrivate = main && !my ? "private" : ""

  const authorClassname = my ? "component-message__content-wrapper--my" : ""
  const hasUserClassname =
    isSameUser && isSameDate
      ? `component-message--no-user-info ${isPrivate}`
      : ""

  return (
    <div className={`component-message ${hasUserClassname}`}>
      {toShowUser && <Avatar src={user.avatar} />}

      <div className="component-message__data">
        {toShowUser && (
          <div className="component-message__name">{`${user.name} ${user.surname}`}</div>
        )}

        <div className={`component-message__content-wrapper ${authorClassname}`}>
          <div className={`component-message__content`}>
            <p className={`component-message__text`}>{message}</p>

            <span className="component-message__time">
              <Time
                messageTime={created_at}
                timeFormat="HH:mm"
                color="gray"
                fontSize="fz12px"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
