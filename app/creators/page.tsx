import CreatorCard from '@/components/CreatorCard'

export const metadata = {
  title: 'Creators',
  description: 'Faith creators making waves on YouTube, TikTok, and beyond',
}

export type Creator = {
  name: string
  handle: string
  platform: 'YouTube' | 'TikTok' | 'Instagram' | 'Podcast' | 'Multi-platform'
  description: string
  subscribers?: string
  tags: string[]
  url: string
  imageUrl?: string
}

const creators: Creator[] = [
  {
    name: 'The Bush Chapel',
    handle: '@thebushchapel',
    platform: 'YouTube',
    description:
      'Emma Woods makes a quiet little chapel service for the people the algorithm forgets — those worshipping from home or bedside, in the hush of the Australian bush. Piano, Scripture, reflection, prayer, blessing. Make a cuppa first.',
    tags: ['Worship', 'Lectionary', 'Accessibility'],
    url: 'https://www.youtube.com/@thebushchapel',
  },
  {
    name: 'The Myth Pilgrim',
    handle: '@TheMythPilgrim',
    platform: 'Podcast',
    description:
      'Lawrence Kai finds God hiding in the stories we already love — scripture alongside The Lord of the Rings, saints alongside Star Wars. A Catholic podcast that treats myth, fairytale, and pop culture as real doors into the spiritual life.',
    tags: ['Mythology', 'Catholic', 'Pop Culture', 'Storytelling', 'Spiritual Direction'],
    url: 'https://open.spotify.com/show/4nCiKyK0eqw5R3DYuSCZjZ',
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
            People and projects I actually know — small, honest, and worth your time.
          </p>
        </div>
      </div>

      {/* Creator Grid */}
      <div className="max-w-5xl mx-auto px-6 pt-8 pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          {creators.map((creator) => (
            <CreatorCard key={creator.handle} creator={creator} />
          ))}
        </div>
      </div>
    </div>
  )
}
