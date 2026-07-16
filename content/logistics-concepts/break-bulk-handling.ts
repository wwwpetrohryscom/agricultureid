import type { LogisticsConceptContent } from '@/types/content';

export const breakBulkHandling: LogisticsConceptContent = {
  id: 'logistics-concept-break-bulk-handling',
  slug: 'break-bulk-handling',
  contentType: 'logistics-concept',
  title: 'Break-Bulk Handling',
  alternativeNames: ['Breakbulk cargo handling', 'General cargo handling'],
  category: 'Logistics concept',
  subcategory: 'Handling',
  logisticsClass: 'handling',
  summary:
    'Break-bulk handling moves cargo as individually counted pieces — bags, bales, drums, crates — loaded and stowed one parcel at a time. It is slow and labour-intensive, and it survives because it needs almost no shore infrastructure and because a counted piece is a thing a bulk hold cannot give you.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Before the container, all general cargo moved this way: goods were packed into manageable pieces, slung aboard, stowed by hand in the hold, and counted at every stage. Break-bulk is what containerisation replaced across most of world trade, and it is often described in the past tense. That is a mistake. Substantial agricultural volumes still move as bagged cargo, and they do so for reasons that have not gone away.',
    },
    {
      type: 'paragraph',
      text: 'The reasons are infrastructure and divisibility. A container terminal is an enormous capital asset — gantry cranes, paved yards, chassis, power — and many ports serving food-importing regions do not have one, or have one that is saturated. A break-bulk ship with her own gear can work at a simple quay, or into lighters offshore, in places where no container crane exists. And bagged cargo arrives in units a receiving market can distribute directly, which matters where the destination is a network of small traders rather than a warehouse with a forklift.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Handling — carriage and transfer of individually counted pieces',
    },
    {
      label: 'Cargo form',
      value: 'Breakbulk — bags, bales, drums, crates, and cartons',
    },
    {
      label: 'Measured by',
      value: 'Tally — a count of pieces, not a rate or a draught reading',
    },
    {
      label: 'Survives because',
      value:
        'It needs little shore infrastructure, and ships can work with their own gear',
    },
    {
      label: 'Also survives because',
      value:
        'A bag is a distributable unit in markets without mechanised handling',
    },
    {
      label: 'Cost character',
      value: 'Labour-intensive, and cost scales with pieces rather than tonnes',
    },
    {
      label: 'Characteristic damage',
      value:
        'Torn bags, crushed lower tiers, and pilferage — all consequences of the piece being the unit',
    },
  ],
  sections: [
    {
      id: 'why-it-persists',
      heading: 'Why the mode persists',
      body: [
        {
          type: 'paragraph',
          text: 'The container won because it deleted handling from the middle of the journey. But it did so by requiring a matching investment at both ends: a box has to be lifted by something, put on something, and stripped somewhere. Where that investment does not exist — a small port, a saturated port, a destination without a container yard within economic reach — the container’s advantage evaporates and the old economics reassert themselves. A ship with her own cranes needs a quay, a gang, and slings.',
        },
        {
          type: 'paragraph',
          text: 'The second reason is about the shape of the receiving market. A container of rice arriving at a port whose distribution network is small traders with pickup trucks has to be stripped, and its contents converted into pieces, before it can move at all. If the cargo is going to end up as bags anyway, and the destination has ample labour and little machinery, then bagging at origin and handling as break-bulk removes a step rather than adding one. This is why food-aid consignments and bagged staples into many markets remain break-bulk despite the mode being obsolete in freight-cost terms.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The piece is the point',
          text: 'Break-bulk preserves the individual parcel as a thing that exists, is counted, and can be delivered to a specific consignee. A bulk hold destroys parcel identity entirely; a container preserves it only at the level of the box. Where the receiving market transacts in bags, break-bulk delivers the unit the market actually uses.',
        },
      ],
    },
    {
      id: 'how-the-work-is-done',
      heading: 'How the work is done',
      body: [
        {
          type: 'paragraph',
          text: 'The operation is a sequence of small lifts. Cargo is made up into slingloads or built onto pallets at the quay, lifted aboard by the ship’s gear or a shore crane, landed in the hatch square, and then moved into the wings and ends of the hold by a gang working inside it. Stowage is a craft: pieces must interlock, tiers must not crush what is under them, dunnage must separate cargoes and keep them off the steel, and the whole stow must be tight enough not to move when the ship rolls.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Tally',
              description:
                'The count of pieces loaded and discharged. The quantity record in this mode, and the reason a break-bulk dispute is about numbers of bags rather than about a survey.',
            },
            {
              term: 'Slingload',
              description:
                'The group of pieces lifted together. How the cargo is made up determines both the rate achieved and the damage done to the bags at the edges.',
            },
            {
              term: 'Dunnage',
              description:
                'Material laid to separate cargo from steel, from other cargo, and from moisture. Wooden dunnage is itself regulated as wood packaging under the phytosanitary regime.',
            },
            {
              term: 'Stevedore',
              description:
                'The contractor performing the handling. In break-bulk the gang’s skill is a direct determinant of both throughput and cargo condition.',
            },
            {
              term: 'Lightering',
              description:
                'Working cargo into small craft offshore where no berth is available. A capability that keeps break-bulk relevant at ports a container ship cannot use at all.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Because the hold is stowed by hand and stowed tight, the damage mechanisms are those of a stack rather than of a flow. Lower tiers carry the weight of everything above them; hooks used to drag bags tear them; and a stow that shifts crushes itself. Ventilation matters as it does in bulk, because a hold full of bagged hygroscopic cargo has the same sweat problem as a hold full of loose cargo, with the added complication that the bags themselves absorb and hold moisture.',
        },
      ],
    },
    {
      id: 'what-goes-wrong',
      heading: 'What goes wrong',
      body: [
        {
          type: 'list',
          items: [
            'Torn and burst bags from hooks, sling edges, and rough handling — a direct loss and a contamination path',
            'Crushing of lower tiers under the weight of the stow',
            'Pilferage, which is a real and structural feature of a cargo made of small, individually valuable, hand-handled units',
            'Ship’s sweat and cargo sweat wetting bags, with the sacking itself holding moisture against the contents',
            'Contamination from previous cargoes, hold residues, or unsuitable dunnage',
            'Infestation in a stow that cannot be inspected once built, and in the sacking as well as the contents',
            'Tally disputes, where loaded and discharged piece counts do not agree and neither party can reconstruct why',
            'Weather delay, since an open hatch working bagged cargo stops for rain',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Slow handling is exposure',
          text: 'A break-bulk operation takes far longer at the berth than a bulk or container one. For a cargo sensitive to moisture or heat, that extra time at an open hatch is not merely a cost — it is additional exposure, and it is why weather interruption is a quality issue in this mode and not just a schedule one.',
        },
      ],
    },
    {
      id: 'the-commercial-and-regulatory-frame',
      heading: 'The commercial and regulatory frame',
      body: [
        {
          type: 'paragraph',
          text: 'Break-bulk cost scales with pieces and with labour, so it is sensitive to wage levels and to gang productivity in a way bulk and container handling are not. Berth time is long, which loads the charter’s laytime provisions heavily, and the handling rate warranted in a fixture is a genuinely negotiated operational commitment rather than a plant specification. The mode is therefore economically viable roughly where labour is available and capital is not — which describes a great many food-importing ports.',
        },
        {
          type: 'paragraph',
          text: 'Wood used as dunnage, pallets, and bracing is regulated in its own right under the international phytosanitary regime for wood packaging material, because untreated wood is a recognised pathway for forest pests. In a mode that uses a great deal of timber inside the hold, this is not a marginal consideration: a consignment can be delayed or refused over its dunnage while the cargo itself is entirely sound.',
        },
      ],
    },
  ],
  logisticsPurpose:
    'Move cargo as individually counted, distributable pieces between ship and shore without requiring container infrastructure at either end, preserving parcel identity down to the bag for markets that transact at that level.',
  operationalLimitations: [
    'No handling rates, gang productivities, or berth throughputs are given. They depend on the port, the labour, the cargo, and the ship’s gear, and are warranted per fixture rather than generalisable.',
    'No stow heights, tier limits, or stacking specifications are given. These depend on the packaging, the commodity, and the ship, and are matters for the stowage plan and the surveyor.',
    'No expected loss, damage, or pilferage figures are given. They are route-, port-, and cargo-specific, and any general figure would be invented.',
    'No laytime or demurrage figures are given — they are set by the charter party for the specific fixture.',
    'Whether break-bulk or containerisation is appropriate for a flow depends on port infrastructure, destination distribution, labour cost, and the contract, and cannot be determined from this page.',
    'Wood dunnage requirements are set by the importing country’s phytosanitary regime for the specific consignment and are not stated here.',
  ],
  cargoForms: ['breakbulk', 'unitised'],
  applicableCommodityClasses: [
    'cereal-grain',
    'pulse',
    'sugar-crop',
    'beverage-crop',
    'fibre',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'milled-rice' },
    { type: 'commodity', slug: 'green-coffee' },
    { type: 'commodity', slug: 'cocoa-beans' },
    { type: 'commodity', slug: 'dry-beans' },
    { type: 'commodity', slug: 'jute-fibre' },
    { type: 'commodity', slug: 'cotton-lint' },
  ],
  qualityRisks: [
    { type: 'quality-attribute', slug: 'mechanical-damage' },
    { type: 'quality-attribute', slug: 'moisture-content' },
    { type: 'quality-attribute', slug: 'mould-incidence' },
    { type: 'quality-attribute', slug: 'insect-damage' },
    { type: 'quality-attribute', slug: 'foreign-material' },
  ],
  dependsOnOperations: [
    { type: 'post-harvest', slug: 'jute-sack' },
    { type: 'post-harvest', slug: 'woven-polypropylene-sack' },
    { type: 'post-harvest', slug: 'bag-stack-storage' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'palletisation' },
  ],
  relevantStandards: [
    { type: 'standard-reference', slug: 'ispm-15-wood-packaging' },
    { type: 'standard-reference', slug: 'ippc-phytosanitary-standards' },
    { type: 'standard-reference', slug: 'codex-food-hygiene-principles' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'bill-of-lading' },
    { type: 'trade-concept', slug: 'packing-list' },
    { type: 'trade-concept', slug: 'fob-delivery-term' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'bulk-loading-and-discharge' },
    { type: 'logistics-concept', slug: 'bulk-sea-freight' },
    { type: 'logistics-concept', slug: 'container-shipping' },
    {
      type: 'logistics-concept',
      slug: 'flexible-intermediate-bulk-containers',
    },
    { type: 'logistics-concept', slug: 'palletisation' },
    { type: 'logistics-concept', slug: 'port-of-entry-inspection' },
  ],
  exposedToRisks: [
    { type: 'supply-chain-risk', slug: 'port-congestion' },
    { type: 'supply-chain-risk', slug: 'labour-disruption' },
    { type: 'supply-chain-risk', slug: 'contamination-in-transit' },
    { type: 'supply-chain-risk', slug: 'phytosanitary-rejection' },
    { type: 'supply-chain-risk', slug: 'infrastructure-failure' },
  ],
  sourceReferences: [
    {
      sourceId: 'imo',
      citedFor:
        'Cargo stowage and securing in the carriage of packaged and general cargo by sea',
    },
    {
      sourceId: 'ippc',
      citedFor:
        'Regulation of wood packaging material used as dunnage and bracing in cargo holds',
    },
    {
      sourceId: 'unctad',
      citedFor:
        'Port infrastructure and general cargo handling in seaborne trade, including ports without container facilities',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Bagged staple food movement and post-harvest loss in handling and storage',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global, concentrated where container infrastructure is absent, saturated, or uneconomic, and where receiving markets distribute in bags rather than in containers.',
  limitations: [
    'A reference description of the operation, not an operating instruction, a stowage specification, or a stevedoring service.',
    'No rates, tier limits, stow heights, or loss figures are given — they are port-, ship-, cargo-, and contract-specific.',
    'Stowage and securing for a specific cargo and ship are matters for the stowage plan, the master, and the surveyor.',
    'Practice varies widely between ports and trades; this describes the general principle rather than any particular operation.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Break-Bulk Handling: Why Bagged Cargo Still Moves This Way',
    description:
      'How break-bulk handling works: why the mode persists after containerisation, how tally and slingloads work, and what damages bagged cargo.',
    keywords: [
      'break-bulk handling',
      'breakbulk cargo',
      'bagged cargo shipping',
      'stevedoring',
      'general cargo',
    ],
  },
  structuredData: { article: true },
};
