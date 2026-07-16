import type { QualityAttributeContent } from '@/types/content';

export const kernelHardness: QualityAttributeContent = {
  id: 'quality-attribute-kernel-hardness',
  slug: 'kernel-hardness',
  contentType: 'quality-attribute',
  title: 'Kernel Hardness',
  alternativeNames: [
    'Grain hardness',
    'Endosperm texture',
    'Hard/soft classification',
  ],
  category: 'Quality attribute',
  subcategory: 'Grain and seed',
  attributeClass: 'physical',
  qualityDomain: 'processing-suitability',
  notAnIndicatorOf: [
    'Not a measure of protein content — hard and soft wheats overlap substantially in protein content, and treating hardness and protein as the same thing, or assuming one predicts the other, is a frequent and consequential conflation; hardness is a physical texture trait, protein a compositional one, and a lot can be hard and low-protein or soft and high-protein.',
    'Not a measure of baking quality — baking performance depends primarily on protein quantity and gluten quality (protein composition and functionality), not on kernel hardness as such; a hard wheat with poor gluten quality will not bake well regardless of its hardness.',
    'Not a grade factor in the way test weight or damage factors are — hardness underlies the hard/soft market CLASS a wheat is bought and sold under, which is a different concept from a numeric grade; a market class describes what a lot is suited for, a grade describes condition within that class.',
    'Not the same property as vitreousness — in durum wheat, vitreousness (translucent, glassy kernel appearance) is a separate visual and optical trait assessed independently, even though it is related to and correlated with hardness.',
  ],
  typicalUnits: ['Hardness index (dimensionless)', 'N (newtons)'],
  appliesToCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'durum-wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'barley-grain' },
    { type: 'commodity', slug: 'rice-paddy' },
    { type: 'commodity', slug: 'sorghum-grain' },
  ],
  measuredBy: [
    { type: 'quality-measurement', slug: 'near-infrared-spectroscopy' },
  ],
  summary:
    'Kernel hardness is the resistance of a kernel and its endosperm to deformation and fracture. In wheat it is largely genetically fixed and expressed as the hard/soft market classification, and it governs milling behaviour — but it is not a measure of protein content, baking quality, or grade, and it is a distinct property from vitreousness.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Kernel hardness describes how much a kernel, and specifically its endosperm, resists being deformed or fractured under applied force. In wheat, the crop for which hardness has been studied most closely, hardness is largely determined by genetics — specifically by variation at the puroindoline genes, which affect how tightly starch granules and the surrounding protein matrix adhere within the endosperm. This genetic basis is why hardness behaves, in practice, much more like a fixed varietal trait than attributes such as protein content or moisture, which shift substantially with growing conditions from one season to the next.',
    },
    {
      type: 'paragraph',
      text: 'Because hardness is comparatively stable within a variety, it underlies the hard/soft classification that structures wheat market classes worldwide, and market class in turn determines what a given wheat is bought to produce. Hard wheats fracture cleanly along cell boundaries under milling and are favoured where a miller wants clean starch-granule damage and strong water absorption, properties suited to yeast-leavened bread. Soft wheats fracture less cleanly, mill to a finer, lower-starch-damage flour, and are favoured for cakes, biscuits, and pastries. Hardness is therefore best understood as a processing-suitability attribute — it tells a miller what kind of flour a wheat is physically disposed to produce, not how good, safe, or nutritious that wheat is.',
    },
  ],
  keyFacts: [
    {
      label: 'What it measures',
      value: 'Resistance of the kernel/endosperm to deformation and fracture',
    },
    {
      label: 'Genetic basis (wheat)',
      value: 'Largely determined by the puroindoline genes',
    },
    {
      label: 'Governs',
      value:
        'Milling energy, flour particle size distribution, starch damage, and water absorption',
    },
    {
      label: 'Underlies',
      value: 'The hard/soft market class distinction, not a numeric grade',
    },
    {
      label: 'Not a proxy for',
      value: 'Protein content or baking quality',
    },
    {
      label: 'Related but distinct trait',
      value: 'Vitreousness in durum wheat — a separate visual/optical property',
    },
    {
      label: 'Measured by',
      value:
        'Near-infrared spectroscopy, calibrated against reference hardness methods',
    },
  ],
  sections: [
    {
      id: 'genetic-basis-and-market-class',
      heading: 'Genetic basis and market class',
      body: [
        {
          type: 'paragraph',
          text: "In wheat, hardness is controlled to a large degree by the puroindoline genes, which influence how firmly starch granules bind to the surrounding protein matrix in the endosperm. Variants of these genes associated with softness leave a friable endosperm that fractures easily along cell walls; variants associated with hardness produce an endosperm where fracture cuts through starch granules themselves. Because this is a genetic rather than an environmental effect, a given wheat variety is reliably hard or soft across seasons and locations in a way that attributes like protein content are not — though environment can still shift hardness somewhat within a variety's characteristic range.",
        },
        {
          type: 'paragraph',
          text: 'This stability is exactly why hardness, rather than a more environmentally variable attribute, is used to define wheat market classes such as hard red winter, hard red spring, soft red winter, hard white, and soft white. A market class is a description of what the wheat is suited to be milled and used for; it is set primarily by hardness together with kernel colour and, for some classes, growth habit, and it is a distinct concept from a commercial grade, which describes the condition of a lot within its class.',
        },
      ],
    },
    {
      id: 'how-hardness-governs-milling',
      heading: 'How hardness governs milling behaviour',
      body: [
        {
          type: 'list',
          items: [
            'Milling energy: harder kernels require more mechanical energy to break down and reduce to flour.',
            'Particle size distribution: hard wheats mill to a coarser, more granular flour; soft wheats mill to a finer, more powdery flour.',
            'Starch damage: fracturing through starch granules (characteristic of hard wheat milling) damages more starch than fracturing along cell boundaries (characteristic of soft wheat milling).',
            'Water absorption: damaged starch absorbs more water, so hard-wheat flours generally absorb more water in dough than soft-wheat flours, a property bakers rely on when formulating recipes.',
          ],
        },
        {
          type: 'paragraph',
          text: 'These downstream effects are why millers select wheat by hardness class for a specific end product before they ever look at protein content: hardness sets the physical milling behaviour and the baseline water absorption, while protein and gluten quality separately determine dough strength and baking performance within that class.',
        },
      ],
    },
    {
      id: 'the-protein-and-baking-conflations',
      heading: 'The protein-content and baking-quality conflations',
      body: [
        {
          type: 'callout',
          tone: 'caution',
          title: 'Hardness is not protein, and hardness is not baking quality',
          text: 'Two distinct misreadings are common enough to name explicitly. First, hardness and protein content are frequently and wrongly treated as the same thing or as reliable predictors of one another, because hard wheat classes are commonly grown for bread and bread wheats are commonly bought on protein specification — but hard and soft wheats overlap substantially in achievable protein content, and hardness itself does not measure or guarantee protein. Second, hardness is sometimes read as a proxy for baking quality, but baking performance depends primarily on protein quantity and, more importantly, gluten quality — the functional strength and extensibility of the gluten proteins — which is a compositional property that hardness, a physical texture property, does not capture.',
        },
      ],
    },
    {
      id: 'hardness-and-vitreousness',
      heading: 'Hardness and vitreousness are related but separate',
      body: [
        {
          type: 'paragraph',
          text: 'In durum wheat particularly, vitreousness — whether a kernel appears translucent and glassy or opaque and starchy-white in cross-section — is assessed as its own visual and optical trait, separately from hardness measured by mechanical or spectroscopic methods. The two properties are correlated, since a densely packed, vitreous endosperm structure tends to also be harder, but they are not the same measurement, are not always concordant in an individual kernel, and are recorded as distinct attributes in grading and quality assessment rather than treated as interchangeable.',
        },
      ],
    },
  ],
  connections: [{ type: 'commodity-grade', slug: 'usda-wheat-grades' }],
  relatedTopics: [
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  glossaryTerms: ['cultivar'],
  sourceReferences: [
    {
      sourceId: 'usda',
      citedFor:
        'Wheat hardness classification and its role in US market classes',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Genetic basis of kernel hardness and the puroindoline genes',
    },
    {
      sourceId: 'cimmyt',
      citedFor:
        'Wheat quality assessment and the relationship between hardness and milling behaviour',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Practical guidance on wheat hardness, market class, and milling suitability',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. The hard/soft classification and its role in market classes are best documented for wheat; the underlying genetic and physical principles vary in detail across other cereals.',
  limitations: [
    'Kernel hardness is a physical texture property and does not indicate protein content, gluten quality, or baking performance, which must be assessed separately.',
    'Hardness underlies wheat market class, a description of processing suitability, and should not be read as a numeric commercial grade.',
    'Vitreousness in durum wheat is a related but distinct trait assessed by separate visual methods, not a synonym for hardness.',
    'This entry describes general principles; the applicable market-class definitions and any hardness-related contract specifications are set by national grading authorities and buyer contracts.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Kernel Hardness: Milling Behaviour, Not Protein',
    description:
      'What kernel hardness measures, why it is genetically fixed in wheat, how it governs milling, and why it is not protein content or baking quality.',
    keywords: [
      'kernel hardness',
      'wheat hardness',
      'hard soft wheat',
      'puroindoline genes',
      'milling suitability',
    ],
  },
  structuredData: { article: true },
};
