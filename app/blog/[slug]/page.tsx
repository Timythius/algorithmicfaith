import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { format } from 'date-fns'
import VideoEmbed from '@/components/VideoEmbed'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) return { title: 'Post Not Found' }

  return {
    title: `${post.title} | Algorithmic Faith`,
    description: post.excerpt,
  }
}

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Back Navigation */}
      <div className="bg-dark-900/50 border-b border-dark-800">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center text-dark-400 hover:text-gold-400 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Back to articles
          </Link>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-12">
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="bg-gold-500/10 text-gold-400 px-3 py-1 rounded-full text-xs font-medium border border-gold-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-dark-400">
            <time dateTime={post.date} className="flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </time>
          </div>

          {/* Jewel divider */}
          <div className="divider-jewel mt-8" />
        </header>

        {/* Featured Video */}
        {post.videoUrl && (
          <div className="mb-12">
            <VideoEmbed url={post.videoUrl} />
          </div>
        )}

        {/* Featured Image */}
        {post.coverImage && (
          <div className="mb-12 rounded-2xl overflow-hidden leadline">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-auto"
            />
          </div>
        )}

        {/* Content */}
        <div
          className="prose prose-lg prose-invert max-w-none
            prose-headings:font-serif prose-headings:text-white prose-headings:font-bold
            prose-p:text-dark-300 prose-p:leading-relaxed
            prose-a:text-gold-400 prose-a:no-underline hover:prose-a:text-gold-300
            prose-strong:text-white
            prose-code:text-gold-400 prose-code:bg-dark-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
            prose-blockquote:border-l-gold-500 prose-blockquote:text-dark-400
            prose-img:rounded-xl prose-img:border-2 prose-img:border-dark-700
            prose-hr:border-dark-700
            prose-li:text-dark-300
            prose-ul:text-dark-300
            prose-ol:text-dark-300"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Article Link */}
        {post.articleUrl && (
          <div className="mt-12 p-6 glass-panel leadline rounded-xl">
            <p className="text-sm text-dark-500 mb-2">Original article:</p>
            <a
              href={post.articleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 hover:text-gold-300 transition-colors break-all"
            >
              {post.articleUrl}
            </a>
          </div>
        )}

        {/* Back to Blog */}
        <div className="mt-16 pt-8 border-t border-dark-800">
          <Link
            href="/blog"
            className="inline-flex items-center text-gold-400 hover:text-gold-300 font-medium transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Back to all articles
          </Link>
        </div>
      </article>
    </div>
  )
}
