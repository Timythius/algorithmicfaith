'use client'

type Props = {
  url: string
  title?: string
}

function getVideoId(url: string): { type: 'youtube' | 'vimeo' | 'spotify-episode' | 'spotify-show' | 'unknown'; id: string } {
  // YouTube patterns
  const youtubePatterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
  ]

  for (const pattern of youtubePatterns) {
    const match = url.match(pattern)
    if (match) {
      return { type: 'youtube', id: match[1] }
    }
  }

  // Vimeo patterns
  const vimeoPattern = /(?:vimeo\.com\/)(\d+)/
  const vimeoMatch = url.match(vimeoPattern)
  if (vimeoMatch) {
    return { type: 'vimeo', id: vimeoMatch[1] }
  }

  // Spotify patterns
  const spotifyEpisodePattern = /open\.spotify\.com\/episode\/([a-zA-Z0-9]+)/
  const spotifyEpisodeMatch = url.match(spotifyEpisodePattern)
  if (spotifyEpisodeMatch) {
    return { type: 'spotify-episode', id: spotifyEpisodeMatch[1] }
  }

  const spotifyShowPattern = /open\.spotify\.com\/show\/([a-zA-Z0-9]+)/
  const spotifyShowMatch = url.match(spotifyShowPattern)
  if (spotifyShowMatch) {
    return { type: 'spotify-show', id: spotifyShowMatch[1] }
  }

  return { type: 'unknown', id: '' }
}

export default function VideoEmbed({ url, title = 'Embedded video' }: Props) {
  const { type, id } = getVideoId(url)

  if (type === 'unknown') {
    return (
      <div className="video-container bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">Unable to embed video. <a href={url} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Watch on original site</a></p>
      </div>
    )
  }

  if (type === 'spotify-episode' || type === 'spotify-show') {
    const spotifyType = type === 'spotify-episode' ? 'episode' : 'show'
    return (
      <div className="my-6">
        <iframe
          src={`https://open.spotify.com/embed/${spotifyType}/${id}?theme=0`}
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          style={{ borderRadius: '12px', border: 'none' }}
          title={title}
        />
      </div>
    )
  }

  const embedUrl = type === 'youtube'
    ? `https://www.youtube.com/embed/${id}`
    : `https://player.vimeo.com/video/${id}`

  return (
    <div className="video-container">
      <iframe
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
