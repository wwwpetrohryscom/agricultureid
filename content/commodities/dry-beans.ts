import type { CommodityContent } from '@/types/content';

export const dryBeans: CommodityContent = {
  id: 'commodity-dry-beans',
  slug: 'dry-beans',
  contentType: 'commodity',
  title: 'Dry Beans',
  alternativeNames: [
    'Dry edible beans',
    'Common beans',
    'Pulse beans',
    'Phaseolus beans',
  ],
  category: 'Pulse commodity',
  subcategory: 'Common bean market classes',
  commodityClass: 'pulse',
  physicalForm: 'seed',
  harvestedPart: 'Mature dry seed threshed from the pod',
  sourceCrop: { type: 'crop', slug: 'common-bean' },
  summary:
    'Dry beans are the mature seed of the common bean, harvested dry and traded by market class. Navy, pinto, kidney, black, and the other classes are one species commercially divided by colour, size, and shape — and they are not substitutes for one another.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Dry beans are the seed of Phaseolus vulgaris harvested at full maturity, when the pod has dried and the seed has hardened, rather than green as a vegetable. The distinction is fundamental: green beans and dry beans come from the same species but are different commodities with different harvests, different handling, and different buyers.',
    },
    {
      type: 'paragraph',
      text: 'The organising fact of the dry bean trade is the market class. A single species presents as navy, pinto, black, red kidney, great northern, cranberry, and more, and these classes trade as separate commodities at separate prices into separate end uses. A canner contracted for navy beans cannot take pintos. Understanding dry beans as a commodity means understanding that "dry beans" names a family of articles, not one.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Pulse' },
    { label: 'Parent crop', value: 'Common bean (Phaseolus vulgaris)' },
    { label: 'Harvested part', value: 'Mature dry seed threshed from the pod' },
    {
      label: 'The trading unit',
      value:
        'Market class — navy, pinto, black, kidney, great northern, and others',
    },
    {
      label: 'Principal uses',
      value: 'Food — canning, packet dry sales, and milling; some feed; seed',
    },
    {
      label: 'Key quality attributes',
      value: 'Moisture, colour, size uniformity, splits, and cooking quality',
    },
    {
      label: 'Characteristic defect',
      value: 'Hard-to-cook — developed in storage, invisible on inspection',
    },
  ],
  sections: [
    {
      id: 'market-classes',
      heading: 'Market class is the commodity',
      body: [
        {
          type: 'paragraph',
          text: 'Market classes are defined by seed colour, pattern, size, and shape, and they exist because end users need consistency in the finished food. A baked bean requires a bean that holds its skin and shape through canning and looks right in the tin; a black bean is bought for a colour that must not run pale. Classes are therefore kept segregated from the field through to the packer, and admixture of one class into another is a defect in itself, not a matter of taste.',
        },
        {
          type: 'paragraph',
          text: 'Within a class, size uniformity is specified because it drives even cooking and even appearance. Beans that vary in size cook unevenly, and a can containing some firm and some broken beans is a quality failure whatever the average was.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'One species, many commodities',
          text: 'Navy, pinto, black, and kidney beans are all Phaseolus vulgaris. Their separation is commercial rather than botanical — which is precisely why it must be stated on a commodity page and would be out of place on the crop page.',
        },
      ],
    },
    {
      id: 'hard-to-cook',
      heading: 'The hard-to-cook defect',
      body: [
        {
          type: 'paragraph',
          text: 'Dry beans develop a defect that is unusual among commodities: stored warm and humid for long enough, they become progressively resistant to softening on cooking. The beans look sound. They pass visual inspection. They then fail to cook properly, and no amount of extra cooking fully recovers them. The phenomenon is well documented in pulse science and is known as the hard-to-cook defect.',
        },
        {
          type: 'paragraph',
          text: 'For the trade this has a specific consequence: appearance does not certify cooking quality, and lots destined for canning or retail are bought with regard to their storage history and, where the contract calls for it, cooking tests. It is also why storage conditions for dry beans are a quality matter and not only a spoilage matter — a bean can be perfectly sound and commercially ruined at the same time.',
        },
      ],
    },
    {
      id: 'uses-and-preparation-context',
      heading: 'Uses and preparation context',
      body: [
        {
          type: 'paragraph',
          text: 'Most dry beans are eaten. Canning is the largest industrial outlet in many developed markets; elsewhere the trade is dominated by packet and loose sales of dry beans cooked at home. Milling into bean flours and ingredient use in food manufacture are smaller but growing outlets, and off-grade lots and screenings find their way into feed.',
        },
        {
          type: 'list',
          items: [
            'Food — canning, most prominently navy beans for baked beans',
            'Food — packet and bulk dry beans for household cooking',
            'Food ingredient — bean flours and protein ingredients',
            'Feed — off-grade lots and screenings',
            'Seed — retained or certified for planting',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Preparation is a food-safety matter for some classes',
          text: 'Raw and undercooked beans of some classes, kidney beans in particular, are documented as containing lectins that cause illness, and adequate preparation is what addresses this. AgricultureID gives no preparation methods, times, or thresholds — requirements and advice are set by the applicable food-safety authority.',
        },
      ],
    },
    {
      id: 'storage-and-handling',
      heading: 'Storage and handling',
      body: [
        {
          type: 'paragraph',
          text: 'Dry beans are large-seeded and brittle when dry, and they crack and split under mechanical stress that a cereal would absorb. Splits and cracked seed coats are graded against and cost the seller directly, so drops, conveyor speeds, and handling frequency all matter. Beans that are too dry break more; beans that are too moist mould and are prone to the hard-to-cook problem, so the storage window is bounded at both ends.',
        },
        {
          type: 'paragraph',
          text: 'Storage insects, bruchids in particular, are a serious concern in warm climates, and lots destined for food use are protected accordingly. Cool, dry, monitored storage is the standard, and hermetic systems are used where insect pressure is high.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No universal storage figure',
          text: 'Safe storage moisture, temperature, and duration depend on the class, climate, storage system, and holding period. No universal target is given here; consult the applicable national pulse-storage guidance.',
        },
      ],
    },
  ],
  primaryUses: ['food', 'seed'],
  secondaryUses: ['feed'],
  majorQualityAttributes: [
    'Moisture content',
    'Market class purity (freedom from other classes)',
    'Colour and colour uniformity',
    'Size uniformity',
    'Splits and cracked seed coats',
    'Cooking quality',
  ],
  commonDefects: [
    'Hard-to-cook seed developed in storage',
    'Splits and cracked seed coats',
    'Contrasting classes and off-colour beans',
    'Insect damage, particularly bruchids',
    'Mould and storage fungi',
    'Shrivelled and immature seed',
    'Foreign material',
  ],
  moistureContext:
    'Held within a bounded window: too moist and lots mould and develop hard-to-cook character, too dry and the seed splits and cracks in handling. Limits are set by national standards and contracts.',
  storageContext:
    'Stored cool, dry, and monitored, with insect protection central in warm climates; storage history bears directly on cooking quality, not just on soundness.',
  transportContext:
    'Moves in bags and containers and in bulk; handling drops raise splits, and class segregation must be maintained throughout because admixture is itself a defect.',
  majorProducingRegions: [
    'South America',
    'South Asia',
    'Sub-Saharan Africa',
    'North America',
    'East Africa',
  ],
  majorTradingRegions: [
    'North America',
    'South America',
    'East Africa',
    'Europe (major importing region)',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '0713.33',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Kidney beans, including white pea beans (Phaseolus vulgaris), dried and shelled. Other Phaseolus and Vigna species fall under other subheadings of 0713.',
    },
    {
      system: 'FAOSTAT',
      code: '176',
      sourceId: 'faostat',
      note: 'FAOSTAT item "Beans, dry".',
    },
  ],
  storageSystems: [
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
  ],
  connections: [
    { type: 'crop', slug: 'common-bean' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Dry beans as a traded pulse and their food uses',
    },
    {
      sourceId: 'faostat',
      citedFor: 'Commodity item classification and coverage',
    },
    {
      sourceId: 'usda',
      citedFor: 'Dry bean market classes and grading attributes',
    },
    {
      sourceId: 'cgiar',
      citedFor: 'Common bean post-harvest quality and the hard-to-cook defect',
    },
    {
      sourceId: 'efsa',
      citedFor:
        'Lectins in raw and undercooked beans as a documented food-safety consideration',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Market class definitions, grade standards, and classification codes are jurisdiction-specific and versioned.',
  limitations: [
    'This entry is reference information about the commodity; it is not a grading determination, food-safety assessment, or customs classification.',
    'Market class names and definitions differ between markets; a class recognised in one jurisdiction may not be defined in another.',
    'No moisture, size, cooking-time, or defect-tolerance figures are given here — standards and contracts set them, and preparation requirements are a matter for food-safety authorities.',
    'Producing and trading regions are indicative groupings; class-by-class geography differs and is not captured by them.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Dry Beans: Market Classes of the Common Bean',
    description:
      'Dry beans as a commodity: why market class defines the trade, the hard-to-cook storage defect, canning and household uses, and how lots are stored and handled.',
    keywords: [
      'dry beans',
      'dry edible beans',
      'bean market class',
      'hard-to-cook defect',
      'navy beans',
    ],
  },
  structuredData: { article: true },
};
