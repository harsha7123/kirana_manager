# Kirana · కిరాణా

A shared kirana (grocery) list for the family. Anyone adds what's running out; whoever goes to the shop ticks things off, and the other phone sees it live.

- **Add** by typing ("2 kg rice, oil"), by tapping a usual item, or by voice: *"రెండు కిలోల బియ్యం మరియు ఒక లీటర్ నూనె"* adds two items with quantities.
- **Tick at the shop.** One big tap per item; a pencil line strikes it and it moves to *Bought*. Undo is there for mistakes.
- **Who added / who bought** shows under each item.
- **Usual items.** Things you bought before come back as one-tap chips.
- **Telugu and English**, switchable in Settings.
- **Works with weak network.** Changes are saved on the phone and sync when the internet is back.

## Turn on sharing (one time, about 10 minutes)

Without this, the list works but stays on one phone. Sharing uses Google's free Firebase database.

1. Go to https://console.firebase.google.com → **Add project** → name it `kirana` → you can turn Google Analytics off → **Create**.
2. In the project: **Build → Firestore Database → Create database** → choose a location in India (`asia-south1`) → **Start in production mode**.
3. Open the **Rules** tab, replace everything with the contents of [`firestore.rules`](firestore.rules) and click **Publish**.
4. Go to **Project settings** (gear icon) → **Your apps** → the **`</>` Web** icon → name it `kirana` → **Register app**. Copy the `firebaseConfig` values.
5. In this repo, edit [`config.js`](config.js) and set:
   ```js
   window.KIRANA_FIREBASE = {
     apiKey: "…", authDomain: "…", projectId: "…", appId: "…"
   };
   ```
   Commit. GitHub Pages redeploys in a minute. (A Firebase web key is meant to be public; the rules decide who can read what.)
6. Open the site on your phone → ⚙ Settings → **Send link** → send it to your father on WhatsApp. When he opens it, both phones show the same list. On both phones use Chrome menu ⋮ → **Add to Home screen**.

The list is protected by its long random code, which is only in that link. Anyone with the link can see and change the list, so keep it in the family.

## Publish

GitHub Pages: repo **Settings → Pages → Source: GitHub Actions**, then re-run the "Deploy to GitHub Pages" workflow. The site is then at `https://harsha7123.github.io/kirana_manager/`.

## Run locally

```bash
python3 -m http.server 8000
```

## Files

`index.html`, `styles.css`, `app.js` (app), `store.js` (Firebase or this-phone storage), `config.js` (your Firebase settings), `firestore.rules`, `sw.js` + `manifest.webmanifest` (offline / install), `PRODUCT.md` + `DESIGN.md` (records for the [impeccable](https://github.com/pbakaus/impeccable) design skill in `.claude/skills/impeccable`, Apache 2.0).
