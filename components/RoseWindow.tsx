'use client'

/**
 * RoseWindow — densely-subdivided rose window in the Chartres tradition.
 *
 * Purely decorative: no interactivity, no links. The site's navigation
 * lives in the lancet windows below.
 *
 * Design principles:
 *   • 12-fold rotational symmetry (Chartres rose has 12 main petals).
 *   • Sainte-Chapelle palette of 6 jewel colours with near-black caming.
 *   • Every shape is filled with an SVG <pattern> of tiny jewel cells so
 *     the glass reads as dense rather than flat.
 *   • Heavy black caming (stroke 2.5–4) frames every pane.
 *   • Multi-ring construction: outer carved stone ring, corona of 24
 *     small cells, ring of 12 pointed petals, ring of 12 quatrefoils,
 *     ring of 12 inner medallions, central medallion with cross.
 *   • Slow ambient counter-rotation; disabled under prefers-reduced-motion
 *     or data-lite.
 */

import { useId } from 'react'
import GlassPatterns, { patternUrl, type PaletteName } from './GlassPatterns'

type Props = {
  size?: number
  static?: boolean
  className?: string
}

// ---- geometry helpers ------------------------------------------------------
const CX = 250
const CY = 250
const CAMING = '#020408'

function pol(r: number, deg: number) {
  const a = (deg - 90) * (Math.PI / 180)
  return { x: CX + r * Math.cos(a), y: CY + r * Math.sin(a) }
}

/** A single corona cell — a slightly tapered rectangle between two rays. */
function coronaCellPath(rIn: number, rOut: number, a0: number, a1: number) {
  const p1 = pol(rIn, a0)
  const p2 = pol(rIn, a1)
  const p3 = pol(rOut, a1)
  const p4 = pol(rOut, a0)
  return `M ${p1.x.toFixed(1)} ${p1.y.toFixed(1)}
          A ${rIn} ${rIn} 0 0 1 ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}
          L ${p3.x.toFixed(1)} ${p3.y.toFixed(1)}
          A ${rOut} ${rOut} 0 0 0 ${p4.x.toFixed(1)} ${p4.y.toFixed(1)}
          Z`
}

/**
 * Pointed-petal path between two angles. Inner edge is an arc on the
 * inner ring; the outer edge curves out to a tip on the outer ring.
 */
function petalPath(rIn: number, rOut: number, a0: number, a1: number) {
  const p1 = pol(rIn, a0)
  const p2 = pol(rIn, a1)
  const tip = pol(rOut, (a0 + a1) / 2)
  // bezier control points pulled outside the petal to bow the sides
  const c1 = pol(rOut * 1.04, a1 - (a1 - a0) * 0.18)
  const c2 = pol(rOut * 1.04, a0 + (a1 - a0) * 0.18)
  return `M ${p1.x.toFixed(1)} ${p1.y.toFixed(1)}
          A ${rIn} ${rIn} 0 0 1 ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}
          Q ${c1.x.toFixed(1)} ${c1.y.toFixed(1)} ${tip.x.toFixed(1)} ${tip.y.toFixed(1)}
          Q ${c2.x.toFixed(1)} ${c2.y.toFixed(1)} ${p1.x.toFixed(1)} ${p1.y.toFixed(1)}
          Z`
}

/** Quatrefoil — 4-lobed shape inscribed in circle r at (cx,cy). */
function quatrefoil(cx: number, cy: number, r: number) {
  const k = r * 0.55
  return [
    `M ${cx} ${cy - r}`,
    `C ${cx + k} ${cy - r} ${cx + r} ${cy - k} ${cx + r} ${cy}`,
    `C ${cx + r} ${cy + k} ${cx + k} ${cy + r} ${cx} ${cy + r}`,
    `C ${cx - k} ${cy + r} ${cx - r} ${cy + k} ${cx - r} ${cy}`,
    `C ${cx - r} ${cy - k} ${cx - k} ${cy - r} ${cx} ${cy - r}`,
    'Z',
  ].join(' ')
}

