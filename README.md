# Cade Leeming — static portfolio

Plain HTML, CSS and JavaScript. No React, no Vite, no build step.

```
index.html      the whole page (all content lives here)
css/styles.css  hand-written stylesheet — theme tokens, layout, animations
js/main.js      behaviour: scroll progress, reveals, nav, tabs, 3D tilt, rotator, copy-email
assets/         images (work cards + YouTube banner/avatar)
favicon.ico
```

## Run it

```bash
npm start          # serves on http://localhost:3000
```

Any static server works — `python3 -m http.server`, VS Code Live Server, or just
opening `index.html` in a browser (paths are relative, so file:// works too).

## Deploy

Upload the contents of this folder to any static host: Netlify, Vercel,
GitHub Pages, Cloudflare Pages, or plain nginx/Apache. Nothing to compile.

Fonts (Syne + Outfit) load from Google Fonts; the YouTube thumbnails load from
i.ytimg.com, so those two need internet access.
