import type { CommodityContent } from '@/types/content';

export const groundnuts: CommodityContent = {
  id: 'commodity-groundnuts',
  slug: 'groundnuts',
  contentType: 'commodity',
  title: 'Groundnuts',
  alternativeNames: ['Peanuts', 'Earthnuts', 'Monkey nuts (in-shell)'],
  category: 'Oilseed commodity',
  subcategory: 'Leguminous oilseed and edible nut',
  commodityClass: 'oilseed',
  physicalForm: 'seed',
  harvestedPart:
    'Pod formed below ground, containing the kernels traded in shell or shelled',
  sourceCrop: { type: 'crop', slug: 'groundnut' },
  summary:
    'Groundnuts, also called peanuts, are the harvested pods and kernels of Arachis hypogaea, traded in shell or shelled for edible use and for crushing. Because the pod matures in the soil, groundnuts carry a well-documented aflatoxin risk that governs how the commodity is handled.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Groundnuts are traded in two physically distinct forms that determine almost everything downstream. In-shell groundnuts retain the pod; shelled groundnuts are the kernels after the shell is removed. In-shell lots move to roasting and snack markets and, in some markets, to bird food; shelled kernels go to confectionery, peanut butter manufacture, and crushing. The forms carry different specifications, different freight economics, and different HS subheadings.',
    },
    {
      type: 'paragraph',
      text: 'The groundnut is a legume whose pods develop below ground, and this single fact drives the commodity’s handling regime. Pods are lifted with soil contact, are prone to mechanical damage, and enter the chain at a moisture content that must be brought down promptly. Where that is not achieved, the risk that dominates groundnut trade — aflatoxin contamination — rises. No other attribute of the commodity shapes its commercial handling to the same degree.',
    },
  ],
  keyFacts: [
    {
      label: 'Commodity class',
      value: 'Oilseed (a leguminous oilseed and edible nut)',
    },
    { label: 'Parent crop', value: 'Groundnut (Arachis hypogaea)' },
    {
      label: 'Harvested part',
      value: 'Below-ground pod; kernels traded in shell or shelled',
    },
    {
      label: 'Trade forms',
      value: 'In shell and shelled — distinct specifications and codes',
    },
    {
      label: 'Principal uses',
      value: 'Edible use, crushing for oil and cake, feed, and seed',
    },
    {
      label: 'Dominant risk',
      value:
        'Aflatoxin contamination, governed by drying, storage, and sorting',
    },
    {
      label: 'Key quality attributes',
      value:
        'Moisture, kernel size and count, damaged kernels, foreign material',
    },
  ],
  sections: [
    {
      id: 'trade-forms',
      heading: 'In shell and shelled',
      body: [
        {
          type: 'paragraph',
          text: 'The shell is a protective structure, and whether it stays on is a commercial decision with real consequences. In-shell lots are bulkier and cost more to move per unit of kernel, but the shell shields the kernel during handling and storage. Shelled kernels are denser to ship and are what most processors actually want, but they are exposed — once the shell is off, the kernel is vulnerable to mechanical damage, moisture uptake, and mould.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'In-shell groundnuts',
              description:
                'Pods traded whole, typically for roasting and snack markets; graded on pod appearance, fill, and freedom from damage as well as on kernel quality.',
            },
            {
              term: 'Shelled kernels',
              description:
                'Kernels after shelling, graded on size and count, splits, and damage; the form bought by confectioners, peanut butter manufacturers, and crushers.',
            },
            {
              term: 'Blanched kernels',
              description:
                'Kernels with the skin (testa) removed, a further processing step required by some food uses.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Market types — runner, virginia, spanish, and valencia among them — are traded as distinct articles because kernel size, shape, and roasting behaviour differ. A confectioner specifying large kernels and a crusher buying on oil content are not competing for the same lots.',
        },
      ],
    },
    {
      id: 'aflatoxin',
      heading: 'Aflatoxin: the defining quality risk',
      body: [
        {
          type: 'paragraph',
          text: 'Groundnuts are among the commodities most closely associated with aflatoxins, toxic compounds produced by certain Aspergillus species that can colonise the crop before harvest and continue to develop in inadequately dried or poorly stored lots. The association is well documented in the food-safety literature and is the reason groundnut supply chains are built around prompt drying, controlled storage, sampling, and sorting rather than around appearance alone.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Reference statement, not a control programme',
          text: 'AgricultureID states that the aflatoxin risk exists and is material to this commodity. It publishes no limits, no test thresholds, and no treatment or rejection criteria. Maximum levels, sampling plans, and analytical methods are set by food-safety authorities and differ by jurisdiction — consult the applicable authority and the standard in force.',
        },
        {
          type: 'paragraph',
          text: 'Three points matter commercially. First, contamination is heterogeneous: it concentrates in a small proportion of kernels, which is why sampling design carries so much weight and why a clean sample does not certify a lot. Second, it cannot be reversed — a contaminated lot is managed by segregation and sorting, not repaired. Third, the risk is highest where drying is slow, storage is warm and humid, or kernels were damaged by insects or handling, which links this commodity directly to storage practice.',
        },
      ],
    },
    {
      id: 'uses-and-pathways',
      heading: 'Uses and product pathways',
      body: [
        {
          type: 'paragraph',
          text: 'Groundnuts occupy an unusual position: they are both an edible nut and an oilseed, and the split between the two depends on the market. Where a confectionery and peanut butter industry pays a premium for sound, sized kernels, edible use takes the best lots and crushing takes what does not make grade. Where those industries are smaller, a larger share of the crop is crushed outright.',
        },
        {
          type: 'list',
          items: [
            'Edible use — roasted and salted nuts, confectionery, and peanut butter',
            'Crushing — groundnut oil and groundnut cake, produced together',
            'Feed — cake as a protein feed; substandard lots diverted from food use',
            'Seed — retained or certified for planting',
          ],
        },
        {
          type: 'paragraph',
          text: 'Diversion of food-rejected lots into feed is a real commercial pathway, but it is not an escape from the aflatoxin question: feed materials are subject to their own jurisdictional rules, and the fitness of such lots is determined by the applicable feed authority.',
        },
      ],
    },
    {
      id: 'storage-and-handling',
      heading: 'Drying, storage, and sorting',
      body: [
        {
          type: 'paragraph',
          text: 'Groundnuts come out of the ground wet and must be dried without delay — this is the single most consequential step in the chain, and drying that is too slow permits mould development while drying that is too aggressive splits kernels and cracks skins. Once dried, lots are held cool and dry, kept away from moisture re-uptake, and protected from storage insects, whose damage opens kernels to fungal colonisation.',
        },
        {
          type: 'paragraph',
          text: 'Sorting is a quality operation with a safety dimension for this commodity in a way it is not for cereals. Removing discoloured, shrivelled, damaged, and mouldy kernels is how lots are brought toward the specification a buyer requires, and electronic and manual sorting are standard in edible chains. Colour and appearance are used as proxies for a risk that cannot be seen directly, which is exactly why they are proxies and not proof.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No universal storage figure',
          text: 'Safe drying and storage conditions depend on the trade form, climate, storage system, and holding period. No universal target is published here; consult the applicable national groundnut handling and storage guidance.',
        },
      ],
    },
  ],
  primaryUses: ['food', 'oil', 'feed', 'seed'],
  secondaryUses: ['industrial'],
  majorQualityAttributes: [
    'Moisture content',
    'Kernel size and count per unit weight',
    'Splits and damaged kernels',
    'Discoloured and shrivelled kernels',
    'Foreign material',
    'Oil content (crushing lots)',
  ],
  commonDefects: [
    'Mouldy kernels',
    'Insect-damaged kernels',
    'Split and broken kernels',
    'Shrivelled and immature kernels',
    'Discoloured kernels and skins',
    'Rancid kernels',
    'Soil, shell fragments, and foreign material',
  ],
  moistureContext:
    'Lifted at high moisture and dried promptly; both slow drying and over-aggressive drying cause problems, the first favouring mould development and the second splitting kernels. Limits are set by national standards and contracts.',
  storageContext:
    'Held cool and dry, in shell or shelled, with protection from moisture re-uptake and storage insects; insect damage opens kernels to fungal colonisation.',
  transportContext:
    'In-shell lots are bulky and freight-inefficient relative to kernel content; shelled kernels ship denser but are exposed, and both forms require protection from moisture during transit.',
  majorProducingRegions: [
    'East Asia and South Asia',
    'Sub-Saharan Africa',
    'North America',
    'South America',
  ],
  majorTradingRegions: [
    'South Asia',
    'Sub-Saharan Africa',
    'North America',
    'Europe (major importing region for edible kernels)',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '1202.41',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Ground-nuts, not roasted or otherwise cooked, in shell (other than seed for sowing).',
    },
    {
      system: 'HS',
      code: '1202.42',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Ground-nuts, not roasted or otherwise cooked, shelled, whether or not broken (other than seed for sowing).',
    },
    {
      system: 'HS',
      code: '1202.30',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Ground-nuts, seed for sowing.',
    },
    {
      system: 'FAOSTAT',
      code: '242',
      sourceId: 'faostat',
      note: 'FAOSTAT item for groundnuts reported on an in-shell basis.',
    },
  ],
  coProducts: [
    { type: 'commodity-product', slug: 'groundnut-oil' },
    { type: 'commodity-product', slug: 'groundnut-cake' },
  ],
  storageSystems: [
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'sun-drying' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Groundnuts as a traded commodity and aflatoxin as a recognised risk in the chain',
    },
    {
      sourceId: 'faostat',
      citedFor: 'Commodity item classification and in-shell reporting basis',
    },
    {
      sourceId: 'efsa',
      citedFor:
        'Aflatoxins in groundnuts as a documented food and feed safety hazard',
    },
    {
      sourceId: 'usda',
      citedFor: 'Groundnut trade forms, market types, and grading attributes',
    },
    {
      sourceId: 'iita',
      citedFor:
        'Groundnut post-harvest handling and aflatoxin management context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Grade standards, aflatoxin regulation, and classification codes are jurisdiction-specific and versioned.',
  limitations: [
    'This entry is reference information; it is not a grading determination, a food-safety assessment, or customs classification advice.',
    'No aflatoxin limits, sampling plans, test thresholds, or acceptance criteria are given here — these are set by food-safety and feed authorities and differ by jurisdiction.',
    'Market-type definitions and size/count conventions differ between markets and contracts; no figures are given.',
    'Producing and trading regions are given as broad groupings, without ranking and without volume figures.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Groundnuts: In-Shell and Shelled Peanut Trade',
    description:
      'Groundnuts as a commodity: in-shell versus shelled trade forms, the aflatoxin risk that shapes handling, edible and crushing pathways, and drying and sorting.',
    keywords: [
      'groundnuts',
      'peanuts',
      'shelled groundnuts',
      'aflatoxin risk',
      'groundnut trade',
    ],
  },
  structuredData: { article: true },
};
