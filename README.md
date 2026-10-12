# PRAGNA NEXGEN TECHNOLOGIES — Website

A professional, fully responsive corporate website for **PRAGNA NEXGEN TECHNOLOGIES PRIVATE LIMITED** — a next-generation technology consulting company providing AI-based monitoring platforms, wireless sensors, thermal imaging and detection solutions.

Built with **React + Vite + Tailwind CSS**.

## Tech stack

- **React 18** with **React Router 6** (client-side routing)
- **Vite 5** (dev server + build)
- **Tailwind CSS 3** (styling, responsive design)
- **lucide-react** (icons, tree-shaken)

## Pages

| Route | Page |
|-------|------|
| `/` | Home — hero, product categories, AI platform, why-us, industries, news preview |
| `/about` | About Us — profile, mission & vision, core values, specialties, quality |
| `/products` | Products — filterable grid of all products |
| `/products/:slug` | Product detail — features, specs, enquiry, related products (e.g. `/products/dts-vti-gl-100c`, `/products/vti-ts-26`) |
| `/solutions` | Solutions — grouped (wireless point sensing, DTS, transmission lines), industries, process |
| `/contact` | Contact — enquiry form (`?subject=` pre-fills the subject), contact cards, map, WhatsApp |

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build + prerender every route -> dist/
npm run preview  # preview the production build
npm run indexnow # after a production deploy: notify Bing & other IndexNow engines
```

## Visitor counter (footer)

The footer shows the number of **unique visitors**, stored in **Upstash Redis**
(free tier) as a Redis set under the key `pragnanexgen:visitors`. The Upstash
database is shared with other projects, so every key uses the `pragnanexgen:` prefix.

- The browser keeps a random anonymous ID (`localStorage`, `pragnanexgen_visitor_id`)
  and sends it to our own `/api/visitors` (Vercel function `api/visitors.js`, or
  `server/routes/visitors.js` locally). Upstash credentials stay server-side.
- The count is the number of distinct IDs (`SCARD`), recorded by one atomic Redis
  script — simultaneous visitors are never lost, and refreshes, extra tabs and return
  visits never count twice (`server/lib/visitorCounter.js`).
- Bots, link previews and headless browsers (`isbot`) are shown the count but not added;
  cross-site requests are rejected; each IP can add at most 60 new visitors per hour.
- Only production builds record visits — `npm run dev` / `npm start` only read.
- If Upstash is unreachable or not configured, the badge is hidden.

**Setup:** set `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` in `.env` (see
`.env.example`) **and** in Vercel → Project → Settings → Environment Variables. Locally,
`npm run dev` and `npm run preview` serve `/api/visitors` themselves (Vite middleware in
`vite.config.js`); the contact form still needs `npm start` (Express API server + Vite).

## Search engines (SEO)

The site is a React SPA, but `npm run build` **prerenders every route to static HTML**
so crawlers that do not run JavaScript (Bing, DuckDuckGo, LinkedIn/WhatsApp previews)
see the full page content:

1. `vite build` — client bundle.
2. `vite build --ssr src/entry-server.jsx` — server render bundle (temporary `dist-ssr/`).
3. `scripts/prerender.mjs` — renders each URL in `src/data/routes.js` to
   `dist/<route>.html` with its own `<title>`, description, canonical, Open Graph and
   JSON-LD (`src/seo/meta.js`), writes `dist/404.html` and `dist/sitemap.xml`.

In the browser `src/main.jsx` hydrates the prerendered HTML; `src/seo/usePageMeta.js`
keeps the `<head>` tags in sync on client navigation. Adding a product to
`src/data/site.js` automatically adds its page, meta tags and sitemap entry.

`vercel.json` uses `cleanUrls` (so `/about` serves `about.html`) and there is no SPA
catch-all rewrite — unknown URLs return a real **404**. Canonical host is
`https://www.pragnanexgen.com` (`company.siteUrl`).

> Because of hydration, components must render the same markup on the server and on
> the first client render: keep `window`/`document` access inside `useEffect`.

### Bing Webmaster Tools (one-time, manual)

1. Sign in at <https://www.bing.com/webmasters> and choose **Import from Google Search
   Console** (verifies the site using the existing Google verification). If import is
   not possible, use the meta-tag method and paste the `msvalidate.01` code into
   `company.bingSiteVerification` in `src/data/site.js`, then redeploy.
2. Submit the sitemap: `https://www.pragnanexgen.com/sitemap.xml`.
3. URL Inspection → **Request indexing** for the home page and key product pages.
4. After each deploy with content changes, run `npm run indexnow`. The key file is
   `public/<32-hex-key>.txt`; do not delete or rename it.

Also resubmit the sitemap in Google Search Console after the first deploy.

## Customising content

All site content — company details, contact info, products, solutions, news
and navigation — lives in a single file:

```
src/data/site.js
```

Update the `company` object there to change name, phone, email, address, etc.

## Design notes

- **Palette:** professional blue (`brand`) on a clean white background, with a
  cyan (`accent`) highlight — configured in `tailwind.config.js`.
- **Responsive:** mobile-first, tested from small phones up to large desktops.
  Includes a mobile hamburger menu and a floating quick-contact button.
- **Branding:** the logo is a self-contained SVG (`src/components/Logo.jsx`);
  no external image dependency. Update it there if a raster logo is preferred.
- **Images:** section photography is loaded from Unsplash (free to use). Swap
  the URLs in `src/data/site.js` for your own product photography when available.
- **Contact form** posts to `/api/contact` (Vercel serverless function in `api/`).
- **VTI product wording** (DTS range, Ex op is statement, DLR input, installation with
  the circuit isolated) follows VTI Corporation's instructions and must not be
  paraphrased into stronger claims. Spec tables are copied verbatim from vti-sensors.com.

## Company details

- **PRAGNA NEXGEN TECHNOLOGIES PRIVATE LIMITED** — *Wisdom in Every Byte*
- Chennai, Tamil Nadu, India
- Phone / WhatsApp: +91 7339491001
- Email: director@pragnanexgen.com
- Web: www.pragnanexgen.com

## Implemented lattest version v2