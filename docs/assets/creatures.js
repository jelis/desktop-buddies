// Drei eigene, originale Wesen – als SVG gezeichnet.
// Jedes hat eine Rolle, die zu einem ADHS-Hilfsmittel passt.

const EYE = (cx, cy, r = 5) => `
  <ellipse cx="${cx}" cy="${cy}" rx="${r * 0.85}" ry="${r}" fill="#3a2b3f"/>
  <circle cx="${cx + r * 0.3}" cy="${cy - r * 0.35}" r="${r * 0.32}" fill="#fff"/>`;

const SHADOW = `<ellipse class="shadow" cx="50" cy="95" rx="26" ry="3.5" fill="rgba(0,0,0,.18)"/>`;

window.CREATURES = [
  {
    id: 'mochi',
    name: 'Mochi',
    role: 'Fokus-Wolke',
    color: '#ff8fb3',
    anchor: { top: [50, 33], side: [71, 30], eyes: [37, 63, 56], er: 8 },
    svg: `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  ${SHADOW}
  <g class="body">
    <ellipse cx="38" cy="90" rx="8" ry="4.5" fill="#f7a9c4"/>
    <ellipse cx="62" cy="90" rx="8" ry="4.5" fill="#f7a9c4"/>
    <path d="M20 44 L27 16 L44 34 Z" fill="#f9b8cf"/>
    <path d="M80 44 L73 16 L56 34 Z" fill="#f9b8cf"/>
    <path d="M26 38 L29 24 L38 34 Z" fill="#ff8fb3"/>
    <path d="M74 38 L71 24 L62 34 Z" fill="#ff8fb3"/>
    <path d="M84 70 q12 -4 8 -16 q-2 8 -10 8z" fill="#f9b8cf"/>
    <ellipse cx="50" cy="61" rx="35" ry="29" fill="#ffd3e2"/>
    <ellipse cx="50" cy="72" rx="20" ry="13" fill="#fff2f7"/>
    <g class="eyes">${EYE(37, 56)}${EYE(63, 56)}</g>
    <g class="eyes-closed">
      <path d="M32 57 q5 4 10 0" stroke="#3a2b3f" stroke-width="2.2" fill="none" stroke-linecap="round"/>
      <path d="M58 57 q5 4 10 0" stroke="#3a2b3f" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    </g>
    <ellipse cx="28" cy="65" rx="5.5" ry="3" fill="#ff9fbf" opacity=".75"/>
    <ellipse cx="72" cy="65" rx="5.5" ry="3" fill="#ff9fbf" opacity=".75"/>
    <path class="mouth" d="M46 64 Q50 68 54 64" stroke="#3a2b3f" stroke-width="2" fill="none" stroke-linecap="round"/>
  </g>
</svg>`,
  },
  {
    id: 'pip',
    name: 'Pip',
    role: 'Wasser- & Bewegungs-Tröpfchen',
    color: '#4fcfb0',
    anchor: { top: [50, 34], side: [64, 40], eyes: [40, 60, 63], er: 7 },
    svg: `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  ${SHADOW}
  <g class="body">
    <ellipse cx="40" cy="91" rx="6.5" ry="4" fill="#6fd6bd"/>
    <ellipse cx="60" cy="91" rx="6.5" ry="4" fill="#6fd6bd"/>
    <ellipse cx="21" cy="70" rx="5" ry="8" fill="#86e3cc" transform="rotate(25 21 70)"/>
    <ellipse cx="79" cy="70" rx="5" ry="8" fill="#86e3cc" transform="rotate(-25 79 70)"/>
    <path d="M50 14 C62 34 79 48 79 64 A29 26 0 0 1 21 64 C21 48 38 34 50 14Z" fill="#a8eedd"/>
    <ellipse cx="34" cy="52" rx="4" ry="8" fill="#fff" opacity=".55" transform="rotate(20 34 52)"/>
    <path d="M50 16 Q58 2 72 6 Q62 18 50 16Z" fill="#6cc48a"/>
    <path d="M52 15 Q60 9 68 8" stroke="#4fa26c" stroke-width="1.2" fill="none"/>
    <g class="eyes">${EYE(40, 63, 4.6)}${EYE(60, 63, 4.6)}</g>
    <g class="eyes-closed">
      <path d="M35.5 64 q4.5 3.5 9 0" stroke="#3a2b3f" stroke-width="2.2" fill="none" stroke-linecap="round"/>
      <path d="M55.5 64 q4.5 3.5 9 0" stroke="#3a2b3f" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    </g>
    <ellipse cx="32" cy="71" rx="4.5" ry="2.5" fill="#ff9fbf" opacity=".6"/>
    <ellipse cx="68" cy="71" rx="4.5" ry="2.5" fill="#ff9fbf" opacity=".6"/>
    <ellipse class="mouth" cx="50" cy="72" rx="2.6" ry="3" fill="#3a2b3f"/>
  </g>
</svg>`,
  },
  {
    id: 'knopf',
    name: 'Knopf',
    role: 'Aufgaben-Eulchen',
    color: '#ffb02e',
    anchor: { top: [50, 31], side: [70, 36], eyes: [40, 60, 51], er: 8.5 },
    svg: `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  ${SHADOW}
  <g class="body">
    <path d="M36 88 l-4 6 M36 88 l0 7 M36 88 l4 6" stroke="#ff9a3d" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M64 88 l-4 6 M64 88 l0 7 M64 88 l4 6" stroke="#ff9a3d" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M42 32 Q43 16 50 22 Q55 12 58 30Z" fill="#ffc23d"/>
    <ellipse cx="20" cy="62" rx="7" ry="15" fill="#ffc23d" transform="rotate(14 20 62)"/>
    <ellipse cx="80" cy="62" rx="7" ry="15" fill="#ffc23d" transform="rotate(-14 80 62)"/>
    <ellipse cx="50" cy="60" rx="31" ry="30" fill="#ffd970"/>
    <ellipse cx="50" cy="52" rx="24" ry="16" fill="#fff4d2"/>
    <path d="M42 76 l3 3 l3 -3 M52 76 l3 3 l3 -3 M47 82 l3 3 l3 -3" stroke="#e8b33a" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <g class="eyes">${EYE(40, 51, 6)}${EYE(60, 51, 6)}</g>
    <g class="eyes-closed">
      <path d="M34 52 q6 4.5 12 0" stroke="#3a2b3f" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      <path d="M54 52 q6 4.5 12 0" stroke="#3a2b3f" stroke-width="2.4" fill="none" stroke-linecap="round"/>
    </g>
    <path class="mouth" d="M46.5 59 L53.5 59 L50 64.5Z" fill="#ff9a3d"/>
    <ellipse cx="30" cy="60" rx="4.5" ry="2.5" fill="#ff9fbf" opacity=".6"/>
    <ellipse cx="70" cy="60" rx="4.5" ry="2.5" fill="#ff9fbf" opacity=".6"/>
  </g>
</svg>`,
  },
  {
    id: 'byte',
    name: 'Byte',
    role: 'Coding-Buddy',
    color: '#5b8cff',
    anchor: { top: [50, 30], side: [78, 52], eyes: [38, 62, 57], er: 6 },
    prop: `<g class="prop codeprop">
      <rect x="26" y="76" width="48" height="4" rx="2" fill="#8d97b5"/>
      <path d="M30 76 L34 62 L66 62 L70 76Z" fill="#2b3350"/>
      <g class="codelines" stroke-linecap="round" stroke-width="2">
        <path d="M38 67 h12" stroke="#7ee0c3"/><path d="M38 71 h18" stroke="#ffd970"/><path d="M52 67 h8" stroke="#ff9fbf"/>
      </g>
      <ellipse class="paw-l" cx="38" cy="79" rx="5" ry="3.2" fill="#a9c1ff"/>
      <ellipse class="paw-r" cx="62" cy="79" rx="5" ry="3.2" fill="#a9c1ff"/>
    </g>`,
    svg: `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  ${SHADOW}
  <g class="body">
    <rect x="34" y="86" width="12" height="7" rx="3.5" fill="#8fa9f0"/>
    <rect x="54" y="86" width="12" height="7" rx="3.5" fill="#8fa9f0"/>
    <rect x="12" y="56" width="9" height="20" rx="4.5" fill="#a9c1ff" transform="rotate(14 16 66)"/>
    <rect x="79" y="56" width="9" height="20" rx="4.5" fill="#a9c1ff" transform="rotate(-14 84 66)"/>
    <path d="M50 24 L50 14" stroke="#8fa9f0" stroke-width="3" stroke-linecap="round"/>
    <circle class="bulb" cx="50" cy="12" r="4.5" fill="#ffd970"/>
    <rect x="18" y="24" width="64" height="64" rx="22" fill="#c7d6ff"/>
    <rect x="25" y="34" width="50" height="34" rx="14" fill="#27325c"/>
    <g class="eyes">
      <rect x="32" y="47" width="10" height="12" rx="5" fill="#7ee0f5"/><circle cx="36.5" cy="51" r="2" fill="#fff"/>
      <rect x="58" y="47" width="10" height="12" rx="5" fill="#7ee0f5"/><circle cx="62.5" cy="51" r="2" fill="#fff"/>
    </g>
    <g class="eyes-closed">
      <path d="M32 54 q5 4.5 10 0" stroke="#7ee0f5" stroke-width="2.6" fill="none" stroke-linecap="round"/>
      <path d="M58 54 q5 4.5 10 0" stroke="#7ee0f5" stroke-width="2.6" fill="none" stroke-linecap="round"/>
    </g>
    <path class="mouth" d="M45 62 Q50 66 55 62" stroke="#7ee0f5" stroke-width="2" fill="none" stroke-linecap="round"/>
    <ellipse cx="29" cy="72" rx="4.5" ry="2.5" fill="#ff9fbf" opacity=".7"/>
    <ellipse cx="71" cy="72" rx="4.5" ry="2.5" fill="#ff9fbf" opacity=".7"/>
    <text x="50" y="82" text-anchor="middle" font-family="ui-monospace,Menlo,monospace" font-size="9" font-weight="800" fill="#5b8cff">&lt;/&gt;</text>
  </g>
</svg>`,
  },
];
