import { openStore } from './store.js';

/* ================= Strings ================= */
const STR = {
  te: {
    title: 'కిరాణా జాబితా', settings: 'సెట్టింగ్స్', close: 'మూసివేయి',
    addPlaceholder: 'ఏం కావాలి? ఉదా: 2 కిలోల బియ్యం', add: 'చేర్చు', speak: 'మాట్లాడి చేర్చండి',
    usual: 'ఎప్పుడూ తెచ్చేవి — నొక్కితే చేరుతుంది', toBuy: 'తేవాల్సినవి', bought: 'తెచ్చినవి', clearBought: 'తీసేయి',
    emptyTodo: 'జాబితా ఖాళీ. పైన రాయండి, మాట్లాడండి, లేదా కింద ఉన్నవి నొక్కండి.',
    editItem: 'వస్తువు మార్చండి', item: 'వస్తువు', qty: 'ఎంత', note: 'గమనిక (బ్రాండ్, సైజ్)', delete: 'తొలగించు', save: 'సేవ్ చేయండి',
    yourName: 'మీ పేరు', language: 'భాష', start: 'మొదలుపెట్టండి',
    whoAreYou: 'మీరు ఎవరు?', whoHint: 'జాబితాలో ఎవరు ఏం చేర్చారో ఈ పేరుతో కనిపిస్తుంది.',
    addedBy: n => `${n} చేర్చారు`, boughtBy: n => `${n} తెచ్చారు`,
    live: who => who ? `${who} తో పంచుకుంటున్నారు · లైవ్` : 'పంచుకోవడానికి సిద్ధం · లైవ్',
    liveShared: 'కుటుంబంతో పంచుకున్న జాబితా · లైవ్', offlineSync: 'నెట్ లేదు · నెట్ వచ్చాక పంపుతుంది',
    localOnly: 'ఈ ఫోన్‌లో మాత్రమే', connecting: 'కలుపుతోంది…',
    added: n => `${n} చేర్చబడింది`, already: n => `${n} ఇప్పటికే జాబితాలో ఉంది`, ticked: n => `${n} తెచ్చారు`,
    removed: n => `${n} తొలగించబడింది`, undo: 'వెనక్కి', cleared: 'తెచ్చినవి తీసేశాం',
    listening: 'వింటున్నాను… ఉదా: "2 కిలోల బియ్యం మరియు నూనె"', heard: 'విన్నది',
    noVoice: 'ఈ బ్రౌజర్‌లో మాట వినడం పని చేయదు. Chrome వాడండి.', voiceFail: 'సరిగా వినపడలేదు. మళ్ళీ ప్రయత్నించండి.',
    shareTitle: 'నాన్న ఫోన్‌తో పంచుకోండి',
    shareText: 'ఈ లింక్‌ను WhatsApp లో పంపండి. ఆ ఫోన్‌లో తెరిస్తే, ఇద్దరికీ ఒకే జాబితా కనిపిస్తుంది.',
    shareBtn: 'లింక్ పంపండి', copyBtn: 'లింక్ కాపీ', copied: 'లింక్ కాపీ అయ్యింది',
    shareWarn: 'ఈ లింక్ ఉన్న ఎవరైనా జాబితా చూడగలరు. కుటుంబంలోనే ఉంచండి.',
    listCode: 'జాబితా కోడ్', notSetup: 'ఇద్దరి ఫోన్లలో ఒకే జాబితా కోసం Firebase సెటప్ చేయాలి (README చూడండి). అప్పటివరకు జాబితా ఈ ఫోన్‌లోనే ఉంటుంది.',
    shareMsg: url => `మన కిరాణా జాబితా: ${url}`,
    joined: 'కుటుంబ జాబితాకు చేరారు',
  },
  en: {
    title: 'Kirana list', settings: 'Settings', close: 'Close',
    addPlaceholder: 'What do we need? e.g. 2 kg rice', add: 'Add', speak: 'Add by voice',
    usual: 'Usual items — tap to add', toBuy: 'To buy', bought: 'Bought', clearBought: 'Clear',
    emptyTodo: 'The list is empty. Type above, speak, or tap a usual item.',
    editItem: 'Edit item', item: 'Item', qty: 'How much', note: 'Note (brand, size)', delete: 'Delete', save: 'Save',
    yourName: 'Your name', language: 'Language', start: 'Start',
    whoAreYou: 'Who are you?', whoHint: 'The list shows who added and who bought each item with this name.',
    addedBy: n => `added by ${n}`, boughtBy: n => `bought by ${n}`,
    live: () => 'Shared · live', liveShared: 'Shared with family · live', offlineSync: 'No internet · will sync when back',
    localOnly: 'Only on this phone', connecting: 'Connecting…',
    added: n => `Added ${n}`, already: n => `${n} is already on the list`, ticked: n => `Bought ${n}`,
    removed: n => `Removed ${n}`, undo: 'Undo', cleared: 'Cleared bought items',
    listening: 'Listening… e.g. "2 kg rice and oil"', heard: 'Heard',
    noVoice: 'Voice does not work in this browser. Use Chrome.', voiceFail: 'Could not hear clearly. Try again.',
    shareTitle: "Share with Father's phone",
    shareText: 'Send this link on WhatsApp. Open it on that phone and both of you see the same list.',
    shareBtn: 'Send link', copyBtn: 'Copy link', copied: 'Link copied',
    shareWarn: 'Anyone with this link can see the list. Keep it in the family.',
    listCode: 'List code', notSetup: 'To share one list between two phones, Firebase must be set up once (see README). Until then the list stays on this phone.',
    shareMsg: url => `Our kirana list: ${url}`,
    joined: 'Joined the family list',
  },
};
const ls = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch {} },
};
let lang = ls.get('kirana.lang') || 'te';
const t = (k, ...a) => { const v = STR[lang][k]; return typeof v === 'function' ? v(...a) : v; };

