# Meghana BV — Senior Data Engineer

Personal job-search portfolio for **Meghana BV (Meghana Bangalore Vijay Kumar)** — Senior Data Engineer
(SQL · ETL · Data Migration), London.

🌐 **Live:** https://meghanabv19.github.io

## What's here

A single-page static portfolio built for recruiters and hiring managers:

- **Hero** — name, title, availability badges (available now, full UK right to work, no sponsorship),
  one-click CTAs (Download CV, Email, Call, WhatsApp, LinkedIn, GitHub), stat block, portrait + terminal card.
- **About / Skills** — grouped skill pills (SQL, ETL, SAP/Syniti, Python/Cloud, Data Quality, BI/AI).
- **Experience** — timeline (Syniti → BP, IKEA, Corning; Infosys → Bank of America).
- **Impact** — metric cards + featured GitHub repos.
- **Certifications & education** — AWS, Syniti ADM/ADMM, HackerRank SQL.
- **Roles I'm a fit for** — recruiter-match pills (titles, sectors, engagement, location).
- **Contact** — contact cards + a "Send me a role" form that opens a pre-addressed email.

Plus the full discoverability layer: JSON-LD (Person, WebSite, FAQ), Open Graph + Twitter cards,
branded 1200×630 OG image, `sitemap.xml`, `robots.txt` (AI crawlers welcomed), `llms.txt`,
`humans.txt`, `ai.txt`, `feed.xml`, `404.html`, SVG favicon.

## Structure

```
.
├── index.html               # Main page
├── styles.css               # All styling
├── script.js                # Role form + active-nav
├── 404.html
├── robots.txt / sitemap.xml / llms.txt / humans.txt / ai.txt / feed.xml
├── cv/Meghana-BV-CV.pdf     # Downloadable CV
└── assets/
    ├── meghana-portrait.jpg
    └── icons/{favicon.svg, og-image.png, og-template.html}
```

## Local preview

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Deploy (GitHub Pages)

Hosted from the `meghanabv19/meghanabv19.github.io` repo. Pushing to `main` auto-deploys in ~60s.

```bash
gh auth switch --user meghanabv19
git add -A && git commit -m "describe change"
git push origin main
```

## Regenerate the OG card

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --window-size=1200,630 --hide-scrollbars \
  --screenshot=assets/icons/og-image.png \
  "file://$(pwd)/assets/icons/og-template.html"
```

## After deploying — recruiter-visibility checklist

1. Add the URL to LinkedIn **Featured** + Contact info; set **Open to Work** (recruiters only).
2. Register the site in **Google Search Console** + **Bing Webmaster Tools**; submit `sitemap.xml`
   (paste the verification tokens into the two placeholders in `index.html`).
3. Put the URL in her email signature and on her CV header.
4. Share once on LinkedIn — the OG card previews cleanly.

Content © Meghana BV. Built collaboratively.
