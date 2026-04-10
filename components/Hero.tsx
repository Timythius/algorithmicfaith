/**
 * Hero — cathedral wall.
 *
 * Composition:
 *   • dark warm stone background with faint granite noise texture
 *   • coloured caustic light spill on the wall below the rose, as if
 *     the glass were casting it
 *   • centered rose window
 *   • title in Cinzel below the rose, with an illuminated drop cap
 *   • a row of 5 lancet windows below the title, each in its own color
 *   • CTAs at the bottom
 */

import type { Post } from '@/lib/posts'
import RoseWindow from './RoseWindow'
import LancetRow from './LancetRow'
import DropCap from './DropCap'

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

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-12 flex flex-col items-center">
        {/* Rose window centerpiece */}
        <div className="rose-stage relative">
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

        {/* Title below the rose, with illuminated drop cap */}
        <h1 className="font-serif mt-12 text-center text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#e3c389] drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
          <span className="inline-flex items-center gap-1">
            <DropCap letter="A" palette="sapphire" />
            <span>lgorithmic</span>
          </span>
          <span className="block text-[#f5d168] mt-1">Faith</span>
        </h1>

        <p className="mt-5 text-center text-base sm:text-lg text-[#c9b489] max-w-2xl mx-auto leading-relaxed px-4">
          Where faith meets the feed. Spotlighting the creators using
          YouTube, TikTok, and AI to share their message with the world.
        </p>

        {/* Jewel divider — now spans all 5 lancet colors */}
        <div className="w-72 h-[2px] my-10 bg-gradient-to-r from-transparent via-[#5b8de6] via-[#d63b54] via-[#3fa05a] via-[#f5d168] via-[#e88aa8] to-transparent opacity-90" />

        {/* The lancet row */}
        <div className="w-full overflow-x-auto pb-2">
          <div className="min-w-fit mx-auto px-4">
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
