import type { BreedContent } from '@/types/content';

export const dairyShorthorn: BreedContent = {
  id: 'breed-dairy-shorthorn',
  slug: 'dairy-shorthorn',
  contentType: 'breed',
  title: 'Dairy Shorthorn',
  category: 'Cattle breed',
  species: 'Cattle (Bos taurus)',
  alternativeNames: ['Milking Shorthorn'],
  summary:
    'The Dairy Shorthorn is the dairy line of the English Shorthorn, a red, white, or roan breed valued for dual-purpose heritage, hardiness, and functional milk production from forage.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Dairy Shorthorn, known in some countries as the Milking Shorthorn, is the dairy-selected line of the Shorthorn breed developed in north-eastern England, particularly the Tees valley and County Durham. The Shorthorn was one of the most influential improved cattle breeds and later diverged into separate beef and dairy lines.',
    },
    {
      type: 'paragraph',
      text: 'Dairy Shorthorns are red, white, or roan (a fine intermixing of red and white), or red-and-white. Retaining much of the breed’s dual-purpose character, they are valued for hardiness, longevity, and the ability to produce milk efficiently from forage.',
    },
  ],
  keyFacts: [
    { label: 'Breed type', value: 'Dairy (dual-purpose heritage)' },
    { label: 'Species', value: 'Bos taurus' },
    { label: 'Origin', value: 'North-eastern England' },
    { label: 'Coat', value: 'Red, white, or roan; red-and-white' },
    {
      label: 'Related line',
      value: 'Dairy line of the Shorthorn (separate from Beef Shorthorn)',
    },
    {
      label: 'Notable trait',
      value: 'Hardiness, longevity, forage-based milk production',
    },
    {
      label: 'Registries',
      value: 'FAO DAD-IS; Shorthorn Society and national herd books',
    },
  ],
  sections: [
    {
      id: 'origin-and-development',
      heading: 'Origin and development',
      body: [
        {
          type: 'paragraph',
          text: 'The Shorthorn was developed in north-eastern England from local cattle and became one of the earliest and most influential improved breeds, with an early herd book. As selection goals diverged, the breed separated into a beef line (Beef Shorthorn) and a dairy line (Dairy or Milking Shorthorn), the latter selected for milk while retaining dual-purpose qualities.',
        },
        {
          type: 'paragraph',
          text: 'The Dairy Shorthorn was exported widely and contributed to dairy breeding in many countries. In several regions, heritage-livestock organisations monitor particular Milking Shorthorn populations, and modern breeding has in places incorporated other dairy genetics.',
        },
      ],
    },
    {
      id: 'characteristics-and-use',
      heading: 'Characteristics and use',
      body: [
        {
          type: 'paragraph',
          text: 'Dairy Shorthorns are moderate-to-large cattle in red, white, roan, or red-and-white, kept primarily for milk but retaining useful beef qualities from the breed’s dual-purpose background. Surplus and cull animals therefore have good beef value relative to specialised dairy breeds.',
        },
        {
          type: 'paragraph',
          text: 'The breed is valued for hardiness, longevity, fertility, and functional traits that support production from forage-based systems, making it attractive where a robust, lower-input dairy cow is preferred over maximum volume.',
        },
      ],
    },
    {
      id: 'adaptation-and-management',
      heading: 'Adaptation and management',
      body: [
        {
          type: 'paragraph',
          text: 'Dairy Shorthorns are adaptable temperate cattle well suited to grazing and forage-based dairy systems, reflecting the dual-purpose heritage of the breed. Management follows the balance a particular herd strikes between milk and beef.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Hardiness and forage efficiency are general breed strengths; because some populations have been influenced by other dairy genetics, breed averages and management vary between herds and countries.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'cattle' },
  breedType: 'Dairy',
  originCountry: 'United Kingdom (England)',
  originRegion: 'Tees valley and County Durham, north-eastern England',
  breedStatus: 'registered',
  conservationStatus: 'unknown',
  registryReferences: [
    {
      registry: 'FAO DAD-IS',
      sourceId: 'fao-dad-is',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Recorded internationally; the dairy line of the Shorthorn.',
    },
    {
      registry: 'Shorthorn Society and national Milking Shorthorn herd books',
      jurisdiction: 'Multiple',
      note: 'Breed societies in the United Kingdom, North America, and elsewhere maintain the herd books; record identifiers are not asserted here.',
    },
  ],
  primaryUses: [
    'Milk production',
    'Dual-purpose milk and beef',
    'Forage-based and lower-input dairy systems',
  ],
  physicalCharacteristics:
    'Moderate-to-large cattle in red, white, roan, or red-and-white, retaining dual-purpose conformation from the Shorthorn’s heritage.',
  productionCharacteristics:
    'A dairy breed of dual-purpose heritage valued for hardiness, longevity, and forage-based milk production, with better beef value in surplus animals than specialised dairy breeds. Specific figures depend on line, feeding, and system and are not stated here.',
  climateAdaptation:
    'Adaptable temperate cattle well suited to grazing and forage-based dairy systems.',
  managementContext:
    'Kept where a robust, lower-input dairy cow is preferred over maximum volume; some populations have been influenced by other dairy genetics.',
  geographicDistribution:
    'Distributed across temperate dairy regions including the British Isles, North America, and Oceania, with some heritage populations separately monitored.',
  connections: [
    { type: 'breed', slug: 'ayrshire-cattle' },
    { type: 'breed', slug: 'holstein-friesian' },
  ],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Global overview of the breed; herd-book rules, the distinction from Beef Shorthorn, and management vary by country.',
  climateContext:
    'A temperate-origin dairy breed of dual-purpose heritage suited to forage-based systems.',
  limitations: [
    'Dairy Shorthorn characteristics and performance vary with line (including populations influenced by other dairy genetics), management, and environment; this record is a general description.',
    'No milk-yield or bodyweight figures are stated here because they depend on line, feeding, and system; current data should come from breed associations and recording.',
    'FAO DAD-IS records the Dairy Shorthorn conservation status by country and population and updates it over time, so no single global risk category is assigned here (shown as unknown); some Milking Shorthorn populations are separately monitored.',
    'Herd health, welfare, and breeding decisions are governed by local regulation and veterinary advice and fall outside this record.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Breed record and distribution',
    },
    {
      sourceId: 'livestock-conservancy',
      citedFor:
        'Milking Shorthorn history and conservation monitoring in North America',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General Shorthorn breed history and description',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Dairy Shorthorn (cattle breed)',
    description:
      'Dairy Shorthorn (Milking Shorthorn) cattle: red, white, or roan English breed of dual-purpose heritage, valued for hardiness and forage-based milk.',
    keywords: [
      'Dairy Shorthorn',
      'Milking Shorthorn',
      'dual-purpose cattle',
      'roan cattle',
    ],
  },
  structuredData: { article: true },
};
