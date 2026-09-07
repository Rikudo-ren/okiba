/* ============================================================
   置き場 OKIBA ── rikudo-ren GAME STORAGE
   全ゲーム、ここに置いてある。
   ============================================================ */
'use strict';

/* ------------------------------------------------------------
   データ
   ------------------------------------------------------------ */
const GENRES = {
  fight:  { ja: '格闘',       en: 'FIGHT'   },
  flight: { ja: 'フライト',   en: 'FLIGHT'  },
  novel:  { ja: 'ノベル',     en: 'NOVEL'   },
  mind:   { ja: '数字・頭脳', en: 'MIND'     },
  rpg:    { ja: 'RPG',        en: 'RPG'     },
  action: { ja: 'アクション', en: 'ACTION'  },
};

/* 新しいゲームを Vercel にデプロイしたら、ここに1行足すだけ。 */
const GAMES = [
  {
    id: 'shigaisen',
    title: 'KAWAGUCHI AIRSPACE',
    subtitle: '川口フライトシミュレーター',
    desc: '埼玉・川口の上空を飛ぶ3Dフライトシム。機銃と核ミサイルを積んだ戦闘機で荒川沿いを低空飛行。川口市立高校のキャンパス探索モードも搭載、最高速度3,000km/h。',
    genre: 'flight',
    url: 'https://shigaisen-green.vercel.app',
    repo: 'https://github.com/Rikudo-ren/shigaisen',
    date: '2026-09-05',
    color: '#38bdf8',
    badge: '3D FLIGHT',
    img: 'shigaisen.jpg',
  },
  {
    id: 'honkaku',
    title: '✝本質✝ FIGHTERS',
    subtitle: '偏差値60の教室から✝本質✝が漏れ出している件について',
    desc: 'ドット絵カオス格闘ゲーム。桐葉高校・理数科B組の日常に殴り込む。1P対CPU、2P対戦、チーム乱戦、オンライン対戦、そして自己対話モード（CPU対CPU）まで搭載。',
    genre: 'fight',
    url: 'https://honkaku-online.vercel.app',
    repo: 'https://github.com/Rikudo-ren/honkaku',
    date: '2026-09-07',
    color: '#ff2d55',
    img: 'honkaku.jpg',
  },
  {
    id: 'novel',
    title: '桐葉祭の✝本質✝',
    subtitle: '――教室に棲む記号の話――',
    desc: '原作「偏差値60の教室から✝本質✝が漏れ出ている件について」の番外編・文化祭特別ノベル。チャプター選択・おまけを備えたフルノベルゲーム。',
    genre: 'novel',
    url: 'https://novel-game-plum.vercel.app',
    repo: 'https://github.com/Rikudo-ren/novel_game',
    date: '2026-09-07',
    color: '#a78bfa',
    img: 'novel.jpg',
  },
  {
    id: 'make10',
    title: 'メイク10バトル',
    subtitle: 'REALTIME PUZZLE BATTLE',
    desc: '出された数字を四則演算で組み合わせて「10」を作れ。友だちと同じ問題に同時挑戦する早解きリアルタイム対戦。出題は必ず解あり・通信ラグ補正付き。',
    genre: 'mind',
    url: 'https://make10-sigma.vercel.app',
    repo: 'https://github.com/Rikudo-ren/make10',
    date: '2026-09-03',
    color: '#ffd60a',
    img: 'make10.jpg',
  },
  {
    id: 'liar',
    title: '嘘つき村RPG',
    subtitle: '深夜のブラウザゲーム',
    desc: '―― NO SIGNAL ―― まず、パソコンの電源を入れよう（モニタ右下のボタン）。深夜にだけ漂う、ちょっと不穏な村のRPG。',
    genre: 'rpg',
    url: 'https://liar-one.vercel.app',
    repo: 'https://github.com/Rikudo-ren/liar',
    date: '2026-08-24',
    color: '#c84bff',
    img: 'liar.jpg',
  },
  {
    id: 'idle',
    title: '無限転生 ETERNAL REBIRTH',
    subtitle: '強くてニューゲーム放置録',
    desc: 'あなたは既に、この世界を何万回も焼き尽くしている。転生とウルトラ転生を重ね、創世核を得て最初から。オフライン中も魂力は蓄積する本格放置ゲー。',
    genre: 'rpg',
    url: 'https://idle-lac.vercel.app',
    repo: 'https://github.com/Rikudo-ren/idle',
    date: '2026-08-23',
    color: '#ffb703',
    img: 'idle.jpg',
  },
  {
    id: 'suusoku',
    title: '数速バトル',
    subtitle: 'NUMERIC VELOCITY',
    desc: '瞬時の暗算力を競う計算バトル。加減算・乗除算・素因数分解、制限時間3分のタイムアタック。難易度倍率を乗せてスコアを稼げ。',
    genre: 'mind',
    url: 'https://suusokubattle.vercel.app',
    repo: 'https://github.com/Rikudo-ren/suusoku_updated',
    date: '2026-09-02',
    color: '#00e676',
    badge: 'LATEST',
    img: 'suusoku.jpg',
  },
  {
    id: 'hayauchi',
    title: '早撃ちパニック 4K+',
    subtitle: 'EXTREME SPEED ACTION',
    desc: '3K〜6K対応のレーン式高速シューティング。50枚のターゲットを最速で撃ち抜くTIME ATTACKと、10秒間で何枚落とせるかのリミットチャレンジ。',
    genre: 'action',
    url: 'https://hayauchi-theta.vercel.app',
    repo: 'https://github.com/Rikudo-ren/hayauchi',
    date: '2026-06-30',
    color: '#ff5e3a',
    img: 'hayauchi.jpg',
  },
  {
    id: 'decibeat',
    title: 'DECIO BEAT',
    subtitle: 'DECISECOND BEAT ── 10秒音ゲー',
    desc: '10秒だけに全てを懸けるミニ音ゲー。3K〜6K、ノーツスキンと打鍵音を選択でき、AUTO PLAY によるリプレイ撮影にも対応。',
    genre: 'action',
    url: 'https://10s-ten.vercel.app',
    repo: 'https://github.com/Rikudo-ren/10s',
    date: '2026-06-30',
    color: '#00e5ff',
    img: 'decibeat.jpg',
  },
  {
    id: 'waribashi',
    title: '割り箸',
    subtitle: 'ゆびあそび・ハシケン',
    desc: '日本の伝統的な指あそび「割り箸」をブラウザで。ぴったり5でアウト／5以上でアウトの2モード。たぬきCPUとの対戦、わけなおしによる復活もあり。',
    genre: 'action',
    url: 'https://waribashi.vercel.app',
    repo: 'https://github.com/Rikudo-ren/waribashi',
    date: '2026-08-19',
    color: '#e0a458',
    img: 'waribashi.jpg',
  },
  {
    id: 'prime',
    title: '数感覚ジェネレーター',
    subtitle: 'MATH PROBLEM GENERATOR',
    desc: '四則演算・メイク10・平方根の簡略化・素因数分解・多次方程式まで、授業でそのまま使える問題を即座に生成する出題ツール。スコアボード付き。',
    genre: 'mind',
    url: 'https://prime-five-beta.vercel.app',
    repo: 'https://github.com/Rikudo-ren/prime',
    date: '2026-08-29',
    color: '#b8f135',
    badge: 'TOOL',
    glyph: '数',
    code: 'PRIME',
  },
  {
    id: 'sakura',
    title: 'シュレディンガーの恋',
    subtitle: '―― 観測されなかった波動関数 ――',
    desc: '桐葉高校・本質恋愛学研究センター（LAB-001）が贈る恋愛ノベル。Google AI Studio（Gemini）で組まれた、観測されたら壊れてしまう恋の物語。',
    genre: 'novel',
    url: 'https://sakura-khaki-sigma.vercel.app',
    repo: 'https://github.com/Rikudo-ren/sakura',
    date: '2026-06-14',
    color: '#ff8fd4',
    badge: 'AI NOVEL',
    glyph: '恋',
    code: 'SAKURA',
  },
  {
    id: 'sekkaron',
    title: '截花論',
    subtitle: 'せっかろん ―― 短篇',
    desc: '「夕方の光が届く時刻に、わたしはきまって鋏を取り出す。」夕景と鋏の音だけが静かに響く、読み切り短篇小説。',
    genre: 'novel',
    url: 'https://sekkaron-64lz.vercel.app',
    repo: 'https://github.com/Rikudo-ren/sekkaron',
    date: '2026-09-02',
    color: '#e89bb3',
    badge: 'SHORT',
    glyph: '花',
    code: 'SEKKA',
  },
  {
    id: 'honkaku2',
    title: '✝本質✝ FIGHTERS 2',
    subtitle: '続篇デプロイ ── 偏差値60の教室から',
    desc: 'カオス格闘「✝本質✝FIGHTERS」の続篇環境。チーム戦（乱戦）モードを追加し、さらに大きな✝本質✝が漏れ出している。',
    genre: 'fight',
    url: 'https://honkaku2.vercel.app',
    repo: 'https://github.com/Rikudo-ren/honkaku2',
    date: '2026-09-04',
    color: '#ff7a1a',
    badge: 'SEQ.02',
    glyph: '✝',
    code: 'HK-02',
  },
  {
    id: 'suusokure',
    title: '数速バトル RE',
    subtitle: 'NUMERIC VELOCITY ── REBUILD',
    desc: '数速バトルのリビルド環境。PILOT: APEX-4074。現行版との違いを確かめたいパイロットはこちらへ。',
    genre: 'mind',
    url: 'https://suusokure.vercel.app',
    repo: 'https://github.com/Rikudo-ren/suusoku_re',
    date: '2026-08-30',
    color: '#4dd6ff',
    badge: 'REBUILD',
    glyph: '速',
    code: 'SUU-RE',
  },
  {
    id: 'mathbattle',
    title: '数速バトル（旧環境）',
    subtitle: 'math_battle ── ARCHIVE',
    desc: '数速バトルのアーカイブ環境。現行版との挙動の差分を眺めるのが楽しい、残しておくタイプの置き場。',
    genre: 'mind',
    url: 'https://math-battle-snowy.vercel.app',
    repo: 'https://github.com/Rikudo-ren/math_battle',
    date: '2026-08-27',
    color: '#6c8bff',
    badge: 'ARCHIVE',
    glyph: '数',
    code: 'M-BTL',
  },
  {
    id: 'honkakucopy',
    title: '✝本質✝ FIGHTERS（別環境）',
    subtitle: 'ALT DEPLOY',
    desc: '✝本質✝FIGHTERSのもうひとつのデプロイ。同じ本質が、別の場所にも置いてある。',
    genre: 'fight',
    url: 'https://honkaku-copy.vercel.app',
    repo: 'https://github.com/Rikudo-ren/honkaku-copy',
    date: '2026-09-05',
    color: '#9aa7c7',
    badge: 'ALT',
    glyph: '✝',
    code: 'HK-CPY',
  },
];

