# MemeForge

> Turn one weird idea into a whole meme universe.

MemeForge is a lightweight launch-studio prototype for creating the identity and first content pack of a fictional memecoin. Give it a concept and an audience; it generates a name, ticker, one-line pitch, lore, tone of voice and first social posts.

The project is intentionally focused on **creative tooling**, not trading:

- no wallet connection;
- no blockchain transactions;
- no market data;
- no financial promises;
- no external AI API required in the current MVP.

## What it looks like

The app has two simple areas:

1. **Spark form** — describe the meme and its audience.
2. **Launch pack** — review the generated identity and copy the complete pack.

The local generator is deterministic and fast enough to run on an ordinary laptop. It uses a small browser-side template engine rather than downloading a model or starting a backend service.

## Example

### Input

```text
Meme idea: a sleep-deprived frog who trades snacks
Audience: night owls and crypto Twitter
```

### Generated pack

```text
Name: Sleep Deprived Frog
Ticker: $SLEEP

One-liner:
The unofficial mascot of night owls and crypto Twitter,
powered by memes and questionable confidence.

Voice:
Self-aware, fast, absurdly confident

First post:
sleep deprived frog is not early. you are simply emotionally prepared. $SLEEP
```

The exact copy changes with the words entered in the form. The result can be copied with the **Copy pack** button and edited before publishing anywhere.

## Features in the MVP

- Responsive editorial-style interface.
- Name and ticker generation from a short concept.
- Audience-aware one-line description.
- Short project lore.
- Tone-of-voice tag.
- Three starter social posts.
- Lightweight meme-potential score for the demo UI.
- One-click copy of the complete launch pack.
- Local fallback that works without credentials or network calls.

## Run locally

Requirements:

- Node.js 20 or newer;
- npm.

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL printed by Vite, usually:

```text
http://localhost:5173
```

Create a production build:

```bash
npm run build
```

Run the linter:

```bash
npm run lint
```

Preview the production build locally:

```bash
npm run preview
```

## Low-resource development

MemeForge does not require Docker, a database, a blockchain node, a local LLM or a background worker.

For the lightest workflow, use only:

```bash
npm install
npm run dev
```

The dev server only serves the small Vite application. To stop it, press `Ctrl+C`. The `dist` folder is generated only when `npm run build` is used and can be removed after previewing if disk space matters.

## Project structure

```text
MemeForge/
├─ src/
│  ├─ App.tsx       # Form, local generator and launch-pack result
│  ├─ App.css       # Product UI styles and responsive layout
│  ├─ index.css     # Global font setup
│  └─ main.tsx      # React entry point
├─ public/          # Static public assets
├─ index.html       # Vite HTML entry point
├─ package.json     # Scripts and dependencies
└─ README.md        # Project documentation
```

## How generation works today

The current MVP intentionally keeps generation transparent:

1. The form receives the idea and audience.
2. Punctuation is removed from the idea.
3. The first words are converted into a display name.
4. The words are compacted into a short uppercase ticker.
5. Local templates create the description, lore and posts.
6. The result is rendered immediately in React state.

This makes the demo cheap to run and easy to understand. It is not intended to imitate a full language model or produce investment research.

## Product direction

Possible next steps, in increasing order of complexity:

1. Add more local templates and selectable styles such as wholesome, chaotic, retro and villain.
2. Add editable fields for the generated name, ticker and posts.
3. Add export to Markdown or a small JSON launch-pack file.
4. Add optional image-prompt generation without making it mandatory.
5. Add an optional backend provider for richer copy, brand kits and launch calendars.
6. Keep the local generator as a fallback when no API key is configured.

## Safety and scope

MemeForge is a creative prototype. A generated name, score or text does not indicate that a token is safe, valuable or likely to succeed. The project does not launch tokens, handle funds or provide financial advice.

## License

No license has been selected yet. Add one before accepting external contributions or reusing the project commercially.
