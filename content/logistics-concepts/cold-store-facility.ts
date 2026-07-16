import type { LogisticsConceptContent } from '@/types/content';

export const coldStoreFacility: LogisticsConceptContent = {
  id: 'logistics-concept-cold-store-facility',
  slug: 'cold-store-facility',
  contentType: 'logistics-concept',
  title: 'Cold Store Facility',
  alternativeNames: ['Refrigerated warehouse', 'Cold storage facility'],
  category: 'Logistics concept',
  subcategory: 'Facility',
  logisticsClass: 'facility',
  summary:
    'A cold store is a refrigerated building where perishable consignments are held between legs of a journey. It is the fixed point the cold chain is built around, and its most dangerous feature is the doorway — the place where the chain it exists to protect is most often broken.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Every temperature-controlled chain needs somewhere to stop. Ships and trucks run to schedules that do not match harvests or orders, and the cold store is what absorbs the difference: produce comes in from a packhouse and waits for a vessel, arrives from a vessel and waits for distribution, or is held as a season’s stock released across a year. Without it the chain would have to be continuous in time as well as in temperature, which no real supply chain is.',
    },
    {
      type: 'paragraph',
      text: 'The building is conceptually simple — an insulated envelope, a refrigeration plant, and a way of moving air through the space — but its role in the chain is more subtle than storage. A cold store is a junction, and junctions are where custody changes hands, where loads are consolidated and deconsolidated, and where goods spend time on a dock between two controlled environments. The refrigerated chambers usually work well. It is the traffic through the doors that breaks the chain.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value:
        'Facility — fixed refrigerated storage within a temperature-controlled chain',
    },
    { label: 'Cargo form', value: 'Unitised, containerised, breakbulk' },
    {
      label: 'Role in the chain',
      value:
        'A buffer absorbing the mismatch between harvest, transport schedules, and demand',
    },
    {
      label: 'Weakest point',
      value:
        'The dock and the doorway, where goods sit between two controlled environments',
    },
    {
      label: 'Cannot do',
      value:
        'Restore quality already lost, or remove field heat it was not designed to remove',
    },
    {
      label: 'Chamber conditions',
      value:
        'Set per commodity and per chamber — a single facility runs several regimes at once',
    },
    {
      label: 'Safety context',
      value:
        'Industrial refrigerants and confined, cold spaces — engineered and regulated accordingly',
    },
  ],
  sections: [
    {
      id: 'what-it-is-for',
      heading: 'What the building is for',
      body: [
        {
          type: 'paragraph',
          text: 'The cold store exists because agricultural supply is lumpy and demand is not. A crop is harvested in weeks and sold over months; a vessel arrives with a large parcel and the market takes it in small ones; a packhouse runs during the day and a ship loads at night. Each of those mismatches needs a buffer, and for perishables the buffer has to be refrigerated or the waiting itself destroys the goods. The facility is, in economic terms, a device for decoupling one part of the chain from another.',
        },
        {
          type: 'paragraph',
          text: 'That decoupling role explains why cold stores cluster where they do — at ports, behind packhouses, and at the edges of consuming cities — and why their design differs so much between those positions. A store at a packhouse handles a fast flow of homogeneous product with a short dwell; a store serving a city handles a slow flow of mixed product with high pick activity and constant door movement. The first is nearly a pipeline; the second is nearly a shop. They are the same building type serving fundamentally different problems.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'A cold store holds; it does not cool',
          text: 'Like transport refrigeration, a storage chamber’s plant is sized to remove the heat that leaks in and the heat the produce generates — not to pull down a warm load. Precooling is a separate operation with its own equipment. A facility asked to remove field heat from incoming produce will do it slowly and unevenly, warming everything already in the chamber while it tries.',
        },
      ],
    },
    {
      id: 'the-door-problem',
      heading: 'The door problem',
      body: [
        {
          type: 'paragraph',
          text: 'An insulated chamber holding a stable condition is not a hard engineering problem. The hard problem is that goods have to get in and out, which means opening the envelope, repeatedly, all day. Every door opening admits warm, moist outside air; that air brings heat the plant must remove and moisture that condenses and frosts on surfaces, including on the evaporators that are supposed to be removing it. The chamber recovers, but the produce nearest the door had a bad few minutes, and it has them again on every cycle.',
        },
        {
          type: 'paragraph',
          text: 'Worse is what happens on the dock. A pallet moved out of a chamber and staged to wait for a trailer is out of the cold chain entirely, and this is the single most common break in cold chains that are otherwise well run. It happens for mundane reasons — the trailer is late, the paperwork is not ready, the loader is on another job — and it happens in a place where nobody thinks of it as a failure, because the produce is still inside the building. Engineered docks with seals and refrigerated staging areas exist precisely because this ordinary, unremarkable delay is the thing that consumes shelf life.',
        },
        {
          type: 'list',
          items: [
            'Staging on an unrefrigerated dock while waiting for a vehicle, paperwork, or a loading slot',
            'Extended or propped-open door openings during heavy movement',
            'Warm loading of a trailer whose own unit will not pull the load down',
            'Frost and ice accumulation from admitted moisture, degrading evaporator performance and requiring defrost cycles that themselves warm the space',
            'Mixed storage of commodities with incompatible conditions or ethylene behaviour in one chamber',
            'Airflow obstructed by pallets stacked against walls, under the ceiling, or blocking evaporator discharge',
            'Stock held past its remaining life because the record shows a good storage temperature and not the history before it arrived',
            'Power interruption, where the insulated envelope buys time but the plant is what maintains the condition',
          ],
        },
      ],
    },
    {
      id: 'inside-the-building',
      heading: 'Inside the building',
      body: [
        {
          type: 'paragraph',
          text: 'A cold store is not one environment. A facility typically runs several chambers at different regimes, because the commodities it handles need different conditions and some of them cannot share a room at all. Beyond the simple chill and frozen split, produce chambers must contend with ethylene — some commodities produce it, others are damaged by it, and a chamber holding both is a chamber ripening one of them. Odour transfer is a comparable problem with a different mechanism and the same conclusion.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Chamber',
              description:
                'An individually controlled space. A facility runs several at once because commodities need different conditions and some are incompatible in the same air.',
            },
            {
              term: 'Ripening room',
              description:
                'A chamber designed to ripen deliberately rather than to hold. The controlled inverse of storage, used where fruit is shipped unripe on purpose.',
            },
            {
              term: 'Dock seal and levelling',
              description:
                'Engineering at the doorway that lets a vehicle couple to the building so goods pass between two controlled spaces without crossing an uncontrolled one.',
            },
            {
              term: 'Blast or precooling capability',
              description:
                'Dedicated plant for removing heat rapidly. A distinct function from storage, and a facility that lacks it cannot substitute its chambers for it.',
            },
            {
              term: 'Airflow and stacking discipline',
              description:
                'The requirement that air can circulate around and through stored loads. Storage racking and pallet placement are part of the refrigeration system, not just of the warehouse.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'The plant itself is industrial. Large cold stores commonly use refrigerants that are efficient and well understood and that are also hazardous — which is why the engine room is a regulated space with detection, ventilation, and emergency systems designed and maintained under the applicable safety regime. Cold chambers are additionally a confined-space and personnel-safety matter in their own right. None of this is described operationally here.',
        },
      ],
    },
    {
      id: 'the-record-and-the-chain',
      heading: 'The record and the chain',
      body: [
        {
          type: 'paragraph',
          text: 'A cold store’s temperature records show what its chambers did. They do not show what the produce experienced before it arrived, and they cannot. This is the same asymmetry that runs through the whole cold chain discipline: because deterioration is cumulative, a consignment’s remaining life is a function of its history, and a facility that receives goods without a history is accepting an unknown. Well-run chains therefore treat the handover into a cold store as an inspection point rather than as a receipt.',
        },
        {
          type: 'paragraph',
          text: 'Because the facility is a custody boundary, it is also a commercial one. Goods held in a cold store are frequently owned by someone other than the operator, sometimes financed against the stock, and occasionally under customs control if the facility is also bonded. The building is therefore a node in a documentary chain as much as a physical one, and a discrepancy between what the records say is in a chamber and what is actually in it is a serious matter rather than an inventory annoyance.',
        },
      ],
    },
  ],
  logisticsPurpose:
    'Hold perishable consignments at their intended condition while the chain waits — for a vessel, an order, or a season — so that the mismatch between harvest, transport, and demand does not have to be paid for in lost shelf life.',
  operationalLimitations: [
    'No storage temperatures, humidity levels, or holding conditions are given. They are commodity-, cultivar-, and maturity-specific, and a facility runs several regimes at once for exactly that reason.',
    'No storage durations or shelf lives are given. Remaining life depends on the commodity and on its history before arrival, which the facility’s own records do not contain.',
    'No capacities, chamber volumes, throughputs, or plant ratings are given — these are properties of a specific facility.',
    'This page cannot say which commodities may share a chamber. Compatibility depends on condition, ethylene behaviour, and odour transfer for the specific combination.',
    'Whether a facility can precool, ripen, or only hold is a property of its installed plant and cannot be inferred from the fact that it is refrigerated.',
    'Refrigerant systems, engine rooms, and cold chamber entry are governed by engineered safety systems and occupational-safety regulation; nothing here specifies or substitutes for them.',
    'Food-safety and temperature-control requirements applying to a stored food are set by the applicable food authority in that jurisdiction.',
  ],
  cargoForms: ['unitised', 'containerised', 'breakbulk'],
  applicableCommodityClasses: [
    'fruit',
    'vegetable',
    'root-tuber',
    'livestock-product',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'fresh-apples' },
    { type: 'commodity', slug: 'ware-potatoes' },
    { type: 'commodity', slug: 'bananas' },
    { type: 'commodity', slug: 'table-grapes' },
    { type: 'commodity', slug: 'dry-bulb-onions' },
    { type: 'commodity', slug: 'hen-eggs' },
  ],
  qualityRisks: [
    { type: 'quality-attribute', slug: 'chilling-sensitivity' },
    { type: 'quality-attribute', slug: 'ethylene-production' },
    { type: 'quality-attribute', slug: 'respiration-rate' },
    { type: 'quality-attribute', slug: 'firmness' },
    { type: 'quality-attribute', slug: 'mould-incidence' },
    { type: 'quality-attribute', slug: 'internal-quality' },
  ],
  dependsOnOperations: [
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'refrigerated-warehouse' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'ethylene-management' },
    { type: 'post-harvest', slug: 'fruit-ripening' },
    { type: 'post-harvest', slug: 'controlled-atmosphere-storage' },
  ],
  relevantStandards: [
    { type: 'standard-reference', slug: 'codex-food-hygiene-principles' },
    { type: 'standard-reference', slug: 'haccp' },
    { type: 'standard-reference', slug: 'iso-22000-food-safety-management' },
    { type: 'standard-reference', slug: 'third-party-audit' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'sanitary-certificate' },
    { type: 'trade-concept', slug: 'ddp-delivery-term' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'bonded-warehouse' },
    { type: 'logistics-concept', slug: 'cold-chain-integrity' },
    { type: 'logistics-concept', slug: 'controlled-atmosphere-transport' },
    { type: 'logistics-concept', slug: 'palletisation' },
    { type: 'logistics-concept', slug: 'reefer-container-transport' },
    { type: 'logistics-concept', slug: 'road-haulage-of-agricultural-goods' },
    { type: 'logistics-concept', slug: 'temperature-monitoring-in-transit' },
  ],
  exposedToRisks: [
    { type: 'supply-chain-risk', slug: 'cold-chain-failure' },
    { type: 'supply-chain-risk', slug: 'infrastructure-failure' },
    { type: 'supply-chain-risk', slug: 'labour-disruption' },
    { type: 'supply-chain-risk', slug: 'contamination-in-transit' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Cold storage in post-harvest systems and its role in reducing food loss across the chain',
    },
    {
      sourceId: 'codex',
      citedFor:
        'General principles of food hygiene relevant to storage of perishable foods, including temperature control',
    },
    {
      sourceId: 'usda',
      citedFor:
        'Storage of horticultural commodities and the handling conditions they require',
    },
    {
      sourceId: 'unece-standards',
      citedFor:
        'Commercial quality standards for fresh produce held and traded internationally',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. Facility provision, power reliability, engineering standards, and regulatory food-control requirements differ enormously by region, and in many producing areas the absence of cold storage is itself the constraint.',
  limitations: [
    'A reference description of the facility and its role, not an operating instruction, a design specification, or a storage service.',
    'No temperatures, humidity levels, durations, capacities, or plant ratings are given — all are commodity-, facility-, and jurisdiction-specific.',
    'Refrigerant safety, engine rooms, and cold-space entry are regulated engineering and safety matters outside this description’s scope.',
    'Facilities differ profoundly by position in the chain and by installed capability; this describes the general principle rather than any particular store.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Cold Store Facility: Why the Doorway Breaks the Cold Chain',
    description:
      'What a cold store does in a perishable chain: buffering supply and demand, why chambers hold rather than cool, and the dock and door problem.',
    keywords: [
      'cold store facility',
      'refrigerated warehouse',
      'cold storage',
      'dock seal cold chain',
      'ripening room',
    ],
  },
  structuredData: { article: true },
};