/* ------------------------------------------------------------
   ユーティリティ
   ------------------------------------------------------------ */
const $  = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[c]));
const hostOf = (urlStr) => { try { return new URL(urlStr).host; } catch { return urlStr; } };
const fmtDate = (d) => 'UP ' + d.replaceAll('-', '.');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const mq = (q) => { try { return !!window.matchMedia && window.matchMedia(q).matches; } catch { return false; } };
const REDUCED = mq('(prefers-reduced-motion: reduce)');
const isTypingTarget = (t) =>
  !!(t && typeof t.matches === 'function' && t.matches('input, textarea, [contenteditable="true"], [contenteditable=""]'));

/* ------------------------------------------------------------
   サウンド（Web Audio / 8bit シンセ）
   ------------------------------------------------------------ */
const Snd = {
  ctx: null,
  on: localStorage.getItem('okiba_snd') !== '0',

  ensure() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) this.ctx = new AC();
    }
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
    return !!this.ctx;
  },

  tone(freq, dur = .05, gain = .05, type = 'square', when = 0) {
    if (!this.on || !this.ensure()) return;
    const t = this.ctx.currentTime + when;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(.0001, t + dur);
    osc.connect(g).connect(this.ctx.destination);
    osc.start(t);
    osc.stop(t + dur + .02);
  },

  blip()  { this.tone(1320, .04, .035); },
  select(){ this.tone(660, .05, .04); this.tone(990, .06, .035, 'square', .05); },

  coin() {  // アーケードのコイン音
    this.tone(987.77, .09, .06);
    this.tone(1318.51, .34, .05, 'square', .09);
  },

  fanfare() {
    [523.25, 659.25, 783.99, 1046.5].forEach((f, i) =>
      this.tone(f, .12, .05, 'square', i * .09));
  },

  setOn(v) {
    this.on = v;
    localStorage.setItem('okiba_snd', v ? '1' : '0');
    const btn = $('#sndBtn');
    btn.textContent = v ? 'SND:ON' : 'SND:OFF';
    btn.setAttribute('aria-pressed', String(v));
  },
};

