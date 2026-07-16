import type { CommodityProductContent } from '@/types/content';

export const cottonseedMeal: CommodityProductContent = {
  id: 'commodity-product-cottonseed-meal',
  slug: 'cottonseed-meal',
  contentType: 'commodity-product',
  title: 'Cottonseed Meal',
  alternativeNames: [
    'Cotton seed meal',
    'Cottonseed oilcake',
    'Cottonseed cake',
  ],
  category: 'Oilseed crushing co-product',
  subcategory: 'Protein meal',
  productClass: 'co-product',
  derivedFrom: { type: 'commodity', slug: 'cottonseed' },
  physicalForm: 'meal',
  summary:
    'Cottonseed meal is the de-oiled solid fraction from crushing cottonseed. It is a well-regarded ruminant protein whose market is bounded by gossypol: the compound stays with the meal when refining strips it from the oil.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cottonseed meal is what a crushing plant has left once the oil has been taken out of cottonseed. It is a co-product with a real market — a protein concentrate bought by feed mills and cattle feeders, particularly in cotton-growing regions where it is locally abundant and freight-advantaged against soybean meal shipped in.',
    },
    {
      type: 'paragraph',
      text: 'Its defining characteristic is not what it contains but where it may go. Gossypol remains in the meal, so cottonseed meal is a ruminant feed first and a monogastric feed only under constraint. The meal has good protein, and that protein is worth less than it would be in a material without the restriction — the discount is structural.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Co-product of cottonseed crushing' },
    { label: 'Made from', value: 'Cottonseed (Gossypium species)' },
    { label: 'Companion stream', value: 'Cottonseed oil, from the same crush' },
    {
      label: 'Defining constraint',
      value: 'Gossypol stays with the meal; use concentrates in ruminant diets',
    },
    {
      label: 'Forms',
      value: 'Solvent-extracted meal, expeller cake, and screw-pressed cake',
    },
    {
      label: 'Key attributes',
      value: 'Protein, fibre, free gossypol status, residual oil, moisture',
    },
  ],
  sections: [
    {
      id: 'gossypol-and-processing',
      heading: 'Gossypol, processing, and the free fraction',
      body: [
        {
          type: 'paragraph',
          text: 'The gossypol in cottonseed is present as a free, biologically active form and a bound form associated with protein. What matters in feed is the free fraction, and processing conditions influence how much of the total remains free: heat during processing binds gossypol to protein, reducing the free fraction — but the same heat, applied harder, damages protein quality. The processor is therefore working between two failure modes, and the meals that reach the market differ accordingly.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Free gossypol',
              description:
                'The biologically active fraction, the one feed rules and contracts concern themselves with.',
            },
            {
              term: 'Bound gossypol',
              description:
                'Gossypol complexed with protein during processing, and not biologically active in the same way.',
            },
            {
              term: 'Expeller versus extracted',
              description:
                'Pressing alone leaves more residual oil and a different heat history than pressing followed by solvent extraction, which affects both energy value and the free gossypol outcome.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Constraint stated, not quantified',
          text: 'Permitted uses and any free gossypol limits in feed are set by feed-safety authorities and differ by jurisdiction; inclusion depends on species, age, and diet. AgricultureID publishes no limits, inclusion rates, or dosages. Consult the applicable authority.',
        },
      ],
    },
    {
      id: 'feed-role',
      heading: 'Role in feed',
      body: [
        {
          type: 'paragraph',
          text: 'Cottonseed meal goes chiefly to beef and dairy cattle, where rumen function affords substantial tolerance and the meal’s protein is well used. Its fibre content is higher than dehulled soybean meal’s, because hull is not always fully removed before crushing, and lower-fibre and higher-fibre grades exist depending on the degree of dehulling.',
        },
        {
          type: 'paragraph',
          text: 'In pig and poultry diets the meal is used sparingly or not at all, and where it is used, the level is a decision made against the applicable feed rules and the free gossypol content of the specific lot — not against a general figure for the ingredient.',
        },
      ],
    },
    {
      id: 'handling',
      heading: 'Handling and storage',
      body: [
        {
          type: 'paragraph',
          text: 'Meal ships in bulk and in bags and is often pelleted. It is hygroscopic and will cake and heat if held moist, and expeller grades carrying more residual oil have shorter keeping quality. Meal that has heated in store has lost protein availability, and for this material the heat history is doubly consequential: it bears on gossypol binding as well as on protein quality.',
        },
      ],
    },
  ],
  primaryUses: ['feed'],
  secondaryUses: ['industrial'],
  majorQualityAttributes: [
    'Protein content',
    'Free gossypol status (contract- and jurisdiction-defined)',
    'Fibre content (degree of dehulling)',
    'Residual oil content',
    'Moisture content',
  ],
  processContext:
    'The de-oiled solids from crushing cottonseed, produced by pressing, solvent extraction, or both; heat during processing binds part of the gossypol but excessive heat damages protein. Cottonseed oil is the simultaneous co-product.',
  storageContext:
    'Bulk or bagged, commonly pelleted; hygroscopic and liable to cake or heat if held moist, with expeller grades keeping less well.',
  commodityCodes: [
    {
      system: 'HS',
      code: '2306.10',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Oil-cake and other solid residues resulting from the extraction of cotton seeds.',
    },
  ],
  connections: [
    { type: 'crop', slug: 'cotton' },
    { type: 'commodity', slug: 'cottonseed' },
    { type: 'livestock', slug: 'cattle' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
  ],
  relatedTopics: [{ type: 'commodity-product', slug: 'cottonseed-oil' }],
  imageIdentity: 'unavailable',
  glossaryTerms: ['ruminant'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Cottonseed meal as a feed protein and its processing',
    },
    {
      sourceId: 'efsa',
      citedFor:
        'Gossypol in cottonseed meal as a documented feed-safety hazard',
    },
    {
      sourceId: 'nap-nrc',
      citedFor: 'Cottonseed meal and gossypol tolerance in livestock nutrition',
    },
    {
      sourceId: 'usda',
      citedFor: 'Cottonseed meal product description and market context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Feed-ingredient naming, permitted uses, and gossypol rules are jurisdiction-specific.',
  limitations: [
    'This is a reference description, not a feed formulation, nutritional specification, or feed-safety assessment.',
    'No free gossypol limits, inclusion rates, protein figures, or processing conditions are given here; authorities, standards, and contracts set them.',
    'The relationship between processing heat, bound gossypol, and protein damage is stated qualitatively and varies by plant and process.',
    'Feed use, species restrictions, and labelling are determined by the feed regulations of the relevant jurisdiction.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Cottonseed Meal: Co-Product of Cottonseed Crushing',
    description:
      'Cottonseed meal as a crushing co-product: why gossypol stays with the meal, free versus bound fractions, its ruminant feed role, and storage and handling.',
    keywords: [
      'cottonseed meal',
      'free gossypol',
      'cottonseed cake',
      'ruminant protein feed',
      'cottonseed crushing',
    ],
  },
  structuredData: { article: true },
};
