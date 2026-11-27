// Alternative Looks für jedes Wesen: [[gamepad-2]] Gamer und [[drama]] Theater.
// Rolle und Funktionen bleiben gleich – nur Aussehen, Name, Requisite und Sprüche ändern sich.

window.VARIANTS = {};
window.CREATURES.forEach((c) => { window.VARIANTS[c.id] = { classic: { ...c, theme: 'classic' } }; });

const CLOSED = (x1, x2, y, w = 4.5) => `<g class="eyes-closed">
  <path d="M${x1 - w} ${y} q${w} 3.5 ${w * 2} 0" stroke="#3a2b3f" stroke-width="2.2" fill="none" stroke-linecap="round"/>
  <path d="M${x2 - w} ${y} q${w} 3.5 ${w * 2} 0" stroke="#3a2b3f" stroke-width="2.2" fill="none" stroke-linecap="round"/></g>`;

const svgWrap = (inner) => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">${SHADOW}<g class="body">${inner}</g></svg>`;

// ================================================================= [[gamepad-2]] GAMER
Object.assign(window.VARIANTS.mochi, {
  gamer: {
    id: 'mochi', theme: 'gamer', name: 'Bitsy', role: 'Quest-Timer', color: '#8b7bff',
    anchor: { top: [50, 24], side: [76, 40], eyes: [37, 63, 56.5], er: 7.5 },
    svg: svgWrap(`
      <path d="M22 88 Q17 88 17 80 L17 52 Q17 35 34 35 L66 35 Q83 35 83 52 L83 80 Q83 88 78 88 Q73 93 67 88 Q61 93 55 88 Q49 93 43 88 Q37 93 31 88 Q26 93 22 88Z" fill="#b6a8ff"/>
      <path d="M28 45 Q28 40 34 40 L44 40" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".55" fill="none"/>
      <ellipse cx="50" cy="75" rx="18" ry="9" fill="#d4ccff"/>
      <g class="eyes">
        <rect x="33" y="52" width="8" height="9" rx="1.5" fill="#2d2540"/><rect x="36.5" y="53.5" width="3" height="3" fill="#fff"/>
        <rect x="59" y="52" width="8" height="9" rx="1.5" fill="#2d2540"/><rect x="62.5" y="53.5" width="3" height="3" fill="#fff"/>
      </g>
      <g class="eyes-closed"><path d="M33 57 h8 M59 57 h8" stroke="#2d2540" stroke-width="2.6" stroke-linecap="round"/></g>
      <rect x="24" y="63" width="7" height="4" rx="2" fill="#ff9fd0" opacity=".85"/>
      <rect x="69" y="63" width="7" height="4" rx="2" fill="#ff9fd0" opacity=".85"/>
      <path class="mouth" d="M45 64 l2.5 3 l2.5 -3 l2.5 3 l2.5 -3" stroke="#2d2540" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M19 54 Q19 22 50 22 Q81 22 81 54" stroke="#3b3550" stroke-width="5" fill="none" stroke-linecap="round"/>
      <rect x="11" y="46" width="11" height="18" rx="4.5" fill="#3b3550"/><rect x="13.5" y="50" width="3" height="10" rx="1.5" fill="#4ff0c8"/>
      <rect x="78" y="46" width="11" height="18" rx="4.5" fill="#3b3550"/><rect x="83.5" y="50" width="3" height="10" rx="1.5" fill="#4ff0c8"/>
      <path d="M17 63 Q20 76 34 74" stroke="#3b3550" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <circle cx="35.5" cy="73.8" r="2.6" fill="#4ff0c8"/>`),
  },
});