/* ------------------------------------------------------------
   トースト
   ------------------------------------------------------------ */
let toastTimer = null;
function toast(msg, ms = 3200) {
  const el = $('#toast');
  el.innerHTML = msg;
  el.hidden = false;
  requestAnimationFrame(() => el.classList.add('show'));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    el.classList.remove('show');
    setTimeout(() => { el.hidden = true; }, 350);
  }, ms);
}

/* リポジトリ最終 push 時刻（新着順ソート用） */
const PUSHED_AT = {
  shigaisen:   '2026-09-05T04:13:53Z',
  honkaku:     '2026-09-07T20:51:34Z',
  novel:       '2026-09-07T10:45:40Z',
  make10:      '2026-09-03T21:03:24Z',
  liar:        '2026-08-24T11:27:12Z',
  idle:        '2026-08-23T10:08:10Z',
  suusoku:     '2026-09-02T01:04:39Z',
  hayauchi:    '2026-06-30T17:16:07Z',
  decibeat:    '2026-06-30T09:00:10Z',
  waribashi:   '2026-08-19T19:01:10Z',
  prime:       '2026-08-29T02:25:14Z',
  sakura:      '2026-06-14T11:54:23Z',
  sekkaron:    '2026-09-02T16:57:21Z',
  honkaku2:    '2026-09-04T15:45:36Z',
  suusokure:   '2026-08-30T14:10:33Z',
  mathbattle:  '2026-08-27T04:29:41Z',
  honkakucopy: '2026-09-05T11:26:18Z',
};
const tsOf = (g) => g.ts || PUSHED_AT[g.id] || g.date;

