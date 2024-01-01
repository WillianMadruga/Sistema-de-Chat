import { useUser } from "@/contexts/UserContext";
import { KeyboardEvent, useState } from "react";

export const NameInput = () => {

  const nameCtx = useUser()
  const [nameInput, setNameInput]= useState('')

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>)=>{
    if(event.code.toLowerCase() === 'enter'){
      if(nameInput.trim() !== '' && nameInput !== 'bot'){
        nameCtx?.setUser(nameInput.trim());
      }
    }
  }

  return(
    <div className="mt-12 mx-auto">
      <p className="text-xl mb-2">Qual o seu nome?</p>

      <div className="flex items-center gap-3">
        <input 
        className="border border-gray-600 bg-white/35 rounded-md
        py-3 px-4 text-xl flex-1"
        type="text" 
        placeholder="Digite seu nome de Usuario"
        value={nameInput}
        onChange={e=>setNameInput(e.target.value)}
        onKeyUp={handleKeyUp}
        />
      </div>
    </div>
  );
}