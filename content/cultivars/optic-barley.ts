import type { CultivarContent } from '@/types/content';

export const opticBarley: CultivarContent = {
  id: 'optic-barley',
  slug: 'optic-barley',
  contentType: 'cultivar',
  title: 'Optic',
  acceptedName: 'Optic',
  category: 'Barley cultivar',
  parentCrop: { type: 'crop', slug: 'barley' },
  botanicalTaxon: 'Hordeum vulgare',
  cultivarType: 'Cultivar',
  breedingType: 'Cross-breeding (pedigree selection)',
  originCountry: 'United Kingdom',
  breederOrInstitution:
    'New Farm Crops / Nickerson barley breeding programme (later part of Syngenta)',
  registrationStatus: 'historical',
  registrationAsOf: '2026-07-12',
  growthHabit: 'Spring',
  intendedUse: ['Spring malting barley for brewing and distilling'],
  qualityTraits: [
    'Two-row spring malting barley widely used for brewing and distilling',
  ],
  climateAdaptation:
    'A spring malting barley grown in the United Kingdom and other temperate regions.',
  summary:
    'Optic is a two-row spring malting barley from a British breeding programme that became the most widely grown spring malting variety in Britain in the mid-2000s before being superseded by newer cultivars.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Optic is a two-row spring malting barley (Hordeum vulgare) developed by a British barley breeding programme (New Farm Crops / Nickerson, later part of Syngenta). It was approved for malting through the industry assessment process and grown widely for brewing and distilling.',
    },
    {
      type: 'paragraph',
      text: 'For a period Optic was the most widely grown spring malting barley in Britain, particularly in the mid-2000s. It has since been largely superseded by later malting varieties, and is now of chiefly historical and reference interest.',
    },
  ],
  keyFacts: [
    { label: 'Crop', value: 'Barley (Hordeum vulgare)' },
    { label: 'Type', value: 'Two-row spring malting barley cultivar' },
    { label: 'Origin', value: 'United Kingdom' },
    { label: 'Growth habit', value: 'Spring' },
    { label: 'End use', value: 'Malting (brewing and distilling)' },
    {
      label: 'Registry status',
      value: 'Historical (widely grown in the 2000s, later superseded)',
    },
  ],
  sections: [
    {
      id: 'history-and-adoption',
      heading: 'History and adoption',
      body: [
        {
          type: 'paragraph',
          text: 'Optic came from a British spring-barley breeding programme and was taken up widely as a malting variety after passing the malting industry’s assessment process. In the mid-2000s it was the leading spring malting barley grown in Britain.',
        },
        {
          type: 'paragraph',
          text: 'As newer varieties with updated agronomic and malting characteristics were introduced, Optic was gradually replaced in commercial cropping. It remains a well-documented reference point among modern British malting barleys.',
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
            { term: 'Growth habit', description: 'Spring' },
            {
              term: 'End use',
              description: 'Malting for brewing and distilling',
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
  connections: [{ type: 'crop', slug: 'barley' }],
  geographicScope:
    'Documented United Kingdom two-row spring malting barley, widely grown in the 2000s; adaptation and performance are region- and season-specific.',
  climateContext:
    'A spring malting barley grown in the United Kingdom and other temperate regions.',
  limitations: [
    'Adaptation and trait notes are region- and season-specific, and performance varies by environment.',
    'No release year is asserted here because a reliable date was not confirmed; Optic has been largely superseded, and its current variety-list status is not verified here.',
  ],
  sourceReferences: [
    {
      sourceId: 'ahdb',
      citedFor:
        'United Kingdom spring malting barley variety and Recommended Lists context',
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
    title: 'Optic (spring malting barley cultivar)',
    description:
      'Optic, a two-row spring malting barley from a British breeding programme that was the most widely grown spring malting variety in Britain in the mid-2000s.',
    keywords: [
      'Optic barley',
      'spring malting barley',
      'two-row barley',
      'British malting barley',
    ],
  },
  structuredData: { article: true },
};
