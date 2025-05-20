import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lucas Ligenza | Software & AI Engineer',
  description: 'Portfolio showcasing software engineering projects and AI development experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-b from-white to-green-50`}>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
} 