const USUAL = [
  ['బియ్యం', 'Rice'], ['కందిపప్పు', 'Toor dal'], ['పెసరపప్పు', 'Moong dal'], ['మినపప్పు', 'Urad dal'],
  ['నూనె', 'Oil'], ['ఉప్పు', 'Salt'], ['చక్కెర', 'Sugar'], ['టీ పొడి', 'Tea powder'], ['పాలు', 'Milk'],
  ['పసుపు', 'Turmeric'], ['కారం', 'Chilli powder'], ['చింతపండు', 'Tamarind'], ['ఉల్లిపాయలు', 'Onions'],
  ['గోధుమ పిండి', 'Wheat flour'], ['రవ్వ', 'Rava'], ['ఆవాలు', 'Mustard seeds'], ['జీలకర్ర', 'Cumin'],
  ['వెల్లుల్లి', 'Garlic'], ['సబ్బు', 'Soap'], ['సర్ఫ్', 'Detergent'], ['అగ్గిపెట్టె', 'Matchbox'],
];
const QTYS = { te: ['1 కిలో', '2 కిలోలు', '5 కిలోలు', 'అర కిలో', '1 లీటర్', '1 ప్యాకెట్', '2 ప్యాకెట్లు'], en: ['1 kg', '2 kg', '5 kg', '½ kg', '1 litre', '1 packet', '2 packets'] };

/* ================= Helpers ================= */
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const norm = s => (s || '').trim().toLowerCase().replace(/\s+/g, ' ');
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
const icon = id => `<svg class="ic" aria-hidden="true"><use href="#i-${id}"/></svg>`;
const STRIKE = '<svg class="strike" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true"><path d="M1 6 C 20 3, 35 8, 52 5 S 82 3, 99 6"/></svg>';

function toast(msg, action) {
  const el = $('#toast'); $('#toastText').textContent = msg;
  const b = $('#toastBtn');
  if (action) { b.hidden = false; b.innerHTML = `${icon('undo')}${t('undo')}`; b.onclick = () => { el.classList.remove('show'); action(); }; }
  else b.hidden = true;
  el.classList.add('show');
  clearTimeout(toast.h); toast.h = setTimeout(() => el.classList.remove('show'), action ? 5000 : 2200);
}

/* ================= State ================= */
let me = ls.get('kirana.me') || '';
let code = ls.get('kirana.code');
const joinMatch = location.hash.match(/join=([A-Za-z0-9]{16,})/);
let justJoined = false;
if (joinMatch) { code = joinMatch[1]; justJoined = true; history.replaceState(null, '', location.pathname); }
if (!code) code = Array.from(crypto.getRandomValues(new Uint8Array(15)), b => 'abcdefghjkmnpqrstuvwxyz23456789'[b % 31]).join('');
ls.set('kirana.code', code);

let items = [];
let status = 'connecting';
let showDone = false;
let striking = new Set();
let arrived = null;
let ready = false;
const store = await openStore(window.KIRANA_FIREBASE, code, {
  onItems(list) { items = list; if (ready) render(); },
  onStatus(s) { status = s; if (ready) renderSync(); },
});
ready = true;
if (justJoined && store.shared) toast(t('joined'));

