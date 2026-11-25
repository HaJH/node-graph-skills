// Colours and metrics for a drawn ComfyUI workflow.
//
// Read out of the frontend rather than chosen: comfyui-frontend-package 1.59.6 keeps its
// palettes as plain data (assets/colorPaletteTheme-*.js), and these are the "Dark (Default)"
// one's -- node_slot for the pin colours, litegraph_base and comfy_base for the rest. A type the
// palette does not colour (INT, STRING, a custom pack's IPADAPTER) is drawn in LINK_COLOR,
// which is what the frontend draws such a wire in.
//
// Flow is LR because a ComfyUI workflow reads left to right.

export const theme = {
  direction: 'LR',

  page: '#171718', // theme.background
  canvas: '#202020', // comfy_base bg-color
  panel: '#262729', // theme.card
  nodeBody: '#353535', // NODE_DEFAULT_BGCOLOR
  nodeEdge: '#4e4e4e', // comfy_base border-color
  headerEdge: '#55565e', // theme.node-border
  text: '#dddddd', // comfy_base input-text
  textDim: '#999999', // comfy_base descrip-text
  accent: '#0b8ce9', // theme.primary

  // node_slot, Dark (Default)
  types: {
    CLIP: '#FFD500',
    CLIP_VISION: '#A8DADC',
    CLIP_VISION_OUTPUT: '#ad7452',
    CONDITIONING: '#FFA931',
    CONTROL_NET: '#6EE7B7',
    IMAGE: '#64B5F6',
    LATENT: '#FF9CF9',
    MASK: '#81C784',
    MODEL: '#B39DDB',
    STYLE_MODEL: '#C2FFAE',
    VAE: '#FF6E6E',
    NOISE: '#B0B0B0',
    GUIDER: '#66FFFF',
    SAMPLER: '#ECB4B4',
    SIGMAS: '#CDFFCD',
    TAESD: '#DCC274',
  },
  otherType: '#99AA99', // LINK_COLOR

  // NODE_DEFAULT_COLOR is ComfyUI's own title bar. A custom pack's nodes get a tint of ours, since
  // "which of these needs something installed" is worth seeing at a glance.
  kinds: {
    core: '#333333',
    pack: '#3b3352',
  },

  metrics: {
    nodeWidth: 180,
    headerHeight: 30,
    pinRow: 19,
    pinRadius: 4,
    padding: 10,
    gapMajor: 78,
    gapMinor: 30,
    corner: 6,
  },

  font: "'Segoe UI', 'Inter', system-ui, sans-serif",
  monospace: "'Cascadia Mono', 'SF Mono', Consolas, monospace",
}
