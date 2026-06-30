# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server with Turbopack
npm run build    # production build (runs next-sitemap as postbuild)
npm start        # serve production build
```

No test runner or linter is configured.

## Architecture

WikiTune is a **Next.js 15 App Router** site — Italian-language SEO editorial portal about guitar/ukulele tunings. It is statically generated at build time from MDX files.

**Routing:**
- `/` → `src/app/page.tsx` — home with category index
- `/[categoria]` → `src/app/[categoria]/page.tsx` — category hub listing articles
- `/[categoria]/[slug]` → `src/app/[categoria]/[slug]/page.tsx` — article page

**Content layer (`src/lib/content.ts`):**
- All content lives in `content/<categoria>/<slug>.mdx`
- MDX frontmatter defines every article's metadata (`title`, `slug`, `categoria`, `keyword`, `description`, `published`, optional `tuning_ref`, optional `faqs`)
- `categorie` is a hardcoded array in `content.ts` — adding a new category means adding an entry there
- Articles with `published: false` are excluded from all listings and `generateStaticParams`

**Article rendering:**
- `next-mdx-remote/rsc` renders MDX at build time (RSC, no client bundle)
- `ArticleLayout` wraps content: adds the h1, a CTA button linking to `https://guitar.sisqo.dev` (EasyGuitarTuner), and an FAQ section with JSON-LD if `faqs` are present in frontmatter
- `tuning_ref` in frontmatter customises the CTA label (e.g. `"Drop-D"` → "Accorda in Drop D con EasyGuitarTuner")

**Layout shell (`src/components/SidebarShell.tsx`):**
- Client component; wraps every page
- Desktop: fixed 256px sidebar with `bg-spruce`; mobile: slide-in drawer
- Sidebar is built from `categorie` + `getPublishedArticles()` passed down from `RootLayout`

**Design system (Tailwind):**
- Custom colours: `bg`, `surface`, `ink`, `muted`, `gold`, `gold-lt`, `spruce`, `border`
- Fonts: Titillium Web (`--font-titillium`) for `sans`/`display`, JetBrains Mono (`--font-jetbrains`) for `mono`
- Prose styles fully overridden in `tailwind.config.js` under `typography.DEFAULT.css`

**SEO:** `next-sitemap` runs post-build; config in `next-sitemap.config.js`. Canonical URLs and OpenGraph metadata are set per-article in `generateMetadata`.

## Product context

The site exists to rank on Italian guitar-tuning queries and funnel readers to **EasyGuitarTuner** (`https://guitar.sisqo.dev`). Content voice is "tu", answer-first, no jargon. See `PRODUCT.md` for full brand and design principles.
