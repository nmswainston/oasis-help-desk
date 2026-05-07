# Oasis Smart Home Help

Client-facing support knowledgebase for Oasis Luxury Smart Home clients. Delivers quick, searchable troubleshooting for Control4-based systems - TVs, audio, remotes, WiFi, cameras, lighting, and shades - with a guided "before you call" flow to cut preventable support volume.

## Features

- **Fuzzy search** across titles, summaries, and tags (Fuse.js)
- **Popular guides** and **common-issue** shortcuts for fast paths into content
- **Before You Call Support** checklist and power-cycle guidance
- **Article guides** with quick fix, steps, fallbacks, estimated read time, and real contact CTAs
- **Helpful?** feedback stored locally (ready to wire to analytics later)
- **Responsive layout** tuned for phones (QR-friendly) and larger screens

## Tech stack

- React 19
- Vite 8
- React Router 7
- Tailwind CSS 4
- Fuse.js
- lucide-react

## Local development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Deployment (Netlify)

1. Build command: `npm run build`
2. Publish directory: `dist`
3. **SPA redirects:** add a `_redirects` file in `public/` (or Netlify UI) so client-side routes resolve:

   ```
   /*    /index.html   200
   ```

This keeps deep links such as `/before-you-call` and `/article/:id` working on refresh.

## Future improvements

- Analytics events for search, article views, and “Did this help?” responses
- CMS or git-based content for non-developer edits
- Optional authentication for internal-only articles
- Localization and per-property branding
