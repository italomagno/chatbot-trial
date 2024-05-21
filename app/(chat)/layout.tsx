import { GoogleTranslate } from '@/components/GoogleTranslate'
import { SidebarDesktop } from '@/components/sidebar-desktop'
import { getPrefLangCookie } from './page'

interface ChatLayoutProps {
  children: React.ReactNode
}

export default async function ChatLayout({ children }: ChatLayoutProps) {
  return (

      <div className="relative flex h-[calc(100vh_-_theme(spacing.16))] overflow-hidden">
      <GoogleTranslate prefLangCookie={getPrefLangCookie()} />
      <SidebarDesktop />
      {children}
    </div>
  )
}
