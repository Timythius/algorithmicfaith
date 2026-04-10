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
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(251, 191, 36, 0.3) 0%, transparent 70%)',
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Hey, I&apos;m Tim
          </h1>
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
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-gold-500 mr-4" />
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
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-gold-500 mr-4" />
              What You&apos;ll Find Here
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Creator spotlights — the people behind the content',
                'Curated videos and posts worth your time',
                'How algorithms affect faith content',
                'AI tools faith creators are actually using',
                'Platform breakdowns — YouTube, TikTok, and more',
                'Honest takes on what&apos;s working and what&apos;s not',
              ].map((topic) => (
                <div
                  key={topic}
                  className="flex items-center p-4 bg-dark-900/50 border border-dark-800 rounded-xl"
                >
                  <svg
                    className="w-5 h-5 text-gold-400 mr-3 flex-shrink-0"
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
                  <span className="text-dark-200">{topic}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Get in Touch */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-gold-500 mr-4" />
              Let&apos;s Connect
            </h2>
            <div className="bg-gradient-to-br from-dark-900 to-dark-900/50 border border-dark-800 rounded-2xl p-8">
              <p className="text-dark-300 text-lg mb-6">
                Know a faith creator I should feature? Got a take on algorithms and faith you want to share? I&apos;d love to hear from you.
              </p>
              <a
                href="mailto:hello@algorithmicfaith.com"
                className="inline-flex items-center bg-gold-500 hover:bg-gold-400 text-dark-950 font-semibold px-6 py-3 rounded-xl transition-colors duration-300"
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
