'use client'

/**
 * DropCap — small inline SVG that renders a single illuminated initial
 * letter inside a stained-glass square: dark caming border, jewel
 * pattern background, cream letter on top.
 *
 * Used at the start of the Hero title for a manuscript feel.
 */

import { useId } from 'react'
import GlassPatterns, { patternUrl, type PaletteName } from './GlassPatterns'

type Props = {
  letter: string
  size?: number
  palette?: PaletteName
}

export default function DropCap({ letter, size = 88, palette = 'sapphire' }: Props) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '')
  const url = (n: PaletteName) => patternUrl(uid, n)
  const CAMING = '#020408'

  return (
    <span
      className="drop-cap inline-block align-middle mr-1"
      style={{ width: size, height: size }}
      aria-hidden
    >
      <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <GlassPatterns uid={uid} />
        </defs>
        {/* outer stone frame */}
        <rect x="2" y="2" width="96" height="96" rx="3" fill="#0a0705" stroke={CAMING} strokeWidth="3" />
        {/* glass background */}
        <rect x="6" y="6" width="88" height="88" fill={url(palette)} stroke={CAMING} strokeWidth="2" />
        {/* corner accent diamonds */}
        <polygon points="50,10 60,18 50,26 40,18" fill={url('yellow')} stroke={CAMING} strokeWidth="1" />
        <polygon points="50,74 60,82 50,90 40,82" fill={url('ruby')} stroke={CAMING} strokeWidth="1" />
        <polygon points="14,50 22,42 30,50 22,58" fill={url('emerald')} stroke={CAMING} strokeWidth="1" />
        <polygon points="70,50 78,42 86,50 78,58" fill={url('rose')} stroke={CAMING} strokeWidth="1" />
        {/* inner darkened plate so the letter has contrast */}
        <rect x="22" y="22" width="56" height="56" fill="#020408" opacity="0.55" stroke={CAMING} strokeWidth="1.5" />
        {/* the letter */}
        <text
          x="50"
          y="64"
          textAnchor="middle"
          fontSize="62"
          fontFamily="var(--font-cinzel), Georgia, serif"
          fontWeight="700"
          fill="#fce9a7"
          stroke={CAMING}
          strokeWidth="0.6"
          style={{ paintOrder: 'stroke fill' }}
        >
          {letter}
        </text>
      </svg>
    </span>
  )
}
