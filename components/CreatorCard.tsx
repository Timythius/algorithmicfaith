import { Creator } from '@/app/creators/page'

const platformColors: Record<string, string> = {
  YouTube: 'bg-ruby-500/10 text-ruby-400 border-ruby-500/20',
  TikTok: 'bg-amethyst-500/10 text-amethyst-400 border-amethyst-500/20',
  Instagram: 'bg-amethyst-500/10 text-amethyst-300 border-amethyst-500/20',
  Podcast: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'Multi-platform': 'bg-sapphire-500/10 text-sapphire-400 border-sapphire-500/20',
}

const tagColors = [
  'bg-ruby-500/10 text-ruby-400 border-ruby-500/20',
  'bg-sapphire-500/10 text-sapphire-400 border-sapphire-500/20',
  'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'bg-amethyst-500/10 text-amethyst-400 border-amethyst-500/20',
  'bg-gold-500/10 text-gold-400 border-gold-500/20',
]

export default function CreatorCard({ creator }: { creator: Creator }) {
  return (
    <a
      href={creator.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block stained-card glass-panel leadline rounded-2xl p-6 hover:border-dark-600 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-serif text-xl font-bold text-white group-hover:text-gold-400 transition-colors duration-300">
            {creator.name}
          </h3>
          <p className="text-dark-400 text-sm">{creator.handle}</p>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium border ${
            platformColors[creator.platform] || 'bg-dark-800 text-dark-300 border-dark-700'
          }`}
        >
          {creator.platform}
        </span>
      </div>

      <p className="text-dark-300 mb-4 leading-relaxed">{creator.description}</p>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {creator.tags.map((tag, i) => (
            <span
              key={tag}
              className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${tagColors[i % tagColors.length]}`}
            >
              {tag}
            </span>
          ))}
        </div>
        {creator.subscribers && (
          <span className="text-dark-500 text-sm">{creator.subscribers}</span>
        )}
      </div>
    </a>
  )
}
