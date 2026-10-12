// Per-route SEO metadata, shared by the build-time prerenderer (scripts/prerender.mjs)
// and the client-side hook (usePageMeta) so both always emit identical <head> tags.
import { company, products } from '../data/site'

const SITE = company.siteUrl
const BRAND = 'Pragna NexGen Technologies'
const DEFAULT_IMAGE = '/og-default.jpg'

const pages = {
  '/': {
    title: 'Pragna NexGen Technologies | Wireless Sensors & DTS, India',
    description:
      'Pragna NexGen Technologies, Chennai: authorised VTI distributor in India for fibre-optic DTS, wireless temperature sensors and AI monitoring.',
  },
  '/about': {
    title: 'About Us | Pragna NexGen Technologies, Chennai',
    description:
      'Pragna NexGen Technologies, Chennai: next-generation technology consulting and authorised distributor of VTI Corporation (Vietnam) sensors in India.',
    crumb: 'About Us',
  },
  '/products': {
    title: 'Products: DTS & Wireless Temperature Sensors | Pragna NexGen',
    description:
      'VTI-GL-100C DTS, VTI-TS-26 transmission-line sensor, TBR22 wireless temperature sensors, data collectors and the AI monitoring platform.',
    crumb: 'Products',
  },
  '/solutions': {
    title: 'Monitoring Solutions: DTS, Busway, Oil & Gas | Pragna NexGen',
    description:
      'Temperature monitoring for substations, switchgear, busways, oil & gas, chemical plants, mining conveyors, cable tunnels and transmission lines.',
    crumb: 'Solutions',
  },
  '/contact': {
    title: 'Contact Us | Pragna NexGen Technologies, Chennai',
    description:
      'Contact Pragna NexGen Technologies in Nungambakkam, Chennai for DTS, wireless temperature sensor and AI monitoring enquiries, quotations and certificates.',
    crumb: 'Contact',
  },
}

const absolute = (url) => (/^https?:\/\//.test(url) ? url : `${SITE}${url}`)
const canonicalFor = (pathname) => (pathname === '/' ? `${SITE}/` : `${SITE}${pathname}`)
// Search-engine display limits (Bing Webmaster Tools flags anything outside these).
export const SEO_LIMITS = { titleMax: 60, descriptionMin: 50, descriptionMax: 160 }

// Shortens a description to the limit at a word boundary.
const clip = (text, max = SEO_LIMITS.descriptionMax) => {
  if (text.length <= max) return text
  const cut = text.slice(0, max - 1)
  return `${cut.slice(0, cut.lastIndexOf(' ')).replace(/[\s,;:—–-]+$/, '')}…`
}

// Product page title: "<name> | <brand>" when it fits, otherwise a shorter brand, otherwise the name.
const productTitle = (name) =>
  [`${name} | ${BRAND}`, `${name} | Pragna NexGen`, name].find((t) => t.length <= SEO_LIMITS.titleMax) || name

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE}/#organization`,
  name: BRAND,
  legalName: company.legalName,
  alternateName: company.alternateNames,
  url: `${SITE}/`,
  logo: `${SITE}/pn-logo.png`,
  email: company.email,
  telephone: `+${company.phoneRaw}`,
  slogan: company.tagline,
  address: {
    '@type': 'PostalAddress',
    streetAddress: company.address.street,
    addressLocality: company.address.city,
    addressRegion: company.address.region,
    postalCode: company.address.postalCode,
    addressCountry: company.address.countryCode,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: `+${company.phoneRaw}`,
    email: company.email,
    contactType: 'sales',
    areaServed: 'IN',
    availableLanguage: ['en'],
  },
  sameAs: [company.social.linkedin],
}

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE}/#website`,
  name: BRAND,
  alternateName: company.alternateNames,
  url: `${SITE}/`,
  inLanguage: 'en-IN',
  publisher: { '@id': `${SITE}/#organization` },
}

function breadcrumb(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(([name, path], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: canonicalFor(path),
    })),
  }
}

