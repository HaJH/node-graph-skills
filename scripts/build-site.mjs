// Builds every example spec into a site directory, plus an index that links them and the SVG
// the README shows as its preview.
//
//   node scripts/build-site.mjs [outDir]
//
// This is what the Pages workflow runs. Nothing it produces is committed -- the pages are
// rebuilt from the specs on every push, so the demo cannot drift from the source, and the
// README's preview is fetched from the site for the same reason.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { execFileSync } from 'node:child_process'

import * as catalogue from '../substance/catalogue.generated.mjs'
import { parseSpec } from '../substance/spec.mjs'
import { graphSvg } from '../substance/draw.mjs'
import { theme } from '../substance/theme.mjs'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const outDir = path.resolve(process.argv[2] ?? path.join(root, '_site'))
fs.mkdirSync(outDir, { recursive: true })

// One directory of examples per domain, so the index can say which tool a page belongs to.
const domains = [{ name: 'substance', tool: 'Substance 3D Designer', dir: path.join(root, 'substance', 'example') }]

const escape = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// A spec has no title or summary field; its graph line and the comment under it are those.
function describe (text) {
  const lines = text.split(/\r?\n/)
  const name = lines.find(l => /^graph\s/.test(l))?.slice(6).trim() ?? 'graph'
  const label = lines.find(l => /^label\s/.test(l))?.slice(6).trim().replace(/^["']|["']$/g, '')
  const summary = lines.find(l => /^#\s*\S/.test(l))?.replace(/^#\s*/, '') ?? ''
  const title = label ?? name.replace(/_/g, ' ').replace(/^./, c => c.toUpperCase())
  return { name, title, summary }
}

const built = []
for (const domain of domains) {
  const specs = fs.readdirSync(domain.dir).filter(f => f.endsWith('.spec')).sort()
  for (const file of specs) {
    const specPath = path.join(domain.dir, file)
    const name = path.basename(file, '.spec')
    const html = path.join(outDir, `${name}.html`)
    const py = path.join(outDir, `${name}.py`)
    execFileSync(process.execPath,
      [path.join(root, 'substance', 'build.mjs'), specPath, '--html', html, '--py', py],
      { stdio: 'inherit' })
    fs.rmSync(py) // the payload is inside the page; the file beside it is build.mjs's habit
    const text = fs.readFileSync(specPath, 'utf8')
    built.push({ ...describe(text), tool: domain.tool, file: `${name}.html`, kb: Math.round(fs.statSync(html).size / 1024), text })
  }
}
if (!built.length) throw new Error('no example specs found')

// The first example is the preview: the graph alone, as an SVG the README can show.
const preview = built[0]
fs.writeFileSync(path.join(outDir, 'preview.svg'), graphSvg(parseSpec(preview.text, catalogue)))

// Same palette as the pages, so the index does not look like a different project.
fs.writeFileSync(path.join(outDir, 'index.html'), `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>node-graph-skills — examples</title>
<style>
  :root { color-scheme: dark; }
  * { box-sizing: border-box; }
  body { margin: 0; background: ${theme.page}; color: ${theme.text}; font-family: ${theme.font}; line-height: 1.55; }
  .wrap { max-width: 760px; margin: 0 auto; padding: 64px 24px 80px; }
  .eyebrow { text-transform: uppercase; letter-spacing: .14em; font-size: 12px; color: ${theme.accent}; margin: 0; }
  h1 { font-size: clamp(32px, 5vw, 46px); line-height: 1.05; margin: 10px 0 0; }
  .dek { margin: 14px 0 0; color: ${theme.textDim}; max-width: 62ch; }
  ul { list-style: none; padding: 0; margin: 40px 0 0; display: flex; flex-direction: column; gap: 1px;
       background: ${theme.nodeEdge}; border: 1px solid ${theme.nodeEdge}; border-radius: 10px; overflow: hidden; }
  a.item { display: block; background: ${theme.canvas}; padding: 20px 22px; text-decoration: none; color: inherit; }
  a.item:hover { background: ${theme.panel}; }
  .t { font-size: 19px; font-weight: 600; }
  .s { color: ${theme.textDim}; font-size: 14.5px; margin-top: 4px; }
  .k { color: ${theme.textDim}; font-size: 12.5px; margin-top: 8px; font-variant-numeric: tabular-nums; }
  .foot { margin-top: 40px; color: ${theme.textDim}; font-size: 13.5px; border-top: 1px solid ${theme.nodeEdge}; padding-top: 20px; }
  .foot a { color: ${theme.accent}; }
</style>
</head>
<body>
<div class="wrap">
  <p class="eyebrow">node-graph-skills</p>
  <h1>Example graphs</h1>
  <p class="dek">Each page is a single self-contained file that makes no network requests.
  Every pin is named and typed, values sit under the node that holds them, and the Python under
  the graph builds the same network inside the tool it came from.</p>
  <ul>
${built.map(b => `    <li><a class="item" href="${b.file}">
      <div class="t">${escape(b.title)}</div>
      <div class="s">${escape(b.summary)}</div>
      <div class="k">${escape(b.tool)} &middot; ${b.kb} KB &middot; no network requests</div>
    </a></li>`).join('\n')}
  </ul>
  <p class="foot">Built from <a href="https://github.com/HaJH/node-graph-skills">the specs in this repository</a>.</p>
</div>
</body>
</html>
`)

console.log(`\n${built.length} page(s) + index + preview.svg -> ${outDir}`)
