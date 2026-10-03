# Dhanush Pandiyan Balakrishnan - Digital CV

Welcome to the source code for my digital Curriculum Vitae and professional portfolio. This portfolio is built as a single-page application focused on delivering a high-end, interactive, and modern "quiet luxury" user experience. 

## 🚀 Live Demo

*(Once you deploy this to GitHub Pages, you can add your live link here: `https://yourusername.github.io/dp-portfolio`)*

## 🛠️ Built With

* **Vite** + **React** (JavaScript), plain CSS with design tokens (`src/styles/tokens.css`)
* **HTML5 Canvas** + `requestAnimationFrame` for the cursor-tracking character (`src/components/CursorCharacter/`)
* **Google Fonts**: *Space Grotesk*, *Inter* and *IBM Plex Mono*
* Tailwind CSS 3 is still installed for the previous implementation (see "Legacy" below)

## 💻 Development

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build into dist/
npm run preview  # serve the production build
```

URL flags: `?debug` overlays the character's face centre, deadzone, angle and frame index. `?legacy` shows the previous single-page implementation (kept until the new structure is approved).

## ✏️ Editing content

All CV content lives in `src/data/` and is separate from the UI components:

| File | Controls |
| --- | --- |
| `profile.js` | name, title, hero copy, about, contact links, CV file, navigation, section headings |
| `research.js` | research areas |
| `projects.js` | project cards |
| `experience.js` | experience timeline |
| `achievements.js` | achievements list (shown under Experience) |
| `publications.js` | publications, manuscript and presentations |
| `skills.js` | skill categories |

Content is taken only from the supplied CV. Missing information is left as an explicit placeholder: entries marked `placeholder: true` render with a "Placeholder" tag. Replace the text and delete the flag, or set `site.showPlaceholderMarkers` to `false` in `profile.js` to hide every tag at once.

## 🧑‍🔬 Character frames

Production frames in `public/character/` are 1280×720 WebP built from the originals in `source-assets/character-1920/` by `scripts/build-character-frames.sh`, which also removes the sparkle watermark from the background.

## 🗂️ Legacy

The previous implementation lives in `src/legacy/` with its styles in `src/styles/legacy.css`. It is only loaded for `?legacy` and can be deleted, together with Tailwind, once the redesign is approved.

## ✨ Key Features

* **Bioluminescent & "Antigravity" Aesthetic**: Immersive floating background orbs and smooth, glassmorphism-styled component cards.
* **Interactive Audio Feedback**: Custom synthesized web audio sounds trigger on specific user interactions for an elevated, engaging experience.
* **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.

## 📦 Deployment (GitHub Pages)

Deploying this portfolio to GitHub Pages is extremely simple:

1. Create a new repository on GitHub.
2. Push this existing repository (which is already initialized) to GitHub.
3. In your GitHub repository, go to **Settings** > **Pages**.
4. Under **Source**, select the main branch and save.
5. In a few minutes, your site will be live!

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
