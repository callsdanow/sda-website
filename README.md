# SDA Integrations — Website

Corporate website for SDA Integrations — CCTV, access control, and low-voltage systems contractor based in Valley Glen, Los Angeles, CA.

Static site — plain HTML/CSS/JS, no frameworks or build tools. Hosted on Netlify with automatic deployment on every push to the `main` branch.

## File Structure

```
.
├── index.html                   # Homepage
├── style.css                    # Global stylesheet
├── shared.js                    # Shared JS: nav, footer injection
├── robots.txt                   # Search engine crawl instructions
├── sitemap.xml                  # XML sitemap for Google Search Console
├── pages/
│   ├── cctv.html                # Service: CCTV & security cameras
│   ├── access-control.html      # Service: access control systems
│   ├── structured-cabling.html  # Service: cabling, Wi-Fi, networks
│   ├── service-areas.html       # Service areas (LA + surrounding cities)
│   └── contact.html             # Contact page + quote form (Netlify Forms)
└── images/
    ├── logo.png                 # Logo — white text version for dark background
    ├── favicon-32.png           # Browser tab icon
    └── *.svg                    # Custom SVG illustrations for service sections
```

## How to Edit

Any change committed to this repository triggers an automatic redeploy on Netlify — usually within 30–60 seconds.

**Text edits** (phone, prices, descriptions) — open the relevant `.html` file on GitHub, click the pencil icon, make changes, commit.

**New images** — upload to the `images/` folder, then reference as `images/filename.png` from the root, or `../images/filename.png` from inside `pages/`.

**Structural changes** (new pages, new sections) — recommended to do via Claude or locally in VS Code, as they require syncing navigation, sitemap.xml, and Schema.org markup.

## Technical Notes

- Contact form on `pages/contact.html` uses **Netlify Forms** — no backend needed. Submissions go to email configured under Netlify → Forms → Notifications.
- Each page has static **Schema.org JSON-LD** markup directly in `<head>`. Update service descriptions there if service page content changes significantly.
- **Canonical URL** on each page must match its real path (see `sitemap.xml` for the full list of correct URLs).
- Domain: `sdaintegrations.com` (non-www). Netlify redirects `www.` → non-www automatically.
