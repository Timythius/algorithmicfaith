'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="bg-dark-950/95 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-dark-800/50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-semibold text-white tracking-tight hover:text-gold-400 transition-colors duration-300"
          >
            Algorithmic Faith
          </Link>

          {/* Desktop Navigation - Ultra Minimal */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/blog"
              className="text-dark-300 hover:text-white transition-colors duration-300 text-sm font-medium"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-dark-300 hover:text-white transition-colors duration-300 text-sm font-medium"
            >
              About
            </Link>

            {/* Search Icon */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-dark-300 hover:text-white transition-colors duration-300 p-2"
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
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

        {/* Search Bar - Expandable */}
        {isSearchOpen && (
          <div className="hidden md:block mt-4 pb-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full bg-dark-900 border border-dark-700 rounded-lg px-4 py-3 text-white placeholder-dark-400 focus:outline-none focus:border-gold-500 transition-colors"
                autoFocus
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-400 hover:text-white"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Mobile Navigation - Full Screen Overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[65px] bg-dark-950 z-40">
            <div className="flex flex-col p-6 space-y-6">
              {/* Mobile Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full bg-dark-900 border border-dark-700 rounded-lg px-4 py-3 text-white placeholder-dark-400 focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>

              <Link
                href="/"
                className="text-2xl text-white hover:text-gold-400 transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="text-2xl text-white hover:text-gold-400 transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="text-2xl text-white hover:text-gold-400 transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
