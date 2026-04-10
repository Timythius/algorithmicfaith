'use client'

/**
 * LiteToggle — switches the site between full cathedral mode and a
 * stripped-down "lite" theme (no SVG hero, no animations). Stored in
 * localStorage and applied to <html> via data-lite for CSS targeting.
 */

import { useEffect, useState } from 'react'

const KEY = 'af-lite'

export default function LiteToggle() {
  const [lite, setLite] = useState(false)

  // hydrate from storage
  useEffect(() => {
    if (typeof window === 'undefined') return
    const stored = localStorage.getItem(KEY) === '1'
    setLite(stored)
    document.documentElement.dataset.lite = stored ? 'true' : 'false'
  }, [])

  function toggle() {
    const next = !lite
    setLite(next)
    localStorage.setItem(KEY, next ? '1' : '0')
    document.documentElement.dataset.lite = next ? 'true' : 'false'
  }

  return (
    <button
      type="button"
      onClick={toggle}
      title={lite ? 'Switch to cathedral mode' : 'Switch to lite mode'}
      aria-label={lite ? 'Switch to cathedral mode' : 'Switch to lite mode'}
      className="text-dark-300 hover:text-gold-400 transition-colors duration-300 px-2 py-1 rounded border border-dark-700 hover:border-gold-500/50 text-xs font-medium tracking-wide"
    >
      {lite ? 'Cathedral' : 'Lite'}
    </button>
  )
}
