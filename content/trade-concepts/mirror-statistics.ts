import type { TradeConceptContent } from '@/types/content';
import { TRADE_DATA_SCOPE_NOTE, TRADE_SCOPE_DISCLAIMER } from '@/types/trade';

export const mirrorStatistics: TradeConceptContent = {
  id: 'trade-concept-mirror-statistics',
  slug: 'mirror-statistics',
  contentType: 'trade-concept',
  title: 'Mirror Statistics',
  alternativeNames: [
    'Mirror data',
    'Partner-country data',
    'Bilateral trade asymmetries',
  ],
  category: 'Trade concept',
  subcategory: 'Trade measurement',
  tradeConceptClass: 'trade-measurement',
  summary:
    'Mirror statistics use one country’s record of a trade flow as a proxy for its partner’s. The technique fills gaps where a country reports late, incompletely, or not at all — but the two sides of a flow are constructed differently, so a mirror figure is an estimate with a known and structural bias, not a substitute observation.',
  introduction: [
    {
      type: 'paragraph',
      text: 'If a country does not report its imports of a commodity, its partners’ export records still describe those shipments. Adding up what everyone says they exported to that country produces a figure for what it imported. That is mirroring: reading a flow from the other end when the near end is silent.',
    },
    {
      type: 'paragraph',
      text: 'It is a genuinely useful technique, and for some countries and some commodities it is the only way to see a flow at all. It is also systematically imperfect. The two records of a single movement are made by different administrations, on different valuation conventions, at different times, and with different views of who the partner is. Mirroring inherits every one of those differences, which is why a mirror figure has to be presented as an estimate carrying a direction of bias rather than as the number the reporter would have published.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Trade measurement — estimation from partner records',
    },
    {
      label: 'Principle',
      value:
        'A flow recorded by one side is used as a proxy for the same flow on the other',
    },
    {
      label: 'Used when',
      value:
        'A reporter is absent, late, incomplete, or suppresses data for confidentiality',
    },
    {
      label: 'Known valuation bias',
      value:
        'Import and export records use different valuation conventions, so mirrored values are not on the reporter’s basis',
    },
    {
      label: 'Known attribution bias',
      value:
        'The two sides may attribute the flow to different partner countries, especially where goods move via hubs',
    },
    {
      label: 'Asymmetry is expected',
      value:
        'A gap between the two sides is normal and does not by itself indicate misreporting',
    },
    {
      label: 'Status of the output',
      value: 'An estimate with documented assumptions, not an observation',
    },
  ],
  sections: [
    {
      id: 'why-mirroring-is-used',
      heading: 'Why mirroring is used',
      body: [
        {
          type: 'paragraph',
          text: 'Reporting to international trade databases is uneven. Some countries report promptly and completely; others report with long lags, at coarse commodity detail, for some years and not others, or not at all. Some suppress individual cells to protect the confidentiality of a small number of traders, which removes exactly the flows a commodity analyst most wants to see.',
        },
        {
          type: 'paragraph',
          text: 'Where the gap sits on one side only, the other side is still there. Mirroring exploits that redundancy: a flow has two potential witnesses, and one witness is better than none. The technique is standard practice in compiling international datasets, and the organisations that do it document where they have applied it.',
        },
        {
          type: 'list',
          items: [
            'A non-reporting country’s trade can be reconstructed from what its partners report',
            'A reporter’s provisional or lagging figures can be anticipated from partner data available sooner',
            'A confidentiality-suppressed cell may be visible from the other side, where the same flow is not sensitive',
            'A reporter’s figures can be cross-checked against the aggregate of its partners as a coherence test',
          ],
        },
      ],
    },
    {
      id: 'sources-of-asymmetry',
      heading: 'Where the two sides diverge, and why',
      body: [
        {
          type: 'paragraph',
          text: 'Bilateral asymmetry — the gap between what A says it exported to B and what B says it imported from A — is not an anomaly to be explained away. It is the expected consequence of several conventions operating at once, most of which are documented and none of which imply error.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Valuation basis',
              description:
                'Exports are conventionally recorded at a value stopping at the exporter’s frontier; imports at a value including carriage and insurance to the importer’s frontier. An import figure is therefore expected to exceed the matching export figure, by the freight and insurance in between.',
            },
            {
              term: 'Timing',
              description:
                'A cargo despatched near a period boundary is exported in one period and imported in the next. For long voyages the two series run out of phase.',
            },
            {
              term: 'Partner attribution',
              description:
                'Importers commonly attribute the flow to the country of origin; exporters to the country of last known destination. Where goods move through a hub, or are re-sold in transit, the two name different partners for the same cargo.',
            },
            {
              term: 'Classification',
              description:
                'The two administrations classify the same good independently, and may not reach the same code — especially near a processing threshold or after an edition change.',
            },
            {
              term: 'Coverage and thresholds',
              description:
                'Trade system, statistical territory, low-value thresholds, and confidentiality suppression differ between the two reporters, so they are not counting the same universe.',
            },
            {
              term: 'Quantity units',
              description:
                'Where the two sides record different supplementary units, or one records net and the other gross, quantity comparisons carry their own gap independent of value.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'The direction of the valuation bias is known',
          text: 'Because of the valuation convention alone, a mirrored import estimate built from partner export records will tend to understate the value the importer would have recorded. The bias has a known sign. Its size depends on the route, the commodity, and the freight market of the period — which is why it is acknowledged rather than corrected with a general factor.',
        },
      ],
    },
    {
      id: 'what-asymmetry-does-not-prove',
      heading: 'What an asymmetry does not prove',
      body: [
        {
          type: 'paragraph',
          text: 'Bilateral gaps are sometimes read as evidence of under-invoicing, smuggling, or fraud. The inference is not available from the gap alone. Every mechanism in the previous section produces asymmetry without anyone having done anything wrong, and they operate simultaneously and in different directions.',
        },
        {
          type: 'paragraph',
          text: 'Serious work on trade misreporting exists, and it proceeds by controlling for the known conventions first and examining what remains, with knowledge of the specific countries, commodities, and periods involved. A raw difference between two published numbers is the starting point of that analysis, not its conclusion. AgricultureID describes the mechanism and does not characterise any country’s reporting.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Re-exports break the bilateral pair',
          text: 'Where goods reach a destination through an intermediary country, the origin may record an export to the hub while the destination records an import from the origin. Neither is wrong, and the pair simply does not line up. Attempting to reconcile them as a matched bilateral flow will fail for reasons that have nothing to do with accuracy.',
        },
      ],
    },
    {
      id: 'using-mirror-figures',
      heading: 'Using mirror figures responsibly',
      body: [
        {
          type: 'paragraph',
          text: 'A mirror estimate is fit for some purposes and not others. It can establish that a trade exists, indicate its rough scale, show a direction of change, and identify partners. It is weaker for anything that depends on the precise level — a market-share calculation, a balance-sheet line, or a comparison against a directly reported figure on a different basis.',
        },
        {
          type: 'paragraph',
          text: 'The presentational discipline follows from that. A mirrored figure is labelled as mirrored, its source side is stated, its valuation basis is stated, and it is not silently mixed into a series of directly reported values. Where an international dataset has mirrored a cell, that fact is in its documentation, and a user who does not read the documentation will not be able to tell from the number.',
        },
        {
          type: 'paragraph',
          text: 'For agricultural commodities the technique carries an extra caution. Mirroring tells you what was declared as crossing a border; it does not tell you what was grown, consumed, or held. A country whose imports are visible only through partner records may also have production and stock figures of uneven quality, and combining an estimated trade figure with an uncertain production figure compounds the uncertainty rather than resolving it.',
        },
      ],
    },
  ],
  conceptPurpose:
    'To describe how a trade flow can be estimated from the partner’s record when a reporter is absent or incomplete, and to make explicit the structural biases such an estimate carries.',
  administeredBy:
    'International organisations compiling trade datasets, applying documented mirroring where reporter data is unavailable',
  governingBodies: [
    'United Nations Statistics Division',
    'National statistical authorities',
  ],
  advisoryLimitations: [
    TRADE_SCOPE_DISCLAIMER,
    TRADE_DATA_SCOPE_NOTE,
    'This page describes the technique and its biases. It publishes no mirrored figures, quantifies no asymmetry, and applies no correction factor.',
    'A bilateral asymmetry is not evidence of misreporting, under-invoicing, or fraud, and nothing here characterises the reporting of any country.',
    'Whether a figure in a published dataset has been mirrored, and on what assumptions, is stated in that dataset’s documentation and must be established there.',
  ],
  partiesInvolved: [
    'Reporting country whose data is absent or incomplete',
    'Partner countries whose records supply the proxy',
    'International organisations compiling and documenting the dataset',
    'Analysts using the resulting estimates',
  ],
  relatedConcepts: [
    { type: 'trade-concept', slug: 'customs-valuation' },
    { type: 'trade-concept', slug: 'harmonized-system-classification' },
    { type: 'trade-concept', slug: 'hs-code-versioning' },
    { type: 'trade-concept', slug: 're-export-and-transit' },
    { type: 'trade-concept', slug: 'trade-flow-direction' },
    { type: 'trade-concept', slug: 'transhipment' },
  ],
  sourceReferences: [
    {
      sourceId: 'un-comtrade',
      citedFor:
        'Reporter and partner records for the same flow, and the documentation of coverage gaps and confidentiality suppression',
    },
    {
      sourceId: 'itc',
      citedFor:
        'Use of partner-country data to complete bilateral trade series where a reporter is unavailable',
    },
    {
      sourceId: 'faostat-trade',
      citedFor:
        'Compilation of agricultural trade series drawing on partner records where national reporting is incomplete',
    },
    {
      sourceId: 'unctad',
      citedFor:
        'Analytical use of bilateral trade asymmetries and the conventions that generate them',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a technique. Its usefulness in any case depends on the reporting behaviour of the countries involved, which differs by country, commodity, and period.',
  limitations: [
    'A description of the technique and its biases, not a dataset and not an assessment of any country’s data quality.',
    'No asymmetry is quantified and no correction factor is offered; the size of the valuation gap depends on route, commodity, and freight market.',
    'Mirroring can indicate existence, scale, and direction of change; it is weaker for anything depending on a precise level.',
    'Mirrored trade figures describe declared border crossings only, and say nothing about production, consumption, or stocks.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Mirror Statistics: Reading a Trade Flow From the Other Side',
    description:
      'How mirror statistics estimate a trade flow from partner records, why bilateral asymmetries are expected, and what a gap does not prove.',
    keywords: [
      'mirror statistics',
      'partner country data',
      'bilateral trade asymmetry',
      'trade data gaps',
      'trade estimation',
    ],
  },
  structuredData: { article: true },
};
