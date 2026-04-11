import Link from 'next/link'
import { format } from 'date-fns'
import { Post } from '@/lib/posts'

type Props = {
  post: Post
  featured?: boolean
}

const tagColors: Record<string, string> = {
  worship: 'bg-gold-500/10 text-gold-400 border-gold-500/20',
  sermons: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  devotionals: 'bg-amethyst-500/10 text-amethyst-300 border-amethyst-500/20',
}

function getTagColor(tag: string) {
  const lower = tag.toLowerCase()
  for (const [key, value] of Object.entries(tagColors)) {
    if (lower.includes(key)) return value
  }
  return 'bg-gold-500/10 text-gold-400 border-gold-500/20'
}

// Platform pills — separate from tags so "YouTube" reads as *where it
// lives* and "worship" reads as *what it's about*. Keyed case-insensitively.
const platformColors: Record<string, string> = {
  youtube: 'bg-ruby-500/10 text-ruby-400 border-ruby-500/20',
  podcast: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  tiktok: 'bg-[#69C9D0]/10 text-[#69C9D0] border-[#69C9D0]/20',
  instagram: 'bg-amethyst-500/10 text-amethyst-400 border-amethyst-500/20',
}

function getPlatformColor(platform: string) {
  return (
    platformColors[platform.toLowerCase()] ||
    'bg-dark-800/60 text-dark-300 border-dark-700'
  )
}

export default function PostCard({ post, featured = false }: Props) {
  return (
    <article
      className={`group stained-card bg-dark-900/50 leadline rounded-2xl overflow-hidden hover:border-dark-600 transition-all duration-300 ${
        featured ? 'md:flex' : ''
      }`}
    >
      {/* Image Section */}
      {post.coverImage && (
        <Link
          href={`/blog/${post.slug}`}
          className={`block relative overflow-hidden ${
            featured ? 'md:w-1/2' : ''
          }`}
        >
          <div className="aspect-video md:aspect-auto md:h-full">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-60" />
        </Link>
      )}

      {/* Content Section */}
      <div
        className={`p-6 md:p-8 flex flex-col justify-center ${
          featured ? 'md:w-1/2' : ''
        }`}
      >
        {/* Platforms — where the creator lives */}
        {post.platforms && post.platforms.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {post.platforms.map((platform: string) => (
              <span
                key={platform}
                className={`px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider border ${getPlatformColor(platform)}`}
              >
                {platform}
              </span>
            ))}
          </div>
        )}

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag: string) => (
              <span
                key={tag}
                className={`px-3 py-1 rounded-full text-xs font-medium border ${getTagColor(tag)}`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Date */}
        <time
          className="text-dark-400 text-sm mb-3 block"
          dateTime={post.date}
        >
          {format(new Date(post.date), 'MMMM d, yyyy')}
        </time>

        {/* Title */}
        <Link href={`/blog/${post.slug}`}>
          <h2
            className={`font-serif font-bold text-white mb-4 group-hover:text-gold-400 transition-colors duration-300 ${
              featured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
            }`}
          >
            {post.title}
          </h2>
        </Link>

        {/* Excerpt */}
        <p className="text-dark-300 mb-6 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Read More Link */}
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-gold-400 hover:text-gold-300 text-sm font-medium group/link"
        >
          Read article
          <svg
            className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform"
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
        </Link>
      </div>
    </article>
  )
}
