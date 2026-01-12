'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-primary-600 transition">
            Algorithmic Faith
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-600 hover:text-primary-600 transition">
              Home
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-primary-600 transition">
              Blog
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-primary-600 transition">
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-gray-600 hover:text-primary-600 transition" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-primary-600 transition" onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-primary-600 transition" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
