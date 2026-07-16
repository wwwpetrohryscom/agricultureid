import type { CommodityContent } from '@/types/content';

export const yams: CommodityContent = {
  id: 'commodity-yams',
  slug: 'yams',
  contentType: 'commodity',
  title: 'Yams',
  alternativeNames: ['Ware yam', 'True yam', 'Igname', 'Ñame'],
  category: 'Root and tuber commodity',
  subcategory: 'Fresh yam tubers (Dioscorea spp.)',
  commodityClass: 'root-tuber',
  physicalForm: 'root-tuber',
  harvestedPart: 'Tuber (an underground stem organ of Dioscorea species)',
  sourceCrop: { type: 'crop', slug: 'yam' },
  summary:
    'Yams are the large tubers of Dioscorea species, traded fresh as a food staple, principally in West Africa. Unlike most root crops, the yam tuber has a true dormancy, which — with curing and ventilated barn storage — gives it a keeping life measured in months.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Yams are the harvested tubers of cultivated Dioscorea species — chiefly white yam, water yam, and yellow yam. They are the largest of the traded starchy staples by individual unit: a single tuber can be a substantial object, handled and sold one at a time rather than scooped in bulk, which shapes everything about how the commodity is graded, carried, and stored.',
    },
    {
      type: 'paragraph',
      text: 'The yam is a genuine tuber with a dormant period after harvest, and that dormancy is the commercial asset of the crop. Where cassava roots must be processed within days, a cured yam held in a ventilated barn can be kept for months and released to market as prices and needs dictate. Yam is consequently both a food staple and a store of value in the systems that grow it.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Root and tuber' },
    { label: 'Parent crop', value: 'Yam (Dioscorea spp.)' },
    { label: 'Harvested part', value: 'Tuber (underground stem organ)' },
    { label: 'Principal use', value: 'Food — fresh consumption and flour' },
    {
      label: 'Keeping quality',
      value: 'Months, on dormancy plus curing and ventilated storage',
    },
    {
      label: 'Second trade category',
      value: 'Seed yam — tubers and setts kept for planting',
    },
    { label: 'Main production region', value: 'West Africa (the yam belt)' },
  ],
  sections: [
    {
      id: 'what-the-commodity-is',
      heading: 'What the commodity is',
      body: [
        {
          type: 'paragraph',
          text: 'The traded yam is a tuber, an underground stem organ, and not a root — the distinction it shares with the potato and not with cassava or sweet potato. Several species are grown and traded, and they are not commercially interchangeable: white yam is prized for pounding and holds a premium in West African markets, water yam is more productive and stores differently, and yellow yam occupies its own niche. Buyers deal in species and local variety names, not in an undifferentiated "yam".',
        },
        {
          type: 'paragraph',
          text: 'Because the unit is large and the value per tuber is high, yams are traded by the piece and by the heap far more than by weight. Tubers are assessed individually — for size, shape, wholeness of the skin, and freedom from rot at the cut head — in a way that would be impractical for a bulk commodity.',
        },
      ],
    },
    {
      id: 'ware-and-seed-yam',
      heading: 'Ware yam and seed yam',
      body: [
        {
          type: 'paragraph',
          text: 'Yam production has two outputs from the same crop. Ware yam is the tuber sold for eating and is what this entry describes. Seed yam is planting material: small whole tubers or cut setts reserved from the harvest or grown deliberately for the purpose, traded as its own category and valued on sprouting capacity and health rather than on eating quality.',
        },
        {
          type: 'paragraph',
          text: 'The two compete for the same harvest, which is a defining economic feature of the crop: every tuber held back for planting is one not sold for food, and the share of a harvest committed to seed is substantial. This is a real trade split, comparable in kind to the ware and seed division in potatoes, though it operates through farmer and market channels rather than through a formal certification scheme in most producing areas.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'One crop, two commodities',
          text: 'Seed yam is a separate commercial category from ware yam. This entry covers the ware tuber; the seed yam trade is noted here only to mark the distinction.',
        },
      ],
    },
    {
      id: 'curing-and-barn-storage',
      heading: 'Curing, dormancy, and barn storage',
      body: [
        {
          type: 'paragraph',
          text: 'Harvest wounds — especially at the head, where the tuber is severed — are the main route by which rots enter, so yams are cured after lifting to let the wound tissue suberise and a protective layer form. Cured tubers then enter storage during their dormant period, and dormancy is what makes long holding possible: while it lasts, the tuber does not sprout and its losses are limited to respiration and moisture.',
        },
        {
          type: 'paragraph',
          text: 'Traditional yam barns — shaded, well-ventilated structures where tubers are tied individually to a frame — remain the characteristic storage system, and their logic is sound: shade limits heat load, airflow removes respiration heat and moisture, and individual placement lets a spoiling tuber be spotted and removed before it affects its neighbours. Losses over a storage season come from rots, from weevils and other storage insects, from continued respiration, and eventually from sprouting once dormancy breaks.',
        },
      ],
    },
    {
      id: 'quality-defects-and-trade',
      heading: 'Quality, defects, and trade',
      body: [
        {
          type: 'paragraph',
          text: 'Quality judgements centre on tuber size, shape regularity, skin integrity, and the condition of the head. Yam nematode damage, showing as dry rot beneath the skin, and wet rots spreading from wounds are the defects that most often destroy value, and both may be advanced before they are obvious from outside. Cracked, forked, and mechanically damaged tubers are discounted because they neither store nor display well.',
        },
        {
          type: 'list',
          items: [
            'Dry rot associated with yam nematode',
            'Wet and soft rots entering through wounds and the cut head',
            'Storage insect and weevil damage',
            'Mechanical damage, cracks, and broken tubers',
            'Sprouting once dormancy breaks',
            'Forked or misshapen tubers',
          ],
        },
        {
          type: 'paragraph',
          text: 'Trade is overwhelmingly domestic and regional within the West African yam belt, with a smaller export flow serving diaspora markets. Beyond fresh consumption, tubers are dried and milled into yam flour, which is a stable and transportable form, and out-of-specification tubers find food and feed uses locally.',
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['seed', 'feed'],
  majorQualityAttributes: [
    'Tuber size and weight',
    'Shape regularity and freedom from forking',
    'Skin integrity',
    'Condition of the cut head',
    'Species and local variety',
    'Curing status',
  ],
  commonDefects: [
    'Dry rot associated with yam nematode',
    'Wet and soft rots from wounds',
    'Storage insect and weevil damage',
    'Mechanical damage and cracking',
    'Sprouting',
    'Forked and misshapen tubers',
  ],
  moistureContext:
    'Traded as a fresh, high-moisture tuber rather than on a moisture basis. Respiration and transpiration cause steady weight loss through a storage season, which ventilated barn storage manages rather than eliminates.',
  storageContext:
    'Cured to heal harvest wounds, then held through dormancy in shaded, well-ventilated barns where tubers are placed individually and inspected for rots.',
  transportContext:
    'Large, heavy, and easily bruised; moves by the piece in baskets, crates, and open trucks over regional distances, with a smaller export flow in cartons.',
  majorProducingRegions: [
    'West Africa (the yam belt)',
    'Caribbean',
    'Southeast Asia and Oceania',
  ],
  majorTradingRegions: [
    'West Africa (largely domestic and regional trade)',
    'Europe and North America (diaspora import markets)',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '0714.30',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Yams (Dioscorea spp.), fresh, chilled, frozen or dried, whether or not sliced or in pellets.',
    },
    {
      system: 'FAOSTAT',
      code: '137',
      sourceId: 'faostat',
      note: 'FAOSTAT item "Yams".',
    },
  ],
  connections: [
    { type: 'post-harvest', slug: 'curing' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
    { type: 'post-harvest', slug: 'sun-drying' },
  ],
  relatedTopics: [
    { type: 'commodity', slug: 'cassava-roots' },
    { type: 'commodity', slug: 'sweet-potatoes' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Yam as a traded staple commodity and its food uses',
    },
    {
      sourceId: 'iita',
      citedFor: 'Yam species, seed yam systems, curing, and barn storage',
    },
    {
      sourceId: 'cgiar',
      citedFor: 'Yam post-harvest losses and storage context',
    },
    {
      sourceId: 'faostat',
      citedFor: 'Commodity item classification and coverage',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global reference, with production and trade concentrated in West Africa. Market conventions and standards are local and jurisdiction-specific.',
  limitations: [
    'This entry describes the ware commodity in reference terms; it is not a grading determination, storage protocol, or customs classification.',
    'No storage durations, loss rates, curing conditions, or seed-share figures are given — these vary by species, system, and season.',
    'Seed yam is a distinct trade category and is noted only for the distinction; it is not described here.',
    'Regions are indicative of where yam is grown and traded; no ranking or output share is implied by the order given.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Yams: The Traded Dioscorea Tuber',
    description:
      'Yams as a commodity: the Dioscorea species traded, how ware yam differs from seed yam, and why dormancy, curing, and barn storage give months of keeping life.',
    keywords: [
      'yams',
      'yam commodity',
      'Dioscorea',
      'seed yam',
      'yam barn storage',
    ],
  },
  structuredData: { article: true },
};
