import { FC } from "react"
import dayjs from "dayjs"
import { ITime } from "./interface"
import "./time.scss"

export const Time: FC<ITime> = ({
  messageTime,
  timeFormat,
  color,
  fontSize = "fz13px",
}) => {
  return (
    <span className={`component-time ${fontSize} ${color}`}>
      {dayjs.unix(messageTime).format(timeFormat)}
    </span>
  )
}
