import type { BreedContent } from '@/types/content';

export const herefordCattle: BreedContent = {
  id: 'breed-hereford-cattle',
  slug: 'hereford-cattle',
  contentType: 'breed',
  title: 'Hereford',
  category: 'Cattle breed',
  species: 'Cattle (Bos taurus)',
  alternativeNames: ['Hereford cattle'],
  summary:
    'The Hereford is a hardy English beef breed distinguished by its red body and white face, kept worldwide for efficient forage-based beef production and widely used in crossbreeding.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Hereford is a beef breed that originated in the county of Herefordshire in the west of England, where it was developed as a hardy, forage-efficient animal for beef production. From the 19th century it was exported extensively and became one of the most numerous and geographically widespread beef breeds in the world.',
    },
    {
      type: 'paragraph',
      text: 'Herefords are easily identified by a red coat with a distinctive white face and white markings on the crest, dewlap, and underline. Both horned and naturally polled lines exist, the latter developed and registered as the Polled Hereford in several countries.',
    },
  ],
  keyFacts: [
    { label: 'Breed type', value: 'Beef' },
    { label: 'Species', value: 'Bos taurus' },
    { label: 'Origin', value: 'Herefordshire, England' },
    { label: 'Coat', value: 'Red body with a white face and white markings' },
    {
      label: 'Horns',
      value: 'Horned and naturally polled (Polled Hereford) lines',
    },
    {
      label: 'Notable trait',
      value: 'Hardiness, foraging ability, and docility',
    },
    { label: 'Registries', value: 'FAO DAD-IS; national Hereford herd books' },
  ],
  sections: [
    {
      id: 'origin-and-development',
      heading: 'Origin and development',
      body: [
        {
          type: 'paragraph',
          text: 'The breed was developed in Herefordshire, England, as a beef animal able to make efficient use of grass, and it was consolidated through selective breeding and a herd book in the 18th and 19th centuries. Large-scale exports established Herefords across the Americas, Oceania, southern Africa, and elsewhere, where the breed adapted to a wide range of rangeland conditions.',
        },
        {
          type: 'paragraph',
          text: 'A naturally polled line, the Polled Hereford, was later developed and is registered separately in a number of countries, giving producers a hornless option with the same characteristic colour pattern.',
        },
      ],
    },
    {
      id: 'characteristics-and-use',
      heading: 'Characteristics and use',
      body: [
        {
          type: 'paragraph',
          text: 'Herefords are medium-to-large beef cattle with a red coat and a white face and markings; the colour pattern is dominant and appears reliably in crossbred calves, which is a long-standing reason for the breed’s popularity in crossing. Horned and polled lines are both available.',
        },
        {
          type: 'paragraph',
          text: 'The breed is valued for hardiness, foraging ability on extensive pasture, docile temperament, longevity, and fertility. Hereford and Hereford-cross cattle are used as maternal females and, where finishing is grass-based, as efficient beef producers.',
        },
      ],
    },
    {
      id: 'adaptation-and-management',
      heading: 'Adaptation and management',
      body: [
        {
          type: 'paragraph',
          text: 'Herefords are known for adaptability and are kept from temperate pastures to harsher rangelands, often under extensive grazing management. Their reputation for doing well on forage and for a calm temperament supports their use in low-input beef systems.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Adaptability and foraging ability are general breed strengths; the appropriate stocking, feeding, and finishing strategy is specific to each environment and enterprise.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'cattle' },
  breedType: 'Beef',
  originCountry: 'United Kingdom (England)',
  originRegion: 'Herefordshire, England',
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
      registry: 'National Hereford herd books',
      jurisdiction: 'Multiple',
      note: 'Breed societies in the United Kingdom, the Americas, and elsewhere maintain the herd books, including separate Polled Hereford registration in some countries.',
    },
  ],
  primaryUses: ['Beef production', 'Maternal and terminal crossbreeding'],
  physicalCharacteristics:
    'Medium-to-large beef cattle with a red coat and a characteristic white face and markings on the crest, dewlap, and underline; both horned and naturally polled lines exist.',
  productionCharacteristics:
    'A forage-efficient beef breed valued for hardiness, foraging ability, docility, longevity, and fertility. Growth and carcass outcomes depend on line, nutrition, and management and are not quantified here.',
  climateAdaptation:
    'Highly adaptable, kept from temperate pastures to harsher rangelands; well regarded for performing on forage in extensive systems.',
  managementContext:
    'Common in extensive grazing and low-input beef systems, and widely used as a crossing breed because its colour pattern and hardiness carry to crossbred calves.',
  geographicDistribution:
    'One of the most widespread beef breeds worldwide, with major populations across the Americas, Oceania, southern Africa, and Europe.',
  connections: [
    { type: 'breed', slug: 'aberdeen-angus' },
    { type: 'breed', slug: 'charolais' },
  ],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Global overview of the breed; herd-book rules, horned and polled lines, and management vary by country.',
  climateContext:
    'A temperate-origin beef breed noted for adaptability across grazing environments.',
  limitations: [
    'Hereford characteristics and performance vary with line (including horned and polled populations), management, and environment; hardiness and foraging ability are general strengths rather than fixed values.',
    'No growth-rate or carcass figures are stated here because they depend on genetics, nutrition, and system and change over time; current data should come from breed associations and performance recording.',
    'FAO DAD-IS records the Hereford conservation status by country and population and updates it over time, so no single global risk category is assigned here (shown as unknown).',
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
    title: 'Hereford (cattle breed)',
    description:
      'Hereford beef cattle: hardy red-bodied, white-faced English breed known for foraging ability, docility, and wide use in crossbreeding.',
    keywords: [
      'Hereford cattle',
      'Polled Hereford',
      'beef cattle breed',
      'white face',
    ],
  },
  structuredData: { article: true },
};
