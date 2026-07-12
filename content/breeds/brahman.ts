import type { BreedContent } from '@/types/content';

export const brahman: BreedContent = {
  id: 'breed-brahman',
  slug: 'brahman',
  contentType: 'breed',
  title: 'Brahman',
  category: 'Cattle breed',
  species: 'Cattle (Bos taurus indicus)',
  alternativeNames: ['American Brahman'],
  summary:
    'The Brahman is a humped zebu beef breed developed in the United States from Indian cattle, valued for heat tolerance, insect and parasite resistance, and hardiness in tropical and subtropical conditions.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Brahman is a beef breed of zebu (Bos taurus indicus) type developed in the United States, principally along the Gulf Coast, from cattle imported from the Indian subcontinent. Foundation stock drew on several Indian zebu breeds, and the resulting American Brahman was selected for productivity under hot, humid conditions.',
    },
    {
      type: 'paragraph',
      text: 'Brahmans are recognisable by the prominent hump over the shoulders and neck, loose skin with a pronounced dewlap, and large, often drooping ears; coat colour ranges from light grey to red. These features are associated with the breed’s well-documented tolerance of heat and its resistance to many external parasites.',
    },
  ],
  keyFacts: [
    { label: 'Breed type', value: 'Beef (zebu)' },
    { label: 'Species', value: 'Bos taurus indicus (zebu)' },
    {
      label: 'Developed in',
      value: 'United States (Gulf Coast), from Indian zebu breeds',
    },
    {
      label: 'Appearance',
      value: 'Shoulder hump, loose skin and dewlap, drooping ears',
    },
    { label: 'Coat', value: 'Light grey to red' },
    {
      label: 'Notable trait',
      value: 'Heat, humidity, and external-parasite tolerance',
    },
    {
      label: 'Registries',
      value: 'FAO DAD-IS; American Brahman Breeders Association',
    },
  ],
  sections: [
    {
      id: 'origin-and-development',
      heading: 'Origin and development',
      body: [
        {
          type: 'paragraph',
          text: 'The American Brahman was developed from zebu cattle imported to the United States from India (and via other countries) in the late 19th and early 20th centuries. Foundation animals came from several Indian breeds — including Gir, Guzerat (Kankrej), Nellore (Ongole), and Krishna Valley types — and were bred and selected into a distinct American population adapted to the Gulf Coast environment.',
        },
        {
          type: 'paragraph',
          text: 'The breed became foundational to tropical and subtropical beef production and to the creation of many composite breeds that blend zebu hardiness with taurine growth and carcass traits. A national breed association maintains the Brahman herd book.',
        },
      ],
    },
    {
      id: 'characteristics-and-use',
      heading: 'Characteristics and use',
      body: [
        {
          type: 'paragraph',
          text: 'Brahmans show the classic zebu features of a shoulder hump, loose skin and a large dewlap, and long ears, with coats from light grey to red. These animals are kept mainly for beef and, very importantly, as a source of adaptation in crossbreeding.',
        },
        {
          type: 'paragraph',
          text: 'The breed is widely used to introduce heat tolerance, parasite resistance, and hardiness into crossbred cattle, and it underpins numerous zebu-influenced composite breeds developed for warm climates. Zebu breeds are generally later maturing than specialised taurine beef breeds, a difference managed through breeding and system design.',
        },
      ],
    },
    {
      id: 'adaptation-and-management',
      heading: 'Adaptation and management',
      body: [
        {
          type: 'paragraph',
          text: 'The Brahman is one of the most heat- and humidity-tolerant beef breeds, with physiological and skin characteristics associated with coping in hot climates and with resistance to many biting insects and ticks. This makes it central to beef production across tropical and subtropical regions.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Heat tolerance and parasite resistance are well-documented breed strengths but are relative, not absolute; appropriate shade, water, and herd-health management remain necessary and are specific to each environment.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'cattle' },
  breedType: 'Beef',
  originCountry: 'United States',
  originRegion:
    'Gulf Coast of the United States; foundation stock from the Indian subcontinent',
  breedStatus: 'registered',
  conservationStatus: 'unknown',
  registryReferences: [
    {
      registry: 'FAO DAD-IS',
      sourceId: 'fao-dad-is',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Recorded internationally as a transboundary zebu beef breed.',
    },
    {
      registry: 'American Brahman Breeders Association',
      jurisdiction: 'United States',
      note: 'National breed association maintaining the Brahman herd book; record identifiers are not asserted here.',
    },
  ],
  primaryUses: [
    'Beef production in tropical and subtropical regions',
    'Crossbreeding to add heat tolerance and hardiness',
  ],
  physicalCharacteristics:
    'Zebu-type beef cattle with a prominent shoulder hump, loose skin and a large dewlap, and long, often drooping ears; coat colour ranges from light grey to red.',
  productionCharacteristics:
    'A beef and crossbreeding breed valued for productivity in hot climates rather than for early maturity; zebu breeds are generally later maturing than specialised taurine beef breeds. Specific figures depend on line, nutrition, and system and are not stated here.',
  climateAdaptation:
    'Among the most heat- and humidity-tolerant beef breeds, with associated resistance to many external parasites; central to tropical and subtropical beef systems.',
  managementContext:
    'Kept for beef and, extensively, as a crossing breed and foundation for zebu-influenced composite breeds in warm regions.',
  geographicDistribution:
    'Widely distributed across tropical and subtropical regions of the Americas, Australia, Africa, and Asia, and a foundation for many composite breeds.',
  connections: [
    { type: 'breed', slug: 'gir-cattle' },
    { type: 'breed', slug: 'nellore' },
    { type: 'climate', slug: 'heat-stress' },
  ],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Global overview of the breed; herd-book rules and management vary by country, and adaptation claims are relative to environment.',
  climateContext:
    'A zebu beef breed developed for hot, humid conditions and used to add climate adaptation to crossbred cattle.',
  limitations: [
    'Brahman characteristics and performance vary with line, management, and environment; heat tolerance and parasite resistance are relative strengths rather than absolute protections.',
    'No growth, maturity, or carcass figures are stated here because they depend on genetics, nutrition, and system and change over time; current data should come from breed associations and recording.',
    'FAO DAD-IS records the Brahman conservation status by country and population and updates it over time, so no single global risk category is assigned here (shown as unknown).',
    'Herd health, welfare, and breeding decisions are governed by local regulation and veterinary advice and fall outside this record.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Breed record, transboundary status, and distribution',
    },
    {
      sourceId: 'ncbi-taxonomy',
      citedFor: 'Species and subspecies taxonomy (Bos taurus indicus / zebu)',
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
    title: 'Brahman (cattle breed)',
    description:
      'Brahman zebu beef cattle: US-developed humped breed from Indian stock, valued for heat tolerance, parasite resistance, and tropical hardiness.',
    keywords: [
      'Brahman cattle',
      'zebu',
      'Bos indicus',
      'heat-tolerant beef breed',
    ],
  },
  structuredData: { article: true },
};
