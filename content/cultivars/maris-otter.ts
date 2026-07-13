import type { CultivarContent } from '@/types/content';

export const marisOtter: CultivarContent = {
  id: 'maris-otter',
  slug: 'maris-otter',
  contentType: 'cultivar',
  title: 'Maris Otter',
  acceptedName: 'Maris Otter',
  category: 'Barley cultivar',
  parentCrop: { type: 'crop', slug: 'barley' },
  botanicalTaxon: 'Hordeum vulgare',
  cultivarType: 'Cultivar',
  breedingType: 'Cross-breeding (pedigree selection)',
  originCountry: 'United Kingdom',
  originRegion: 'Cambridge (Plant Breeding Institute, Trumpington)',
  breederOrInstitution: 'Plant Breeding Institute, Cambridge (G. D. H. Bell)',
  registrationStatus: 'historical',
  registrationAsOf: '2026-07-12',
  growthHabit: 'Winter',
  intendedUse: [
    'Winter malting barley for traditional cask-ale (real ale) brewing',
  ],
  qualityTraits: [
    'Two-row winter malting barley long prized for traditional cask-ale (real ale) malting',
    'Reported parentage Proctor × Pioneer',
  ],
  climateAdaptation:
    'A winter (autumn-sown) two-row barley grown in the temperate maritime climate of England, chiefly for the traditional malting and brewing sector.',
  summary:
    'Maris Otter is a two-row winter malting barley bred at the Plant Breeding Institute in Cambridge and introduced in the mid-1960s, long prized in traditional British cask-ale brewing and still grown for that niche market today.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Maris Otter is a two-row winter malting barley (Hordeum vulgare) bred at the Plant Breeding Institute in Cambridge and introduced in the mid-1960s. It carries the institute’s "Maris" prefix, taken from Maris Lane in Trumpington, near Cambridge, and its reported parentage is a cross of the spring barley Proctor with the winter barley Pioneer.',
    },
    {
      type: 'paragraph',
      text: 'Maris Otter became highly regarded in the British malting and brewing trade, especially for traditional cask ale ("real ale"). Although long superseded in mainstream agriculture by higher-yielding varieties, it has remained in active niche production for craft and traditional malting, sustained by demand from brewers.',
    },
  ],
  keyFacts: [
    { label: 'Crop', value: 'Barley (Hordeum vulgare)' },
    { label: 'Type', value: 'Two-row winter malting barley cultivar' },
    {
      label: 'Origin',
      value: 'United Kingdom (Plant Breeding Institute, Cambridge)',
    },
    { label: 'Introduced', value: 'Mid-1960s' },
    { label: 'Growth habit', value: 'Winter (autumn-sown)' },
    { label: 'Notable use', value: 'Traditional cask-ale (real ale) malting' },
  ],
  sections: [
    {
      id: 'history-and-development',
      heading: 'History and development',
      body: [
        {
          type: 'paragraph',
          text: 'Maris Otter was developed at the Plant Breeding Institute in Cambridge, the source of many widely grown British cereals bearing the "Maris" name. Introduced in the mid-1960s, it was bred as a winter malting barley and its reported parentage combines the spring barley Proctor with the winter barley Pioneer.',
        },
        {
          type: 'paragraph',
          text: 'It earned a strong reputation among maltsters and brewers, particularly for traditional cask ale. Unlike most cultivars of its generation, it has been kept in production for a specialist market rather than disappearing when newer varieties arrived.',
        },
      ],
    },
    {
      id: 'classification-and-use',
      heading: 'Classification and use',
      body: [
        {
          type: 'definitionList',
          items: [
            { term: 'Species', description: 'Hordeum vulgare' },
            { term: 'Spike type', description: 'Two-row' },
            {
              term: 'Growth habit',
              description: 'Winter (autumn-sown; requires vernalization)',
            },
            {
              term: 'End use',
              description: 'Malting for traditional cask-ale brewing',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'This page summarizes documented history, classification, and malting use. It makes no comparative yield or agronomic-performance claims.',
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'barley' },
    { type: 'climate', slug: 'chilling-requirement' },
  ],
  geographicScope:
    'Documented United Kingdom two-row winter malting barley grown chiefly for traditional malting; adaptation and performance are region- and season-specific.',
  climateContext:
    'A winter malting barley adapted to the temperate maritime climate of England.',
  limitations: [
    'Adaptation and trait notes are region- and season-specific, and performance varies by environment.',
    'Sources vary on the exact introduction date (mid-1960s), so no single release year is asserted; the cultivar remains in niche production, but its current formal variety-list status is not verified here.',
  ],
  sourceReferences: [
    {
      sourceId: 'ahdb',
      citedFor: 'United Kingdom barley variety and malting context',
    },
    {
      sourceId: 'ncbi-taxonomy',
      citedFor: 'Classification of Hordeum vulgare',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Maris Otter (winter malting barley cultivar)',
    description:
      'Maris Otter, a two-row winter malting barley bred at the Plant Breeding Institute, Cambridge, in the mid-1960s and prized in traditional cask-ale brewing.',
    keywords: [
      'Maris Otter barley',
      'winter malting barley',
      'cask ale malt',
      'Plant Breeding Institute',
    ],
  },
  structuredData: { article: true },
};