Object.assign(window.VARIANTS.pip, {
  gamer: {
    id: 'pip', theme: 'gamer', name: 'Mana', role: 'Mana-Trank (Wasser & Bewegung)', color: '#3fa2f0',
    anchor: { top: [50, 22], side: [60, 32], eyes: [42, 58, 57], er: 6.5 },
    svg: svgWrap(`
      <ellipse cx="38" cy="92" rx="6" ry="3.6" fill="#7cc4f0"/><ellipse cx="62" cy="92" rx="6" ry="3.6" fill="#7cc4f0"/>
      <ellipse cx="23" cy="70" rx="4.5" ry="7" fill="#bfe6fb" transform="rotate(25 23 70)"/>
      <ellipse cx="77" cy="70" rx="4.5" ry="7" fill="#bfe6fb" transform="rotate(-25 77 70)"/>
      <rect x="42" y="30" width="16" height="17" rx="3" fill="#e9f7ff" stroke="#b5dcf3" stroke-width="1.5"/>
      <circle cx="50" cy="66" r="25" fill="#e9f7ff" stroke="#b5dcf3" stroke-width="1.8"/>
      <path d="M26 66 Q38 61 50 66 Q62 71 74 66 A24 24 0 0 1 26 66Z" fill="#6ab8ff"/>
      <circle cx="58" cy="80" r="2.2" fill="#fff" opacity=".75"/><circle cx="43" cy="77" r="1.5" fill="#fff" opacity=".75"/><circle cx="65" cy="72" r="1.2" fill="#fff" opacity=".75"/>
      <path d="M32 56 Q35 47 43 45" stroke="#fff" stroke-width="3" stroke-linecap="round" fill="none" opacity=".9"/>
      <rect x="39" y="22" width="22" height="10" rx="3.5" fill="#d9a774"/>
      <path d="M44 25 v4 M49 25 v4 M54 25 v4" stroke="#c08a57" stroke-width="1"/>
      <path d="M58 33 q9 2 7 11" stroke="#ffd56b" stroke-width="1.6" fill="none"/>
      <path d="M65 44 l-3 2 l3 4 l3 -4z" fill="#ffd56b"/>
      <g class="eyes">${EYE(42, 57, 4.6)}${EYE(58, 57, 4.6)}</g>
      ${CLOSED(42, 58, 58)}
      <ellipse cx="34" cy="63" rx="4" ry="2.3" fill="#ff9fbf" opacity=".65"/>
      <ellipse cx="66" cy="63" rx="4" ry="2.3" fill="#ff9fbf" opacity=".65"/>
      <path class="mouth" d="M47 62.5 Q50 65.5 53 62.5" stroke="#3a2b3f" stroke-width="2" fill="none" stroke-linecap="round"/>`),
    prop: `<g class="prop"><g class="book">
      <rect x="33" y="73" width="34" height="19" rx="6" fill="#3b3550"/>
      <rect x="41" y="76" width="18" height="12" rx="2" fill="#7cf0c8"/>
      <path d="M45 84 l3 -4 l3 3 l3 -5 l2 2" stroke="#2d2540" stroke-width="1.2" fill="none"/>
      <circle cx="37" cy="82.5" r="1.8" fill="#fff"/><circle cx="63" cy="82.5" r="1.8" fill="#ff6b9a"/>
      <ellipse cx="32" cy="83" rx="4" ry="3.5" fill="#bfe6fb"/><ellipse cx="68" cy="83" rx="4" ry="3.5" fill="#bfe6fb"/>
    </g></g>`,
  },
});

const KEYS = (y) => Array.from({ length: 9 }, (_, i) => `<rect x="${25.5 + i * 5.6}" y="${y}" width="4.2" height="3" rx=".8" fill="hsl(${i * 40},85%,68%)"/>`).join('');
Object.assign(window.VARIANTS.knopf, {
  gamer: {
    id: 'knopf', theme: 'gamer', name: 'Joy', role: 'Quest-Log (Aufgaben)', color: '#ff7a55',
    anchor: { top: [44, 41], side: [80, 47], eyes: [45, 55, 53], er: 5 },
    svg: svgWrap(`
      <ellipse cx="22" cy="91" rx="7" ry="3.6" fill="#e86a52"/><ellipse cx="78" cy="91" rx="7" ry="3.6" fill="#e86a52"/>
      <path d="M50 40 Q50 28 58 26 Q66 24 63 16" stroke="#3b3550" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M30 40 L70 40 Q84 40 86 54 L90 78 Q92 90 80 89 Q72 88 66 78 L34 78 Q28 88 20 89 Q8 90 10 78 L14 54 Q16 40 30 40Z" fill="#ff9a7a"/>
      <path d="M22 47 Q28 43 35 44" stroke="#fff" stroke-width="2.5" stroke-linecap="round" fill="none" opacity=".6"/>
      <path d="M23 56 h5 v-5 h5 v5 h5 v5 h-5 v5 h-5 v-5 h-5z" fill="#fff" opacity=".9"/>
      <circle cx="71" cy="51" r="3" fill="#7cc8ff"/><circle cx="77" cy="57" r="3" fill="#ffd34d"/>
      <circle cx="71" cy="63" r="3" fill="#7be0a8"/><circle cx="65" cy="57" r="3" fill="#ff6b9a"/>
      <g class="eyes">${EYE(44.5, 53, 4)}${EYE(55.5, 53, 4)}</g>
      ${CLOSED(44.5, 55.5, 54, 3.5)}
      <ellipse cx="41" cy="61" rx="3" ry="1.8" fill="#ff6b9a" opacity=".55"/>
      <ellipse cx="59" cy="61" rx="3" ry="1.8" fill="#ff6b9a" opacity=".55"/>
      <path class="mouth" d="M47 60 Q50 63.5 53 60" stroke="#3a2b3f" stroke-width="2" fill="none" stroke-linecap="round"/>`),
    prop: `<g class="prop">
      <rect x="22" y="81" width="56" height="12" rx="3" fill="#2f2b40"/>
      ${KEYS(83.2)}${KEYS(87.6)}
      <ellipse class="paw paw-l" cx="34" cy="81" rx="5" ry="3.5" fill="#ff9a7a"/>
      <ellipse class="paw paw-r" cx="66" cy="81" rx="5" ry="3.5" fill="#ff9a7a"/>
    </g>`,
  },
});

