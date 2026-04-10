export const metadata = {
  title: 'About | Algorithmic Faith',
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
            I built Algorithmic Faith to spotlight the creators using tech to spread faith — and to figure out how the algorithm fits into all of it.
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
                There&apos;s something wild happening right now. Faith creators — pastors, worship leaders, everyday believers — are reaching millions through YouTube and TikTok. They&apos;re not waiting for a church building or a Sunday slot. They&apos;re hitting record and letting the algorithm do its thing.
              </p>
              <p>
                But here&apos;s the question that keeps me up at night: how does the algorithm shape the message? When a 60-second TikTok about prayer goes viral, is that the Holy Spirit or the recommendation engine? Maybe both?
              </p>
              <p>
                Algorithmic Faith is where I explore that intersection. I spotlight creators who are doing incredible work, dig into how AI and algorithms are changing the game, and share what I&apos;m learning along the way.
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
                { text: 'AI tools faith creators are actually using', color: 'text-emerald-400' },
                { text: 'Platform breakdowns — YouTube, TikTok, and more', color: 'text-gold-400' },
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

          {/* Get in Touch */}
          <section>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-gradient-to-r from-amethyst-500 to-sapphire-500 mr-4" />
              Let&apos;s Connect
            </h2>
            <div className="glass-panel leadline rounded-2xl p-8">
              <p className="text-dark-300 text-lg mb-6">
                Know a faith creator I should feature? Got a take on algorithms and faith you want to share? I&apos;d love to hear from you.
              </p>
              <a
                href="mailto:hello@algorithmicfaith.com"
                className="inline-flex items-center bg-gold-500 hover:bg-gold-400 text-dark-950 font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(251,191,36,0.3)]"
              >
                Get in Touch
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