/* ------------------------------------------------------------
   カード描画 & フィルタ
   ------------------------------------------------------------ */
const state = { genre: 'all', q: '', sort: 'curated' };

function searchKeyOf(g) {
  return [g.title, g.subtitle, g.desc, GENRES[g.genre].ja, GENRES[g.genre].en,
          hostOf(g.url), g.badge || '', g.id].join(' ').toLowerCase();
}

function visibleGames() {
  let list = GAMES.filter((g) => state.genre === 'all' || g.genre === state.genre);
  if (state.q) {
    const q = state.q.toLowerCase();
    list = list.filter((g) => searchKeyOf(g).includes(q));
  }
  if (state.sort === 'new') {
    list = [...list].sort((a, b) => {
      const ta = tsOf(a), tb = tsOf(b);
      return ta < tb ? 1 : ta > tb ? -1 : 0; // 同着は元の順（安定ソート）
    });
  }
  return list;
}

function cardHTML(g, i) {
  const no = String(GAMES.indexOf(g) + 1).padStart(2, '0');
  const gen = GENRES[g.genre];
  const media = g.img
    ? `<img src="assets/img/${g.img}" alt="${esc(g.title)} キービジュアル" width="960" height="540" loading="lazy" decoding="async">`
    : `<div class="glyph-art" data-glyph="${esc(g.glyph || '◆')}" data-code="${esc(g.code || g.id.toUpperCase())}" aria-hidden="true"></div>`;
  const badge = g.badge ? `<span class="card-badge">${esc(g.badge)}</span>` : '';

  return `
  <article class="card" style="--ac:${g.color}; animation-delay:${Math.min(i * 45, 500)}ms">
    <div class="card-media">
      ${media}
      <span class="card-no" aria-hidden="true">${no}</span>
      ${badge}
    </div>
    <div class="card-body">
      <div class="card-tags">
        <span class="tag">${gen.ja}</span>
        <span class="tag-en">${gen.en}</span>
      </div>
      <h3 class="card-title"><a class="title-link" href="${g.url}" target="_blank" rel="noopener">${esc(g.title)}</a></h3>
      <p class="card-subtitle">${esc(g.subtitle)}</p>
      <p class="card-desc">${esc(g.desc)}</p>
      <div class="card-meta">
        <span class="host">${hostOf(g.url)}</span>
        <span class="date">${fmtDate(g.date)}</span>
      </div>
      <div class="card-foot">
        <a class="play" href="${g.url}" target="_blank" rel="noopener">▶ PLAY</a>
        <a class="repo" href="${g.repo}" target="_blank" rel="noopener" title="GitHub リポジトリ" aria-label="${esc(g.title)} のGitHubリポジトリ">GH</a>
      </div>
    </div>
  </article>`;
}

