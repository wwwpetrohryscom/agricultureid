import type { LogisticsConceptContent } from '@/types/content';

export const controlledAtmosphereTransport: LogisticsConceptContent = {
  id: 'logistics-concept-controlled-atmosphere-transport',
  slug: 'controlled-atmosphere-transport',
  contentType: 'logistics-concept',
  title: 'Controlled Atmosphere Transport',
  alternativeNames: ['CA transport', 'Atmosphere-controlled carriage'],
  category: 'Logistics concept',
  subcategory: 'Chain integrity',
  logisticsClass: 'chain-integrity',
  summary:
    'Controlled atmosphere transport actively manages the gas composition around a respiring commodity in transit, slowing it down beyond what temperature alone achieves. It buys time — often enough to move produce by sea that would otherwise have to fly — and it does so by holding a living tissue close to a limit it must not cross.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Harvested fruit and vegetables are alive. They respire, consuming oxygen and producing carbon dioxide, and that respiration is the engine driving softening, sugar loss, senescence, and eventually decay. Refrigeration slows respiration by lowering the temperature. Controlled atmosphere slows it further by changing the air itself — reducing oxygen and raising carbon dioxide relative to normal air, so the tissue has less of what it needs to burn and more of what inhibits it.',
    },
    {
      type: 'paragraph',
      text: 'The commercial consequence is the point of the whole technique. A commodity whose life is measured in days can only reach a distant market by air; a commodity whose life is measured in weeks can go by sea, at a fraction of the cost and a fraction of the emissions. Controlled atmosphere is the technology that has moved specific trades across that line, and it is why a good deal of fruit now arrives by ship that once could only have flown.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value:
        'Chain integrity — active management of the gas composition around the cargo',
    },
    { label: 'Cargo form', value: 'Containerised, unitised' },
    {
      label: 'Mechanism',
      value:
        'Reduced oxygen and raised carbon dioxide slow respiration beyond what cooling alone achieves',
    },
    {
      label: 'Commercial purpose',
      value:
        'Extending transit life far enough to move a trade from air freight to sea freight',
    },
    {
      label: 'Always additional to',
      value:
        'Temperature control — it supplements the cold chain and never replaces it',
    },
    {
      label: 'Central hazard',
      value:
        'Too little oxygen or too much carbon dioxide injures the commodity, sometimes irreversibly',
    },
    {
      label: 'Requires',
      value:
        'A gas-tight enclosure, active gas control, and monitoring throughout the voyage',
    },
  ],
  sections: [
    {
      id: 'the-mechanism',
      heading: 'The mechanism',
      body: [
        {
          type: 'paragraph',
          text: 'Respiration is combustion, slowed down and organised. The tissue takes in oxygen, oxidises its own stored sugars and acids, and releases carbon dioxide, water, and heat. Everything the market values about fresh produce — firmness, sugar, acidity, colour, and the simple fact of being alive rather than decomposing — is being consumed by this process from the moment of harvest. The commodity is spending itself, and the only question is how fast.',
        },
        {
          type: 'paragraph',
          text: 'Two levers slow it. Lowering the temperature slows the reactions, which is what the cold chain does. Restricting the oxygen limits the reaction directly, and raising the carbon dioxide inhibits it further and suppresses some of the decay organisms as well. In some commodities the atmosphere also blunts the response to ethylene, the hormone that drives ripening — which is why controlled atmosphere can hold a fruit in a pre-ripe state through a voyage and let it be ripened deliberately at the destination.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'You are working next to a cliff',
          text: 'Oxygen cannot simply be reduced without limit. Below the level a tissue needs, it switches to fermentation — producing alcohols and off-flavours, and injuring the commodity in ways no subsequent handling reverses. Excess carbon dioxide causes its own injury. The technique works in a window between too much respiration and physiological damage, and the window is narrow, commodity-specific, and interacts with temperature.',
        },
      ],
    },
    {
      id: 'how-it-is-done-in-transit',
      heading: 'How it is done in transit',
      body: [
        {
          type: 'paragraph',
          text: 'A controlled atmosphere container is a reefer with two additions: an enclosure tight enough to hold a gas composition against leakage, and a system that actively manages that composition. The load respires continuously, so an atmosphere is not something established once and left — it drifts constantly, and the equipment’s job is to counteract that drift for the whole voyage. Without active management, a sealed box of respiring produce would run itself into oxygen depletion.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Controlled atmosphere',
              description:
                'The composition is actively measured and corrected throughout the journey. What distinguishes the technique from a passive one.',
            },
            {
              term: 'Modified atmosphere',
              description:
                'An initial composition is established, then left to drift under the load’s own respiration and the packaging’s permeability. Simpler, cheaper, and far less precise.',
            },
            {
              term: 'Gas-tightness',
              description:
                'The enclosure’s ability to hold a composition against leakage. The physical precondition — a box that leaks cannot hold an atmosphere however good its control system.',
            },
            {
              term: 'Nitrogen flush',
              description:
                'Displacing oxygen with nitrogen to reach the intended composition, rather than waiting for the load to consume the oxygen itself.',
            },
            {
              term: 'Scrubbing',
              description:
                'Removing accumulated carbon dioxide, and in some systems ethylene, that the load itself continuously produces.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'The technique layers onto the cold chain rather than substituting for it. Temperature is still the primary control, the load still has to be precooled before it is loaded, and the airflow still has to reach the produce. A controlled atmosphere applied to a warm load, or one the air cannot penetrate, delivers exactly nothing — it is a second lever on a system that must already be working.',
        },
      ],
    },
    {
      id: 'what-goes-wrong',
      heading: 'What goes wrong',
      body: [
        {
          type: 'paragraph',
          text: 'The characteristic failure is not equipment breakdown but a correct system delivering a specification that was wrong for the commodity. Tolerance to low oxygen and to elevated carbon dioxide varies by species, by cultivar, by maturity at harvest, and by the temperature the load is held at — the same atmosphere that extends one cultivar’s life injures another’s. When that happens the damage is physiological, it is done inside the fruit, and it is frequently invisible until the consignment is opened or, worse, until it is ripened at the destination.',
        },
        {
          type: 'list',
          items: [
            'Fermentation and off-flavours from oxygen below the commodity’s tolerance — irreversible, and often undetected until ripening',
            'Carbon dioxide injury from accumulation the system failed to scrub',
            'A specification correct for a different cultivar or maturity stage, faithfully delivered',
            'Loss of gas-tightness from door seals, damage, or an enclosure never tight enough to begin with',
            'Control or sensor failure, where the atmosphere drifts while the record shows the setpoint',
            'Warm loading, which makes the atmosphere irrelevant because the temperature lever was never applied',
            'Blocked airflow, so the atmosphere exists in the box but not within the load',
            'Mixed loads whose components need different atmospheres — an incompatibility that no single setting resolves',
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No gas concentrations appear on this page',
          text: 'There is no oxygen level, carbon dioxide level, or atmosphere specification that is correct across commodities, cultivars, maturity stages, and carrying temperatures. Any figure stated generally would injure most consignments it was applied to. Atmosphere specifications for a real consignment come from commodity-specific technical guidance and the contract, and are established by people who know that cultivar.',
        },
      ],
    },
    {
      id: 'entering-a-ca-container',
      heading: 'A controlled atmosphere is an oxygen-deficient space',
      body: [
        {
          type: 'paragraph',
          text: 'This deserves to be stated plainly and separately from the cargo discussion. The interior of a controlled atmosphere container is, by design, an atmosphere that does not support human life. It is not merely stuffy or unpleasant — it is a confined space with depleted oxygen, and it is one that gives no warning, because the body does not reliably sense oxygen deficiency. People have died opening and entering such spaces believing them to be ordinary containers.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Entry is a confined-space operation',
          text: 'Opening, ventilating, and entering a controlled atmosphere unit is governed by confined-space regulation, requires trained personnel, testing, and procedures, and is not something this page describes or instructs. Any facility handling these units operates under its own risk assessment and the applicable occupational-safety regulation.',
        },
        {
          type: 'paragraph',
          text: 'The same fact shapes border inspection. A controlled atmosphere consignment cannot simply be opened and examined the way a dry container can; the atmosphere must first be broken, which both ends the treatment and takes time. This is a real interaction between the technique and the regulatory chain, and it is one reason the atmosphere’s benefit is not fully available right up to the point of delivery.',
        },
      ],
    },
  ],
  logisticsPurpose:
    'Extend the transit life of a respiring commodity beyond what refrigeration alone allows, by actively holding the gas composition around it in a range that suppresses respiration without injuring the tissue — often enough to move a trade from air freight onto ships.',
  operationalLimitations: [
    'No oxygen levels, carbon dioxide levels, or atmosphere specifications are given anywhere on this page. They are specific to the species, cultivar, maturity stage, and carrying temperature, and a general figure would injure most consignments it was applied to.',
    'No carrying temperatures are given. The atmosphere interacts with temperature and neither can be specified independently of the other or of the commodity.',
    'This page cannot say whether a commodity benefits from a controlled atmosphere at all. Many do not, and some are injured by it.',
    'Tolerance limits are commodity- and cultivar-specific, are established by research on that cultivar, and are not generalisable between commodities or even within a species.',
    'This page cannot say whether two commodities may share a controlled atmosphere unit — differing atmosphere requirements are an incompatibility no single setting resolves.',
    'Equipment capability, gas-tightness, and control behaviour differ by unit and manufacturer and are properties of the specific equipment.',
    'Opening and entering a controlled atmosphere unit is a confined-space operation governed by occupational-safety regulation, trained personnel, and site procedures. Nothing here is an instruction for it.',
  ],
  cargoForms: ['containerised', 'unitised'],
  applicableCommodityClasses: ['fruit', 'vegetable'],
  applicableCommodities: [
    { type: 'commodity', slug: 'fresh-apples' },
    { type: 'commodity', slug: 'avocados' },
    { type: 'commodity', slug: 'bananas' },
    { type: 'commodity', slug: 'fresh-blueberries' },
    { type: 'commodity', slug: 'table-grapes' },
    { type: 'commodity', slug: 'fresh-mangoes' },
  ],
  qualityRisks: [
    { type: 'quality-attribute', slug: 'respiration-rate' },
    { type: 'quality-attribute', slug: 'ethylene-production' },
    { type: 'quality-attribute', slug: 'firmness' },
    { type: 'quality-attribute', slug: 'internal-quality' },
    { type: 'quality-attribute', slug: 'soluble-solids-content' },
    { type: 'quality-attribute', slug: 'titratable-acidity' },
  ],
  dependsOnOperations: [
    { type: 'post-harvest', slug: 'controlled-atmosphere-storage' },
    { type: 'post-harvest', slug: 'modified-atmosphere-storage' },
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'ethylene-management' },
    { type: 'post-harvest', slug: 'fruit-ripening' },
    { type: 'post-harvest', slug: 'harvest-maturity-assessment' },
  ],
  relevantStandards: [
    { type: 'standard-reference', slug: 'codex-food-hygiene-principles' },
    { type: 'standard-reference', slug: 'unece-fresh-produce-standards' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'cif-delivery-term' },
    { type: 'trade-concept', slug: 'phytosanitary-certificate' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'air-freight-of-perishables' },
    { type: 'logistics-concept', slug: 'cold-chain-integrity' },
    { type: 'logistics-concept', slug: 'cold-store-facility' },
    { type: 'logistics-concept', slug: 'fumigation-in-transit' },
    { type: 'logistics-concept', slug: 'port-of-entry-inspection' },
    { type: 'logistics-concept', slug: 'reefer-container-transport' },
    { type: 'logistics-concept', slug: 'temperature-monitoring-in-transit' },
  ],
  exposedToRisks: [
    { type: 'supply-chain-risk', slug: 'cold-chain-failure' },
    { type: 'supply-chain-risk', slug: 'infrastructure-failure' },
    { type: 'supply-chain-risk', slug: 'port-congestion' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Post-harvest physiology of fresh produce, respiration, and atmosphere management to extend storage and transit life',
    },
    {
      sourceId: 'usda',
      citedFor:
        'Controlled and modified atmosphere handling of horticultural commodities',
    },
    {
      sourceId: 'unece-standards',
      citedFor:
        'Commercial quality standards for fresh produce moving in international trade',
    },
    {
      sourceId: 'codex',
      citedFor:
        'General principles of food hygiene relevant to handling fresh produce in transport',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global, but concentrated on long-haul trades where the extension of transit life is what makes sea carriage possible. Equipment availability and the trades using it differ by route and carrier.',
  limitations: [
    'A reference description of the technique, not an operating instruction, an atmosphere specification, or a carrying recommendation.',
    'No gas concentrations, temperatures, tolerances, or durations are given — they are commodity-, cultivar-, maturity-, and temperature-specific, and no universal value exists.',
    'Whether a commodity benefits from a controlled atmosphere, and on what specification, is established from commodity-specific technical guidance, not from this page.',
    'Opening and entering these units is a confined-space operation under occupational-safety regulation and is outside this description’s scope.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Controlled Atmosphere Transport: Slowing Respiration',
    description:
      'How controlled atmosphere transport works: why respiration is the clock, how reduced oxygen and raised carbon dioxide extend transit life, and the injury risk.',
    keywords: [
      'controlled atmosphere transport',
      'CA container',
      'modified atmosphere',
      'respiration rate produce',
      'extended transit life',
    ],
  },
  structuredData: { article: true },
};
