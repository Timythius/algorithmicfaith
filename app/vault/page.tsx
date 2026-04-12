const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')

export const metadata = {
  title: 'Vault',
  description: 'A slow-grown collection of resources I trust',
  alternates: { canonical: `${SITE_URL}/vault` },
}

type Resource = {
  title: string
  description: string
  category: string
  tags: string[]
  url?: string
}

const resources: Resource[] = [
  {
    title: 'Ponder Packs',
    description:
      'Velvet-touch Catholic prayer cards by Ewa and Stasiek — themed packs with art, a card stand, and a How-to-Pray card. Create a sacred prayer space and ponder the true, good, and beautiful.',
    category: 'Prayer & Devotion',
    tags: ['Catholic', 'Prayer Cards', 'Australian'],
    url: 'https://www.ponderpack.com.au',
  },
  {
    title: 'Rosary Devotionals',
    description:
      'Handmade rosaries, chaplets, and Catholic devotional goods from Australia — glass, gemstone, paracord, and WW1 combat battle rosaries, plus sixteen different chaplets, sacrifice beads, and sacrament gifts. Made by hand, priced honestly.',
    category: 'Prayer & Devotion',
    tags: ['Catholic', 'Rosary', 'Handmade'],
    url: 'https://rosarydevotionals.com.au',
  },
]

const categories = Array.from(new Set(resources.map((r) => r.category)))

const tagColors = [
  'bg-ruby-500/10 text-ruby-400 border-ruby-500/20',
  'bg-sapphire-500/10 text-sapphire-400 border-sapphire-500/20',
  'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'bg-amethyst-500/10 text-amethyst-400 border-amethyst-500/20',
  'bg-gold-500/10 text-gold-400 border-gold-500/20',
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-dark-950">
      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-950" />
        {/* Stained glass light rays */}
        <div className="absolute top-0 left-1/4 w-48 h-full opacity-[0.04] blur-3xl" style={{ background: 'linear-gradient(180deg, #e11d48 0%, transparent 50%)' }} />
        <div className="absolute top-0 right-1/4 w-48 h-full opacity-[0.04] blur-3xl" style={{ background: 'linear-gradient(180deg, #a855f7 0%, transparent 50%)' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-full opacity-[0.05] blur-3xl" style={{ background: 'linear-gradient(180deg, #fbbf24 0%, transparent 40%)' }} />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Vault
          </h1>
          {/* Jewel divider */}
          <div className="w-48 h-[2px] mx-auto mb-6 bg-gradient-to-r from-transparent via-ruby-500 via-amethyst-500 via-sapphire-500 via-emerald-500 via-gold-500 to-transparent" />
          <p className="text-xl text-dark-300 max-w-2xl mx-auto">
            A slow-grown collection of resources I actually trust. Filling up gradually.
          </p>
        </div>
      </div>

      {/* Resources by Category */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        {resources.length === 0 ? (
          <div className="glass-panel leadline rounded-2xl p-10 text-center">
            <div className="w-32 h-[2px] mx-auto mb-6 bg-gradient-to-r from-transparent via-ruby-500 via-amethyst-500 via-sapphire-500 via-emerald-500 via-gold-500 to-transparent" />
            <h3 className="font-serif text-2xl text-white mb-3">The vault is quiet for now.</h3>
            <p className="text-dark-300 max-w-xl mx-auto">
              I&apos;d rather list nothing than list filler. Real entries will land here as I find resources worth your time.
            </p>
          </div>
        ) : (
          categories.map((category) => (
            <div key={category} className="mb-12">
              <h2 className="font-serif text-2xl font-bold text-white mb-8 flex items-center">
                <span className="w-8 h-0.5 bg-gold-500 mr-4" />
                {category}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {resources
                  .filter((r) => r.category === category)
                  .map((resource) => (
                    <a
                      key={resource.title}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block stained-card glass-panel leadline rounded-2xl p-6 hover:border-dark-600 transition-all duration-300"
                    >
                      <div className="mb-3">
                        <h3 className="font-serif text-xl font-bold text-white group-hover:text-gold-400 transition-colors duration-300">
                          {resource.title}
                        </h3>
                      </div>
                      <p className="text-dark-300 text-sm leading-relaxed mb-4">
                        {resource.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {resource.tags.map((tag, i) => (
                          <span
                            key={tag}
                            className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${tagColors[i % tagColors.length]}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </a>
                  ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
