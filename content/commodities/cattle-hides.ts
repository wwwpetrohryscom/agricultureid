import type { CommodityContent } from '@/types/content';

export const cattleHides: CommodityContent = {
  id: 'commodity-cattle-hides',
  slug: 'cattle-hides',
  contentType: 'commodity',
  title: 'Cattle Hides',
  alternativeNames: ['Bovine hides', 'Raw hides', 'Cattle skins'],
  category: 'Livestock product commodity',
  subcategory: 'Raw hides and skins',
  commodityClass: 'livestock-product',
  physicalForm: 'other',
  harvestedPart:
    'The outer skin recovered from cattle at slaughter, cured for transport as a raw material',
  sourceLivestock: { type: 'livestock', slug: 'cattle' },
  summary:
    'Cattle hides are the raw skins recovered as a by-product of beef production and traded as the principal raw material of the leather industry. Their value depends on defects accumulated during the animal’s life and on how promptly the hide is cured after recovery.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cattle hides are a by-product commodity. They are not the reason cattle are raised: their supply is set by beef production and responds to demand for meat, not to demand for leather. A tannery cannot call for more hides by bidding higher, and a collapse in leather demand does not reduce the number of hides that arise. This inverted supply relationship is the defining commercial feature of the commodity and explains why hide prices are volatile in a way that most agricultural commodities are not.',
    },
    {
      type: 'paragraph',
      text: 'What is traded is a raw material at the very start of an industrial chain. A hide is a perishable protein material when it is recovered, and it must be cured — most commonly by salting — before it can be stored or shipped. It is then sold into tanning, which converts it into leather. This page describes the hide as an agricultural commodity: what it is, what determines its value, and how it is handled. It does not describe slaughter, and it does not describe tanning.',
    },
  ],
  keyFacts: [
    {
      label: 'Commodity class',
      value: 'Livestock product (raw hides and skins)',
    },
    { label: 'Source animal', value: 'Cattle (Bos taurus and Bos indicus)' },
    {
      label: 'Commercial role',
      value: 'By-product of beef production, not a primary output',
    },
    {
      label: 'Principal use',
      value: 'Industrial — the main raw material of the leather industry',
    },
    { label: 'Supply driver', value: 'Beef throughput, not leather demand' },
    {
      label: 'Traded on',
      value: 'Size or weight range, substance, and defect load',
    },
    {
      label: 'Stabilised by',
      value: 'Curing, most commonly salting, soon after recovery',
    },
  ],
  sections: [
    {
      id: 'what-the-commodity-is',
      heading: 'What the commodity is',
      body: [
        {
          type: 'paragraph',
          text: 'A hide is the animal’s skin, recovered whole and preserved. Its structure is what makes it useful: a dense network of collagen fibres, denser and finer near the outer grain surface and looser underneath. The grain layer carries the visible surface of the finished leather, which is why marks on the outside of the living animal end up as marks on a wallet, and why a hide’s history is legible in its price.',
        },
        {
          type: 'paragraph',
          text: 'Hides are not uniform across their own area. The back and butt are thicker and firmer, the belly and flanks looser and more stretchy, and tanners select and cut accordingly. Terminology in the trade also distinguishes hides — from mature, larger animals — from skins from smaller animals such as sheep and goats, and calfskins are a separate, finer category again.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'By-product, and modelled as one',
          text: 'AgricultureID classes hides as a by-product because their supply follows meat production and their value is residual to it. That is an economic and structural statement about the commodity, not a judgement about leather or about the industry that uses it.',
        },
      ],
    },
    {
      id: 'what-determines-value',
      heading: 'What determines value',
      body: [
        {
          type: 'paragraph',
          text: 'Hides are described by size or weight range and by the substance of the material, but what separates a valuable hide from a cheap one is defects. Almost every significant defect arrives before the hide is ever a commodity — accumulated over the animal’s life, or inflicted in the moments of recovery. Nothing downstream repairs them; tanning reveals them.',
        },
        {
          type: 'list',
          items: [
            'Brand marks — permanent scarring in the grain, and a well-known regional value discount',
            'Scratches and scars from fences, thorns, and other animals',
            'Parasite damage, including holes and scarring from warble larvae and tick damage',
            'Flay cuts, scores, and holes from the recovery process',
            'Putrefaction and grain slip from a delay before curing',
            'Salt stain and other curing faults',
            'Dung contamination and hair damage',
          ],
        },
        {
          type: 'paragraph',
          text: 'The pattern is worth stating plainly because it is unusual among commodities: a hide’s quality is determined almost entirely by events outside the hide trade — by husbandry, by parasite pressure, by identification practice, and by the care taken during recovery — and the trade can only sort and discount what it receives. Grading systems reflect this by classing hides on the extent and position of damage, since a defect in the butt costs more than the same defect in a belly.',
        },
      ],
    },
    {
      id: 'curing-and-handling',
      heading: 'Curing, handling, and transport',
      body: [
        {
          type: 'paragraph',
          text: 'A freshly recovered hide is a wet protein material and it begins to deteriorate immediately. Bacterial action attacks the grain layer first, causing hair slip and permanent loss of the surface that gives leather its value — so the interval between recovery and curing is the single most consequential handling variable in the commodity. Cooling buys time; curing is what actually stabilises the material.',
        },
        {
          type: 'paragraph',
          text: 'Curing works by removing or binding the water that bacteria need. Salting — wet-salting in stacks, or brining — is the dominant method and produces a hide that can be stored and shipped for extended periods. Air drying and dry-salting are used where salt or infrastructure is scarce, though they are less forgiving and can damage the material if done badly. Where a tannery is close by, hides may move fresh and chilled and skip curing altogether.',
        },
        {
          type: 'paragraph',
          text: 'Cured hides are graded, trimmed, folded or rolled, and shipped in containers, and they travel internationally at scale — the hide trade is genuinely global, with hides frequently crossing continents between the animal and the tannery. The trade is also subject to animal-health controls on the movement of animal products, which are set by importing authorities and can restrict trade from particular regions irrespective of the condition of the hides themselves.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Reference description only',
          text: 'This entry describes cattle hides as a traded commodity. It is not slaughter, veterinary, curing, or tanning guidance, and it is not a statement of the animal-health or trade requirements that apply to any consignment. Those are set by the relevant authorities in the exporting and importing jurisdictions.',
        },
      ],
    },
    {
      id: 'market-structure',
      heading: 'Market structure and price behaviour',
      body: [
        {
          type: 'paragraph',
          text: 'Because supply is fixed by beef throughput and demand comes from fashion, footwear, upholstery, and automotive interiors, the hide market has an unusually rigid supply meeting an unusually mobile demand. When leather demand falls, the hides still arrive; the price absorbs the whole adjustment. Substitution by synthetic materials in large end uses, and shifts in vehicle interior specification, have moved the market substantially for reasons entirely outside agriculture.',
        },
        {
          type: 'paragraph',
          text: 'At the low end this has a practical consequence worth recording honestly: when prices fall far enough, hides that would once have been cured and sold may not repay the cost of recovery and curing, and become a disposal problem rather than a revenue stream. That is the ordinary logic of a by-product, visible here more clearly than in most.',
        },
      ],
    },
  ],
  primaryUses: ['industrial'],
  majorQualityAttributes: [
    'Size or weight range',
    'Substance (thickness) and firmness',
    'Grain surface condition',
    'Extent and position of defects',
    'Curing method and quality of cure',
    'Freedom from putrefaction and grain slip',
  ],
  commonDefects: [
    'Brand marks',
    'Scratches and scars acquired during the animal’s life',
    'Parasite damage (warble holes, tick damage)',
    'Flay cuts, scores, and holes from recovery',
    'Grain slip and putrefaction from delayed curing',
    'Salt stain and other curing faults',
    'Dung contamination',
  ],
  moistureContext:
    'A raw hide is a wet protein material. Curing works by removing or binding the water that supports bacterial growth; the condition of the cure, not a moisture target, is what the trade assesses.',
  storageContext:
    'Stabilised by curing — most commonly wet-salting or brining — after which hides can be stacked and stored for extended periods. Uncured hides deteriorate within hours to days, beginning with the grain layer.',
  transportContext:
    'Cured hides ship internationally in containers without refrigeration and routinely cross continents between the animal and the tannery. Fresh chilled hides move only over short distances. Animal-health controls on animal products apply to cross-border movement.',
  majorProducingRegions: [
    'North America',
    'South America',
    'Europe and Central Asia',
    'South Asia',
    'Oceania',
  ],
  majorTradingRegions: [
    'North America, South America, and Europe as principal exporting regions',
    'East and South Asia as the dominant tanning destinations',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '4101',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Raw hides and skins of bovine (including buffalo) or equine animals, fresh or preserved, at 4-digit heading level; subheadings distinguish whole hides, fresh from cured, and weight ranges. Hides that have been tanned or otherwise processed fall outside this heading.',
    },
  ],
  connections: [
    { type: 'livestock', slug: 'cattle' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
  ],
  relatedTopics: [{ type: 'commodity', slug: 'raw-wool' }],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Hides and skins as a livestock by-product and raw material for leather',
    },
    {
      sourceId: 'faostat',
      citedFor: 'Raw hide item coverage and producing-region context',
    },
    {
      sourceId: 'woah',
      citedFor:
        'Animal-health context for the movement and trade of animal products',
    },
    {
      sourceId: 'worldbank',
      citedFor: 'Tariff heading context for raw hides and skins',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Hide grading conventions, curing practice, and animal-health trade requirements are jurisdiction-specific and are set by the relevant authorities.',
  limitations: [
    'A reference description of the commodity — not slaughter, veterinary, curing, or tanning guidance, and not a determination about any consignment.',
    'No weight ranges, grade thresholds, curing durations, or price relationships are given: those are set by trade conventions, contracts, and regulation.',
    'Grading conventions for hides differ between markets and buyers; there is no single international grade scale summarised here.',
    'Producing and tanning regions are indicative groupings, not ranked statistics.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Cattle Hides: A By-Product Raw Material',
    description:
      'Cattle hides as a commodity: why supply follows beef rather than leather demand, how lifetime defects and curing determine value, and how they are traded.',
    keywords: [
      'cattle hides',
      'raw hides',
      'bovine hides',
      'hide curing',
      'leather raw material',
    ],
  },
  structuredData: { article: true },
};