const SLOT_HTML = `
  <a class="slot" href="https://github.com/Rikudo-ren?tab=repositories" target="_blank" rel="noopener" style="animation-delay:520ms">
    <span class="slot-plus">＋</span>
    <p><b>SLOT 18 ─ 空き枠</b><br>NEXT GAME IN PROGRESS…<br>制作状況は GitHub をチェック</p>
  </a>`;

function renderChips() {
  const counts = { all: GAMES.length };
  for (const g of GAMES) counts[g.genre] = (counts[g.genre] || 0) + 1;
  const chip = (key, label) =>
    `<button class="chip${state.genre === key ? ' on' : ''}" data-genre="${key}" type="button" aria-pressed="${state.genre === key}">${label}<b>${counts[key] ?? 0}</b></button>`;
  $('#chips').innerHTML =
    chip('all', 'ALL') +
    Object.entries(GENRES).map(([k, v]) => chip(k, v.ja)).join('');
}

function renderGrid() {
  const list = visibleGames();
  const showSlot = state.genre === 'all' && !state.q && state.sort === 'curated';
  $('#grid').innerHTML = list.map(cardHTML).join('') + (showSlot && list.length ? SLOT_HTML : '');
  $('#empty').hidden = list.length > 0;
}

/* --- チップ操作（イベント委譲） --- */
$('#chips').addEventListener('click', (e) => {
  const btn = e.target.closest('.chip');
  if (!btn) return;
  state.genre = btn.dataset.genre;
  Snd.select();
  renderChips();
  renderGrid();
});

$('#chips').addEventListener('pointerenter', (e) => {
  if (e.target.closest('.chip')) Snd.blip();
}, true);

/* --- 検索 --- */
let searchTimer = null;
$('#searchInput').addEventListener('input', (e) => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => { state.q = e.target.value.trim(); renderGrid(); }, 120);
});

/* --- 並び順 --- */
$('#sortBtn').addEventListener('click', () => {
  state.sort = state.sort === 'curated' ? 'new' : 'curated';
  $('#sortBtn').textContent = state.sort === 'new' ? '並び:新着' : '並び:お薦め';
  Snd.select();
  renderGrid();
});

/* --- ランダム起動 --- */
$('#randomBtn').addEventListener('click', () => {
  const g = GAMES[Math.floor(Math.random() * GAMES.length)];
  Snd.coin();
  toast(`⟳ ランダム起動 ── <b style="color:${g.color}">${esc(g.title)}</b> を開く`, 2200);
  window.open(g.url, '_blank', 'noopener');
});

/* ------------------------------------------------------------
   カードの 3D チルト
   ------------------------------------------------------------ */
if (matchMedia('(hover: hover) and (pointer: fine)').matches && !REDUCED) {
  const grid = $('#grid');
  grid.addEventListener('pointermove', (e) => {
    const card = e.target.closest('.card');
    if (!card) return;
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width  - .5;
    const py = (e.clientY - r.top)  / r.height - .5;
    card.style.setProperty('--ry', `${px * 5}deg`);
    card.style.setProperty('--rx', `${-py * 5}deg`);
  });
  grid.addEventListener('pointerout', (e) => {
    const card = e.target.closest('.card');
    if (card && !card.contains(e.relatedTarget)) {
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    }
  });
}

/* PLAY クリック音 */
$('#grid').addEventListener('click', (e) => {
  if (e.target.closest('.play')) Snd.blip();
});
$('#grid').addEventListener('pointerenter', (e) => {
  if (e.target.closest('.play')) Snd.blip();
}, true);

/* ------------------------------------------------------------
   サウンド切替
   ------------------------------------------------------------ */
$('#sndBtn').addEventListener('click', () => {
  Snd.setOn(!Snd.on);
  if (Snd.on) Snd.select();
});
Snd.setOn(Snd.on); // ボタン表記を同期

