/**
 * Shared navigation data for the five lancet windows. Both the
 * homepage hero LancetRow and the slim MiniLancetNav header consume
 * this list so the colours, order, and destinations stay in sync.
 *
 * Order is left → right. The middle item is the focal (tallest)
 * lancet — Creators is centred because the whole site is built to
 * spotlight them.
 */

import type { PaletteName } from './GlassPatterns'

export type NavLancet = {
  label: string
  href: string
  palette: PaletteName
}

export const NAV_LANCETS: NavLancet[] = [
  { label: 'Home',      href: '/',          palette: 'sapphire' },
  { label: 'Blog',      href: '/blog',      palette: 'ruby'     },
  { label: 'Creators',  href: '/creators',  palette: 'rose'     },
  { label: 'Library',   href: '/library',   palette: 'emerald'  },
  { label: 'About',     href: '/about',     palette: 'yellow'   },
]
