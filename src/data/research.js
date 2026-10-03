// Research areas: structural categories for the site. They are research interests
// grouped from the CV, not separate established research programmes. Every line
// below is taken from the CV (projects, experience and skills).
// `id` is referenced by projects.js (`areaId`).
export const researchAreas = [
  {
    id: 'postbiotics',
    title: 'Postbiotics & Functional Metabolites',
    summary: {
      text: 'Current project: postbiotics from the kernels of Mangifera indica and Syzygium cumini waste from food processing industries (CMRG, DoT; Department of Microbiology, Periyar University). See Experience.',
    },
    keywords: ['Postbiotics', 'Mangifera indica', 'Syzygium cumini'],
  },
  {
    id: 'microbiology',
    title: 'Microbiology & Probiotics',
    summary: {
      text: 'Microbial isolation and identification, probiotic product development, and microbiome research on tumor and oral wash from breast cancer patients.',
    },
    keywords: ['Microbial isolation', 'Probiotic product development', 'Microbiome'],
  },
  {
    id: 'metabolomics',
    title: 'Metabolomics & Bioprocessing',
    summary: {
      text: 'Metabolomics, fermentation process optimisation and laboratory-scale product development, including designing prototype instant fermentation-based probiotic products from laboratory to pilot scale.',
    },
    keywords: ['Metabolomics', 'Fermentation process optimisation', 'Laboratory-scale product development'],
  },
  {
    id: 'computational',
    title: 'Computational Biology',
    summary: {
      text: 'Molecular docking, machine learning and Julia programming. Project: a machine learning model, developed using Julia, to predict coronavirus strains from spike protein physicochemical properties (manuscript).',
    },
    keywords: ['Molecular docking', 'Machine learning', 'Julia programming (basic)'],
  },
];
