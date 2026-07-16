import type { CommodityContent } from '@/types/content';

export const juteFibre: CommodityContent = {
  id: 'commodity-jute-fibre',
  slug: 'jute-fibre',
  contentType: 'commodity',
  title: 'Jute Fibre',
  alternativeNames: ['Raw jute', 'Golden fibre', 'Pat', 'Hessian fibre'],
  category: 'Fibre commodity',
  subcategory: 'Water-retted bast fibre from Corchorus species',
  commodityClass: 'fibre',
  physicalForm: 'fibre',
  harvestedPart:
    'Bast fibre stripped from the retted stem in long, continuous lengths',
  sourceCrop: { type: 'crop', slug: 'jute' },
  summary:
    'Jute is a long bast fibre stripped by hand from water-retted stems, produced overwhelmingly in the Ganges–Brahmaputra delta. Traded as raw jute in bales and graded on colour, strength, and root content, it is the fibre of sacking, hessian, and carpet backing.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Jute is the bast fibre of Corchorus species, and it is a commodity with an exceptionally concentrated geography: the great majority of it comes from the deltaic plains of the Indian subcontinent, where a hot, humid climate and abundant slow water supply exactly the conditions its production requires. Its warm golden colour gave it the trade name by which it is still known.',
    },
    {
      type: 'paragraph',
      text: 'Among the bast fibres, jute is the one that reaches the market in the longest lengths, stripped in continuous ribbons that run most of the height of the plant. That length, combined with low cost and adequate strength, is what made jute the packaging fibre of the industrial era and what keeps it in sacks, carpet backing, and geotextiles today.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Fibre' },
    {
      label: 'Parent crop',
      value: 'Jute (Corchorus olitorius and C. capsularis)',
    },
    { label: 'Fibre type', value: 'Bast — from the stem' },
    { label: 'Key process step', value: 'Water retting, then hand stripping' },
    { label: 'Traded types', value: 'Tossa and white jute' },
    {
      label: 'Principal uses',
      value: 'Fibre — sacking, hessian, carpet backing, geotextiles',
    },
    {
      label: 'Graded on',
      value: 'Colour, lustre, strength, root content, defects',
    },
  ],
  sections: [
    {
      id: 'two-types',
      heading: 'Tossa and white jute',
      body: [
        {
          type: 'paragraph',
          text: 'Two species are grown and they are traded as distinct types. Tossa jute (Corchorus olitorius) gives a softer, stronger, silkier fibre and accounts for most of the crop; white jute (C. capsularis) is coarser and paler but tolerates the standing water of low-lying land where tossa struggles. Buyers specify the type, because the fibre properties are different enough to matter to a spinner.',
        },
        {
          type: 'paragraph',
          text: 'The near-monopoly geography follows from what the crop needs after harvest as much as during growth. Retting jute requires large volumes of clean, slow-moving water at a warm temperature, available exactly when the crop is cut. The delta provides this; most places do not, and that is a large part of why the industry has never dispersed.',
        },
      ],
    },
    {
      id: 'retting-and-stripping',
      heading: 'Retting and stripping',
      body: [
        {
          type: 'paragraph',
          text: 'Cut jute stems are bundled and submerged in ponds, ditches, or slow channels, weighted down to keep them under. Over the retting period, microbial action loosens the bond between the bast and the woody core. The retting judgement is the classic one for a bast fibre — stop too early and the fibre will not come away, leave it too long and the fibre itself is attacked, losing strength and darkening — but jute adds its own difficulty: the water itself affects the outcome, and retting in muddy or stagnant water stains the fibre irrecoverably.',
        },
        {
          type: 'paragraph',
          text: 'Stripping is then done by hand. A worker standing in the water takes the retted stems, breaks the base, and pulls the fibre away from the core in long ribbons, washing it as it comes. This step has resisted mechanisation stubbornly, and it is the reason jute production remains labour-intensive and smallholder-based. The stripped fibre is washed, then sun-dried hanging over bamboo racks, and the drying stage strongly influences the final colour and lustre that the grade will turn on.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The water is part of the specification',
          text: 'Unlike dew-retted flax and hemp, jute is retted in standing water, so water quality, depth, and temperature act directly on fibre colour and strength. Retting in poor water is one of the commonest causes of downgrading.',
        },
      ],
    },
    {
      id: 'grading-and-defects',
      heading: 'Grading and defects',
      body: [
        {
          type: 'paragraph',
          text: 'Raw jute is graded in the producing countries under national standards that separate the tossa and white types and rank lots by named grades. The assessment is a hand-and-eye craft: colour and lustre, strength, fineness, length, and the amount of hard, woody root end left on the fibre. Root content matters commercially because those butt ends will not spin and must be cut away, so a lot heavy in roots contains less usable fibre than its weight suggests.',
        },
        {
          type: 'list',
          items: [
            'Excessive hard root ends (the butt of the stem)',
            'Specky and knotty fibre from incomplete retting',
            'Runners — fibre still bound together in strips',
            'Discolouration and staining from muddy or stagnant retting water',
            'Weak fibre from over-retting',
            'Croppings and short lengths reducing spinnable value',
          ],
        },
        {
          type: 'paragraph',
          text: 'Grade names and their definitions belong to the national standards of the producing countries and to the contracts that invoke them; they are versioned and are not reproduced here. Below the graded fibre sits jute cuttings — the coarse, rooty ends cut off — which are traded separately for paper and coarser products.',
        },
      ],
    },
    {
      id: 'uses-and-trade',
      heading: 'Uses and trade',
      body: [
        {
          type: 'paragraph',
          text: 'Jute goes to sacking and hessian, to carpet backing, to twines and cordage, and — a market that has grown as the packaging one has eroded — to geotextiles, where a fibre that is strong at first and then rots away is exactly what is wanted for erosion control while vegetation establishes. Synthetic packaging displaced much of the traditional sack trade, and the fibre’s biodegradability has since become one of its principal selling points.',
        },
        {
          type: 'paragraph',
          text: 'Trade moves in two forms: raw jute in pressed bales, and manufactured jute goods from mills in the producing countries. Some governments in the region maintain policies that reserve certain packaging uses for jute, so the demand side of this commodity is shaped by regulation as well as by price and substitution.',
        },
      ],
    },
  ],
  primaryUses: ['fibre'],
  secondaryUses: ['industrial'],
  majorQualityAttributes: [
    'Colour and lustre',
    'Strength',
    'Fibre length',
    'Fineness',
    'Root content',
    'Freedom from specks, knots, and runners',
  ],
  commonDefects: [
    'Hard root ends',
    'Specky and knotty fibre from under-retting',
    'Runners (unseparated fibre strips)',
    'Staining from poor retting water',
    'Weak, over-retted fibre',
    'Croppings and short fibre',
  ],
  moistureContext:
    'Stripped fibre is sun-dried before baling, and drying condition affects colour and lustre. Fibre baled damp moults and moulds; specific working moisture is a mill and trade matter, not published here.',
  storageContext:
    'Held as pressed bales under cover and kept dry; damp storage causes staining, mould, and strength loss, and dense fibre stacks carry a fire risk.',
  transportContext:
    'Raw jute moves in pressed bales by road, rail, and container from the producing delta to mills at home and abroad; much of the crop is manufactured domestically before export.',
  majorProducingRegions: [
    'South Asia — the Ganges–Brahmaputra delta',
    'Southeast Asia (limited production)',
  ],
  majorTradingRegions: [
    'South Asia (dominant producing and exporting region)',
    'Europe and the Middle East (importing regions for jute goods)',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '5303.10',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Jute and other textile bast fibres, raw or retted — the raw jute of this entry, before processing or spinning.',
    },
  ],
  connections: [
    { type: 'post-harvest', slug: 'sun-drying' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  relatedTopics: [
    { type: 'commodity', slug: 'flax-fibre' },
    { type: 'commodity', slug: 'hemp-fibre' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Jute as a traded bast fibre, its uses, and market context',
    },
    {
      sourceId: 'icar',
      citedFor:
        'Jute species, retting and stripping practice, and fibre defects',
    },
    {
      sourceId: 'faostat',
      citedFor: 'Commodity coverage and producing regions',
    },
    {
      sourceId: 'worldbank',
      citedFor: 'Jute sector trade structure and classification context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global reference, with production overwhelmingly concentrated in South Asia. Grading standards are national, versioned, and jurisdiction-specific.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not a grading determination, contract specification, or customs classification.',
    'No grade names, thresholds, retting durations, or fibre-property figures are reproduced here — they belong to the national standards and contracts that define them.',
    'Policy measures affecting jute demand differ by country and change; none are described here.',
    'Regions indicate where jute is grown and where its goods are bought; they are not ranked or quantified here.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Jute Fibre: Water-Retted Bast Fibre in Bales',
    description:
      'Jute as a commodity: tossa and white types, why water retting and hand stripping concentrate it in one delta, and the colour and strength that set grade.',
    keywords: [
      'jute fibre',
      'raw jute',
      'water retting',
      'tossa jute',
      'jute grading',
    ],
  },
  structuredData: { article: true },
};
