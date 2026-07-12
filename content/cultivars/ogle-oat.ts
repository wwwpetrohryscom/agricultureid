import type { CultivarContent } from '@/types/content';

export const ogleOat: CultivarContent = {
  id: 'ogle-oat',
  slug: 'ogle-oat',
  contentType: 'cultivar',
  title: 'Ogle',
  acceptedName: 'Ogle',
  category: 'Oat cultivar',
  parentCrop: { type: 'crop', slug: 'oats' },
  botanicalTaxon: 'Avena sativa',
  cultivarType: 'Cultivar (self-pollinated pure line)',
  breedingType: 'Cross-breeding and pure-line selection',
  originCountry: 'United States',
  originRegion: 'Illinois',
  yearReleased: '1980',
  breederOrInstitution:
    'University of Illinois (with USDA-ARS); cultivar registration published 1983',
  registrationStatus: 'historical',
  registryReferences: [
    {
      registry: 'USDA GRIN',
      sourceId: 'usda-grin',
      jurisdiction: 'United States',
      asOf: '2026-07-12',
      note: 'Ogle is maintained as a public oat cultivar accession in the U.S. National Plant Germplasm System; specific record identifiers are not reproduced here.',
    },
  ],
  maturityClass: 'Spring oat',
  growthHabit: 'Annual, self-pollinating spring oat',
  intendedUse: [
    'Spring oat grown for grain (milling and feed)',
    'Forage and cover use',
    'Breeding and research reference',
  ],
  climateAdaptation:
    'Cool-season spring oat adapted to the temperate U.S. Midwest; as a spring type it is sown in spring rather than overwintered.',
  geographicAvailability:
    'A widely grown Midwestern spring oat in the 1980s, since largely superseded by newer cultivars; maintained as public germplasm.',
  summary:
    'Ogle is a public spring oat cultivar released by the University of Illinois around 1980. It became one of the more widely grown spring oats in the U.S. Midwest during the 1980s and is maintained as public germplasm.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Ogle is a spring oat (Avena sativa) cultivar developed by the University of Illinois, with USDA-ARS collaboration, and released around 1980; its formal cultivar registration was published in 1983. It was bred for the temperate U.S. Midwest, where oats are grown as a spring-sown cereal.',
    },
    {
      type: 'paragraph',
      text: 'Ogle became one of the more widely grown spring oat cultivars in the region during the 1980s. Like other cultivated oats, it is self-pollinating, so the cultivar is propagated as a stable pure line.',
    },
  ],
  keyFacts: [
    { label: 'Parent crop', value: 'Oats (Avena sativa)' },
    { label: 'Type', value: 'Public spring oat cultivar' },
    { label: 'Developed by', value: 'University of Illinois (with USDA-ARS)' },
    { label: 'Released', value: 'c. 1980 (registration published 1983)' },
    { label: 'Season type', value: 'Spring oat' },
    { label: 'Adaptation', value: 'Temperate U.S. Midwest' },
    { label: 'Registration status', value: 'Historical / public cultivar' },
  ],
  sections: [
    {
      id: 'development',
      heading: 'Development',
      body: [
        {
          type: 'paragraph',
          text: 'Ogle was developed in the University of Illinois oat program and released around 1980, with a cultivar registration published in 1983. It is a spring oat, sown in spring and harvested the same season, suited to the temperate growing conditions of the U.S. Midwest.',
        },
      ],
    },
    {
      id: 'use-and-status',
      heading: 'Use and status',
      body: [
        {
          type: 'paragraph',
          text: 'During the 1980s Ogle was a prominent spring oat in the U.S. Midwest, grown for grain used in milling and feed. As with most public cereal cultivars, it has since been largely superseded by newer varieties, but it is maintained in public germplasm collections and appears in oat breeding and research.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Historical public cultivar',
          text: 'Ogle is a historical public cultivar. Its agronomic performance is environment-specific, and current commercial recommendations should be based on up-to-date regional variety trials.',
        },
      ],
    },
  ],
  connections: [{ type: 'crop', slug: 'oats' }],
  relatedTopics: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'barley' },
  ],
  glossaryTerms: ['cultivar', 'annual-crop', 'forage', 'yield'],
  geographicScope:
    'Developed in Illinois, United States, for the temperate U.S. Midwest.',
  climateContext:
    'Cool-season spring oat adapted to temperate Midwestern growing conditions.',
  limitations: [
    'Ogle is a historical public cultivar largely superseded for commercial production; agronomic performance is environment-specific.',
    'Reported release/registration dates differ slightly between sources (around 1980, with registration published in 1983); the exact single-year release is therefore given approximately.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-grin',
      citedFor: 'Maintenance of Ogle as a public oat cultivar accession',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Development and registration of the Ogle spring oat cultivar (University of Illinois / USDA-ARS)',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Ogle (oat cultivar)',
    description:
      'Ogle is a public spring oat cultivar from the University of Illinois (released c. 1980, registered 1983) that was widely grown in the U.S. Midwest in the 1980s.',
    keywords: [
      'Ogle oat',
      'spring oat',
      'Avena sativa',
      'University of Illinois',
    ],
  },
  structuredData: { article: true },
};
