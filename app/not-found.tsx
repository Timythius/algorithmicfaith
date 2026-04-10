import Link from 'next/link'
import RoseWindow from '@/components/RoseWindow'

/**
 * 404 — "lost in the cathedral".
 *
 * Reuses the homepage hero's cathedral wall (.cathedral-wall +
 * .cathedral-noise + .cathedral-vignette) so a missing page still feels
 * like part of the same building. A small decorative rose hovers above
 * a carved-stone "404" lintel and a gold link back to the nave.
 */

export const metadata = {
  title: 'Lost in the Cathedral',
  description: 'This aisle is empty. Return to the nave to keep exploring Algorithmic Faith.',
}

export default function NotFound() {
  return (
    <section className="cathedral-hero relative overflow-hidden flex items-center justify-center">
      {/* dark stone wall background */}
      <div className="absolute inset-0 cathedral-wall pointer-events-none" />
      <div className="absolute inset-0 cathedral-noise pointer-events-none" />
      <div className="absolute inset-0 cathedral-vignette pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 py-16 flex flex-col items-center text-center">
        {/* small rose, smaller than the hero rose so the page feels intimate */}
        <div className="w-[280px] sm:w-[340px]">
          <RoseWindow size={340} className="w-full" />
        </div>

        {/* carved 404 lintel */}
        <div className="w-full max-w-[480px] mt-2" aria-hidden>
          <svg viewBox="0 0 600 110" xmlns="http://www.w3.org/2000/svg" className="block w-full h-auto">
            <defs>
              <linearGradient id="lintel-stone-404" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%"  stopColor="#2a1f15" />
                <stop offset="50%" stopColor="#150f0a" />
                <stop offset="100%" stopColor="#0a0705" />
              </linearGradient>
              <linearGradient id="lintel-edge-404" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(245,209,104,0.35)" />
                <stop offset="100%" stopColor="rgba(245,209,104,0)" />
              </linearGradient>
            </defs>
            <path
              d="M 30 18 L 570 18 L 590 90 L 10 90 Z"
              fill="url(#lintel-stone-404)"
              stroke="#020408"
              strokeWidth="2"
            />
            <line x1="30" y1="20" x2="570" y2="20" stroke="url(#lintel-edge-404)" strokeWidth="1.4" />
            <circle cx="46"  cy="54" r="4" fill="#3a2510" stroke="#020408" strokeWidth="1" />
            <circle cx="46"  cy="54" r="1.6" fill="#f5d168" />
            <circle cx="554" cy="54" r="4" fill="#3a2510" stroke="#020408" strokeWidth="1" />
            <circle cx="554" cy="54" r="1.6" fill="#f5d168" />
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
                paintOrder: 'stroke fill',
              }}
              stroke="#020408"
              strokeWidth="0.8"
            >
              404
            </text>
          </svg>
        </div>

        <h1 className="font-serif text-2xl sm:text-3xl text-[#e3c389] mt-6 tracking-wide">
          This aisle is empty.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#c9b489] max-w-md leading-relaxed">
          The page you were looking for has either moved, been taken down, or
          never existed. The cathedral is large; it&apos;s easy to wander.
        </p>

        {/* jewel divider */}
        <div className="w-60 h-[2px] my-8 bg-gradient-to-r from-transparent via-[#5b8de6] via-[#d63b54] via-[#3fa05a] via-[#f5d168] via-[#e88aa8] to-transparent opacity-90" />

        <Link
          href="/"
          className="inline-flex items-center gap-2 font-serif text-sm sm:text-base uppercase tracking-[0.18em] text-[#f5d168] hover:text-white transition-colors duration-300 px-6 py-3 border border-[#3a2510] bg-[#0a0705]/70 backdrop-blur-sm rounded-sm shadow-[0_6px_20px_rgba(0,0,0,0.6)] hover:border-[#f5d168]/40"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Return to the nave
        </Link>
      </div>
    </section>
  )
}
