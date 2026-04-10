'use client'

import { useState } from 'react'
import PostCard from './PostCard'
import { Post } from '@/lib/posts'

const categoryFilters = [
  { label: 'All', color: 'bg-gold-500 text-dark-950' },
  { label: 'Creator Spotlights', color: 'bg-ruby-500 text-white' },
  { label: 'Worship', color: 'bg-gold-500 text-dark-950' },
  { label: 'Sermons', color: 'bg-emerald-500 text-white' },
  { label: 'Devotionals', color: 'bg-amethyst-600 text-white' },
]

export default function BlogFilter({ posts }: { posts: Post[] }) {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredPosts =
    activeFilter === 'All'
      ? posts
      : posts.filter(
          (post) =>
            post.category === activeFilter ||
            post.tags?.includes(activeFilter.toLowerCase())
        )

  return (
    <>
      {/* Filter Bar */}
      <div className="flex flex-wrap gap-3 mb-10">
        {categoryFilters.map((filter) => (
          <button
            key={filter.label}
            onClick={() => setActiveFilter(filter.label)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === filter.label
                ? `${filter.color} shadow-lg`
                : 'bg-dark-900 text-dark-300 border border-dark-700 hover:border-gold-500/50 hover:text-white'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Posts */}
      {filteredPosts.length > 0 ? (
        <div className="space-y-8">
          {filteredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 glass-panel leadline rounded-2xl">
          <p className="text-dark-400">No posts in this category yet.</p>
        </div>
      )}
    </>
  )
}
