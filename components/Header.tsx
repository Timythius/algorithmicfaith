'use client'

/**
 * Header — site header.
 *
 * On the homepage the rose window + lancet hero IS the navigation, so the
 * header is intentionally minimal: just the logo and the lite-mode toggle.
 *
 * On every other page the header carries a slim cathedral entablature
 * (MiniLancetNav) — the same five-lancet primary nav from the homepage,
 * miniaturised — so visitors always have the lancets within reach.
 */

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import StainedGlassLogo from './StainedGlassLogo'
import LiteToggle from './LiteToggle'
import MiniLancetNav from './MiniLancetNav'

export default function Header() {
  const pathname = usePathname() || '/'
  const isHome = pathname === '/'

  return (
    <header className="bg-dark-950/95 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-dark-800/50">
      {/* Stained glass accent line at very top */}
      <div className="h-[2px] bg-gradient-to-r from-ruby-500 via-amethyst-500 via-sapphire-500 via-emerald-500 to-gold-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-90 transition-opacity duration-300 shrink-0"
          >
            <StainedGlassLogo size={36} />
            <span className="font-serif text-lg text-white tracking-wide hidden sm:inline">
              Algorithmic<span className="text-gold-400"> Faith</span>
            </span>
          </Link>

          <LiteToggle />
        </div>
      </div>

      {/* Mini lancet entablature — only on non-home pages */}
      {!isHome && <MiniLancetNav currentPath={pathname} />}
    </header>
  )
}