// ================================================================= [[drama]] THEATER
Object.assign(window.VARIANTS.mochi, {
  theater: {
    id: 'mochi', theme: 'theater', name: 'Aria', role: 'Bühnen-Uhr (Fokus)', color: '#a678e6',
    anchor: { top: [50, 26], side: [28, 33], eyes: [39, 61, 50], er: 7.5 },
    svg: svgWrap(`
      <path d="M30 93 Q32 78 50 76 Q68 78 70 93Z" fill="#b48ce8"/>
      <ellipse cx="50" cy="51" rx="30" ry="26" fill="#ecdfff"/>
      <g fill="#fff" stroke="#e1d3f6" stroke-width="1">
        <circle cx="31" cy="75" r="5.5"/><circle cx="39" cy="77.5" r="5.5"/><circle cx="47" cy="78.5" r="5.5"/>
        <circle cx="55" cy="78.5" r="5.5"/><circle cx="63" cy="77.5" r="5.5"/><circle cx="70" cy="75" r="5.5"/>
      </g>
      <path d="M47 26 q-7 -9 1 -12 q9 -2 6 7 q-2 4 -5 2" stroke="#b48ce8" stroke-width="3" fill="none" stroke-linecap="round"/>
      <circle cx="73" cy="32" r="5.5" fill="#ff6b8a"/>
      <path d="M70 32 q3 -3 6 0 q-3 3 -6 0" stroke="#e04a6e" stroke-width="1" fill="none"/>
      <ellipse cx="78.5" cy="37.5" rx="3.2" ry="1.6" fill="#6cc48a" transform="rotate(30 78.5 37.5)"/>
      <path d="M34 46.5 l-3 -2.5 M35.5 44.5 l-1.8 -3.2 M66 46.5 l3 -2.5 M64.5 44.5 l1.8 -3.2" stroke="#3a2b3f" stroke-width="1.6" stroke-linecap="round"/>
      <g class="eyes">${EYE(39, 50, 5.5)}${EYE(61, 50, 5.5)}</g>
      ${CLOSED(39, 61, 51, 5)}
      <ellipse cx="30" cy="59" rx="5" ry="2.8" fill="#ff9fbf" opacity=".7"/>
      <ellipse cx="70" cy="59" rx="5" ry="2.8" fill="#ff9fbf" opacity=".7"/>
      <ellipse class="mouth" cx="50" cy="61.5" rx="3" ry="3.6" fill="#7a3b5f"/>`),
  },
});

