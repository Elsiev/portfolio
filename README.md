# Elsie van Rooyen — Portfolio

React + Vite + Tailwind v4 personal UI/UX & graphic design portfolio, built to
apply for design roles. Case studies are adapted from real Honeycode Design
Studio work.

## Running locally

```bash
bun install
bun run dev
```

Opens at `http://localhost:5173`.

## Editing your CV

The CV is designed as an HTML file at `cv/resume.html` (matches the site's
black/honey-gold branding), then rendered to the actual downloadable file at
`public/resume.pdf`. To update it after editing dates, roles or bullets:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-pdf-header-footer --print-to-pdf-no-header \
  --print-to-pdf="public/resume.pdf" "file://$(pwd)/cv/resume.html"
```

`profile.hasResume` in `src/data/profile.ts` controls whether the "Download
CV" buttons show up on the site; it's `true` as long as `public/resume.pdf`
exists.

## Editing case studies

All seven case studies (Everlune, Smudge, Krummel, the wedding site, the baby
shower site, the photographer site, and the Honeycode Studio brand/build
itself) live in `src/data/work.ts`, with images in `src/assets/work/`. Edit
copy or swap images there.

## Deploying

Not deployed yet. When you're ready, `bun run build` produces a static
`dist/` folder that can be hosted anywhere (Cloudflare Pages/Workers,
Vercel, Netlify, GitHub Pages).
