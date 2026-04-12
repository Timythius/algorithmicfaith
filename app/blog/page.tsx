import { getPublicPosts } from '@/lib/posts'
import BlogFilter from '@/components/BlogFilter'

export const metadata = {
  title: 'Blog',
  description: 'Creator spotlights and honest takes on faith in the algorithm age',
}

export default function BlogPage() {
  const posts = getPublicPosts()

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Page Header */}
      <div className="relative py-16 border-b border-dark-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-950" />
        {/* Subtle stained glass light */}
        <div className="absolute top-0 left-1/3 w-48 h-full opacity-[0.03] blur-3xl" style={{ background: 'linear-gradient(180deg, #2563eb 0%, transparent 60%)' }} />
        <div className="absolute top-0 right-1/3 w-48 h-full opacity-[0.03] blur-3xl" style={{ background: 'linear-gradient(180deg, #e11d48 0%, transparent 60%)' }} />

        <div className="relative max-w-5xl mx-auto px-6">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Blog
          </h1>
          <p className="text-dark-400 text-lg">
            Creator spotlights, algorithm breakdowns, and everything in between.
          </p>
          {/* Jewel divider */}
          <div className="divider-jewel mt-8" />
        </div>
      </div>

      {/* Posts List with Filters */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <BlogFilter posts={posts} />
      </div>
    </div>
  )
}
