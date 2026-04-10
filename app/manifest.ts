import type { MetadataRoute } from 'next'

/**
 * Web app manifest — lets iOS / Android offer "Add to Home Screen"
 * with the rose icon, our dark cathedral theme, and a standalone
 * launch (no browser chrome). Auto-served by Next.js at /manifest.webmanifest
 * via the file convention.
 *
 * Icons reference the existing app/icon.tsx (192) and app/apple-icon.tsx
 * (180) so there's no duplicated graphic — they're rendered on the fly
 * by next/og.
 */

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Algorithmic Faith',
    short_name: 'Algorithmic',
    description:
      'Where faith meets the feed. Spotlighting the creators using YouTube, TikTok, and AI to share their message with the world.',
    start_url: '/',
    display: 'standalone',
    background_color: '#050302',
    theme_color: '#050302',
    orientation: 'portrait',
    icons: [
      {
        src: '/icon',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}
