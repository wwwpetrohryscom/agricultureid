import type { CommodityContent } from '@/types/content';

export const sugarBeet: CommodityContent = {
  id: 'commodity-sugar-beet',
  slug: 'sugar-beet',
  contentType: 'commodity',
  title: 'Sugar Beet',
  alternativeNames: ['Beet as delivered', 'Factory beet', 'Topped sugar beet'],
  category: 'Sugar crop commodity',
  subcategory: 'Harvested beet roots delivered to the factory',
  commodityClass: 'sugar-crop',
  physicalForm: 'root-tuber',
  harvestedPart: 'Storage root, topped (crown and leaves removed at lifting)',
  sourceCrop: { type: 'crop', slug: 'sugar-beet' },
  summary:
    'Sugar beet as a commodity is the topped root delivered to a processing factory during its campaign. It is bought on weight, sugar content, and the impurities that block crystallisation, with soil tare deducted, and it is clamped only briefly because a stored beet keeps losing sugar.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Sugar beet is the temperate-zone sugar commodity: a pale, conical storage root grown to accumulate sucrose and lifted, topped, and delivered to a factory that extracts it. Like cane, it is sold at essentially one gate under a contract agreed before the crop was ever sown, and like cane it is a commodity whose value cannot be read off a weighbridge alone.',
    },
    {
      type: 'paragraph',
      text: 'The beet trade runs on the campaign: an intense processing season in which factories operate continuously and the whole harvest is lifted, hauled, and worked through. Everything about the commodity — how beet is clamped at the field edge, how tare is assessed, why frost is dreaded — belongs to that seasonal logic rather than to the agronomy of the growing crop.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Sugar crop' },
    { label: 'Parent crop', value: 'Sugar beet (Beta vulgaris)' },
    { label: 'Harvested part', value: 'Storage root, topped at lifting' },
    { label: 'Principal use', value: 'Sugar manufacture' },
    {
      label: 'Paid on',
      value: 'Weight, sugar content, and impurities, less soil tare',
    },
    {
      label: 'Trade structure',
      value: 'Contracted to a factory campaign, not openly traded',
    },
    {
      label: 'Main outputs',
      value: 'White sugar, with beet pulp and beet molasses',
    },
  ],
  sections: [
    {
      id: 'what-is-delivered',
      heading: 'What is delivered to the factory',
      body: [
        {
          type: 'paragraph',
          text: 'The commodity is the root alone. Beet is topped at lifting — the leafy crown is cut away, because crown tissue is low in sugar and rich in the very impurities the factory must later remove — and what goes to the weighbridge is the topped root with whatever soil and stones came with it. Tops are left in the field or taken for fodder; they are not part of the delivered commodity.',
        },
        {
          type: 'paragraph',
          text: 'Two deductions define beet intake. Soil tare is the earth, stones, and trash arriving with the load, established by washing a sample, and it is deducted because a factory will not pay beet prices for soil. Top tare accounts for crown material left on the root. Both are routine, both are measured, and both make the difference between gross delivered weight and the beet actually bought.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Not the beetroot of the vegetable trade',
          text: 'Sugar beet and the red beetroot sold as a vegetable are both Beta vulgaris but are distinct commodities with different types, markets, and destinations. This entry covers the white factory beet grown for sucrose.',
        },
      ],
    },
    {
      id: 'quality-and-payment',
      heading: 'Sugar content and the impurities that matter',
      body: [
        {
          type: 'paragraph',
          text: 'Beet is paid on sugar content measured at intake, not on tonnage alone, and this is where the commodity gets technically interesting. What the factory can actually crystallise depends not only on how much sucrose the root holds but on what else is dissolved alongside it. Certain non-sugar constituents — notably potassium, sodium, and amino nitrogen — hold sucrose in solution through the crystallisation stages and carry it out of the process into molasses instead of into sugar.',
        },
        {
          type: 'paragraph',
          text: 'Because these constituents divert sugar rather than merely dilute it, they are known in the industry as melassigenic — molasses-forming — impurities, and they are measured and priced into beet payment schemes alongside sugar content. A grower can deliver beet high in sugar that nevertheless yields poorly if its impurity load is high. This is the beet analogue of juice purity in cane, and it is the reason beet contracts specify analytical quality rather than a visual grade.',
        },
        {
          type: 'list',
          items: [
            'Sugar content of the delivered root',
            'Melassigenic impurities — potassium, sodium, and amino nitrogen',
            'Soil tare — earth, stones, and trash on the load',
            'Top tare — crown material remaining on the root',
            'Root damage, breakage, and rot',
            'Frost damage and its consequences in processing',
          ],
        },
      ],
    },
    {
      id: 'clamping-and-the-campaign',
      heading: 'Clamping, frost, and the campaign',
      body: [
        {
          type: 'paragraph',
          text: 'Beet cannot all be lifted on the day the factory wants it, so roots are held in clamps — long field-edge heaps — awaiting haulage. A clamp is a holding measure, not a store: the roots respire, generate heat, and consume their own sugar throughout, so a beet held for weeks is worth less than the same beet delivered fresh. Clamps are shaped and sometimes covered to shed water and shed heat, and the campaign is planned to keep the queue short.',
        },
        {
          type: 'paragraph',
          text: 'Frost is the specific hazard of a temperate sugar crop harvested into winter. A frozen root that stays frozen deteriorates slowly, but one that freezes and then thaws has had its cell structure ruptured — sugars leak, rots take hold rapidly, and the tissue turns soft and unusable. Repeated freeze–thaw cycling is worse than steady cold, which is why clamp covering is about temperature stability rather than warmth. Severely frosted beet can be rejected outright, because it will not process.',
        },
      ],
    },
    {
      id: 'processing-and-pathways',
      heading: 'Processing and product pathways',
      body: [
        {
          type: 'paragraph',
          text: 'Beet processing differs from cane milling in a way that shapes the whole product tree. Beet is sliced into strips and the sugar is drawn out with hot water by diffusion rather than by crushing; the juice is then purified, evaporated, and crystallised. Crucially, a beet factory normally produces white sugar directly in a single integrated operation, where a cane mill produces raw sugar that a separate refinery finishes. That is why the primary product of this commodity is beet sugar as such and not a raw intermediate.',
        },
        {
          type: 'paragraph',
          text: 'Two further streams leave the factory with genuine markets of their own. The exhausted beet strips become beet pulp, pressed and often dried and pelleted, and sold as a ruminant feed — a deliberate, valuable output rather than a residue to dispose of. Beet molasses is the final mother liquor, carrying the sucrose the melassigenic impurities refused to release, and it goes to fermentation, yeast production, and feed. Both are treated here as co-products for that reason.',
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['feed', 'energy', 'industrial'],
  majorQualityAttributes: [
    'Sugar content',
    'Melassigenic impurities (potassium, sodium, amino nitrogen)',
    'Soil tare',
    'Top tare',
    'Freedom from frost damage',
    'Freedom from rot and breakage',
  ],
  commonDefects: [
    'Frost damage, especially after freeze–thaw cycling',
    'Rots developing in clamp',
    'Sugar loss through respiration during clamping',
    'Excessive soil tare and stones',
    'Poor or excessive topping',
    'Mechanical damage and broken roots',
  ],
  moistureContext:
    'Beet is delivered as a wet root and is never dried before processing; water is the extraction medium at the factory. Moisture is not a payment term — sugar content and impurity load are.',
  storageContext:
    'Held only briefly in field-edge clamps awaiting haulage. Roots respire and lose sugar throughout, and freeze–thaw damage makes long holding a risk rather than a strategy.',
  transportContext:
    'Hauled in bulk by truck and trailer over short to moderate distances within a factory catchment, scheduled against continuous campaign processing.',
  majorProducingRegions: [
    'Europe',
    'North America',
    'Central Asia and the Russian Federation',
    'East Asia',
  ],
  majorTradingRegions: [
    'Negligible international trade in beet itself — the traded commodity is the sugar',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '1212.91',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Sugar beet. As with cane, trade under this code is minor: beet is processed within the factory catchment where it is grown.',
    },
    {
      system: 'FAOSTAT',
      code: '157',
      sourceId: 'faostat',
      note: 'FAOSTAT item "Sugar beet".',
    },
  ],
  primaryProducts: [{ type: 'commodity-product', slug: 'beet-sugar' }],
  coProducts: [
    { type: 'commodity-product', slug: 'beet-pulp' },
    { type: 'commodity-product', slug: 'beet-molasses' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  relatedTopics: [{ type: 'commodity', slug: 'sugarcane' }],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Sugar beet as a sugar-crop commodity and its processing pathway',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Beet intake quality, tare, clamping, and frost damage context',
    },
    {
      sourceId: 'ec-agri',
      citedFor:
        'Beet sector structure and contracted delivery to factory campaigns',
    },
    { sourceId: 'usda-ers', citedFor: 'Beet sugar sector and product streams' },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Temperate production regions worldwide. Beet payment schemes, tare rules, and contract terms are national or industry-specific.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not a beet payment scheme, factory specification, or customs classification.',
    'No sugar contents, impurity levels, tare percentages, extraction figures, or clamp durations are given here — all are contract-, season-, and factory-specific.',
    'Payment formulae and tare assessment methods differ between beet industries and are set by local agreements and legislation.',
    'Producing regions are indicative groupings, not ranked statistics; beet itself is barely traded across borders.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Sugar Beet: The Root Delivered to the Factory',
    description:
      'Sugar beet as a commodity: roots bought on sugar content and impurities less soil tare, why clamping and frost matter, and the white sugar pathway.',
    keywords: [
      'sugar beet',
      'beet commodity',
      'soil tare',
      'melassigenic impurities',
      'beet campaign',
    ],
  },
  structuredData: { article: true },
};