Object.assign(window.VARIANTS.pip, {
  theater: {
    id: 'pip', theme: 'theater', name: 'Velvet', role: 'Vorhang-Geist (Wasser & Bewegung)', color: '#e2566a',
    anchor: { top: [50, 22], side: [26, 42], eyes: [41, 59, 56], er: 7 },
    svg: svgWrap(`
      <path d="M22 32 Q50 22 78 32 L82 86 Q76 93 70 86 Q64 93 58 86 Q52 93 46 86 Q40 93 34 86 Q28 93 22 86 Q18 88 18 84Z" fill="#f08593"/>
      <path d="M26 40 Q24 62 27 84 M74 40 Q76 62 73 84 M38 70 Q38 78 40 87 M50 72 L50 88 M62 70 Q62 78 60 87" stroke="#d9606f" stroke-width="2" fill="none" opacity=".55" stroke-linecap="round"/>
      <path d="M18 30 Q50 18 82 30 L82 36 Q76 42 70 36 Q64 42 58 36 Q52 42 46 36 Q40 42 34 36 Q28 42 22 36 L18 36Z" fill="#ffd56b"/>
      <path d="M80 48 q5 6 0 12" stroke="#ffd56b" stroke-width="2.5" fill="none"/>
      <path d="M77.5 60 h5 l-1 7 h-3z" fill="#ffc23d"/>
      <g class="eyes">${EYE(41, 56, 5)}${EYE(59, 56, 5)}</g>
      ${CLOSED(41, 59, 57)}
      <ellipse cx="33" cy="64" rx="4.5" ry="2.5" fill="#ffd0d8" opacity=".9"/>
      <ellipse cx="67" cy="64" rx="4.5" ry="2.5" fill="#ffd0d8" opacity=".9"/>
      <path class="mouth" d="M46 64 Q50 68 54 64" stroke="#3a2b3f" stroke-width="2" fill="none" stroke-linecap="round"/>`),
    prop: `<g class="prop"><g class="book">
      <rect x="34" y="72" width="32" height="21" rx="2" fill="#7a2f4a"/>
      <rect x="36" y="74" width="28" height="17" rx="1.5" fill="none" stroke="#ffd56b" stroke-width="1"/>
      <path d="M45 79 q5 -2 10 0 q0 6 -5 7 q-5 -1 -5 -7z" fill="#ffd56b"/>
      <circle cx="48" cy="81" r=".9" fill="#7a2f4a"/><circle cx="52" cy="81" r=".9" fill="#7a2f4a"/>
      <path d="M48 84 q2 1.2 4 0" stroke="#7a2f4a" stroke-width=".8" fill="none"/>
    </g></g>`,
  },
});

Object.assign(window.VARIANTS.knopf, {
  theater: {
    id: 'knopf', theme: 'theater', name: 'Monokel', role: 'Souffleur (Aufgaben)', color: '#5b6fd0',
    anchor: { top: [50, 16], side: [30, 44], eyes: [41, 59, 50], er: 7.5 },
    svg: svgWrap(`
      <ellipse cx="40" cy="91" rx="6" ry="3.4" fill="#ffa94d"/><ellipse cx="60" cy="91" rx="6" ry="3.4" fill="#ffa94d"/>
      <ellipse cx="21" cy="64" rx="7" ry="14" fill="#4d5fa3" transform="rotate(14 21 64)"/>
      <ellipse cx="79" cy="64" rx="7" ry="14" fill="#4d5fa3" transform="rotate(-14 79 64)"/>
      <ellipse cx="50" cy="62" rx="30" ry="28" fill="#7385da"/>
      <ellipse cx="50" cy="76" rx="17" ry="13" fill="#eef0ff"/>
      <rect x="37" y="15" width="26" height="20" rx="2" fill="#2d2a3a"/>
      <rect x="37" y="28" width="26" height="4" fill="#e04a6e"/>
      <rect x="31" y="34" width="38" height="5" rx="2.5" fill="#2d2a3a"/>
      <g class="eyes">${EYE(41, 50, 5)}${EYE(59, 50, 5)}</g>
      ${CLOSED(41, 59, 51)}
      <circle cx="59" cy="50" r="8" fill="rgba(255,255,255,.18)" stroke="#e8b33a" stroke-width="2"/>
      <path d="M66 54 Q71 64 66 74" stroke="#e8b33a" stroke-width="1.2" fill="none"/>
      <path class="mouth" d="M46.5 56 L53.5 56 L50 61Z" fill="#ffa94d"/>
      <path d="M50 66 L42 61 L42 71Z M50 66 L58 61 L58 71Z" fill="#e04a6e"/>
      <circle cx="50" cy="66" r="2.2" fill="#ff6b8a"/>`),
    prop: `<g class="prop">
      <rect x="28" y="75" width="40" height="18" rx="2" fill="#fffaf0" stroke="#e8dcc0"/>
      <path d="M32 80 h22 M32 84 h26 M32 88 h18" stroke="#c9bfa8" stroke-width="1.2" stroke-linecap="round"/>
      <g class="paw paw-r">
        <path d="M62 72 Q76 58 79 61 Q72 70 65 77Z" fill="#fff" stroke="#ddd" stroke-width=".8"/>
        <path d="M65 77 L61 83" stroke="#3a2b3f" stroke-width="1.6" stroke-linecap="round"/>
      </g>
    </g>`,
  },
});

window.THEMES = { classic: 'Klassisch', gamer: 'Gamer', theater: 'Theater' };

