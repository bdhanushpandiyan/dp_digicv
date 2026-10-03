// Experience timeline, newest first, as listed in the CV. Do not add team sizes,
// outputs, results or commercial outcomes that the CV does not state.
//
// Shape:
// {
//   id, organization, role, dates,
//   status,              // optional, e.g. 'Ongoing'
//   focus,               // optional: research focus / project title (verbatim)
//   details: [{ label, value }],   // optional extra facts
//   responsibilities: [],          // string, or { text, placeholder: true }
//   achievements: []
// }
export const experience = [
  {
    id: 'research-assistant-periyar',
    organization: 'Department of Microbiology, Periyar University, Salem-11',
    role: 'Research Assistant',
    dates: 'From August 2026',
    status: 'Ongoing',
    // Project title exactly as supplied in the CV.
    focus:
      'Postbiotics from the kernels of Mangifera indica and Syzygium cumini waste from food processing industries alleviates type 2 diabetes mellitus',
    details: [
      { label: 'Project', value: 'CMRG, DoT, Chennai' },
      { label: 'Project duration', value: '3-year project' },
    ],
    // The CV does not list responsibilities for this role.
    responsibilities: [{ text: 'Responsibilities to be added.', placeholder: true }],
    achievements: [],
  },
  {
    id: 'makerghat-rd-fellow',
    organization: 'MakerGhat Foundation Incubation Program, Chennai',
    role: 'Research & Development Fellow – Fermentation Products',
    dates: 'July – December 2024',
    responsibilities: [
      'Designed prototype instant fermentation-based probiotic products from laboratory to pilot scale.',
    ],
    achievements: [],
  },
  {
    id: 'mcc-summer-internship',
    organization: 'Madras Christian College (MCC), Chennai',
    role: 'National-level Summer Research Internship – Algal Biotechnology & Biodiversity',
    dates: 'May – July 2023',
    focus: 'Taxonomy of algae and its application (BTAA23)',
    responsibilities: [
      'Conducted algal isolation, culture maintenance, and microscopy-based taxonomy analysis for industrial biotechnology applications.',
    ],
    achievements: [],
  },
];
