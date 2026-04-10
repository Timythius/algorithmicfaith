'use client'

import { useState } from 'react'
import PostCard from './PostCard'
import { Post } from '@/lib/posts'

const platformFilters = ['All', 'YouTube', 'TikTok', 'Worship', 'Sermons', 'Devotionals', 'AI & Tech']

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
        {platformFilters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              activeFilter === filter
                ? 'bg-gold-500 text-dark-950'
                : 'bg-dark-900 text-dark-300 border border-dark-700 hover:border-gold-500 hover:text-white'
            }`}
          >
            {filter}
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
        <div className="text-center py-16 bg-dark-900/50 border border-dark-800 rounded-2xl">
          <p className="text-dark-400">No posts in this category yet.</p>
        </div>
      )}
    </>
  )
}
