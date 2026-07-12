import type { BreedContent } from '@/types/content';

export const ayrshireCattle: BreedContent = {
  id: 'breed-ayrshire-cattle',
  slug: 'ayrshire-cattle',
  contentType: 'breed',
  title: 'Ayrshire',
  category: 'Cattle breed',
  species: 'Cattle (Bos taurus)',
  alternativeNames: ['Ayrshire cattle'],
  summary:
    'The Ayrshire is a hardy red-and-white dairy breed from south-western Scotland, valued for efficient grazing, good udders, and reliable production under a range of conditions.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Ayrshire is a dairy breed developed in the county of Ayrshire in south-western Scotland, a region of moderate climate and variable land where a robust, efficient dairy animal was advantageous. It was consolidated in the 18th and 19th centuries and later exported to many countries.',
    },
    {
      type: 'paragraph',
      text: 'Ayrshires are red — ranging from light to deep mahogany — and white, with the two colours distributed in patches. The breed is of moderate size and is particularly associated with hardiness, strong feet and legs, and well-attached udders.',
    },
  ],
  keyFacts: [
    { label: 'Breed type', value: 'Dairy' },
    { label: 'Species', value: 'Bos taurus' },
    { label: 'Origin', value: 'Ayrshire, south-western Scotland' },
    { label: 'Coat', value: 'Red (light to mahogany) and white' },
    { label: 'Build', value: 'Moderate-sized, hardy dairy conformation' },
    {
      label: 'Notable trait',
      value: 'Grazing efficiency, strong feet and legs, good udders',
    },
    { label: 'Registries', value: 'FAO DAD-IS; national Ayrshire herd books' },
  ],
  sections: [
    {
      id: 'origin-and-development',
      heading: 'Origin and development',
      body: [
        {
          type: 'paragraph',
          text: 'The breed was developed in Ayrshire, Scotland, where farmers needed a dairy cow able to convert local forage efficiently and withstand a changeable climate. Selection produced a hardy red-and-white breed, and herd books were established as the Ayrshire spread to the rest of Britain, North America, Scandinavia, and beyond.',
        },
        {
          type: 'paragraph',
          text: 'National populations have since been selected somewhat differently for local conditions and markets, but the breed retains its reputation for durability and functional dairy conformation.',
        },
      ],
    },
    {
      id: 'characteristics-and-use',
      heading: 'Characteristics and use',
      body: [
        {
          type: 'paragraph',
          text: 'Ayrshires are moderate-sized dairy cattle patched in red and white, historically often horned. They are kept for milk, with a reputation for producing well on forage and for structural soundness that supports longevity in the herd.',
        },
        {
          type: 'paragraph',
          text: 'The breed is valued where a hardy, efficient grazing cow is preferred over maximum volume, including pasture-based dairy systems. Ayrshire milk is of good general composition, intermediate between the very high-solids Channel Island breeds and the higher-volume Holstein Friesian.',
        },
      ],
    },
    {
      id: 'adaptation-and-management',
      heading: 'Adaptation and management',
      body: [
        {
          type: 'paragraph',
          text: 'Ayrshires are known for adaptability to varied and sometimes demanding conditions, reflecting the environment in which they were developed. They are widely used in grazing systems where hardiness and functional udders and limbs are priorities.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Hardiness and grazing efficiency are general breed strengths; actual performance depends on genetics within the breed, feed supply, and management specific to each system.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'cattle' },
  breedType: 'Dairy',
  originCountry: 'United Kingdom (Scotland)',
  originRegion: 'Ayrshire, south-western Scotland',
  breedStatus: 'registered',
  conservationStatus: 'unknown',
  registryReferences: [
    {
      registry: 'FAO DAD-IS',
      sourceId: 'fao-dad-is',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Recorded internationally as a dairy breed.',
    },
    {
      registry: 'National Ayrshire herd books',
      jurisdiction: 'Multiple',
      note: 'Breed societies in the United Kingdom, North America, Scandinavia, and elsewhere maintain the herd books; record identifiers are not asserted here.',
    },
  ],
  primaryUses: ['Milk production', 'Pasture-based and hardy dairy systems'],
  physicalCharacteristics:
    'Moderate-sized dairy cattle patched in red (light to mahogany) and white, historically often horned, with a reputation for strong feet and legs and well-attached udders.',
  productionCharacteristics:
    'A dairy breed valued for grazing efficiency, structural soundness, and reliable production; milk composition is intermediate between the high-solids Channel Island breeds and the higher-volume Holstein Friesian. Specific figures depend on line, feeding, and system and are not stated here.',
  climateAdaptation:
    'Hardy and adaptable to varied, sometimes demanding conditions; well suited to grazing systems.',
  managementContext:
    'Favoured in pasture-based dairying where hardiness and functional conformation are prioritised over maximum volume.',
  geographicDistribution:
    'Distributed internationally across temperate dairy regions, including the British Isles, North America, and Scandinavia.',
  connections: [
    { type: 'breed', slug: 'dairy-shorthorn' },
    { type: 'breed', slug: 'guernsey-cattle' },
  ],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Global overview of the breed; herd-book rules and management practices vary by country.',
  climateContext:
    'A temperate-origin dairy breed noted for hardiness and grazing efficiency.',
  limitations: [
    'Ayrshire characteristics and performance vary with national line, management, and environment; hardiness and grazing efficiency are general strengths rather than fixed values.',
    'No milk-composition or bodyweight figures are given here because they depend on line, feeding, and system; current data should come from breed associations and recording.',
    'FAO DAD-IS records the Ayrshire conservation status by country and population and updates it over time, so no single global risk category is assigned here (shown as unknown).',
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
    title: 'Ayrshire (cattle breed)',
    description:
      'Ayrshire dairy cattle: hardy red-and-white Scottish breed valued for grazing efficiency, sound conformation, and reliable milk production.',
    keywords: [
      'Ayrshire cattle',
      'Scottish dairy breed',
      'grazing dairy cow',
      'red and white cattle',
    ],
  },
  structuredData: { article: true },
};
