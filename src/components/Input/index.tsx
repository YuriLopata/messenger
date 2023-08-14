import { FC, useEffect, useRef, useState } from "react"
import iconClip from "../../assets/img/iconClip.svg"
import iconSend from "../../assets/img/iconSend.svg"
import "./input.scss"

export const Input: FC = () => {
  const [text, setText] = useState<string | undefined>("")
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    placeCaretAtEnd(ref?.current)
  }, [text])

  const placeCaretAtEnd = (el: HTMLElement | null) => {
    if (!el) return

    const range = document.createRange()
    const sel = window.getSelection()

    range?.selectNodeContents(el)
    range?.collapse(false)

    sel?.removeAllRanges()
    sel?.addRange(range)
  }

  const handleChangeText = (): void => {
    setText(ref?.current?.innerText)
  }

  return (
    <div className="component-input">
      <div className="component-input__text">
          <p
            ref={ref}
            contentEditable
            suppressContentEditableWarning
            onInput={handleChangeText}
          >
            {text}
          </p>

          {!text && <div className="component-input__placeholder">Type message</div>}
        
      </div>

      <div className="component-input__buttons">
        <button className="component-input__attach">
          <img src={iconClip} alt="Paper clip" width={12.63} height={14.28} />
        </button>

        <button className="component-input__send">
          <img src={iconSend} alt="Arrow" width={19.5} height={19.51} />
        </button>
      </div>
    </div>
  )
}
