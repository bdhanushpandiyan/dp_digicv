// -----------------------------------------------------------------------------
// Profile & site-level content.
//
// Source of truth: the CV supplied by the site owner. Only facts stated there are
// used. Anything missing is left as an explicit placeholder rather than guessed.
//
// Edit this file (and the other files in src/data) to update the site. Nothing in
// src/components contains CV content.
//
// Entries flagged `placeholder: true` are structural stand-ins. They render with a
// "Placeholder" marker. Replace the text, delete the flag, and the marker
// disappears. Set `site.showPlaceholderMarkers` to false to hide every marker.
// -----------------------------------------------------------------------------

export const site = {
  showPlaceholderMarkers: true,
};

export const profile = {
  name: {
    full: 'Dhanush Pandiyan B',
    // The hero headline is set on these lines.
    lines: ['Dhanush', 'Pandiyan B'],
  },
  title: 'Biotechnology Researcher',
  eyebrow: 'Research • Biotechnology • Innovation',
  positioning: {
    text: 'Microbiology · Metabolomics · Postbiotics · Computational Biology',
  },

  hero: {
    primaryCta: { label: 'Explore research', href: '#research' },
    secondaryCta: { label: 'Curriculum vitae', href: '#cv' },
  },

  location: 'Tamil Nadu, India',

  contact: {
    email: 'b.dhanushpandiyan@gmail.com',
    phone: { display: '+91 95977 16483', tel: '+919597716483' },
    linkedin: {
      display: 'linkedin.com/in/dhanushpandiyanb',
      href: 'https://linkedin.com/in/dhanushpandiyanb',
    },
    // Not supplied. Add only verified URLs, e.g. { label: 'GitHub', href: '...' }.
    other: [],
  },

  about: {
    lead: {
      text: 'Biotechnology researcher with research interests in microbiology, metabolomics, postbiotics and computational biology.',
    },
    paragraphs: [
      {
        text: 'Project work includes microbiome research on tumor and oral wash from breast cancer patients, and a machine learning model, developed using Julia, to predict coronavirus strains from spike protein physicochemical properties.',
      },
      {
        text: 'Laboratory experience includes microbial isolation and identification, probiotic product development and fermentation-based prototyping from laboratory to pilot scale. From August 2026, Research Assistant on a CMRG, DoT project at the Department of Microbiology, Periyar University, Salem, on postbiotics from the kernels of Mangifera indica and Syzygium cumini (full title under Experience).',
      },
    ],
    facts: [
      { label: 'Location', value: 'Tamil Nadu, India' },
      {
        label: 'Current role',
        value: 'Research Assistant, Department of Microbiology, Periyar University, Salem (from August 2026)',
      },
    ],
  },

  education: [
    {
      degree: 'MSc Biotechnology',
      institution: 'Sri Ramachandra Institute of Higher Education and Research, Chennai',
      period: '2024–2026',
      cgpa: '8.61',
    },
    {
      degree: 'BSc Botany',
      institution: 'Thiagarajar College (Autonomous), Madurai',
      period: '2021–2024',
      cgpa: '9.06',
      note: 'Third Rank Holder',
    },
  ],

  cv: {
    summary: {
      text: 'MSc Biotechnology (SRIHER, 2024–2026) · BSc Botany (Thiagarajar College, 2021–2024) · Research Assistant, Periyar University (from August 2026).',
    },
    // The CV PDF has not been supplied. When it is, put it in public/cv/ and set the
    // path here, e.g. 'cv/Dhanush-Pandiyan-B-CV.pdf' (or a full https:// URL). The
    // button then becomes "Download CV" by itself.
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
  research: {
    number: '02',
    title: 'Research',
    intro: {
      text: 'Areas of research interest, grouped from the projects, training and skills listed in the CV.',
    },
  },
  projects: { number: '03', title: 'Projects' },
  experience: { number: '04', title: 'Experience' },
  publications: { number: '05', title: 'Publications & Presentations' },
  skills: { number: '06', title: 'Skills' },
  cv: { number: '07', title: 'Curriculum Vitae' },
  contact: { number: '08', title: 'Contact' },
};
