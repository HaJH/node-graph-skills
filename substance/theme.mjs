// Colours and metrics for a drawn Substance graph.
//
// The greys and the accent are Designer's own, read out of resources/style/style.qss. The pin
// type colours are NOT: the graph canvas is drawn in C++ and its palette is not in the
// stylesheet or any other readable resource, so these are ours, chosen to separate the three
// things a Substance pin can carry rather than to match a screenshot.
//
// Flow is LR because Substance compositing graphs read left to right.

export const theme = {
  direction: 'LR',

  // from style.qss
  page: '#1a1a1a',
  canvas: '#262626',
  panel: '#2b2b2b',
  nodeBody: '#333333',
  nodeEdge: '#4d4d4d',
  headerEdge: '#5a5a5a',
  text: '#e5e5e5',
  textDim: '#999999',
  accent: '#1a8dff',

  // ours -- what the pin carries
  types: {
    color: '#e0a33a',
    gray: '#cccccc',
    either: '#7fbf6a',
    value: '#1a8dff',
  },

  // A library node is somebody else's graph dropped in; an atomic node is a built-in filter.
  // Worth telling apart at a glance, because only one of the two can be opened up.
  kinds: {
    atomic: '#3d4450',
    library: '#4a4030',
    // The project's own graphs read as a third kind on purpose. "Which of these did we write"
    // is the question a library that accumulates makes worth asking.
    project: '#2f4739',
  },

  metrics: {
    nodeWidth: 190,
    headerHeight: 30,
    pinRow: 19,
    pinRadius: 4,
    padding: 10,
    gapMajor: 78,
    gapMinor: 30,
    corner: 5,
  },

  font: "'Segoe UI', 'Inter', system-ui, sans-serif",
  monospace: "'Cascadia Mono', 'SF Mono', Consolas, monospace",
}
