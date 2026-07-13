import type { BreedContent } from '@/types/content';

export const lincolnLongwool: BreedContent = {
  id: 'lincoln-longwool',
  slug: 'lincoln-longwool',
  contentType: 'breed',
  title: 'Lincoln Longwool',
  category: 'Sheep breed',
  parentLivestock: { type: 'livestock', slug: 'sheep' },
  species: 'Sheep (Ovis aries)',
  breedType: 'Wool',
  originCountry: 'United Kingdom',
  originRegion: 'Lincolnshire, England',
  breedStatus: 'registered',
  conservationStatus: 'unknown',
  summary:
    'The Lincoln Longwool is a large English longwool sheep breed from Lincolnshire, producing a very long, heavy, lustrous fleece; historically influential in developing other breeds and now regarded as a rare breed in several national registries.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Lincoln Longwool, also called the Lincoln, is a longwool breed from Lincolnshire in eastern England. It is one of the largest sheep breeds and is known above all for a very long, heavy, and lustrous fleece.',
    },
    {
      type: 'paragraph',
      text: 'Historically the Lincoln was widely used to add size and long, lustrous wool to other sheep, and it contributed to the development of many breeds internationally, including dual-purpose crossbreds founded on longwool × Merino crosses. In its homeland and elsewhere it is now a numerically small breed monitored by rare-breed and conservation organisations.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Sheep (Ovis aries)' },
    { label: 'Origin', value: 'Lincolnshire, England' },
    { label: 'Breed type', value: 'Wool (longwool)' },
    {
      label: 'Primary uses',
      value: 'Long, lustrous wool; historically breed improvement',
    },
    {
      label: 'Notable trait',
      value: 'Very large size; long, heavy, lustrous fleece',
    },
    {
      label: 'Registry',
      value: 'Lincoln Longwool Sheep Breeders’ Association; FAO DAD-IS',
    },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'The Lincoln developed in the rich lowland grazing of Lincolnshire and was improved over time, including through the influence of the improved Leicester longwool. It became renowned for size and heavy, lustrous wool and was exported widely in the nineteenth and twentieth centuries, where it was used to found or improve numerous breeds, particularly dual-purpose halfbreds combining longwool and Merino ancestry.',
        },
      ],
    },
    {
      id: 'characteristics',
      heading: 'Physical and production characteristics',
      body: [
        {
          type: 'paragraph',
          text: 'Lincoln Longwools are among the largest sheep breeds, white and polled, carrying a distinctive long, wavy or curled, lustrous fleece of coarse longwool. The breed is kept chiefly for this heavy, long-stapled wool, which is used for purposes suited to lustrous coarse wool.',
        },
        {
          type: 'paragraph',
          text: 'The breed’s size and wool made it historically valuable as an improver of other breeds, a role reflected in the ancestry of several dual-purpose sheep worldwide.',
        },
      ],
    },
    {
      id: 'conservation-and-distribution',
      heading: 'Conservation and distribution',
      body: [
        {
          type: 'paragraph',
          text: 'Once far more numerous, the Lincoln Longwool is now a numerically small breed. It is listed by rare-breed and conservation organisations in its homeland and in other countries, which monitor such breeds because of their limited populations and heritage value. It is kept in the United Kingdom and in smaller numbers in North America, Australasia, and elsewhere.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Conservation categories for the Lincoln Longwool differ between organisations and change over time; this record does not assign a single risk category and instead notes that the breed is monitored as a rare breed.',
        },
      ],
    },
  ],
  registryReferences: [
    {
      registry: 'FAO DAD-IS',
      sourceId: 'fao-dad-is',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Lincoln Longwool and its national populations are recorded in the global breed inventory.',
    },
    {
      registry: 'Lincoln Longwool Sheep Breeders’ Association',
      jurisdiction: 'United Kingdom',
      asOf: '2026-07-12',
      note: 'UK breed society maintaining the flock book; associations exist in other countries.',
    },
    {
      registry: 'The Livestock Conservancy',
      sourceId: 'livestock-conservancy',
      jurisdiction: 'United States',
      asOf: '2026-07-12',
      note: 'US conservation organisation that monitors the Lincoln as a rare breed; category is date- and source-specific.',
    },
  ],
  primaryUses: [
    'Long, lustrous longwool',
    'Historically breed improvement',
    'Heritage and conservation flocks',
  ],
  physicalCharacteristics:
    'One of the largest sheep breeds; white, polled, carrying a long, wavy to curled, lustrous fleece of coarse longwool.',
  productionCharacteristics:
    'Kept chiefly for heavy, long-stapled lustrous wool; historically important as an improver of other breeds.',
  climateAdaptation:
    'Associated with rich lowland grazing; a large breed suited to productive temperate pasture.',
  managementContext:
    'Managed today largely in heritage, pedigree, and conservation flocks, alongside wool production.',
  geographicDistribution:
    'Kept in the United Kingdom and in smaller numbers in North America, Australasia, and other regions.',
  connections: [
    { type: 'breed', slug: 'corriedale' },
    { type: 'farming-system', slug: 'mixed-farming' },
  ],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Global in influence; English in origin and now a numerically small breed.',
  climateContext:
    'Productive lowland temperate pasture; a large-framed longwool breed.',
  limitations: [
    'Conservation categories for the Lincoln Longwool differ between organisations and over time; a single risk category is not asserted here.',
    'Wool and size characteristics vary with strain and management; general descriptions are indicative only.',
    'Historical breed-improvement influence is well documented in general terms but specific contributions vary by derived breed.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor:
        'Breed record, origin, and characteristics in the global inventory',
    },
    {
      sourceId: 'livestock-conservancy',
      citedFor: 'Rare-breed conservation context',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General historical and background context',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Lincoln Longwool (sheep breed)',
    description:
      'The Lincoln Longwool, a large English longwool with a heavy lustrous fleece that shaped many breeds and is now rare: origin, wool traits, and conservation.',
    keywords: [
      'Lincoln Longwool',
      'longwool breed',
      'rare breed',
      'lustre wool',
    ],
  },
  structuredData: { article: true },
};
