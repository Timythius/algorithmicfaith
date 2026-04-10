import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-950 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <h3 className="text-2xl font-bold text-white">
                Algorithmic<span className="text-gold-400">Faith</span>
              </h3>
            </Link>
            <p className="text-dark-400 leading-relaxed mb-6">
              Spotlighting faith creators who are using YouTube, TikTok, and AI to share their message with the world.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Navigate
            </h4>
            <ul className="space-y-4">
              {[
                { href: '/', label: 'Home' },
                { href: '/blog', label: 'Blog' },
                { href: '/creators', label: 'Creators' },
                { href: '/resources', label: 'Resources' },
                { href: '/about', label: 'About' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-dark-400 hover:text-gold-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Column */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Topics
            </h4>
            <ul className="space-y-4">
              {['YouTube', 'TikTok', 'AI & Tech', 'Worship', 'Sermons', 'Devotionals'].map(
                (topic) => (
                  <li key={topic}>
                    <Link
                      href="/blog"
                      className="text-dark-400 hover:text-gold-400 transition-colors duration-300"
                    >
                      {topic}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Connect
            </h4>
            <p className="text-dark-400 mb-6 leading-relaxed">
              Know a faith creator I should feature? Got a tip or a story? Let me know.
            </p>
            <a
              href="mailto:hello@algorithmicfaith.com"
              className="inline-flex items-center text-gold-400 hover:text-gold-300 font-medium transition-colors duration-300"
            >
              Get in touch
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
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-800 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 text-sm">
            &copy; {currentYear} Algorithmic Faith. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
