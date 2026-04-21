import JsonLd from '@/components/JsonLd'

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')

export const metadata = {
  title: 'About Tim — Founder of Algorithmic Faith',
  description: 'The story behind Algorithmic Faith — why Tim started spotlighting faith creators in the algorithm age.',
  alternates: { canonical: `${SITE_URL}/about` },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-dark-950">
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        mainEntity: {
          '@type': 'Person',
          name: 'Tim Barrow',
          url: `${SITE_URL}/about`,
          description: 'Creator of Algorithmic Faith — spotlighting faith creators and exploring how algorithms fit into it.',
          knowsAbout: [
            'Faith creators',
            'YouTube algorithms',
            'TikTok content strategy',
            'AI tools for creators',
            'Digital ministry',
          ],
          founder: {
            '@type': 'Organization',
            name: 'Algorithmic Faith',
            url: SITE_URL,
          },
        },
      }} />
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE_URL}/about` },
        ],
      }} />
      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-950" />
        {/* Stained glass light rays */}
        <div className="absolute top-0 left-1/3 w-48 h-full opacity-[0.04] blur-3xl" style={{ background: 'linear-gradient(180deg, #fbbf24 0%, transparent 50%)' }} />
        <div className="absolute top-0 right-1/3 w-48 h-full opacity-[0.03] blur-3xl" style={{ background: 'linear-gradient(180deg, #2563eb 0%, transparent 50%)' }} />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Hey, I&apos;m Tim
          </h1>
          {/* Jewel divider */}
          <div className="w-48 h-[2px] mx-auto mb-6 bg-gradient-to-r from-transparent via-ruby-500 via-amethyst-500 via-sapphire-500 via-emerald-500 via-gold-500 to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="space-y-6 text-dark-300 text-lg leading-relaxed">
          <p>
            I started Algorithmic Faith to write about faithful people making excellent things.
          </p>
          <p>
            These are friends whose work I believe in. I write about them because I think it&apos;s worth your time.
          </p>
          <p>
            More to come.
          </p>
        </div>
      </div>
    </div>
  )
}
