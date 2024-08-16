import { Noto_Sans_KR } from 'next/font/google'

import './globals.css'

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-notoSansKR',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={notoSansKR.className}>
      <head />
      <body className="flex-center font-medium">
        <div className="relative h-svh w-full min-w-[320px] max-w-[450px] overflow-hidden border-x">
          {children}
        </div>
      </body>
    </html>
  )
}
