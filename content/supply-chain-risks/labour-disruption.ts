import type { SupplyChainRiskContent } from '@/types/content';
import { RISK_NOT_SCORED_NOTE } from '@/types/trade';

export const labourDisruption: SupplyChainRiskContent = {
  id: 'supply-chain-risk-labour-disruption',
  slug: 'labour-disruption',
  contentType: 'supply-chain-risk',
  title: 'Labour Disruption',
  alternativeNames: ['Industrial action', 'Labour shortage'],
  category: 'Supply-chain risk',
  subcategory: 'Logistics',
  riskClass: 'logistics',
  summary:
    'The people a chain depends on are not available to work it. Agricultural chains are exposed unusually sharply because their labour requirement is seasonal, concentrated, and cannot be deferred: a crop does not wait for a dispute to be resolved.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Every stage of an agricultural chain runs on people whose absence stops it: harvest crews, drivers, elevator operators, packhouse staff, dockworkers, crane operators, inspectors, veterinary officers, customs officials. Automation has thinned some of these roles and eliminated almost none, and the roles that remain tend to be the ones with no substitute — a container cannot be lashed by a spreadsheet, and an export certificate cannot be signed by a party that is not there.',
    },
    {
      type: 'paragraph',
      text: 'What makes this risk distinctive in agriculture is that the work has a deadline set by biology. A manufacturer whose plant stops for a fortnight has lost a fortnight of production and can, in principle, make it up. A crop that is not picked in its window is not picked. This asymmetry runs through the whole mechanism: the same stoppage costs different amounts depending entirely on when in the season it lands, and both sides of any dispute know it.',
    },
  ],
  keyFacts: [
    { label: 'Class', value: 'Logistics — labour availability' },
    {
      label: 'Arises at',
      value:
        'Any human-dependent stage: harvest, packhouse, haulage, terminal, border control',
    },
    {
      label: 'Core mechanism',
      value:
        'A stage staffed below the level it requires cannot run, and the chain stops at that stage',
    },
    {
      label: 'Agricultural asymmetry',
      value:
        'Seasonal work has a biological deadline; unworked hours in the window are not recoverable',
    },
    {
      label: 'Two distinct forms',
      value:
        'Withdrawal of labour in a dispute, and structural unavailability of workers at all',
    },
    {
      label: 'Often invisible',
      value:
        'Understaffed operation degrades throughput quietly, without any announcement',
    },
    {
      label: 'Not scored here',
      value:
        'Described as a mechanism; no likelihood, severity, or score is assigned',
    },
  ],
  sections: [
    {
      id: 'two-forms',
      heading: 'Two mechanisms that look alike and are not',
      body: [
        {
          type: 'paragraph',
          text: 'Labour disruption arrives in two forms that produce a similar operational picture and behave completely differently, and conflating them is a persistent analytical error in this area.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Withdrawal of labour',
              description:
                'Workers who exist and are employed decline to work, or are locked out, in the course of a dispute. It is announced or announceable, it is bounded, it is governed by law and by process, and it ends by agreement. Its timing is chosen — including, often, chosen for leverage.',
            },
            {
              term: 'Structural unavailability',
              description:
                'The workers are not there to be withdrawn. Seasonal crews do not arrive, migration or visa arrangements change, wages elsewhere are better, or the demographic simply is not present. It is not announced, it has no negotiation to conclude, and it does not end — it is a condition rather than an event.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'The distinction matters because responses that suit one are useless for the other. A dispute can be prepared for by building buffer stock and by watching the negotiation calendar; a structural shortage cannot be waited out, because there is nothing to wait for. Equally, a dispute has an end date that makes contingency worth buying, while a shortage forces a change in how the work is done.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Understaffing is not a stoppage',
          text: 'The most consequential form of labour disruption is often not a stoppage at all but an operation running with fewer people than it needs. Throughput falls, queues lengthen, and no announcement is ever made. The chain experiences it as unexplained slowness.',
        },
      ],
    },
    {
      id: 'why-agriculture',
      heading: 'Why the seasonal deadline changes everything',
      body: [
        {
          type: 'paragraph',
          text: 'Harvest labour is required in enormous quantity for a short period, in a specific place, for work that is physically demanding and that must happen in a window the crop defines. That window is not negotiable and it is not extensible. Fruit at picking maturity that is not picked will pass through maturity to over-ripeness on the tree; grain left standing is exposed to whatever the weather does next.',
        },
        {
          type: 'paragraph',
          text: 'Because the deadline is biological, the cost of a stoppage is a function of its date rather than its duration. The same number of lost days is an inconvenience in one week and a lost crop in the next, and this makes the risk profile of agricultural labour unlike almost any other sector. It also creates a structural feature that should be stated plainly: leverage in agricultural labour disputes is time-dependent in a way that both parties understand, and this shapes when disputes surface.',
        },
        {
          type: 'paragraph',
          text: 'The same logic applies downstream with different clocks. A packhouse stoppage during a harvest cannot be made up, because the fruit continues arriving. A terminal stoppage during an export programme collides with vessels that are already chartered. The further from the field, the longer the clock — but for perishables it never becomes long.',
        },
      ],
    },
    {
      id: 'propagation',
      heading: 'How it propagates',
      body: [
        {
          type: 'paragraph',
          text: 'A labour disruption propagates first as a throughput reduction at one stage and then as everything that a throughput reduction causes. Cargo accumulates behind the affected stage in storage that may not be suitable, vessels wait, appointments are missed, and permits and certificates age. Where the affected stage is an inspection or certification function, the effect is different in kind: nothing physical has stopped, but consignments cannot lawfully proceed, and no amount of operational capacity elsewhere substitutes for the missing signature.',
        },
        {
          type: 'paragraph',
          text: "Disruption also propagates geographically, and this is easily missed. A stoppage at one port sends cargo to neighbouring ports, which then congest — so a labour event at a facility a chain does not use can still reach it. This is one of the clearest examples of why exposure cannot be assessed by looking only at one's own suppliers.",
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Labour conditions are a compliance matter as well as a risk',
          text: 'Labour in agricultural chains is also the subject of social and labour standards and of buyer requirements. This page describes labour availability as an operational mechanism only; the conditions under which people work are governed by law and by the applicable standards, not by supply-chain convenience.',
        },
      ],
    },
    {
      id: 'seeing-it',
      heading: 'Seeing it while it is happening',
      body: [
        {
          type: 'paragraph',
          text: 'Disputes are among the few supply-chain risks that announce themselves in advance, because process usually requires it: agreements have expiry dates, ballots are held, and notice is given. Structural shortage gives no such notice and is visible only in operational data — vacancies, throughput per shift, overtime, recruitment lead times, wage movement against neighbouring sectors.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'A negotiation calendar is not a prediction',
          text: 'That an agreement expires on a date tells you when a dispute could arise, not whether it will. Most negotiations conclude without stoppage. Treating an expiry date as an expected disruption is a misreading of what the signal contains.',
        },
      ],
    },
  ],
  riskMechanism:
    'A stage of the chain is staffed below the level it needs, so the chain runs at the rate of that stage or not at all. This arises through two mechanisms that look alike and behave differently: withdrawal of labour in a dispute, which is bounded, process-governed, often announced in advance, and ends by agreement; and structural unavailability, in which the workers are not present to be withdrawn because seasonal crews did not arrive, migration or visa arrangements changed, or wages elsewhere drew them away — a condition rather than an event, with no negotiation to conclude. Frequently the disruption is neither a stoppage nor a shortage but an understaffed operation whose throughput quietly degrades, which the chain experiences as unexplained slowness with no announcement to attach it to. The agricultural asymmetry is that much of the affected work has a deadline set by biology: a picking window closes, standing grain is exposed to weather, arriving fruit does not stop arriving. The cost of a stoppage is therefore a function of its date rather than its duration, and identical lost days are trivial in one week and terminal in the next. It propagates as accumulation behind the affected stage in storage not suited to hold it, as vessels waiting against chartered time, and as permits and certificates ageing; where the affected function is inspection or certification, nothing physical stops but consignments cannot lawfully proceed, and no operational capacity substitutes for an absent authority. It also propagates geographically, since cargo diverted from an affected facility congests the alternatives, reaching chains that never used the original.',
  chainStages: [
    'production',
    'assembly',
    'processing',
    'inland-transport',
    'border',
    'international-transport',
  ],
  observableIndicators: [
    'Collective agreements approaching expiry, ballots being held, or formal notice of industrial action given',
    'Negotiations reported as suspended, or a dispute referred to conciliation or arbitration',
    'Terminal or carrier advisories announcing reduced gangs, suspended operations, or omitted calls',
    'Throughput per shift falling at a facility without any announced stoppage',
    'Overtime, agency labour, or contractor use rising to sustain normal output',
    'Vacancies unfilled at harvest, packhouse, or driver level, or recruitment lead times lengthening',
    'Seasonal crews arriving below the number planned, or later than the crop window requires',
    'Changes to visa, permit, or seasonal-worker schemes serving a producing region',
    'Local agricultural wages moving against neighbouring sectors competing for the same workers',
    'Inspection, certification, or veterinary services reporting delays, reduced hours, or appointment backlogs',
    'Cargo diverting to neighbouring facilities, and queues forming there',
  ],
  assessmentLimitations: [
    RISK_NOT_SCORED_NOTE,
    'This page gives no strike frequencies, stoppage durations, labour shortfalls, wage figures, or productivity data, and characterises no dispute, employer, union, workforce, or jurisdiction.',
    "Assessing exposure for a real chain requires that chain's own data: the stages it actually depends on, the agreements covering them and their dates, the staffing position at its facilities, the labour arrangements at its origins, the alternatives available to it, and where in the crop calendar the exposure would fall.",
    'A negotiation calendar identifies when a dispute could arise, not whether one will; most negotiations conclude without stoppage, and treating an expiry date as an expected disruption misreads the signal.',
    'Industrial relations are governed by the labour law of the jurisdiction and by the agreements in force. Nothing here is employment, industrial-relations, or legal advice, and no position in any dispute is taken or implied.',
    'Labour conditions in agricultural chains are also a compliance matter under applicable law and social and labour standards. This page addresses availability as an operational mechanism only and is not a treatment of labour rights or conditions.',
  ],
  affectedCommodityClasses: [
    'fruit',
    'vegetable',
    'cereal-grain',
    'oilseed',
    'beverage-crop',
    'livestock-product',
    'nut',
    'fibre',
  ],
  affectedLogistics: [
    { type: 'logistics-concept', slug: 'bulk-loading-and-discharge' },
    { type: 'logistics-concept', slug: 'break-bulk-handling' },
    { type: 'logistics-concept', slug: 'container-shipping' },
    { type: 'logistics-concept', slug: 'road-haulage-of-agricultural-goods' },
    { type: 'logistics-concept', slug: 'rail-freight-of-agricultural-goods' },
    { type: 'logistics-concept', slug: 'grain-terminal' },
    { type: 'logistics-concept', slug: 'port-of-entry-inspection' },
  ],
  affectedTradeConcepts: [
    { type: 'trade-concept', slug: 'customs-clearance' },
    { type: 'trade-concept', slug: 'phytosanitary-certificate' },
  ],
  addressedByStandards: [
    { type: 'standard-reference', slug: 'fairtrade-standards' },
    { type: 'standard-reference', slug: 'rainforest-alliance-certification' },
    { type: 'standard-reference', slug: 'iseal-codes-of-good-practice' },
  ],
  relatedRisks: [
    { type: 'supply-chain-risk', slug: 'cold-chain-failure' },
    { type: 'supply-chain-risk', slug: 'harvest-shortfall' },
    { type: 'supply-chain-risk', slug: 'infrastructure-failure' },
    { type: 'supply-chain-risk', slug: 'inland-logistics-bottleneck' },
    { type: 'supply-chain-risk', slug: 'port-congestion' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Agricultural labour, seasonal work, and harvest operations context in food systems',
    },
    {
      sourceId: 'unctad',
      citedFor:
        'Port operations and maritime transport context in which terminal labour affects cargo throughput',
    },
    {
      sourceId: 'worldbank',
      citedFor:
        'Trade logistics performance, including the role of border and inspection services in clearance times',
    },
    {
      sourceId: 'oecd-agriculture',
      citedFor:
        'Agricultural policy and structural context for labour in farming and food supply',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. The mechanism is generic, but labour law, industrial-relations practice, seasonal-worker arrangements, and workforce availability are entirely jurisdiction- and sector-specific.',
  limitations: [
    'A reference description of a mechanism, not an assessment of any dispute, workforce, employer, facility, or jurisdiction.',
    'No stoppage frequencies, durations, labour shortfalls, wages, or productivity figures are given: they are jurisdiction- and sector-specific, and any general figure would misrepresent a specific case.',
    'Nothing here is employment, industrial-relations, or legal advice, and no position in any dispute is expressed or implied.',
    'Labour availability is treated as an operational mechanism; labour conditions, rights, and standards are a separate subject governed by applicable law and by the relevant social and labour standards.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Labour Disruption: Mechanism and Seasonal Asymmetry',
    description:
      'How labour disruption stops an agricultural chain: withdrawal of labour versus structural unavailability, and why the biological deadline makes timing decisive.',
    keywords: [
      'labour disruption',
      'industrial action',
      'labour shortage',
      'harvest labour',
      'port labour',
      'supply chain risk',
    ],
  },
  structuredData: { article: true },
};
