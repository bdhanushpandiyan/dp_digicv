// Publications, manuscript and presentations, as listed in the CV.
//
// The CV supplies no journal publication list, so the Publications group is empty
// and shows its note. The viral strain prediction work is a MANUSCRIPT, not a
// published paper. Do not add authors, journals, DOIs or years that the CV does not
// state; absent fields are simply not shown.
//
// Entry shape (all optional except id and title):
// { id, title, type, status, authors, venue, year, doi, url }
export const publicationGroups = [
  {
    id: 'publications',
    heading: 'Publications',
    emptyNote: 'No publications listed',
    entries: [],
  },
  {
    id: 'manuscript',
    heading: 'Manuscript',
    entries: [
      {
        id: 'ml-viral-strain-prediction',
        title: 'Machine Learning for Viral Strain Prediction',
        status: 'Manuscript',
      },
    ],
  },
  {
    id: 'presentations',
    heading: 'Presentations',
    entries: [
      {
        id: 'srm-icecb',
        title: 'International Conference on Emerging Concepts in Biotechnology',
        type: 'Oral Presentation',
        venue: 'SRM University',
      },
    ],
  },
];
