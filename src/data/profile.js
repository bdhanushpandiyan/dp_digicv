// -----------------------------------------------------------------------------
// Profile & site-level content.
//
// Edit this file (and the other files in src/data) to update the site. Nothing in
// src/components contains CV content.
//
// Entries flagged `placeholder: true` are structural stand-ins. They render with a
// "Placeholder" marker and a dashed outline. Replace the text, delete the flag,
// and the marker disappears. Set `site.showPlaceholderMarkers` to false to hide
// every marker at once.
// -----------------------------------------------------------------------------

export const site = {
  showPlaceholderMarkers: true,
};

export const profile = {
  name: { given: 'Dhanush', middle: 'Pandiyan', family: 'Balakrishnan' },
  title: 'Researcher',
  eyebrow: 'Biotechnology Research Portfolio',

  // PLACEHOLDER: positioning statement is not final. Needs your approval.
  positioning: {
    text: 'Microbiology, metabolomics, postbiotics and computational biology.',
    placeholder: true,
  },

  hero: {
    primaryCta: { label: 'View research', href: '#research' },
    secondaryCta: { label: 'Curriculum vitae', href: '#cv' },
  },

  location: 'Madurai, Tamil Nadu, India',

  contact: {
    email: 'b.dhanushpandiyan@gmail.com',
    linkedin: 'https://linkedin.com/in/dhanushpandiyanb',
    github: null, // e.g. 'https://github.com/<username>'
    other: [], // e.g. [{ label: 'ORCID', href: 'https://orcid.org/...' }]
    intro: {
      text: 'Placeholder: a short line inviting collaboration or enquiries.',
      placeholder: true,
    },
  },

  about: {
    lead: {
      text: 'Placeholder: one or two sentences introducing your research focus and approach.',
      placeholder: true,
    },
    paragraphs: [
      {
        text: 'Placeholder: background paragraph. Education path, research interests and what drives the work.',
        placeholder: true,
      },
      {
        text: 'Placeholder: second paragraph. Current focus, methods you work with, and what you are looking for next.',
        placeholder: true,
      },
    ],
    facts: [
      { label: 'Location', value: 'Madurai, Tamil Nadu, India' },
      { label: 'Education', value: 'Placeholder: degree, institution', placeholder: true },
      { label: 'Affiliation', value: 'Placeholder: current affiliation', placeholder: true },
      { label: 'Currently', value: 'Placeholder: current role or focus', placeholder: true },
    ],
  },

  cv: {
    summary: {
      text: 'Placeholder: a short professional summary that sits beside the downloadable CV.',
      placeholder: true,
    },
    // Put the PDF in /public/cv/ and reference it here, e.g. '/cv/Dhanush-Pandiyan-CV.pdf'.
    pdfUrl: null,
    // Optional hosted/online version of the CV.
    viewUrl: null,
  },
};

// Order follows the requested navigation. `id` must match a section id on the page.
export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'research', label: 'Research' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'cv', label: 'CV' },
  { id: 'contact', label: 'Contact' },
];

// Section headings. `intro` is optional.
export const sections = {
  about: { number: '01', title: 'About' },
  research: { number: '02', title: 'Research' },
  projects: { number: '03', title: 'Projects' },
  experience: { number: '04', title: 'Experience' },
  publications: { number: '05', title: 'Publications & Presentations' },
  skills: { number: '06', title: 'Skills' },
  cv: { number: '07', title: 'Curriculum Vitae' },
  contact: { number: '08', title: 'Contact' },
};
