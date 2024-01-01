import { useChat } from "@/contexts/ChatContext"
import { KeyboardEvent, useState } from "react"

type Props  = {
  name:string
}
export const ChatInput = ({name}: Props) => {
  const textCtx = useChat()
  const [textInput, setTextInput] = useState('');
  const handleKeyUp = (event: KeyboardEvent <HTMLInputElement>) => {
    if(event.code.toLowerCase() === 'enter') {
      if(textInput.trim() !== ''){
        textCtx?.addMessage(name, textInput.trim())
        setTextInput('');
      }
    }
  }

  return(
    <input
      className="p-3 border border-white/40 rounded-2xl w-full  bg-transparent"
      placeholder={`${name}, digite uma mensagem (e aperte enter)`}
      value={textInput}
      onChange={e=>setTextInput(e.target.value)}    
      onKeyUp={handleKeyUp}
    />
  )
}