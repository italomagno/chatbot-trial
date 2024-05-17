import { type Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'

import { auth } from '@/auth'
import { getChat, getChats, getMessages, getMissingKeys } from '@/app/actions'
import { Chat } from '@/components/chat'
import { AI } from '@/lib/chat/actions'
import { Session } from '@/lib/types'
import { Message } from 'ai'

export interface ChatPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({
  params
}: ChatPageProps): Promise<Metadata> {
  const session = await auth()

  if (!session?.user) {
    return {}
  }
  const chat = await getChat(params.id, session.user.id)
  return {
    title: chat?.title.toString().slice(0, 50) ?? 'Chat'
  }
}

export default async function ChatPage({ params }: ChatPageProps) {
  const session = (await auth()) as Session
  const missingKeys = await getMissingKeys()
 

  const userId = session.user.id as string
  const chat = await getChat(params.id, userId)
 
  if (!chat) {
    redirect('/')
  }

  if (chat?.userId !== session?.user?.id) {
    notFound()
  }
  const messages = await getMessages(chat.id)

  const newMessages = messages!.map(message=>{
    const newMessage: Message = {
      content: message.content,
      id: message.id,
      role: message.role as "function" | "system" | "user" | "assistant" | "data" | "tool",
      annotations: [],
      createdAt : new Date(),

    }
    return newMessage
  })


  return (
    <AI initialAIState={{ chatId: chat.id!, messages:newMessages }}>
      <Chat
        id={chat.id}
        session={session}
        initialMessages={chat.messages}
        missingKeys={missingKeys}
      />
    </AI>
  )
}
