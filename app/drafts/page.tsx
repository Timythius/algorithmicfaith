import { getDraftPosts } from '@/lib/posts'
import DraftsGate from './DraftsGate'

export const metadata = {
  title: 'Drafts',
  robots: { index: false, follow: false },
}

export default function DraftsPage() {
  const posts = getDraftPosts()

  return <DraftsGate posts={posts} />
}
