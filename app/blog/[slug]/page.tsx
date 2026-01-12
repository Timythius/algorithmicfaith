import { notFound } from 'next/navigation'
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
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-gray-500">
          <time dateTime={post.date}>
            {format(new Date(post.date), 'MMMM d, yyyy')}
          </time>
          {post.tags && (
            <div className="flex gap-2">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Featured Video */}
      {post.videoUrl && (
        <div className="mb-8">
          <VideoEmbed url={post.videoUrl} />
        </div>
      )}

      {/* Featured Image */}
      {post.coverImage && (
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-auto rounded-lg shadow-lg mb-8"
        />
      )}

      {/* Content */}
      <div
        className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-primary-600"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Article Link */}
      {post.articleUrl && (
        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-500 mb-2">Original article:</p>
          <a
            href={post.articleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:underline"
          >
            {post.articleUrl}
          </a>
        </div>
      )}
    </article>
  )
}
