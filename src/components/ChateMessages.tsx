import { useChat } from "@/contexts/ChatContext";
import { useUser } from "@/contexts/UserContext";

export const ChatMessages = () => {

  const chatctx = useChat();
  const useCtx = useUser();
  
  return(
    <div className="flex flex-col">
      {chatctx?.chat.map(item => (
        <div
          key={item.id}
          className={`border border-white/20 rounded-md gap-2 p-2
            ${item.user === useCtx?.user ?
                'self-end bg-white/15 text-right' :
                'self-start bg-white/5 text-left'}
          `}
        >
          <div className="font-bold">{item.user}</div>
          <p className="">{item.text}</p>
        </div>
      ))}
    </div>
  );
}