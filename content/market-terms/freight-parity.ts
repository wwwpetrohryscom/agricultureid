import type { MarketTermContent } from '@/types/content';
import { NO_LIVE_PRICE_NOTE } from '@/types/trade';

export const freightParity: MarketTermContent = {
  id: 'market-term-freight-parity',
  slug: 'freight-parity',
  contentType: 'market-term',
  title: 'Freight Parity',
  alternativeNames: ['Import parity', 'Export parity', 'Parity pricing'],
  category: 'Market term',
  subcategory: 'Price relationship',
  marketTermClass: 'price-relationship',
  summary:
    'Freight parity is the price at one location implied by the price at another once the cost of moving the commodity between them is accounted for. It is a calculated comparison — a way of asking what a distant price means here — and not a price anyone quotes or pays.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Prices in different places are connected by the cost of moving goods between them. If a commodity is substantially cheaper somewhere than it is here, and the cost of bringing it here is less than the gap, then the gap invites the movement — and the movement, if it happens at all, tends to close the gap. Freight parity is the arithmetic that makes this relationship explicit: take a price at one location, add or subtract everything it costs to move the commodity to another, and the result is the first location’s price expressed in the second’s terms.',
    },
    {
      type: 'paragraph',
      text: 'A parity calculation is an analytical construction, not an observation. Nobody quotes a parity price and nobody pays one; it is a number produced in order to compare two real prices that are not otherwise comparable. Its usefulness depends entirely on the quality of the cost assumptions fed into it, and its most common misuse is to be mistaken for a price — or, worse, for a statement about where a price is going.',
    },
  ],
  keyFacts: [
    { label: 'Class', value: 'Price relationship — a calculated comparison' },
    {
      label: 'Construction',
      value:
        'A price at one location, adjusted by the full cost of moving the commodity to another',
    },
    {
      label: 'Import parity',
      value:
        'What a foreign price implies at a domestic location, once landing costs are added',
    },
    {
      label: 'Export parity',
      value:
        'What a foreign price implies back at a domestic origin, once costs to reach the buyer are deducted',
    },
    {
      label: 'Not a quotation',
      value:
        'No party quotes or transacts at parity; it is an analytical figure',
    },
    {
      label: 'Depends on',
      value:
        'Freight, handling, insurance, duties, financing, losses, and quality reconciliation — every one an assumption',
    },
    {
      label: 'Bounded meaning',
      value:
        'Parity relationships hold only where trade between the two points is actually possible',
    },
  ],
  sections: [
    {
      id: 'what-goes-into-a-parity-calculation',
      heading: 'What goes into a parity calculation',
      body: [
        {
          type: 'paragraph',
          text: 'The phrase "the cost of moving it" conceals a long list, and the completeness of that list is what determines whether a parity figure is informative or merely arithmetic. A calculation that includes only sea freight is not a parity calculation; it is a subtraction with a parity-shaped label.',
        },
        {
          type: 'list',
          items: [
            'Transport on every leg — inland to the port, the international movement, and inland at the destination',
            'Handling at each transfer: loading, discharge, storage while waiting, and terminal charges',
            'Insurance over the movement, and the financing cost of the cargo’s value while it is in transit',
            'Duties, taxes, and any levies applying on entry, which depend on classification, origin, and any preference that applies',
            'Losses and quality change in transit, which are physical costs even when no invoice records them',
            'Quality reconciliation — the two prices must be for comparable material, or the calculation compares two different goods',
            'Currency, where the two prices are in different ones, which introduces a variable that has nothing to do with freight',
          ],
        },
        {
          type: 'paragraph',
          text: 'Each of these is an assumption, and each carries uncertainty. A parity figure is therefore a conditional statement — under these cost assumptions, this distant price corresponds to this local one — and it is only as good as the weakest assumption in it. Presenting a parity number without its assumptions strips out precisely the information a reader needs to judge it.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'No parity figures and no cost assumptions here',
          text: 'AgricultureID publishes no parity calculations, no freight costs, no landed-cost figures, and no assumptions for any route or commodity. This page explains what a parity calculation is and what it requires, so that a figure obtained elsewhere can be interrogated for its assumptions.',
        },
      ],
    },
    {
      id: 'import-parity-and-export-parity',
      heading: 'Import parity and export parity',
      body: [
        {
          type: 'paragraph',
          text: 'The two familiar forms of the calculation run in opposite directions and answer opposite questions, and confusing them inverts the conclusion. Both are the same arithmetic; the difference is which price is the input and which location is the vantage point.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Import parity',
              description:
                'Starts from a price at a supplying location and adds every cost of landing the commodity at a domestic point. It answers: what would this commodity cost here if we brought it in? It bounds what a domestic buyer would rationally pay locally, since above that level importing is the alternative.',
            },
            {
              term: 'Export parity',
              description:
                'Starts from a price at a destination market and deducts every cost of getting there from a domestic origin. It answers: what does that foreign price leave back here? It bounds what a domestic seller would rationally accept locally, since below that level exporting is the alternative.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Together the two form a band. Where a local price sits between import parity and export parity, neither importing nor exporting is compelling, and the local price is free to be determined by local conditions. Where it moves outside the band, trade in one direction becomes attractive, and the trade — if it can happen — tends to push the price back toward the boundary. This band structure is the real content of the concept, and it explains why local prices in a tradable commodity move within limits set by distant markets.',
        },
      ],
    },
    {
      id: 'where-parity-relationships-fail',
      heading: 'Where parity relationships fail',
      body: [
        {
          type: 'paragraph',
          text: 'The band only constrains a price if the trade it implies can actually take place. A parity calculation is a statement about arithmetic; whether the arithmetic binds is a statement about the world, and the two come apart routinely.',
        },
        {
          type: 'list',
          items: [
            'A trade barrier, import ban, or quota can make the implied trade impossible regardless of the arithmetic — the parity figure remains computable and stops meaning anything',
            'Capacity limits bind: if no vessels, no port slots, or no storage are available, the implied movement cannot occur at any price',
            'Phytosanitary and standards requirements may exclude the commodity from the destination entirely, whatever the cost comparison says',
            'Costs are not constant with volume; a calculation using a single freight assumption misstates parity for any quantity that would move the freight market itself',
            'Time matters: parity compares prices at a moment, while the implied movement takes weeks, during which either price can move',
            'Where the two locations’ material differs in quality, the calculation compares different goods and the parity is spurious',
          ],
        },
        {
          type: 'paragraph',
          text: 'The consequence worth holding is that parity is a description of a constraint that may or may not be operative. When trade flows freely, it is a strong description; when trade is blocked, it is a piece of arithmetic about a movement that cannot happen. A parity figure never announces which situation it is in.',
        },
      ],
    },
  ],
  definition:
    'Freight parity is the price at one location implied by an observed price at another, calculated by adjusting for the full cost of moving the commodity between them — transport, handling, insurance, financing, duties, losses, and quality reconciliation. Import parity and export parity are its two directions, and together they describe a band within which a local price is unconstrained by distant markets.',
  usageContext:
    'Market analysis and physical trade, where a local price must be compared against a distant one to understand whether a location is naturally supplied by imports, by exports, or by local production alone.',
  notToBeConfusedWith: [
    'Freight cost — freight is one input to a parity calculation, not the calculation. A parity figure includes handling, insurance, financing, duties, losses, and quality reconciliation alongside transport, and omitting them produces a number that is not a parity.',
    'A price — no party quotes or transacts at parity. It is an analytical construction produced to compare two real prices, and treating it as a quotation misrepresents what it is.',
    'Basis — a basis is an observed relationship between an actual cash price and a reference, containing transport among other things. A parity is a calculated statement about what a distant price implies here, built from assumed costs. One is observed and composite; the other is computed and explicit.',
    'Origin differential — an origin differential is what the market actually pays for one origin against another, bundling reliability and reputation. A parity is what the arithmetic says the freight-adjusted comparison should be. They frequently disagree, and the disagreement is informative rather than an error in either.',
    'A price forecast — a parity says what a distant price implies now, under stated cost assumptions. It says nothing about where any price is going, and a local price outside the parity band is not a prediction that it will return.',
    'A delivery term such as CIF or FOB — a delivery term is a contractual allocation of cost and risk between parties. A parity calculation may use prices quoted on those terms, but it is an analytical exercise, not a contractual position.',
  ],
  advisoryLimitations: [
    NO_LIVE_PRICE_NOTE,
    'No parity calculations, freight rates, landed costs, duty figures, or cost assumptions are published here for any route, commodity, or period.',
    'This page does not indicate whether any trade is or would be viable, does not support a sourcing or trading decision, and offers no method for calculating parity for any actual route.',
    'A parity figure is only as sound as its cost assumptions, all of which are route-, volume-, and time-specific. Nothing here supplies or validates any assumption.',
    'Duty, classification, origin, and admissibility questions within a parity calculation are legal determinations made by the competent authority for a specific consignment, and are outside this page’s scope.',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'milled-rice' },
    { type: 'commodity', slug: 'soybeans' },
  ],
  relatedTerms: [
    { type: 'market-term', slug: 'basis' },
    { type: 'market-term', slug: 'cash-market' },
    { type: 'market-term', slug: 'origin-differential' },
    { type: 'market-term', slug: 'reference-price' },
    { type: 'market-term', slug: 'spot-price' },
    { type: 'market-term', slug: 'spread' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'cif-delivery-term' },
    { type: 'trade-concept', slug: 'fob-delivery-term' },
    { type: 'trade-concept', slug: 'incoterms-rules' },
    { type: 'trade-concept', slug: 'tariffs-and-duties' },
    { type: 'trade-concept', slug: 'customs-valuation' },
  ],
  sourceReferences: [
    {
      sourceId: 'igc',
      citedFor:
        'International grain and oilseed trade structure and the role of freight in origin competitiveness',
    },
    {
      sourceId: 'usda-ers',
      citedFor:
        'Market structure analysis of spatial price relationships and transport costs in agricultural markets',
    },
    {
      sourceId: 'unctad',
      citedFor:
        'Maritime transport and freight cost context for internationally traded commodities',
    },
    {
      sourceId: 'worldbank',
      citedFor:
        'Trade cost and spatial price transmission concepts in commodity markets',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a method. Every parity calculation is specific to a route, a pair of locations, a commodity, a quality, a volume, and a moment, and none generalises to another.',
  limitations: [
    'A description of a method, not a calculation, a cost assumption, or a parity figure for any route.',
    'Parity relationships constrain prices only where the implied trade is physically, commercially, and legally possible; where it is not, the arithmetic remains computable and stops being meaningful.',
    'Every input is an assumption with its own uncertainty, and a parity figure inherits all of them without disclosing any.',
    'The calculation compares a moment while the implied movement takes time, so parity is never a statement about what will happen.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Freight Parity: What a Distant Price Implies Here',
    description:
      'What freight parity means: import and export parity calculations, what they must include beyond freight, and why they fail when trade is blocked.',
    keywords: [
      'freight parity',
      'import parity',
      'export parity',
      'parity pricing',
      'landed cost comparison',
      'spatial price relationship',
    ],
  },
  structuredData: { article: true },
};