// ---- main component --------------------------------------------------------
export default function RoseWindow({ size = 600, static: isStatic = false, className }: Props) {
  // ring radii (viewBox 500x500, center 250,250)
  const R_OUTER         = 248
  const R_OUTER_BEVEL   = 235
  const R_CORONA_OUT    = 232
  const R_CORONA_IN     = 207
  const R_PETALS_OUT    = 204
  const R_PETALS_IN     = 132
  const R_QUAT_OUT      = 128
  const R_QUAT_IN       = 100
  const R_MED_OUT       = 96
  const R_MED_IN        = 64
  const R_CENTER        = 60
  const R_CORE          = 36

  const N_PETALS  = 12
  const N_CORONA  = 24
  const N_QUAT    = 12
  const N_MED     = 12

  // unique pattern ids per instance (Loader and Hero render separately)
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '')
  const url = (n: PaletteName) => patternUrl(uid, n)
  const pStone = `psto-${uid}`

  // Color cycles — distribute all 6 colors across each ring so green and
  // gold appear throughout, not just in one place. Rose pink is held back
  // for the inner medallions and quatrefoils so it stays a focal accent.
  const CORONA_CYCLE: PaletteName[]  = ['sapphire', 'ruby', 'emerald', 'yellow', 'sapphire', 'ruby'] // 24/6 = 4 reps; 6-step keeps neighbors distinct
  const PETALS_CYCLE: PaletteName[]  = ['sapphire', 'ruby', 'emerald', 'yellow', 'rose', 'sapphire', 'ruby', 'emerald', 'yellow', 'rose', 'sapphire', 'emerald'] // 12 — every color present
  const QUAT_CYCLE:   PaletteName[]  = ['yellow', 'emerald', 'rose', 'sapphire', 'yellow', 'emerald', 'rose', 'ruby', 'yellow', 'emerald', 'rose', 'sapphire']
  const MED_CYCLE:    PaletteName[]  = ['sapphire', 'yellow', 'emerald', 'ruby', 'rose', 'sapphire', 'emerald', 'yellow', 'ruby', 'emerald', 'rose', 'yellow']

  // outer corona cells
  const corona = Array.from({ length: N_CORONA }, (_, i) => {
    const step = 360 / N_CORONA
    const a0 = i * step + 0.6
    const a1 = a0 + step - 1.2
    return {
      d: coronaCellPath(R_CORONA_IN, R_CORONA_OUT, a0, a1),
      color: CORONA_CYCLE[i % CORONA_CYCLE.length],
    }
  })

  // 12 large petals
  const petals = Array.from({ length: N_PETALS }, (_, i) => {
    const step = 360 / N_PETALS
    const a0 = i * step + 0.8
    const a1 = a0 + step - 1.6
    return {
      d: petalPath(R_PETALS_IN, R_PETALS_OUT, a0, a1),
      color: PETALS_CYCLE[i],
      midAngle: (a0 + a1) / 2,
    }
  })

  // 12 quatrefoils
  const quats = Array.from({ length: N_QUAT }, (_, i) => {
    const step = 360 / N_QUAT
    const a = i * step + step / 2
    const c = pol((R_QUAT_IN + R_QUAT_OUT) / 2, a)
    return { cx: c.x, cy: c.y, r: 12, color: QUAT_CYCLE[i] }
  })

  // 12 inner medallions — uniformly decorative now
  const meds = Array.from({ length: N_MED }, (_, i) => {
    const step = 360 / N_MED
    const a = i * step + step / 2
    const c = pol((R_MED_IN + R_MED_OUT) / 2, a)
    return { cx: c.x, cy: c.y, r: 14 }
  })

  return (
    <div className={`rose-window relative ${className ?? ''}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 500 500"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Stained glass rose window"
        className="block"
      >
        <defs>
          {/* the 6 jewel-cell patterns are shared via GlassPatterns */}
          <GlassPatterns uid={uid} />

          {/* stone pattern for the outer carved ring */}
          <pattern id={pStone} width="40" height="40" patternUnits="userSpaceOnUse">
            <rect width="40" height="40" fill="#1a1410" />
            <rect width="40" height="40" fill={`url(#${uid}-stoneGrad)`} />
          </pattern>
          <linearGradient id={`${uid}-stoneGrad`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2a1f15" stopOpacity="1" />
            <stop offset="50%" stopColor="#150f0a" stopOpacity="1" />
            <stop offset="100%" stopColor="#0a0705" stopOpacity="1" />
          </linearGradient>

          {/* warm backlight — slightly brighter for the sun-flooded look */}
          <radialGradient id={`backlight-${uid}`} cx="50%" cy="50%" r="55%">
            <stop offset="0%"   stopColor="#5a3a18" stopOpacity="0.35" />
            <stop offset="40%"  stopColor="#241608" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#020205" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* dark backdrop disk */}
        <circle cx={CX} cy={CY} r={R_OUTER + 4} fill="#020205" />

        {/* warm backlight just inside the glass */}
        <circle cx={CX} cy={CY} r={R_PETALS_OUT - 2} fill={`url(#backlight-${uid})`} />

        {/* outer carved stone ring */}
        <circle cx={CX} cy={CY} r={R_OUTER} fill={`url(#${pStone})`} stroke={CAMING} strokeWidth="2" />
        <circle cx={CX} cy={CY} r={R_OUTER_BEVEL} fill="none" stroke="#0a0705" strokeWidth="2" />
        <circle cx={CX} cy={CY} r={R_OUTER_BEVEL - 3} fill="none" stroke="#2a1f15" strokeWidth="0.8" />

        {/* ---- ring 1: outer corona of 24 small cells (slow rotate) ---- */}
        <g className="rose-rotate-cw" style={{ transformOrigin: `${CX}px ${CY}px` }}>
          {corona.map((c, i) => (
            <path
              key={i}
              d={c.d}
              fill={url(c.color)}
              stroke={CAMING}
              strokeWidth="2.4"
              strokeLinejoin="round"
            />
          ))}
        </g>

        {/* caming gap rings between corona and main petals */}
        <circle cx={CX} cy={CY} r={R_CORONA_IN - 1} fill="none" stroke={CAMING} strokeWidth="2.2" />
        <circle cx={CX} cy={CY} r={R_PETALS_OUT + 1} fill="none" stroke={CAMING} strokeWidth="2.2" />

        {/* ---- ring 2: 12 large petals ---- */}
        <g>
          {petals.map((p, i) => (
            <g key={i}>
              <path
                d={p.d}
                fill={url(p.color)}
                stroke={CAMING}
                strokeWidth="3.5"
                strokeLinejoin="round"
              />
              {/* central spine caming */}
              {(() => {
                const inner = pol(R_PETALS_IN, p.midAngle)
                const outer = pol(R_PETALS_OUT - 2, p.midAngle)
                return <line x1={inner.x} y1={inner.y} x2={outer.x} y2={outer.y} stroke={CAMING} strokeWidth="2" />
              })()}
              {/* small jewel bead halfway up the petal */}
              {(() => {
                const c = pol((R_PETALS_IN + R_PETALS_OUT) / 2, p.midAngle)
                return (
                  <g>
                    <circle cx={c.x} cy={c.y} r="6" fill={CAMING} />
                    <circle cx={c.x} cy={c.y} r="4" fill="#f5d168" stroke={CAMING} strokeWidth="0.8" />
                  </g>
                )
              })()}
            </g>
          ))}
        </g>

        {/* caming gap ring */}
        <circle cx={CX} cy={CY} r={R_PETALS_IN - 1} fill="none" stroke={CAMING} strokeWidth="2.2" />
        <circle cx={CX} cy={CY} r={R_QUAT_OUT + 1} fill="none" stroke={CAMING} strokeWidth="1.6" />

        {/* ---- ring 3: 12 quatrefoils (slow counter-rotate) ---- */}
        <g className="rose-rotate-ccw" style={{ transformOrigin: `${CX}px ${CY}px` }}>
          {quats.map((q, i) => (
            <g key={i}>
              <path d={quatrefoil(q.cx, q.cy, q.r)} fill={url(q.color)} stroke={CAMING} strokeWidth="2.2" />
              <circle cx={q.cx} cy={q.cy} r="2" fill="#fce9a7" stroke={CAMING} strokeWidth="0.6" />
            </g>
          ))}
        </g>

        {/* caming gap ring */}
        <circle cx={CX} cy={CY} r={R_QUAT_IN - 1} fill="none" stroke={CAMING} strokeWidth="1.6" />
        <circle cx={CX} cy={CY} r={R_MED_OUT + 1} fill="none" stroke={CAMING} strokeWidth="1.6" />

        {/* ---- ring 4: 12 inner medallions (decorative) ---- */}
        <g>
          {meds.map((m, i) => (
            <g key={i}>
              <circle cx={m.cx} cy={m.cy} r={m.r} fill={url(MED_CYCLE[i])} stroke={CAMING} strokeWidth="2.2" />
              <circle cx={m.cx} cy={m.cy} r={m.r - 4} fill="none" stroke={CAMING} strokeWidth="1" opacity="0.5" />
              <circle cx={m.cx} cy={m.cy} r="2" fill="#fce9a7" opacity="0.8" />
            </g>
          ))}
        </g>

        {/* caming gap ring */}
        <circle cx={CX} cy={CY} r={R_MED_IN - 1} fill="none" stroke={CAMING} strokeWidth="1.6" />
        <circle cx={CX} cy={CY} r={R_CENTER + 1} fill="none" stroke={CAMING} strokeWidth="1.6" />

        {/* ---- center medallion ---- */}
        <circle cx={CX} cy={CY} r={R_CENTER} fill={url('mixed')} stroke={CAMING} strokeWidth="2.5" />
        <circle cx={CX} cy={CY} r={R_CORE} fill={url('yellow')} stroke={CAMING} strokeWidth="2" />

        {/* central cross — heavy, black, like real lead caming */}
        <g stroke={CAMING} strokeWidth="5" strokeLinecap="square">
          <line x1={CX} y1={CY - 22} x2={CX} y2={CY + 22} />
          <line x1={CX - 16} y1={CY - 4} x2={CX + 16} y2={CY - 4} />
        </g>
        {/* tiny gold bead at the cross intersection */}
        <circle cx={CX} cy={CY - 4} r="2.5" fill="#fce9a7" />

        {/* faint top highlight on outer stone (subtle, no blowout) */}
        <circle cx={CX} cy={CY} r={R_OUTER - 0.5} fill="none" stroke="rgba(255,235,200,0.05)" strokeWidth="1" />
      </svg>

      <style jsx>{`
        .rose-window :global(.rose-rotate-cw) {
          animation: rose-spin-cw 480s linear infinite;
          transform-origin: ${CX}px ${CY}px;
        }
        .rose-window :global(.rose-rotate-ccw) {
          animation: rose-spin-ccw 720s linear infinite;
          transform-origin: ${CX}px ${CY}px;
        }
        @keyframes rose-spin-cw {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes rose-spin-ccw {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .rose-window :global(.rose-rotate-cw),
          .rose-window :global(.rose-rotate-ccw) {
            animation: none;
          }
        }
        :global(html[data-lite="true"]) .rose-window :global(.rose-rotate-cw),
        :global(html[data-lite="true"]) .rose-window :global(.rose-rotate-ccw) {
          animation: none;
        }
        ${isStatic ? `
          .rose-window :global(.rose-rotate-cw),
          .rose-window :global(.rose-rotate-ccw) { animation: none; }
        ` : ''}
      `}</style>
    </div>
  )
}
