# Meghana BV — Portfolio Work Log & Handoff

**Purpose:** job-search portfolio to get Meghana BV (Meghana Bangalore Vijay Kumar) in front of
recruiters and hiring managers for **Senior Data Engineer / Data Migration** roles in the UK.

- **Live site:** https://meghanabv19.github.io
- **Repo:** https://github.com/meghanabv19/meghanabv19.github.io (public, GitHub Pages, HTTPS)
- **Local folder:** `/Users/rajathrao/Documents/GitHub/meghana.github.io`
- **Deploy account:** GitHub `meghanabv19` (via `gh auth switch --user meghanabv19`)
- **Built by:** Rajath, with Claude Code. Modeled on `rama.github.io` + `rajathn8.github.io`.
- **Last updated:** 2026-07-25

---

## Her details (source of truth used on the site)
- **Name:** Meghana BV / Meghana Bangalore Vijay Kumar
- **Title:** Senior Data Engineer — SQL · ETL · Data Migration
- **Experience:** 7+ years
- **Location:** London, UK. **Full UK right to work — no visa sponsorship required.**
- **Public email:** meghanalondon1@gmail.com  *(switched site-wide to match the London CV, per request 2026-07-28)*
- **Phone:** +44 7343 059777  *(one CV showed a malformed +07343059777; corrected)*
- **Links:** LinkedIn `meghana-bv-data-consultant` · GitHub `meghanabv19` ·
  Credly `meghanabv` · HackerRank `meghanabv11` · LeetCode `meghanabv`
- **Source files** (kept local, gitignored): two CV PDFs + two photos in the folder root.
  Portrait used = the Syniti-backdrop headshot.

### Content notes / decisions
- Two CVs disagreed on some dates & skills. Used the "SQL | ETL" CV as source of truth,
  folded in extra skills from the second (FastAPI, Django, Redshift, AWS certs).
- **Timeline deliberately made contiguous (no gaps between jobs)** per request:
  Bank of America set to Nov 2019 (matches Infosys start); Corning set to Mar 2022 (matches Syniti start).
  Full chain: Infosys/BofA Nov 2019–Feb 2022 → Syniti Mar 2022–present (Corning → IKEA → BP).

---

## What's built (all live)
- **index.html** — single page: hero (CTAs + availability badges + portrait + terminal card),
  About, Skills, Experience timeline, Impact metrics + featured GitHub repos, Certifications & education,
  "Roles I'm a fit for" pills, Contact (cards + "send me a role" mailto form), footer.
- **styles.css** — midnight + indigo→cyan "data" theme, Inter + JetBrains Mono, fully responsive.
- **script.js** — role-form → pre-addressed mailto; active-nav highlighting.
- **Downloads:** `cv/Meghana-BV-CV.pdf` (full), `cv/Meghana-BV-CV-1page.pdf` (1-page, source `cv/cv-onepager.html`),
  `assets/Meghana-BV.vcf` (vCard), `assets/icons/qr-portfolio.png` (QR to site).
- **Favicons:** `favicon.ico` (root), `assets/icons/favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`,
  `icon-192/512.png`, `site.webmanifest`. Mark = indigo→cyan "M" data-pipeline.
- **OG card:** `assets/icons/og-image.png` (1200×630, source `og-template.html`, rendered via headless Chrome).
- **SEO layer:** JSON-LD (Person, WebSite, FAQPage), OG/Twitter tags, `sitemap.xml`, `robots.txt`
  (AI crawlers welcomed), `llms.txt`, `humans.txt`, `ai.txt`, `feed.xml`, `404.html`.

## Indexing status
- ✅ **Google Search Console** — ownership VERIFIED (HTML-file method, `google648f3bf0a48ad896.html`).
- ⏳ **Google** — still to do inside Search Console: submit `sitemap.xml`; URL-Inspect home URL → Request Indexing.
- ✅ **IndexNow** — home + both CVs submitted to Bing/Yandex (HTTP 202). Key file: `<key>.txt` at root; key saved in `.indexnow-key`.
- ⏳ **Bing Webmaster** — do "Import from Google Search Console" (one click, no token).
- Placeholder still open: `msvalidate.01` (Bing) in index.html — only needed if NOT importing from Google.

---

## NEXT STEPS (pick up here)

### A. Finish indexing (needs Meghana's/your login, ~5 min)
1. Search Console → Sitemaps → submit `sitemap.xml`.
2. Search Console → URL Inspection → `https://meghanabv19.github.io/` → Request Indexing.
3. Bing Webmaster → Import from Google Search Console.

### B. Backlinks / discovery (highest ranking lever)
- LinkedIn: add site to **Featured** + Contact info; headline "Senior Data Engineer | SQL · ETL · Data Migration | Open to opportunities (UK)"; set **Open to Work**.
- Post the drafted LinkedIn announcement (copy is in the chat history / re-generate on request).
- Add URL to GitHub bio, Credly, HackerRank, LeetCode, email signature.

### C. Outbound (what actually gets interviews) — Claude can produce these
- [ ] Target list: 25–30 UK employers + SAP/data recruitment agencies.
- [ ] Cold outreach templates: recruiter email, hiring-manager email, LinkedIn DM.
- [ ] Tailored cover letters: permanent / contract / consultancy.
- [ ] Application tracker (CSV/sheet).
- [ ] Job-board + alert setup guide (LinkedIn, CV-Library, Reed, Totaljobs, CWJobs, Jobserve).
- [ ] Optional: printable business-card PDF w/ QR; email auto-responder template.

### D. Optional site upgrades
- Custom domain (e.g. meghanabv.com / meghana.dev) → add `CNAME` file + DNS, enable HTTPS.
  NOTE: bare `meghana.github.io` is NOT possible (username `meghana` is taken by another user).
- Fill Bing `msvalidate.01` token if verifying Bing directly.

---

## How to make changes & redeploy
```bash
cd /Users/rajathrao/Documents/GitHub/meghana.github.io
gh auth switch --user meghanabv19
# edit files...
# if you changed cv/cv-onepager.html, regenerate the PDF:
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu \
  --no-pdf-header-footer --print-to-pdf="cv/Meghana-BV-CV-1page.pdf" \
  "file://$(pwd)/cv/cv-onepager.html"
# bump the ?v= cache-buster on styles.css/script.js links in index.html when CSS/JS changes
git add -A && git commit -m "describe change" && git push origin main
# Pages rebuilds in ~60s. Re-ping IndexNow after adding pages:
KEY=$(cat .indexnow-key)
curl -s -X POST https://api.indexnow.org/indexnow -H "Content-Type: application/json" \
  -d "{\"host\":\"meghanabv19.github.io\",\"key\":\"$KEY\",\"keyLocation\":\"https://meghanabv19.github.io/$KEY.txt\",\"urlList\":[\"https://meghanabv19.github.io/\"]}"
```
