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
              Exploring ideas at the intersection of technology, philosophy, and human understanding.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Navigate
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-dark-400 hover:text-gold-400 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-dark-400 hover:text-gold-400 transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-dark-400 hover:text-gold-400 transition-colors duration-300"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories Column */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Topics
            </h4>
            <ul className="space-y-4">
              <li>
                <span className="text-dark-400 hover:text-gold-400 transition-colors duration-300 cursor-pointer">
                  Technology
                </span>
              </li>
              <li>
                <span className="text-dark-400 hover:text-gold-400 transition-colors duration-300 cursor-pointer">
                  Philosophy
                </span>
              </li>
              <li>
                <span className="text-dark-400 hover:text-gold-400 transition-colors duration-300 cursor-pointer">
                  AI & Ethics
                </span>
              </li>
              <li>
                <span className="text-dark-400 hover:text-gold-400 transition-colors duration-300 cursor-pointer">
                  Human Understanding
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Connect
            </h4>
            <p className="text-dark-400 mb-6 leading-relaxed">
              Have thoughts to share? Questions to explore? Get in touch.
            </p>
            <Link
              href="/about"
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
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-800 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 text-sm">
            &copy; {currentYear} Algorithmic Faith. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-dark-500 hover:text-dark-300 text-sm transition-colors duration-300"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-dark-500 hover:text-dark-300 text-sm transition-colors duration-300"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
