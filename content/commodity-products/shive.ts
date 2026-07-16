import type { CommodityProductContent } from '@/types/content';

export const shive: CommodityProductContent = {
  id: 'commodity-product-shive',
  slug: 'shive',
  contentType: 'commodity-product',
  title: 'Shive',
  alternativeNames: ['Flax shives', 'Boon', 'Flax woody core'],
  category: 'Processing by-product',
  subcategory: 'Woody stem core from scutching',
  productClass: 'by-product',
  derivedFrom: { type: 'commodity', slug: 'flax-fibre' },
  producedBy: [{ type: 'processing-method', slug: 'decortication' }],
  physicalForm: 'other',
  summary:
    'Shive is the woody core of the flax stem, shattered and shaken out when retted straw is scutched. It leaves the mill in greater bulk than the fibre does, and it has found real markets in animal bedding, panel board, and biocomposites.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A flax stem is mostly not fibre. The valuable bast bundles form a thin sheath around a woody central core, and that core is the larger part of what the plant grew. Scutching exists to break the core into fragments and shake them away from the fibre — and those fragments, falling out of the machine in quantity, are shive.',
    },
    {
      type: 'paragraph',
      text: 'It is a by-product on every count: it is a residual of a process run for something else, it is worth far less per tonne than the fibre it accompanied, and it arrives whether anyone wants it or not. What has changed is that people increasingly do want it. Shive is dry, absorbent, low in dust when screened, and available in volume at one location, and a scutching mill now sells it rather than paying to remove it.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'By-product of flax fibre processing' },
    { label: 'Made from', value: 'Fibre flax (Linum usitatissimum) straw' },
    { label: 'What it is', value: 'Fragments of the woody stem core' },
    {
      label: 'Arises at',
      value: 'Scutching, when retted straw is broken and beaten',
    },
    {
      label: 'Relative volume',
      value: 'Greater in bulk than the fibre stream',
    },
    {
      label: 'Principal uses',
      value: 'Animal bedding, panel board, biocomposites, fuel',
    },
    {
      label: 'Sold on',
      value: 'Particle size, dust level, and residual fibre',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What shive is',
      body: [
        {
          type: 'paragraph',
          text: 'The flax stem is built as a tube: an outer layer carrying the bast fibre bundles, wrapped around a woody xylem core. Retting dissolves the pectin cementing the two together but leaves both intact, and it is the mechanical work of scutching — breaking the straw between rollers, then beating it — that shatters the brittle core into short chips while the flexible fibre survives.',
        },
        {
          type: 'paragraph',
          text: 'The mill then separates the two by weight and aerodynamics: the fibre is retained and the chips fall away. What is collected is a mix of woody fragments, some short fibre that came away with them, and dust. Screening sorts this into size fractions, and the fractions have different buyers — which is why shive is sold as a graded product rather than shovelled out as sweepings.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The same material appears under other names',
          text: 'The equivalent fraction from hemp is called hurd or shiv, and it serves closely related markets. The terms are not interchangeable as trade descriptions — a buyer specifies flax shive or hemp hurd — but the material’s role in each chain is the same.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'paragraph',
          text: 'Animal bedding is the established outlet. Shive is highly absorbent, it is light, it composts well afterwards, and screened grades are low in dust — the last of these being the reason it commands a premium in horse bedding, where respiratory health is a real concern and dusty straw is a genuine problem. It is used for other housed livestock and small animals for the same reasons.',
        },
        {
          type: 'list',
          items: [
            'Animal bedding — particularly for horses, where low dust is valued',
            'Particleboard and fibreboard furnish, as a wood substitute',
            'Biocomposites and bio-based building materials bound with lime or binders',
            'Horticultural growing media and mulches',
            'Industrial absorbents for oil and spill control',
            'Fuel, including briquetting for on-site heat',
          ],
        },
        {
          type: 'paragraph',
          text: 'The panel and construction uses are the growth areas, and they rest on the same argument as bagasse in a cane mill: here is a lignocellulosic material, already collected, already broken to a useful size, sitting at one site in quantity. Where a panel plant or a biocomposite manufacturer is within economic haulage of a scutching mill, shive competes with wood chips on cost and on carbon.',
        },
      ],
    },
    {
      id: 'quality-and-handling',
      heading: 'Quality and handling',
      body: [
        {
          type: 'paragraph',
          text: 'Buyers specify particle size distribution — the fraction they want, screened out from the rest — along with dust content, residual fibre, moisture, and cleanliness. Residual fibre is a genuine nuisance in some applications: stringy fibre wraps around machinery in a bedding system and interferes with binders in a board furnish, so a well-cleaned shive is worth more than a fibre-contaminated one. For bedding, dust is the attribute that decides the sale.',
        },
        {
          type: 'paragraph',
          text: 'The handling problem is bulk. Shive is very low in density, so a lorry loads out on volume long before it reaches its weight limit, and haulage economics restrict how far it can travel — which is why shive markets are regional and why compaction and baling matter more than the value per tonne would suggest. It is stored dry, since damp shive moulds and loses its bedding value, and it is dusty and combustible in a heap, so stores are managed with dust and fire in mind.',
        },
      ],
    },
  ],
  primaryUses: ['industrial'],
  secondaryUses: ['energy'],
  majorQualityAttributes: [
    'Particle size distribution',
    'Dust content',
    'Residual fibre content',
    'Moisture content',
    'Cleanliness and freedom from foreign matter',
    'Bulk density after compaction',
  ],
  processContext:
    'Separated at the scutching mill when retted flax straw is broken and beaten: the brittle woody core shatters into chips and is shaken away from the fibre, then screened into size fractions.',
  storageContext:
    'Stored dry and under cover, since damp shive moulds and loses value; very low in bulk density, so it is compacted or baled for handling, and stores are managed for dust and fire risk.',
  connections: [
    { type: 'crop', slug: 'flax' },
    { type: 'livestock', slug: 'horses' },
    { type: 'machinery', slug: 'baler' },
  ],
  relatedTopics: [{ type: 'commodity', slug: 'hemp-fibre' }],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Flax processing residues and their material uses',
    },
    {
      sourceId: 'ec-agri',
      citedFor: 'Fibre flax processing streams and shive markets',
    },
    {
      sourceId: 'britannica',
      citedFor: 'Scutching and the separation of woody core from bast fibre',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Regional, following fibre-flax scutching capacity. Bedding, board, and construction product regulation is jurisdiction-specific.',
  limitations: [
    'This is a reference description of a by-product, not a bedding, board furnish, or construction material specification.',
    'No particle size ranges, bulk densities, absorbency figures, or stem fraction percentages are given here — they are mill-, variety-, and screen-specific.',
    'No HS code is given: shive is not identified in the tariff at a level this entry is confident of, and the flax headings describe fibre and fibre waste rather than the woody core.',
    'Markets for shive are regional and shaped by haulage economics; availability and use differ substantially between regions.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Shive: Woody Flax Core From Scutching',
    description:
      'Shive as a by-product of flax fibre: the woody core shattered out at scutching, screened into fractions, and sold for bedding, board and biocomposites.',
    keywords: [
      'shive',
      'flax shives',
      'scutching by-product',
      'flax bedding',
      'biocomposites',
    ],
  },
  structuredData: { article: true },
};
