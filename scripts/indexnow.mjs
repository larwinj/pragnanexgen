// Notifies IndexNow search engines (Bing, Yandex, Seznam, Naver, …) that the site's URLs
// have changed. Run manually AFTER a production deploy:  npm run indexnow
//
// It reads the live sitemap, so only URLs that are actually deployed are submitted.
// The key is the 32-hex-character file name in /public (served at the site root).
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const SITE = 'https://www.pragnanexgen.com'
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

const keyFile = (await fs.readdir(path.join(root, 'public'))).find((f) => /^[a-f0-9]{32}\.txt$/.test(f))
if (!keyFile) throw new Error('No IndexNow key file (32 hex chars + .txt) found in public/')
const key = keyFile.replace('.txt', '')
const keyLocation = `${SITE}/${keyFile}`

const live = await fetch(keyLocation)
if (!live.ok || (await live.text()).trim() !== key) {
  throw new Error(`Key file is not live at ${keyLocation} — deploy first, then run this script.`)
}

const sitemap = await (await fetch(`${SITE}/sitemap.xml`)).text()
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
if (urlList.length === 0) throw new Error('No URLs found in the live sitemap.')

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: new URL(SITE).host, key, keyLocation, urlList }),
})

// 200 = accepted, 202 = accepted (key validation pending)
console.log(`IndexNow: HTTP ${res.status} for ${urlList.length} URLs`)
if (res.status >= 300) {
  console.error(await res.text())
  process.exit(1)
}
urlList.forEach((u) => console.log(`  ${u}`))
