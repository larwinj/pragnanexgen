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
| `/products/:slug` | Product detail — features, specs, enquiry, related products |
| `/solutions` | Solutions — solutions grid, industries, process |
| `/news` | News & Resources — articles, downloadable resources, newsletter |
| `/contact` | Contact — enquiry form, contact cards, map, WhatsApp |

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

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
- **Contact form** uses a `mailto:` handoff (no backend). Wire it to an API or
  form service (e.g. Formspree) in `src/pages/Contact.jsx` when needed.

## Company details

- **PRAGNA NEXGEN TECHNOLOGIES PRIVATE LIMITED** — *Wisdom in Every Byte*
- Chennai, Tamil Nadu, India
- Phone / WhatsApp: +91 7339491001
- Email: director@pragnanexgen.com
- Web: www.pragnanexgen.com