document.addEventListener('keydown', (e) => {
  if (isTypingTarget(e.target)) return;
  if (e.key === 'm' || e.key === 'M') {
    Snd.setOn(!Snd.on);
    if (Snd.on) Snd.select();
  }
});

/* ------------------------------------------------------------
   ✝本質✝モード（コナミコマンド）
   ------------------------------------------------------------ */
const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
                'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIdx = 0;
let honessOn = false;
let crossTimer = null;

function spawnCross() {
  const el = document.createElement('span');
  el.className = 'honess-cross';
  el.textContent = '✝';
  el.style.left = Math.random() * 96 + 2 + 'vw';
  el.style.bottom = '-40px';
  el.style.fontSize = 14 + Math.random() * 30 + 'px';
  el.style.color = ['#ff2d55', '#59e3ff', '#ffd60a', '#ff8fd4'][Math.floor(Math.random() * 4)];
  el.style.setProperty('--rot', (Math.random() * 120 - 60) + 'deg');
  el.style.setProperty('--dur', (5 + Math.random() * 4) + 's');
  $('#honEssFx').appendChild(el);
  setTimeout(() => el.remove(), 9500);
}

function toggleHoness() {
  honessOn = !honessOn;
  document.body.classList.toggle('honess', honessOn);
  clearInterval(crossTimer);
  if (honessOn) {
    Snd.fanfare();
    toast('✝本質✝モード ON ── 本質を追えば追うほど、本質は遠くなる。');
    crossTimer = setInterval(spawnCross, 260);
    for (let i = 0; i < 8; i++) setTimeout(spawnCross, i * 90);
  } else {
    Snd.select();
    toast('✝本質✝モード OFF ── 説明できたら✝本質✝じゃない。');
  }
}

document.addEventListener('keydown', (e) => {
  if (isTypingTarget(e.target)) return;
  const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
  konamiIdx = (key === KONAMI[konamiIdx]) ? konamiIdx + 1 : (key === KONAMI[0] ? 1 : 0);
  if (konamiIdx === KONAMI.length) { konamiIdx = 0; toggleHoness(); }
});

/* ------------------------------------------------------------
   起動画面（BIOS）
   ------------------------------------------------------------ */
const BOOT_LINES = [
  'OKIBA SYSTEM BIOS  v2.06.14',
  '(C) 2026 RIKUDO-REN ── GAME STORAGE UNIT',
  '',
  'CHECKING VERCEL DEPLOYS ......... 17 FOUND',
  'MOUNTING /games ................. OK',
  'AUDIO SYNTH ..................... STANDBY',
  '✝本質✝ MODULE .................... UNDEFINED (仕様)',
  '',
  'READY.',
];

let booted = false;

function enterSite() {
  if (booted) return;
  booted = true;
  Snd.coin();
  const boot = $('#boot');
  boot.classList.add('off');
  document.body.classList.add('booted');
  setTimeout(() => boot.remove(), 700);
}

async function runBoot() {
  const boot = $('#boot');
  const log = $('#bootLog');
  const start = $('#bootStart');

  if (REDUCED) {
    log.textContent = BOOT_LINES.join('\n');
    start.hidden = false;
    setTimeout(enterSite, 900);
    return;
  }

  let skip = false;
  boot.addEventListener('pointerdown', () => { skip = true; }, { once: true });

  for (const line of BOOT_LINES) {
    if (skip || booted) break;
    for (const ch of line) {
      if (skip || booted) break;
      log.textContent += ch;
      await sleep(ch === '.' ? 14 : 9);
    }
    log.textContent += '\n';
    await sleep(60);
  }
  if (!booted) {
    log.textContent = BOOT_LINES.join('\n');
    start.hidden = false;
  }
}

['pointerdown', 'keydown', 'touchstart'].forEach((ev) =>
  document.addEventListener(ev, (e) => {
    if (booted) return;
    // 入力欄への入力中は無視
    if (ev === 'keydown' && isTypingTarget(e.target)) return;
    enterSite();
  }));

runBoot();

/* ------------------------------------------------------------
   背景 Canvas（星野 + グリッドフロア + 流れ星）
   ------------------------------------------------------------ */
