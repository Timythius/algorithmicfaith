'use client'

import Link from 'next/link'
import { useState } from 'react'
import StainedGlassLogo from './StainedGlassLogo'

const navLinks = [
  { href: '/blog', label: 'Blog' },
  { href: '/creators', label: 'Creators' },
  { href: '/resources', label: 'Resources' },
  { href: '/about', label: 'About' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-dark-950/95 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-dark-800/50">
      {/* Stained glass accent line at very top */}
      <div className="h-[2px] bg-gradient-to-r from-ruby-500 via-amethyst-500 via-sapphire-500 via-emerald-500 to-gold-500" />

      <nav className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-90 transition-opacity duration-300"
          >
            <StainedGlassLogo size={36} />
            <span className="font-serif text-lg text-white tracking-wide">
              Algorithmic<span className="text-gold-400"> Faith</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-dark-300 hover:text-gold-400 transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dark-300 hover:text-white transition-colors duration-300 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[63px] bg-dark-950 z-40">
            {/* Jewel accent line */}
            <div className="divider-jewel" />
            <div className="flex flex-col p-6 space-y-6">
              <Link
                href="/"
                className="font-serif text-2xl text-white hover:text-gold-400 transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-serif text-2xl text-white hover:text-gold-400 transition-colors duration-300 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
