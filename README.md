# ZenMode OS

The ZenMode OS website, built on **Albeit**, the ZenMode OS design system.

Static HTML/CSS/JS, no build step, no framework. Published via GitHub Pages from `main`.

## Pages

| Path | What it is |
| --- | --- |
| `/` | Product home page |
| `/brand/` | Albeit, the full brand style guide |
| `/terms/` | Legal index |
| `/terms/app.html` | App usage terms and conditions |
| `/terms/gold-invest.html` | Gold Invest terms and conditions |
| `/terms/privacy.html` | Privacy policy |

## Structure

- `css/site.css` — shared design system styles for the home and legal pages
- `css/style.css` — brand style guide styles
- `js/main.js` — scroll-spy for the brand guide's section rail
- `assets/` — self-hosted fonts (Clash Display, Departure Mono), images, and `zenmode-tokens.json`

## Before publishing the legal pages

The three documents in `/terms/` are drafts. They carry a visible "draft for review" notice and
highlighted `[PLACEHOLDER]` markers for entity name, registered address, contact and grievance
emails, jurisdiction and liability caps. Fill those in, have a lawyer review the documents, then
remove the `notice` block from each page.

## Local preview

```
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.
