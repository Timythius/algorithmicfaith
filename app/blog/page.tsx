import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'

export const metadata = {
  title: 'Blog | Algorithmic Faith',
  description: 'All blog posts exploring technology, philosophy, and human understanding',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Page Header */}
      <div className="bg-gradient-to-b from-dark-900 to-dark-950 py-16 border-b border-dark-800">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            All Articles
          </h1>
          <p className="text-dark-400 text-lg">
            Thoughts on technology, philosophy, and the questions that matter.
          </p>
        </div>
      </div>

      {/* Posts List */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {posts.length > 0 ? (
          <div className="space-y-8">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-dark-900/50 border border-dark-800 rounded-2xl">
            <div className="mb-4">
              <svg
                className="w-12 h-12 mx-auto text-dark-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
            <p className="text-dark-400">No articles yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}
