'use client'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950"
        style={{
          backgroundSize: '400% 400%',
          animation: 'gradient-pulse 8s ease infinite',
        }}
      />

      {/* Subtle Overlay Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(251, 191, 36, 0.08) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Animated Gold Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(251, 191, 36, 0.3) 0%, transparent 70%)',
            animation: 'pulse 4s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(217, 119, 6, 0.3) 0%, transparent 70%)',
            animation: 'pulse 4s ease-in-out infinite 2s',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6">
          Algorithmic
          <span className="block text-gold-400">Faith</span>
        </h1>

        {/* Subtle divider */}
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-8" />

        <p className="text-lg md:text-xl text-dark-300 max-w-2xl mx-auto mb-4">
          Where faith meets the feed. Spotlighting the creators using YouTube, TikTok, and AI to share their message with the world.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <a
            href="/creators"
            className="bg-gold-500 hover:bg-gold-400 text-dark-950 font-semibold px-6 py-3 rounded-xl transition-colors duration-300"
          >
            Meet the Creators
          </a>
          <a
            href="/blog"
            className="border border-dark-600 hover:border-gold-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-300"
          >
            Latest Posts
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-dark-400"
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

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent" />
    </section>
  )
}
