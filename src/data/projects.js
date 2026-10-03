// Projects, as listed in the CV. Titles are verbatim. Do not add methods, findings
// or outcomes that the CV does not state.
//
// Shape (all optional except id, title, areaId):
// {
//   id, title,
//   description,   // string, or { text, placeholder: true } when not yet supplied
//   areaId,        // one of the ids in research.js (drives the filter)
//   areaLabel,     // shown on the card instead of the area title
//   status,        // e.g. 'Manuscript'
//   supervisor, institution,
//   methods: [], technologies: [],
//   outcome,
//   link: { label, href } | null
// }
export const projects = [
  {
    id: 'breast-cancer-microbiome',
    title: 'Microbiome research on tumor and oral wash from breast cancer patients',
    description:
      'Investigating microbial virulence genes associated with breast cancer microbiome signatures.',
    areaId: 'microbiology',
    areaLabel: 'Microbiology / Microbiome',
    supervisor: 'Dr Benedict Christopher Paul',
    institution: 'SRIHER, Chennai, Tamil Nadu',
  },
  {
    id: 'ml-viral-strain-prediction',
    title: 'Machine Learning for Viral Strain Prediction',
    description:
      'Developed a machine learning model using Julia to predict coronavirus strains based on spike protein physicochemical properties.',
    areaId: 'computational',
    areaLabel: 'Computational Biology / Machine Learning',
    status: 'Manuscript',
    supervisor: 'Dr Benedict Christopher Paul',
    institution: 'SRIHER, Chennai, Tamil Nadu',
    methods: ['Machine learning'],
    technologies: ['Julia'],
  },
  {
    id: 'instant-ferment-probiotic-yukti',
    title: 'Instant Ferment Probiotic Product Development (Yukti)',
    // No description is listed in the CV for this project, so none is shown.
    areaId: 'microbiology',
    areaLabel: 'Microbiology / Probiotic Product Development',
    supervisor: 'Dr M. Rama Prabha',
    institution: 'Thiagarajar College, Madurai, Tamil Nadu',
  },
];
