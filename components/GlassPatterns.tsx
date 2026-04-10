/**
 * GlassPatterns — shared SVG <pattern> defs used by RoseWindow and
 * LancetPanel so the glass cells stay consistent across the site.
 *
 * 6 patterns, modeled on the brighter Sainte-Chapelle palette:
 *   - sapphire   deep cobalt → bright royal blue
 *   - ruby       deep wine   → vivid carmine
 *   - emerald    forest      → bright green
 *   - yellow     warm amber  → silver-stain gold
 *   - rose       mulberry    → soft rose pink
 *   - mixed      multi-color, used in the central medallion
 *
 * Every cell tile contains a tiny cream/bone highlight (#fce9a7) so
 * the glass reads "sun-flooded" — small bright pixels scattered through
 * the field, never blowing out into pastels.
 *
 * Pattern ids are namespaced by `uid` so multiple instances on the page
 * (loader + hero) don't collide.
 */

export const PALETTE_NAMES = ['sapphire', 'ruby', 'emerald', 'yellow', 'rose', 'mixed'] as const
export type PaletteName = typeof PALETTE_NAMES[number]

export function patternUrl(uid: string, name: PaletteName) {
  return `url(#${uid}-${name})`
}

const CAMING = '#020408'
const HIGHLIGHT = '#fce9a7' // bone/cream — bright pixel
const BEAD = '#f5d168'      // golden bead

type Props = { uid: string }

/**
 * Renders the 6 patterns inside an SVG <defs>. Must be placed inside <defs>.
 */
export default function GlassPatterns({ uid }: Props) {
  return (
    <>
      {/* SAPPHIRE */}
      <pattern
        id={`${uid}-sapphire`}
        width="22"
        height="22"
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(15)"
      >
        <rect width="22" height="22" fill="#14358a" />
        <polygon points="11,1 21,11 11,21 1,11" fill="#2d5cc0" />
        <polygon points="11,5 17,11 11,17 5,11" fill="#5b8de6" />
        <rect x="15" y="2" width="4" height="4" fill={HIGHLIGHT} opacity="0.85" />
        <circle cx="11" cy="11" r="1.6" fill={BEAD} />
        <path d="M11 1L1 11M11 1L21 11M11 21L1 11M11 21L21 11" stroke={CAMING} strokeWidth="0.9" />
        <rect width="22" height="22" fill="none" stroke={CAMING} strokeWidth="0.7" />
      </pattern>

      {/* RUBY */}
      <pattern
        id={`${uid}-ruby`}
        width="22"
        height="22"
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(-12)"
      >
        <rect width="22" height="22" fill="#5c0f1f" />
        <polygon points="11,1 21,11 11,21 1,11" fill="#95182d" />
        <polygon points="11,5 17,11 11,17 5,11" fill="#d63b54" />
        <rect x="2" y="15" width="4" height="4" fill={HIGHLIGHT} opacity="0.85" />
        <circle cx="11" cy="11" r="1.6" fill={BEAD} />
        <path d="M11 1L1 11M11 1L21 11M11 21L1 11M11 21L21 11" stroke={CAMING} strokeWidth="0.9" />
        <rect width="22" height="22" fill="none" stroke={CAMING} strokeWidth="0.7" />
      </pattern>

      {/* EMERALD */}
      <pattern
        id={`${uid}-emerald`}
        width="22"
        height="22"
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(8)"
      >
        <rect width="22" height="22" fill="#0e3a1c" />
        <polygon points="11,1 21,11 11,21 1,11" fill="#1a6b34" />
        <polygon points="11,5 17,11 11,17 5,11" fill="#3fa05a" />
        <rect x="15" y="15" width="4" height="4" fill={HIGHLIGHT} opacity="0.85" />
        <circle cx="11" cy="11" r="1.6" fill={BEAD} />
        <path d="M11 1L1 11M11 1L21 11M11 21L1 11M11 21L21 11" stroke={CAMING} strokeWidth="0.9" />
        <rect width="22" height="22" fill="none" stroke={CAMING} strokeWidth="0.7" />
      </pattern>

      {/* YELLOW (warm amber → silver-stain gold) */}
      <pattern
        id={`${uid}-yellow`}
        width="22"
        height="22"
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(-8)"
      >
        <rect width="22" height="22" fill="#6b4a08" />
        <polygon points="11,1 21,11 11,21 1,11" fill="#c89436" />
        <polygon points="11,5 17,11 11,17 5,11" fill="#f5d168" />
        <rect x="2" y="2" width="4" height="4" fill={HIGHLIGHT} opacity="0.95" />
        <circle cx="11" cy="11" r="1.6" fill="#fff5cc" />
        <path d="M11 1L1 11M11 1L21 11M11 21L1 11M11 21L21 11" stroke={CAMING} strokeWidth="0.9" />
        <rect width="22" height="22" fill="none" stroke={CAMING} strokeWidth="0.7" />
      </pattern>

      {/* ROSE PINK (manganese-style soft rose) */}
      <pattern
        id={`${uid}-rose`}
        width="22"
        height="22"
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(20)"
      >
        <rect width="22" height="22" fill="#5e1230" />
        <polygon points="11,1 21,11 11,21 1,11" fill="#a02a55" />
        <polygon points="11,5 17,11 11,17 5,11" fill="#e88aa8" />
        <rect x="15" y="2" width="4" height="4" fill={HIGHLIGHT} opacity="0.9" />
        <circle cx="11" cy="11" r="1.6" fill={BEAD} />
        <path d="M11 1L1 11M11 1L21 11M11 21L1 11M11 21L21 11" stroke={CAMING} strokeWidth="0.9" />
        <rect width="22" height="22" fill="none" stroke={CAMING} strokeWidth="0.7" />
      </pattern>

      {/* MIXED — used in central medallions; rotates through 4 colors per tile */}
      <pattern
        id={`${uid}-mixed`}
        width="22"
        height="22"
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(30)"
      >
        <rect width="22" height="22" fill="#14358a" />
        <polygon points="11,0 22,11 11,22 0,11" fill="#5c0f1f" />
        <polygon points="11,4 18,11 11,18 4,11" fill="#1a6b34" />
        <rect x="2" y="2" width="4" height="4" fill={HIGHLIGHT} opacity="0.95" />
        <circle cx="11" cy="11" r="2" fill="#f5d168" />
        <path d="M11 0L0 11M11 0L22 11M11 22L0 11M11 22L22 11" stroke={CAMING} strokeWidth="0.9" />
      </pattern>
    </>
  )
}
