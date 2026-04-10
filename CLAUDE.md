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

This is a Next.js 14 blog built with the App Router, TypeScript, and Tailwind CSS. The site spotlights faith creators on YouTube, TikTok, and other platforms, exploring how algorithms and AI intersect with faith content.

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
category: "YouTube"     # YouTube, TikTok, AI & Tech, Worship, Sermons, Devotionals, General
coverImage: "url"       # Optional featured image
videoUrl: "url"         # Optional embedded video
articleUrl: "url"       # Optional link to original article
```

### Routes
- `/` - Homepage with hero, latest posts grid, and newsletter signup
- `/blog` - All posts with category/tag filtering
- `/blog/[slug]` - Individual post (statically generated via `generateStaticParams`)
- `/creators` - Faith creator directory with platform filter
- `/resources` - Tools, tips, and resources for faith creators
- `/about` - About Tim and the site

### Components
- `Header.tsx` / `Footer.tsx` - Site-wide layout with nav links
- `Hero.tsx` - Homepage hero section
- `PostCard.tsx` - Post preview card for listings
- `BlogFilter.tsx` - Client-side category/tag filter for blog page
- `CreatorCard.tsx` - Creator profile card for directory
- `VideoEmbed.tsx` - Embedded video player for posts
- `Newsletter.tsx` - Email signup section

### Styling
Tailwind CSS with custom `dark` and `gold` color scales defined in `tailwind.config.ts`. Uses Outfit font. Dark theme with gold accents throughout.
