import type { CommodityContent } from '@/types/content';

export const rawWool: CommodityContent = {
  id: 'commodity-raw-wool',
  slug: 'raw-wool',
  contentType: 'commodity',
  title: 'Raw Wool',
  alternativeNames: ['Greasy wool', 'Wool in the grease', 'Shorn wool'],
  category: 'Livestock product commodity',
  subcategory: 'Animal fibre',
  commodityClass: 'livestock-product',
  physicalForm: 'fibre',
  harvestedPart:
    'The fleece as shorn from the sheep, unwashed and still carrying grease and contaminants',
  sourceLivestock: { type: 'livestock', slug: 'sheep' },
  summary:
    'Raw wool is the greasy fleece as shorn from sheep, baled and traded before any washing. It is bought on measured fibre attributes — diameter above all, then staple length and strength, yield after scouring, and vegetable matter — rather than on weight alone.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Raw wool, traded as greasy wool, is the fleece taken off the sheep at shearing and pressed into bales without being washed. It leaves the farm carrying everything it accumulated on the animal: wool grease, suint, dust, sand, and plant material. A substantial part of the weight in the bale is therefore not wool, and the buyer knows it. This single fact organises the whole commodity — greasy wool is bought on what will be left after cleaning, not on what is on the scale.',
    },
    {
      type: 'paragraph',
      text: 'Wool is also the most thoroughly measured of the major agricultural fibres. Core and grab samples are taken from bales and tested before sale, so lots are typically offered with an objective measurement certificate attached. The trade runs on those numbers rather than on visual appraisal alone, which makes wool unusual: the commodity is described by laboratory measurement before a buyer ever bids on it.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Livestock product (animal fibre)' },
    {
      label: 'Source animal',
      value: 'Sheep (Ovis aries), overwhelmingly Merino for apparel wool',
    },
    {
      label: 'Traded form',
      value: 'Greasy — pressed into bales unwashed, as shorn',
    },
    {
      label: 'Dominant value driver',
      value: 'Mean fibre diameter — finer wool commands the premium',
    },
    {
      label: 'Other key attributes',
      value: 'Staple length and strength, yield, vegetable matter',
    },
    {
      label: 'Sold via',
      value:
        'Auction and direct sale, usually against a measurement certificate',
    },
    {
      label: 'Principal use',
      value: 'Fibre — textiles, apparel, and interior products',
    },
  ],
  sections: [
    {
      id: 'what-the-commodity-is',
      heading: 'What the commodity is',
      body: [
        {
          type: 'paragraph',
          text: 'The traded lot is a line of baled greasy wool. Before baling, the fleece is skirted — the heavily contaminated edges are removed — and the clip is classed into lines of similar type, because a bale of mixed wool is worth less than the sum of its parts. Classing is the producer’s decision and it is consequential: the commodity that reaches the market is a constructed lot, assembled from a clip according to how the classer grouped it.',
        },
        {
          type: 'paragraph',
          text: 'Wool fibre is a protein fibre with a scaled outer surface and a crimped structure. Those features are why it felts, why it insulates, and why it behaves as it does in spinning. But at the point of trade, wool is not assessed on any of that directly; it is assessed on measured attributes that predict how it will perform and how much clean fibre it contains.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Greasy weight is not wool weight',
          text: 'The mass of a greasy bale includes grease, suint, dust, and vegetable matter. What the trade values is the clean fibre recoverable from it, which is why yield is a headline attribute rather than a detail.',
        },
      ],
    },
    {
      id: 'fibre-diameter',
      heading: 'Fibre diameter: the dominant value driver',
      body: [
        {
          type: 'paragraph',
          text: 'Mean fibre diameter is the single attribute that most determines what a lot of wool is worth. Finer wool is softer against the skin, spins to finer yarns, and serves the apparel market; broader wool is stronger and coarser and goes to carpets, felts, and interior textiles. The price relationship is steep and non-linear — the premium for fineness accelerates at the fine end rather than rising evenly — which is why a small measured difference in diameter can translate into a large difference in return.',
        },
        {
          type: 'paragraph',
          text: 'Diameter is not uniform. It varies along a staple and between staples within a fleece, so the trade reports both the mean and its variability, and the distribution matters to processors because the coarse tail of a lot influences how the fabric feels. Diameter is also not a fixed property of an animal: it responds to nutrition and season, so the same flock can produce measurably different wool from one year to the next.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'No diameter figures are given here',
          text: 'AgricultureID does not publish micron values, category boundaries, or price relationships for wool. The measurement conventions, category definitions, and market premiums are set by testing authorities and by the market, and they change. Consult the applicable testing authority and market reporting for current figures.',
        },
      ],
    },
    {
      id: 'other-attributes',
      heading: 'Yield, staple, and contamination',
      body: [
        {
          type: 'paragraph',
          text: 'Yield is the proportion of the greasy lot that survives scouring as clean fibre. It is the bridge between what is bought and what is usable, and it varies widely with the environment the sheep were run in — dusty, dry country produces heavier, lower-yielding wool than clean pasture. Because yield is measured before sale, the greasy price a buyer offers is really a clean-fibre price working backwards through the measured yield.',
        },
        {
          type: 'list',
          items: [
            'Staple length — determines which processing system the wool suits and how it spins',
            'Staple strength — whether the staple resists breaking, and where along it a break falls',
            'Yield after scouring — the clean fibre recoverable from the greasy lot',
            'Vegetable matter — burr, seed, and plant fragments that must be removed downstream',
            'Colour and brightness — affects what shades the fibre can be dyed to',
          ],
        },
        {
          type: 'paragraph',
          text: 'Staple strength deserves a note because it links directly to the animal’s year. A period of nutritional stress produces a thinner section along the fibre, and the staple tends to break there. A tender staple breaks in processing and yields shorter fibre, which is worth less — so a drought or a hard season is recorded in the wool and is paid for at sale, months later.',
        },
        {
          type: 'paragraph',
          text: 'Vegetable matter is the contamination that matters most, because removing it costs money and damages fibre. Some is combed out mechanically; heavier burr loads may require chemical carbonising, which is harsher. A high vegetable-matter lot is discounted for a reason that is entirely downstream of the farm gate.',
        },
      ],
    },
    {
      id: 'uses-and-pathways',
      heading: 'Uses and processing pathway',
      body: [
        {
          type: 'paragraph',
          text: 'Greasy wool has essentially one destination: scouring. Washing the wool to remove grease, suint, and dirt produces scoured wool, the clean fibre that every subsequent textile operation actually works with. That makes scoured wool the primary product of this commodity in the strict sense — it is the intended output of the first processing step, and greasy wool is not usable as a textile fibre until it exists.',
        },
        {
          type: 'paragraph',
          text: 'Beyond scouring the fibre moves into carding, combing, spinning, and weaving or knitting, and the wool grease recovered from the scouring effluent is refined into lanolin — a real recovered stream, but one that belongs to the scouring process and is not modelled here as a pathway of the greasy commodity.',
        },
        {
          type: 'list',
          items: [
            'Apparel textiles — the destination for finer wools',
            'Carpets, felts, and interior textiles — the destination for broader wools',
            'Insulation and technical textiles',
          ],
        },
      ],
    },
    {
      id: 'storage-and-transport',
      heading: 'Storage and transport context',
      body: [
        {
          type: 'paragraph',
          text: 'Wool is a durable, storable commodity — one of the few livestock products that does not race a clock. Pressed into dense bales it is stable for long periods provided it is kept dry, and it can be warehoused and shipped worldwide without refrigeration. That durability is why wool marketing can use auction systems and stockpiling in a way that perishable livestock products cannot.',
        },
        {
          type: 'paragraph',
          text: 'The real storage risk is moisture. Wool is strongly hygroscopic and takes up water from the air, which both adds weight and, if the bale is genuinely wet, invites mould and fibre damage. Because moisture regain affects mass, clean wool is traded on a defined moisture basis rather than as-is weight. Contamination by foreign fibres — polypropylene from twine or packaging, or dark fibre from other animals — is the other persistent hazard, and it is disproportionately costly because a single stray fibre can show up in a dyed fabric.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Reference description only',
          text: 'This entry describes raw wool as a traded commodity. It is not shearing guidance, animal husbandry advice, or a classing instruction, and it makes no determination about any clip or lot.',
        },
      ],
    },
  ],
  primaryUses: ['fibre'],
  secondaryUses: ['industrial'],
  majorQualityAttributes: [
    'Mean fibre diameter and its variability',
    'Yield after scouring',
    'Staple length',
    'Staple strength and position of break',
    'Vegetable matter content',
    'Colour and brightness',
  ],
  commonDefects: [
    'Tender staples from a period of nutritional stress',
    'High vegetable matter (burr and seed)',
    'Foreign fibre contamination, notably polypropylene from twine or packaging',
    'Dark and medullated fibre in an otherwise white line',
    'Cotted (matted) fleece',
    'Stain and discoloration',
    'Water damage and mould in badly stored bales',
  ],
  moistureContext:
    'Wool is strongly hygroscopic and its mass changes with atmospheric moisture, so clean wool is traded on a defined moisture basis rather than on as-received weight. Genuinely wet bales risk mould and fibre damage.',
  storageContext:
    'Pressed into dense bales and warehoused; stable for long periods if kept dry, which allows auction marketing and stockpiling that perishable livestock products cannot support.',
  transportContext:
    'Shipped as baled greasy wool in containers without temperature control; keeping the bales dry and free of foreign fibre matters more than speed.',
  majorProducingRegions: [
    'Oceania',
    'East Asia',
    'Europe and Central Asia',
    'South America',
    'Southern Africa',
  ],
  majorTradingRegions: [
    'Oceania and South America as principal exporting regions',
    'East Asia as the dominant processing destination',
    'Europe for specialist and fine-apparel processing',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '5101',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Wool, not carded or combed, at 4-digit heading level; subheadings distinguish greasy wool from degreased and carbonised wool, and shorn wool from other wool.',
    },
  ],
  primaryProducts: [{ type: 'commodity-product', slug: 'scoured-wool' }],
  connections: [
    { type: 'livestock', slug: 'sheep' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Wool as a traded animal fibre and its position in livestock production',
    },
    {
      sourceId: 'faostat',
      citedFor: 'Greasy wool item coverage and producing-region context',
    },
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Wool sheep breed diversity and production-system context',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Wool clip preparation, classing, and marketing context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Measurement conventions, category definitions, and selling systems are set by national testing authorities and market bodies and differ between wool-producing countries.',
  limitations: [
    'A reference description of the commodity — not shearing, husbandry, or classing guidance, and not a valuation of any clip.',
    'No fibre diameter values, category boundaries, yield figures, or price relationships are given: those are set by testing authorities and by the market, and they change.',
    'Fibre attributes vary with breed, nutrition, season, and environment; no universal values are stated.',
    'Producing and processing regions are indicative groupings, not ranked statistics.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Raw Wool: Greasy Wool as a Traded Fibre',
    description:
      'Raw greasy wool as a commodity: why fibre diameter dominates its value, how yield, staple and vegetable matter are assessed, and why it is sold on measurement.',
    keywords: [
      'raw wool',
      'greasy wool',
      'fibre diameter',
      'wool yield',
      'staple strength',
    ],
  },
  structuredData: { article: true },
};
