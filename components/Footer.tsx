import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Algorithmic Faith</h3>
            <p className="text-gray-400">
              Exploring ideas at the intersection of technology and human understanding.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition">Blog</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">About</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <p className="text-gray-400">
              Share your thoughts and join the conversation.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Algorithmic Faith. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
