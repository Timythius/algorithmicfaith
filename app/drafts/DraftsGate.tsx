'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import type { Post } from '@/lib/posts'
import PostCard from '@/components/PostCard'

const STORAGE_KEY = 'af-drafts-unlocked'

export default function DraftsGate({ posts }: { posts: Post[] }) {
  const [unlocked, setUnlocked] = useState(false)
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === '1') {
      setUnlocked(true)
    }
  }, [])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (value === '777') {
      sessionStorage.setItem(STORAGE_KEY, '1')
      setUnlocked(true)
      // Also unlock individual posts so they don't double-prompt
      posts.forEach((p) => sessionStorage.setItem(`af-unlocked-${p.slug}`, '1'))
    } else {
      setError(true)
      setValue('')
    }
  }

  if (!unlocked) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center px-6">
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
            <h2 className="font-serif text-xl text-white mb-2">Drafts</h2>
            <p className="text-dark-400 text-sm">
              This area is for friends reviewing work before it goes live.
            </p>
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

      {/* Draft Posts */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {posts.length > 0 ? (
          <div className="space-y-8">
            {posts.map((post, index) => (
              <PostCard key={post.slug} post={post} featured={index === 0} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 glass-panel leadline rounded-2xl">
            <p className="text-dark-400">No drafts at the moment.</p>
          </div>
        )}

        <div className="mt-12">
          <Link
            href="/"
            className="inline-flex items-center text-gold-400 hover:text-gold-300 font-medium transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}
