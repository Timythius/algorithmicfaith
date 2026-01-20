export const metadata = {
  title: 'About | Algorithmic Faith',
  description: 'Learn more about Algorithmic Faith - exploring technology, philosophy, and human understanding',
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
            About
          </h1>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto">
            A space for exploring ideas at the intersection of technology, philosophy,
            and human understanding.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-16">
          {/* What We Explore */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-gold-500 mr-4" />
              What We Explore
            </h2>
            <div className="space-y-6 text-dark-300 text-lg leading-relaxed">
              <p>
                In an age where algorithms shape our experiences and artificial intelligence
                challenges our assumptions about consciousness and creativity, we need spaces
                for thoughtful reflection.
              </p>
              <p>
                This blog curates and discusses videos, articles, and ideas that help us
                navigate these questions with both intellectual rigor and openness to wonder.
              </p>
            </div>
          </section>

          {/* Topics */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-gold-500 mr-4" />
              Topics
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Artificial Intelligence and its implications',
                'Philosophy of mind and consciousness',
                'Technology and society',
                'Ethics in the digital age',
                'The future of human-machine collaboration',
                'Digital transformation of faith',
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
              Get in Touch
            </h2>
            <div className="bg-gradient-to-br from-dark-900 to-dark-900/50 border border-dark-800 rounded-2xl p-8">
              <p className="text-dark-300 text-lg mb-6">
                Have a thought-provoking article or video to share? Want to start a conversation?
                Reach out and let&apos;s explore these ideas together.
              </p>
              <a
                href="mailto:hello@algorithmicfaith.com"
                className="inline-flex items-center bg-gold-500 hover:bg-gold-400 text-dark-950 font-semibold px-6 py-3 rounded-xl transition-colors duration-300"
              >
                Start a Conversation
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
