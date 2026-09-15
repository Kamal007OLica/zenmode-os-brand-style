# ZenMode OS — Brand Style

A single-page brand style guide for ZenMode OS: the story, the brand core, Zen Score, logo & symmetry, colour, type, icons, and stickers.

Static HTML/CSS/JS, no build step, no framework.

## Structure

- `index.html` — the page
- `css/style.css` — base styles, self-hosted `@font-face` (Clash Display, Departure Mono), hover/active states
- `js/main.js` — scroll-spy for the left section rail
- `assets/` — fonts, images, and downloadable Figma tokens (`zenmode-tokens.json`)

## Local preview

```
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Live site

Published via GitHub Pages from the `main` branch.
