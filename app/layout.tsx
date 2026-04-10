import type { Metadata } from 'next'
import { Outfit, Cinzel } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
})

export const metadata: Metadata = {
  title: 'Algorithmic Faith',
  description: 'Discovering faith creators who are shaping culture through YouTube, TikTok, and beyond',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${cinzel.variable}`}>
      <body className={outfit.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow pt-[65px]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
