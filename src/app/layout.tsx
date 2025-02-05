import type { Metadata } from 'next'
import { ViewTransitions } from 'next-view-transitions'
import { Inter } from 'next/font/google'
import { cn } from '~/lib/utils'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Matheus Couto',
  description:
    'Oferecemos uma solução completa de criação e desenvolvimento de sites, focada em design moderno, integração eficiente e excelente experiência do usuário.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html
        lang="pt-br"
        className="overflow-x-hidden bg-black text-white antialiased"
      >
        <body className={cn(inter.className)}>{children}</body>
      </html>
    </ViewTransitions>
  )
}
