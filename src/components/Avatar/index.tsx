import { FC } from "react"
import { IAvatar } from "./interface"
import "./avatar.scss"

export const Avatar: FC<IAvatar> = ({ src, size = "sm" }) => {
  const className = `component-avatar component-avatar--${size}`

  return (
    // перенес класс в img, т.к. в div стили не применялись
    <img src={src} alt="Avatar" className={className} />
  )
}
