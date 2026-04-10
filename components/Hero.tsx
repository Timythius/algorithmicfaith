'use client'

import StainedGlassLogo from './StainedGlassLogo'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Deep cathedral background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />

      {/* Stained glass light rays from above */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Ruby ray */}
        <div
          className="absolute -top-20 left-[15%] w-32 h-[120%] opacity-[0.04] blur-3xl"
          style={{
            background: 'linear-gradient(180deg, #e11d48 0%, transparent 70%)',
            transform: 'rotate(-8deg)',
          }}
        />
        {/* Sapphire ray */}
        <div
          className="absolute -top-20 left-[35%] w-40 h-[120%] opacity-[0.05] blur-3xl"
          style={{
            background: 'linear-gradient(180deg, #2563eb 0%, transparent 60%)',
            transform: 'rotate(-3deg)',
          }}
        />
        {/* Gold ray */}
        <div
          className="absolute -top-20 left-[55%] w-36 h-[120%] opacity-[0.06] blur-3xl"
          style={{
            background: 'linear-gradient(180deg, #fbbf24 0%, transparent 65%)',
            transform: 'rotate(2deg)',
          }}
        />
        {/* Emerald ray */}
        <div
          className="absolute -top-20 right-[20%] w-32 h-[120%] opacity-[0.04] blur-3xl"
          style={{
            background: 'linear-gradient(180deg, #059669 0%, transparent 60%)',
            transform: 'rotate(6deg)',
          }}
        />
        {/* Amethyst ray */}
        <div
          className="absolute -top-20 right-[35%] w-28 h-[120%] opacity-[0.04] blur-3xl"
          style={{
            background: 'linear-gradient(180deg, #a855f7 0%, transparent 55%)',
            transform: 'rotate(4deg)',
          }}
        />
      </div>

      {/* Slow-rotating rose window background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06] animate-rotate-slow">
        <StainedGlassLogo size={600} />
      </div>

      {/* Secondary smaller rose window glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]">
        <StainedGlassLogo size={900} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Rose window icon */}
        <div className="mb-8 flex justify-center">
          <div className="glow-gold rounded-full p-2">
            <StainedGlassLogo size={80} />
          </div>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6">
          Algorithmic
          <span className="block text-gold-400">Faith</span>
        </h1>

        {/* Jewel-tone divider */}
        <div className="w-48 h-[2px] mx-auto mb-8 bg-gradient-to-r from-transparent via-ruby-500 via-amethyst-500 via-sapphire-500 via-emerald-500 via-gold-500 to-transparent" />

        <p className="text-lg md:text-xl text-dark-300 max-w-2xl mx-auto mb-4 leading-relaxed">
          Where faith meets the feed. Spotlighting the creators using YouTube, TikTok, and AI to share their message with the world.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href="/creators"
            className="bg-gold-500 hover:bg-gold-400 text-dark-950 font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(251,191,36,0.3)]"
          >
            Meet the Creators
          </a>
          <a
            href="/blog"
            className="border border-dark-600 hover:border-gold-500/50 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(251,191,36,0.1)]"
          >
            Latest Posts
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-dark-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent" />
    </section>
  )
}
