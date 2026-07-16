import type { CommodityProductContent } from '@/types/content';

export const cassavaPeel: CommodityProductContent = {
  id: 'commodity-product-cassava-peel',
  slug: 'cassava-peel',
  contentType: 'commodity-product',
  title: 'Cassava Peel',
  alternativeNames: ['Cassava peelings', 'Cassava peel mash', 'Manioc peel'],
  category: 'Processing by-product',
  subcategory: 'Root peel residue',
  productClass: 'by-product',
  derivedFrom: { type: 'commodity', slug: 'cassava-roots' },
  physicalForm: 'other',
  summary:
    'Cassava peel is the outer layers taken off the root at the start of every processing route. It accumulates wet and in quantity wherever cassava is processed, rots quickly, and requires processing before it can be fed — which is why it is as often a disposal problem as a feed resource.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Peeling is the first operation in making starch, gari, flour, or chips, so cassava peel is generated wherever cassava is processed at all — in a heap beside a village grater as much as in a skip at a starch factory. It comprises the thin outer periderm and the thicker cortex beneath it, separated from the starchy flesh the processor wants.',
    },
    {
      type: 'paragraph',
      text: 'It is a by-product in the full sense: an unavoidable residual of low value per tonne, produced in volume, and genuinely useful if — and only if — it is dealt with promptly and correctly. Left alone it is a wet, fermenting, fly-attracting heap that no one wants, and that is what a great deal of it becomes.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'By-product of cassava processing' },
    { label: 'Made from', value: 'Cassava roots (Manihot esculenta)' },
    {
      label: 'Fraction',
      value: 'Outer periderm and cortex removed at peeling',
    },
    {
      label: 'Arises at',
      value: 'The first step of every cassava processing route',
    },
    { label: 'Condition as produced', value: 'Wet, bulky, and quick to rot' },
    { label: 'Principal use', value: 'Animal feed, after processing' },
    {
      label: 'Safety note',
      value: 'Carries a higher cyanogenic glycoside load than the flesh',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What cassava peel is',
      body: [
        {
          type: 'paragraph',
          text: 'The cassava root has a thin brown outer skin and, beneath it, a paler cortex that separates fairly cleanly from the starchy parenchyma. Both come away together in most peeling methods, whether by knife or by mechanical peeler, and the peel fraction typically carries a good deal of adhering flesh with it — how much depends on how the peeling was done and how carefully. That adhering starch is why the residue has feed value at all.',
        },
        {
          type: 'paragraph',
          text: 'Peel volumes are substantial relative to processing throughput, and unlike a dry milling residue this one arrives wet. A processing site therefore generates, every day it runs, a large wet stream that begins fermenting immediately. Where processors cluster, the accumulation becomes a local environmental problem — leachate, odour, flies — rather than merely an unused resource.',
        },
      ],
    },
    {
      id: 'safety-and-processing',
      heading: 'Why peel must be processed before feeding',
      body: [
        {
          type: 'paragraph',
          text: 'Cassava roots naturally contain cyanogenic glycosides, and it is well established that the peel fraction carries a higher load of them than the starchy flesh does. Peel therefore cannot simply be carted from the peeling station to the trough: like the root itself, it requires adequate processing before it is fed, and it needs it more.',
        },
        {
          type: 'paragraph',
          text: 'The established routes are drying and, in more developed forms, grating, pressing, and drying the peel into a mash or meal — the same logic as the food processing routes, applied to the residue. Sun-drying is the traditional method and is limited by the same thing that limits all sun-drying: it fails in the wet season, exactly when the peel still arrives. Work by CGIAR centres has developed faster mechanised routes intended to make peel a reliable feed ingredient rather than an intermittent one.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Reference framing, not feeding guidance',
          text: 'AgricultureID records that peel requires adequate processing before feeding and that its cyanogenic glycoside load exceeds that of the flesh. It publishes no limits, inclusion rates, processing procedures, or species guidance. Consult FAO guidance, national feed regulation, and qualified advice.',
        },
      ],
    },
    {
      id: 'uses-and-handling',
      heading: 'Uses and handling',
      body: [
        {
          type: 'paragraph',
          text: 'Processed peel goes to livestock feed, where its adhering starch makes it an energy source, and it is used across ruminant and monogastric systems in producing regions. Beyond feed, peel is composted, digested for biogas, and used as a substrate for mushroom cultivation — all of them routes that make use of a wet organic stream on the spot rather than trying to transport it.',
        },
        {
          type: 'paragraph',
          text: 'Handling is dominated by speed and by grit. Peel must be dried or otherwise stabilised quickly, because a wet heap in a tropical climate spoils in a day or two and moulds thereafter; and because peel is what was in contact with the soil, sand and stones travel with it unless the roots were washed properly first. Grit is abrasive in feed milling and unwelcome in a ration, so washing at the front of the line determines the quality of the residue at the back of it.',
        },
      ],
    },
  ],
  primaryUses: ['feed'],
  secondaryUses: ['energy'],
  majorQualityAttributes: [
    'Moisture content and how quickly it was dried',
    'Adhering starch content',
    'Grit, sand, and stone contamination',
    'Freedom from mould and spoilage',
    'Time elapsed since peeling',
  ],
  processContext:
    'Removed at the peeling station at the front of every cassava processing route, then dried or grated, pressed, and dried into a mash or meal before feed use.',
  storageContext:
    'Unstable as produced: a wet heap ferments and moulds within days in a tropical climate, so peel is dried or used immediately rather than stored in its fresh state.',
  connections: [
    { type: 'crop', slug: 'cassava' },
    { type: 'post-harvest', slug: 'sun-drying' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  glossaryTerms: ['ruminant'],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'iita',
      citedFor:
        'Cassava peel as a processing residue, its feed processing routes, and handling constraints',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Cassava processing residues and the requirement for adequate processing before use',
    },
    {
      sourceId: 'cgiar',
      citedFor: 'Development of mechanised cassava peel processing for feed',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Tropical cassava-processing regions. Feed-ingredient regulation and permitted uses are jurisdiction-specific.',
  limitations: [
    'This is a reference description of a by-product. It is not feeding guidance, a feed formulation, a processing method, or a safety instruction.',
    'No compositional values, cyanogenic glycoside levels, inclusion rates, drying conditions, or holding times are given here.',
    'Peel volume and composition vary with peeling method, root size, and care taken; no universal figures apply.',
    'Feed use and labelling are governed by jurisdiction-specific feed regulations.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Cassava Peel: By-Product of Root Processing',
    description:
      'Cassava peel as a by-product: why it accumulates wet at every processing site, why it must be processed before feeding, and how it is used.',
    keywords: [
      'cassava peel',
      'cassava by-product',
      'peel mash',
      'cassava feed',
      'processing residue',
    ],
  },
  structuredData: { article: true },
};
