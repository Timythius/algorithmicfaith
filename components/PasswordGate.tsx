'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

const MAX_VIEW_MS = 15 * 60 * 1000   // 15 minutes total
const IDLE_MS = 5 * 60 * 1000        // 5 minutes idle

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
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const maxTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const lock = useCallback(() => {
    sessionStorage.removeItem(storageKey)
    setUnlocked(false)
    if (idleTimer.current) clearTimeout(idleTimer.current)
    if (maxTimer.current) clearTimeout(maxTimer.current)
  }, [storageKey])

  const resetIdle = useCallback(() => {
    if (idleTimer.current) clearTimeout(idleTimer.current)
    idleTimer.current = setTimeout(lock, IDLE_MS)
  }, [lock])

  // Check session on mount
  useEffect(() => {
    if (sessionStorage.getItem(storageKey) === '1') {
      setUnlocked(true)
    }
  }, [storageKey])

  // Start timers when unlocked
  useEffect(() => {
    if (!unlocked) return

    maxTimer.current = setTimeout(lock, MAX_VIEW_MS)

    resetIdle()
    const events = ['mousemove', 'keydown', 'scroll', 'touchstart', 'click']
    events.forEach((e) => window.addEventListener(e, resetIdle))

    return () => {
      if (maxTimer.current) clearTimeout(maxTimer.current)
      if (idleTimer.current) clearTimeout(idleTimer.current)
      events.forEach((e) => window.removeEventListener(e, resetIdle))
    }
  }, [unlocked, lock, resetIdle])

  // Lock on page leave, tab switch, or close
  useEffect(() => {
    if (!unlocked) return

    const handleVisibility = () => {
      if (document.visibilityState === 'hidden') lock()
    }
    const handleBeforeUnload = () => lock()

    document.addEventListener('visibilitychange', handleVisibility)
    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility)
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [unlocked, lock])

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

  if (unlocked) {
    return (
      <>
        {children}
        {/* Floating lock button */}
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={lock}
            className="flex items-center gap-2 bg-dark-900/90 backdrop-blur-sm border border-dark-700 hover:border-red-500/40 text-dark-400 hover:text-red-400 rounded-full px-4 py-2.5 text-sm transition-colors shadow-lg"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
            Lock
          </button>
        </div>
      </>
    )
  }

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
