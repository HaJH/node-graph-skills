// Everything the page says in its own voice.
//
// Node types, input names, output names and values are ComfyUI's and never translated -- they
// are what the reader types into a spec or finds on the canvas. What is translated is the page's
// own prose. A spec picks the language with a `lang` line; `--lang` overrides for a one-off.
//
// Adding a language means adding a key here with every field filled. The test refuses a partial
// one: half a translated page reads worse than an untranslated one.

const en = {
  name: 'English',
  subtitle: (nodes, wires, groups) => `${nodes} nodes, ${wires} wires` + (groups ? `, ${groups} groups` : ''),
  catalogue: (version, packs) => ` — ComfyUI ${version}` + (packs.length ? `, ${packs.join(', ')}` : ''),

  legend: {
    core: 'ComfyUI node',
    pack: names => `custom node pack (${names.join(', ')})`,
  },

  payloadHeading: 'The same workflow, for ComfyUI',
  payloadSubtitle: 'Copy, then Ctrl+V on the ComfyUI canvas: it opens as a new workflow tab and leaves the open one alone.',
  copy: 'Copy',
  copied: 'Copied',
  copyManually: 'Press Ctrl+C',

  notesHeading: 'Notes',
  notes: [
    'Pin colours are ComfyUI&rsquo;s own, from its default dark palette. A type the palette ' +
    'leaves out &mdash; <code>INT</code>, <code>STRING</code>, a custom pack&rsquo;s own &mdash; ' +
    'is drawn the grey-green ComfyUI draws its wire in.',
    'A widget with a wire on it shows no value: the wire wins, on the canvas and when it runs. ' +
    'A seed&rsquo;s value is followed by what it does after each run &mdash; <code>fixed</code>, ' +
    '<code>increment</code>, <code>decrement</code> or <code>randomize</code>.',
    'The build also writes the API format beside the spec, keyed by these node names, for ' +
    'anything that queues the workflow without the window.',
  ],
}

const ko = {
  name: '한국어',
  subtitle: (nodes, wires, groups) => `노드 ${nodes}개, 와이어 ${wires}개` + (groups ? `, 그룹 ${groups}개` : ''),
  catalogue: (version, packs) => ` — ComfyUI ${version}` + (packs.length ? `, ${packs.join(', ')}` : ''),

  legend: {
    core: 'ComfyUI 노드',
    pack: names => `커스텀 노드 팩 (${names.join(', ')})`,
  },

  payloadHeading: '같은 워크플로, ComfyUI용',
  payloadSubtitle: '복사해서 ComfyUI 캔버스에 Ctrl+V. 새 워크플로 탭으로 열리고, 열려 있던 것은 건드리지 않는다.',
  copy: '복사',
  copied: '복사됨',
  copyManually: 'Ctrl+C를 누르세요',

  notesHeading: '참고',
  notes: [
    '핀 색은 ComfyUI 기본 다크 팔레트의 것이다. 팔레트에 없는 타입 &mdash; <code>INT</code>, ' +
    '<code>STRING</code>, 커스텀 팩 고유의 타입 &mdash; 은 ComfyUI가 그 와이어를 그리는 회녹색으로 그린다.',
    '와이어가 꽂힌 위젯에는 값을 적지 않는다. 캔버스에서도 실행할 때도 와이어가 이긴다. ' +
    '시드 값 뒤에는 실행할 때마다 어떻게 바뀌는지가 붙는다 &mdash; <code>fixed</code>, ' +
    '<code>increment</code>, <code>decrement</code>, <code>randomize</code>.',
    '빌드는 이 노드 이름을 키로 쓰는 API 형식 파일도 spec 옆에 쓴다. 창 없이 워크플로를 ' +
    '큐에 넣는 스크립트가 그 파일을 쓴다.',
  ],
}

export const LANGUAGES = { en, ko }

export function stringsFor (lang) {
  const found = LANGUAGES[lang]
  if (!found) throw new Error(`there is no "${lang}" page language -- there is ${Object.keys(LANGUAGES).join(', ')}`)
  return found
}
