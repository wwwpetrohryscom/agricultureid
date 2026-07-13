import type { CultivarContent } from '@/types/content';

export const marisHuntsman: CultivarContent = {
  id: 'maris-huntsman',
  slug: 'maris-huntsman',
  contentType: 'cultivar',
  title: 'Maris Huntsman',
  acceptedName: 'Maris Huntsman',
  category: 'Wheat cultivar',
  parentCrop: { type: 'crop', slug: 'wheat' },
  botanicalTaxon: 'Triticum aestivum',
  cultivarType: 'Cultivar',
  breedingType: 'Cross-breeding (pedigree selection)',
  originCountry: 'United Kingdom',
  originRegion: 'Cambridge (Plant Breeding Institute, Trumpington)',
  yearReleased: '1972',
  breederOrInstitution: 'Plant Breeding Institute, Cambridge',
  registrationStatus: 'historical',
  registrationAsOf: '2026-07-12',
  growthHabit: 'Winter',
  intendedUse: ['Winter bread wheat'],
  climateAdaptation:
    'A winter wheat adapted to the temperate maritime climate of the United Kingdom; as a winter type it is autumn-sown and requires vernalization to flower.',
  summary:
    'Maris Huntsman is a British winter bread wheat introduced in 1972 by the Plant Breeding Institute in Cambridge that became one of the most widely grown winter wheats in the United Kingdom during the 1970s.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Maris Huntsman is a winter bread wheat (Triticum aestivum) bred at the Plant Breeding Institute in Cambridge and introduced as a recommended variety in 1972. Its name follows the "Maris" prefix used by the institute, taken from Maris Lane in Trumpington, near Cambridge.',
    },
    {
      type: 'paragraph',
      text: 'Maris Huntsman was widely adopted and became one of the most extensively grown winter wheats in the United Kingdom during the 1970s. It has since been superseded by later varieties and is now of chiefly historical interest as part of the Plant Breeding Institute’s influential cereal-breeding legacy.',
    },
  ],
  keyFacts: [
    { label: 'Crop', value: 'Wheat (bread wheat, Triticum aestivum)' },
    { label: 'Type', value: 'Winter bread wheat cultivar' },
    {
      label: 'Origin',
      value: 'United Kingdom (Plant Breeding Institute, Cambridge)',
    },
    { label: 'Introduced', value: '1972' },
    { label: 'Growth habit', value: 'Winter (autumn-sown)' },
    {
      label: 'Registry status',
      value: 'Historical (heritage cultivar, later superseded)',
    },
  ],
  sections: [
    {
      id: 'history-and-development',
      heading: 'History and development',
      body: [
        {
          type: 'paragraph',
          text: 'Maris Huntsman was developed at the Plant Breeding Institute in Cambridge, a research organization responsible for a series of widely grown British cereals carrying the "Maris" name. It was introduced to farmers as a recommended winter wheat in 1972.',
        },
        {
          type: 'paragraph',
          text: 'The variety was taken up quickly and became a leading winter wheat in the United Kingdom through the 1970s before newer varieties replaced it. It is now remembered as a landmark in the institute’s cereal-breeding programme rather than as a current commercial variety.',
        },
      ],
    },
    {
      id: 'classification-and-characteristics',
      heading: 'Classification and characteristics',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Species',
              description: 'Triticum aestivum (hexaploid bread wheat)',
            },
            {
              term: 'Growth habit',
              description: 'Winter (autumn-sown; requires vernalization)',
            },
            {
              term: 'Origin',
              description:
                'Plant Breeding Institute, Cambridge, United Kingdom',
            },
            { term: 'Introduced', description: '1972' },
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'This page summarizes documented history and classification. It does not restate the disease-resistance or yield characteristics attributed to the variety in its era, and it makes no agronomic-performance claims.',
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'climate', slug: 'chilling-requirement' },
  ],
  geographicScope:
    'Documented United Kingdom winter bread wheat, historically widely grown in the 1970s; adaptation and performance are region- and season-specific.',
  climateContext:
    'A winter bread wheat adapted to the temperate maritime climate of the United Kingdom.',
  limitations: [
    'Adaptation and trait notes are region- and season-specific, and performance varies by environment.',
    'Maris Huntsman is a heritage cultivar that has been superseded; its current commercial registration status is not asserted here.',
  ],
  sourceReferences: [
    {
      sourceId: 'ahdb',
      citedFor: 'United Kingdom winter wheat variety and agronomy context',
    },
    {
      sourceId: 'ncbi-taxonomy',
      citedFor: 'Classification of Triticum aestivum',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Maris Huntsman (winter wheat cultivar)',
    description:
      'Maris Huntsman, a British winter bread wheat introduced in 1972 by the Plant Breeding Institute, Cambridge, and widely grown across the UK in the 1970s.',
    keywords: [
      'Maris Huntsman wheat',
      'winter wheat cultivar',
      'Plant Breeding Institute',
      'British wheat',
    ],
  },
  structuredData: { article: true },
};
