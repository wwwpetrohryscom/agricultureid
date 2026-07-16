import type { QualityAttributeContent } from '@/types/content';

export const proteinContent: QualityAttributeContent = {
  id: 'quality-attribute-protein-content',
  slug: 'protein-content',
  contentType: 'quality-attribute',
  title: 'Protein Content',
  alternativeNames: ['Crude protein', 'Grain protein'],
  category: 'Quality attribute',
  subcategory: 'Grain and seed',
  attributeClass: 'chemical',
  qualityDomain: 'processing-suitability',
  notAnIndicatorOf: [
    'Not a measure of protein quality: baking and end-use performance depend on gluten strength and composition — the balance of glutenin and gliadin fractions in wheat — and two lots at an identical protein content can behave in completely different ways in a bakery or mill.',
    'Not a measure of hardness or market class: hardness is a separate kernel property governed by different genetics and is assessed by its own method, even though the two are commonly marketed together.',
    'Not a nutritional adequacy verdict: for feed and food purposes, amino acid composition — not crude protein — determines nutritional value, and a high-protein lot can still be poorly balanced in essential amino acids such as lysine.',
    'Not a grade-determining factor in every standard: in United States wheat grade standards, protein is reported as a separate contract specification rather than one of the numerical factors that sets the grade itself.',
  ],
  measurementBasis:
    'Reported on a stated moisture basis (dry basis or an as-is moisture)',
  typicalUnits: ['% (dry basis)', '% (at a stated moisture basis)', 'g/kg'],
  appliesToCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'durum-wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'rye-grain' },
    { type: 'commodity', slug: 'barley-grain' },
    { type: 'commodity', slug: 'soybeans' },
    { type: 'commodity', slug: 'dry-peas' },
    { type: 'commodity', slug: 'lentils' },
  ],
  measuredBy: [
    { type: 'quality-measurement', slug: 'near-infrared-spectroscopy' },
  ],
  summary:
    'Protein content is the proportion of a grain or seed lot made up of protein, conventionally estimated from a total-nitrogen measurement using a commodity-specific conversion factor. It governs milling, baking, and feed value, but it is a quantity of protein, not a statement about the protein’s functional quality.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Protein content describes how much of a grain or seed lot, by mass, is protein. It is one of the properties buyers use most heavily to route wheat toward bread, noodle, biscuit, or feed markets, and it strongly influences the value oilseeds and pulses realise once crushed or processed. Because protein concentrates the nitrogen a plant has taken up and converted during grain fill, it is sensitive to variety, nitrogen supply, and the growing season, and it varies lot to lot even within a single field.',
    },
    {
      type: 'paragraph',
      text: 'Almost no laboratory or routine trade method measures protein directly. Reference methods — the Kjeldahl digestion method and the Dumas combustion method — measure total nitrogen, and the result is converted to a protein figure by multiplying by a conversion factor. That factor is a convention, not a chemical constant: it assumes an average nitrogen content for the protein in a given commodity, and the accepted factor differs between wheat, soybeans, and other crops. Near-infrared spectroscopy is calibrated against these reference methods and is what most routine trade testing actually uses. A protein figure is only complete once its moisture basis is stated, because the same lot reported on a dry basis and at an as-received moisture yields two different numbers.',
    },
  ],
  keyFacts: [
    {
      label: 'What it measures',
      value: 'The proportion of a lot, by mass, that is protein',
    },
    {
      label: 'How it is obtained',
      value:
        'Total nitrogen (Kjeldahl or Dumas combustion) converted to protein by a commodity-specific factor; near-infrared spectroscopy calibrated to these references in routine trade',
      note: 'The conversion factor is a convention that assumes an average nitrogen content of protein and differs by commodity',
    },
    {
      label: 'Moisture basis',
      value: 'Must always be stated alongside the value',
      note: 'A dry-basis figure and an as-is-moisture figure for the same lot are different numbers',
    },
    {
      label: 'Not a quality measure',
      value:
        'Baking performance depends on gluten strength and composition, not on protein quantity alone',
    },
    {
      label: 'Not a nutritional verdict',
      value:
        'Amino acid composition, not crude protein, determines nutritional adequacy for feed',
    },
    {
      label: 'Grade status varies by standard',
      value:
        'A separate contract specification in some standards rather than a grade-determining factor',
      note: 'True of United States wheat grade standards specifically',
    },
    {
      label: 'Where limits are set',
      value:
        'The buyer’s contract, milling or crush specification, or market-class convention sets any target',
    },
  ],
  sections: [
    {
      id: 'nitrogen-to-protein',
      heading: 'From nitrogen to a protein figure',
      body: [
        {
          type: 'paragraph',
          text: 'Protein molecules average a fairly consistent proportion of nitrogen by mass, so laboratories can estimate protein by measuring total nitrogen and multiplying by a conversion factor. The Kjeldahl method, which digests a sample and measures the ammonia released, and the Dumas combustion method, which burns a sample and measures the nitrogen gas evolved, are both reference-level nitrogen assays; they do not weigh protein itself. The conversion factor applied afterward is where commodity identity enters: cereals, oilseeds, and pulses each have protein of a somewhat different average nitrogen content, so the accepted factor is set by convention for each commodity rather than derived fresh from each sample.',
        },
        {
          type: 'paragraph',
          text: 'This matters because the resulting number is only as sound as the factor and the basis it was calculated on. Applying the wrong commodity’s factor, or comparing figures calculated on different bases, produces numbers that look precise but are not comparable. Near-infrared spectroscopy, used for most day-to-day trade testing because it is fast and non-destructive, is itself calibrated against Kjeldahl or Dumas reference values and inherits the same conventions.',
        },
      ],
    },
    {
      id: 'moisture-basis',
      heading: 'Why the moisture basis has to travel with the number',
      body: [
        {
          type: 'paragraph',
          text: 'Grain and seed always contain some water, and protein is conventionally reported either on a dry-matter basis (protein as a share of the dry matter alone) or at a stated moisture (protein as a share of the whole, undried sample). Because moisture and protein are both parts of the same total mass, a wetter sample reports a lower protein percentage than a drier sample of otherwise identical composition, purely as an arithmetic consequence of the basis used — not because the grain actually contains less protein.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'A figure without its basis is not usable',
          text: 'Protein values quoted without stating whether they are on a dry basis or at a specific moisture cannot be safely compared, averaged, or checked against a contract. Always record the basis alongside the number.',
        },
      ],
    },
    {
      id: 'not-quality',
      heading: 'Quantity of protein is not quality of protein',
      body: [
        {
          type: 'paragraph',
          text: 'In wheat, baking and noodle performance depends on gluten — the network formed mainly by two protein fractions, glutenins and gliadins, in a balance that gives dough its elasticity and extensibility. Two wheat lots can carry the same total protein content and still perform very differently in a bakery, because the glutenin-to-gliadin balance, and the specific composition within each fraction, is what actually governs dough strength. Protein content is therefore a starting screen, not a substitute for functional testing of the flour itself.',
        },
        {
          type: 'list',
          items: [
            'Protein content is not a measure of gluten strength or dough functionality.',
            'Protein content is not the same property as kernel hardness, which is assessed separately and governed by different genetics.',
            'For feed use, amino acid balance — not crude protein — determines nutritional value; a high-protein feed ingredient can still be deficient in specific essential amino acids.',
          ],
        },
      ],
    },
    {
      id: 'grading-status',
      heading: 'Its status in grade standards varies',
      body: [
        {
          type: 'paragraph',
          text: 'Protein content is not treated identically across grading systems. In United States wheat grade standards, protein is reported and traded as a separate specification attached to the contract, rather than as one of the numerical factors — test weight, damaged kernels, foreign material, and similar factors — that determine the numerical grade itself. Other markets and other commodities may weight protein differently. Anyone reading a grade certificate should check what that specific standard actually does with the figure rather than assume it functions the same way everywhere.',
        },
      ],
    },
  ],
  connections: [
    { type: 'quality-attribute', slug: 'kernel-hardness' },
    { type: 'quality-attribute', slug: 'moisture-content' },
    { type: 'commodity-grade', slug: 'usda-wheat-grades' },
  ],
  relatedTopics: [{ type: 'post-harvest', slug: 'grain-storage' }],
  sourceReferences: [
    {
      sourceId: 'usda',
      citedFor:
        'United States wheat grade standards and the treatment of protein as a contract specification',
    },
    {
      sourceId: 'cimmyt',
      citedFor:
        'Wheat protein and gluten quality, and the relationship between protein content and baking performance',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Grain protein testing and its use in UK milling wheat specifications',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Nitrogen-to-protein conversion conventions and grain quality assessment principles',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Conversion factors, routine test methods, and how protein is used in grading or contracts all vary by commodity, market, and jurisdiction.',
  limitations: [
    'This entry states no protein values, premiums, or targets. Any applicable specification is set by the buyer’s contract, milling or crush requirement, or market-class convention.',
    'The nitrogen-to-protein conversion factor is a convention specific to each commodity; applying a factor from one commodity to another produces a misleading figure.',
    'Protein content says nothing about gluten strength, dough functionality, or amino acid balance; those require separate, dedicated tests.',
    'How protein is used — as a grade factor, a separate contract specification, or an informal indicator — differs between grading systems and is not consistent worldwide.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Protein Content: What It Measures in Grain',
    description:
      'Protein content in grain is a nitrogen-derived, moisture-basis figure. Why it is not a quality, hardness, or nutritional verdict, and how grading treats it.',
    keywords: [
      'protein content',
      'grain protein',
      'wheat protein testing',
      'nitrogen conversion factor',
      'gluten quality',
    ],
  },
  structuredData: { article: true },
};
