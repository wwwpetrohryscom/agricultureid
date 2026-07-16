import type { TradeConceptContent } from '@/types/content';
import { TRADE_SCOPE_DISCLAIMER } from '@/types/trade';

export const exportLicence: TradeConceptContent = {
  id: 'trade-concept-export-licence',
  slug: 'export-licence',
  contentType: 'trade-concept',
  title: 'Export Licence',
  alternativeNames: [
    'Export permit',
    'Export authorisation',
    'Export restriction',
  ],
  category: 'Trade concept',
  subcategory: 'Market access',
  tradeConceptClass: 'market-access',
  summary:
    'An export licence is an authorisation a country requires before goods may leave it. In agriculture it is most consequential as the instrument through which export restrictions operate — measures a government applies to its own outbound trade, often to protect domestic supply, and which fall on importing countries that had no part in the decision.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Most discussion of trade measures assumes the importing country is the one imposing them. Export measures reverse the direction: the restriction is applied by the country the goods are leaving, and it binds an exporter who wants to sell and an importer who wants to buy. Neither is the target — the measure is usually aimed at the domestic market it leaves the goods in.',
    },
    {
      type: 'paragraph',
      text: 'For agricultural commodities this matters more than the licence’s administrative appearance suggests. When food prices rise, exporting countries come under pressure to keep supply at home, and the instruments they reach for — licensing, quotas, taxes, outright bans — are export measures. Their effect on world markets is the opposite of their domestic intent: withdrawing supply from an already tight market pushes prices up further for everyone still buying.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Market access — authorisation required to export',
    },
    {
      label: 'Applied by',
      value: 'The country the goods leave, not the country they enter',
    },
    {
      label: 'Purposes',
      value:
        'Domestic supply and price management, quality and reputation control, revenue, monitoring, and compliance with international obligations',
    },
    {
      label: 'Range of instruments',
      value:
        'Licensing and registration, quotas, minimum prices, export taxes, and prohibitions',
    },
    {
      label: 'Multilateral position',
      value:
        'Quantitative restrictions are disciplined in the GATT framework, with defined exceptions including temporary measures relating to critical foodstuff shortages',
    },
    {
      label: 'Notification',
      value:
        'The agricultural framework requires members introducing export restrictions to notify and to have regard to importing members’ food security',
    },
    {
      label: 'Systemic effect',
      value:
        'Restrictions by exporters can amplify a price shock rather than contain it, which is why they are monitored internationally',
    },
  ],
  sections: [
    {
      id: 'why-countries-restrict-exports',
      heading: 'Why a country restricts its own exports',
      body: [
        {
          type: 'paragraph',
          text: 'Export measures look economically perverse — a country limiting its own earnings — until the domestic politics are visible. The reasons are recurrent and mostly not about trade at all.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Domestic supply and price',
              description:
                'Keeping a staple at home to hold down its domestic price. This is the dominant motive for agricultural export restrictions and the one that appears under price pressure.',
            },
            {
              term: 'Revenue',
              description:
                'An export tax on a commodity the country supplies in quantity raises money at the point where it is easiest to collect.',
            },
            {
              term: 'Quality and reputation',
              description:
                'Licensing conditioned on inspection or grading, used to keep substandard product from damaging an origin’s standing in export markets.',
            },
            {
              term: 'Monitoring',
              description:
                'Registration or automatic licensing used to see what is leaving, without an intent to restrict.',
            },
            {
              term: 'International obligations',
              description:
                'Controls implementing commitments in other regimes, such as those on trade in protected species.',
            },
            {
              term: 'Value-chain policy',
              description:
                'Discouraging the export of a raw commodity to encourage processing at home before it leaves.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Not every export licence restricts',
          text: 'A licensing requirement used to monitor or to enforce quality standards is an export measure without being an export restriction. As with non-tariff measures generally, the instrument does not tell you the intent, and AgricultureID does not characterise any country’s measures.',
        },
      ],
    },
    {
      id: 'the-instruments',
      heading: 'The instruments',
      body: [
        {
          type: 'paragraph',
          text: 'Export measures form a gradient from visibility to prohibition, and they differ in how sharply they bite and how visible the biting is.',
        },
        {
          type: 'list',
          items: [
            'Registration or automatic licensing — exporters must be known and shipments recorded, without approval being withheld',
            'Non-automatic licensing — approval may be refused, so the licence is the point at which volume is controlled',
            'Export quotas — a ceiling on the quantity that may leave in a period, administered through licensing',
            'Minimum export prices — sales below a stated price are not permitted, which restricts by pricing rather than by volume',
            'Export taxes or levies — the trade remains lawful but is made less attractive, and revenue is raised',
            'Export prohibition — the trade stops entirely, usually temporarily and usually at short notice',
          ],
        },
        {
          type: 'paragraph',
          text: 'The multilateral framework generally disciplines quantitative restrictions on exports, but with defined exceptions, one of which expressly contemplates temporary prohibitions or restrictions applied to prevent or relieve critical shortages of foodstuffs. The agricultural framework adds a notification obligation and a requirement that a member instituting an export restriction give consideration to the food security of importing members. Export taxes sit differently again, being less comprehensively disciplined than quantitative measures except where a country has undertaken specific commitments.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Speed is the defining characteristic',
          text: 'Import requirements typically change with notice, because the frameworks impose transparency obligations designed to give trading partners time. Export restrictions under domestic price pressure can appear within days. That asymmetry — a measure that can arrive faster than a vessel can load — is what makes them a distinct commercial risk rather than a variant of the same thing.',
        },
      ],
    },
    {
      id: 'the-systemic-problem',
      heading: 'The collective action problem',
      body: [
        {
          type: 'paragraph',
          text: 'The difficulty with export restrictions is that each is individually rational and collectively destructive. A country facing a tight domestic market restricts exports and, other things equal, its domestic price eases. But the supply it withheld does not disappear from the world balance sheet — it is simply unavailable, and the world price rises. Which puts pressure on the next exporting country, whose government faces the same politics and reaches for the same instrument.',
        },
        {
          type: 'paragraph',
          text: 'The countries bearing the cost are importers with the least capacity to absorb it, who had no say in the decision and no instrument to answer it. This dynamic is why export restrictions in food commodities are treated as a systemic issue rather than a bilateral irritation, why market-information initiatives exist to improve transparency and discourage panic responses, and why the notification and food-security-regard obligations were written into the agricultural framework at all.',
        },
        {
          type: 'paragraph',
          text: 'AgricultureID describes the mechanism and names no episode, country, or measure. The historical record of food-price crises and the policy responses to them is documented by the organisations that monitor these markets, and readers who want that record should go to them rather than to a reference entry.',
        },
      ],
    },
    {
      id: 'commercial-consequences',
      heading: 'Commercial consequences',
      body: [
        {
          type: 'paragraph',
          text: 'For a trade in progress, an export restriction is a discontinuity that the contract has to absorb, and it lands in a way that neither party designed for.',
        },
        {
          type: 'list',
          items: [
            'A restriction can be introduced between contracting and shipment, so a valid contract becomes unperformable',
            'Whether it excuses performance depends on the contract’s force majeure or prohibition provisions and the governing law — it is not automatic',
            'Cargo already loaded, or in the process of loading, may be caught in a way that partially performed contracts handle badly',
            'A licence tied to a period turns a loading delay into a failure to export',
            'Where a delivery term places export clearance on the seller, the seller carries the licensing exposure — which is the mirror of the arrangement where a buyer must clear for export in a country it does not operate in',
            'Buyers priced against a market that moves on the announcement face the restriction and the price move together',
          ],
        },
        {
          type: 'paragraph',
          text: 'Whether a particular restriction excuses a particular contract is a legal question determined under that contract’s terms and its governing law, frequently under trade association rules that address prohibition specifically. It is not answered by the existence of the measure, and it is well outside what a reference page can say.',
        },
      ],
    },
  ],
  conceptPurpose:
    'To require an authority’s authorisation before goods may leave a country, and — where the purpose is restrictive — to serve as the instrument through which an exporting country limits, prices, or prohibits its own outbound trade.',
  administeredBy:
    'The competent authority of the exporting country: a trade, agriculture, or licensing body according to the commodity and the measure',
  governingBodies: [
    'World Trade Organization',
    'National trade and agricultural authorities',
  ],
  advisoryLimitations: [
    TRADE_SCOPE_DISCLAIMER,
    'This page describes the category of export measures. It identifies no measure applied by any country, names no episode, states no requirement, tax, quota, or procedure, and characterises no government’s policy.',
    'Whether an export licence or authorisation is required, on what conditions, and whether a restriction is in force are matters for the exporting country’s competent authority, are commodity-specific, and can change at very short notice.',
    'Whether an export restriction excuses performance of a contract is determined under that contract’s terms, the trade rules it incorporates, and its governing law. It is a legal question and is not addressed here.',
    'The systemic dynamic described is a general mechanism documented in the literature on food-price episodes. No figure, episode, country, or measure is asserted.',
  ],
  partiesInvolved: [
    'Exporter requiring the authorisation',
    'Competent authority of the exporting country',
    'Importer and importing country affected by the measure',
    'Carrier and terminal, where cargo is caught mid-loading',
    'Trade associations whose contract rules address prohibition',
  ],
  associatedDocuments: [
    { type: 'trade-concept', slug: 'customs-declaration' },
    { type: 'trade-concept', slug: 'commercial-invoice' },
    { type: 'trade-concept', slug: 'certificate-of-origin' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'grain-terminal' },
    { type: 'logistics-concept', slug: 'bulk-loading-and-discharge' },
    { type: 'logistics-concept', slug: 'pre-shipment-inspection' },
  ],
  relatedConcepts: [
    { type: 'trade-concept', slug: 'customs-declaration' },
    { type: 'trade-concept', slug: 'exw-delivery-term' },
    { type: 'trade-concept', slug: 'import-permit' },
    { type: 'trade-concept', slug: 'non-tariff-measure' },
    { type: 'trade-concept', slug: 'tariffs-and-duties' },
    { type: 'trade-concept', slug: 'trade-flow-direction' },
  ],
  connections: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'milled-rice' },
  ],
  sourceReferences: [
    {
      sourceId: 'wto',
      citedFor:
        'Disciplines on quantitative export restrictions and their exceptions, including temporary measures relating to critical foodstuff shortages, and the agricultural framework’s notification and food-security obligations',
    },
    {
      sourceId: 'amis',
      citedFor:
        'Market information and policy monitoring for food commodities, established to improve transparency around supply and policy responses',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Food security context in which exporting countries apply restrictions to domestic supply',
    },
    {
      sourceId: 'igc',
      citedFor:
        'Grain market context in which export measures affect availability and trade flows',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a category. Whether any authorisation or restriction applies is entirely specific to the exporting country and the commodity, and can change at short notice.',
  limitations: [
    'A description of the category and its mechanism, not an inventory of measures and not an account of any country’s policy.',
    'No measures, taxes, quotas, thresholds, episodes, or countries are named anywhere on this page.',
    'Whether a restriction excuses a contract is a legal question under that contract and its governing law, and is never answered here.',
    'The systemic dynamic is described as a general mechanism; the historical record of food-price episodes is documented by the organisations that monitor those markets.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Export Licence: Authorising and Restricting Outbound Trade',
    description:
      'How export licensing works: why countries restrict their own exports, instruments ranging from registration to prohibition, and the commercial consequences.',
    keywords: [
      'export licence',
      'export restriction',
      'export ban',
      'export tax',
      'food security',
    ],
  },
  structuredData: { article: true },
};
