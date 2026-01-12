import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'

export default function Home() {
  const posts = getAllPosts()

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Algorithmic Faith
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Exploring ideas at the intersection of technology, philosophy, and human understanding
        </p>
      </section>

      {/* Featured Posts */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Posts</h2>
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <p className="text-gray-500 mb-4">No posts yet. Start writing!</p>
            <p className="text-sm text-gray-400">
              Add markdown files to <code className="bg-gray-100 px-2 py-1 rounded">content/posts/</code>
            </p>
          </div>
        )}
      </section>
    </div>
  )
}
