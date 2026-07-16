import type { TradeConceptContent } from '@/types/content';
import { TRADE_DATA_SCOPE_NOTE, TRADE_SCOPE_DISCLAIMER } from '@/types/trade';

export const tradeFlowDirection: TradeConceptContent = {
  id: 'trade-concept-trade-flow-direction',
  slug: 'trade-flow-direction',
  contentType: 'trade-concept',
  title: 'Trade Flow Direction',
  alternativeNames: [
    'Trade flows',
    'Imports and exports',
    'Flow direction',
    'Special and general trade',
  ],
  category: 'Trade concept',
  subcategory: 'Trade measurement',
  tradeConceptClass: 'trade-measurement',
  summary:
    'Every trade statistic is recorded with a direction — import, export, re-import, or re-export — and the direction determines which country reports it, against which partner, and on what valuation basis. Two figures describing the same physical movement are not comparable unless their directions and bases are understood.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A cargo of maize leaving one country and arriving in another generates, in principle, two statistical records: an export in the country it left and an import in the country it reached. They describe the same movement, but they are compiled by different administrations, from different declarations, at different moments, against different partner attributions, and on different valuation conventions.',
    },
    {
      type: 'paragraph',
      text: 'Direction is therefore not a trivial label on a number — it is a description of what the number was built from. Reading trade data without attending to it produces errors that look like findings: a bilateral gap that is really a valuation difference, a re-export counted as production, or a country that appears to import and export the same commodity in quantity for no evident reason.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Trade measurement — direction and basis of recorded flows',
    },
    {
      label: 'Primary directions',
      value:
        'Import and export, with re-import and re-export as distinct categories',
    },
    {
      label: 'Reporter and partner',
      value:
        'Each record has a reporting country and a partner country; the same flow appears in both countries’ data differently',
    },
    {
      label: 'Valuation convention',
      value:
        'Imports and exports are conventionally recorded on different valuation bases, which is why the same flow carries two values',
    },
    {
      label: 'Trade systems',
      value:
        'General and special trade differ in how goods in customs warehouses and free zones are counted',
    },
    {
      label: 'Partner attribution',
      value:
        'Whether a partner is the country of origin, of consignment, or of last known destination varies by direction and reporter',
    },
    {
      label: 'Consequence',
      value:
        'Reporter and partner figures for one flow routinely differ, without either being wrong',
    },
  ],
  sections: [
    {
      id: 'the-four-directions',
      heading: 'The directions and what they record',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Import',
              description:
                'Goods entering the reporting country’s statistical territory. Recorded by the receiving administration from the import declaration.',
            },
            {
              term: 'Export',
              description:
                'Goods leaving the reporting country’s statistical territory. Recorded by the despatching administration from the export declaration.',
            },
            {
              term: 'Re-export',
              description:
                'Goods previously imported that leave again without having been substantially transformed. The reporting country handled them but did not produce them.',
            },
            {
              term: 'Re-import',
              description:
                'Goods previously exported that return in essentially the state they left. Common where a consignment is rejected at destination or returned unsold.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'The re-export category is the one that most affects agricultural analysis, because it breaks the intuitive link between a country’s exports and its production. A country with a major transhipment port or a large processing and redistribution trade can export substantial quantities of a commodity it does not grow. Treating its export figure as a measure of what it produced is a category error that the data itself does not prevent.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Re-exports can double-count along a route',
          text: 'A consignment that moves origin → hub → destination is recorded as an export by the origin, an import and then a re-export by the hub, and an import by the destination. Summing exports across countries counts the cargo more than once. World totals are not the sum of national figures without adjustment.',
        },
      ],
    },
    {
      id: 'why-two-figures-differ',
      heading: 'Why the same flow carries two different values',
      body: [
        {
          type: 'paragraph',
          text: 'The most systematic reason an export figure and the corresponding import figure disagree is that they are conventionally valued on different bases. An export is customarily recorded at a value that stops at the exporting country’s frontier; an import is customarily recorded at a value that includes carriage and insurance to the importing country’s frontier. The difference between them is, broadly, the cost of getting the goods there.',
        },
        {
          type: 'paragraph',
          text: 'This is a convention, not an error, and it means an import figure is expected to exceed the matching export figure by roughly the freight and insurance in between. For bulk agricultural commodities moving long distances, that margin is not small. Comparing an export value directly with an import value, and treating the gap as evidence of misreporting, mistakes the convention for a discrepancy.',
        },
        {
          type: 'paragraph',
          text: 'Timing adds a second layer. A cargo shipped near the end of one period may be recorded as an export in that period and as an import in the next, so the two series can be out of phase even when both are accurate. The longer the voyage, the more pronounced the effect — which again bears hardest on bulk commodity trades.',
        },
        {
          type: 'paragraph',
          text: 'Partner attribution is a third. An importing country typically attributes the flow to the country of origin, while an exporting country typically attributes it to the country of last known destination. Where goods move via a hub, or where the final destination changes after despatch, the two attributions name different partners for the same cargo.',
        },
      ],
    },
    {
      id: 'trade-systems',
      heading: 'General and special trade',
      body: [
        {
          type: 'paragraph',
          text: 'Countries compile trade statistics against a defined statistical territory, and there is more than one convention for where its boundary falls. Under the general trade system the boundary is essentially the economic territory, so goods entering customs warehouses and free zones are counted on arrival. Under the special trade system the boundary is drawn more tightly around the free-circulation area, so goods held in those facilities may not be counted until they are released.',
        },
        {
          type: 'paragraph',
          text: 'The choice affects what a country appears to import and when. It matters especially for economies with large free-zone or entrepôt activity, and for commodities that are routinely warehoused before onward sale. Two countries using different systems are not counting quite the same universe of goods, which is one more reason their figures for a shared flow can diverge legitimately.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The system in use is documented, not inferred',
          text: 'Which trade system a country applies is stated in the metadata of its statistics and in the documentation of the datasets that redistribute them. It is not something to be deduced from the numbers, and it is not assumed here for any country.',
        },
      ],
    },
    {
      id: 'reading-agricultural-flows',
      heading: 'Reading agricultural flows',
      body: [
        {
          type: 'paragraph',
          text: 'The practical questions to settle before interpreting an agricultural trade figure are the same each time, and they are all questions about direction and basis rather than about the commodity.',
        },
        {
          type: 'list',
          items: [
            'Which country reported it, and is the figure its own record or its partner’s?',
            'Is the direction an import, an export, a re-export, or a re-import?',
            'On what valuation basis is it recorded, and is it being compared with a figure on the same basis?',
            'What does the partner attribution mean in this direction — origin, consignment, or destination?',
            'Which trade system does the reporter use, and does free-zone or warehouse activity matter for this commodity?',
            'Which HS edition were the codes reported under, and does the period cross a revision boundary?',
          ],
        },
        {
          type: 'paragraph',
          text: 'The last question links back to nomenclature versioning, and the combination is where most misreadings of long-run agricultural trade data originate: a series that changes direction convention, partner attribution, or code coverage part-way through will show a break that has nothing to do with trade.',
        },
      ],
    },
  ],
  conceptPurpose:
    'To make explicit that a trade statistic is defined by its direction, reporter, partner attribution, valuation basis, and trade system, so that figures are compared only with figures constructed the same way.',
  administeredBy:
    'National statistical and customs authorities compiling trade statistics, redistributed by international organisations',
  governingBodies: [
    'United Nations Statistics Division',
    'World Customs Organization',
    'National statistical authorities',
  ],
  advisoryLimitations: [
    TRADE_SCOPE_DISCLAIMER,
    TRADE_DATA_SCOPE_NOTE,
    'This page describes how flow direction and recording conventions work. It publishes no trade figures and characterises no country’s statistics.',
    'Which trade system, valuation basis, and partner attribution a reporter uses is stated in that reporter’s metadata and in the documentation of the dataset redistributing it, and must be read there rather than assumed.',
  ],
  partiesInvolved: [
    'Declarant lodging the import or export declaration',
    'Customs authority capturing the declaration data',
    'National statistical authority compiling and revising the series',
    'International organisations redistributing national data',
    'Analysts comparing flows across reporters',
  ],
  associatedDocuments: [{ type: 'trade-concept', slug: 'customs-declaration' }],
  relatedConcepts: [
    { type: 'trade-concept', slug: 'country-of-origin-and-provenance' },
    { type: 'trade-concept', slug: 'customs-declaration' },
    { type: 'trade-concept', slug: 'customs-valuation' },
    { type: 'trade-concept', slug: 'export-licence' },
    { type: 'trade-concept', slug: 'free-trade-zone' },
    { type: 'trade-concept', slug: 'hs-code-versioning' },
    { type: 'trade-concept', slug: 'mirror-statistics' },
    { type: 'trade-concept', slug: 're-export-and-transit' },
    { type: 'trade-concept', slug: 'transhipment' },
  ],
  sourceReferences: [
    {
      sourceId: 'un-comtrade',
      citedFor:
        'Recording of trade flows by direction, reporter and partner, and the general and special trade systems',
    },
    {
      sourceId: 'wco',
      citedFor:
        'Customs declarations as the source records from which trade statistics are compiled',
    },
    {
      sourceId: 'faostat-trade',
      citedFor:
        'Compilation of agricultural trade flows and the treatment of re-exports in commodity balances',
    },
    {
      sourceId: 'itc',
      citedFor:
        'Bilateral trade data drawn from reporter and partner records for the same flows',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a set of conventions. The specific system, valuation basis, partner attribution, and revision practice differ by reporting country and are documented by that country and by the datasets redistributing its data.',
  limitations: [
    'A description of recording conventions, not a dataset and not a characterisation of any country’s statistics.',
    'No trade figures, valuation margins, or freight shares are given; the size of the gap between an export value and the matching import value depends on the route and period.',
    'Which conventions any reporter applies is a documentation question and is not stated here for any country.',
    'Statistical territory, revision policy, and confidentiality suppression vary by reporter and can affect comparability in ways this page does not enumerate.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Trade Flow Direction: Imports, Exports, and Re-exports',
    description:
      'How trade statistics are recorded by direction: reporter and partner, why import and export values of the same flow differ, and general versus special trade.',
    keywords: [
      'trade flow direction',
      're-exports',
      'reporter and partner',
      'general and special trade',
      'trade statistics basis',
    ],
  },
  structuredData: { article: true },
};
