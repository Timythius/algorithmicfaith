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
  /** Per-lancet heights (left → right). Defaults to desktop sizes. */
  heights?: number[]
  /** Width of each lancet panel. Defaults to desktop sizing (110). */
  panelWidth?: number
  /** Optional className override for the row container (gap, etc.). */
  className?: string
  /**
   * When true, each lancet stretches to fill an equal share of the row's
   * width (flex-1) instead of using fixed pixel widths. The aspect ratio
   * of each panel is preserved via the SVG viewBox.
   */
  fluid?: boolean
}

const DEFAULT_HEIGHTS = [380, 440, 500, 440, 380]

// Order: sapphire → ruby → ROSE (focal center) → emerald → yellow (right end).
// The right-end yellow is rendered with reduced main weight so it doesn't
// flood the row with gold.
const PALETTES: PaletteName[] = ['sapphire', 'ruby', 'rose', 'emerald', 'yellow']

export default function LancetRow({
  posts,
  heights = DEFAULT_HEIGHTS,
  panelWidth = 110,
  className = 'lancet-row flex items-end justify-center gap-2 sm:gap-3 md:gap-5',
  fluid = false,
}: Props) {
  if (!posts || posts.length === 0) return null
  const five = posts.slice(0, 5)
  while (five.length < 5) five.push(five[five.length - 1])

  return (
    <div className={className}>
      {five.map((post, i) => {
        const panel = (
          <LancetPanel
            post={post}
            height={heights[i]}
            width={panelWidth}
            palette={PALETTES[i]}
            // The right-end yellow is muted so it doesn't out-shout the row.
            mainWeight={PALETTES[i] === 'yellow' ? 'reduced' : 'full'}
            fluid={fluid}
          />
        )
        if (fluid) {
          return (
            <div key={`${post.slug}-${i}`} className="flex-1 min-w-0 flex items-end">
              {panel}
            </div>
          )
        }
        return <div key={`${post.slug}-${i}`}>{panel}</div>
      })}
    </div>
  )
}
