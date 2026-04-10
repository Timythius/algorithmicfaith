/**
 * LancetRow — five lancets in the classic Chartres arrangement
 * (short, medium, tall, medium, short). Each lancet is a top-level
 * navigation link; the centre is the focal page.
 */

import LancetPanel from './LancetPanel'
import { NAV_LANCETS, type NavLancet } from './navLancets'

type Props = {
  /** Pathname of the current page so the matching lancet can glow. */
  currentPath?: string
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

function isActive(item: NavLancet, currentPath?: string) {
  if (!currentPath) return false
  if (item.href === '/') return currentPath === '/'
  return currentPath === item.href || currentPath.startsWith(`${item.href}/`)
}

export default function LancetRow({
  currentPath,
  heights = DEFAULT_HEIGHTS,
  panelWidth = 110,
  className = 'lancet-row flex items-end justify-center gap-2 sm:gap-3 md:gap-5',
  fluid = false,
}: Props) {
  return (
    <div className={className}>
      {NAV_LANCETS.map((item, i) => {
        const panel = (
          <LancetPanel
            title={item.label}
            href={item.href}
            height={heights[i]}
            width={panelWidth}
            palette={item.palette}
            // The right-end yellow is muted so it doesn't out-shout the row.
            mainWeight={item.palette === 'yellow' ? 'reduced' : 'full'}
            fluid={fluid}
            active={isActive(item, currentPath)}
          />
        )
        if (fluid) {
          return (
            <div key={item.href} className="flex-1 min-w-0 flex items-end">
              {panel}
            </div>
          )
        }
        return <div key={item.href}>{panel}</div>
      })}
    </div>
  )
}
