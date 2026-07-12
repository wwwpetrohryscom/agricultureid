import type { BreedContent } from '@/types/content';

export const aberdeenAngus: BreedContent = {
  id: 'breed-aberdeen-angus',
  slug: 'aberdeen-angus',
  contentType: 'breed',
  title: 'Aberdeen Angus',
  category: 'Cattle breed',
  species: 'Cattle (Bos taurus)',
  alternativeNames: ['Angus', 'Aberdeen-Angus'],
  summary:
    'The Aberdeen Angus is a naturally polled beef breed from north-eastern Scotland, known for its solid black (or red) coat, carcass quality, and widespread use as a maternal and terminal breed in crossbreeding.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Aberdeen Angus is a British beef breed developed in the counties of Aberdeenshire and Angus in north-eastern Scotland. It was consolidated in the 19th century from local polled cattle and became one of the most influential beef breeds worldwide, with a herd book that dates to the same era.',
    },
    {
      type: 'paragraph',
      text: 'The breed is naturally hornless (polled) and usually solid black, though a red variant is recognised and registered separately in some countries. Angus cattle are widely used both as purebreds and as crossing partners, in part because the polled and black traits are strongly heritable and marketable.',
    },
  ],
  keyFacts: [
    { label: 'Breed type', value: 'Beef' },
    { label: 'Species', value: 'Bos taurus' },
    {
      label: 'Origin',
      value: 'North-eastern Scotland (Aberdeenshire and Angus)',
    },
    { label: 'Coat', value: 'Solid black; a red variant is also recognised' },
    { label: 'Horns', value: 'Naturally polled (hornless)' },
    {
      label: 'Notable trait',
      value: 'Carcass quality and marbling; strong in crossbreeding',
    },
    { label: 'Registries', value: 'FAO DAD-IS; national Angus herd books' },
  ],
  sections: [
    {
      id: 'origin-and-development',
      heading: 'Origin and development',
      body: [
        {
          type: 'paragraph',
          text: 'The breed was developed from naturally polled black cattle in the north-east of Scotland and formalised through 19th-century improvement and the establishment of a herd book. Early breeders selected for a compact, early-maturing beef animal, and exports — notably to North America — established large Angus populations abroad.',
        },
        {
          type: 'paragraph',
          text: 'Both black and red lines exist; in several countries the Red Angus is registered as a separate population while sharing the same origin. National Angus associations now maintain herd books on multiple continents.',
        },
      ],
    },
    {
      id: 'characteristics-and-use',
      heading: 'Characteristics and use',
      body: [
        {
          type: 'paragraph',
          text: 'Aberdeen Angus cattle are moderate-framed, naturally polled beef animals with a solid black (or red) coat. The polled trait and coat colour are transmitted strongly to crossbred offspring, which is one reason the breed is so widely used in commercial crossing.',
        },
        {
          type: 'paragraph',
          text: 'The breed is valued for beef carcass quality, including a reputation for marbling, and for maternal traits such as calving ease and milking ability that make Angus and Angus-cross females popular in beef herds. Branded beef schemes in several countries are built around Angus or Angus-influenced cattle.',
        },
      ],
    },
    {
      id: 'adaptation-and-management',
      heading: 'Adaptation and management',
      body: [
        {
          type: 'paragraph',
          text: 'Angus cattle are hardy and adaptable and are kept across a wide range of temperate beef systems, from extensive grazing to finishing operations. As a beef breed they are commonly managed on forage with supplementary feeding toward finishing, according to system and market.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Traits such as marbling and calving ease are breed tendencies supported by selection and recording; expression in any herd depends on genetics within the breed, nutrition, and management.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'cattle' },
  breedType: 'Beef',
  originCountry: 'United Kingdom (Scotland)',
  originRegion: 'Aberdeenshire and Angus, north-eastern Scotland',
  breedStatus: 'registered',
  conservationStatus: 'unknown',
  registryReferences: [
    {
      registry: 'FAO DAD-IS',
      sourceId: 'fao-dad-is',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Recorded internationally as a transboundary beef breed.',
    },
    {
      registry: 'National Aberdeen-Angus / Angus herd books',
      jurisdiction: 'Multiple',
      note: 'Breed societies in the United Kingdom, North America, and elsewhere maintain the herd books; record identifiers are not asserted here.',
    },
  ],
  primaryUses: ['Beef production', 'Maternal and terminal crossbreeding'],
  physicalCharacteristics:
    'Moderate-framed, naturally polled beef cattle with a solid black coat; a red variant is also recognised. The polled and coat-colour traits are strongly transmitted to crossbred offspring.',
  productionCharacteristics:
    'A beef breed valued for carcass quality and a reputation for marbling, together with maternal traits such as calving ease and milking ability. Growth and carcass outcomes depend on line, nutrition, and management and are not quantified here.',
  climateAdaptation:
    'Hardy and adaptable within temperate beef systems, from extensive grazing to housed finishing.',
  managementContext:
    'Kept as purebreds and, very widely, as a crossing breed in commercial beef production; commonly forage-based with supplementary feeding toward finishing.',
  geographicDistribution:
    'One of the most widespread beef breeds internationally, with large populations in the United Kingdom, the Americas, and Oceania.',
  connections: [
    { type: 'breed', slug: 'hereford-cattle' },
    { type: 'breed', slug: 'wagyu' },
  ],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Global overview of the breed; herd-book rules, black and red lines, and management vary by country.',
  climateContext:
    'A temperate-origin beef breed kept across a broad range of grazing and finishing systems.',
  limitations: [
    'Aberdeen Angus characteristics and performance vary with line (including black and red populations), management, and environment; traits such as marbling are tendencies rather than guarantees.',
    'No growth-rate or carcass figures are stated here because they depend on genetics, nutrition, and system and change over time; current data should come from breed associations and performance recording.',
    'FAO DAD-IS records the Aberdeen Angus conservation status by country and population and updates it over time, so no single global risk category is assigned here (shown as unknown).',
    'Herd health, welfare, and breeding decisions are governed by local regulation and veterinary advice and fall outside this record.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Breed record, transboundary status, and distribution',
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
    title: 'Aberdeen Angus (cattle breed)',
    description:
      'Aberdeen Angus beef cattle: polled black (or red) Scottish breed known for carcass quality, marbling, and wide use in crossbreeding.',
    keywords: [
      'Aberdeen Angus',
      'Angus cattle',
      'beef cattle breed',
      'polled cattle',
    ],
  },
  structuredData: { article: true },
};
