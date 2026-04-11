'use client'

import { useState, useEffect } from 'react'

/**
 * PasswordGate — wraps content behind a simple password prompt.
 * Once unlocked, the session is remembered in sessionStorage so
 * the user doesn't have to re-enter it on every navigation.
 */

export default function PasswordGate({
  slug,
  password,
  children,
}: {
  slug: string
  password: string
  children: React.ReactNode
}) {
  const storageKey = `af-unlocked-${slug}`
  const [unlocked, setUnlocked] = useState(false)
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(storageKey) === '1') {
      setUnlocked(true)
    }
  }, [storageKey])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (value === password) {
      sessionStorage.setItem(storageKey, '1')
      setUnlocked(true)
    } else {
      setError(true)
      setValue('')
    }
  }

  if (unlocked) return <>{children}</>

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="glass-panel leadline rounded-2xl p-10 max-w-sm w-full text-center"
      >
        <div className="mb-6">
          <svg
            className="w-10 h-10 mx-auto text-gold-500 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
          <h2 className="font-serif text-xl text-white mb-2">This article is locked</h2>
          <p className="text-dark-400 text-sm">Enter the password to continue.</p>
        </div>

        <input
          type="password"
          value={value}
          onChange={(e) => { setValue(e.target.value); setError(false) }}
          placeholder="Password"
          autoFocus
          className="w-full bg-dark-800 border border-dark-700 rounded-lg px-4 py-3 text-center text-white placeholder-dark-500 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-colors"
        />

        {error && (
          <p className="text-red-400 text-sm mt-3">Wrong password. Try again.</p>
        )}

        <button
          type="submit"
          className="mt-4 w-full bg-gold-500/15 border border-gold-500/30 text-gold-400 hover:bg-gold-500/25 hover:text-gold-300 rounded-lg px-4 py-3 text-sm font-medium transition-colors"
        >
          Unlock
        </button>
      </form>
    </div>
  )
}
