import { ImageResponse } from 'next/og'

/**
 * Open Graph card for Algorithmic Faith.
 *
 * Rendered at request time by Next.js's file convention — iMessage,
 * Slack, Twitter / X, WhatsApp, etc. will fetch this when a link is
 * shared. The card is a dark stone wall with a simplified rose window
 * on the left and the carved title on the right, mirroring the
 * homepage hero so the preview reads as the same place.
 *
 * Notes for `ImageResponse`:
 *   - Only basic CSS / inline SVG is supported (no <pattern>, no
 *     external fonts unless fetched as ArrayBuffer).
 *   - Default font is system-serif; we fetch Cinzel for the title so
 *     it matches the on-page wordmark.
 */

export const runtime = 'edge'
export const alt = 'Algorithmic Faith — where faith meets the feed'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Sainte-Chapelle palette — same colours used by the live rose.
const COLORS = {
  sapphire: '#2d5cc0',
  sapphireDeep: '#14358a',
  ruby: '#d63b54',
  rubyDeep: '#5c0f1f',
  emerald: '#3fa05a',
  emeraldDeep: '#0e3a1c',
  yellow: '#f5d168',
  yellowDeep: '#6b4a08',
  rose: '#e88aa8',
  roseDeep: '#5e1230',
  caming: '#020408',
  bead: '#fce9a7',
  stone: '#1a1410',
  stoneDark: '#050302',
}

const PETAL_CYCLE = [
  COLORS.sapphire,
  COLORS.ruby,
  COLORS.emerald,
  COLORS.yellow,
  COLORS.rose,
  COLORS.sapphire,
  COLORS.ruby,
  COLORS.emerald,
  COLORS.yellow,
  COLORS.rose,
  COLORS.sapphire,
  COLORS.emerald,
]

const MED_CYCLE = [
  COLORS.sapphire,
  COLORS.yellow,
  COLORS.emerald,
  COLORS.ruby,
  COLORS.rose,
  COLORS.sapphire,
  COLORS.emerald,
  COLORS.yellow,
  COLORS.ruby,
  COLORS.emerald,
  COLORS.rose,
  COLORS.yellow,
]

const CX = 250
const CY = 250

function pol(r: number, deg: number) {
  const a = (deg - 90) * (Math.PI / 180)
  return { x: CX + r * Math.cos(a), y: CY + r * Math.sin(a) }
}

function petalPath(rIn: number, rOut: number, a0: number, a1: number) {
  const p1 = pol(rIn, a0)
  const p2 = pol(rIn, a1)
  const tip = pol(rOut, (a0 + a1) / 2)
  const c1 = pol(rOut * 1.04, a1 - (a1 - a0) * 0.18)
  const c2 = pol(rOut * 1.04, a0 + (a1 - a0) * 0.18)
  return `M ${p1.x.toFixed(1)} ${p1.y.toFixed(1)}
          A ${rIn} ${rIn} 0 0 1 ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}
          Q ${c1.x.toFixed(1)} ${c1.y.toFixed(1)} ${tip.x.toFixed(1)} ${tip.y.toFixed(1)}
          Q ${c2.x.toFixed(1)} ${c2.y.toFixed(1)} ${p1.x.toFixed(1)} ${p1.y.toFixed(1)}
          Z`
}

