# MemeForge

MemeForge turns one weird idea into a launch-ready meme coin identity: name, ticker, lore, voice and first social posts.

This first MVP is intentionally local and safe:

- React + TypeScript + Vite
- generation runs in the browser with no API key
- copyable launch pack
- responsive editorial UI
- no wallet connection and no financial claims

## Run locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Product direction

The next step is an optional backend provider for richer generation (brand kit, image prompts, launch calendar and community quests). The local generator should remain as a fast fallback, so the app is still useful without credentials.
