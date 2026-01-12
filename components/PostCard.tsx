import Link from 'next/link'
import { format } from 'date-fns'
import { Post } from '@/lib/posts'

type Props = {
  post: Post
}

export default function PostCard({ post }: Props) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      {post.coverImage && (
        <Link href={`/blog/${post.slug}`}>
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-48 object-cover"
          />
        </Link>
      )}

      <div className="p-6">
        {post.tags && post.tags.length > 0 && (
          <div className="flex gap-2 mb-3">
            {post.tags.slice(0, 2).map((tag: string) => (
              <span
                key={tag}
                className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <Link href={`/blog/${post.slug}`}>
          <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-primary-600 transition">
            {post.title}
          </h2>
        </Link>

        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <time className="text-sm text-gray-500" dateTime={post.date}>
            {format(new Date(post.date), 'MMM d, yyyy')}
          </time>
          <Link
            href={`/blog/${post.slug}`}
            className="text-primary-600 hover:text-primary-700 text-sm font-medium"
          >
            Read more &rarr;
          </Link>
        </div>
      </div>
    </article>
  )
}
