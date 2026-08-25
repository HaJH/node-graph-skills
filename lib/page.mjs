// Wraps a rendered graph in one self-contained HTML file. No script, no fetch, no font from a
// CDN -- a page has to survive being mailed to somebody and opened offline.
//
// The SVG is inlined rather than referenced so the whole thing is one file, and it scrolls
// inside its own box so a wide graph never makes the page scroll sideways.

const escape = s => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export function page ({ title, subtitle, graph, legend, theme, notes, guide, payload }) {
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
    .guide { margin-top: 28px; font-size: 13px; }
    .guide h2 { font-size: 13px; color: ${theme.text}; margin: 0 0 4px; font-weight: 600; }
    .guide > p { color: ${theme.textDim}; margin: 0 0 12px; }
    .guide dl { display: grid; grid-template-columns: minmax(9rem, max-content) 1fr; gap: 6px 18px; margin: 0; }
    .guide dt { color: ${theme.textDim}; }
    .guide dd { margin: 0; color: ${theme.text}; }
    .guide .todo { margin: 14px 0 0; padding: 10px 14px; border-left: 2px solid ${theme.accent};
      background: ${theme.panel}; border-radius: 0 5px 5px 0; color: ${theme.text}; }
    .notes { margin-top: 28px; font-size: 13px; color: ${theme.textDim}; }
    .notes h2 { font-size: 13px; color: ${theme.text}; margin: 0 0 6px; font-weight: 600; }
    .notes p { margin: 0 0 10px; }
    code { font-family: ${theme.monospace}; font-size: 0.92em; color: ${theme.text}; }
    .payload { margin-top: 32px; }
    .payload-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 16px; margin-bottom: 8px; }
    .payload h2 { font-size: 13px; margin: 0 0 2px; font-weight: 600; }
    .payload .sub { color: ${theme.textDim}; font-size: 12px; margin: 0; }
    .payload button {
      flex: none; font: inherit; font-size: 12px; color: ${theme.text};
      background: ${theme.panel}; border: 1px solid ${theme.nodeEdge};
      border-radius: 5px; padding: 6px 12px; cursor: pointer;
    }
    .payload button:hover { border-color: ${theme.accent}; }
    .payload pre {
      margin: 0; max-height: 340px; overflow: auto;
      background: ${theme.canvas}; border: 1px solid ${theme.nodeEdge}; border-radius: 8px;
      padding: 14px 16px; font-family: ${theme.monospace}; font-size: 11.5px; line-height: 1.5;
      color: ${theme.text}; white-space: pre;
    }
  `

  const legendItems = legend.map(item =>
    `<li><span class="swatch${item.block ? ' block' : ''}" style="background:${item.colour}"></span>${escape(item.label)}</li>`
  ).join('\n      ')

  const guideHtml = guide
    ? `<section class="guide">
  <h2>${escape(guide.heading)}</h2>
  <p>${guide.blurb}</p>
  <dl>
    ${guide.rows.map(([term, detail]) => `<dt>${escape(term)}</dt><dd>${detail}</dd>`).join('\n    ')}
  </dl>
  ${guide.todo ? `<p class="todo">${guide.todo}</p>` : ''}
</section>`
    : ''

  const notesHtml = notes?.length
    ? `<section class="notes">\n  <h2>Notes</h2>\n  ${notes.map(n => `<p>${n}</p>`).join('\n  ')}\n</section>`
    : ''

  // The button copies. navigator.clipboard is the clean route but an artifact is framed
  // cross-origin without clipboard-write delegated, so it rejects there; execCommand('copy') is
  // gated on the click's user activation rather than on a permission and does work in a frame.
  // Both are tried, and the payload is left selected either way, so a reader whose browser
  // refuses both is still one Ctrl+C away rather than stuck.
  const payloadHtml = payload
    ? `<section class="payload">
  <div class="payload-head">
    <div>
      <h2>${escape(payload.heading)}</h2>
      <p class="sub">${escape(payload.subtitle)}</p>
    </div>
    <button type="button" id="copy-payload">Copy</button>
  </div>
  <pre id="payload">${escape(payload.text)}</pre>
</section>
<script>
(function () {
  var button = document.getElementById('copy-payload');
  var node = document.getElementById('payload');
  var idle = button.textContent;
  var timer;

  function say (message) {
    button.textContent = message;
    clearTimeout(timer);
    timer = setTimeout(function () { button.textContent = idle; }, 2000);
  }

  button.addEventListener('click', function () {
    var range = document.createRange();
    range.selectNodeContents(node);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    // execCommand first: it is synchronous, so it still holds the click's user activation.
    // Awaiting the clipboard promise before it would spend that activation.
    var copied = false;
    try { copied = document.execCommand('copy'); } catch (e) { copied = false; }
    if (copied) { say('Copied'); return; }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(node.textContent).then(
        function () { say('Copied'); },
        function () { say('Press Ctrl+C'); }
      );
      return;
    }
    say('Press Ctrl+C');
  });
})();
</script>`
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
${payloadHtml}
${guideHtml}
${notesHtml}
</main>
</body>
</html>
`
}
