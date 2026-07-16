import type { QualityAttributeContent } from '@/types/content';

export const foreignMaterial: QualityAttributeContent = {
  id: 'quality-attribute-foreign-material',
  slug: 'foreign-material',
  contentType: 'quality-attribute',
  title: 'Foreign Material',
  alternativeNames: ['Foreign matter', 'FM'],
  category: 'Quality attribute',
  subcategory: 'Grain and seed',
  attributeClass: 'physical',
  qualityDomain: 'commercial-grading',
  notAnIndicatorOf: [
    'Not a safety verdict: a low foreign material figure says nothing about mycotoxin contamination, pesticide residue, or allergen cross-contact, none of which register on a mass-percentage inspection.',
    'Not a measure of the lot’s cleanability: how easily material can be removed by cleaning equipment is a separate, process-specific question from how much remains after a defined cleaning step.',
    'Not comparable across standards: a foreign material figure from one grading standard does not transfer to another, because what counts as foreign material — and what has already been removed as dockage before the figure is even calculated — differs by standard.',
    'Not evidence of poor husbandry on its own: foreign material can arise from harvesting conditions, field contamination, or handling at any point in the chain, and a figure within specification says nothing about which of those occurred.',
  ],
  typicalUnits: ['% by mass'],
  appliesToCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'soybeans' },
    { type: 'commodity', slug: 'barley-grain' },
    { type: 'commodity', slug: 'rye-grain' },
    { type: 'commodity', slug: 'sorghum-grain' },
    { type: 'commodity', slug: 'rice-paddy' },
  ],
  measuredBy: [
    { type: 'quality-measurement', slug: 'sieve-analysis' },
    { type: 'quality-measurement', slug: 'visual-defect-inspection' },
    { type: 'quality-measurement', slug: 'grain-probe-sampling' },
  ],
  summary:
    'Foreign material is matter other than the commodity itself — and, in most standards, other than the grain that remains after dockage has already been removed — expressed as a mass percentage. The definition is procedural and standard-specific: what counts as foreign material depends entirely on the standard applied, so a figure from one standard cannot be read against another.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Foreign material is the matter present in a grain lot that is not the grain itself: other grains, weed seeds, chaff, stones, soil, glass, metal, and animal matter are all categories that grading standards commonly recognize. In most standards, foreign material is specifically what remains mixed with the grain after a prescribed cleaning or dockage-removal step, not everything non-grain that might be found in an uncleaned sample. That distinction — what counts as foreign material after which procedural step — is set entirely by the standard being applied, and it is the central caution on this page: a foreign material percentage from one grading system is not interchangeable with a figure from another, even when both use the same words.',
    },
    {
      type: 'paragraph',
      text: 'Foreign material and dockage are related but distinct concepts, and the two are frequently confused. In United States grain standards, dockage is material readily removable from the lot by prescribed cleaning equipment specified in the standard; it is assessed, reported, and deducted separately, before the grain is graded. Foreign material is what remains mixed with the grain after that dockage-removal step — material not readily separated by the prescribed cleaning — and it is treated as a grade factor in its own right. For a full account of the removable fraction, see the dockage attribute; the two figures answer different procedural questions about the same lot.',
    },
  ],
  keyFacts: [
    {
      label: 'What it measures',
      value:
        'The mass proportion of matter other than the commodity, typically after dockage has been removed',
    },
    {
      label: 'Definition is procedural',
      value:
        'What counts as foreign material is set entirely by the standard applied — figures do not transfer between standards',
    },
    {
      label: 'Distinct from dockage',
      value:
        'Dockage is readily removable by prescribed cleaning and deducted separately; foreign material is what remains with the grain afterward',
      note: 'See the dockage attribute for the removable fraction',
    },
    {
      label: 'Common categories',
      value:
        'Other grains, weed seeds, chaff, stones, soil, glass, metal, and animal matter',
    },
    {
      label: 'Corn-specific handling',
      value:
        'In United States corn standards, foreign material is assessed together with broken corn as a combined factor',
    },
    {
      label: 'Not a safety verdict',
      value:
        'Says nothing about mycotoxins, pesticide residue, or allergen cross-contact',
    },
    {
      label: 'Where limits are set',
      value:
        'The applicable grade standard or buyer’s contract sets any limit, and it is standard-specific',
    },
  ],
  sections: [
    {
      id: 'procedural-definition',
      heading: 'A procedural, standard-specific definition',
      body: [
        {
          type: 'paragraph',
          text: 'Foreign material is not a fixed physical category the way "weed seeds" or "stones" might sound like on their own. It is defined by what a specific grading standard says remains in a sample after a specific, prescribed procedure — typically cleaning by defined equipment to remove the readily separable fraction (dockage), followed by inspection of what is left. Because the prescribed equipment, the cleaning intensity, and the categories counted all differ between standards and between commodities within a standard, the resulting percentage is only meaningful in reference to the exact standard it was generated under. Reading a foreign material figure from one country’s wheat standard as equivalent to another country’s figure, or to a different commodity’s standard, is a common and misleading error.',
        },
        {
          type: 'table',
          caption:
            'Foreign material categories commonly recognized in grading standards',
          columns: ['Category', 'Examples'],
          rows: [
            [
              'Other grains',
              'Kernels of a different commodity mixed into the lot',
            ],
            [
              'Weed seeds',
              'Seeds of weed species present in the field or storage environment',
            ],
            [
              'Chaff and plant debris',
              'Straw, hulls, and other harvest residue',
            ],
            ['Mineral matter', 'Stones, soil, and sand'],
            ['Manufactured contaminants', 'Glass and metal fragments'],
            [
              'Animal matter',
              'Insect fragments, rodent matter, and similar material',
            ],
          ],
        },
      ],
    },
    {
      id: 'dockage-distinction',
      heading: 'Foreign material versus dockage',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Dockage',
              description:
                'Material readily removable from the lot by the prescribed cleaning equipment specified in the applicable standard. Assessed and reported separately, then deducted from the lot weight before grading proceeds.',
            },
            {
              term: 'Foreign material',
              description:
                'Material that remains mixed with the grain after the dockage-removal step — not readily separated by the prescribed cleaning — and that is itself assessed as a grade factor.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'The practical effect is that foreign material and dockage describe two different stages of the same cleaning process, not two competing measurements of the same thing. A lot can carry substantial dockage that is efficiently removed and deducted, while still carrying a foreign material figure that reflects only what the prescribed equipment could not separate out. In United States corn standards specifically, foreign material is not reported alone; it is assessed together with broken corn kernels as a single combined factor, because the two are difficult to separate cleanly during inspection.',
        },
      ],
    },
    {
      id: 'not-a-safety-figure',
      heading: 'A mass percentage is not a safety verdict',
      body: [
        {
          type: 'paragraph',
          text: 'Because foreign material is reported as a proportion of total mass, it treats a tablespoon of sand and a single fragment of glass as comparable only insofar as they weigh the same. That arithmetic is appropriate for a commercial grading factor, where cleanliness and processing burden are the concern, but it is the wrong lens entirely for hazard. Some contaminants that fall under the foreign material umbrella — ergot sclerotia, toxic weed seeds such as Datura, glass, metal, and stones — are dangerous at levels far below whatever threshold moves a mass percentage. A lot could pass comfortably on an aggregate foreign material figure while still containing an ergot sclerotium or a shard of glass that a mass-based figure would never flag on its own.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Hazardous contaminants are handled separately for a reason',
          text: 'Ergot, toxic weed seeds, glass, metal, and stones are dangerous at quantities far too small to move an aggregate mass-percentage figure. This is exactly why grading standards, food-safety regulation, and buyer specifications typically address these as separate named factors with their own zero-tolerance or trace-level handling, rather than folding them into the general foreign material aggregate. A foreign material result within specification is not evidence that a lot is free of these hazards.',
        },
      ],
    },
    {
      id: 'measurement-notes',
      heading: 'How it is assessed',
      body: [
        {
          type: 'paragraph',
          text: 'Foreign material is typically assessed by sieve analysis, which physically separates material by size and density, combined with visual and manual inspection of the retained fractions to categorize what has been separated out. The result an entire lot is assigned, however, depends heavily on how representatively the tested sample was drawn from the bulk in the first place: probe sampling determines what portion of the lot the laboratory actually sees, and sampling error in that step commonly exceeds the error of the sieving or inspection method itself. A rigorous sieve analysis performed on an unrepresentative sample still produces a misleading foreign material figure for the lot as a whole.',
        },
      ],
    },
  ],
  connections: [
    { type: 'quality-attribute', slug: 'dockage' },
    { type: 'quality-attribute', slug: 'broken-kernels' },
    { type: 'commodity-grade', slug: 'usda-corn-grades' },
    { type: 'commodity-grade', slug: 'usda-wheat-grades' },
  ],
  relatedTopics: [{ type: 'post-harvest', slug: 'grain-cleaning' }],
  sourceReferences: [
    {
      sourceId: 'usda',
      citedFor:
        'United States grain grading standards, dockage procedure, and the foreign material and broken corn combined factor',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Post-harvest grain cleaning and foreign material as a grading concern',
    },
    {
      sourceId: 'efsa',
      citedFor:
        'Hazardous contaminants, including ergot and toxic weed seeds, handled as separate safety factors',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Grain intake screening and foreign material assessment practice in the United Kingdom',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. What counts as foreign material, the cleaning procedure it is assessed after, and any applicable limit are all defined by the specific grading standard applied and vary by jurisdiction and commodity.',
  limitations: [
    'This entry states no percentage limits. Any applicable limit is defined by the specific grading standard or buyer’s contract, and it is not transferable to a different standard.',
    'Foreign material figures from different grading standards, or from different commodities within the same standard, are not directly comparable.',
    'A foreign material result does not establish the presence or absence of mycotoxins, pesticide residues, or allergen cross-contact; those require dedicated testing.',
    'Sampling error in drawing a representative sample from the bulk commonly exceeds the analytical error of the sieving or inspection method itself.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Foreign Material: A Standard-Specific Grade Factor',
    description:
      'Foreign material in grain is a procedural, standard-specific figure distinct from dockage. Why hazardous contaminants are handled as separate factors.',
    keywords: [
      'foreign material',
      'grain grading',
      'dockage versus foreign material',
      'grain cleanliness',
      'broken corn and foreign material',
    ],
  },
  structuredData: { article: true },
};
