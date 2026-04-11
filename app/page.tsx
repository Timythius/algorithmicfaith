import { getPublicPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import Hero from '@/components/Hero'
// import Newsletter from '@/components/Newsletter' // hidden until signup is wired up
import RoseDivider from '@/components/RoseDivider'

export default function Home() {
  const posts = getPublicPosts()

  return (
    <>
      {/* Hero Section — cathedral wall */}
      <Hero />

      <RoseDivider />

      {/* Latest Posts Section */}
      <section className="bg-dark-950 py-16">
        <div className="max-w-5xl mx-auto px-6">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
              Latest Articles
            </h2>
            <a
              href="/blog"
              className="text-gold-400 hover:text-gold-300 text-sm font-medium flex items-center gap-2 transition-colors"
            >
              View all
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          {/* Jewel divider */}
          <div className="divider-jewel mb-12" />

          {/* Posts Grid */}
          {posts.length > 0 ? (
            <div className="space-y-8">
              {posts.slice(0, 5).map((post, index) => (
                <PostCard
                  key={post.slug}
                  post={post}
                  featured={index === 0}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 glass-panel leadline rounded-2xl">
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
              <p className="text-dark-400 mb-2">No articles yet</p>
              <p className="text-sm text-dark-500">
                Add markdown files to{' '}
                <code className="bg-dark-800 px-2 py-1 rounded text-gold-400">
                  content/posts/
                </code>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section — hidden until signup is wired up */}
      {/* <Newsletter /> */}
    </>
  )
}
