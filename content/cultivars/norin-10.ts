import type { CultivarContent } from '@/types/content';

export const norin10: CultivarContent = {
  id: 'norin-10',
  slug: 'norin-10',
  contentType: 'cultivar',
  title: 'Norin 10',
  acceptedName: 'Norin 10',
  category: 'Wheat cultivar',
  parentCrop: { type: 'crop', slug: 'wheat' },
  botanicalTaxon: 'Triticum aestivum',
  cultivarType: 'Cultivar',
  breedingType: 'Cross-breeding (pedigree selection)',
  originCountry: 'Japan',
  originRegion: 'Iwate Prefecture',
  yearReleased: '1935',
  breederOrInstitution:
    'Gonjiro Inazuka; registered by the Japanese Ministry of Agriculture and Forestry',
  registrationStatus: 'historical',
  registrationAsOf: '2026-07-12',
  registryReferences: [
    {
      registry: 'USDA GRIN — National Small Grains Collection',
      sourceId: 'usda-grin',
      jurisdiction: 'United States',
      asOf: '2026-07-12',
      note: 'Introduced to the United States after 1945 by S. C. Salmon and conserved as germplasm; genebank presence reflects conservation, not commercial registration.',
    },
  ],
  intendedUse: [
    'Bread wheat',
    'Foundational breeding parent for semi-dwarf ("Green Revolution") wheats',
  ],
  qualityTraits: [
    'Semi-dwarf plant stature (roughly 60–110 cm), much shorter than the tall wheats of its era',
  ],
  summary:
    'Norin 10 is a historic Japanese semi-dwarf bread wheat, registered in 1935, whose reduced-height alleles were later introduced to Western breeding programs and became foundational to the semi-dwarf wheats of the Green Revolution.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Norin 10 is a semi-dwarf bread wheat (Triticum aestivum) bred by Gonjiro Inazuka at an agricultural experiment station in Iwate Prefecture, Japan, and registered as a numbered cultivar by the Japanese Ministry of Agriculture and Forestry in 1935. It is much shorter than the tall wheats that preceded it, reaching roughly 60 to 110 centimeters.',
    },
    {
      type: 'paragraph',
      text: 'After the Second World War the agronomist Samuel Cecil Salmon collected Norin 10 in Japan and sent it to the United States, where Orville Vogel used it in wheat breeding at Washington State. Its reduced-height alleles subsequently reached the international spring-wheat program associated with Norman Borlaug and became central to the semi-dwarf wheats of the Green Revolution.',
    },
  ],
  keyFacts: [
    { label: 'Crop', value: 'Wheat (bread wheat, Triticum aestivum)' },
    { label: 'Type', value: 'Semi-dwarf bread wheat cultivar' },
    { label: 'Origin', value: 'Japan (Iwate Prefecture)' },
    {
      label: 'Registered',
      value: '1935 (Japanese Ministry of Agriculture and Forestry)',
    },
    {
      label: 'Reduced-height alleles',
      value: 'Rht-B1b and Rht-D1b (formerly Rht1 and Rht2)',
    },
    { label: 'Introduced to the West', value: 'By S. C. Salmon after 1945' },
    {
      label: 'Registry status',
      value: 'Historical (heritage cultivar; conserved as germplasm)',
    },
  ],
  sections: [
    {
      id: 'history-and-development',
      heading: 'History and development',
      body: [
        {
          type: 'paragraph',
          text: 'Norin 10 was developed in Japan by Gonjiro Inazuka and registered as a numbered "Norin" cultivar by the national Ministry of Agriculture and Forestry in 1935. Its striking feature was its short stature, which set it apart from the tall wheats then in general cultivation.',
        },
        {
          type: 'paragraph',
          text: 'Norin 10 came to international attention when Samuel Cecil Salmon collected it in occupied Japan and forwarded seed to breeders in the United States. There it entered the breeding lines used by Orville Vogel and, through derived materials, the international wheat program in Mexico.',
        },
      ],
    },
    {
      id: 'reduced-height-genes-and-legacy',
      heading: 'Reduced-height genes and legacy',
      body: [
        {
          type: 'paragraph',
          text: 'Norin 10 is the classic source of two reduced-height alleles, now designated Rht-B1b and Rht-D1b (historically Rht1 and Rht2). These alleles shorten the straw and were widely incorporated into modern wheats. Because of this, Norin 10 is remembered less as a commercial variety than as one of the most influential breeding parents in the history of wheat improvement.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'The reduced-height alleles are described here as a documented genetic and historical characteristic. This page does not make comparative yield or agronomic-performance claims.',
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'climate', slug: 'wind' },
  ],
  geographicScope:
    'Documented Japanese semi-dwarf bread wheat cultivar of historical and breeding importance; its influence is global through derived cultivars rather than through direct cultivation today.',
  climateContext:
    'Originating in temperate Japan; significant chiefly as a source of reduced-height alleles used across many wheat-growing environments.',
  limitations: [
    'Adaptation and trait notes are region- and season-specific, and performance varies by environment.',
    'Norin 10 is significant mainly as a historical breeding parent; its own commercial cultivation status is not asserted here.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-grin',
      citedFor: 'Wheat genetic-stock/germplasm accession and characterization',
    },
    {
      sourceId: 'cimmyt',
      citedFor:
        'Role of Norin 10 reduced-height alleles in semi-dwarf (Green Revolution) wheat breeding',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Norin 10 (semi-dwarf wheat cultivar)',
    description:
      'Norin 10, the Japanese semi-dwarf wheat registered in 1935 whose Rht reduced-height alleles became foundational to Green Revolution wheat breeding.',
    keywords: [
      'Norin 10 wheat',
      'semi-dwarf wheat',
      'Rht reduced-height genes',
      'Green Revolution wheat',
    ],
  },
  structuredData: { article: true },
};
