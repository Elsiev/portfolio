# Elsie van Rooyen, Portfolio

Live at https://elsievanrooyen.co.za (Cloudflare Worker `elsie-portfolio`).

## What is live

The live site is the static page in `site/`:

- `site/index.html`: the whole portfolio (intro, work, approach, about, CV, contact) plus the three case studies, routed by hash (`#honeycode`, `#corleon`, `#purr`).
- `site/img/`: images used by the page.
- `site/cv.pdf`: the ATS-friendly CV offered by the Download CV button. `site/resume.pdf` is the same file, kept so old links keep working.

## Deploying

```bash
npx wrangler login     # once, if your login has expired
npx wrangler deploy
```

`wrangler.jsonc` serves `./site` on elsievanrooyen.co.za and www.

## Previous version

The earlier React + Vite site is still in `src/`, `public/` and `cv/`, but it is no longer deployed.
