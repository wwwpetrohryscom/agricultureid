import type { CultivarContent } from '@/types/content';

export const yecoraRojo: CultivarContent = {
  id: 'yecora-rojo',
  slug: 'yecora-rojo',
  contentType: 'cultivar',
  title: 'Yecora Rojo',
  acceptedName: 'Yecora Rojo',
  category: 'Wheat cultivar',
  parentCrop: { type: 'crop', slug: 'wheat' },
  botanicalTaxon: 'Triticum aestivum',
  cultivarType: 'Cultivar',
  breedingType: 'Cross-breeding (pedigree selection)',
  originCountry: 'Mexico',
  originRegion:
    'CIMMYT spring-wheat program (developed in Mexico; first released in California, United States)',
  yearReleased: '1975',
  breederOrInstitution:
    'CIMMYT (International Maize and Wheat Improvement Center)',
  registrationStatus: 'historical',
  registrationAsOf: '2026-07-12',
  registryReferences: [
    {
      registry: 'USDA GRIN — National Small Grains Collection',
      sourceId: 'usda-grin',
      jurisdiction: 'United States',
      asOf: '2026-07-12',
      note: 'Hard red spring wheat conserved as germplasm; genebank presence reflects conservation rather than current commercial registration.',
    },
  ],
  maturityClass:
    'Medium (early-maturing in its adapted low-desert environments)',
  growthHabit: 'Spring',
  intendedUse: [
    'Bread wheat for milling and flour',
    'Grown in hot, irrigated low-desert environments',
  ],
  climateAdaptation:
    'Semi-dwarf hard red spring wheat adapted to hot, irrigated low-desert conditions; grown in the southwestern United States (California and Arizona) and other warm, irrigated regions.',
  qualityTraits: [
    'Hard red spring wheat valued for milling and bread flour',
    'Noted for characteristically high grain protein in its adapted environments',
  ],
  geographicAvailability:
    'Historically grown in the low-desert southwestern United States and other warm irrigated regions; also popular with artisan and specialty millers and bakers.',
  summary:
    'Yecora Rojo is a CIMMYT-derived semi-dwarf hard red spring bread wheat released in 1975, adapted to hot, irrigated low-desert conditions and noted for its milling quality and characteristically high grain protein.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Yecora Rojo is a semi-dwarf hard red spring bread wheat (Triticum aestivum) developed from the spring-wheat germplasm of CIMMYT, the International Maize and Wheat Improvement Center, in cooperation with Mexican agricultural research. A red-grained selection related to the earlier line Yecora, it was released in 1975 and first grown commercially in California.',
    },
    {
      type: 'paragraph',
      text: 'The cultivar is short-statured and well suited to hot, irrigated low-desert environments, where it has been grown across the southwestern United States and comparable regions. It is valued for its milling and bread-baking quality and is often noted for a high grain-protein content, which has also made it popular among artisan and specialty bakers.',
    },
  ],
  keyFacts: [
    { label: 'Crop', value: 'Wheat (bread wheat, Triticum aestivum)' },
    { label: 'Type', value: 'Semi-dwarf hard red spring wheat cultivar' },
    {
      label: 'Developed by',
      value: 'CIMMYT (International Maize and Wheat Improvement Center)',
    },
    {
      label: 'Released',
      value: '1975 (first grown commercially in California)',
    },
    { label: 'Growth habit', value: 'Spring' },
    { label: 'Adaptation', value: 'Hot, irrigated low-desert environments' },
    {
      label: 'Quality note',
      value: 'Milling and baking quality; often high grain protein',
    },
  ],
  sections: [
    {
      id: 'history-and-development',
      heading: 'History and development',
      body: [
        {
          type: 'paragraph',
          text: 'Yecora Rojo was developed from CIMMYT spring-wheat germplasm whose semi-dwarf background traces to the international breeding lines that followed the introduction of reduced-height alleles into wheat. A red-grained ("rojo") selection related to the line Yecora, it was released in 1975 and first grown commercially in the low-desert regions of California.',
        },
        {
          type: 'paragraph',
          text: 'It went on to be grown widely in the southwestern United States and other warm, irrigated regions, and remains available through specialty and heritage grain channels.',
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
            { term: 'Market class', description: 'Hard red spring wheat' },
            {
              term: 'Plant stature',
              description: 'Semi-dwarf (short-statured)',
            },
            { term: 'Growth habit', description: 'Spring' },
            {
              term: 'Adaptation',
              description: 'Hot, irrigated low-desert conditions',
            },
          ],
        },
      ],
    },
    {
      id: 'adaptation-and-use',
      heading: 'Adaptation and use',
      body: [
        {
          type: 'paragraph',
          text: 'Yecora Rojo is grown chiefly under irrigation in hot, low-elevation desert environments, and is milled into bread flour. Its reputation for high grain protein and strong baking performance has kept it in demand among artisan millers and bakers as well as in commercial production.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Grain protein and other quality attributes vary with environment, nitrogen supply, and season; the descriptions here are general characteristics rather than guaranteed values.',
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'climate', slug: 'heat-stress' },
  ],
  geographicScope:
    'Documented CIMMYT-derived hard red spring wheat grown mainly in hot, irrigated low-desert regions; adaptation and grain quality are environment- and season-specific.',
  climateContext:
    'Semi-dwarf spring wheat adapted to hot, irrigated low-desert conditions.',
  limitations: [
    'Adaptation and trait notes are region- and season-specific, and performance varies by environment.',
    'Grain-protein and quality descriptions are general characteristics; the current commercial registration status of the cultivar is not asserted here.',
  ],
  sourceReferences: [
    {
      sourceId: 'cimmyt',
      citedFor: 'Semi-dwarf spring-wheat germplasm background and development',
    },
    {
      sourceId: 'usda-grin',
      citedFor:
        'Hard red spring wheat germplasm accession and characterization',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Yecora Rojo (hard red spring wheat cultivar)',
    description:
      'Yecora Rojo, a CIMMYT-derived semi-dwarf hard red spring wheat released in 1975 for hot, irrigated low-desert conditions and noted for high grain protein.',
    keywords: [
      'Yecora Rojo wheat',
      'hard red spring wheat',
      'CIMMYT wheat',
      'desert wheat cultivar',
    ],
  },
  structuredData: { article: true },
};
