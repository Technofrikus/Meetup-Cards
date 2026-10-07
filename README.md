# Meetup Cards

Printable A6 spec cards for mechanical keyboards, four per A4 sheet.

## Usage

1. Edit `keyboards.js` – one block of `Field: value` lines per keyboard, blocks separated by an empty line.
2. Open `index.html` in a browser (double-click, no server needed).
3. Press **Print**. Use A4, 100 % scale, margins set to "None".
4. Cut along the dashed centre lines.

After a rebuild, change the entry in `keyboards.js`, reload and print again.

## Fields

Only the first and last line of `keyboards.js` are syntax – leave them as they are.
Everything in between is plain text; field names are not case-sensitive and lines
starting with `#` are ignored.

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

## Logo

Put a file named `logo.svg`, `logo.png`, `logo.jpg`, `logo.jpeg` or `logo.webp`
next to `index.html`. It appears in the top right corner of every card. Without
a logo file the corner stays empty.
