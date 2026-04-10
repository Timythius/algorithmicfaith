import { Creator } from '@/app/creators/page'

const platformColors: Record<string, string> = {
  YouTube: 'bg-red-500/10 text-red-400 border-red-500/20',
  TikTok: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
  Instagram: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'Multi-platform': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
}

export default function CreatorCard({ creator }: { creator: Creator }) {
  return (
    <a
      href={creator.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-dark-900/50 border border-dark-800 rounded-2xl p-6 hover:border-dark-700 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-gold-400 transition-colors duration-300">
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
          {creator.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gold-500/10 text-gold-400 px-2.5 py-0.5 rounded-full text-xs font-medium border border-gold-500/20"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="text-dark-500 text-sm">{creator.subscribers}</span>
      </div>
    </a>
  )
}
