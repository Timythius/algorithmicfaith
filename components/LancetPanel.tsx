'use client'

/**
 * LancetPanel — pointed-arch stained-glass window in the brighter
 * Sainte-Chapelle palette. Each panel takes a `palette` prop that
 * decides its dominant glass color; the other colors appear as accents
 * in the small ornament cells, the central oval and the base band.
 *
 * The lancets are the site's primary navigation: each one is a Link
 * to a top-level page (Home, Blog, Creators, Resources, About). The
 * label sits outside the lancet on the dark stone wall below.
 */

import { useId } from 'react'
import Link from 'next/link'
import GlassPatterns, { patternUrl, type PaletteName } from './GlassPatterns'

const CAMING = '#020408'

type Props = {
  /** Visible label below the lancet (e.g. "Creators"). */
  title: string
  /** Destination href (e.g. "/creators"). */
  href: string
  height?: number
  /** Panel width in SVG units (controls overall lancet size). */
  width?: number
  /** Dominant color for this lancet's main glass field. */
  palette?: PaletteName
  /**
   * How much of the body the main color occupies. 'full' uses 4 main + 2
   * accent sections; 'reduced' uses 3 main + 3 accent so a strong color
   * (e.g. yellow) doesn't dominate the row.
   */
  mainWeight?: 'full' | 'reduced'
  /**
   * When true, the SVG fills its parent (width: 100%) instead of using a
   * fixed pixel size. Used by responsive rows that want the lancets to
   * stretch to a flex container.
   */
  fluid?: boolean
  /**
   * Marks the current page so this lancet is rendered with extra glow.
   */
  active?: boolean
}

/**
 * For a given main color, choose two accent colors so each lancet shares
 * the others' tones in its ornament cells (per the brief: "the five saint
 * window things can have a main colour each and share the other colours").
 */
const ACCENTS: Record<PaletteName, [PaletteName, PaletteName]> = {
  sapphire: ['ruby',     'yellow'],
  ruby:     ['emerald',  'yellow'],
  emerald:  ['ruby',     'yellow'],
  yellow:   ['sapphire', 'ruby'],
  rose:     ['sapphire', 'yellow'],
  mixed:    ['sapphire', 'ruby'],
}

