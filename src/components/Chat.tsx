import { useUser } from "@/contexts/UserContext"
import { NameInput } from "./NameInput";
import { ChatInput } from "./ChatInput";
import { ChatMessages } from "./ChateMessages";

export const Chat = () => {

  const userCtx = useUser();

  if(!userCtx) return null;
  if(!userCtx.user) return <NameInput/>;  

  return(
    <div className="border border-white/30 rounded-md ">
      <div className="h-96 p-3 overflow-y-auto">
        <ChatMessages/>
      </div>
      <div className=" p-3 border-t border-t-white/30">
        <ChatInput name={userCtx?.user}/>
      </div>
      <div className=" p-3 border-t border-t-white/30">
        <ChatInput name="Bot"/>
      </div>
    </div>
  )
}