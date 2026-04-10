/**
 * LancetRow — five lancets in the classic Chartres arrangement
 * (short, medium, tall, medium, short). Each lancet gets its own
 * dominant color from the brighter Sainte-Chapelle palette.
 */

import type { Post } from '@/lib/posts'
import LancetPanel from './LancetPanel'
import type { PaletteName } from './GlassPatterns'

type Props = {
  posts: Post[]
}

const HEIGHTS = [380, 440, 500, 440, 380]

// Order: sapphire → ruby → ROSE (focal center) → emerald → yellow (right end).
// The right-end yellow is rendered with reduced main weight so it doesn't
// flood the row with gold.
const PALETTES: PaletteName[] = ['sapphire', 'ruby', 'rose', 'emerald', 'yellow']

export default function LancetRow({ posts }: Props) {
  if (!posts || posts.length === 0) return null
  const five = posts.slice(0, 5)
  while (five.length < 5) five.push(five[five.length - 1])

  return (
    <div className="lancet-row flex items-end justify-center gap-2 sm:gap-3 md:gap-5">
      {five.map((post, i) => (
        <LancetPanel
          key={`${post.slug}-${i}`}
          post={post}
          height={HEIGHTS[i]}
          palette={PALETTES[i]}
          // The right-end yellow is muted so it doesn't out-shout the row.
          mainWeight={PALETTES[i] === 'yellow' ? 'reduced' : 'full'}
        />
      ))}
    </div>
  )
}
