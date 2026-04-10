export const metadata = {
  title: 'Library | Algorithmic Faith',
  description: 'Tools, guides, and resources for faith creators navigating algorithms and AI',
}

type Resource = {
  title: string
  description: string
  category: string
  url?: string
  free: boolean
}

const resources: Resource[] = [
  {
    title: 'TubeBuddy',
    description:
      'YouTube SEO and optimization tool. Great for finding keywords that faith content audiences are actually searching for.',
    category: 'YouTube Tools',
    url: 'https://www.tubebuddy.com',
    free: false,
  },
  {
    title: 'vidIQ',
    description:
      'Another solid YouTube analytics tool. Their trend alerts can help you spot rising faith-related topics before they peak.',
    category: 'YouTube Tools',
    url: 'https://vidiq.com',
    free: true,
  },
  {
    title: 'Canva',
    description:
      'Design thumbnails, social graphics, and sermon slides. The free tier is genuinely powerful for most faith creators.',
    category: 'Design',
    url: 'https://www.canva.com',
    free: true,
  },
  {
    title: 'Descript',
    description:
      'Edit video and audio by editing text. Game-changer for sermon clips and podcast content. AI features make it fast.',
    category: 'AI Tools',
    url: 'https://www.descript.com',
    free: true,
  },
  {
    title: 'Opus Clip',
    description:
      'AI-powered tool that turns long-form sermons and talks into viral short-form clips. Built for the TikTok/Shorts/Reels workflow.',
    category: 'AI Tools',
    url: 'https://www.opus.pro',
    free: true,
  },
  {
    title: 'ChatGPT / Claude',
    description:
      'Use AI to brainstorm sermon series titles, write video descriptions, generate social captions, and outline content calendars.',
    category: 'AI Tools',
    free: true,
  },
  {
    title: 'CapCut',
    description:
      'Free video editor with trending templates, auto-captions, and effects. The go-to for TikTok and Reels creators.',
    category: 'Video Editing',
    url: 'https://www.capcut.com',
    free: true,
  },
  {
    title: 'Later',
    description:
      'Schedule and plan content across platforms. Visual calendar makes it easy to maintain a consistent posting rhythm.',
    category: 'Scheduling',
    url: 'https://later.com',
    free: true,
  },
]

const categories = Array.from(new Set(resources.map((r) => r.category)))

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-dark-950">
      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-950" />
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(251, 191, 36, 0.3) 0%, transparent 70%)',
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Library
          </h1>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto">
            Tools and platforms that faith creators are using to grow, create, and connect. Tried, tested, and worth your time.
          </p>
        </div>
      </div>

      {/* Resources by Category */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-gold-500 mr-4" />
              {category}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {resources
                .filter((r) => r.category === category)
                .map((resource) => (
                  <div
                    key={resource.title}
                    className="bg-dark-900/50 border border-dark-800 rounded-xl p-6 hover:border-dark-700 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-white">
                        {resource.url ? (
                          <a
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gold-400 transition-colors"
                          >
                            {resource.title}
                          </a>
                        ) : (
                          resource.title
                        )}
                      </h3>
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                          resource.free
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                            : 'bg-gold-500/10 text-gold-400 border-gold-500/20'
                        }`}
                      >
                        {resource.free ? 'Free tier' : 'Paid'}
                      </span>
                    </div>
                    <p className="text-dark-300 text-sm leading-relaxed">
                      {resource.description}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        ))}

        {/* Tips Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="w-8 h-0.5 bg-gold-500 mr-4" />
            Quick Tips for Faith Creators
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: 'Post consistently',
                tip: 'The algorithm rewards consistency more than perfection. Pick a schedule you can sustain and stick with it.',
              },
              {
                title: 'Hook in 3 seconds',
                tip: 'On short-form platforms, your first 3 seconds decide everything. Lead with the most compelling moment.',
              },
              {
                title: 'Engage your comments',
                tip: 'Replying to comments within the first hour signals the algorithm that your content sparks conversation.',
              },
              {
                title: 'Repurpose everything',
                tip: 'One sermon = YouTube video + 5 shorts + podcast episode + quote graphics. Work smarter.',
              },
              {
                title: 'Use captions always',
                tip: '85% of social video is watched on mute. Auto-captions aren\'t optional — they\'re essential.',
              },
              {
                title: 'Study your analytics',
                tip: 'Check which videos retain viewers past 30 seconds. That tells you more than view counts ever will.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-dark-900/50 border border-dark-800 rounded-xl p-5"
              >
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-dark-400 text-sm leading-relaxed">{item.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
