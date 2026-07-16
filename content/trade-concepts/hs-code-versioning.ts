import type { TradeConceptContent } from '@/types/content';
import { TRADE_SCOPE_DISCLAIMER } from '@/types/trade';

export const hsCodeVersioning: TradeConceptContent = {
  id: 'trade-concept-hs-code-versioning',
  slug: 'hs-code-versioning',
  contentType: 'trade-concept',
  title: 'HS Code Versioning',
  alternativeNames: [
    'HS editions',
    'HS revisions',
    'Nomenclature versioning',
    'HS correlation',
  ],
  category: 'Trade concept',
  subcategory: 'Trade measurement',
  tradeConceptClass: 'trade-measurement',
  summary:
    'The Harmonized System is revised periodically, and each revision can create, delete, split, merge, or relocate codes. A code therefore only has meaning in relation to its edition, and a trade time series that crosses a revision boundary is discontinuous unless it has been correlated.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Harmonized System is not fixed. The World Customs Organization revises it periodically so that the nomenclature keeps pace with what is actually traded, with changes in technology and production, and with the things governments have come to want to monitor separately. Each revision produces a new edition, identified by year — HS 2012, HS 2017, and HS 2022 are examples of successive versions.',
    },
    {
      type: 'paragraph',
      text: 'Revision is necessary and it is also disruptive. When a heading is split, one code becomes several. When headings are merged, several become one. Goods move between subheadings, new subheadings appear for products that previously had nowhere specific to sit, and occasionally a code simply ceases to exist. Anyone who uses HS codes to compare, to aggregate, or to build a time series is exposed to all of this, usually without being told.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Trade measurement — nomenclature change over time',
    },
    { label: 'Maintained by', value: 'World Customs Organization (WCO)' },
    {
      label: 'Edition identity',
      value:
        'Editions are named by year; the year is part of the code’s meaning',
    },
    {
      label: 'Types of change',
      value: 'Creation, deletion, splitting, merging, and relocation of codes',
    },
    {
      label: 'Correlation tables',
      value:
        'The WCO publishes tables mapping codes between adjacent editions, in both directions',
    },
    {
      label: 'Mapping quality',
      value:
        'Correlations are frequently one-to-many or many-to-one, so a mapping is not always a clean substitution',
    },
    {
      label: 'Practical rule',
      value: 'A code quoted without its edition is incomplete information',
    },
  ],
  sections: [
    {
      id: 'what-changes-in-a-revision',
      heading: 'What changes in a revision',
      body: [
        {
          type: 'paragraph',
          text: 'Revisions are not cosmetic renumbering. They alter the shape of the classification tree, and the different kinds of alteration have different consequences for anyone reading data across the boundary.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Split',
              description:
                'One code becomes several, because the trade in it has grown or because a subset has acquired policy significance. Pre-revision data exists only at the aggregate; the detail cannot be recovered retrospectively.',
            },
            {
              term: 'Merge',
              description:
                'Several codes collapse into one. Detail that existed before the revision stops being collected afterwards. A series can be carried forward only by aggregating the earlier years to match.',
            },
            {
              term: 'Relocation',
              description:
                'A good moves to a different heading or chapter, often to reflect a better view of what it is. The code changes even though the good has not.',
            },
            {
              term: 'Creation',
              description:
                'A new code appears for goods that previously sat in a residual or "other" category. The new code starts from zero history, and the residual category it came out of falls correspondingly.',
            },
            {
              term: 'Deletion',
              description:
                'A code is withdrawn, and the goods it covered are distributed elsewhere. A query against the old code returns nothing after the boundary, which is easily mistaken for trade having stopped.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'An artefact looks exactly like an event',
          text: 'A code that goes to zero because it was deleted, and a code that goes to zero because a trade collapsed, produce the same shape in a chart. Nothing in the data distinguishes them. Only knowing where the revision boundaries fall does.',
        },
      ],
    },
    {
      id: 'correlation-tables',
      heading: 'Correlation tables and their limits',
      body: [
        {
          type: 'paragraph',
          text: 'The WCO publishes correlation tables between adjacent editions, in both directions, so that a code in one edition can be traced to its counterpart in the next. These tables are the authoritative instrument for moving between editions, and they are the starting point for any serious attempt to build a series across a boundary.',
        },
        {
          type: 'paragraph',
          text: 'What they cannot do is manufacture information that was never collected. Where a correlation is one-to-one, the mapping is clean and a series can be carried across. Where one old code maps to several new ones, the tables identify the successors but cannot say how the historical quantity would have divided between them, because nobody recorded it at that level. Where several map to one, the reverse problem applies going backwards. A chain of correlations across multiple boundaries compounds this: a series carried from an edition two or three revisions back may be resting on assumptions at every step.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Correlation is a mapping, not a conversion',
          text: 'A correlation table states which codes correspond. Splitting a historical value across a one-to-many correlation requires an assumption about the split — an apportionment the table does not supply and cannot validate. Where that assumption is made, it belongs in the documentation of the series.',
        },
      ],
    },
    {
      id: 'why-it-matters-for-agriculture',
      heading: 'Why it matters for agricultural data',
      body: [
        {
          type: 'paragraph',
          text: 'Agricultural chapters are affected by revision like any other, and often for reasons specific to the sector. Interest in a particular product form, a distinction between uses, a newly significant processed derivative, or a policy concern that requires separate visibility all tend to produce splits. The result is that long-run series for farm and food products are among the more likely to cross boundaries that matter.',
        },
        {
          type: 'paragraph',
          text: 'The effect is compounded by how agricultural analysis is usually done. Analysts rarely work with a single subheading; they build baskets — all wheat, all vegetable oils, all pulses — by summing codes. A basket assembled from an edition’s code list and then applied unchanged to a different edition can silently drop a code that was split off, double-count one that was merged, or include a good that was relocated into the range from somewhere else.',
        },
        {
          type: 'list',
          items: [
            'A code list that defines a commodity basket is edition-specific and must be rebuilt for each edition it is applied to',
            'Apparent jumps or collapses at a revision year should be checked against the correlation tables before being interpreted',
            'Series compiled by international organisations may already be harmonised across editions — how, and with what assumptions, is stated in their documentation',
            'National tariff lines below six digits change on their own national schedules, independently of HS revisions',
          ],
        },
        {
          type: 'paragraph',
          text: 'The last point is worth separating out. National extensions beyond the sixth digit are maintained by each jurisdiction and can be restructured at any time, for reasons unconnected to a WCO revision. A national series can therefore break at a year when the international nomenclature did not change at all.',
        },
      ],
    },
    {
      id: 'practice',
      heading: 'Working with versioned codes',
      body: [
        {
          type: 'paragraph',
          text: 'The discipline that follows from all of this is simple to state. An edition is recorded alongside every code, and a code without one is treated as incomplete rather than as a fact. Where a series crosses a revision, the boundary is identified and the correlation is done deliberately, with any apportionment assumption written down rather than absorbed.',
        },
        {
          type: 'paragraph',
          text: 'AgricultureID applies this to its own content: every classification code published on the platform carries the edition it belongs to, and codes are given at a level of detail the source actually supports. Where a code’s edition is unknown, the code is not published.',
        },
      ],
    },
  ],
  conceptPurpose:
    'To make explicit that Harmonized System codes are version-dependent, so that codes are read against the edition that defines them and trade series that cross a revision boundary are correlated rather than assumed continuous.',
  administeredBy:
    'World Customs Organization, which maintains the nomenclature and publishes correlation tables between editions',
  governingBodies: ['World Customs Organization'],
  advisoryLimitations: [
    TRADE_SCOPE_DISCLAIMER,
    'This page explains that codes are edition-dependent and how revisions behave. It does not identify the current edition in force in any jurisdiction, list the changes made in any revision, or supply a correlation between any two codes.',
    'Correlation tables are published by the World Customs Organization and are the authoritative instrument for mapping between editions; a reference description of how they work is not a substitute for consulting them.',
    'Which edition applies to a declaration is a matter of the law in force in the jurisdiction concerned at the time, determined by the competent authority and not by a reference source.',
  ],
  partiesInvolved: [
    'World Customs Organization as nomenclature maintainer',
    'National customs and tariff authorities implementing each edition',
    'Statistical authorities compiling and revising trade series',
    'Analysts and data users building series across editions',
  ],
  relatedConcepts: [
    { type: 'trade-concept', slug: 'customs-declaration' },
    { type: 'trade-concept', slug: 'harmonized-system-classification' },
    { type: 'trade-concept', slug: 'mirror-statistics' },
    { type: 'trade-concept', slug: 'tariff-rate-quota' },
    { type: 'trade-concept', slug: 'trade-flow-direction' },
  ],
  classificationSystems: [
    {
      system: 'HS',
      code: '10.01',
      version: 'HS 2022',
      sourceId: 'wco',
      note: 'Heading for wheat and meslin, shown with its edition to illustrate the convention this page describes: the edition is part of the code’s meaning.',
    },
    {
      system: 'HS',
      code: '10.01',
      version: 'HS 2017',
      sourceId: 'wco',
      note: 'The same heading number in an earlier edition. Identical digits in two editions are not, in general, a guarantee of identical coverage — that is established by the correlation tables, not by the number.',
    },
  ],
  sourceReferences: [
    {
      sourceId: 'wco',
      citedFor:
        'Periodic revision of the Harmonized System, the identification of editions by year, and the publication of correlation tables between adjacent editions',
    },
    {
      sourceId: 'un-comtrade',
      citedFor:
        'Reporting of trade statistics under successive HS editions and the treatment of series across revisions',
    },
    {
      sourceId: 'faostat-trade',
      citedFor:
        'Compilation of agricultural trade series harmonised across nomenclature changes',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global for the six-digit nomenclature and its editions. The date on which a jurisdiction adopts an edition, and the separate schedule on which it revises its own national tariff lines, are national matters.',
  limitations: [
    'A description of how versioning works, not a list of the changes in any revision and not a correlation table.',
    'No edition is identified as current or in force anywhere; adoption dates are jurisdictional and are published by the authorities concerned.',
    'The example codes illustrate the citation convention only and are not offered as evidence about what changed between editions.',
    'How any published series handles revision boundaries is documented by its compiler; this page does not characterise the methodology of any particular dataset.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'HS Code Versioning: Why Editions Change What a Code Means',
    description:
      'How Harmonized System revisions split, merge, relocate, and delete codes, and why agricultural trade series break at revision boundaries.',
    keywords: [
      'HS code versioning',
      'HS editions',
      'HS correlation tables',
      'nomenclature revision',
      'trade data continuity',
    ],
  },
  structuredData: { article: true },
};
