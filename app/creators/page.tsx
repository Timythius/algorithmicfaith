import CreatorCard from '@/components/CreatorCard'

export const metadata = {
  title: 'Creators',
  description: 'Faith creators making waves on YouTube, TikTok, and beyond',
}

export type Creator = {
  name: string
  handle: string
  platform: 'YouTube' | 'TikTok' | 'Instagram' | 'Multi-platform'
  description: string
  subscribers: string
  tags: string[]
  url: string
  imageUrl?: string
}

const creators: Creator[] = [
  {
    name: 'The Bible Project',
    handle: '@bibleproject',
    platform: 'YouTube',
    description:
      'Stunning animated videos that break down biblical themes, books, and concepts. They\'ve made theology visual, accessible, and binge-worthy.',
    subscribers: '5M+',
    tags: ['Theology', 'Animation', 'Education'],
    url: 'https://www.youtube.com/@bibleproject',
  },
  {
    name: 'Elevation Church',
    handle: '@elevationchurch',
    platform: 'YouTube',
    description:
      'Pastor Steven Furtick and the Elevation team have mastered the algorithm — sermon clips, worship sets, and shorts that consistently trend.',
    subscribers: '4M+',
    tags: ['Sermons', 'Worship', 'Shorts'],
    url: 'https://www.youtube.com/@elevationchurch',
  },
  {
    name: 'Jackie Hill Perry',
    handle: '@jackiehillperry',
    platform: 'Multi-platform',
    description:
      'Poet, author, and speaker bringing sharp theological thinking to social media. Her TikToks and Reels cut through the noise with honesty and depth.',
    subscribers: '500K+',
    tags: ['Theology', 'Culture', 'Poetry'],
    url: 'https://www.youtube.com/@JackieHillPerry',
  },
  {
    name: 'The Chosen',
    handle: '@thechosen',
    platform: 'Multi-platform',
    description:
      'The crowdfunded series about the life of Jesus became a cultural phenomenon — and their social media strategy is a masterclass in faith content.',
    subscribers: '8M+',
    tags: ['Film', 'Storytelling', 'Community'],
    url: 'https://www.youtube.com/@TheChosen',
  },
  {
    name: 'Mike Todd',
    handle: '@iammiketodd',
    platform: 'YouTube',
    description:
      'Transformation Church pastor whose energetic preaching style and creative visuals have made him one of the most-watched faith voices online.',
    subscribers: '3M+',
    tags: ['Sermons', 'Creative', 'Youth'],
    url: 'https://www.youtube.com/@TransformationChurch',
  },
  {
    name: 'Lecrae',
    handle: '@lecrae',
    platform: 'Multi-platform',
    description:
      'Grammy-winning artist who bridges faith and hip-hop culture. Uses every platform to spark real conversations about identity, race, and belief.',
    subscribers: '1M+',
    tags: ['Music', 'Culture', 'Hip-Hop'],
    url: 'https://www.youtube.com/@Lecrae',
  },
]

export default function CreatorsPage() {
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
            Faith Creators
          </h1>
          {/* Jewel divider */}
          <div className="w-48 h-[2px] mx-auto mb-6 bg-gradient-to-r from-transparent via-ruby-500 via-amethyst-500 via-sapphire-500 via-emerald-500 via-gold-500 to-transparent" />
          <p className="text-xl text-dark-300 max-w-2xl mx-auto">
            The people using platforms and algorithms to share faith with the world. Here are the ones worth following.
          </p>
        </div>
      </div>

      {/* Filter Tags */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {[
            { label: 'All', color: 'bg-gold-500 text-dark-950' },
            { label: 'YouTube', color: 'bg-ruby-500/10 text-ruby-400 border border-ruby-500/20' },
            { label: 'TikTok', color: 'bg-amethyst-500/10 text-amethyst-400 border border-amethyst-500/20' },
            { label: 'Multi-platform', color: 'bg-sapphire-500/10 text-sapphire-400 border border-sapphire-500/20' },
          ].map((filter) => (
            <span
              key={filter.label}
              className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 ${filter.color}`}
            >
              {filter.label}
            </span>
          ))}
        </div>
      </div>

      {/* Creator Grid */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          {creators.map((creator) => (
            <CreatorCard key={creator.handle} creator={creator} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center glass-panel leadline rounded-2xl p-8">
          <h3 className="font-serif text-2xl font-bold text-white mb-3">
            Know a creator I should feature?
          </h3>
          <p className="text-dark-300 mb-6">
            I&apos;m always looking for faith creators doing great work on any platform.
          </p>
          <a
            href="mailto:hello@algorithmicfaith.com"
            className="inline-flex items-center bg-gold-500 hover:bg-gold-400 text-dark-950 font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(251,191,36,0.3)]"
          >
            Suggest a Creator
          </a>
        </div>
      </div>
    </div>
  )
}
