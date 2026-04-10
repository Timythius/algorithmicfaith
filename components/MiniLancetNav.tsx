'use client'

/**
 * MiniLancetNav — slim cathedral "entablature" used as the site header on
 * every non-home page. It's the same five-lancet primary nav from the
 * homepage hero, miniaturised into a horizontal stone band so it can sit
 * above page content without dominating it.
 *
 * Design intent (from Tim: "make sure it looks great"):
 *   • A carved stone band (warm dark gradient) spans the row.
 *   • A jewel-rainbow accent line runs along the top edge so it visually
 *     ties to the homepage hero's divider.
 *   • Five small pointed-arch lancets (mini LancetPanels) sit on the band
 *     in the Chartres order — Home · Blog · Creators · Resources · About.
 *   • The current page's lancet glows brighter and its label is gold.
 *   • Two small bosses bracket the row at each end the way the carved
 *     FAITH lintel does on the homepage, so the bar reads as part of the
 *     same architecture.
 */

import LancetPanel from './LancetPanel'
import { NAV_LANCETS, type NavLancet } from './navLancets'

type Props = {
  currentPath: string
}

function isActive(item: NavLancet, currentPath: string) {
  if (item.href === '/') return currentPath === '/'
  return currentPath === item.href || currentPath.startsWith(`${item.href}/`)
}

// Chartres rhythm in miniature: short · medium · tall · medium · short.
const MINI_HEIGHTS = [56, 64, 72, 64, 56]
const MINI_WIDTH = 38

export default function MiniLancetNav({ currentPath }: Props) {
  return (
    <nav
      aria-label="Site navigation"
      className="mini-lancet-nav relative w-full"
    >
      {/* Stone entablature band */}
      <div className="mini-lancet-band relative">
        {/* jewel rainbow accent along the top edge */}
        <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#5b8de6] via-[#d63b54] via-[#3fa05a] via-[#f5d168] via-[#e88aa8] to-transparent opacity-90" />

        {/* faint bevel highlight just under the jewel line */}
        <div className="absolute left-0 right-0 top-[2px] h-[1px] bg-[rgba(245,209,104,0.18)]" />

        <div className="relative mx-auto flex max-w-3xl items-end justify-center gap-3 sm:gap-5 px-6 pt-2 pb-1">
          {/* left carved boss */}
          <span aria-hidden className="hidden sm:block self-center">
            <svg width="14" height="14" viewBox="0 0 14 14">
              <circle cx="7" cy="7" r="6" fill="#3a2510" stroke="#020408" strokeWidth="1" />
              <circle cx="7" cy="7" r="2.4" fill="#f5d168" />
            </svg>
          </span>

          {NAV_LANCETS.map((item, i) => (
            <div key={item.href} className="flex items-end">
              <LancetPanel
                title={item.label}
                href={item.href}
                height={MINI_HEIGHTS[i]}
                width={MINI_WIDTH}
                palette={item.palette}
                mainWeight={item.palette === 'yellow' ? 'reduced' : 'full'}
                active={isActive(item, currentPath)}
              />
            </div>
          ))}

          {/* right carved boss */}
          <span aria-hidden className="hidden sm:block self-center">
            <svg width="14" height="14" viewBox="0 0 14 14">
              <circle cx="7" cy="7" r="6" fill="#3a2510" stroke="#020408" strokeWidth="1" />
              <circle cx="7" cy="7" r="2.4" fill="#f5d168" />
            </svg>
          </span>
        </div>

        {/* faint shadow falling from the band onto the page below */}
        <div className="absolute left-0 right-0 bottom-[-14px] h-[14px] bg-gradient-to-b from-black/70 to-transparent pointer-events-none" />
      </div>

      <style jsx>{`
        .mini-lancet-band {
          background:
            radial-gradient(ellipse 60% 80% at 50% 0%, rgba(74, 50, 24, 0.45), transparent 70%),
            linear-gradient(180deg, #1a1208 0%, #0c0805 60%, #050302 100%);
          border-bottom: 1px solid #020408;
          box-shadow: inset 0 -1px 0 rgba(245, 209, 104, 0.08);
        }
      `}</style>
    </nav>
  )
}
