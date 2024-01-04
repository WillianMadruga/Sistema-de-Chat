'use client'

import { Chat } from "@/components/Chat"
import { ChatProvider } from "@/contexts/ChatContext"
import { UserProvider } from "@/contexts/UserContext"

export default function Home() {
  return (
    <div className=" h-screen mx-auto container  px-2 bg-black text-white">
      <UserProvider >
        <ChatProvider>
          <h1 className="text-xl py-3 text-center">Chat Simples</h1>
          <Chat/>
        </ChatProvider>
      </UserProvider>
    </div>
  )
};
