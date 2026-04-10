import { getAllPosts } from '@/lib/posts'
import BlogFilter from '@/components/BlogFilter'

export const metadata = {
  title: 'Blog | Algorithmic Faith',
  description: 'Faith creators, algorithm insights, and the tools changing the game',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Page Header */}
      <div className="bg-gradient-to-b from-dark-900 to-dark-950 py-16 border-b border-dark-800">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Blog
          </h1>
          <p className="text-dark-400 text-lg">
            Creator spotlights, algorithm breakdowns, and everything in between.
          </p>
        </div>
      </div>

      {/* Posts List with Filters */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <BlogFilter posts={posts} />
      </div>
    </div>
  )
}
