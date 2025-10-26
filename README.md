# Personal Portfolio Website

A modern portfolio site built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS**, and **MDX** for blog posts.

## Features

- **Home**: Landing page with quick navigation
- **About**: Profile, skills, and links (customize in `src/app/about/page.tsx`)
- **Portfolio**: Interactive project gallery with search and tag filtering (data in `src/lib/projects.ts`)
- **Blog**: MDX-powered blog with code highlighting (posts in `content/blog/`)
- **Resume**: Embedded PDF viewer with download link (replace `public/resume.pdf`)
- **Dark/Light theme**: Toggle via next-themes

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your site.

## Customization

1. **Personal info**: Edit `src/app/page.tsx`, `src/app/about/page.tsx`, and `src/components/Footer.tsx`
2. **Projects**: Update the array in `src/lib/projects.ts`
3. **Blog posts**: Add `.mdx` files to `content/blog/` with frontmatter (title, date, description, tags)
4. **Resume**: Replace `public/resume.pdf` with your actual PDF
5. **Metadata**: Update `src/app/layout.tsx` (title, description, metadataBase)

## Scripts

- `npm run dev` – Start dev server
- `npm run build` – Production build
- `npm run start` – Serve production build
- `npm run lint` – Run ESLint

## Deployment

### Vercel (recommended)

1. Push to GitHub
2. Import on [Vercel](https://vercel.com/new)
3. Deploy with zero config

### GitHub Pages (static export)

1. Update `next.config.ts`:
   ```ts
   export default { output: "export", basePath: "/your-repo-name" };
   ```
2. `npm run build` → outputs to `out/`
3. Deploy `out/` folder to `gh-pages` branch

## Tech Stack

- Next.js 16 (App Router, RSC)
- TypeScript
- Tailwind CSS + @tailwindcss/typography
- next-mdx-remote (MDX compilation)
- rehype-pretty-code (code highlighting)
- next-themes (dark mode)
- gray-matter (frontmatter parsing)
