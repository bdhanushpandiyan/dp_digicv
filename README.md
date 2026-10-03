# Dhanush Pandiyan Balakrishnan - Digital CV

Welcome to the source code for my digital Curriculum Vitae and professional portfolio. This portfolio is built as a single-page application focused on delivering a high-end, interactive, and modern "quiet luxury" user experience. 

## 🚀 Live Demo

*(Once you deploy this to GitHub Pages, you can add your live link here: `https://yourusername.github.io/dp-portfolio`)*

## 🛠️ Built With

* **Vite** + **React** (JavaScript)
* **Tailwind CSS 3** (compiled via PostCSS; theme tokens live in `tailwind.config.js`)
* **HTML5 Canvas** + `requestAnimationFrame` for the cursor-tracking character (`src/components/CursorCharacter.jsx`)
* **Vanilla Web Audio API** for interaction sounds (`src/lib/sound.js`)
* **Google Fonts**: *Space Grotesk*, *Inter* and Material Symbols

## 💻 Development

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build into dist/
npm run preview  # serve the production build
```

Append `?debug` to the URL to overlay the face centre and deadzone on the character.

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