/* ================= Render ================= */
function renderStatic() {
  document.documentElement.lang = lang;
  document.title = lang === 'te' ? 'కిరాణా · Kirana' : 'Kirana list';
  document.querySelectorAll('[data-t]').forEach(el => { el.textContent = t(el.dataset.t); });
  $('#addInput').placeholder = t('addPlaceholder');
  document.querySelectorAll('[data-lang]').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === lang));
}
function renderSync() {
  const el = $('#sync');
  el.className = 'sync ' + (store.shared ? (status === 'offline' ? 'offline' : status === 'live' ? 'live' : '') : '');
  $('#syncText').textContent = !store.shared ? t('localOnly') : status === 'offline' ? t('offlineSync') : status === 'live' ? t('liveShared') : t('connecting');
}

function itemRow(it, done) {
  const sub = [it.note, done ? (it.boughtBy && it.boughtBy !== me ? t('boughtBy', it.boughtBy) : '') : (it.addedBy && it.addedBy !== me ? t('addedBy', it.addedBy) : '')].filter(Boolean).join(' · ');
  const cls = [striking.has(it.id) ? 'striking' : '', arrived === it.id ? 'arrived' : ''].join(' ').trim();
  return `<li data-id="${it.id}" class="${cls}">
    <button class="tick" type="button" data-act="${done ? 'untick' : 'tick'}" aria-pressed="${done}" aria-label="${esc(it.name)}"><span>${icon('check')}</span></button>
    <button class="item-main" type="button" data-act="edit"><span class="item-name">${esc(it.name)}${done || striking.has(it.id) ? STRIKE : ''}</span>${sub ? `<span class="item-sub">${esc(sub)}</span>` : ''}</button>
    ${it.qty ? `<span class="qty">${esc(it.qty)}</span>` : ''}
  </li>`;
}

function render() {
  renderStatic(); renderSync();
  const live = items.filter(i => !i.archived);
  const todo = live.filter(i => !i.bought || striking.has(i.id)).sort((a, b) => (b.addedAt || 0) - (a.addedAt || 0));
  const done = live.filter(i => i.bought && !striking.has(i.id)).sort((a, b) => (b.boughtAt || 0) - (a.boughtAt || 0));
  $('#todo').innerHTML = todo.map(i => itemRow(i, false)).join('');
  $('#todo').hidden = !todo.length;
  $('#todoEmpty').hidden = !!todo.length;
  $('#todoCount').textContent = todo.length ? `(${todo.length})` : '';
  $('#boughtSec').hidden = !done.length;
  $('#doneCount').textContent = `(${done.length})`;
  $('#done').innerHTML = done.map(i => itemRow(i, true)).join('');
  $('#done').hidden = !showDone;
  $('#foldBtn').setAttribute('aria-expanded', showDone);

  // usual chips: history by frequency, then the starter set; skip anything already to buy
  const onList = new Set(todo.map(i => norm(i.name)));
  const freq = new Map();
  for (const i of items) { const k = norm(i.name); if (!freq.has(k)) freq.set(k, { name: i.name, n: 0, qty: i.qty }); freq.get(k).n++; }
  const hist = [...freq.values()].sort((a, b) => b.n - a.n);
  const seen = new Set(); const chips = [];
  for (const h of hist) if (!onList.has(norm(h.name)) && !seen.has(norm(h.name))) { seen.add(norm(h.name)); chips.push(h); }
  for (const [te, en] of USUAL) {
    const name = lang === 'te' ? te : en;
    if (seen.has(norm(te)) || seen.has(norm(en)) || onList.has(norm(te)) || onList.has(norm(en))) continue;
    seen.add(norm(name)); chips.push({ name });
  }
  $('#chips').innerHTML = chips.slice(0, 18).map(c => `<button class="chip" type="button" data-name="${esc(c.name)}" data-qty="${esc(c.qty || '')}">${icon('plus')}${esc(c.name)}</button>`).join('');
  arrived = null;
}

/* ================= Actions ================= */
async function addItem(name, qty = '', note = '') {
  name = name.trim(); if (!name) return;
  const existing = items.find(i => !i.archived && !i.bought && norm(i.name) === norm(name));
  if (existing) {
    if (qty && qty !== existing.qty) { await store.update(existing.id, { qty }); }
    toast(t('already', existing.name)); return;
  }
  const it = { id: uid(), name, qty, note, addedBy: me, addedAt: Date.now(), bought: false, archived: false };
  arrived = it.id;
  await store.put(it);
  toast(t('added', name));
}

$('#addForm').addEventListener('submit', e => {
  e.preventDefault();
  const v = $('#addInput').value;
  for (const p of parseItems(v)) addItem(p.name, p.qty);
  $('#addInput').value = ''; $('#heard').textContent = '';
});

