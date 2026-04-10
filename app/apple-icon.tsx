import { ImageResponse } from 'next/og'

/**
 * Apple touch icon — used when iOS adds the site to the home screen
 * and by various Apple share-sheet previews. Slightly larger and
 * with a small "stone bezel" frame so it reads as an iOS app icon.
 */

export const runtime = 'edge'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

const PALETTE = ['#2d5cc0', '#d63b54', '#3fa05a', '#f5d168', '#e88aa8', '#a02a55', '#1a6b34', '#c89436']
const CAMING = '#020408'

function petalPath(i: number) {
  const cx = 50
  const cy = 50
  const angle = (i * 2 * Math.PI) / 8 - Math.PI / 2
  const cosA = Math.cos(angle)
  const sinA = Math.sin(angle)
  const perpX = -sinA
  const perpY = cosA
  const rIn = 14
  const rOut = 40
  const bulge = 9
  const baseX = cx + rIn * cosA
  const baseY = cy + rIn * sinA
  const tipX = cx + rOut * cosA
  const tipY = cy + rOut * sinA
  const midR = (rIn + rOut) / 2
  const midX = cx + midR * cosA
  const midY = cy + midR * sinA
  const c1x = midX + bulge * perpX
  const c1y = midY + bulge * perpY
  const c2x = midX - bulge * perpX
  const c2y = midY - bulge * perpY
  return `M ${baseX.toFixed(1)} ${baseY.toFixed(1)} Q ${c1x.toFixed(1)} ${c1y.toFixed(1)} ${tipX.toFixed(1)} ${tipY.toFixed(1)} Q ${c2x.toFixed(1)} ${c2y.toFixed(1)} ${baseX.toFixed(1)} ${baseY.toFixed(1)}`
}

function buildAppleSvg() {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="180" height="180">
      <defs>
        <linearGradient id="bezel" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"  stop-color="#2a1f15"/>
          <stop offset="50%" stop-color="#150f0a"/>
          <stop offset="100%" stop-color="#0a0705"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="100" height="100" rx="22" fill="url(#bezel)"/>
      <circle cx="50" cy="50" r="42" fill="#0a0705" stroke="${CAMING}" stroke-width="2"/>
      ${PALETTE.map(
        (color, i) =>
          `<path d="${petalPath(i)}" fill="${color}" stroke="${CAMING}" stroke-width="1.5"/>`
      ).join('')}
      <circle cx="50" cy="50" r="13" fill="#14358a" stroke="${CAMING}" stroke-width="1.5"/>
      <circle cx="50" cy="50" r="9" fill="#f5d168" stroke="${CAMING}" stroke-width="1"/>
      <line x1="50" y1="44" x2="50" y2="56" stroke="${CAMING}" stroke-width="2.4" stroke-linecap="square"/>
      <line x1="44" y1="50" x2="56" y2="50" stroke="${CAMING}" stroke-width="2.4" stroke-linecap="square"/>
    </svg>
  `
}

export default function AppleIcon() {
  const svg = buildAppleSvg()
  const dataUri = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#050302',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={dataUri} width={180} height={180} alt="" />
      </div>
    ),
    size
  )
}