// ================================================================= Themen-Sprüche
window.FLAVOR = {
  gamer: {
    focusStart: (m, t) => `Quest gestartet! [[swords]] ${m} Minuten für:\n„${t}“\nIch hab den Timer im Blick. [[gamepad-2]]`,
    focusDone: (m) => `Level geschafft! [[trophy]] ${m} Min Fokus – +XP!\nZeit für eine Pause am Speicherpunkt. [[save]]`,
    water: ['Mana niedrig! [[droplet]] Ein Schluck Wasser füllt die Leiste wieder auf.', 'HP-Regeneration verfügbar: 1 Glas Wasser = +10 Fokus. [[droplet]]', 'Trank-Zeit! [[sparkle]] Wasser zählt auch als Heiltrank.'],
    move: ['Stretch-Buff verfügbar! [[person-standing]] Arme hoch, Schultern kreisen.', 'Kurz AFK: Charakter einmal durchs Zimmer bewegen! [[footprints]]', 'Nacken-Bug fixen: Kopf langsam links, rechts. [[activity]]'],
    taskDone: (t) => `Quest abgeschlossen: „${t}“! [[trophy]] Loot erhalten!`,
    askTask: 'Was ist deine aktuelle Haupt-Quest? [[map]]\n(Nur eine. Nebenquests dürfen warten.)',
  },
  theater: {
    focusStart: (m, t) => `Vorhang auf! [[drama]] ${m} Minuten Bühne für:\n„${t}“\nIch gebe dir das Stichwort, wenn der Akt vorbei ist.`,
    focusDone: (m) => `Bravo! [[party-popper]][[party-popper]] ${m} Minuten auf der Bühne!\nJetzt: Pause hinter den Kulissen.`,
    water: ['Die Stimme braucht Wasser! [[droplet]] Ein Schluck vor dem nächsten Akt.', 'Selbst die größten Diven trinken Wasser. [[droplet]] Prost!', 'Garderoben-Tipp: Ein Glas Wasser, dann geht\'s weiter. [[droplet]]'],
    move: ['Aufwärmen wie vor der Probe: Schultern lockern, strecken! [[person-standing]]', 'Einmal über die Bühne schreiten – also durchs Zimmer! [[footprints]]', 'Verbeugung üben! Tief runter, langsam hoch. [[person-standing]]'],
    taskDone: (t) => `„${t}“ – die Szene sitzt! [[flower-2]] Rosen auf die Bühne!`,
    askTask: 'Welche Szene spielen wir gerade? [[clapperboard]]\n(Nur eine. Der Rest des Stücks wartet.)',
  },
};

// English lines for the gamer & theater looks
window.FLAVOR_EN = {
  gamer: {
    focusStart: (m, t) => `Quest started! [[swords]] ${m} minutes for:\n“${t}”\nI've got the timer covered. [[gamepad-2]]`,
    focusDone: (m) => `Level cleared! [[trophy]] ${m} min of focus – +XP!\nTime for a break at the save point. [[save]]`,
    water: ['Mana low! [[droplet]] A sip of water refills the bar.', 'HP regen available: 1 glass of water = +10 focus. [[droplet]]', 'Potion time! [[sparkle]] Water counts as a healing potion too.'],
    move: ['Stretch buff available! [[person-standing]] Arms up, roll your shoulders.', 'Quick AFK: walk your character across the room! [[footprints]]', 'Fix the neck bug: head slowly left, then right. [[activity]]'],
    taskDone: (t) => `Quest complete: “${t}”! [[trophy]] Loot acquired!`,
    askTask: 'What is your current main quest? [[map]]\n(Just one. Side quests can wait.)',
  },
  theater: {
    focusStart: (m, t) => `Curtain up! [[drama]] ${m} minutes on stage for:\n“${t}”\nI'll give you your cue when the act is over.`,
    focusDone: (m) => `Bravo! [[party-popper]][[party-popper]] ${m} minutes on stage!\nNow: a break backstage.`,
    water: ['Your voice needs water! [[droplet]] A sip before the next act.', 'Even the greatest divas drink water. [[droplet]] Cheers!', 'Dressing-room tip: a glass of water, then back on. [[droplet]]'],
    move: ['Warm up like before rehearsal: loosen your shoulders, stretch! [[person-standing]]', 'Stride across the stage once – well, across the room! [[footprints]]', 'Practise your bow! Deep down, slowly up. [[person-standing]]'],
    taskDone: (t) => `“${t}” – that scene nailed it! [[flower-2]] Roses on stage!`,
    askTask: 'Which scene are we playing right now? [[clapperboard]]\n(Just one. The rest of the play can wait.)',
  },
};
