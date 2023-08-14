import { FC } from "react"
import iconChat from "../../assets/img/iconChat.svg"
import "./header.scss"
import { IHeader } from "./interface"

export const Header: FC<IHeader> = ({ title }) => {
  return (
    <header className="header">
      <img src={iconChat} alt="Chat" />

      <h2 className="title">{title}</h2>
    </header>
  )
}
