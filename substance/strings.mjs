// Everything the page says in its own voice.
//
// The graph is the same in any language -- node names, pin ids and parameter names are
// Designer's and never translated. What is translated is the page's own prose: the legend, the
// notes, the payload heading, the button, and the library guidance.
//
// A spec declares its language with a `lang` line, so a spec written for a team stays in that
// team's language whoever builds it. `--lang` overrides for a one-off.
//
// Adding a language means adding a key here with every field filled. A missing field is a
// build error rather than a silent fall back to English -- half a translated page reads worse
// than an untranslated one, and nothing else in this skill fails quietly.

const en = {
  name: 'English',
  subtitle: (nodes, wires) => `${nodes} nodes, ${wires} wires`,
  subtitleSplit: (library, atomic) => ` — ${library} from the library, ${atomic} built in`,

  legend: {
    color: 'colour',
    gray: 'grayscale',
    either: 'either',
    value: 'value',
    atomic: 'built-in filter',
    library: 'library node',
    project: 'this project',
  },

  payloadHeading: 'The same network, for Designer',
  payloadSubtitle: 'Open the graph you want it in, then Windows › Python Editor, paste, Run.',
  copy: 'Copy',
  copied: 'Copied',
  copyManually: 'Press Ctrl+C',

  notesHeading: 'Notes',
  notes: [
    'Pin colours are this page&rsquo;s, not Designer&rsquo;s — the canvas palette lives in the ' +
    'application binary, not in any readable resource. They separate what a pin carries: a ' +
    'colour texture, a grayscale one, either, or a plain number.',
    'Built-in filters accept whichever of colour or grayscale the graph is already carrying, ' +
    'so their pins are drawn as <code>either</code> rather than guessed at.',
  ],

  guideHeading: 'Where this graph belongs',
  guideBlurb: 'This spec is part of a library, not a one-off network. Saving the graph under ' +
    'the alias below is what lets the next spec name it as a node instead of rebuilding it.',
  guideRows: {
    library: 'Library',
    declaredBy: 'Declared by',
    saveAs: 'Save the graph as',
    referencedAs: 'Other graphs reference it as',
    outputs: 'Outputs',
  },
  guideRegister: (project, alias, watched) =>
    `Nothing here resolves until <code>${project}</code> is registered in Designer &mdash; ` +
    '<code>Edit &rsaquo; Preferences &rsaquo; Projects</code>, add the file, restart. ' +
    'It is the one step a pasted script cannot take: the Python API has no alias management. ' +
    (watched
      ? `Once it is, <code>${alias}://</code> is a watched path, so graphs saved there appear in the Library panel beside Designer&rsquo;s own.`
      : `The project declares no watched path for <code>${alias}://</code>, so graphs saved there will not appear in the Library panel.`),
  guideNoAlias: project =>
    `<code>${project}</code> declares no alias, so a reference to this graph will be stored as a ` +
    'path and will not survive a different checkout.',
}

const ko = {
  name: '한국어',
  subtitle: (nodes, wires) => `노드 ${nodes}개, 와이어 ${wires}개`,
  subtitleSplit: (library, atomic) => ` — 라이브러리 ${library}, 내장 ${atomic}`,

  legend: {
    color: '컬러',
    gray: '그레이스케일',
    either: '둘 다',
    value: '값',
    atomic: '내장 필터',
    library: '라이브러리 노드',
    project: '이 프로젝트',
  },

  payloadHeading: '같은 네트워크, Designer용',
  payloadSubtitle: '넣을 그래프를 열고 Windows › Python Editor에 붙여넣어 실행한다.',
  copy: '복사',
  copied: '복사됨',
  copyManually: 'Ctrl+C를 누르세요',

  notesHeading: '참고',
  notes: [
    '핀 색은 이 페이지의 것이지 Designer의 것이 아니다 — 캔버스 팔레트는 애플리케이션 ' +
    '바이너리 안에 있고 읽을 수 있는 리소스 어디에도 없다. 색은 그 핀이 무엇을 나르는지를 ' +
    '구분한다: 컬러 텍스처, 그레이스케일, 둘 다, 또는 단순한 숫자.',
    '내장 필터는 그래프가 이미 나르고 있는 쪽을 그대로 받는다. 그래서 핀을 추측하지 않고 ' +
    '<code>둘 다</code>로 그린다.',
  ],

  guideHeading: '이 그래프가 속한 곳',
  guideBlurb: '이 스펙은 일회성 네트워크가 아니라 라이브러리의 일부다. 아래 별칭 아래에 ' +
    '그래프를 저장해야 다음 스펙이 이것을 다시 만들지 않고 노드 이름으로 부를 수 있다.',
  guideRows: {
    library: '라이브러리',
    declaredBy: '선언한 파일',
    saveAs: '그래프 저장 위치',
    referencedAs: '다른 그래프가 부르는 이름',
    outputs: '출력',
  },
  guideRegister: (project, alias, watched) =>
    `<code>${project}</code>를 Designer에 등록하기 전에는 여기 있는 어떤 것도 해석되지 않는다 &mdash; ` +
    '<code>Edit &rsaquo; Preferences &rsaquo; Projects</code>에서 파일을 추가하고 재시작. ' +
    '붙여넣는 스크립트가 대신 할 수 없는 단 하나의 단계다: 파이썬 API에 별칭 기능이 없다. ' +
    (watched
      ? `등록하면 <code>${alias}://</code>가 watched path이므로, 거기 저장한 그래프가 Designer 자체 노드 옆 Library 패널에 나타난다.`
      : `이 프로젝트는 <code>${alias}://</code>에 대한 watched path를 선언하지 않았다. 거기 저장한 그래프는 Library 패널에 나타나지 않는다.`),
  guideNoAlias: project =>
    `<code>${project}</code>가 별칭을 선언하지 않았다. 이 그래프에 대한 참조는 경로로 저장되고, ` +
    '체크아웃 위치가 다르면 깨진다.',
}

export const LANGUAGES = { en, ko }

export function stringsFor (lang) {
  const found = LANGUAGES[lang]
  if (!found) {
    throw new Error(
      `there is no "${lang}" page language -- there is ${Object.keys(LANGUAGES).join(', ')}`)
  }
  return found
}
