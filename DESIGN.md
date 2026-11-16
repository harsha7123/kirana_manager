# Design: Kirana list

A brown kraft-paper parcel tied with twine, the way the kirana shop wraps things. Operate mode: one working screen with standard controls; the world lends palette, type and one signature move.

## Colour (tokens in `styles.css :root`)

| Token | Value | Job |
|---|---|---|
| `--kraft` | #C8A27A | Header band (with a faint paper-fibre speckle), theme colour |
| `--kraft-deep` / `--kraft-soft` | #B18657 / #EAD8C0 | Tick circle ring, quantity tag, pressed chips |
| `--twine` | #7A4E26 | Dashed twine line under the header, text links |
| `--coffee` | #3B2414 | Primary buttons, title, selected states |
| `--ink` / `--ink-2` | #2A180C / #6A4E3A | Text / secondary text |
| `--paper` | #FFFBF3 | List sheet, inputs, chips |
| `--ground` | #F2E8D9 | Page background |
| `--leaf` | #4E6A28 | Bought (tamarind-leaf green) tick, live-sync dot |
| `--danger` | #A0301F | Delete, offline dot |

Brown and kraft were set by the owner. Bought is shown by tick, strike-through and moving to the Bought pile, not colour alone.

## Type

Baloo Tammudu 2 (Google Fonts, 400–700) for Telugu and Latin. Body 19px.

## Signature move

Ticking an item draws a hand-pencil strike through its name (SVG path, `@keyframes draw`), then the row drops into the folded Bought pile. Bought items keep the strike.

## Components

Sticky kraft header: title, live/offline/this-phone status, add row (text field, mic, Add). Usual-item chips (history by frequency, then a Telugu/English starter set). One paper list with 56px tick buttons and quantity tags. Bottom sheets for edit and settings. Toast with Undo for tick, delete and clear.
