import type { BreedContent } from '@/types/content';

export const holsteinFriesian: BreedContent = {
  id: 'breed-holstein-friesian',
  slug: 'holstein-friesian',
  contentType: 'breed',
  title: 'Holstein Friesian',
  category: 'Cattle breed',
  species: 'Cattle (Bos taurus)',
  alternativeNames: ['Holstein', 'Friesian', 'Holstein-Friesian'],
  summary:
    'The Holstein Friesian is a large black-and-white (or red-and-white) dairy breed of Dutch and northern German origin, recognised internationally for high milk volume and now the most widely distributed dairy breed in the world.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Holstein Friesian is a specialised dairy breed that originated in the coastal regions of the Netherlands (Friesland and Holland) and neighbouring northern Germany, where cattle were selected over generations for milk production on rich lowland pasture. Animals exported to North America from the 19th century onward were bred intensively for yield, and the resulting Holstein type went on to shape dairy herds across much of the world.',
    },
    {
      type: 'paragraph',
      text: 'The breed is instantly recognisable for its large, angular dairy frame and distinctive black-and-white piebald coat; a red-and-white variant occurs where the recessive red gene is present. Because it combines high output with a strong international infrastructure of herd books and genetic evaluation, the Holstein Friesian has become the reference breed for volume-focused dairying.',
    },
  ],
  keyFacts: [
    { label: 'Breed type', value: 'Dairy' },
    { label: 'Species', value: 'Bos taurus' },
    { label: 'Origin', value: 'Netherlands and northern Germany' },
    {
      label: 'Coat',
      value: 'Black-and-white piebald; red-and-white variant occurs',
    },
    { label: 'Build', value: 'Large-framed, angular specialised dairy type' },
    { label: 'Primary use', value: 'Milk production' },
    {
      label: 'Registries',
      value: 'FAO DAD-IS; national Holstein and Friesian herd books',
    },
  ],
  sections: [
    {
      id: 'origin-and-development',
      heading: 'Origin and development',
      body: [
        {
          type: 'paragraph',
          text: 'The breed traces to the black-and-white cattle of Friesland and Holland in the Netherlands and adjoining parts of northern Germany, a region whose fertile grassland favoured selection for milk. From the second half of the 19th century, cattle were exported widely, and North American breeders in particular selected almost exclusively for milk yield and dairy conformation.',
        },
        {
          type: 'paragraph',
          text: 'This selection history produced two broad tendencies within the breed: a highly specialised, high-yielding North American–style Holstein, and European Friesian populations that historically retained more dual-purpose (milk-and-beef) character. Widespread use of artificial insemination and international genetic evaluation later blended and disseminated Holstein genetics globally.',
        },
      ],
    },
    {
      id: 'characteristics-and-use',
      heading: 'Characteristics and use',
      body: [
        {
          type: 'paragraph',
          text: 'Holstein Friesians are large cattle with the wedge-shaped, angular build typical of specialised dairy animals and a well-developed udder. The coat is the familiar black-and-white patchwork, with a red-and-white form in some lines. The breed is kept overwhelmingly for milk rather than meat, although cull cows and surplus calves enter beef and veal supply chains.',
        },
        {
          type: 'paragraph',
          text: 'The breed is internationally regarded as the highest-volume dairy breed. Its milk tends to be lower in fat and protein percentage than that of the Channel Island breeds, a trade-off that is managed through breeding, feeding, and milk-payment systems. Holstein genetics are also used to raise the milk output of local populations through crossbreeding and grading-up.',
        },
      ],
    },
    {
      id: 'adaptation-and-management',
      heading: 'Adaptation and management',
      body: [
        {
          type: 'paragraph',
          text: 'As a temperate-origin, high-output breed, the Holstein Friesian performs best where feed, water, and management can meet its considerable requirements. High-yielding animals generate substantial metabolic heat and are widely documented as sensitive to heat stress, so herds in warmer climates are commonly managed with shade, ventilation, and cooling.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Because the breed is managed across systems ranging from pasture-based to fully housed, husbandry, feeding, and welfare provisions differ markedly by region and enterprise. Descriptions here are general rather than prescriptions for any particular herd.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'cattle' },
  breedType: 'Dairy',
  originCountry: 'Netherlands',
  originRegion: 'Friesland and Holland (Netherlands) and northern Germany',
  breedStatus: 'registered',
  conservationStatus: 'unknown',
  registryReferences: [
    {
      registry: 'FAO DAD-IS',
      sourceId: 'fao-dad-is',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Recorded internationally as a transboundary dairy breed.',
    },
    {
      registry: 'National Holstein and Friesian herd books',
      jurisdiction: 'Multiple',
      note: 'Maintained by national breed associations; specific record identifiers are not asserted here.',
    },
  ],
  primaryUses: [
    'Milk production',
    'Genetics for dairy crossbreeding and grading-up',
  ],
  physicalCharacteristics:
    'Large, angular dairy cattle with a well-developed udder and the characteristic black-and-white piebald coat; a red-and-white variant occurs in lines carrying the recessive red gene.',
  productionCharacteristics:
    'A specialised dairy breed internationally recognised for high milk volume; milk is generally lower in fat and protein percentage than that of the Channel Island breeds. Specific yields depend on line, feeding, and system and are not stated here.',
  climateAdaptation:
    'Best suited to temperate climates and well-resourced systems; high-yielding animals have large feed and cooling needs and are widely reported as sensitive to heat stress.',
  managementContext:
    'Kept from pasture-based to fully housed dairy systems, usually with a focus on precise nutrition, reproduction, and milk recording to support high output.',
  geographicDistribution:
    'The most widely distributed dairy breed, present on every inhabited continent through both purebred herds and the grading-up of local dairy populations.',
  connections: [
    { type: 'breed', slug: 'brown-swiss' },
    { type: 'breed', slug: 'ayrshire-cattle' },
    { type: 'breed', slug: 'dairy-shorthorn' },
  ],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Global overview of the breed; herd-book rules, strains, and management practices vary by country.',
  climateContext:
    'A temperate-origin dairy breed; in warmer regions high-yielding animals are managed to mitigate heat stress.',
  limitations: [
    'Holstein Friesian performance and even appearance vary with strain — for example North American dairy Holstein versus more dual-purpose European Friesian lines — as well as with management and environment; this record is a general description.',
    'No milk-yield or bodyweight figures are stated here because they depend on line, feeding, and system and change over time; current data should come from breed associations and production recording.',
    'FAO DAD-IS records the Holstein Friesian conservation status by country and population and updates it over time, so no single global risk category is assigned here (shown as unknown).',
    'Herd health, welfare, and breeding decisions are governed by local regulation and veterinary advice and fall outside this record.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Breed record, transboundary status, and global distribution',
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
    title: 'Holstein Friesian (cattle breed)',
    description:
      'Holstein Friesian dairy cattle: Dutch and north-German origin, black-and-white dairy conformation, high milk volume, and worldwide distribution.',
    keywords: [
      'Holstein Friesian',
      'Holstein cattle',
      'dairy cattle breed',
      'Bos taurus',
    ],
  },
  structuredData: { article: true },
};
