'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import type { Post } from '@/lib/posts'
import PostCard from '@/components/PostCard'

const STORAGE_KEY = 'af-drafts-slugs'
const MAX_VIEW_MS = 15 * 60 * 1000   // 15 minutes total
const IDLE_MS = 5 * 60 * 1000        // 5 minutes idle

export default function DraftsGate({ posts }: { posts: Post[] }) {
  const [unlockedSlugs, setUnlockedSlugs] = useState<string[]>([])
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const maxTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const lock = useCallback(() => {
    setUnlockedSlugs((prev) => {
      prev.forEach((s) => sessionStorage.removeItem(`af-unlocked-${s}`))
      return []
    })
    sessionStorage.removeItem(STORAGE_KEY)
    if (idleTimer.current) clearTimeout(idleTimer.current)
    if (maxTimer.current) clearTimeout(maxTimer.current)
  }, [])

  const resetIdle = useCallback(() => {
    if (idleTimer.current) clearTimeout(idleTimer.current)
    idleTimer.current = setTimeout(lock, IDLE_MS)
  }, [lock])

  // Start timers when posts are unlocked
  useEffect(() => {
    if (unlockedSlugs.length === 0) return

    // 15-minute hard limit
    maxTimer.current = setTimeout(lock, MAX_VIEW_MS)

    // 5-minute idle — reset on any interaction
    resetIdle()
    const events = ['mousemove', 'keydown', 'scroll', 'touchstart', 'click']
    events.forEach((e) => window.addEventListener(e, resetIdle))

    return () => {
      if (maxTimer.current) clearTimeout(maxTimer.current)
      if (idleTimer.current) clearTimeout(idleTimer.current)
      events.forEach((e) => window.removeEventListener(e, resetIdle))
    }
  }, [unlockedSlugs.length, lock, resetIdle])

  // Lock on page leave, tab switch, or close
  useEffect(() => {
    if (unlockedSlugs.length === 0) return

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
  }, [unlockedSlugs.length, lock])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const matched = posts.filter((p) => p.password === value)
    if (matched.length > 0) {
      const combined = [...unlockedSlugs, ...matched.map((p) => p.slug)]
      const newSlugs = combined.filter((s, i) => combined.indexOf(s) === i)
      setUnlockedSlugs(newSlugs)
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(newSlugs))
      matched.forEach((p) => sessionStorage.setItem(`af-unlocked-${p.slug}`, '1'))
      setValue('')
      setError(false)
    } else {
      setError(true)
      setValue('')
    }
  }

  const visiblePosts = posts.filter((p) => unlockedSlugs.includes(p.slug))

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Page Header */}
      <div className="relative py-16 border-b border-dark-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-950" />
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-gold-500/15 text-gold-400 px-3 py-1 rounded-full text-xs font-medium border border-gold-500/20">
              Private
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Drafts
          </h1>
          <p className="text-dark-400 text-lg">
            Work in progress — for friends&#39; eyes only.
          </p>
          <div className="divider-jewel mt-8" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Password form */}
        <form
          onSubmit={handleSubmit}
          className="glass-panel leadline rounded-2xl p-8 max-w-sm mx-auto text-center mb-12"
        >
          <div className="mb-5">
            <svg
              className="w-9 h-9 mx-auto text-gold-500 mb-3"
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
            <p className="text-dark-400 text-sm">
              {visiblePosts.length === 0
                ? 'Enter your password to see the article Tim shared with you.'
                : 'Enter another password to unlock more articles.'}
            </p>
          </div>

          <input
            type="password"
            value={value}
            onChange={(e) => { setValue(e.target.value); setError(false) }}
            placeholder="Password"
            autoFocus={visiblePosts.length === 0}
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

        {/* Unlocked posts */}
        {visiblePosts.length > 0 && (
          <div className="space-y-8">
            {visiblePosts.map((post, index) => (
              <PostCard key={post.slug} post={post} featured={index === 0} />
            ))}
          </div>
        )}

        <div className="mt-12 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center text-gold-400 hover:text-gold-300 font-medium transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to home
          </Link>

          <button
            onClick={lock}
            disabled={visiblePosts.length === 0}
            className="inline-flex items-center text-dark-500 hover:text-red-400 text-sm transition-colors disabled:opacity-40 disabled:hover:text-dark-500 disabled:cursor-not-allowed"
          >
            <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
            Lock &amp; exit
          </button>
        </div>
      </div>
    </div>
  )
}
