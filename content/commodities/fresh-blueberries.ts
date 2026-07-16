import type { CommodityContent } from '@/types/content';

export const freshBlueberries: CommodityContent = {
  id: 'commodity-fresh-blueberries',
  slug: 'fresh-blueberries',
  contentType: 'commodity',
  title: 'Fresh Blueberries',
  alternativeNames: ['Highbush blueberries', 'Fresh-market blueberries'],
  category: 'Fresh fruit commodity',
  subcategory: 'Soft fruit (berry)',
  commodityClass: 'fruit',
  physicalForm: 'fresh-produce',
  harvestedPart:
    'Berry (the individual fruit, harvested loose with its bloom intact)',
  sourceCrop: { type: 'crop', slug: 'blueberry' },
  summary:
    'Fresh blueberries are individually harvested berries traded in retail punnets. Sugar does not increase after picking, so harvest maturity fixes eating quality, while firmness, the waxy bloom, and rapid cooling determine whether the lot survives to market.',
  introduction: [
    {
      type: 'paragraph',
      text: "Fresh blueberries are a berry commodity that reaches the consumer in essentially the state it left the field: loose individual fruit, dropped into the punnet it will be sold in, often at the point of picking. There is no packing line that can rescue a poor lot by trimming or presentation — what is picked is what is sold, and the picker's selection is the grading step.",
    },
    {
      type: 'paragraph',
      text: 'The fruit carries two features the trade organises itself around. The first is the bloom, the waxy surface layer that gives a blueberry its dusty blue appearance; it is fragile, it is a visible record of how gently the fruit has been handled, and rubbing it off costs money. The second is that sugar accumulation ends at picking, so a berry picked early is a berry that will never taste right. This entry describes the harvested fruit; the bush is covered on the blueberry crop entry.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Fruit (fresh produce)' },
    {
      label: 'Parent crop',
      value: 'Blueberry (Vaccinium spp.), mainly highbush types',
    },
    { label: 'Harvested part', value: 'Individual berry, picked loose' },
    {
      label: 'Sugar after harvest',
      value: 'Does not increase: eating quality is set at picking',
    },
    {
      label: 'Chilling sensitivity',
      value: 'Not chilling-sensitive; tolerates near-freezing storage',
    },
    {
      label: 'Signature quality marker',
      value: 'Intact waxy bloom on the berry surface',
    },
    {
      label: 'Pack format',
      value: 'Field-packed into retail punnets, frequently vented',
    },
  ],
  sections: [
    {
      id: 'what-the-commodity-is',
      heading: 'What the commodity is',
      body: [
        {
          type: 'paragraph',
          text: 'A blueberry lot is a quantity of punnets of a declared cultivar, specified on berry size, firmness, colour, and bloom. Cultivar governs berry size, firmness, flavour, and the size of the picking scar, and the fresh trade has been driven hard toward firm, large-berried cultivars because firmness is what survives the chain. Fruit destined for freezing or processing is a separate stream harvested by machine, and it is bought on entirely different terms.',
        },
        {
          type: 'paragraph',
          text: 'Fresh-market fruit is usually hand-picked, both because hands can select ripe berries from a bush carrying berries at several stages and because machines bruise. Mechanical harvesting has advanced into some fresh-market use with soft-catch systems, but the selectivity problem remains: a machine takes what it shakes loose, and unripe berries do not improve afterwards.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Blue is not the same as ripe',
          text: 'A blueberry turns fully blue before it reaches its best eating quality, and it continues to gain sugar and flavour on the bush for some days afterwards. Berries picked at first blue are fully coloured, saleable, and disappointing — a recurring quality failure of the fresh trade.',
        },
      ],
    },
    {
      id: 'ripening-behaviour',
      heading: 'Ripening behaviour and harvest maturity',
      body: [
        {
          type: 'paragraph',
          text: 'Blueberry ripening is an unusual case worth stating carefully. Standard post-harvest references class blueberries as climacteric — the fruit produces ethylene and shows a respiratory rise during ripening — but this classification has been debated, and cultivars differ in how clearly they express the pattern. What is not in dispute is the commercially decisive part: blueberries accumulate no further sugar once detached from the bush.',
        },
        {
          type: 'paragraph',
          text: 'That makes the trade treat blueberries the way it treats a non-climacteric fruit. There is no ripening room, no ethylene dosing, and no expectation that a lot will improve in transit. Berries picked before they have finished developing flavour on the bush arrive fully blue and permanently sub-standard. Harvest maturity is therefore judged by the picker in the field, on colour together with the ease with which the berry detaches, and it is final.',
        },
      ],
    },
    {
      id: 'cooling-and-cold-chain',
      heading: 'Cooling and the cold chain',
      body: [
        {
          type: 'paragraph',
          text: 'A picked blueberry is small, warm, and respiring, and its condition falls away quickly at field temperature. Precooling as soon as possible after picking is the fundamental post-harvest operation, and forced-air cooling through vented punnets is the usual method, because a stack of punnets left to cool passively cools far too slowly at the centre. Unlike tropical fruit, blueberries are not chilling-sensitive and can be held near their freezing point, which is why a well-run blueberry chain achieves a genuinely useful market life.',
        },
        {
          type: 'paragraph',
          text: 'Modified-atmosphere packaging is widely used for long-distance fresh blueberries, raising carbon dioxide around the fruit to slow respiration and suppress grey mould. Berries also travel by air where the season and price justify it. The commodity is unusually well suited to freezing, and individually quick-frozen blueberries form a large parallel trade that does not compete for the same fruit.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Cooling regimes are not published here',
          text: 'Target pulp temperatures, cooling rates, and modified-atmosphere gas mixes for blueberries are cultivar- and pack-specific and belong to sourced post-harvest guidance. AgricultureID gives no figures.',
        },
      ],
    },
    {
      id: 'quality-and-defects',
      heading: 'Quality attributes and defects',
      body: [
        {
          type: 'paragraph',
          text: 'Buyers assess berry size and uniformity, firmness, colour, the completeness of the bloom, dryness of the picking scar, and the proportion of the punnet that is unsound. Because a punnet is a transparent, self-presenting unit, a small number of soft, split, or mouldy berries visible against the wall of the pack condemns the whole thing in a way that would not happen in a carton of apples.',
        },
        {
          type: 'list',
          items: [
            'Grey mould and other decay, spreading between touching berries in the punnet',
            'Softening and shrivel from delayed cooling or an extended chain',
            'Bloom loss from rubbing, exposing a shiny berry that reads as old',
            'Split and cracked berries, often from rain close to harvest',
            'Red or green berries picked before full colour',
            'Wet or torn picking scars that invite decay',
          ],
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'paragraph',
          text: 'Fresh blueberries are eaten as fruit, and the fresh punnet is the highest-value outlet for the crop. A large separate stream is machine-harvested and frozen, supplying baking, dairy, and ingredient markets year-round, and smaller volumes are dried or juiced. Fresh-market fruit that fails on size or firmness but is sound is commonly diverted into the frozen and processing streams rather than discarded.',
        },
        {
          type: 'list',
          items: [
            'Food — fresh berries in retail punnets',
            'Food processing — individually quick-frozen fruit for ingredient use',
            'Beverage and dried — juice, purée, and dried berries from processing-grade fruit',
          ],
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['beverage', 'industrial'],
  majorQualityAttributes: [
    'Berry size and uniformity',
    'Firmness',
    'Completeness of the waxy bloom',
    'Full colour development at picking',
    'Dryness and cleanliness of the picking scar',
    'Freedom from decay within the punnet',
  ],
  commonDefects: [
    'Grey mould and decay',
    'Soft and shrivelled berries',
    'Bloom rub',
    'Split and cracked berries',
    'Under-coloured red or green berries',
    'Torn or wet picking scars',
  ],
  moistureContext:
    'Surface wetness at picking is a decay risk rather than a grading measure; harvesting is avoided while fruit is wet, and water loss afterwards shows as shrivel and softening.',
  storageContext:
    'Precooled promptly, then held refrigerated near the freezing point, commonly under modified atmosphere for long-distance fresh trade; not chilling-sensitive.',
  transportContext:
    'Moves as vented punnets in trays on pallets under refrigeration, and by air on premium routes; the pack itself is engineered for forced-air cooling.',
  majorProducingRegions: [
    'North America',
    'South America',
    'Europe and North Africa',
    'Southern Africa and Oceania',
  ],
  majorTradingRegions: [
    'North America (major producing and importing market)',
    'Europe',
    'South America (counter-season exporting region)',
    'East Asia',
  ],
  storageSystems: [{ type: 'post-harvest', slug: 'cold-storage' }],
  connections: [
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
    { type: 'post-harvest', slug: 'modified-atmosphere-packaging' },
  ],
  relatedTopics: [{ type: 'commodity', slug: 'fresh-strawberries' }],
  imageIdentity: 'unavailable',
  glossaryTerms: ['cultivar'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Blueberries as a traded fresh fruit commodity',
    },
    {
      sourceId: 'usda',
      citedFor: 'Blueberry grade attributes and pack specification context',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Blueberry post-harvest physiology, ripening classification, and cooling',
    },
    {
      sourceId: 'usda-ers',
      citedFor: 'Fresh and processing blueberry market stream context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Grade standards, pack formats, and permitted packaging systems are jurisdiction-specific.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not a grading determination or a cooling specification.',
    'Blueberry ripening is classed as climacteric in standard post-harvest references, but the classification is debated and cultivars differ; the commercially settled point is that sugar does not increase after picking.',
    'No temperatures, cooling rates, or atmosphere compositions are given here; consult sourced post-harvest guidance.',
    'The regions listed indicate where blueberries are grown and sold; no ranking or share of volume is implied.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Fresh Blueberries: Bloom, Firmness, Cold Chain',
    description:
      'Fresh blueberries as a commodity: why sugar never rises after picking, the waxy bloom as a handling record, forced-air precooling, and punnet-level quality.',
    keywords: [
      'fresh blueberries',
      'blueberry bloom',
      'blueberry precooling',
      'blueberry quality',
      'blueberry punnet',
    ],
  },
  structuredData: { article: true },
};
