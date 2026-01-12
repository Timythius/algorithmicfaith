import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'

export const metadata = {
  title: 'Blog | Algorithmic Faith',
  description: 'All blog posts',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">All Posts</h1>

      {posts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <p className="text-gray-500">No posts yet.</p>
        </div>
      )}
    </div>
  )
}
