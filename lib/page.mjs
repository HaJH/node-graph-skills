// Wraps a rendered graph in one self-contained HTML file. No script, no fetch, no font from a
// CDN -- a page has to survive being mailed to somebody and opened offline.
//
// The SVG is inlined rather than referenced so the whole thing is one file, and it scrolls
// inside its own box so a wide graph never makes the page scroll sideways.

const escape = s => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export function page ({ title, subtitle, graph, legend, theme, notes }) {
  const style = `
    :root { color-scheme: dark; }
    * { box-sizing: border-box; }
    body {
      margin: 0; padding: 32px 24px 64px;
      background: ${theme.page}; color: ${theme.text};
      font-family: ${theme.font};
      line-height: 1.55;
    }
    main { max-width: 1180px; margin: 0 auto; }
    h1 { font-size: 20px; margin: 0 0 4px; font-weight: 600; }
    .subtitle { color: ${theme.textDim}; font-size: 13px; margin: 0 0 24px; }
    .frame {
      border: 1px solid ${theme.nodeEdge}; border-radius: 8px;
      background: ${theme.canvas}; overflow-x: auto; padding: 0;
    }
    .frame svg { display: block; }
    .legend { display: flex; flex-wrap: wrap; gap: 18px; margin: 16px 0 0; padding: 0; list-style: none; font-size: 12px; }
    .legend li { display: flex; align-items: center; gap: 7px; color: ${theme.textDim}; }
    .swatch { width: 10px; height: 10px; border-radius: 50%; flex: none; }
    .swatch.block { border-radius: 2px; }
    .notes { margin-top: 28px; font-size: 13px; color: ${theme.textDim}; }
    .notes h2 { font-size: 13px; color: ${theme.text}; margin: 0 0 6px; font-weight: 600; }
    .notes p { margin: 0 0 10px; }
    code { font-family: ${theme.monospace}; font-size: 0.92em; color: ${theme.text}; }
  `

  const legendItems = legend.map(item =>
    `<li><span class="swatch${item.block ? ' block' : ''}" style="background:${item.colour}"></span>${escape(item.label)}</li>`
  ).join('\n      ')

  const notesHtml = notes?.length
    ? `<section class="notes">\n  <h2>Notes</h2>\n  ${notes.map(n => `<p>${n}</p>`).join('\n  ')}\n</section>`
    : ''

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escape(title)}</title>
<style>${style}</style>
</head>
<body>
<main>
  <h1>${escape(title)}</h1>
  <p class="subtitle">${escape(subtitle)}</p>
  <div class="frame">
${graph}
  </div>
  <ul class="legend">
      ${legendItems}
  </ul>
${notesHtml}
</main>
</body>
</html>
`
}