(function backgroundFX() {
  const canvas = $('#fx');
  const ctx = canvas && canvas.getContext && canvas.getContext('2d');
  if (!ctx || typeof requestAnimationFrame !== 'function') return;
  let W = 0, H = 0, DPR = 1;
  let stars = [];
  let shooting = null;
  let nextShoot = performance.now() + 3500;

  function resize() {
    DPR = Math.min(devicePixelRatio || 1, 2);
    W = innerWidth; H = innerHeight;
    canvas.width = W * DPR; canvas.height = H * DPR;
    canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    const n = Math.min(170, Math.floor(W * H / 9000));
    stars = Array.from({ length: n }, () => ({
      x: Math.random() * W,
      y: Math.random() * H * .82,
      z: .25 + Math.random() * .75,
      tw: Math.random() * Math.PI * 2,
    }));
  }

  function horizonY() { return H * .8; }

  function drawStars(t) {
    for (const s of stars) {
      s.y += s.z * .12;
      if (s.y > horizonY() - 4) { s.y = -4; s.x = Math.random() * W; }
      const a = .25 + .45 * s.z * (0.6 + 0.4 * Math.sin(t / 900 + s.tw));
      ctx.fillStyle = `rgba(200, 235, 255, ${a.toFixed(3)})`;
      const size = s.z > .8 ? 2 : 1;
      ctx.fillRect(s.x, s.y, size, size);
    }
  }

  function drawGrid(t) {
    const hy = horizonY();
    const depth = H * .5;

    // 縦線（消失点へ収束）
    ctx.strokeStyle = 'rgba(89, 227, 255, .07)';
    ctx.lineWidth = 1;
    const cx = W / 2;
    for (let i = -14; i <= 14; i++) {
      const spread = i * (W / 12);
      ctx.beginPath();
      ctx.moveTo(cx + spread * .06, hy);
      ctx.lineTo(cx + spread, H + 40);
      ctx.stroke();
    }

    // 横線（手前に流れる）
    const speed = (t / 40) % 1;
    for (let i = 0; i < 14; i++) {
      const p = (i + speed) / 14;
      const y = hy + p * p * depth * 1.35;
      if (y > H + 40) continue;
      const a = .02 + p * .12;
      ctx.strokeStyle = `rgba(89, 227, 255, ${a.toFixed(3)})`;
      ctx.beginPath();
      ctx.moveTo(0, y); ctx.lineTo(W, y);
      ctx.stroke();
    }

    // 地平線のグロー
    const grad = ctx.createLinearGradient(0, hy - 30, 0, hy + 2);
    grad.addColorStop(0, 'rgba(89, 227, 255, 0)');
    grad.addColorStop(1, 'rgba(89, 227, 255, .12)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, hy - 30, W, 32);
    ctx.fillStyle = 'rgba(140, 240, 255, .35)';
    ctx.fillRect(0, hy, W, 1);
  }

  function drawShooting(t) {
    if (!shooting && t > nextShoot) {
      shooting = {
        x: W * (.15 + Math.random() * .7),
        y: H * Math.random() * .3,
        vx: -(4 + Math.random() * 4),
        vy: 2 + Math.random() * 1.6,
        life: 1,
      };
      nextShoot = t + 4000 + Math.random() * 7000;
    }
    if (shooting) {
      shooting.x += shooting.vx * 2;
      shooting.y += shooting.vy * 2;
      shooting.life -= .016;
      if (shooting.life <= 0) shooting = null;
      else {
        const g = ctx.createLinearGradient(
          shooting.x, shooting.y,
          shooting.x - shooting.vx * 16, shooting.y - shooting.vy * 16);
        g.addColorStop(0, `rgba(255, 255, 255, ${(.8 * shooting.life).toFixed(2)})`);
        g.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.strokeStyle = g;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(shooting.x, shooting.y);
        ctx.lineTo(shooting.x - shooting.vx * 16, shooting.y - shooting.vy * 16);
        ctx.stroke();
      }
    }
  }

  function frame(t) {
    ctx.clearRect(0, 0, W, H);
    drawStars(t);
    drawGrid(t);
    drawShooting(t);
    if (!REDUCED) requestAnimationFrame(frame);
  }

  addEventListener('resize', resize, { passive: true });
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && !REDUCED) requestAnimationFrame(frame);
  });

  resize();
  requestAnimationFrame(frame);
})();

/* ------------------------------------------------------------
   初期描画
   ------------------------------------------------------------ */
renderChips();
renderGrid();
