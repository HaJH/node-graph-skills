// What a node definition says about its inputs, in the terms both formats need. Shared by the
// spec parser, the two writers and the reader, so the rules the gate settled live in one place.
// NOTES.md says how each was verified.
//
// An input is addressed by its path. Most paths are a plain name; a dotted one reaches into a V3
// dynamic input -- `images.image0` is the first slot of the autogrow `images`, `size_mode.width`
// an input the dynamic combo `size_mode` shows when its value selects it. The backend keys its
// inputs by exactly these paths.

export const CONTROL_MODES = ['fixed', 'increment', 'decrement', 'randomize']

// The input types the frontend draws a widget for. Anything else is a socket only.
const WIDGET_TYPES = new Set(['INT', 'FLOAT', 'STRING', 'BOOLEAN', 'COMBO', 'COMFY_DYNAMICCOMBO_V3'])

export const AUTOGROW = 'COMFY_AUTOGROW_V3'
export const DYNAMIC_COMBO = 'COMFY_DYNAMICCOMBO_V3'
// Dynamic inputs a spec cannot express yet. A node carrying one is refused by name rather than
// written wrong.
export const UNSUPPORTED = new Set(['COMFY_MATCHTYPE_V3', 'COMFY_DYNAMICGROUP_V3', 'COMFY_DYNAMICSLOT_V3'])

export const isWidget = input => WIDGET_TYPES.has(input.type) && !input.forceInput

export const hasControl = input => input.control_after_generate === true || typeof input.control_after_generate === 'string'

// true means the frontend's default, randomize; a string is the default itself.
export const defaultControl = input => (typeof input.control_after_generate === 'string' ? input.control_after_generate : 'randomize')

export function defaultValue (input) {
  if ('default' in input) return input.default
  if (input.type === 'COMBO') return input.options?.[0] ?? ''
  if (input.type === DYNAMIC_COMBO) return input.options?.[0]?.key
  return { INT: 0, FLOAT: 0, STRING: '', BOOLEAN: false }[input.type]
}

// The second widget an image input grows: a button the backend never sees. Verified for
// image_upload only (LoadImage); the audio and video uploads are not written.
export const uploadWidget = input => (input.image_upload ? { name: 'upload', type: 'IMAGEUPLOAD', value: 'image' } : null)

const topInput = (def, name) => def.inputs.find(i => i.name === name) ?? null

function slotNames (template) {
  return template.names ?? Array.from({ length: template.max }, (_, i) => template.prefix + i)
}

/** The input a path names, or null. values decides which option a dynamic combo is showing. */
export function inputAt (def, path, values = {}) {
  const parts = path.split('.')
  let input = topInput(def, parts[0])
  let at = parts[0]
  for (const part of parts.slice(1)) {
    if (!input) return null
    if (input.type === AUTOGROW) {
      if (!slotNames(input.template).includes(part)) return null
      input = input.template.input
    } else if (input.type === DYNAMIC_COMBO) {
      const chosen = at in values ? values[at] : defaultValue(input)
      const option = input.options.find(o => o.key === chosen)
      input = option?.inputs.find(i => i.name === part) ?? null
    } else {
      return null
    }
    at += '.' + part
  }
  return input
}

/** An autogrow's slot paths, in order, if the path names an autogrow. */
export function autogrowSlots (def, path) {
  const input = inputAt(def, path)
  return input?.type === AUTOGROW ? slotNames(input.template).map(n => `${path}.${n}`) : null
}

/**
 * Every input a node shows, in the definition's order, with dynamic inputs expanded the way the
 * frontend expands them: an autogrow shows its wired slots and one empty one after, never fewer
 * than its min; a dynamic combo shows what its current value selects.
 * @returns [{path, input, optional}]
 */
export function expandInputs (def, values, wired) {
  const out = []
  const walk = (path, input, optional) => {
    if (input.type === AUTOGROW) {
      const t = input.template
      const names = slotNames(t)
      let used = 0
      names.forEach((n, i) => { if (wired.has(`${path}.${n}`)) used = i + 1 })
      const count = Math.min(names.length, Math.max(used + 1, t.min))
      for (let i = 0; i < count; i++) walk(`${path}.${names[i]}`, t.input, optional || i >= t.min)
      return
    }
    out.push({ path, input, optional })
    if (input.type === DYNAMIC_COMBO) {
      const chosen = path in values ? values[path] : defaultValue(input)
      const option = input.options.find(o => o.key === chosen)
      for (const inner of option?.inputs ?? []) walk(`${path}.${inner.name}`, inner, optional || !!inner.optional)
    }
  }
  for (const input of def.inputs) walk(input.name, input, !!input.optional)
  return out
}

const typeSet = type => String(type).split(',').map(t => t.trim())

/** Can an output of one type feed an input of another? `*` takes anything; unions overlap. */
export function typesMatch (output, input) {
  const a = typeSet(output)
  const b = typeSet(input)
  return a.includes('*') || b.includes('*') || a.some(t => b.includes(t))
}

/** Is a value right for an input? Returns a problem, or null. */
export function checkValue (input, value, path) {
  const type = input.type
  const show = JSON.stringify(value)
  if (type === 'INT') {
    if (!Number.isInteger(value)) return `${path} is an INT, not ${show}`
  } else if (type === 'FLOAT') {
    if (typeof value !== 'number') return `${path} is a FLOAT, not ${show}`
  } else if (type === 'BOOLEAN') {
    if (typeof value !== 'boolean') return `${path} is a BOOLEAN -- true or false, not ${show}`
  } else if (type === 'STRING') {
    if (typeof value !== 'string') return `${path} is a STRING; quote it: "${value}"`
  } else if (type === 'COMBO') {
    if (input.multiselect) {
      if (!Array.isArray(value)) return `${path} takes a list of values`
    } else if (typeof value !== 'string') {
      return `${path} takes one of its values by name, not ${show}`
    }
    const values = input.multiselect ? value : [value]
    if (input.options && !input.files) {
      const bad = values.filter(v => !input.options.includes(v))
      if (bad.length) return `${path}=${bad.map(v => JSON.stringify(v)).join(',')} is not one of: ${input.options.join(', ')}`
    }
  } else if (type === DYNAMIC_COMBO) {
    const keys = input.options.map(o => o.key)
    if (!keys.includes(value)) return `${path}=${show} is not one of: ${keys.join(', ')}`
  } else {
    return `${path} is a ${type} socket; it takes a wire, not a value`
  }
  if (typeof value === 'number') {
    if ('min' in input && value < input.min) return `${path}=${value} is below its min, ${input.min}`
    if ('max' in input && value > input.max) return `${path}=${value} is above its max, ${input.max}`
  }
  return null
}