export default function LancetPanel({
  title,
  href,
  height = 480,
  width = 110,
  palette = 'sapphire',
  mainWeight = 'full',
  fluid = false,
  active = false,
}: Props) {
  const w = width
  const total = height
  const cx = w / 2

  // Scale arch and base band proportionally to width so a smaller lancet
  // doesn't end up with a giant arch and a tiny body.
  const scale = w / 110
  const archH = 70 * scale
  const baseBandH = 26 * scale
  const bodyTop = archH
  const bodyBottom = total - baseBandH
  const bodyH = bodyBottom - bodyTop

  const uid = useId().replace(/[^a-zA-Z0-9]/g, '')
  const url = (n: PaletteName) => patternUrl(uid, n)

  const main = palette
  const [accentA, accentB] = ACCENTS[palette]

  // central figure cell (oval)
  const figCx = cx
  const figCy = bodyTop + bodyH * 0.42
  const figRX = w * 0.38
  const figRY = bodyH * 0.22

  // arched caming bands across the body — gentle Q curves with apex
  // pulled slightly down (so they read like real lead bowing under glass)
  const bandFractions = [0.18, 0.32, 0.52, 0.66, 0.8]
  const bandPath = (f: number) => {
    const y = bodyTop + bodyH * f
    const dip = 4
    return `M 6 ${y} Q ${cx} ${y + dip} ${w - 6} ${y}`
  }

  // arch path — pointed (gothic)
  const archPath = `
    M 6 ${archH}
    L 6 ${archH * 0.55}
    Q ${cx} ${-6} ${w - 6} ${archH * 0.55}
    L ${w - 6} ${archH}
    Z
  `

  const framePath = `
    M 0 ${total}
    L 0 ${archH * 0.55}
    Q ${cx} ${-12} ${w} ${archH * 0.55}
    L ${w} ${total}
    Z
  `

  // glow color for hover, picked to match the lancet
  const HOVER_GLOW: Record<PaletteName, string> = {
    sapphire: 'rgba(91, 141, 230, 0.55)',
    ruby:     'rgba(214, 59, 84, 0.55)',
    emerald:  'rgba(63, 160, 90, 0.55)',
    yellow:   'rgba(245, 209, 104, 0.6)',
    rose:     'rgba(232, 138, 168, 0.6)',
    mixed:    'rgba(245, 209, 104, 0.55)',
  }

  return (
    <Link
      href={href}
      className={`lancet block group${active ? ' is-active' : ''}`}
      style={fluid ? { width: '100%' } : { width: w }}
      aria-label={title}
      aria-current={active ? 'page' : undefined}
    >
      <svg
        {...(fluid
          ? { width: '100%', height: 'auto' as const }
          : { width: w, height: total + 56 })}
        viewBox={`0 0 ${w} ${total + 56}`}
        preserveAspectRatio="xMidYMax meet"
        xmlns="http://www.w3.org/2000/svg"
        className="block overflow-visible"
      >
        <defs>
          <GlassPatterns uid={uid} />
        </defs>

        {/* dark stone frame */}
        <path d={framePath} fill="#0a0705" stroke={CAMING} strokeWidth="2.5" />

        {/* arch panel — uses main color */}
        <path d={archPath} fill={url(main)} stroke={CAMING} strokeWidth="3" />
        {/* arch jewel (yellow accent) */}
        <circle cx={cx} cy={archH * 0.5} r="6" fill={url('yellow')} stroke={CAMING} strokeWidth="1.5" />
        <circle cx={cx} cy={archH * 0.5} r="3" fill="#fce9a7" stroke={CAMING} strokeWidth="0.6" />
        {/* arch caming */}
        <path d={`M 6 ${archH * 0.78} Q ${cx} ${archH * 0.78 + 4} ${w - 6} ${archH * 0.78}`} stroke={CAMING} strokeWidth="2" fill="none" />

        {/* main body — subdivided into 6 stacked sections so the dominant
            color doesn't flood the panel. 4 sections use the main color,
            2 use accents to break it up and add cathedral variety. */}
        {(() => {
          const yEdges = [0, ...bandFractions, 1].map((f) => bodyTop + bodyH * f)
          // section i lives between yEdges[i] and yEdges[i+1]
          // 'full' = 4 main + 2 accent (default), 'reduced' = 3 main + 3 accent
          const sectionFills: PaletteName[] =
            mainWeight === 'reduced'
              ? [main, accentB, accentA, main, accentB, main]
              : [main, accentB, main, accentA, main, main]
          return sectionFills.map((fill, i) => (
            <rect
              key={`sec-${i}`}
              x="6"
              y={yEdges[i]}
              width={w - 12}
              height={yEdges[i + 1] - yEdges[i]}
              fill={url(fill)}
              stroke={CAMING}
              strokeWidth={i === 0 ? 2.5 : 0}
            />
          ))
        })()}

        {/* outer body outline */}
        <rect
          x="6"
          y={bodyTop}
          width={w - 12}
          height={bodyH}
          fill="none"
          stroke={CAMING}
          strokeWidth="2.5"
        />

        {/* arched caming bands subdividing the body */}
        {bandFractions.map((f, i) => (
          <path
            key={i}
            d={bandPath(f)}
            stroke={CAMING}
            strokeWidth="2"
            fill="none"
          />
        ))}

        {/* vertical center caming spine */}
        <line x1={cx} y1={bodyTop} x2={cx} y2={bodyBottom} stroke={CAMING} strokeWidth="1.6" opacity="0.85" />

        {/* small accent panels at the topmost band intersection */}
        <rect x={cx - 16} y={bodyTop + bodyH * 0.06} width="14" height="10" fill={url(accentA)} stroke={CAMING} strokeWidth="1.2" />
        <rect x={cx + 2}  y={bodyTop + bodyH * 0.06} width="14" height="10" fill={url(accentB)} stroke={CAMING} strokeWidth="1.2" />

        {/* second accent row — small diamonds between bands 3 and 4 */}
        <g transform={`translate(${cx - 14} ${bodyTop + bodyH * 0.42})`}>
          <polygon points="0,-5 5,0 0,5 -5,0" fill={url(accentA)} stroke={CAMING} strokeWidth="0.8" />
        </g>
        <g transform={`translate(${cx + 14} ${bodyTop + bodyH * 0.42})`}>
          <polygon points="0,-5 5,0 0,5 -5,0" fill={url(accentB)} stroke={CAMING} strokeWidth="0.8" />
        </g>

        {/* central decorative medallion — accent color so it contrasts the body */}
        <ellipse cx={figCx} cy={figCy} rx={figRX} ry={figRY} fill={url(accentA)} stroke={CAMING} strokeWidth="3" />
        {/* small inner ring + bead so the medallion reads as ornament */}
        <ellipse cx={figCx} cy={figCy} rx={figRX * 0.62} ry={figRY * 0.62} fill="none" stroke={CAMING} strokeWidth="1" opacity="0.6" />
        <circle cx={figCx} cy={figCy} r={Math.max(2, w * 0.04)} fill="#fce9a7" stroke={CAMING} strokeWidth="0.6" />

        {/* a quatrefoil-like ornament below the figure (accent B) */}
        <g transform={`translate(${cx} ${bodyTop + bodyH * 0.74})`}>
          <circle r="9" fill={url(accentB)} stroke={CAMING} strokeWidth="1.5" />
          <circle r="5" fill={url(main)} stroke={CAMING} strokeWidth="0.8" />
        </g>

        {/* base band (accent A) */}
        <rect x="4" y={bodyBottom} width={w - 8} height={baseBandH} fill={url(accentA)} stroke={CAMING} strokeWidth="2.5" />
        <path d={`M 4 ${bodyBottom + baseBandH / 2} Q ${cx} ${bodyBottom + baseBandH / 2 + 3} ${w - 4} ${bodyBottom + baseBandH / 2}`} stroke={CAMING} strokeWidth="1.2" fill="none" />

        {/* label outside, on the dark wall below the lancet */}
        <foreignObject x="-10" y={total + 6} width={w + 20} height={48}>
          <div
            // @ts-expect-error svg foreignObject child
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              fontFamily: 'var(--font-cinzel), Georgia, serif',
              color: active ? '#f5d168' : '#e3c389',
              fontSize: Math.max(9, w * 0.13),
              lineHeight: 1.2,
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: 1.2,
              fontWeight: active ? 700 : 600,
              padding: '2px 4px',
              textShadow: '0 1px 3px rgba(0,0,0,0.95)',
            }}
          >
            {title}
          </div>
        </foreignObject>
      </svg>

      <style jsx>{`
        .lancet :global(svg) {
          transition: filter 0.6s ease, transform 0.6s ease;
        }
        .lancet:hover :global(svg) {
          filter: brightness(1.18) drop-shadow(0 0 14px ${HOVER_GLOW[main]});
          transform: translateY(-2px);
        }
        .lancet.is-active :global(svg) {
          filter: brightness(1.12) drop-shadow(0 0 18px ${HOVER_GLOW[main]});
        }
        @media (prefers-reduced-motion: reduce) {
          .lancet :global(svg) { transition: none; }
          .lancet:hover :global(svg) { transform: none; }
        }
        :global(html[data-lite="true"]) .lancet :global(svg) {
          transition: none;
        }
      `}</style>
    </Link>
  )
}