$('#chips').addEventListener('click', e => {
  const c = e.target.closest('.chip'); if (!c) return;
  addItem(c.dataset.name, c.dataset.qty);
});

document.querySelector('.paper').addEventListener('click', async e => {
  const b = e.target.closest('[data-act]'); if (!b) return;
  const id = b.closest('li')?.dataset.id; const it = items.find(i => i.id === id);
  if (!it) return;
  if (b.dataset.act === 'tick') {
    striking.add(id);
    await store.update(id, { bought: true, boughtBy: me, boughtAt: Date.now() });
    render();
    setTimeout(() => { striking.delete(id); render(); }, 850);
    toast(t('ticked', it.name), () => store.update(id, { bought: false, boughtBy: '', boughtAt: 0 }));
  }
  if (b.dataset.act === 'untick') { arrived = id; await store.update(id, { bought: false, boughtBy: '', boughtAt: 0, addedAt: Date.now() }); }
  if (b.dataset.act === 'edit') openEdit(it);
});

$('#foldBtn').addEventListener('click', () => { showDone = !showDone; render(); });
$('#clearBtn').addEventListener('click', async () => {
  const done = items.filter(i => i.bought && !i.archived);
  const old = items.filter(i => i.archived && (i.boughtAt || i.addedAt || 0) < Date.now() - 90 * 864e5);
  for (const i of done) await store.update(i.id, { archived: true });
  for (const i of old) await store.remove(i.id);
  toast(t('cleared'), async () => { for (const i of done) await store.update(i.id, { archived: false }); });
});

/* edit */
let editing = null;
const editForm = $('#editForm');
function openEdit(it) {
  editing = it;
  editForm.name.value = it.name; editForm.qty.value = it.qty || ''; editForm.note.value = it.note || '';
  $('#qtyChips').innerHTML = QTYS[lang].map(q => `<button type="button">${q}</button>`).join('');
  $('#editMeta').textContent = [it.addedBy && t('addedBy', it.addedBy), it.bought && it.boughtBy && t('boughtBy', it.boughtBy)].filter(Boolean).join(' · ');
  $('#editSheet').showModal();
}
$('#qtyChips').addEventListener('click', e => { if (e.target.matches('button')) editForm.qty.value = e.target.textContent; });
editForm.addEventListener('submit', async e => {
  e.preventDefault();
  const name = editForm.name.value.trim(); if (!name) return;
  await store.update(editing.id, { name, qty: editForm.qty.value.trim(), note: editForm.note.value.trim() });
  $('#editSheet').close();
});
$('#delBtn').addEventListener('click', async () => {
  const it = editing; $('#editSheet').close();
  await store.remove(it.id);
  toast(t('removed', it.name), () => store.put(it));
});
document.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', () => b.closest('dialog').close()));

/* settings */
function shareURL() { return `${location.origin}${location.pathname}#join=${code}`; }
function renderShare() {
  const box = $('#shareBox');
  if (!store.shared) { box.innerHTML = `<h3>${t('shareTitle')}</h3><p>${t('notSetup')}</p>`; return; }
  box.innerHTML = `<h3>${t('shareTitle')}</h3><p>${t('shareText')}</p>
    <button type="button" class="btn btn--primary btn--wide" id="shareBtn">${icon('share')}${t('shareBtn')}</button>
    <button type="button" class="btn btn--outline btn--wide" id="copyBtn">${t('copyBtn')}</button>
    <p>${t('listCode')}: <span class="code">${code}</span></p><p>${t('shareWarn')}</p>`;
  $('#shareBtn').onclick = async () => {
    const text = t('shareMsg', shareURL());
    if (navigator.share) { try { await navigator.share({ text }); } catch {} }
    else window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  };
  $('#copyBtn').onclick = async () => { try { await navigator.clipboard.writeText(shareURL()); toast(t('copied')); } catch {} };
}
$('#settingsBtn').addEventListener('click', () => { $('#nameInput').value = me; renderShare(); $('#setSheet').showModal(); });
$('#nameInput').addEventListener('change', e => { me = e.target.value.trim() || me; ls.set('kirana.me', me); });
document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => { lang = b.dataset.lang; ls.set('kirana.lang', lang); render(); renderShare(); }));

