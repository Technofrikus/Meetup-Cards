# Meetup Cards

Printable spec cards for mechanical keyboards:

- **4x**: four cards per sheet (portrait)
- **8x**: eight cards per sheet (landscape – the print dialog switches automatically)

## Usage

Open `index.html` in a browser – from a web server or by double-clicking the file.

1. Enter your keyboards in the editor on the left. The cards on the right update while you type.
   - **Form**: one block of fields per keyboard. Press Enter inside a field for a line break.
   - **Text**: the same list as plain `Field: value` lines, handy for pasting many keyboards at once.
2. Pick the paper (**A4 / Letter**, preselected from the browser language) and the cards per sheet (**4x / 8x**) in the toolbar.
3. Press **Print**. Use the matching paper size, 100 % scale, margins set to "None".
   Only the cards are printed. To print single sheets, select the pages in the print dialog.
4. Cut along the dashed lines.

Everything you enter is saved in your browser only (nothing is sent to a server) and is still there on the next visit.

| Button | What it does |
|--------|--------------|
| **Import** | Loads a `keyboards.js` file (or a plain text file in the text format) and replaces the current list. |
| **Export** | Downloads the current list as `keyboards.js` – as a backup, to move it to another device, or to keep several sets. |
| **Logo** | Adds an image to the top right corner of every card. **Remove logo** takes it off again. |
| **Clear** | Removes all keyboards. |

### Keyboard

The whole editor works without a mouse:

| Keys | Action |
|------|--------|
| Tab / Shift+Tab | Next / previous field (from the last field to the next keyboard) |
| Alt+↑ / Alt+↓ | Move the current keyboard up / down |
| Ctrl+Enter | Add a keyboard below the current one |
| Ctrl+Shift+D | Duplicate the current keyboard |
| Ctrl+Shift+Backspace | Delete the current keyboard |

On a Mac use ⌘ instead of Ctrl. The **?** button shows this list on the page.
**Hide editor** in the toolbar gives the cards the whole window.

## Hosting

Copy `index.html` to any web server; it needs nothing else. Optionally put a
`keyboards.js` next to it: its keyboards are the example cards a visitor sees on
the first visit. Without the file two built-in examples are shown. There is no
default logo online – `logo.*` files on the server are ignored.

## Local use with keyboards.js

Opened from disk, the page starts with the keyboards from `keyboards.js`. You can
keep editing that file in a text editor and reload, as before. Once you change
something in the browser, the browser's list is used instead; if `keyboards.js`
changes afterwards, the page asks which of the two to show. **Export** writes a
file you can put back in place of `keyboards.js`.

A file named `logo.svg`, `logo.png`, `logo.jpg`, `logo.jpeg` or `logo.webp` next
to `index.html` is used as the logo when the page is opened from disk and no
logo was uploaded.

## Fields

In `keyboards.js` only the first and last line are syntax – leave them as they are.
If one of them gets deleted, the page shows an error with the lines to add back.
Never type a backtick character inside the text.
Everything in between is the same text as in the **Text** view; field names are
not case-sensitive and lines starting with `#` are ignored.

```
Name: Example 75
Status: Daily driver
Switches: Gateron Oil King

Name: Example TKL
Keycaps: ePBT 9009
```

| Field      | Notes                               |
|------------|-------------------------------------|
| `Name` | Required. Entries without it are skipped. |
| `Status` | Shown as a badge, e.g. "Daily driver". |
| `Switches` |                                     |
| `Keycaps` |                                     |
| `Plate` |                                     |
| `Notes` | Free text for anything else. `Note` and `Comment` work too. |
| `URL` | Printed at the bottom of the card.  |

Empty or missing fields are simply left off the card.

## Line breaks

In the form, press Enter inside a field. In the text view and in `keyboards.js`,
type `\n` where you want a line break (works in every field except `Status`):

```
Keycaps: GMK Olivia\nRama Kate, Lake
```

Text that is too long for the card wraps automatically.
