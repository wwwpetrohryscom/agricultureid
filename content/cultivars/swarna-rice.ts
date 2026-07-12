import type { CultivarContent } from '@/types/content';

export const swarnaRice: CultivarContent = {
  id: 'swarna-rice',
  slug: 'swarna-rice',
  contentType: 'cultivar',
  title: 'Swarna',
  acceptedName: 'MTU 7029',
  alternativeNames: ['MTU 7029'],
  category: 'Rice cultivar',
  summary:
    'Swarna (MTU 7029) is a long-duration semi-dwarf indica rice developed at Maruteru, Andhra Pradesh, and released in India. It became one of the most widely grown rice varieties in the country and is the recurrent parent of the flood-tolerant variety Swarna-Sub1.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Swarna, also known by its breeding designation MTU 7029, is a long-duration semi-dwarf indica rice variety developed at the rice research station in Maruteru, Andhra Pradesh, India. It became one of the most widely cultivated rice varieties across large parts of India, valued for its lowland adaptation and market-accepted grain.',
    },
    {
      type: 'paragraph',
      text: 'Swarna is also notable in breeding history as the recurrent parent of Swarna-Sub1, a submergence-tolerant version developed by introducing a flood-tolerance locus. This page describes Swarna itself; performance in any specific field depends on local environment and management.',
    },
  ],
  keyFacts: [
    { label: 'Parent species', value: 'Rice (Oryza sativa)' },
    { label: 'Varietal group', value: 'Indica' },
    { label: 'Breeding designation', value: 'MTU 7029 (MTU = Maruteru)' },
    { label: 'Origin', value: 'Maruteru, Andhra Pradesh, India' },
    { label: 'Parentage', value: 'Vasishta × Mahsuri' },
    { label: 'Maturity', value: 'Long-duration' },
    {
      label: 'Registry status',
      value: 'Released and notified variety in India',
    },
    { label: 'Primary use', value: 'Staple food grain' },
  ],
  sections: [
    {
      id: 'origin-and-breeding-history',
      heading: 'Origin and breeding history',
      body: [
        {
          type: 'paragraph',
          text: 'Swarna was developed at the regional rice research station at Maruteru in Andhra Pradesh, India; the designation MTU 7029 reflects this Maruteru origin. It was bred from a cross between the varieties Vasishta and Mahsuri and released in India, where it went on to be grown across many states, particularly in lowland rice systems.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Origin',
              description:
                'Regional Agricultural Research Station, Maruteru, Andhra Pradesh, India',
            },
            { term: 'Breeding designation', description: 'MTU 7029' },
            { term: 'Parentage', description: 'Vasishta × Mahsuri' },
            { term: 'Varietal group', description: 'Indica' },
          ],
        },
      ],
    },
    {
      id: 'characteristics-and-adaptation',
      heading: 'Characteristics and adaptation',
      body: [
        {
          type: 'paragraph',
          text: 'Swarna is a long-duration, semi-dwarf variety with a non-lodging plant type, adapted to irrigated and shallow rainfed lowland conditions. It produces a medium-slender white grain and is valued in Indian markets for its milling and grain characteristics. Its wide adaptation across lowland environments contributed to its status as one of India’s most widely grown rice varieties.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Long-duration varieties require a correspondingly long growing season and reliable water; their suitability depends on the local cropping calendar and water availability.',
        },
      ],
    },
    {
      id: 'swarna-sub1-and-legacy',
      heading: 'Swarna-Sub1 and legacy',
      body: [
        {
          type: 'paragraph',
          text: 'Swarna is widely known as the recurrent parent of Swarna-Sub1, a version developed by introgressing the SUB1 locus, which confers tolerance to temporary complete submergence. Swarna-Sub1 was developed for flood-prone lowlands where standing floodwater can otherwise destroy a rice crop. Swarna-Sub1 is a distinct, related variety; the submergence-tolerance trait belongs to it rather than to standard Swarna.',
        },
        {
          type: 'paragraph',
          text: 'This breeding history illustrates how a widely adopted variety can serve as the genetic background into which a specific stress-tolerance trait is added while retaining the qualities that made the original popular.',
        },
      ],
    },
    {
      id: 'classification-and-status',
      heading: 'Classification and status',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Botanical taxon',
              description: 'Oryza sativa (indica group)',
            },
            { term: 'Cultivar type', description: 'Inbred line (indica)' },
            {
              term: 'Registry status',
              description: 'Released and notified as a rice variety in India',
            },
            {
              term: 'Registration note',
              description:
                'Registration is separate from availability or recommendation; specific notification identifiers are not reproduced here',
            },
          ],
        },
      ],
    },
  ],
  parentCrop: { type: 'crop', slug: 'rice' },
  botanicalTaxon: 'Oryza sativa (indica group)',
  cultivarType: 'Inbred line (indica)',
  breedingType: 'Cross-breeding (pedigree selection)',
  originCountry: 'India',
  originRegion: 'Maruteru, Andhra Pradesh',
  breederOrInstitution:
    'Regional Agricultural Research Station, Maruteru, Andhra Pradesh (India)',
  registrationStatus: 'registered',
  registrationJurisdiction: 'India',
  registrationAsOf: '2026-07-12',
  registryReferences: [
    {
      registry:
        'India — national variety release and notification system (ICAR)',
      sourceId: 'icar',
      jurisdiction: 'India',
      asOf: '2026-07-12',
      note: 'Swarna (MTU 7029) is a released and notified rice variety in India. Registration is separate from availability or recommendation; specific notification identifiers are not reproduced here.',
    },
  ],
  maturityClass: 'Long-duration',
  growthHabit: 'Semi-dwarf, non-lodging',
  intendedUse: ['Staple food grain'],
  climateAdaptation:
    'Irrigated and shallow rainfed lowland conditions in the tropics',
  soilAdaptation: 'Puddled lowland (paddy) soils',
  qualityTraits: [
    'Medium-slender white grain',
    'Valued in Indian markets for milling and grain characteristics',
  ],
  connections: [
    { type: 'irrigation-method', slug: 'surface-irrigation' },
    { type: 'soil-topic', slug: 'waterlogging' },
    { type: 'nutrient', slug: 'nitrogen' },
  ],
  geographicScope:
    'Developed at Maruteru, Andhra Pradesh, and grown very widely across lowland rice regions of India; local suitability is region- and season-specific.',
  climateContext:
    'A long-duration lowland indica adapted to warm irrigated and shallow rainfed conditions; the related Swarna-Sub1 targets flood-prone lowlands.',
  limitations: [
    'Performance is environment- and management-specific; long-duration varieties in particular depend on a long growing season and reliable water.',
    'Submergence tolerance belongs to the related variety Swarna-Sub1, not to standard Swarna; the two should not be conflated.',
    'Registration in India indicates official release and notification only — it does not imply current availability, recommendation, or approval elsewhere.',
  ],
  sourceReferences: [
    {
      sourceId: 'icar',
      citedFor:
        'Swarna (MTU 7029) origin at Maruteru, parentage, and release/notification in India',
    },
    {
      sourceId: 'irri',
      citedFor:
        'Swarna-Sub1 submergence-tolerance breeding and lowland rice context',
    },
    { sourceId: 'gbif', citedFor: 'Species classification (Oryza sativa)' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Swarna / MTU 7029 (rice cultivar)',
    description:
      'Swarna (MTU 7029), a long-duration semi-dwarf indica rice from Maruteru, India: origin, parentage, lowland adaptation, and the Swarna-Sub1 line.',
    keywords: [
      'Swarna',
      'MTU 7029',
      'Indian rice variety',
      'Swarna-Sub1',
      'indica rice',
      'lowland rice',
    ],
  },
  structuredData: { article: true },
};
