'use client'

/**
 * RoseLoader — first-visit page transition.
 *
 * Shows a fullscreen black overlay with the rose window assembling
 * itself (radial reveal + fade), then fades out. Skipped on subsequent
 * navigations within the same session via sessionStorage. Honors
 * prefers-reduced-motion and the [data-lite="true"] flag on <html>.
 */

import { useEffect, useState } from 'react'
import RoseWindow from './RoseWindow'

export default function RoseLoader() {
  const [show, setShow] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (document.documentElement.dataset.lite === 'true') return
    if (sessionStorage.getItem('af-loader-seen')) return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return

    sessionStorage.setItem('af-loader-seen', '1')
    setShow(true)

    const t1 = setTimeout(() => setFadeOut(true), 850)
    const t2 = setTimeout(() => setShow(false), 1400)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  if (!show) return null

  return (
    <div
      className="rose-loader fixed inset-0 z-[100] flex items-center justify-center bg-[#020205]"
      style={{ opacity: fadeOut ? 0 : 1, transition: 'opacity 550ms ease' }}
      aria-hidden
    >
      <div className="rose-loader-inner">
        <RoseWindow size={420} static />
      </div>
      <style jsx>{`
        .rose-loader-inner {
          animation: rose-assemble 900ms cubic-bezier(0.22, 1, 0.36, 1) both;
          filter: drop-shadow(0 0 60px rgba(251, 191, 36, 0.25));
        }
        @keyframes rose-assemble {
          0%   { transform: scale(0.4) rotate(-25deg); opacity: 0; }
          60%  { opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
      `}</style>
    </div>
  )
}
