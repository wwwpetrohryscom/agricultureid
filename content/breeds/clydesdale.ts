import type { BreedContent } from '@/types/content';

export const clydesdale: BreedContent = {
  id: 'clydesdale',
  slug: 'clydesdale',
  contentType: 'breed',
  title: 'Clydesdale',
  scientificName: 'Equus caballus',
  category: 'Horse breed',
  summary:
    'The Clydesdale is a Scottish draught horse breed from the valley of the River Clyde, known for its size, feathered legs, high-stepping action, and bay coats with bold white markings.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Clydesdale is a heavy draught horse breed that originated in Lanarkshire, Scotland, in the valley (or "strath") of the River Clyde, from which it takes its name. It was developed in the 18th and 19th centuries by crossing local mares with heavier imported stallions to produce a powerful farm and haulage horse.',
    },
    {
      type: 'paragraph',
      text: 'Famous for its imposing size, abundant leg feathering, and showy, high-stepping gait, the Clydesdale is typically bay with white face and leg markings. Once central to agriculture and urban haulage, it is now kept for showing, driving, promotion, and heritage work, and its numbers are monitored by conservation organisations.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Horse (Equus caballus)' },
    { label: 'Type', value: 'Heavy draught horse' },
    { label: 'Origin', value: 'Scotland (Clyde valley, Lanarkshire)' },
    {
      label: 'Distinctive traits',
      value: 'Feathered legs; high-stepping action',
    },
    { label: 'Typical colour', value: 'Bay with white face and leg markings' },
    { label: 'Registry', value: 'Clydesdale Horse Society' },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'The Clydesdale was developed in south-west Scotland from the late 1700s, with Flemish and later Shire influence adding size and power. The Clydesdale Horse Society was founded in 1877 to maintain the studbook. The breed was exported widely for farm and city draught work; mechanisation later reduced working numbers sharply, and conservation bodies such as the Rare Breeds Survival Trust in the United Kingdom and The Livestock Conservancy in North America monitor the breed today.',
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
            'A tall, powerful draught horse with a strong, well-arched neck and muscular build.',
            'Long, silky feathering on the lower legs and distinctive flashy white markings on the face and legs.',
            'A characteristically active, high-stepping gait uncommon among heavy breeds.',
            'A generally docile, tractable temperament suited to handling and driving.',
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
          text: 'Historically a farm and haulage horse, the Clydesdale is now used chiefly for showing, carriage and team driving, parades and promotion, forestry, and heritage demonstrations. Its size means substantial feed and space requirements, and the heavy leg feathering benefits from careful management to keep the skin beneath clean and dry. As a draught breed with reduced working demand, it depends on breeders and enthusiasts to sustain its population.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'The breed is a conservation-priority draught horse in several countries; specific risk categories differ between national conservation bodies and are not asserted as a single status here.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'horses' },
  species: 'Horse (Equus caballus)',
  breedType: 'Draught',
  originCountry: 'United Kingdom',
  originRegion: 'Scotland (Clyde valley, Lanarkshire)',
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
      registry: 'The Livestock Conservancy',
      sourceId: 'livestock-conservancy',
      jurisdiction: 'United States',
      note: 'Draught breed monitored on the Conservation Priority List.',
    },
    {
      registry: 'Clydesdale Horse Society',
      jurisdiction: 'United Kingdom',
      note: 'Breed studbook maintained since 1877.',
    },
  ],
  primaryUses: [
    'Showing and exhibition',
    'Carriage and team driving; parades and promotion',
    'Forestry, heritage draught work, and breeding',
  ],
  physicalCharacteristics:
    'A tall, muscular draught horse with a strong arched neck, heavy silky leg feathering, and bold white face and leg markings, most often on a bay coat; noted for an active, high-stepping gait.',
  productionCharacteristics:
    'A draught and exhibition animal, not a food-producing one; valued for pulling power, presence, and a docile working temperament.',
  climateAdaptation:
    'Suited to cool, temperate climates of its origin; the dense feathering and large body require dry footing and management in wet or hot conditions.',
  managementContext:
    'Needs ample feed, space, and sturdy handling facilities; leg feathering requires attention to skin health. Populations are sustained largely by showing, driving, and heritage interest.',
  geographicDistribution:
    'Kept in the United Kingdom, North America, Australia, and elsewhere, largely for showing, driving, and promotional work rather than farm draught.',
  connections: [
    { type: 'crop', slug: 'oats' },
    { type: 'crop', slug: 'barley' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'climate', slug: 'frost' },
  ],
  glossaryTerms: ['forage'],
  geographicScope:
    'Global breed overview; studbooks and conservation categories vary by country and organisation.',
  climateContext:
    'Best suited to cool, temperate climates; heavy feathering and size call for dry, managed conditions.',
  limitations: [
    'This is a general breed profile, not veterinary or detailed husbandry guidance.',
    'Conservation status differs between national bodies (for example RBST and The Livestock Conservancy) and is not asserted here as a single global category.',
    'Trait descriptions are qualitative and vary by bloodline and management.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Breed recording and global diversity status',
    },
    {
      sourceId: 'livestock-conservancy',
      citedFor: 'Draught-breed conservation context',
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
    title: 'Clydesdale (horse breed)',
    description:
      'The Clydesdale: a Scottish draught horse with feathered legs, high-stepping action, and bold white markings — origin, traits, uses, and conservation.',
    keywords: [
      'Clydesdale horse',
      'draught horse',
      'Scottish breed',
      'heavy horse',
    ],
  },
  structuredData: { article: true },
};
