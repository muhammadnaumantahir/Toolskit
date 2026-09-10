import {readFileSync,writeFileSync} from 'node:fs'

const base='https://toolskit.sbs'
const registry=readFileSync(new URL('../src/toolRegistry.ts',import.meta.url),'utf8')
const ids=[...registry.matchAll(/t\('([^']+)'/g)].map(match=>match[1])
const staticPaths=['/','/tools','/about','/contact','/privacy-policy','/terms-and-conditions']
const paths=[...staticPaths,...ids.map(id=>`/tools/${id}`)]
const lastmod=new Date().toISOString().slice(0,10)
const xml=`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map(path=>`  <url><loc>${base}${path}</loc><lastmod>${lastmod}</lastmod></url>`).join('\n')}\n</urlset>\n`
writeFileSync(new URL('../public/sitemap.xml',import.meta.url),xml)
console.log(`Generated sitemap with ${paths.length} URLs.`)
