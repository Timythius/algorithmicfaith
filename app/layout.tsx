import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Algorithmic Faith',
  description: 'Exploring the intersection of technology, philosophy, and human understanding',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={outfit.variable}>
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
