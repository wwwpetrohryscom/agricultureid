import type { BreedContent } from '@/types/content';

export const girCattle: BreedContent = {
  id: 'breed-gir-cattle',
  slug: 'gir-cattle',
  contentType: 'breed',
  title: 'Gir',
  category: 'Cattle breed',
  species: 'Cattle (Bos taurus indicus)',
  alternativeNames: ['Gyr', 'Gir cattle'],
  summary:
    'The Gir is an Indian zebu dairy breed from Gujarat, distinguished by its domed forehead and long pendulous ears, valued for milk in hot climates and important in tropical dairy crossbreeding.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Gir (also spelled Gyr) is a zebu (Bos taurus indicus) dairy breed originating in the Gir hills and forests of the Kathiawar peninsula in Gujarat, western India. It is one of the principal indigenous dairy breeds of the Indian subcontinent and is well adapted to hot conditions.',
    },
    {
      type: 'paragraph',
      text: 'The breed is recognised by its distinctive domed (convex) forehead, long pendulous ears, and a coat that is commonly red to mottled red-and-white, sometimes nearly white. Gir cattle were exported to tropical countries, notably Brazil, where they became important in dairy zebu breeding and in crosses with taurine dairy breeds.',
    },
  ],
  keyFacts: [
    { label: 'Breed type', value: 'Dairy (zebu)' },
    { label: 'Species', value: 'Bos taurus indicus (zebu)' },
    { label: 'Origin', value: 'Gir region, Gujarat, India' },
    { label: 'Appearance', value: 'Domed forehead, long pendulous ears, hump' },
    { label: 'Coat', value: 'Commonly red to mottled red-and-white' },
    {
      label: 'Notable trait',
      value: 'Milk production with heat and tick tolerance',
    },
    {
      label: 'Registries',
      value:
        'FAO DAD-IS; Indian breed registration; Brazilian zebu association',
    },
  ],
  sections: [
    {
      id: 'origin-and-development',
      heading: 'Origin and development',
      body: [
        {
          type: 'paragraph',
          text: 'The Gir developed in the Gir forest region of the Kathiawar peninsula in Gujarat, India, as an indigenous dairy zebu suited to a hot climate. It is recognised and characterised among India’s registered indigenous cattle breeds.',
        },
        {
          type: 'paragraph',
          text: 'Exported to tropical countries, the Gir became especially significant in Brazil, where it is bred as a dairy zebu and used to create dairy crosses with taurine breeds — most notably crosses with the Holstein that combine tropical adaptation with higher milk output. Registration in Brazil is coordinated through the national zebu breeders’ organisation.',
        },
      ],
    },
    {
      id: 'characteristics-and-use',
      heading: 'Characteristics and use',
      body: [
        {
          type: 'paragraph',
          text: 'Gir cattle show the zebu hump along with a strongly domed forehead and long, folded, pendulous ears; coats are usually red to mottled red-and-white. The breed is kept primarily for milk, an unusual emphasis among the widely known zebu breeds, many of which are beef-oriented.',
        },
        {
          type: 'paragraph',
          text: 'Its combination of dairy ability and tolerance of heat and ticks makes the Gir valuable both as a purebred tropical dairy animal and as a parent in tropical dairy crossbreeding programmes.',
        },
      ],
    },
    {
      id: 'adaptation-and-management',
      heading: 'Adaptation and management',
      body: [
        {
          type: 'paragraph',
          text: 'The Gir is adapted to hot climates, with tolerance of heat and of external parasites such as ticks, and the ability to produce milk on tropical feed resources. This adaptation underpins its role in tropical dairying and dairy crossbreeding.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Heat and parasite tolerance are recognised breed strengths but are relative to environment; milk production still depends on genetics within the breed, feeding, and management, which vary widely between systems.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'cattle' },
  breedType: 'Dairy',
  originCountry: 'India',
  originRegion: 'Gir region, Kathiawar peninsula, Gujarat, India',
  breedStatus: 'registered',
  conservationStatus: 'unknown',
  registryReferences: [
    {
      registry: 'FAO DAD-IS',
      sourceId: 'fao-dad-is',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Recorded internationally as a zebu dairy breed.',
    },
    {
      registry: 'Indian indigenous breed registration',
      jurisdiction: 'India',
      note: 'Recognised and characterised among India’s indigenous cattle breeds; record identifiers are not asserted here.',
    },
    {
      registry: 'Brazilian zebu breeders’ association (ABCZ)',
      jurisdiction: 'Brazil',
      note: 'Coordinates dairy Gir registration in Brazil; record identifiers are not asserted here.',
    },
  ],
  primaryUses: [
    'Milk production in hot climates',
    'Tropical dairy crossbreeding',
  ],
  physicalCharacteristics:
    'Zebu dairy cattle with a shoulder hump, a strongly domed forehead, and long, folded, pendulous ears; coats are usually red to mottled red-and-white, sometimes nearly white.',
  productionCharacteristics:
    'A dairy zebu — unusual among the well-known, mostly beef-oriented zebu breeds — valued for milk production combined with heat and tick tolerance, and widely used in tropical dairy crosses. Specific figures depend on line, feeding, and system and are not stated here.',
  climateAdaptation:
    'Adapted to hot climates, with tolerance of heat and of external parasites such as ticks, and able to produce milk on tropical feed resources.',
  managementContext:
    'Kept as a purebred tropical dairy animal and, extensively, as a parent in tropical dairy crossbreeding, including crosses with taurine dairy breeds.',
  geographicDistribution:
    'Native to Gujarat, India, and important in Brazil and other tropical countries as a dairy zebu and crossbreeding parent.',
  connections: [
    { type: 'breed', slug: 'brahman' },
    { type: 'breed', slug: 'nellore' },
    { type: 'climate', slug: 'heat-stress' },
  ],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Global overview of the breed; registration differs between India and Brazil, and adaptation claims are relative to environment.',
  climateContext: 'A zebu dairy breed adapted to hot, tropical conditions.',
  limitations: [
    'Gir characteristics and performance vary with line, management, and environment; heat and parasite tolerance are relative strengths rather than absolute protections.',
    'No milk-yield or bodyweight figures are stated here because they depend on genetics, feeding, and system; current data should come from breed associations and recording.',
    'FAO DAD-IS records the Gir conservation status by country and population and updates it over time, so no single global risk category is assigned here (shown as unknown).',
    'Herd health, welfare, and breeding decisions are governed by local regulation and veterinary advice and fall outside this record.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Breed record, transboundary status, and distribution',
    },
    {
      sourceId: 'icar',
      citedFor:
        'Recognition and characterisation as an indigenous Indian breed',
    },
    {
      sourceId: 'embrapa',
      citedFor:
        'Dairy zebu (Gir) breeding and tropical dairy crossbreeding in Brazil',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General zebu and breed description',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Gir (cattle breed)',
    description:
      'Gir (Gyr) zebu dairy cattle from Gujarat, India: domed forehead and long ears, valued for milk with heat and tick tolerance in tropical dairying.',
    keywords: ['Gir cattle', 'Gyr', 'zebu dairy breed', 'Indian cattle breed'],
  },
  structuredData: { article: true },
};
