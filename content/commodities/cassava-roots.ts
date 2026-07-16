import type { CommodityContent } from '@/types/content';

export const cassavaRoots: CommodityContent = {
  id: 'commodity-cassava-roots',
  slug: 'cassava-roots',
  contentType: 'commodity',
  title: 'Cassava Roots',
  alternativeNames: ['Manioc roots', 'Fresh cassava', 'Tapioca root', 'Yuca'],
  category: 'Root and tuber commodity',
  subcategory: 'Fresh cassava storage roots',
  commodityClass: 'root-tuber',
  physicalForm: 'root-tuber',
  harvestedPart: 'Storage root (a true root thickened with starch)',
  sourceCrop: { type: 'crop', slug: 'cassava' },
  summary:
    'Cassava roots are the starchy storage roots lifted from the cassava plant. They are bulky, high in water, and deteriorate within days of harvest, so the fresh root is traded over short distances while most of the crop is processed near where it is grown.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cassava roots are the harvested commodity of the cassava plant: swollen storage roots, rich in starch, lifted by hand or by lifter and detached from the stem. Unlike the potato, which is a stem tuber, the cassava root is a true root — it carries no buds, cannot be replanted, and once severed from the plant it has no dormancy to fall back on.',
    },
    {
      type: 'paragraph',
      text: 'That biology dominates the trade. The fresh root is heavy, wet, and short-lived, so the commercial reality of cassava is that the root is usually converted close to where it was lifted, into dried chips, starch, flour, or fermented foods, and it is those derived products that travel. A page about the cassava commodity is therefore largely a page about how quickly the root must be dealt with, and what it is turned into.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Root and tuber' },
    { label: 'Parent crop', value: 'Cassava (Manihot esculenta)' },
    { label: 'Harvested part', value: 'Storage root (true root, not a tuber)' },
    { label: 'Principal uses', value: 'Food, feed, and industrial starch' },
    {
      label: 'Defining constraint',
      value: 'Deterioration begins within days of lifting',
    },
    {
      label: 'Processing requirement',
      value: 'Cyanogenic glycosides reduced by processing before food use',
    },
    {
      label: 'Main products',
      value: 'Starch, gari and other fermented foods, dried chips',
    },
  ],
  sections: [
    {
      id: 'what-the-commodity-is',
      heading: 'What the commodity is',
      body: [
        {
          type: 'paragraph',
          text: 'The traded root is a tapered, starch-filled organ with a thin outer periderm and a thicker cortex enclosing the starchy parenchyma, plus a central fibrous strand. The peel fractions and the flesh separate readily, which is why peeling is the first operation in almost every processing route and why peel accumulates as a distinct residual stream at processing sites.',
        },
        {
          type: 'paragraph',
          text: 'Cassava varieties are grouped in trade as sweet or bitter types. The distinction is not a flavour note but a compositional one: it reflects how much cyanogenic glycoside the root carries, and it governs which processing route a lot must take before it can be eaten. Buyers therefore care about type as well as about size and soundness.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Root, not tuber',
          text: 'Cassava roots are true roots; potato and yam are stem and tuber organs respectively. The distinction matters commercially: a cassava root cannot be used as planting material, so cassava has no seed-root trade equivalent to the seed potato.',
        },
      ],
    },
    {
      id: 'perishability',
      heading: 'Perishability and the processing window',
      body: [
        {
          type: 'paragraph',
          text: 'Cassava is among the most perishable of the starchy staples. Within a very short time of lifting, the root begins post-harvest physiological deterioration — a vascular discolouration, spreading from wounds and from the cut end, that renders the flesh unacceptable well before any microbial rot takes hold. Microbial spoilage then follows. Mechanical damage during lifting accelerates both, because deterioration starts at wounds.',
        },
        {
          type: 'paragraph',
          text: 'There is no equivalent of the potato store for fresh cassava at commercial scale. The practical response is speed: roots move from field to processing within a narrow window, and the trade is organised around proximity rather than around storage. Where fresh roots are sold, chains are short and local. Drying, starch extraction, and fermentation all serve to convert a perishable root into a stable, transportable product.',
        },
      ],
    },
    {
      id: 'safety-and-processing',
      heading: 'Cyanogenic glycosides and the need for processing',
      body: [
        {
          type: 'paragraph',
          text: 'Cassava roots naturally contain cyanogenic glycosides, and it is a settled point of food science that these must be reduced by adequate processing before the root is consumed. This is not an incidental quality matter — it is the reason cassava processing exists in the forms it does. Peeling, grating, soaking, fermenting, pressing, drying, and cooking, used in the combinations traditional to each product, are the operations by which the raw root becomes food.',
        },
        {
          type: 'paragraph',
          text: 'How much processing a lot needs depends on the variety type, and bitter types are handled through more thorough routes than sweet ones. AgricultureID states this at reference level only: it publishes no compositional limits and no processing procedures, because both are matters for national food-safety authorities and for the applicable food standard, not for an encyclopaedia entry.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Reference framing, not guidance',
          text: 'This entry records that adequate processing is required and why. It is not a food-safety instruction, a processing method, or a compliance statement. Consult FAO guidance, the applicable national food authority, and the relevant standard.',
        },
      ],
    },
    {
      id: 'uses-and-pathways',
      heading: 'Uses and product pathways',
      body: [
        {
          type: 'paragraph',
          text: 'Cassava supports several genuinely distinct pathways from the same root. Wet processing extracts starch, which serves food and a wide range of industrial users. Fermented and dried food routes produce gari and related granular and flour products, particularly across West Africa. Drying and chipping produces a stable chip traded for feed compounding and for fermentation feedstock, including ethanol. Peel, generated in volume wherever roots are processed, is a residual stream that is put to feed use rather than simply discarded.',
        },
        {
          type: 'list',
          items: [
            'Food — fermented and dried products such as gari, and starch for food use',
            'Industrial — native and modified starch for non-food users',
            'Feed — dried chips and pellets, and processing residues',
            'Energy — fermentation feedstock for ethanol production',
          ],
        },
      ],
    },
    {
      id: 'quality-and-trade',
      heading: 'Quality attributes and trade',
      body: [
        {
          type: 'paragraph',
          text: 'Fresh cassava is not graded through anything like the elaborate national standards applied to cereals. Buyers at a processing gate assess root size and shape, freedom from mechanical damage, absence of vascular streaking, and the time elapsed since lifting — with the last of these often decisive. Starch factories additionally value dry matter, since it determines how much product a delivery yields, and reject consignments that have waited too long.',
        },
        {
          type: 'paragraph',
          text: 'Because the fresh root travels poorly, international trade in cassava is dominated by derived products rather than by the commodity described on this page. Statistics for "cassava" in trade data usually refer to dried, chipped, or starch forms; the fresh root itself moves in local and regional chains.',
        },
      ],
    },
  ],
  primaryUses: ['food', 'industrial'],
  secondaryUses: ['feed', 'energy'],
  majorQualityAttributes: [
    'Time elapsed since lifting',
    'Freedom from vascular streaking',
    'Freedom from mechanical damage',
    'Root size and shape',
    'Dry matter (for starch processing)',
    'Variety type (sweet or bitter)',
  ],
  commonDefects: [
    'Post-harvest physiological deterioration (vascular streaking)',
    'Microbial soft rot',
    'Mechanical damage and broken roots',
    'Woody or fibrous roots',
    'Adhering soil',
  ],
  moistureContext:
    'The fresh root is high in water and is neither dried nor traded on a moisture basis as delivered. Moisture matters at the next step: drying to a stable chip or flour is one of the main routes by which cassava is made storable.',
  storageContext:
    'Fresh roots have no practical commercial store: deterioration starts within days of lifting, so the crop is processed close to the field rather than held.',
  transportContext:
    'Bulky and heavy relative to its dry matter, and short-lived, so fresh roots move over short distances in bags, carts, and trucks; long-distance trade is in dried and processed forms.',
  majorProducingRegions: [
    'Sub-Saharan Africa',
    'Southeast Asia',
    'South America',
  ],
  majorTradingRegions: [
    'Southeast Asia (principal exporting region for derived products)',
    'East Asia (importing region for chips and starch)',
    'Sub-Saharan Africa (largely domestic and regional chains)',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '0714.10',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Manioc (cassava), fresh, chilled, frozen or dried, whether or not sliced or in pellets. The subheading spans fresh roots and dried forms.',
    },
    {
      system: 'FAOSTAT',
      code: '125',
      sourceId: 'faostat',
      note: 'FAOSTAT item "Cassava, fresh".',
    },
  ],
  primaryProducts: [
    { type: 'commodity-product', slug: 'cassava-starch' },
    { type: 'commodity-product', slug: 'gari' },
  ],
  byProducts: [{ type: 'commodity-product', slug: 'cassava-peel' }],
  connections: [
    { type: 'post-harvest', slug: 'sun-drying' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  relatedTopics: [
    { type: 'commodity', slug: 'sweet-potatoes' },
    { type: 'commodity', slug: 'yams' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Cassava as a commodity, processing requirement, and food uses',
    },
    {
      sourceId: 'iita',
      citedFor:
        'Cassava root handling, deterioration, and West African processing routes',
    },
    {
      sourceId: 'embrapa',
      citedFor: 'Cassava root processing and starch pathway context',
    },
    {
      sourceId: 'faostat',
      citedFor: 'Commodity item classification and coverage',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global, with production concentrated in the tropics. Food standards governing cassava products are jurisdiction-specific.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not a food-safety instruction, processing method, or compliance statement.',
    'No compositional, cyanogenic-glycoside, dry-matter, or holding-time figures are given here — these are matters for the applicable food standard and national authority.',
    'Trade statistics reported for cassava usually cover dried and processed forms rather than the fresh root described here.',
    'Regions are named to indicate where cassava is grown and where its products move, not to rank them by volume.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Cassava Roots: The Fresh Traded Root Commodity',
    description:
      'Cassava roots as a commodity: why the lifted root deteriorates within days, why processing is required before food use, and the starch, gari, and chip pathways.',
    keywords: [
      'cassava roots',
      'manioc',
      'cassava commodity',
      'cassava processing',
      'root deterioration',
    ],
  },
  structuredData: { article: true },
};
