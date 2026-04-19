# GarfieldTV — Portfolio

A dark, BMW-inspired portfolio for **GarfieldTV** — Minecraft server manager / owner and Twitch streamer.

Monumental uppercase typography, sharp corners, hairline borders, and a restrained navy palette with M-stripe accents.

Built with **React + Vite + Tailwind CSS**.

## Stack

- React 18
- Vite 5
- Tailwind CSS 3
- Lucide React (icons)
- Google Fonts: Inter (weights 200–900, light display), JetBrains Mono (technical labels)

## Getting started

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

### Build for production

```bash
npm run build
npm run preview
```

The production bundle ends up in `dist/` — deploy it to Vercel, Netlify, Cloudflare Pages, or any static host.

## Project structure

```
.
├── index.html
├── public/
│   └── favicon.svg
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── Marquee.jsx
│       ├── About.jsx
│       ├── Servers.jsx
│       ├── Skills.jsx
│       ├── Timeline.jsx
│       ├── Twitch.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## Placeholders to replace

Look for `[Placeholder]` or `YOUR_*` markers in the code. Quick map:

| Where | What to change |
| --- | --- |
| `src/components/Hero.jsx` | Stats, Twitch URL |
| `src/components/About.jsx` | Personal story |
| `src/components/Servers.jsx` | `SERVERS` array — add your real servers |
| `src/components/Skills.jsx` | Skill descriptions |
| `src/components/Timeline.jsx` | `EVENTS` array — add milestones |
| `src/components/Twitch.jsx` | `TWITCH_USER` constant |
| `src/components/Contact.jsx` | `CONTACTS` array — Twitch / Discord / YouTube / Email |

## Design notes — BMW aesthetic

Inspired by the getdesign.md BMW design system.

Palette (`tailwind.config.js` → `colors.bmw` / `colors.bg` / `colors.fg`):

| Token | Hex | Role |
| --- | --- | --- |
| `bg.DEFAULT` | `#05080F` | Page background |
| `bg.elev` | `#0A0F1A` | Elevated surfaces |
| `bmw.navy` | `#031E49` | Deep corporate navy |
| `bmw.blue` | `#4599FE` | M-Sport light blue (primary accent) |
| `bmw.red` | `#EE0405` | M red (sparingly — live indicators, M-stripe) |
| `bmw.mist` | `#B8CAD1` | Muted text |
| `fg.DEFAULT` | `#FFFDFE` | Text |

Principles:

- **Zero border-radius** globally — everything is sharp and geometric
- **Monumental uppercase headlines** in Inter at weight 300 with tight tracking
- **Hairline borders** (`rgba(184,202,209,0.12)`) instead of shadows
- **Tech labels** — uppercase mono, wide letter-spacing (`tech-label` / `tech-label-dim`)
- **M-stripe** accent — the three-bar BMW signature (blue / navy / red) used as a brand mark
- **Corner brackets** — subtle data-panel markers on hover
- **Subtle grain overlay** for analog warmth
- **Numbered sections** (01 · Profile, 02 · Selected Work, …) like a spec sheet

Tweak the palette in `tailwind.config.js` → `colors.bmw` / `colors.bg` / `colors.fg`.

Have fun!
