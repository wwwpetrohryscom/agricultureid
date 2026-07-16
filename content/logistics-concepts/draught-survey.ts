import type { LogisticsConceptContent } from '@/types/content';

export const draughtSurvey: LogisticsConceptContent = {
  id: 'logistics-concept-draught-survey',
  slug: 'draught-survey',
  contentType: 'logistics-concept',
  title: 'Draught Survey',
  alternativeNames: ['Draft survey', 'Displacement survey'],
  category: 'Logistics concept',
  subcategory: 'Inspection',
  logisticsClass: 'inspection',
  summary:
    'A draught survey determines how much bulk cargo a ship loaded or discharged by weighing the ship itself — measuring how deep she sits before and after, and taking the difference. It is how the quantity of a bulk consignment is established when there is nothing to count.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A container can be counted. A pallet can be counted. A shipload of grain cannot be counted, cannot practically be weighed as a mass, and has no units at all — it is simply a quantity of stuff poured into a hold. Yet the parties must agree what it was, because the invoice, the freight, the letter of credit, and the customs declaration all rest on a number. The draught survey is the answer the industry arrived at, and it is an unexpectedly elegant one: do not weigh the cargo, weigh the ship.',
    },
    {
      type: 'paragraph',
      text: 'The principle is Archimedes. A floating ship displaces her own weight in water, so if you can determine how much water she displaces, you know what she weighs. Do that before loading and after loading, subtract everything aboard that is not cargo, and the difference between the two is the cargo. The instrument is the ship herself, and the reading is taken by looking at the marks on her side to see how deep she is floating.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value:
        'Inspection — determination of bulk cargo quantity by displacement',
    },
    { label: 'Cargo form', value: 'Dry bulk, bulk liquid' },
    {
      label: 'Principle',
      value:
        'A floating ship displaces her own weight in water — so measure the ship, not the cargo',
    },
    {
      label: 'Method',
      value:
        'Displacement before and after, less all non-cargo weights, gives the cargo',
    },
    {
      label: 'Read from',
      value:
        'The ship’s draught marks, corrected for trim and hull deformation, against her own hydrostatic tables',
    },
    {
      label: 'Requires',
      value:
        'Water density measurement, and a full accounting of ballast, bunkers, and stores',
    },
    {
      label: 'Accuracy is bounded',
      value:
        'By reading conditions, hull deformation, and the deductibles — it is inherently an estimate',
    },
  ],
  sections: [
    {
      id: 'the-principle',
      heading: 'The principle',
      body: [
        {
          type: 'paragraph',
          text: 'A ship floats at the depth where the weight of the water she pushes aside equals her own total weight. Her builders computed, for every draught, how much water her hull displaces at that depth — the hydrostatic tables, which are specific to that ship and travel with her. So a draught reading, via the tables, is a weight reading. The ship is a scale that was calibrated at the shipyard.',
        },
        {
          type: 'paragraph',
          text: 'The survey uses this twice. Before loading, the surveyor determines the ship’s displacement — everything she weighs, empty of cargo. After loading, they determine it again. The difference is what was added, and if everything else aboard is accounted for, what was added is the cargo. The subtraction is doing the real work here, and it is where the survey’s accuracy is won or lost: the cargo figure is a difference between two large numbers, so an error in either propagates directly into the answer.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The ship is not a laboratory instrument',
          text: 'The survey works because it needs no equipment beyond the ship and a means of measuring water density. That is also its limitation: it is performed on a floating vessel, in a seaway, with marks read from a boat, on a hull that flexes. The method is sound; the conditions are not ideal, and never will be.',
        },
      ],
    },
    {
      id: 'what-the-survey-involves',
      heading: 'What the survey involves',
      body: [
        {
          type: 'paragraph',
          text: 'The visible part is reading the draught marks — painted scales at the bow, the stern, and amidships on both sides. Six readings, not one, because a ship is rarely level and never symmetrical in practice. The readings are combined to find the true mean draught, corrected for the ship’s trim and for the fact that her hull is not straight: a loaded hull sags in the middle or hogs upward, and the amidships reading is what reveals it.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Draught marks',
              description:
                'Scales on the hull showing how deep she floats. Read at six points, because a single reading assumes a level, undeformed ship that does not exist.',
            },
            {
              term: 'Trim correction',
              description:
                'Adjustment for the ship not floating level fore and aft. Necessary because the hydrostatic tables assume a reference condition she is not in.',
            },
            {
              term: 'Hog and sag correction',
              description:
                'Adjustment for the hull bending under its own loading. The reason amidships readings are taken at all.',
            },
            {
              term: 'Water density',
              description:
                'Measured on the day, at the ship. Displacement depends on what she is floating in, and dock water differs from the tables’ reference — an uncorrected assumption here is a large error.',
            },
            {
              term: 'Deductibles',
              description:
                'Ballast, fuel, fresh water, stores, and everything else aboard that is not cargo. Each must be established, and each is a place the cargo figure can go wrong.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'The deductibles are where surveys are actually contested. Ballast water is the largest and the most awkward: tanks must be verified, and a tank thought to be empty that is not empty transfers directly into the cargo figure. Bunkers are measured by sounding. Every one of these is a measurement with its own uncertainty, and the survey’s result inherits all of them. This is why the surveyor’s attention goes to the tanks rather than to the marks — the marks are the easy part.',
        },
      ],
    },
    {
      id: 'why-figures-disagree',
      heading: 'Why figures disagree',
      body: [
        {
          type: 'paragraph',
          text: 'It is normal for a draught survey figure, a shore scale figure, and an outturn figure to differ, and understanding why is more useful than treating any of them as the truth. They are measuring different things by different means at different times: a conveyor scale measures what crossed it; a draught survey measures what the ship’s displacement changed by; an outturn measures what was recovered at discharge. None is wrong, and none is exact.',
        },
        {
          type: 'list',
          items: [
            'Sea state and swell, which make the marks unreadable except as an average over motion',
            'Marks obscured, fouled, or repainted inaccurately — the scale itself can be wrong',
            'Ballast not fully accounted for, the single most common source of a material error',
            'Water density taken from the wrong place, or in a berth where fresh and salt water are layered',
            'Hull deformation beyond what the standard corrections handle',
            'Hydrostatic tables that no longer reflect a hull modified, repaired, or aged since they were computed',
            'The survey being a difference between two large numbers, so small errors in either end up whole in the answer',
            'Cargo moisture changing between load and discharge, which changes the mass without anyone losing anything',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'A difference is not a loss',
          text: 'The gap between loaded and outturn quantity is expected, is provided for commercially, and is not on its own evidence that anything went missing. Real losses exist — dust, spillage, sweepings unrecovered — but they sit inside a measurement uncertainty that is itself substantial. Treating every discrepancy as a shortage misreads what these figures are.',
        },
      ],
    },
    {
      id: 'why-it-survives',
      heading: 'Why the method survives',
      body: [
        {
          type: 'paragraph',
          text: 'It is fair to ask why an industry that can track a container in real time still determines its largest consignments by looking at paint on a hull. The answer is that nothing better is available at the scale. Weighing a shipload directly would require weighing equipment of a size nobody has; shore scales exist but measure the shore’s side of the transaction and are the terminal’s instrument rather than a neutral one; and the ship is present at both ends by definition. The draught survey is neutral, needs no infrastructure, works at any berth in the world, and is understood by everyone in the trade.',
        },
        {
          type: 'paragraph',
          text: 'It is also, importantly, a survey — carried out by a person exercising judgement, usually engaged by a party with an interest, and often attended by surveyors for the other side. Its authority comes from the method being transparent and from both parties being able to watch it being applied. That is a different kind of reliability from instrumental precision, and for a commodity trade that has resolved quantity this way for a very long time, it has proved sufficient.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'This page describes the method, not how to perform it',
          text: 'A draught survey is carried out by a competent surveyor using the ship’s own documentation, following an established procedure, and applying corrections specific to that vessel. No tables, formulae, correction factors, tolerances, or accuracy figures appear here, and none should be inferred for any ship or survey.',
        },
      ],
    },
  ],
  logisticsPurpose:
    'Establish the quantity of a bulk consignment loaded or discharged, when the cargo cannot be counted or directly weighed, by using the ship’s own displacement as the measuring instrument and taking the difference between two conditions.',
  operationalLimitations: [
    'No accuracy or tolerance figures are given. The uncertainty of a survey depends on the vessel, the conditions, the deductibles, and the surveyor, and no general figure holds.',
    'No hydrostatic data, correction formulae, or correction factors are given. They are specific to an individual ship and come from her own approved documentation.',
    'No expected discrepancy between loaded and outturn quantity is stated. It is cargo-, route-, and voyage-specific, and any general figure would be invented.',
    'This page cannot say which quantity figure governs a transaction. That is determined by the contract and the charter party, not by the method.',
    'A survey is performed by a competent surveyor exercising judgement on a specific vessel; nothing here is an instruction, a procedure, or a basis for performing one.',
    'Where surveys are attended by parties with opposing interests, the resolution of a disagreement is a commercial and contractual matter outside this description.',
  ],
  cargoForms: ['bulk-dry', 'bulk-liquid'],
  applicableCommodityClasses: [
    'cereal-grain',
    'oilseed',
    'pulse',
    'sugar-crop',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'soybeans' },
    { type: 'commodity', slug: 'barley-grain' },
    { type: 'commodity', slug: 'rapeseed' },
  ],
  qualityRisks: [{ type: 'quality-attribute', slug: 'moisture-content' }],
  dependsOnOperations: [
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'commercial-grain-silo' },
  ],
  relevantStandards: [
    {
      type: 'standard-reference',
      slug: 'accreditation-and-certification-bodies',
    },
    { type: 'standard-reference', slug: 'iso-9001-quality-management' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'bill-of-lading' },
    { type: 'trade-concept', slug: 'commercial-invoice' },
    { type: 'trade-concept', slug: 'fob-delivery-term' },
    { type: 'trade-concept', slug: 'cif-delivery-term' },
    { type: 'trade-concept', slug: 'customs-valuation' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'bulk-loading-and-discharge' },
    { type: 'logistics-concept', slug: 'bulk-sea-freight' },
    { type: 'logistics-concept', slug: 'grain-terminal' },
    { type: 'logistics-concept', slug: 'inland-waterway-transport' },
    { type: 'logistics-concept', slug: 'pre-shipment-inspection' },
  ],
  exposedToRisks: [
    { type: 'supply-chain-risk', slug: 'information-asymmetry' },
    { type: 'supply-chain-risk', slug: 'counterparty-default' },
    { type: 'supply-chain-risk', slug: 'documentation-error' },
    { type: 'supply-chain-risk', slug: 'fraud-and-adulteration' },
  ],
  sourceReferences: [
    {
      sourceId: 'imo',
      citedFor:
        'Ship stability and loading documentation, and the carriage framework for solid bulk cargoes within which quantity is determined',
    },
    {
      sourceId: 'unctad',
      citedFor:
        'Dry bulk shipping practice and the commercial framework for bulk consignments',
    },
    {
      sourceId: 'igc',
      citedFor: 'Grain trade shipment and quantity reporting context',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. The method is used wherever bulk cargo is loaded and discharged, and its practical accuracy depends on conditions at the specific berth and on the vessel surveyed.',
  limitations: [
    'A reference description of the method, not a survey procedure, an instruction, or a surveying service.',
    'No tables, formulae, correction factors, tolerances, or accuracy figures are given — all are vessel- and condition-specific.',
    'Which quantity figure governs a transaction is determined by the contract and the charter party, not by the method or by this page.',
    'Surveys are performed by competent surveyors exercising judgement; this describes the general principle rather than any particular survey.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Draught Survey: How a Shipload of Grain Is Weighed',
    description:
      'How a draught survey determines bulk cargo quantity: the displacement principle, draught marks and corrections, and why deductibles decide accuracy.',
    keywords: [
      'draught survey',
      'draft survey',
      'bulk cargo quantity',
      'displacement survey',
      'outturn quantity',
    ],
  },
  structuredData: { article: true },
};
