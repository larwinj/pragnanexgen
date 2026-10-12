import { navLinks, products } from './site'

// Every indexable URL on the site. Drives build-time prerendering and the sitemap,
// so a new page or product only needs to be added to site.js.
export const routes = [
  ...navLinks.map((l) => l.path),
  ...products.map((p) => `/products/${p.slug}`),
]
