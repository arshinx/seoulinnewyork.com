# seoulinnewyork.com

Website for Seoul in New York, a non-profit film production company in New York.

Static site, no build step. Served via GitHub Pages (see `CNAME`).

- `index.html` — the single page
- `styles.css` — styles, matching the visual family of onthequeensborobridge.com and minaekim.nyc
- `lang.js` — EN / KR toggle (persisted in `localStorage`)
- `favicon.svg`

To preview locally:

```
python3 -m http.server 8000
```

then open http://localhost:8000.
