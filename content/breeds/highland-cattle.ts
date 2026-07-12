import type { BreedContent } from '@/types/content';

export const highlandCattle: BreedContent = {
  id: 'breed-highland-cattle',
  slug: 'highland-cattle',
  contentType: 'breed',
  title: 'Highland',
  category: 'Cattle breed',
  species: 'Cattle (Bos taurus)',
  alternativeNames: ['Highland cattle', 'Scottish Highland'],
  summary:
    'The Highland is a hardy Scottish beef breed with a long double coat and long horns, renowned for thriving in cold, wet, and harsh conditions and for use in conservation grazing.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Highland is a beef breed originating in the Highlands and Western Isles of Scotland, where a cold, wet, and often harsh environment shaped an exceptionally hardy animal. It is one of the oldest registered breeds, with a herd book established in the 19th century.',
    },
    {
      type: 'paragraph',
      text: 'Highlands are instantly recognisable by their long, wavy double coat and long, sweeping horns. Coat colour varies widely — including red, black, dun, yellow, brindle, and white — and the breed’s thick coat, rather than heavy fat cover, helps it withstand cold and wet weather.',
    },
  ],
  keyFacts: [
    { label: 'Breed type', value: 'Beef (hardy)' },
    { label: 'Species', value: 'Bos taurus' },
    { label: 'Origin', value: 'Highlands and Western Isles of Scotland' },
    {
      label: 'Coat',
      value: 'Long double coat; red, black, dun, yellow, brindle, or white',
    },
    { label: 'Horns', value: 'Long and sweeping' },
    {
      label: 'Notable trait',
      value: 'Hardiness in cold, wet conditions; longevity; foraging',
    },
    {
      label: 'Registries',
      value: 'FAO DAD-IS; Highland Cattle Society and national herd books',
    },
  ],
  sections: [
    {
      id: 'origin-and-development',
      heading: 'Origin and development',
      body: [
        {
          type: 'paragraph',
          text: 'The Highland developed in the demanding uplands and islands of western Scotland, where cattle had to withstand cold, wind, rain, and sparse grazing. The breed was formalised with a herd book in the 19th century and exported to other countries with cold or challenging climates.',
        },
        {
          type: 'paragraph',
          text: 'Its reputation for hardiness and its ability to use rough vegetation have made the Highland popular well beyond Scotland, including for conservation grazing of semi-natural habitats where robust, low-input cattle are needed.',
        },
      ],
    },
    {
      id: 'characteristics-and-use',
      heading: 'Characteristics and use',
      body: [
        {
          type: 'paragraph',
          text: 'Highlands are moderate-sized cattle with a long, weather-resistant double coat and long horns, in a wide range of coat colours. They are kept for beef and, increasingly, for conservation grazing and amenity, and are noted for a generally docile temperament despite their striking horns.',
        },
        {
          type: 'paragraph',
          text: 'The breed is valued for longevity, fertility, ease of calving, and the ability to produce beef from rough grazing and poor-quality forage that would not suit more specialised breeds. Highland beef is often marketed on the basis of these extensive, low-input origins.',
        },
      ],
    },
    {
      id: 'adaptation-and-management',
      heading: 'Adaptation and management',
      body: [
        {
          type: 'paragraph',
          text: 'The Highland is strongly adapted to cold, wet, and windy conditions, relying on its dense double coat for insulation, and is well able to forage on rough upland vegetation. These traits suit it to extensive, low-input systems and to habitat-management grazing.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Cold-hardiness and foraging ability are strong breed traits; the breed’s long horns require appropriate space and handling facilities, and management still needs to match the specific site and system.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'cattle' },
  breedType: 'Beef',
  originCountry: 'United Kingdom (Scotland)',
  originRegion: 'Highlands and Western Isles of Scotland',
  breedStatus: 'registered',
  conservationStatus: 'unknown',
  registryReferences: [
    {
      registry: 'FAO DAD-IS',
      sourceId: 'fao-dad-is',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Recorded internationally as a beef breed.',
    },
    {
      registry: 'Highland Cattle Society and national herd books',
      jurisdiction: 'Multiple',
      note: 'The breed society and national associations maintain the herd books; record identifiers are not asserted here.',
    },
  ],
  primaryUses: [
    'Beef production from rough grazing',
    'Conservation grazing and habitat management',
  ],
  physicalCharacteristics:
    'Moderate-sized cattle with a long, wavy, weather-resistant double coat and long, sweeping horns, in a wide range of coat colours including red, black, dun, yellow, brindle, and white.',
  productionCharacteristics:
    'A hardy beef breed valued for longevity, fertility, calving ease, and the ability to produce beef from rough grazing and poor forage rather than for rapid growth. Specific figures depend on line, nutrition, and system and are not stated here.',
  climateAdaptation:
    'Strongly adapted to cold, wet, and windy conditions through a dense double coat, and able to forage on rough upland vegetation.',
  managementContext:
    'Suited to extensive, low-input beef systems and conservation grazing; long horns require appropriate space and handling facilities.',
  geographicDistribution:
    'Native to Scotland and kept internationally, particularly in countries with cold or challenging climates and in conservation-grazing schemes.',
  connections: [
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'wind' },
  ],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Global overview of the breed; herd-book rules and management vary by country.',
  climateContext:
    'A cold- and wet-adapted beef breed developed in the Scottish uplands and islands.',
  limitations: [
    'Highland characteristics and performance vary with line, management, and environment; cold-hardiness and foraging ability are general strengths rather than fixed values.',
    'No growth, carcass, or fertility figures are stated here because they depend on genetics, nutrition, and system; current data should come from breed associations and recording.',
    'FAO DAD-IS records the Highland conservation status by country and population and updates it over time, so no single global risk category is assigned here (shown as unknown).',
    'Herd health, welfare, and breeding decisions are governed by local regulation and veterinary advice and fall outside this record.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Breed record and distribution',
    },
    {
      sourceId: 'ncbi-taxonomy',
      citedFor: 'Species-level taxonomy (Bos taurus)',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General breed history and description',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Highland (cattle breed)',
    description:
      'Highland cattle: hardy Scottish beef breed with a long double coat and long horns, thriving in cold, wet conditions and used for conservation grazing.',
    keywords: [
      'Highland cattle',
      'Scottish Highland',
      'hardy beef breed',
      'conservation grazing',
    ],
  },
  structuredData: { article: true },
};