function productSchema(p) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.name,
    description: p.summary,
    image: absolute(p.image),
    url: canonicalFor(`/products/${p.slug}`),
    ...(p.modelName && { model: p.modelName, mpn: p.modelName }),
    brand: { '@type': 'Brand', name: 'VTI Corporation' },
    manufacturer: {
      '@type': 'Organization',
      name: 'VIET TECHNOLOGY AND INVESTMENT CORPORATION (VTI Corporation)',
      url: company.vti.url,
    },
  }
}

// Returns the metadata for a pathname; unknown paths get the noindex "not found" entry.
export function getPageMeta(pathname) {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname

  if (pages[path]) {
    const page = pages[path]
    return {
      title: page.title,
      description: page.description,
      canonical: canonicalFor(path),
      image: absolute(DEFAULT_IMAGE),
      imageAlt: BRAND,
      type: 'website',
      robots: 'index, follow, max-image-preview:large',
      jsonLd:
        path === '/'
          ? [organization, website]
          : [organization, breadcrumb([['Home', '/'], [page.crumb, path]])],
    }
  }

  const slug = path.startsWith('/products/') ? path.slice('/products/'.length) : null
  const product = slug && products.find((p) => p.slug === slug)
  if (product) {
    return {
      title: product.seoTitle || productTitle(product.name),
      description: clip(product.seoDescription || product.summary),
      canonical: canonicalFor(path),
      image: absolute(product.image),
      imageAlt: product.imageAlt || product.name,
      type: 'product',
      robots: 'index, follow, max-image-preview:large',
      jsonLd: [
        organization,
        breadcrumb([['Home', '/'], ['Products', '/products'], [product.shortName || product.name, path]]),
        productSchema(product),
      ],
    }
  }

  return {
    title: `Page not found | ${BRAND}`,
    description: 'The page you are looking for does not exist or has moved.',
    canonical: null,
    image: absolute(DEFAULT_IMAGE),
    imageAlt: BRAND,
    type: 'website',
    robots: 'noindex, follow',
    jsonLd: [],
  }
}

const escapeHtml = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// JSON inside <script> must not be able to close the tag.
const safeJson = (data) => JSON.stringify(data).replace(/</g, '\\u003c')

// Serialises metadata to <head> markup. Every tag carries data-seo so the client
// hook can swap the whole set on navigation.
export function renderHeadTags(meta) {
  const tags = [
    `<title data-seo>${escapeHtml(meta.title)}</title>`,
    `<meta data-seo name="description" content="${escapeHtml(meta.description)}" />`,
    `<meta data-seo name="robots" content="${meta.robots}" />`,
  ]
  if (meta.canonical) {
    tags.push(`<link data-seo rel="canonical" href="${meta.canonical}" />`)
    tags.push(`<meta data-seo property="og:url" content="${meta.canonical}" />`)
  }
  tags.push(
    `<meta data-seo property="og:type" content="${meta.type}" />`,
    `<meta data-seo property="og:site_name" content="${BRAND}" />`,
    `<meta data-seo property="og:locale" content="en_IN" />`,
    `<meta data-seo property="og:title" content="${escapeHtml(meta.title)}" />`,
    `<meta data-seo property="og:description" content="${escapeHtml(meta.description)}" />`,
    `<meta data-seo property="og:image" content="${meta.image}" />`,
    `<meta data-seo property="og:image:alt" content="${escapeHtml(meta.imageAlt)}" />`,
    `<meta data-seo name="twitter:card" content="summary_large_image" />`,
    `<meta data-seo name="twitter:title" content="${escapeHtml(meta.title)}" />`,
    `<meta data-seo name="twitter:description" content="${escapeHtml(meta.description)}" />`,
    `<meta data-seo name="twitter:image" content="${meta.image}" />`,
  )
  if (company.bingSiteVerification) {
    tags.push(`<meta data-seo name="msvalidate.01" content="${escapeHtml(company.bingSiteVerification)}" />`)
  }
  for (const data of meta.jsonLd) {
    tags.push(`<script data-seo type="application/ld+json">${safeJson(data)}</script>`)
  }
  return tags.join('\n    ')
}