/* first run */
if (!me) {
  $('#namePicks').innerHTML = ['నాన్న', 'అమ్మ', 'Nanna', 'Amma'].map(n => `<button type="button">${n}</button>`).join('');
  $('#namePicks').onclick = e => { if (e.target.matches('button')) $('#firstName').value = e.target.textContent; };
  $('#nameForm').onsubmit = e => {
    e.preventDefault(); const v = $('#firstName').value.trim(); if (!v) return;
    me = v; ls.set('kirana.me', me); $('#nameSheet').close(); render();
  };
  $('#nameSheet').addEventListener('cancel', e => e.preventDefault());
  renderStatic(); $('#nameSheet').showModal();
}

/* ================= Voice ================= */
const NUM = {
  one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, half: 0.5,
  'ఒక': 1, 'ఒకటి': 1, 'రెండు': 2, 'మూడు': 3, 'నాలుగు': 4, 'ఐదు': 5, 'అయిదు': 5, 'ఆరు': 6, 'ఏడు': 7, 'ఎనిమిది': 8, 'తొమ్మిది': 9, 'పది': 10, 'అర': 0.5, 'ఒకటిన్నర': 1.5,
};
const UNITS = [
  [/^(kg|kgs|kilo|kilos|kilogram|kilograms|కిలో|కిలోలు|కిలోల|కేజీ|కేజీలు)$/, { te: 'కిలో', en: 'kg' }],
  [/^(g|gm|gms|gram|grams|గ్రాములు|గ్రాముల|గ్రాము)$/, { te: 'గ్రాములు', en: 'g' }],
  [/^(l|litre|liter|litres|liters|లీటర్|లీటర్లు|లీటరు|లీటర్ల)$/, { te: 'లీటర్', en: 'litre' }],
  [/^(packet|packets|pack|packs|ప్యాకెట్|ప్యాకెట్లు|ప్యాకెట్ల)$/, { te: 'ప్యాకెట్', en: 'packet' }],
  [/^(dozen|డజన్|డజను)$/, { te: 'డజన్', en: 'dozen' }],
  [/^(bottle|bottles|సీసా|బాటిల్)$/, { te: 'బాటిల్', en: 'bottle' }],
];
const FILL = /^(of|some|please|కొంచెం|తీసుకురా|తేవాలి|కావాలి|తెండి|తీసుకురండి|buy|get|need|add|ఇంకా)$/;
function parseItems(text) {
  return text.split(/\s*(?:,|\band\b|మరియు|ఇంకా|\n)\s*/i).map(parseOne).filter(p => p.name);
}
function parseOne(part) {
  const words = part.trim().split(/\s+/).filter(Boolean);
  let n = null, unit = null; const rest = [];
  for (let w of words) {
    const lw = w.toLowerCase();
    const m = lw.match(/^(\d+(?:\.\d+)?)([a-zఀ-౿]*)$/);
    if (m && n === null) { n = parseFloat(m[1]); if (m[2]) { const u = UNITS.find(([rx]) => rx.test(m[2])); if (u) unit = u[1]; else rest.push(m[2]); } continue; }
    if (n === null && lw in NUM) { n = NUM[lw]; continue; }
    const u = UNITS.find(([rx]) => rx.test(lw)); if (u && !unit) { unit = u[1]; if (n === null) n = 1; continue; }
    if (FILL.test(lw)) continue;
    rest.push(w);
  }
  let qty = '';
  if (n !== null) {
    const num = n === 0.5 ? (lang === 'te' ? 'అర' : '½') : String(n);
    qty = unit ? `${num} ${unit[lang]}` : num;
  }
  let name = rest.join(' ');
  if (name && /^[a-z]/.test(name)) name = name[0].toUpperCase() + name.slice(1);
  return { name, qty };
}
window.__parseItems = parseItems;

const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
let rec = null;
$('#micBtn').addEventListener('click', () => {
  const heard = $('#heard');
  if (!SR) { heard.textContent = t('noVoice'); return; }
  if (rec) { rec.stop(); return; }
  rec = new SR(); rec.lang = lang === 'te' ? 'te-IN' : 'en-IN'; rec.interimResults = true;
  const btn = $('#micBtn'); btn.classList.add('listening'); heard.textContent = t('listening');
  let final = '';
  rec.onresult = ev => {
    let s = ''; for (const r of ev.results) s += r[0].transcript;
    heard.textContent = `${t('heard')}: "${s}"`;
    if (ev.results[ev.results.length - 1].isFinal) final = s;
  };
  rec.onerror = () => { heard.textContent = t('voiceFail'); };
  rec.onend = () => {
    btn.classList.remove('listening'); rec = null;
    if (final) for (const p of parseItems(final)) addItem(p.name, p.qty);
  };
  try { rec.start(); } catch { rec = null; btn.classList.remove('listening'); }
});

render();
if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js');
