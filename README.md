# Meetup Cards

Printable A6 spec cards for mechanical keyboards, four per A4 sheet.

## Usage

1. Edit `keyboards.js` – one entry per keyboard.
2. Open `index.html` in a browser (double-click, no server needed).
3. Press **Print**. Use A4, 100 % scale, margins set to "None".
4. Cut along the dashed centre lines.

After a rebuild, change the entry in `keyboards.js`, reload and print again.

## Fields

| Field      | Notes                               |
|------------|-------------------------------------|
| `name`     | Required. Entries without it are skipped. |
| `status`   | Shown as a badge, e.g. "Daily driver". |
| `switches` |                                     |
| `keycaps`  |                                     |
| `plate`    |                                     |
| `url`      | Printed at the bottom of the card.  |

Empty or missing fields are simply left off the card.

## Logo

Put a file named `logo.svg`, `logo.png`, `logo.jpg`, `logo.jpeg` or `logo.webp`
next to `index.html`. It appears in the top right corner of every card. Without
a logo file the corner stays empty.
