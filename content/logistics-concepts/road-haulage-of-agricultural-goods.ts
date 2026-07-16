import type { LogisticsConceptContent } from '@/types/content';

export const roadHaulageOfAgriculturalGoods: LogisticsConceptContent = {
  id: 'logistics-concept-road-haulage-of-agricultural-goods',
  slug: 'road-haulage-of-agricultural-goods',
  contentType: 'logistics-concept',
  title: 'Road Haulage of Agricultural Goods',
  alternativeNames: [
    'Trucking of agricultural produce',
    'Agricultural road transport',
  ],
  category: 'Logistics concept',
  subcategory: 'Transport mode',
  logisticsClass: 'transport-mode',
  summary:
    'Road haulage is the only mode that can reach a field, and therefore the mode every agricultural supply chain begins with and most end with. It is the most flexible and the most expensive per tonne-kilometre, which is why it is used for the shortest legs and the ones nothing else can do.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Crops are produced across a landscape, not at points. Ships call at ports, trains call at terminals, and aircraft call at airports, but the harvest is spread over fields that have none of those things. Road haulage is what bridges the gap, and this is why almost every agricultural consignment in the world begins its journey on a truck and why so many end on one too. The mode is not chosen for the first leg — it is the only option there is.',
    },
    {
      type: 'paragraph',
      text: 'That ubiquity comes at a price. Road is the most expensive mainstream mode per tonne-kilometre, because each vehicle carries a modest payload and needs its own driver for the whole journey. Its cost does not fall with volume the way rail’s and sea’s do. The result is a consistent structure across world agriculture: road does the collection and the distribution, something cheaper does the distance, and the design question is how early the consignment can leave the road and how late it must return to it.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Transport mode — flexible overland carriage by vehicle',
    },
    {
      label: 'Cargo form',
      value:
        'Dry bulk in tippers and walking floors; unitised on flatbeds and curtainsiders; refrigerated in reefer trailers',
    },
    {
      label: 'Unique capability',
      value:
        'Reaching origins and destinations that have no fixed infrastructure',
    },
    {
      label: 'Economic character',
      value:
        'Highest cost per tonne-kilometre; cost does not fall much with volume',
    },
    {
      label: 'Typical role',
      value: 'First mile and last mile, and short-to-medium direct hauls',
    },
    {
      label: 'Regulated on',
      value:
        'Vehicle weights and dimensions, and driver working time — both jurisdiction-specific',
    },
    {
      label: 'Peak character',
      value:
        'Harvest concentrates demand into weeks, so capacity is scarce exactly when it is needed',
    },
  ],
  sections: [
    {
      id: 'why-road-is-unavoidable',
      heading: 'Why road is unavoidable',
      body: [
        {
          type: 'paragraph',
          text: 'The defining property of road haulage is that its network is essentially everywhere. A vehicle needs no dedicated infrastructure at either end — no berth, no siding, no apron — and can serve an origin that will only exist as an origin for a few weeks a year. No other mode can economically serve a location that generates a flow only at harvest, because no other mode can serve a location without a facility built for it.',
        },
        {
          type: 'paragraph',
          text: 'This flexibility is why road also absorbs all the irregularity in agricultural logistics. Where volumes are small, the origin is remote, the timing is uncertain, or the destination changes with the market, road is the mode that copes. The other modes require commitment — a booked path, a chartered ship, a scheduled service — and agriculture frequently cannot commit until the crop is in the vehicle.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The first mile decides more than it costs',
          text: 'The road leg from field to store or packhouse is short and cheap relative to the journey, but it is where field heat is or is not removed in time, where mechanical damage is done, and where a consignment’s identity is first recorded. Its influence on the outcome is out of all proportion to its share of the freight bill.',
        },
      ],
    },
    {
      id: 'vehicles-and-what-they-do',
      heading: 'Vehicles and what they do to the cargo',
      body: [
        {
          type: 'paragraph',
          text: 'The vehicle is chosen by the cargo’s form rather than by the destination, and each type imposes its own handling on the load. Bulk vehicles discharge by tipping or by a moving floor, which is fast and rough; unitised vehicles are loaded and unloaded by forklift, which is gentler and slower; refrigerated trailers add an active environment and all the constraints that come with it.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Tipper and walking-floor trailer',
              description:
                'Bulk carriage discharged by raising the body or by a moving floor. Fast, and mechanically hard on friable commodities.',
            },
            {
              term: 'Curtainsider and box trailer',
              description:
                'Unitised carriage of palletised or bagged goods, loaded from the side or rear. The workhorse for packed agricultural product.',
            },
            {
              term: 'Refrigerated trailer',
              description:
                'A road vehicle with its own refrigeration unit. Subject to the same principle as any reefer — it cools air, and the air must reach the load.',
            },
            {
              term: 'Livestock vehicle',
              description:
                'Purpose-built for live animals, where the cargo’s welfare during the journey is itself the regulated subject and the constraints are entirely different in kind.',
            },
            {
              term: 'Flatbed',
              description:
                'Open carriage for baled, crated, or oversized loads, where securing rather than enclosure is the protective measure.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Contamination discipline applies to road as it does to holds and wagons. A tipper that carried something incompatible is a pathway into a food commodity, and vehicle assignment and cleaning between loads sit inside the quality system rather than outside it.',
        },
      ],
    },
    {
      id: 'what-constrains-it',
      heading: 'What constrains the mode',
      body: [
        {
          type: 'paragraph',
          text: 'Road haulage is bounded by regulation and by labour more than by physics. Vehicle weights and dimensions are limited by law to protect infrastructure and other users, and driver working time is limited by law for road safety. Both limits are set by jurisdiction and both bind hard: a vehicle cannot be loaded past the legal weight because the cargo would fit, and a journey cannot be shortened by driving beyond permitted hours. For a perishable consignment, a mandatory rest period is a length of time the commodity is not moving toward its market.',
        },
        {
          type: 'list',
          items: [
            'Harvest peaks, when every producer in a region wants a vehicle in the same fortnight and capacity simply runs out',
            'Driver availability, a persistent structural constraint in many markets that no amount of freight demand resolves quickly',
            'Legal weight and dimension limits, which cap payload independently of what the vehicle could physically carry',
            'Driver working-time rules, which set the journey’s shape and cannot be traded against urgency',
            'Road condition and seasonal access, which in many producing regions decides whether a crop can leave at all',
            'Queueing at terminals, packhouses, and border crossings, where the vehicle and driver are idle but committed',
            'Contamination from a previous load in an inadequately cleaned body',
            'Fuel price exposure, which passes into rates faster in road than in any other mode',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'The queue is part of the mode',
          text: 'Much of a truck’s time in agricultural chains is spent waiting — at a weighbridge, in an intake queue at harvest, at a border post. This is not a failure of the vehicle; it is a property of chains where many road vehicles converge on facilities designed as points. It is also where perishable consignments lose condition while apparently in transit.',
        },
      ],
    },
    {
      id: 'where-it-fits',
      heading: 'Where it fits',
      body: [
        {
          type: 'paragraph',
          text: 'The strategic question in agricultural logistics is rarely whether to use road but how much road to use. Because cost per tonne-kilometre is high and roughly linear with distance, road wins at short range and loses steadily as distance grows, while rail, river, and sea have high fixed costs and low marginal ones. The crossover point is not a universal number — it moves with fuel, tolls, wages, terminal charges, and the availability of any alternative at all — which is precisely why it cannot be stated here.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No limits, rates, or payloads appear here',
          text: 'Weight and dimension limits, driver hours rules, and haulage rates are jurisdiction- and contract-specific. This page names the constraints without stating any value, and no figure should be inferred from it for any route or vehicle.',
        },
      ],
    },
  ],
  logisticsPurpose:
    'Connect dispersed production and consumption to the fixed points that every other transport mode requires, and carry consignments directly where distance and volume do not justify a mode with terminals.',
  operationalLimitations: [
    'No vehicle payloads, weights, dimensions, or axle limits are given. These are set by law in each jurisdiction and by the specific vehicle, and differ substantially between countries.',
    'No driver working-time limits are given. They are regulatory, jurisdiction-specific, and enforced against the operator, not summarised here.',
    'No haulage rates are given. Road rates are negotiated, respond quickly to fuel and labour costs, and spike at harvest.',
    'No transit times are given. They depend on distance, road condition, queueing, border crossings, and mandatory rest, and are not generalisable.',
    'This page cannot say at what distance road stops being the economic choice. The crossover depends on fuel, tolls, wages, terminal charges, and whether an alternative mode serves the route at all.',
    'Vehicle cleaning standards and load compatibility are set by the operator and the applicable food-safety requirements for the specific consignment.',
    'Live animal transport is subject to its own welfare regulation, which is jurisdiction-specific and outside the scope of this description.',
  ],
  cargoForms: ['bulk-dry', 'unitised', 'containerised', 'breakbulk', 'live'],
  applicableCommodityClasses: [
    'cereal-grain',
    'oilseed',
    'pulse',
    'fruit',
    'vegetable',
    'root-tuber',
    'sugar-crop',
    'livestock-product',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'ware-potatoes' },
    { type: 'commodity', slug: 'sugar-beet' },
    { type: 'commodity', slug: 'fresh-tomatoes' },
    { type: 'commodity', slug: 'dry-bulb-onions' },
    { type: 'commodity', slug: 'raw-cow-milk' },
  ],
  qualityRisks: [
    { type: 'quality-attribute', slug: 'mechanical-damage' },
    { type: 'quality-attribute', slug: 'moisture-content' },
    { type: 'quality-attribute', slug: 'foreign-material' },
    { type: 'quality-attribute', slug: 'firmness' },
    { type: 'quality-attribute', slug: 'broken-kernels' },
  ],
  dependsOnOperations: [
    { type: 'post-harvest', slug: 'field-heat-removal' },
    { type: 'post-harvest', slug: 'palletisation' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'cold-chain' },
  ],
  relevantStandards: [
    { type: 'standard-reference', slug: 'codex-food-hygiene-principles' },
    { type: 'standard-reference', slug: 'globalgap-integrated-farm-assurance' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'exw-delivery-term' },
    { type: 'trade-concept', slug: 'fca-delivery-term' },
    { type: 'trade-concept', slug: 'ddp-delivery-term' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'cold-chain-integrity' },
    { type: 'logistics-concept', slug: 'cold-store-facility' },
    {
      type: 'logistics-concept',
      slug: 'flexible-intermediate-bulk-containers',
    },
    { type: 'logistics-concept', slug: 'grain-terminal' },
    { type: 'logistics-concept', slug: 'multimodal-transport' },
    { type: 'logistics-concept', slug: 'palletisation' },
    { type: 'logistics-concept', slug: 'rail-freight-of-agricultural-goods' },
  ],
  exposedToRisks: [
    { type: 'supply-chain-risk', slug: 'inland-logistics-bottleneck' },
    { type: 'supply-chain-risk', slug: 'labour-disruption' },
    { type: 'supply-chain-risk', slug: 'infrastructure-failure' },
    { type: 'supply-chain-risk', slug: 'freight-rate-volatility' },
    { type: 'supply-chain-risk', slug: 'cold-chain-failure' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Role of first-mile transport in post-harvest handling and food loss in agricultural chains',
    },
    {
      sourceId: 'worldbank',
      citedFor:
        'Road infrastructure and logistics performance as constraints on agricultural market access',
    },
    {
      sourceId: 'usda',
      citedFor:
        'Truck transport of agricultural commodities and its role in domestic movement to terminals and processors',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. Road quality, seasonal accessibility, vehicle regulation, and haulage market structure differ profoundly by country and region, and in many producing areas road access decides whether a crop reaches a market at all.',
  limitations: [
    'A reference description of the mode, not a haulage, routing, or rate service.',
    'No payloads, weight limits, dimensions, driver hours, transit times, or rates are given — all are jurisdiction-, vehicle-, and contract-specific.',
    'Vehicle weights, dimensions, and driver working time are regulated differently in every jurisdiction and are set by the applicable authority.',
    'Livestock transport is governed by separate animal welfare regulation that is outside this description’s scope.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Road Haulage of Agricultural Goods: Reaching the Field',
    description:
      'How road haulage serves agriculture: why it is unavoidable in the first and last mile, the vehicle types, and the regulatory and labour limits that bind it.',
    keywords: [
      'agricultural road haulage',
      'trucking produce',
      'first mile transport',
      'refrigerated trailer',
      'farm to terminal transport',
    ],
  },
  structuredData: { article: true },
};
