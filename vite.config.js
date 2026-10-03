import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { profile } from './src/data/profile.js';

/**
 * Document metadata, structured data, robots.txt and sitemap.xml.
 *
 * Everything is derived from src/data/profile.js so there is one source of truth.
 * URL-dependent tags (canonical, og:url, og:image, twitter:image, sitemap) need the
 * production URL. It is NOT hard-coded: set SITE_URL (env var or .env file), e.g.
 *   SITE_URL=https://example.com/ npm run build
 * Without it those tags are simply omitted.
 */
function seoPlugin(siteUrl) {
  const base = siteUrl ? (siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`) : '';
  const abs = (path) => new URL(path, base).href;
  const esc = (text) => text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

  const { name, title, positioning, location, contact } = profile;
  const pageTitle = `${name.full} | ${title}`;
  const description = `${name.full}, ${title}. ${positioning.text.split(' · ').join(', ')}.`;
  const [region, country] = location.split(', ');
  const imageAlt = `Portrait of ${name.full}`;

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: name.full,
    jobTitle: title,
    email: contact.email,
    address: { '@type': 'PostalAddress', addressRegion: region, addressCountry: country },
    sameAs: [contact.linkedin.href, ...contact.other.map((o) => o.href)],
    ...(base && { url: base }),
  };

  const tags = [
    `<title>${esc(pageTitle)}</title>`,
    `<meta name="description" content="${esc(description)}">`,
    '<meta name="theme-color" content="#070d1b">',
    '<meta name="color-scheme" content="dark">',
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="${esc(name.full)}">`,
    `<meta property="og:title" content="${esc(pageTitle)}">`,
    `<meta property="og:description" content="${esc(description)}">`,
    `<meta property="og:locale" content="en">`,
    `<meta name="twitter:card" content="${base ? 'summary_large_image' : 'summary'}">`,
    `<meta name="twitter:title" content="${esc(pageTitle)}">`,
    `<meta name="twitter:description" content="${esc(description)}">`,
    ...(base
      ? [
          `<link rel="canonical" href="${base}">`,
          `<meta property="og:url" content="${base}">`,
          `<meta property="og:image" content="${abs('og-image.jpg')}">`,
          '<meta property="og:image:type" content="image/jpeg">',
          '<meta property="og:image:width" content="1200">',
          '<meta property="og:image:height" content="630">',
          `<meta property="og:image:alt" content="${esc(imageAlt)}">`,
          `<meta name="twitter:image" content="${abs('og-image.jpg')}">`,
          `<meta name="twitter:image:alt" content="${esc(imageAlt)}">`,
        ]
      : []),
    `<script type="application/ld+json">${JSON.stringify(person).replace(/</g, '\\u003c')}</script>`,
  ];

  return {
    name: 'site-seo',
    transformIndexHtml: (html) => html.replace('<!-- SEO -->', tags.join('\n    ')),
    generateBundle() {
      const robots = ['User-agent: *', 'Allow: /', ...(base ? ['', `Sitemap: ${abs('sitemap.xml')}`] : [])].join('\n');
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: `${robots}\n` });
      if (base) {
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${base}</loc></url>\n</urlset>\n`;
        this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap });
      }
    },
  };
}

// Relative base so the build works from any sub-path (e.g. GitHub Pages project sites).
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const siteUrl = (process.env.SITE_URL || env.SITE_URL || '').trim();
  return {
    base: './',
    plugins: [react(), seoPlugin(siteUrl)],
  };
});
