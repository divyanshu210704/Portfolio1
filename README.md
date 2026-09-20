# CHARACTER 01 — "The One Who Is Still Becoming"

An immersive character-portfolio built for the **"YOU, AS A CHARACTER"** theme.
Not a template — a playable first chapter of a story about a computer science
student who is still becoming the engineer he wants to be.

## Run it

```bash
npm install
npm run dev      # development
npm run build    # production build
npm run preview  # preview the production build
```

## The story (section order)

| # | Section | Narrative beat |
|---|---------|----------------|
| — | Opening | "CHARACTER 01 — THE ONE WHO IS STILL BECOMING." Name revealed like a title card |
| 01 | THE CHARACTER | Game-style profile sheet + honest attribute bars |
| 02 | ORIGIN STORY | Six chapters on a scroll-filled story line; the last chapter is *locked* |
| 03 | SKILL TREE | Three branches, honest levels, hover field notes |
| 04 | MISSIONS | Projects as quest-log entries with cinematic case-study overlays |
| 05 | INVENTORY | Collectible items with rarity tiers |
| 06 | CURRENT QUEST | "The story isn't finished." + the five verbs he lives by |
| 07 | TRAITS | Personality as an editorial index, not adjectives |
| 08 | NEXT CHAPTER | "I don't know exactly where the story ends." |
| — | END OF CHAPTER. / NOT THE STORY. | Contact doors + "TO BE CONTINUED…" |

## Make it yours

**All content lives in one file: `src/data/character.ts`.**

Replace the marked placeholders:

- `character.name`, `tagline`, `introLine`
- `profile.location`, attribute values/notes
- `chapters` — rewrite the six chapters as your real journey
- `missions` — three placeholder projects → your real ones
  (drop screenshots into the case-study placeholder in `src/components/Missions.tsx`)
- `contact.email`, `contact.github`, `contact.linkedin`

No component code needs to change.

## Tech

React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · lucide-react · Vite

## Design system

- Background `#080808` / `#0D0D0D` · Text `#F5F5F0` / `#A5A5A0` · Accent: ember `#E8A33D`
- Space Grotesk (display) · Inter (body) · IBM Plex Mono (game-UI labels)
- Film grain, scanline, glitch hover on "CHARACTER 01", magnetic buttons,
  custom cursor (fine pointers only), scroll progress hairline

## Accessibility & performance

- `prefers-reduced-motion` disables grain, cursor, marquee and all heavy motion
- Semantic HTML, skip link, ARIA labels/roles, keyboard-focusable skill nodes,
  Escape closes overlays, focus-visible outlines
- No images by default — the whole site ships as ~127 kB gzipped JS + ~8 kB CSS
