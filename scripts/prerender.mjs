// Build step: renders every route to static HTML so search engines that do not run
// JavaScript (Bing, DuckDuckGo, social link previews) see full page content and
// per-page meta tags. Runs after the client build and the SSR build (see package.json).
//
// Output (served by Vercel with cleanUrls): dist/index.html, dist/about.html,
// dist/products/<slug>.html, ..., dist/404.html and dist/sitemap.xml.
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

const { render, routes, getPageMeta, renderHeadTags, company } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
)

const template = await fs.readFile(path.join(distDir, 'index.html'), 'utf8')
for (const marker of ['<!--app-head-->', '<!--app-html-->']) {
  if (!template.includes(marker)) throw new Error(`index.html is missing the ${marker} placeholder`)
}

function renderPage(url, metaPath = url) {
  const head = renderHeadTags(getPageMeta(metaPath))
  return template.replace('<!--app-head-->', head).replace('<!--app-html-->', render(url))
}

async function write(file, html) {
  const out = path.join(distDir, file)
  await fs.mkdir(path.dirname(out), { recursive: true })
  await fs.writeFile(out, html)
}

for (const url of routes) {
  const file = url === '/' ? 'index.html' : `${url.slice(1)}.html`
  await write(file, renderPage(url))
  console.log(`  prerendered ${url.padEnd(36)} → dist/${file}`)
}

// Unmatched URLs fall through to the router's "*" route; Vercel serves this with HTTP 404.
await write('404.html', renderPage('/404-not-found', '/404'))
console.log('  prerendered 404 page                       → dist/404.html')

const lastmod = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((url) => `  <url>\n    <loc>${getPageMeta(url).canonical}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`)
  .join('\n')}
</urlset>
`
await write('sitemap.xml', sitemap)
console.log(`  sitemap.xml: ${routes.length} URLs on ${company.siteUrl}`)

await fs.rm(ssrDir, { recursive: true, force: true })
