export const metadata = {
  title: 'About',
  description: 'The story behind Algorithmic Faith — why I started spotlighting faith creators in the algorithm age',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-dark-950">
      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-950" />
        {/* Stained glass light rays */}
        <div className="absolute top-0 left-1/3 w-48 h-full opacity-[0.04] blur-3xl" style={{ background: 'linear-gradient(180deg, #fbbf24 0%, transparent 50%)' }} />
        <div className="absolute top-0 right-1/3 w-48 h-full opacity-[0.03] blur-3xl" style={{ background: 'linear-gradient(180deg, #2563eb 0%, transparent 50%)' }} />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Hey, I&apos;m Tim
          </h1>
          {/* Jewel divider */}
          <div className="w-48 h-[2px] mx-auto mb-6 bg-gradient-to-r from-transparent via-ruby-500 via-amethyst-500 via-sapphire-500 via-emerald-500 via-gold-500 to-transparent" />
          <p className="text-xl text-dark-300 max-w-2xl mx-auto">
            I built Algorithmic Faith to spotlight the creators bringing faith to the feed.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-16">
          {/* The Story */}
          <section>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-gradient-to-r from-ruby-500 to-gold-500 mr-4" />
              Why This Exists
            </h2>
            <div className="space-y-6 text-dark-300 text-lg leading-relaxed">
              <p>
                There&apos;s something wild happening right now. Faith creators — priests and pastors, religious sisters and worship leaders, lay Christians of every tradition — are reaching millions through every corner of the feed the algorithm lets them into.
              </p>
              <p>
                Algorithmic Faith is where I explore what faith does to the feed. I spotlight creators who are doing incredible work, dig into how algorithms are changing the game, and share what I&apos;m learning along the way.
              </p>
            </div>
          </section>

          {/* What You'll Find */}
          <section>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-gradient-to-r from-sapphire-500 to-emerald-500 mr-4" />
              What You&apos;ll Find Here
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { text: 'Creator spotlights — the people behind the content', color: 'text-ruby-400' },
                { text: 'Curated videos and posts worth your time', color: 'text-sapphire-400' },
                { text: 'How algorithms affect faith content', color: 'text-amethyst-400' },
                { text: 'Tools and tips from the creators themselves', color: 'text-emerald-400' },
                { text: 'Platform breakdowns — from YouTube to Substack and everywhere between', color: 'text-gold-400' },
                { text: 'Honest takes on what\'s working and what\'s not', color: 'text-ruby-400' },
              ].map((topic) => (
                <div
                  key={topic.text}
                  className="flex items-center p-4 glass-panel leadline rounded-xl"
                >
                  <svg
                    className={`w-5 h-5 ${topic.color} mr-3 flex-shrink-0`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-dark-200">{topic.text}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
