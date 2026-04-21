import { getPublicPosts } from '@/lib/posts'
import BlogFilter from '@/components/BlogFilter'
import JsonLd from '@/components/JsonLd'

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')

export const metadata = {
  title: 'Blog — Faith Creators, Algorithms & AI Insights',
  description: 'Creator spotlights and honest takes on faith in the algorithm age. Articles about faith creators on YouTube and TikTok, and AI tools for the faith community.',
  alternates: { canonical: `${SITE_URL}/blog` },
}

export default function BlogPage() {
  const posts = getPublicPosts()

  const blogPostingItems = posts.map((post, index) => ({
    '@type': 'ListItem' as const,
    position: index + 1,
    url: `${SITE_URL}/blog/${post.slug}`,
    name: post.title,
  }))

  return (
    <div className="min-h-screen bg-dark-950">
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Algorithmic Faith Blog',
        description: 'Creator spotlights and honest takes on faith in the algorithm age.',
        url: `${SITE_URL}/blog`,
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: blogPostingItems,
        },
      }} />
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
        ],
      }} />

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
