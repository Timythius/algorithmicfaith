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
  url?: string
  free: boolean
}

const resources: Resource[] = [
  {
    title: 'Ponder Packs',
    description:
      'Velvet-touch Catholic prayer cards by Ewa and Stasiek — themed packs with art, a card stand, and a How-to-Pray card. Create a sacred prayer space and ponder the true, good, and beautiful.',
    category: 'Prayer & Devotion',
    url: 'https://www.ponderpack.com.au',
    free: false,
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
            Vault
          </h1>
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
          ))
        )}
      </div>
    </div>
  )
}
