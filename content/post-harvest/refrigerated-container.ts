import type { PostHarvestContent } from '@/types/content';

export const refrigeratedContainer: PostHarvestContent = {
  id: 'post-harvest-refrigerated-container',
  slug: 'refrigerated-container',
  contentType: 'post-harvest',
  title: 'Refrigerated Container',
  postHarvestClass: 'cooling',
  processStage: 'transport',
  operatingPrinciple:
    'An insulated shipping container with an integral refrigeration unit at one end delivers conditioned air into a T-bar floor, so air travels the length of the container beneath the cargo, rises through the stow, and returns along the ceiling to the unit. This bottom-air delivery is the defining feature and the source of most reefer behaviour: the cold air must pass through the load, so the stow itself is part of the machine. A reefer is a holding device, not a cooling one — its unit is sized to remove the heat leaking in through the walls and the modest heat of respiration, not to pull down a warm load. Cargo must therefore be at temperature before it is loaded, and many units additionally manage fresh-air exchange to vent respiratory carbon dioxide and ethylene.',
  riskFactors: [
    'Loading produce that has not been precooled, which a reefer unit cannot pull down and which will arrive warm and deteriorated',
    'Blocked bottom-air delivery: a solid stow, cartons overhanging the T-bar floor, or a load sitting directly on the floor stops air reaching the cargo',
    'Stowing above the red load line, which blocks the return air path along the ceiling and short-circuits the airflow',
    'Short-circuiting, where air returns to the unit without passing through the cargo, leaving the far end of the container uncooled',
    'Chilling or freezing injury from a setpoint wrong for the commodity, discovered only on arrival',
    'Mixed loads with incompatible temperature, ethylene, or fresh-air requirements in one box',
    'Fresh-air vent set wrongly: closed on a respiring load lets carbon dioxide accumulate, open in a controlled-atmosphere shipment defeats the atmosphere',
    'Unit failure, fuel exhaustion, or an unplugged container during transhipment or at a terminal, potentially unnoticed for days',
    'Condensation and wet cartons where warm humid air enters at doors during stuffing or inspection',
    'Door openings and delays at port and customs breaking the cold chain at the least visible point of the journey',
  ],
  monitoringMethods: [
    { type: 'quality-measurement', slug: 'temperature-probe' },
  ],
  safetyLimitations: [
    'A refrigerated container is an enclosed space that can develop an oxygen-deficient or carbon-dioxide-enriched atmosphere from cargo respiration, from a controlled-atmosphere system, or from fumigation applied in transit. Containers have caused fatalities among people entering them. Entry is a confined-space activity requiring trained personnel, atmosphere testing, and the operator’s own procedures; AgricultureID gives no entry or atmosphere procedure.',
    'Refrigerant systems and container gensets are pressurised and electrically powered, and are serviced by qualified technicians under the applicable regulations.',
  ],
  applicableCommodityClasses: [
    'fruit',
    'vegetable',
    'livestock-product',
    'beverage-crop',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'bananas' },
    { type: 'commodity', slug: 'fresh-apples' },
    { type: 'commodity', slug: 'table-grapes' },
    { type: 'commodity', slug: 'fresh-mangoes' },
    { type: 'commodity', slug: 'avocados' },
    { type: 'commodity', slug: 'fresh-blueberries' },
    { type: 'commodity', slug: 'fresh-oranges' },
    { type: 'commodity', slug: 'fresh-pineapples' },
  ],
  qualityEffects: [
    'Holds produce at a chosen temperature across long ocean voyages, which is what makes intercontinental fresh trade possible at all',
    'Cannot recover quality: a load stuffed warm or already deteriorating arrives worse, and the voyage is dead time for it',
    'Uneven cooling from a poor stow produces arrival claims concentrated at the door end and in blocked zones',
    'Fresh-air exchange vents respiratory carbon dioxide and ethylene, preventing the atmosphere from injuring or over-ripening the load',
    'Long transit at correct temperature still ages produce; a reefer slows senescence, it does not suspend it',
    'Controlled-atmosphere reefers extend this further by actively regulating gases, at additional cost and complexity',
  ],
  environmentalContext:
    'Reefers are the physical basis of the intercontinental fresh produce trade: counter-seasonal fruit, year-round supply in temperate markets, and export horticulture from tropical producing countries all depend on them. Their weak point is not the ocean leg, which is monitored and stable, but the ends — the yard, the terminal, the transhipment port, and the inland leg, where a container may be unplugged, delayed, or opened. In regions where port power, handling reliability, and inland cold chain are weak, the reefer is only as good as the least reliable link around it.',
  alternativeNames: [
    'Reefer',
    'Reefer container',
    'Refrigerated shipping container',
  ],
  category: 'Post-harvest operation',
  subcategory: 'Cooling & cold storage',
  summary:
    'A refrigerated container is an insulated shipping box with an integral cooling unit that delivers air through a T-bar floor and up through the stow. It holds precooled produce at temperature — it cannot cool a warm load.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A refrigerated container — a reefer — is an insulated intermodal shipping container with a refrigeration unit built into one end. It is the vehicle of the global fresh produce trade: bananas from the tropics, apples and grapes moving counter-seasonally between hemispheres, avocados and blueberries reaching markets thousands of kilometres from where they grew. Its value is that a single box can be plugged in at a packhouse, hauled to a port, powered on a ship for weeks, discharged, and delivered inland without the cargo being handled or its temperature interrupted.',
    },
    {
      type: 'paragraph',
      text: 'The single most consequential fact about a reefer is that it does not cool. Its refrigeration unit is sized to remove the heat conducted in through the insulated walls and the modest heat that respiring produce generates — not to remove the field heat from a warm load. Produce must be precooled to its carrying temperature before it is stuffed. A container loaded warm in the expectation that the unit will bring it down will not achieve it: the unit lacks the capacity, the airflow through a packed stow is limited, and the produce spends the voyage deteriorating. This is the origin of a large share of arrival claims, and it is a loading error rather than an equipment failure.',
    },
  ],
  keyFacts: [
    {
      label: 'What it is',
      value:
        'An insulated shipping container with an integral refrigeration unit',
    },
    {
      label: 'Critical limitation',
      value:
        'It holds temperature; it cannot pull down a warm load — precooling is mandatory',
    },
    {
      label: 'Airflow',
      value:
        'Bottom-air delivery: air runs under the cargo in a T-bar floor and rises through the stow',
    },
    {
      label: 'The stow is part of the machine',
      value:
        'A blocked or over-high load short-circuits the air and leaves cargo uncooled',
    },
    {
      label: 'Fresh-air exchange',
      value:
        'Vents respiratory carbon dioxide and ethylene from living produce',
    },
    {
      label: 'Weakest points',
      value: 'Ports, transhipment, and inland legs — not the ocean voyage',
    },
    {
      label: 'Serious hazard',
      value: 'Enclosed space; atmospheres can be oxygen-deficient or fumigated',
    },
  ],
  sections: [
    {
      id: 'holds-not-cools',
      heading: 'A reefer holds; it does not cool',
      body: [
        {
          type: 'paragraph',
          text: 'This is the point on which reefer shipments most often fail, and it is worth stating without qualification. The refrigeration plant on a container is dimensioned for a steady-state duty: replacing the heat that leaks through the insulation from the outside air, and removing the heat that living produce gives off as it respires. Both are small compared with the field heat in a pallet of fruit picked in the sun. Pulling that heat out is the job of a precooling operation — forced-air, hydro-cooling, or vacuum cooling — performed at the packhouse, using equipment with many times the capacity, before the container is ever stuffed.',
        },
        {
          type: 'paragraph',
          text: 'The problem compounds itself. A tightly packed stow of warm cartons resists airflow, so the limited cold air the unit produces cannot reach the middle of the load anyway. The unit runs continuously, the return air reads warm, and an inexperienced operator may conclude the machine is faulty. It is not: it is doing what it was built to do, against a load it was never intended to handle. By the time the container is opened at destination, the produce has spent the voyage at a temperature at which it was ripening, softening, and decaying. Carrying temperatures for each commodity are set by the applicable national and trade guidance; the requirement to reach that temperature before stuffing is universal.',
        },
      ],
    },
    {
      id: 'stow',
      heading: 'Why the stow is part of the machine',
      body: [
        {
          type: 'paragraph',
          text: 'A reefer uses bottom-air delivery. Conditioned air leaves the unit at floor level, travels the length of the container along the channels of a T-bar decking, rises through the cargo, and returns along the ceiling to the unit’s intake. That geometry is deliberate: air is forced to pass through the load rather than around it, so the cargo, not the box, is what gets cooled. But it also means the stow determines whether the system works at all. Air takes the easiest path, and any gap it can flow through instead of through the cargo is a path it will take.',
        },
        {
          type: 'paragraph',
          text: 'Hence the conventions. Cartons are stowed to leave the T-bar channels clear, because a pallet base sitting flat on the floor blocks the delivery path for everything behind it. The load is kept below the red line marked inside the container, because stowing to the ceiling blocks the return path and the air short-circuits straight back to the unit without traversing the cargo. Gaps at the sides and between blocks are managed so that air is not offered a free route past the load. A badly stowed reefer produces a distinctive claim pattern — sound produce near the unit, damaged produce at the door end — that reflects air never having got that far. Stow patterns and load limits are set by the carrier’s and the shipper’s own guidance for the commodity and packaging.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'No universal settings',
          text: 'Carrying temperature, fresh-air exchange rate, humidity, and stow pattern are commodity-, packaging-, and voyage-specific, and are set by the applicable national guidance, trade standards, and carrier instructions. This entry states none of them.',
        },
      ],
    },
    {
      id: 'living-cargo',
      heading: 'The cargo is alive',
      body: [
        {
          type: 'paragraph',
          text: 'A container of fruit is not inert freight. It respires — consuming oxygen and producing carbon dioxide, heat, and in many cases ethylene — for the entire voyage, in a sealed insulated box. Left entirely closed, the atmosphere inside changes: carbon dioxide accumulates and oxygen falls, which for some commodities is injurious and for others is beneficial. This is why reefers have a fresh-air vent, an adjustable opening that exchanges container air with outside air, and why its setting is a commodity-specific decision rather than a default.',
        },
        {
          type: 'paragraph',
          text: 'Ethylene is the other consequence of living cargo. Ripening fruit produces it, and it acts as a ripening signal on other produce in the same box, which is why commodities that produce it and commodities sensitive to it should not be mixed and why the vent contributes to removing it. Some reefers go further and actively regulate the gas composition throughout the voyage, which converts the box into a controlled-atmosphere store on wheels — a genuinely different system from a plain reefer, requiring gas control, monitoring, and the safety regime that any deliberately oxygen-deficient space demands.',
        },
      ],
    },
    {
      id: 'how-it-differs',
      heading: 'How it differs from related systems',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Versus the cold chain',
              description:
                'The cold chain is the whole unbroken sequence from field to consumer. A reefer is one link in it — the long-haul link — and the links around it, at ports and on inland legs, are where it most often breaks.',
            },
            {
              term: 'Versus precooling',
              description:
                'Precooling removes field heat with high-capacity equipment before shipping. A reefer maintains the result. They are complementary, and a reefer cannot substitute for precooling.',
            },
            {
              term: 'Versus a refrigerated warehouse',
              description:
                'A warehouse cools a room and its air; a reefer forces air through a fixed stow in a sealed box, and is moving. The warehouse can be re-stacked and inspected; the reefer cannot be touched for weeks.',
            },
            {
              term: 'Versus controlled-atmosphere storage',
              description:
                'A plain reefer only vents; a controlled-atmosphere reefer actively regulates gases in transit. That is CA applied to a moving container, with the same physiological risks and the same confined-space hazards.',
            },
          ],
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'banana' },
    { type: 'crop', slug: 'apple' },
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'mango' },
    { type: 'crop', slug: 'avocado' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'controlled-atmosphere-storage' },
    { type: 'post-harvest', slug: 'ethylene-management' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Cold chain and refrigerated transport of perishables',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Transport conditions and post-harvest handling of fresh produce',
    },
    {
      sourceId: 'usda',
      citedFor: 'Refrigerated transport practice for fruits and vegetables',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Post-harvest handling and transport of tropical produce',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global, on all major fresh produce trade routes. Carrying temperatures and vent settings are commodity-specific and are set by national guidance, trade standards, and carrier instructions.',
  limitations: [
    'This entry states no carrying temperature, fresh-air setting, humidity, or transit duration: all are commodity-, packaging-, and route-specific and are set by the applicable guidance, trade standards, and carrier instructions.',
    'A reefer cannot cool a warm load; where produce is not precooled, no setting or stow will produce a sound arrival.',
    'Container types, unit designs, airflow systems, and controlled-atmosphere capability differ by carrier and generation; behaviour described here is general.',
    'Refrigerated containers are enclosed spaces that may carry oxygen-deficient, carbon-dioxide-enriched, or fumigated atmospheres. Nothing here is an entry or atmosphere procedure.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Refrigerated Container (Reefer): How It Works',
    description:
      'How reefer containers carry fresh produce: bottom-air delivery through the stow, why a reefer holds but cannot cool a warm load, and stowing rules.',
    keywords: [
      'refrigerated container',
      'reefer container',
      'bottom air delivery',
      'reefer stowage',
      'fresh produce shipping',
    ],
  },
  structuredData: { article: true },
};
