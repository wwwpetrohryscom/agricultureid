import type { BreedContent } from '@/types/content';

export const haflinger: BreedContent = {
  id: 'haflinger',
  slug: 'haflinger',
  contentType: 'breed',
  title: 'Haflinger',
  scientificName: 'Equus caballus',
  alternativeNames: ['Avelignese'],
  category: 'Horse breed',
  summary:
    'The Haflinger is a small, hardy mountain horse breed from the Tyrol region of Austria and northern Italy, recognisable by its chestnut coat with flaxen mane and tail, and valued as a versatile, good-natured working and riding horse.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Haflinger is a compact, sturdy horse breed developed in the mountainous South Tyrol region straddling present-day Austria and northern Italy, where it takes its name from the village of Hafling (Avelengo). Bred for hardiness and sure-footedness in alpine terrain, it combines pony-like size with a strong, horse-like build.',
    },
    {
      type: 'paragraph',
      text: 'Always chestnut with a distinctive pale flaxen mane and tail, the Haflinger is known for a gentle, willing temperament, longevity, and versatility. All modern Haflingers trace to a single foundation stallion, and the breed is now used for light draught, driving, riding, and therapeutic and leisure work worldwide.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Horse (Equus caballus)' },
    { label: 'Type', value: 'Small mountain horse / light draught and riding' },
    { label: 'Origin', value: 'South Tyrol (Austria and northern Italy)' },
    { label: 'Colour', value: 'Chestnut with flaxen mane and tail' },
    {
      label: 'Foundation',
      value: 'All lines trace to one foundation stallion',
    },
    {
      label: 'Noted for',
      value: 'Hardiness, sure-footedness, gentle temperament',
    },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'The Haflinger was systematically developed in the South Tyrol from the late 19th century; every registered Haflinger descends from the foundation stallion 249 Folie, foaled in 1874. Historically used as a pack and farm horse in steep alpine country, the breed spread across Europe and beyond during the 20th century and is maintained through national breeding associations and the World Haflinger Federation.',
        },
      ],
    },
    {
      id: 'appearance-and-characteristics',
      heading: 'Appearance and characteristics',
      body: [
        {
          type: 'list',
          items: [
            'A small but robust horse of pony-to-small-horse height, with a deep, muscular body and strong legs.',
            'Invariably a chestnut coat, ranging from light gold to rich liver, with a pale flaxen mane and tail.',
            'A refined head, expressive eyes, and sure-footed, active gaits suited to hills.',
            'A calm, willing, and people-friendly temperament noted for longevity.',
          ],
        },
      ],
    },
    {
      id: 'uses-and-management',
      heading: 'Uses and management',
      body: [
        {
          type: 'paragraph',
          text: 'The Haflinger is highly versatile, used for light draught and farm work, carriage driving, trail and pleasure riding, and children’s and therapeutic riding, as well as some competitive disciplines. Its hardiness and easy keeping suit smallholder and mountain conditions, though like many hardy breeds it can be prone to weight gain on rich pasture and benefits from managed grazing.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Breed traits are general; height, build, and aptitude vary between more draught-type and riding-type lines. Individual management depends on workload and pasture.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'horses' },
  species: 'Horse (Equus caballus)',
  breedType: 'Pony',
  originCountry: 'Austria',
  originRegion: 'South Tyrol (Austria and northern Italy)',
  breedStatus: 'registered',
  conservationStatus: 'unknown',
  registryReferences: [
    {
      registry: 'FAO DAD-IS',
      sourceId: 'fao-dad-is',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Horse breed recorded in the global domestic animal diversity inventory.',
    },
    {
      registry: 'World Haflinger Federation and national breeding associations',
      jurisdiction: 'Global',
      note: 'International coordination of Haflinger studbooks and standards.',
    },
  ],
  primaryUses: [
    'Light draught and farm work',
    'Carriage driving and pleasure/trail riding',
    'Children’s, leisure, and therapeutic riding',
  ],
  physicalCharacteristics:
    'A small, deep-bodied, muscular horse of pony-to-small-horse height, always chestnut with a flaxen mane and tail, with a refined head, strong legs, and sure-footed gaits.',
  productionCharacteristics:
    'A versatile working and riding animal rather than a food-producing one; valued for hardiness, easy keeping, longevity, and a gentle temperament.',
  climateAdaptation:
    'Developed for cold, steep alpine environments and noted for hardiness and sure-footedness; adapts well to a range of climates as an easy keeper.',
  managementContext:
    'A hardy, low-maintenance breed suited to smallholder and mountain use; as an easy keeper it can gain weight on rich pasture and benefits from managed grazing and appropriate workload.',
  geographicDistribution:
    'Bred in Austria and northern Italy and kept widely across Europe, North America, and elsewhere for driving, riding, and leisure use.',
  connections: [
    { type: 'crop', slug: 'oats' },
    { type: 'crop', slug: 'barley' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'climate', slug: 'frost' },
  ],
  glossaryTerms: ['forage'],
  geographicScope:
    'Global breed overview; studbooks and standards vary by country under international coordination.',
  climateContext:
    'Suited by origin to cold alpine climates; hardy and adaptable across temperate and mountain conditions.',
  limitations: [
    'This is a general breed profile, not veterinary or detailed husbandry guidance.',
    'Draught-type and riding-type lines differ in height and build; descriptions are qualitative generalisations.',
    'Conservation risk status is not asserted here because it varies by country and population.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Breed recording and global diversity status',
    },
    {
      sourceId: 'britannica',
      citedFor: 'Breed origin, history, and general characteristics',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Haflinger (horse breed)',
    description:
      'The Haflinger: a hardy chestnut mountain horse from the Tyrol with a flaxen mane and tail, versatile and gentle — origin, traits, uses, and management.',
    keywords: ['Haflinger horse', 'mountain horse', 'chestnut breed', 'Tyrol'],
  },
  structuredData: { article: true },
};
