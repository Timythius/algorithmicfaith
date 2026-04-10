import type { Metadata, Viewport } from 'next'
import { Outfit, Cinzel } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RoseLoader from '@/components/RoseLoader'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
})

// Use the public site URL when set, otherwise the Vercel deployment URL,
// otherwise fall back to localhost so dev and prod both produce valid OG
// tags without manual config.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')

const SITE_NAME = 'Algorithmic Faith'
const SITE_DESCRIPTION =
  'Where faith meets the feed. Spotlighting the creators making ministry happen online.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    locale: 'en_US',
    // app/opengraph-image.tsx is auto-picked up by Next.js — no need to
    // list images here, but Twitter card metadata below references the
    // same generated file via the file convention.
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
}

export const viewport: Viewport = {
  themeColor: '#050302',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${cinzel.variable}`}>
      <body className={outfit.className}>
        <RoseLoader />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
