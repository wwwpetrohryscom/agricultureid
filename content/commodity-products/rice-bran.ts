import type { CommodityProductContent } from '@/types/content';

export const riceBran: CommodityProductContent = {
  id: 'commodity-product-rice-bran',
  slug: 'rice-bran',
  contentType: 'commodity-product',
  title: 'Rice Bran',
  alternativeNames: ['Rice polish', 'Bran and polishings', 'Nuka'],
  category: 'Milling co-product',
  subcategory: 'Cereal bran',
  productClass: 'co-product',
  derivedFrom: { type: 'commodity', slug: 'brown-rice' },
  physicalForm: 'bran',
  summary:
    'Rice bran is the oil-rich outer layer and germ abraded from brown rice during whitening. It is a valuable co-product, but it degrades within hours of being made unless it is stabilised.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Rice bran is what whitening removes: the seed coat, the aleurone layer, and the germ, ground off the brown rice grain to leave white rice behind. Unlike the husk stripped at the earlier hulling step, this material is nutritionally dense — it carries the oil, most of the vitamins and minerals of the grain, and a useful protein fraction — and it is bought and sold in serious quantity as a feed ingredient and as the raw material for rice bran oil.',
    },
    {
      type: 'paragraph',
      text: 'It also carries the most acute stability problem of any cereal milling stream. The bran contains oil and, in the same tissue, the lipase that breaks that oil down. Intact, the two never meet. The moment abrasion tears the tissue apart they are mixed, and free fatty acids begin rising almost immediately — fast enough that bran which has sat untreated for a day may already be unfit for oil extraction. Everything about how rice bran is handled follows from that clock.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Co-product of rice whitening' },
    { label: 'Made from', value: 'Brown rice (Oryza sativa)' },
    {
      label: 'Fraction of the grain',
      value: 'Seed coat, aleurone layer, and germ',
    },
    {
      label: 'Defining constraint',
      value: 'Lipase and oil mix on contact: rancidity begins within hours',
    },
    {
      label: 'Stabilisation',
      value: 'Heat treatment to deactivate lipase, done at or near the mill',
    },
    {
      label: 'Principal uses',
      value: 'Animal feed and rice bran oil extraction',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What rice bran is',
      body: [
        {
          type: 'paragraph',
          text: 'Whitening machines abrade the outer layers of brown rice, and everything they take off leaves together as a fine, oily, pale powder. The stream is not homogeneous: the bran layers proper, the aleurone, and the germ come off in the first passes, while later polishing passes yield a finer material sometimes sold separately as rice polish. Broken grain and fine starch inevitably come with it, and how much dilutes the oil content of the whole.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Bran is a co-product; husk is a by-product',
          text: 'Both come off the same grain at different mill steps, but they are not comparable. Bran is deliberate, valuable, and feeds an extraction industry; husk is a near-worthless siliceous residue. AgricultureID classes them differently for that reason, per process rather than by analogy.',
        },
      ],
    },
    {
      id: 'stabilisation',
      heading: 'The stabilisation problem',
      body: [
        {
          type: 'paragraph',
          text: 'Fresh rice bran is a race against its own chemistry. Lipase liberated by abrasion hydrolyses the oil into free fatty acids, and once free fatty acids climb past what a refinery can economically remove, the bran is worth only what feed will pay for it. Untreated bran can pass that point in a matter of days, and in warm, humid mill conditions considerably faster.',
        },
        {
          type: 'paragraph',
          text: 'Stabilisation is the answer, and it means heat: extrusion, steaming, or another thermal treatment that denatures the lipase without damaging the oil. It must happen at or very near the mill, because transporting unstabilised bran to a distant plant guarantees arriving with a degraded product. This is why rice bran oil extraction tends to sit alongside large mills rather than at ports, and why bran from small, scattered mills often never reaches the oil industry at all and goes straight to feed.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'The clock starts at the whitening machine',
          text: 'Free fatty acid content is a function of time and temperature since milling. A bran specification without a statement of stabilisation and age describes very little.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'list',
          items: [
            'Feed — the largest outlet by volume, in compound feeds and aquaculture rations',
            'Oil — stabilised bran extracted for rice bran oil, with defatted bran returning to feed',
            'Food — stabilised bran as a fibre and ingredient, and traditional uses such as pickling media',
            'Industrial — derived fractions including waxes and other minor products',
          ],
        },
        {
          type: 'paragraph',
          text: 'Because bran concentrates the outer part of the grain, it also concentrates what was on or near the surface. Residues, contaminants, and elements taken up by the plant and deposited in the outer layers report to this stream in higher proportion than to the white rice. The regulatory limits that apply to bran in feed and food are its own, and the condition of the paddy the mill bought is visible here more than anywhere else in the chain.',
        },
      ],
    },
    {
      id: 'handling-and-storage',
      heading: 'Handling and storage',
      body: [
        {
          type: 'paragraph',
          text: 'Stabilised bran stores as an ordinary milled product would: dry, cool, protected from insects, and rotated. Unstabilised bran is not stored at all in any real sense — it is moved immediately, and its keeping quality is measured in hours to days rather than months. Bran is fine, light, and dusty, so pelleting is common for feed use, and dust management is part of handling it in volume.',
        },
      ],
    },
  ],
  primaryUses: ['feed', 'oil'],
  secondaryUses: ['food', 'industrial'],
  majorQualityAttributes: [
    'Free fatty acid content',
    'Oil content',
    'Stabilisation status and age since milling',
    'Starch and broken-grain dilution',
    'Moisture content',
    'Contaminant and residue status',
  ],
  processContext:
    'Abraded from brown rice during whitening, together with the germ; the bran layers come off in the first passes and finer polish in later ones, and stabilisation by heat must follow quickly.',
  storageContext:
    'Unstabilised bran keeps for hours to days and must move immediately; stabilised bran stores as a normal milled product, dry, cool, and protected from insects.',
  commodityCodes: [
    {
      system: 'HS',
      code: '2302.40',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Bran, sharps and other residues derived from the sifting, milling or other working of other cereals — the residual subheading covering rice bran.',
    },
  ],
  connections: [
    { type: 'crop', slug: 'rice' },
    { type: 'livestock', slug: 'farmed-fish' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
  ],
  relatedTopics: [
    { type: 'commodity-product', slug: 'rice-husk' },
    { type: 'commodity', slug: 'milled-rice' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'irri',
      citedFor: 'Rice whitening, bran generation, and bran stabilisation',
    },
    {
      sourceId: 'fao',
      citedFor: 'Rice bran as a feed ingredient and oil raw material',
    },
    { sourceId: 'usda', citedFor: 'Rice bran composition and product context' },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Feed-ingredient naming, permitted uses, and contaminant limits are jurisdiction-specific.',
  limitations: [
    'This is a reference description, not a feed formulation, extraction specification, or food-standards statement.',
    'No oil, free-fatty-acid, composition, or shelf-life figures are given — these depend on the mill, the degree of milling, stabilisation, and time since milling.',
    'Rice bran oil and defatted bran are real downstream products but are not modelled as products of this page.',
    'Bran is modelled as a co-product of brown rice because whitening is what produces it; the husk belongs to the earlier hulling step and to the paddy entry.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Rice Bran: Co-Product of Rice Milling',
    description:
      'Rice bran as a milling co-product: the oil-rich layer abraded from brown rice, why lipase makes it degrade within hours, how stabilisation works, and its uses.',
    keywords: [
      'rice bran',
      'bran stabilisation',
      'rice bran oil',
      'free fatty acids',
      'rice whitening',
    ],
  },
  structuredData: { article: true },
};
