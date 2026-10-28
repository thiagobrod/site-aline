// Gera o HTML de cada página no build (SEO + Google Ads), além de sitemap.xml e robots.txt.
// Roda depois de `vite build` (cliente) e `vite build --ssr` (servidor).
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(root, 'dist')
const serverEntry = resolve(root, 'dist-server/entry-server.js')

const { render, PAGES, SITE_URL } = await import(pathToFileURL(serverEntry).href)
const template = readFileSync(resolve(dist, 'index.html'), 'utf-8')

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

for (const page of PAGES) {
  const url = SITE_URL + page.path
  const html = template
    .replaceAll('<!--app-title-->', esc(page.title))
    .replaceAll('<!--app-description-->', esc(page.description))
    .replaceAll('<!--app-url-->', url)
    .replace('<div id="root"></div>', `<div id="root">${render(page.path)}</div>`)
  // Cloudflare Pages serve /sobre a partir de sobre.html (sem redirecionar para /sobre/)
  const file = page.path === '/' ? 'index.html' : `${page.path.slice(1)}.html`
  writeFileSync(resolve(dist, file), html)
  console.log(`  prerender ${page.path} -> ${file}`)
}

const today = new Date().toISOString().slice(0, 10)
writeFileSync(
  resolve(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map((p) => `  <url><loc>${SITE_URL}${p.path}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`,
)
writeFileSync(resolve(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`)

rmSync(resolve(root, 'dist-server'), { recursive: true, force: true })
console.log('  sitemap.xml e robots.txt gerados')
