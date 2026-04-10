/**
 * Hero — cathedral wall.
 *
 * Composition:
 *   • dark warm stone background with faint granite noise texture
 *   • coloured caustic light spill on the wall below the rose, as if
 *     the glass were casting it
 *   • arched "ALGORITHMIC" inscription hugging the top of the rose
 *   • centered rose window
 *   • carved "FAITH" stone lintel directly beneath the rose
 *   • a row of 5 lancet windows below the lintel, each in its own color
 *   • CTAs at the bottom
 */

import type { Post } from '@/lib/posts'
import RoseWindow from './RoseWindow'
import LancetRow from './LancetRow'

// Smaller heights so the row fits a 320 px viewport without scrolling.
const MOBILE_LANCET_HEIGHTS = [140, 165, 190, 165, 140]
const MOBILE_LANCET_WIDTH = 50

type Props = {
  posts: Post[]
}

export default function Hero({ posts }: Props) {
  return (
    <section className="cathedral-hero relative overflow-hidden">
      {/* dark stone wall background */}
      <div className="absolute inset-0 cathedral-wall pointer-events-none" />
      <div className="absolute inset-0 cathedral-noise pointer-events-none" />
      <div className="absolute inset-0 cathedral-vignette pointer-events-none" />

      <h1 className="sr-only">Algorithmic Faith</h1>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-14 sm:pt-16 pb-12 flex flex-col items-center">
        {/* The window assembly: arched "ALGORITHMIC" inscription, the rose,
            and the carved "FAITH" lintel are stacked tightly inside one
            container so they read as a single architectural piece. */}
        <div className="window-assembly flex flex-col items-center">
          {/* Arched ALGORITHMIC over the top of the rose */}
          <svg
            className="title-arch block"
            viewBox="0 0 600 130"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <defs>
              {/* path arcs from lower-left, up over the apex, back down to lower-right */}
              <path id="title-arch-path" d="M 50 120 Q 300 -40 550 120" fill="none" />
            </defs>
            <text
              fill="#e3c389"
              style={{
                fontFamily: 'var(--font-cinzel), Georgia, serif',
                fontWeight: 700,
                fontSize: 44,
                letterSpacing: 8,
                textTransform: 'uppercase',
                filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.9))',
              }}
            >
              <textPath href="#title-arch-path" startOffset="50%" textAnchor="middle">
                ALGORITHMIC
              </textPath>
            </text>
          </svg>

          {/* Rose window centerpiece — pulled up so the arch hugs its rim */}
          <div className="rose-stage relative -mt-6 sm:-mt-8">
            <RoseWindow size={540} interactive />

            {/* Caustic light spill on the wall directly below the rose */}
            <div className="caustic-spill" aria-hidden>
              <span className="caustic c-sapphire" />
              <span className="caustic c-emerald" />
              <span className="caustic c-yellow" />
              <span className="caustic c-ruby" />
              <span className="caustic c-rose" />
            </div>
          </div>

          {/* Carved FAITH lintel — stone band with the word inscribed */}
          <div className="faith-lintel mt-2" aria-hidden>
            <svg viewBox="0 0 600 110" xmlns="http://www.w3.org/2000/svg" className="block">
              <defs>
                <linearGradient id="lintel-stone" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%"  stopColor="#2a1f15" />
                  <stop offset="50%" stopColor="#150f0a" />
                  <stop offset="100%" stopColor="#0a0705" />
                </linearGradient>
                <linearGradient id="lintel-edge" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(245,209,104,0.35)" />
                  <stop offset="100%" stopColor="rgba(245,209,104,0)" />
                </linearGradient>
              </defs>
              {/* main stone band */}
              <path
                d="M 30 18 L 570 18 L 590 90 L 10 90 Z"
                fill="url(#lintel-stone)"
                stroke="#020408"
                strokeWidth="2"
              />
              {/* top bevel highlight */}
              <line x1="30" y1="20" x2="570" y2="20" stroke="url(#lintel-edge)" strokeWidth="1.4" />
              {/* small decorative bosses at each end */}
              <circle cx="46"  cy="54" r="4" fill="#3a2510" stroke="#020408" strokeWidth="1" />
              <circle cx="46"  cy="54" r="1.6" fill="#f5d168" />
              <circle cx="554" cy="54" r="4" fill="#3a2510" stroke="#020408" strokeWidth="1" />
              <circle cx="554" cy="54" r="1.6" fill="#f5d168" />
              {/* The word */}
              <text
                x="300"
                y="68"
                textAnchor="middle"
                fill="#f5d168"
                style={{
                  fontFamily: 'var(--font-cinzel), Georgia, serif',
                  fontWeight: 700,
                  fontSize: 52,
                  letterSpacing: 14,
                  textTransform: 'uppercase',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.95))',
                  paintOrder: 'stroke fill',
                }}
                stroke="#020408"
                strokeWidth="0.8"
              >
                FAITH
              </text>
            </svg>
          </div>
        </div>

        <p className="mt-8 text-center text-base sm:text-lg text-[#c9b489] max-w-2xl mx-auto leading-relaxed px-4">
          Where faith meets the feed. Spotlighting the creators using
          YouTube, TikTok, and AI to share their message with the world.
        </p>

        {/* Jewel divider — spans all 5 lancet colors */}
        <div className="w-72 h-[2px] my-10 bg-gradient-to-r from-transparent via-[#5b8de6] via-[#d63b54] via-[#3fa05a] via-[#f5d168] via-[#e88aa8] to-transparent opacity-90" />

        {/* The lancet row — on mobile, the five lancets stretch to span the
            same width as the rose (.window-assembly = 540px / 92vw) so the
            row visually anchors to the wheel above. Desktop keeps the full
            fixed Chartres scale. */}
        <div className="w-full pb-2">
          <div className="sm:hidden window-assembly mx-auto">
            <LancetRow
              posts={posts}
              heights={MOBILE_LANCET_HEIGHTS}
              panelWidth={MOBILE_LANCET_WIDTH}
              fluid
              className="lancet-row flex items-end justify-between gap-1 w-full"
            />
          </div>
          <div className="hidden sm:flex justify-center min-w-fit mx-auto px-4">
            <LancetRow posts={posts} />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <a
            href="/creators"
            className="bg-[#c89436] hover:bg-[#f5d168] text-[#0a0705] font-semibold px-7 py-3.5 rounded-sm border border-[#3a2510] transition-all duration-300 hover:shadow-[0_0_25px_rgba(245,209,104,0.45)]"
          >
            Meet the Creators
          </a>
          <a
            href="/blog"
            className="border border-[#3a2510] hover:border-[#f5d168] text-[#e3c389] font-semibold px-7 py-3.5 rounded-sm transition-all duration-300 hover:bg-[#1a1006]/40"
          >
            All Articles
          </a>
        </div>
      </div>

      {/* Bottom fade into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent pointer-events-none" />
    </section>
  )
}
