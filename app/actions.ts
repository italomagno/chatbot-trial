'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { Prisma, PrismaClient } from "@prisma/client";
import { auth } from '@/auth'
import { ServerActionResult, type Chat } from '@/lib/types'
import { idea } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Message } from 'ai';



const prisma = new PrismaClient();


export async function getChats(userId?: string | null):Promise<Chat[] | []> {
  if (!userId) {
    return []
  }
    try {
      const chats = await prisma.chat.findMany({
        where:{
          userId: userId 
        }
      })
      if(!chats){
        return []
      }

      return chats as Chat[]

    } catch (err) {
      console.error("error executing query:", err);
      return []
    } finally {
      prisma.$disconnect();
    }

}

export async function getChat(id: string, userId: string):Promise<Chat | undefined> {
    try {
      const chat = await prisma.chat.findUnique({
        where:{
          id 
        }
      })
      if (!chat || (userId && chat.userId !== userId)) {
        return 
      }
       return chat as Chat


    } catch (err) {
      console.error("error executing query:", err);
      return
    } finally {
      prisma.$disconnect();
    }


}
export async function getMessages(chatId:string){
  try {
    const messages = await prisma.message.findMany({
      where:{
        chatId:chatId
      }
    })

    if (!messages) {
      return []
    }
     return messages


  } catch (err) {
    console.error("error executing query:", err);
    return
  } finally {
    prisma.$disconnect();
  }


}


export async function removeChat({ id, path }: { id: string; path: string }):Promise<ServerActionResult<void>> {
  const session = await auth()

  if (!session) {
    return {
      error: 'Unauthorized'
    }
  }

    try {
      const chat = await prisma.chat.findUnique({
        where:{
          id 
        }
      })
      if(!chat){
        return {
          error: 'Chat not found'
        }
      }

      const uid = chat.userId
      if (uid !== session?.user?.id) {
        return {
          error: 'Unauthorized'
        }
      }
     const deletedChat =  await prisma.chat.delete({
        where:{
          id,
        }
      })
      revalidatePath('/')


    } catch (err) {
      console.error("error executing query:", err);
    } finally {
      prisma.$disconnect();
    }

}

export async function clearChats():Promise<ServerActionResult<void>> {
  const session = await auth()
  if (!session) {
    return {
      error: 'Unauthorized'
    }
  }
    try {
      const chats = await getChats(session.user?.id)
      
      if (!chats || !chats.length) {
        return redirect('/')
      }
      
        await prisma.chat.deleteMany({where:{
          userId:session!.user!.id
        }})

    } catch (err) {
      console.error("error executing query:", err);
     return {
        error: String(err)
      }
    } finally {
      prisma.$disconnect();
    }
  


  revalidatePath('/')
  return redirect('/')
}

export async function getSharedChat(id: string):Promise<Chat | undefined> {
    try {
      const chat = await prisma.chat.findUnique({
        where:{
          id 
        }
      })
      if (!chat || !chat.sharePath) {
        return
      }
       return chat as Chat


    } catch (err) {
      console.error("error executing query:", err);
      return 
    } finally {
      prisma.$disconnect();
    }
 
}

export async function shareChat(id: string):Promise<ServerActionResult<Chat>> {
    try {
  const session = await auth()

      if (!session?.user?.id) {
        return {
          error: 'Unauthorized'
        }
      }
      const chat = await prisma.chat.findUnique({
        where:{
          id 
        }
      })
      if (!chat || chat.userId !== session.user.id) {
        return {
          error: 'Something went wrong'
        }
      }
      const payload = {
        ...chat,
        sharePath: `/share/${chat.id}`
      }
       const newChat = await prisma.chat.update({
        where:{
        id:chat.id
      },
    data:payload})

      return newChat as Chat


    } catch (err) {
      console.error("error executing query:", err);
      return {
        error: 'Unauthorized'
      }
    } finally {
      prisma.$disconnect();
    }



  

  

  
}

//falta corrigir
export async function saveChat(chat: Chat) {
  const session = await auth()
  if (session && session.user && session.user.id) {
      try {
        const newMessages = chat.messages.map(message=>{
          return {
            role:String(message.role), 
            content:message.content,
            name: message.name as string
          }
        })
          // Check if the chat already exists for the user
      const existingChat = await prisma.chat.findFirst({
        where: {
          AND: [
            { id: chat.id },
            { userId: session.user.id },
          ],
        },
      });

        if(existingChat){
          await prisma.message.updateMany({
            where:{
              chatId:existingChat.id
            },
            data:newMessages
          })
          
      }else{
          const createdChat = await prisma.chat.create({data:{
            userId:session.user.id,
            title:chat.title,
            messages:{create:newMessages}
          }
          })
          const path = `/chat/${createdChat.id}`

          const chatUpdated = await prisma.chat.update({where:{id:createdChat.id,
            userId:session.user.id
          },
          data:{
              path,  
          }})
        }
        

  
      } catch (err) {
        console.error("error executing query:", err);
        return []
      } finally {
        prisma.$disconnect();
      }

  
  } else {
    return
  }
}

export async function refreshHistory(path: string) {
  redirect(path)
}

export async function getMissingKeys() {
  const keysRequired = ['OPENAI_API_KEY']
  return keysRequired
    .map(key => (process.env[key] ? '' : key))
    .filter(key => key !== '')
}


