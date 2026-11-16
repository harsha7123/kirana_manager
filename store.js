// Storage: Firebase Firestore when configured (shared, live, offline-capable),
// otherwise this phone's localStorage.
const FB = 'https://www.gstatic.com/firebasejs/10.12.2/';

export async function openStore(config, code, { onItems, onStatus }) {
  if (config && config.apiKey && config.projectId) {
    try { return await firebaseStore(config, code, onItems, onStatus); }
    catch (err) { console.error('Firebase failed, using this phone only', err); }
  }
  return localStore(onItems, onStatus);
}

function localStore(onItems, onStatus) {
  const KEY = 'kirana.items';
  const read = () => { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch { return []; } };
  const write = list => { try { localStorage.setItem(KEY, JSON.stringify(list)); } catch {} onItems(list); };
  queueMicrotask(() => { onStatus('local'); onItems(read()); });
  window.addEventListener('storage', e => { if (e.key === KEY) onItems(read()); });
  return {
    shared: false,
    async put(item) { write(read().filter(i => i.id !== item.id).concat(item)); },
    async update(id, patch) { write(read().map(i => i.id === id ? { ...i, ...patch } : i)); },
    async remove(id) { write(read().filter(i => i.id !== id)); },
  };
}

async function firebaseStore(config, code, onItems, onStatus) {
  const [{ initializeApp }, fs] = await Promise.all([
    import(FB + 'firebase-app.js'),
    import(FB + 'firebase-firestore.js'),
  ]);
  const app = initializeApp(config);
  let db;
  try { db = fs.initializeFirestore(app, { localCache: fs.persistentLocalCache({ tabManager: fs.persistentMultipleTabManager() }) }); }
  catch { db = fs.getFirestore(app); }
  const col = fs.collection(db, 'lists', code, 'items');
  onStatus('connecting');
  const setNet = () => onStatus(navigator.onLine ? 'live' : 'offline');
  window.addEventListener('online', setNet); window.addEventListener('offline', setNet);
  fs.onSnapshot(col, { includeMetadataChanges: true }, snap => {
    onItems(snap.docs.map(d => ({ ...d.data(), id: d.id })));
    onStatus(!navigator.onLine ? 'offline' : snap.metadata.fromCache ? 'connecting' : 'live');
  }, err => { console.error(err); onStatus('offline'); });
  // writes resolve when the server confirms; don't wait, the local cache updates instantly
  const soft = p => { p.catch(e => console.error(e)); };
  return {
    shared: true,
    async put(item) { const { id, ...data } = item; soft(fs.setDoc(fs.doc(col, id), data)); },
    async update(id, patch) { soft(fs.updateDoc(fs.doc(col, id), patch)); },
    async remove(id) { soft(fs.deleteDoc(fs.doc(col, id))); },
  };
}