function buildRoseSvg() {
  const N_PETALS = 12
  const R_OUT = 248
  const R_PETALS_OUT = 204
  const R_PETALS_IN = 132
  const R_QUAT = 114
  const R_MED_RING = 80
  const R_CENTER = 50
  const R_CORE = 30

  const petals = Array.from({ length: N_PETALS }, (_, i) => {
    const step = 360 / N_PETALS
    const a0 = i * step + 0.8
    const a1 = a0 + step - 1.6
    return { d: petalPath(R_PETALS_IN, R_PETALS_OUT, a0, a1), color: PETAL_CYCLE[i] }
  })

  const meds = Array.from({ length: N_PETALS }, (_, i) => {
    const step = 360 / N_PETALS
    const a = i * step + step / 2
    const c = pol(R_MED_RING, a)
    return { cx: c.x, cy: c.y, color: MED_CYCLE[i] }
  })

  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="540" height="540">
      <defs>
        <radialGradient id="back" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stop-color="#5a3a18" stop-opacity="0.95"/>
          <stop offset="40%" stop-color="#241608" stop-opacity="0.55"/>
          <stop offset="100%" stop-color="#020205" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="stone" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"  stop-color="#2a1f15"/>
          <stop offset="50%" stop-color="#150f0a"/>
          <stop offset="100%" stop-color="#0a0705"/>
        </linearGradient>
      </defs>

      <!-- backdrop disk -->
      <circle cx="${CX}" cy="${CY}" r="${R_OUT + 4}" fill="#020205"/>
      <!-- warm backlight -->
      <circle cx="${CX}" cy="${CY}" r="${R_PETALS_OUT - 2}" fill="url(#back)"/>
      <!-- carved stone ring -->
      <circle cx="${CX}" cy="${CY}" r="${R_OUT}" fill="url(#stone)" stroke="${COLORS.caming}" stroke-width="2"/>
      <circle cx="${CX}" cy="${CY}" r="${R_OUT - 13}" fill="none" stroke="#0a0705" stroke-width="2"/>

      <!-- 12 large petals -->
      ${petals
        .map(
          (p) => `
        <path d="${p.d}" fill="${p.color}" stroke="${COLORS.caming}" stroke-width="3.5" stroke-linejoin="round"/>
      `
        )
        .join('')}

      <!-- caming ring between petals and quatrefoils -->
      <circle cx="${CX}" cy="${CY}" r="${R_PETALS_IN - 1}" fill="none" stroke="${COLORS.caming}" stroke-width="2.2"/>

      <!-- quatrefoil ring (rendered as small circles for ImageResponse compatibility) -->
      ${Array.from({ length: 12 })
        .map((_, i) => {
          const a = i * 30 + 15
          const c = pol(R_QUAT, a)
          const fill = MED_CYCLE[(i + 3) % MED_CYCLE.length]
          return `<circle cx="${c.x.toFixed(1)}" cy="${c.y.toFixed(1)}" r="11" fill="${fill}" stroke="${COLORS.caming}" stroke-width="2"/>`
        })
        .join('')}

      <!-- inner medallion ring -->
      <circle cx="${CX}" cy="${CY}" r="${R_MED_RING + 14}" fill="none" stroke="${COLORS.caming}" stroke-width="1.6"/>
      <circle cx="${CX}" cy="${CY}" r="${R_MED_RING - 14}" fill="none" stroke="${COLORS.caming}" stroke-width="1.6"/>
      ${meds
        .map(
          (m) => `
        <circle cx="${m.cx.toFixed(1)}" cy="${m.cy.toFixed(1)}" r="13" fill="${m.color}" stroke="${COLORS.caming}" stroke-width="2.2"/>
        <circle cx="${m.cx.toFixed(1)}" cy="${m.cy.toFixed(1)}" r="2" fill="${COLORS.bead}" opacity="0.9"/>
      `
        )
        .join('')}

      <!-- center medallion -->
      <circle cx="${CX}" cy="${CY}" r="${R_CENTER}" fill="${COLORS.sapphireDeep}" stroke="${COLORS.caming}" stroke-width="2.5"/>
      <circle cx="${CX}" cy="${CY}" r="${R_CORE}" fill="${COLORS.yellow}" stroke="${COLORS.caming}" stroke-width="2"/>
      <line x1="${CX}" y1="${CY - 18}" x2="${CX}" y2="${CY + 18}" stroke="${COLORS.caming}" stroke-width="5" stroke-linecap="square"/>
      <line x1="${CX - 14}" y1="${CY - 4}" x2="${CX + 14}" y2="${CY - 4}" stroke="${COLORS.caming}" stroke-width="5" stroke-linecap="square"/>
      <circle cx="${CX}" cy="${CY - 4}" r="2.5" fill="${COLORS.bead}"/>
    </svg>
  `
}

async function loadCinzel(weight: 400 | 700) {
  const url = `https://fonts.googleapis.com/css2?family=Cinzel:wght@${weight}&display=swap`
  const css = await fetch(url, {
    headers: {
      // Trick Google Fonts into serving woff (not woff2) so satori can read it.
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Safari/605.1.15',
    },
  }).then((r) => r.text())
  const match = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)
  if (!match) throw new Error('Could not find Cinzel font url')
  const fontRes = await fetch(match[1])
  return await fontRes.arrayBuffer()
}

export default async function Image() {
  let cinzelRegular: ArrayBuffer | null = null
  let cinzelBold: ArrayBuffer | null = null
  try {
    ;[cinzelRegular, cinzelBold] = await Promise.all([loadCinzel(400), loadCinzel(700)])
  } catch {
    // If font fetch fails (offline, network issue) we'll fall back to system serif.
  }

  const roseSvg = buildRoseSvg()
  const roseDataUri = `data:image/svg+xml;utf8,${encodeURIComponent(roseSvg)}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background:
            'radial-gradient(ellipse 60% 60% at 50% 50%, #120c07 0%, #050302 80%)',
          position: 'relative',
          fontFamily: 'Cinzel, Georgia, serif',
        }}
      >
        {/* warm uplight under the rose */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 60% 35% at 28% 105%, rgba(74, 50, 24, 0.55), transparent 70%)',
          }}
        />
        {/* edge vignette */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse at center, transparent 55%, rgba(0, 0, 0, 0.92) 100%)',
          }}
        />

        {/* Rose, left half */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 600,
            height: '100%',
            padding: 30,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={roseDataUri} width={540} height={540} alt="" />
        </div>

        {/* Title block, right half */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            width: 600,
            height: '100%',
            paddingRight: 70,
            paddingLeft: 10,
          }}
        >
          <div
            style={{
              fontSize: 54,
              color: '#e3c389',
              letterSpacing: 8,
              textTransform: 'uppercase',
              fontWeight: 700,
              textShadow: '0 2px 6px rgba(0,0,0,0.9)',
            }}
          >
            Algorithmic
          </div>
          <div
            style={{
              fontSize: 132,
              color: '#f5d168',
              letterSpacing: 14,
              textTransform: 'uppercase',
              fontWeight: 700,
              lineHeight: 1,
              marginTop: 6,
              textShadow: '0 4px 14px rgba(0,0,0,0.95)',
            }}
          >
            Faith
          </div>
          {/* jewel divider */}
          <div
            style={{
              display: 'flex',
              width: 360,
              height: 3,
              marginTop: 28,
              marginBottom: 28,
              background:
                'linear-gradient(90deg, transparent, #5b8de6, #d63b54, #3fa05a, #f5d168, #e88aa8, transparent)',
            }}
          />
          <div
            style={{
              display: 'flex',
              fontSize: 26,
              color: '#c9b489',
              letterSpacing: 1.4,
              lineHeight: 1.35,
              maxWidth: 480,
              fontFamily: 'Georgia, serif',
            }}
          >
            Where faith meets the feed.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: cinzelRegular && cinzelBold
        ? [
            { name: 'Cinzel', data: cinzelRegular, weight: 400, style: 'normal' },
            { name: 'Cinzel', data: cinzelBold, weight: 700, style: 'normal' },
          ]
        : undefined,
    }
  )
}
