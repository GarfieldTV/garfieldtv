# GarfieldTV — Portfolio

Personal portfolio for **GarfieldTV** — Minecraft server operator, community manager, and Twitch streamer.

Dark BMW-inspired aesthetic: angular hairline borders, zero border-radius, monumental uppercase 300 display type, JetBrains Mono tech labels, deep navy (#031E49) × light M-blue (#4599FE).

## Stack

- React 18 + Vite 5
- Tailwind CSS 3 (custom config, zero radii by default)
- Lucide React icons
- Inter + JetBrains Mono (Google Fonts)

## Scripts

```bash
npm install
npm run dev       # dev server
npm run build     # production bundle → dist/
npm run preview   # preview the built bundle
```

## Project structure

```
src/
├── App.jsx               App shell + skip link + scroll progress
├── main.jsx              React entry
├── index.css             Tailwind + BMW utility layer
└── components/
    ├── Navbar.jsx        Fixed header with blue monogram
    ├── Hero.jsx          Monumental "GarfieldTV." headline
    ├── Marquee.jsx       Two-row scrolling labels
    ├── About.jsx         Deep navy bio panel
    ├── Servers.jsx       Asymmetric featured + compact cards
    ├── Skills.jsx        Oversized outline-number list
    ├── Timeline.jsx      Monumental year history
    ├── Twitch.jsx        HUD-framed live preview
    ├── Contact.jsx       Enumerated channel rows
    ├── Footer.jsx        Legal links + cookie-free note
    ├── Legal.jsx         Imprint / Privacy / Terms modal
    └── ScrollProgress.jsx
```

## Placeholders to replace before publishing

- `src/components/Hero.jsx` → `YOUR_TWITCH_USERNAME`
- `src/components/Twitch.jsx` → `YOUR_TWITCH_USERNAME`
- `src/components/Contact.jsx` → `YOUR_*` handles and `your@email.com`
- `src/components/Legal.jsx` → full legal name, address, email in the Imprint
- `index.html` → canonical URL, `og:image` (add an image file + tag), Twitter handle

## Legal

Imprint, Privacy Policy, and Terms are surfaced through a modal triggered from the footer (CH / EU compliance scaffolding). The text is ready-to-fill; swap the bracketed placeholders in `Legal.jsx` before going live.

## Accessibility

- Skip-to-content link
- Visible focus outlines (`:focus-visible`)
- `prefers-reduced-motion` respected globally
- Semantic landmarks (`main`, `nav`, `footer`, `dialog`)
- Keyboard-closable legal dialog (ESC)

## Credits

Built with ❤ by @garfieldtv.
