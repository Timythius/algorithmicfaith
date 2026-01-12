export const metadata = {
  title: 'About | Algorithmic Faith',
  description: 'Learn more about Algorithmic Faith',
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 mb-6">
          Welcome to Algorithmic Faith - a space for exploring ideas at the intersection
          of technology, philosophy, and human understanding.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What We Explore</h2>
        <p className="text-gray-700 mb-4">
          In an age where algorithms shape our experiences and artificial intelligence
          challenges our assumptions about consciousness and creativity, we need spaces
          for thoughtful reflection.
        </p>

        <p className="text-gray-700 mb-4">
          This blog curates and discusses videos, articles, and ideas that help us
          navigate these questions with both intellectual rigor and openness to wonder.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Topics</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Artificial Intelligence and its implications</li>
          <li>Philosophy of mind and consciousness</li>
          <li>Technology and society</li>
          <li>Ethics in the digital age</li>
          <li>The future of human-machine collaboration</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Get in Touch</h2>
        <p className="text-gray-700">
          Have a thought-provoking article or video to share? Want to start a conversation?
          Reach out and let&apos;s explore these ideas together.
        </p>
      </div>
    </div>
  )
}
