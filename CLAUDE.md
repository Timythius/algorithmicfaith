# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

This is a Next.js 14 blog built with the App Router, TypeScript, and Tailwind CSS.

### Content System
Blog posts are stored as Markdown files in `content/posts/`. The `lib/posts.ts` module handles:
- Reading and parsing Markdown files with gray-matter for frontmatter
- Converting Markdown to HTML using remark/remark-html
- Sorting posts by date (newest first)

Post frontmatter supports:
```yaml
title: "Post Title"
date: "YYYY-MM-DD"
excerpt: "Short description"
tags: ["tag1", "tag2"]
coverImage: "url"     # Optional featured image
videoUrl: "url"       # Optional embedded video
articleUrl: "url"     # Optional link to original article
```

### Routes
- `/` - Homepage with latest posts grid
- `/blog` - All posts listing
- `/blog/[slug]` - Individual post (statically generated via `generateStaticParams`)
- `/about` - About page

### Components
- `Header.tsx` / `Footer.tsx` - Site-wide layout
- `PostCard.tsx` - Post preview card for listings
- `VideoEmbed.tsx` - Embedded video player for posts

### Styling
Tailwind CSS with a custom `primary` color scale defined in `tailwind.config.ts`. Uses prose classes for Markdown content rendering.
