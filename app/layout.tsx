import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import SuperbaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import ToasterProvider from '@/providers/ToasterProvider'
import getSongsByUserID from '@/actions/getSongsByUserId'

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'Listen to music!',
}

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const userSong = await getSongsByUserID();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider/>
        <SuperbaseProvider>
          <UserProvider>
            <ModalProvider />
              <Sidebar songs={userSong}>
                {children}
              </Sidebar>            
          </UserProvider>
        </SuperbaseProvider>
      </body>
    </html>
  )
}
