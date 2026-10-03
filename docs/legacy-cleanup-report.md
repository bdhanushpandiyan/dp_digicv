# Legacy cleanup report (nothing has been deleted)

Generated during Phase 3. This lists what can be removed once the redesign is
approved, and what must be migrated first. The legacy site is still reachable at
`/?legacy`.

## 1. Files used only by the legacy site

| Path | Notes |
| --- | --- |
| `src/legacy/*` (11 components + `LegacyApp.jsx`, `useScrollReveal.js`) | Entire previous implementation, lazy-loaded (`LegacyApp-*.js`, 33 KB) |
| `src/lib/sound.js` | Web Audio click sounds, only imported by legacy components |
| `src/styles/legacy.css` | Tailwind directives + legacy classes (`glass-card`, `orb`, `stagger-grid`, …). **Also holds two rules the new site needs, see section 3** |
| `tailwind.config.js` | Legacy colour/font/spacing tokens |
| `public/assets/profile.png` | 122 KB JPEG saved with a `.png` extension. Only legacy references it; it is still copied into `dist/assets/` |
| `characterRed` export in `src/data/characterConfig.js` | Only `legacy/TestHero.jsx` uses it (the new hero hard-codes the sampled gradient) |

## 2. Dependencies and external requests used only by legacy

* `tailwindcss` (devDependency) and the `tailwindcss: {}` entry in `postcss.config.js`. **Keep `autoprefixer`**, the new CSS benefits from it.
* **Material Symbols Outlined**: the `family=Material+Symbols+Outlined...` part of the Google Fonts URL in `index.html`. The new site uses inline SVG icons.
* Three `lh3.googleusercontent.com` images (legacy Research section) are hot-linked. They are only fetched with `?legacy`.

## 3. Migration needed BEFORE Tailwind / `legacy.css` can be removed

1. `CursorCharacter.jsx` still uses Tailwind utilities: `relative w-full`, `absolute inset-0 block h-full w-full` (canvas) and `absolute inset-0 flex items-center justify-center font-label-sm text-label-sm uppercase tracking-widest text-outline` (loading/error text). Replace with plain CSS classes (no change to the tracking code).
2. `legacy.css` contains `#root { overflow-x: clip }` and the `body` background, colour, `overflow-x: hidden`. The new site relies on both. Move them to `base.css`.
3. The new CSS relies on Tailwind's Preflight reset: `box-sizing: border-box` on everything, `a { color: inherit; text-decoration: inherit }`, `button` font/background reset, `svg/img { display: block }`. Add a small reset (about 15 lines) to `base.css` first.
4. Remove `<body class="dark bg-background text-on-background selection:...">` classes in `index.html` once Tailwind is gone (the `.site` wrapper already sets the page colours).

## 4. Unused or dormant code in the new site

* Placeholder-marker machinery, now that no placeholder is shown: `components/ui/PlaceholderBadge.jsx` and its imports/uses in `About`, `Research`, `SectionHeader`, `Experience`, `ProjectCard`, `Skills`, `CV`; `site.showPlaceholderMarkers` in `profile.js`; `.placeholder-badge` and `.is-placeholder` in `base.css`; the `placeholder` branch of `lib/content.js` (`asItem`) and the `{ text, placeholder }` comments in `src/data/*`.
* `Skills.jsx` empty-category fallback and its `.tag--empty` style (only reachable if a category is emptied).
* `Icon.jsx`: the `mail` path is never used.
* `characterConfig.sourceWidth` is never read.

Intentionally kept (optional data hooks, not dead code): `cv.pdfUrl`, `cv.viewUrl`, `contact.other`, project `outcome` / `link`, experience `achievements` / `focusLabel`, publication `authors` / `year` / `doi` / `url`.

## 5. Duplicate asset

`public/character/frames/frame-063.webp` is byte-identical to `center.webp` (it is identical in the supplied 1920×1080 source set too). It costs ~49 KB and one extra decoded frame (~3.7 MB). It is only a duplicate in the file sense: the frame ring still needs index 63. Optional follow-up: let the loader reuse the `center` bitmap for frame 63.

## 6. Suggested order

1. Do the section 3 migration and verify the new site is pixel-identical.
2. Delete `src/legacy/`, `src/lib/sound.js`, the lazy import and `?legacy` handling in `main.jsx`, `legacy.css`, `tailwind.config.js`, `public/assets/profile.png`.
3. `npm uninstall tailwindcss`, drop the Tailwind entry from `postcss.config.js`, drop Material Symbols from the fonts URL.
4. Remove the placeholder-marker machinery (section 4).
