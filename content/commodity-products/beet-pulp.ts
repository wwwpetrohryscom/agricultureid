import type { CommodityProductContent } from '@/types/content';

export const beetPulp: CommodityProductContent = {
  id: 'commodity-product-beet-pulp',
  slug: 'beet-pulp',
  contentType: 'commodity-product',
  title: 'Beet Pulp',
  alternativeNames: [
    'Sugar beet pulp',
    'Dried beet pulp pellets',
    'Molassed beet pulp',
  ],
  category: 'Manufacturing co-product',
  subcategory: 'Extracted beet cossettes for feed',
  productClass: 'co-product',
  derivedFrom: { type: 'commodity', slug: 'sugar-beet' },
  producedBy: [
    { type: 'processing-method', slug: 'beet-diffusion-extraction' },
  ],
  physicalForm: 'other',
  summary:
    'Beet pulp is what remains of the sliced beet after diffusion has taken the sugar out: the cell-wall material, pressed and usually dried into pellets. It is a well-regarded ruminant feed valued for highly digestible fibre rather than starch.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Beet pulp is the exhausted cossette. Once hot water has drawn the sugar out of the sliced beet, what is left in the diffuser is the cell-wall structure that held it — pectin-rich, fibrous, and, importantly, still a genuinely useful feed material. It leaves the diffuser soaked, is pressed to remove water, and is then either sold wet or dried and pelleted.',
    },
    {
      type: 'paragraph',
      text: 'It is a co-product rather than a residue because the feed market for it is real, established, and priced. Beet pulp pellets are traded internationally and bought deliberately by feed compounders and livestock farmers who want what beet pulp specifically does. A beet factory counts the pulp stream in its revenue, not in its disposal costs.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Co-product of beet processing' },
    { label: 'Made from', value: 'Sugar beet (Beta vulgaris)' },
    {
      label: 'What it is',
      value: 'Beet cell-wall material after sugar extraction',
    },
    { label: 'Traded forms', value: 'Pressed pulp (wet) and dried pellets' },
    {
      label: 'Common variant',
      value: 'Molassed pulp, with beet molasses added back',
    },
    {
      label: 'Principal use',
      value: 'Animal feed, particularly for ruminants and horses',
    },
    {
      label: 'Feed character',
      value: 'Highly digestible fibre rather than starch',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What beet pulp is',
      body: [
        {
          type: 'paragraph',
          text: 'Diffusion is a gentle process: it removes the sugar from the beet cell without destroying the cell wall around it. That is why beet pulp emerges as recognisable strips of intact structure rather than a mash, and why its composition is essentially the beet minus its sugar — a material rich in pectins, cellulose, and hemicellulose.',
        },
        {
          type: 'paragraph',
          text: 'Molassed beet pulp is made by adding beet molasses back onto the pulp before or during drying. It is a deliberate product rather than a way of hiding a surplus: the molasses adds energy and palatability, binds dust, and helps the pellet hold together. Plain and molassed pulp are sold as separate goods, and the buyer chooses between them.',
        },
      ],
    },
    {
      id: 'wet-and-dried',
      heading: 'Pressed pulp and dried pellets',
      body: [
        {
          type: 'paragraph',
          text: 'The pulp leaves diffusion carrying a great deal of water and is pressed. What happens next is one of the more consequential economic decisions a beet factory makes. Pressed pulp can be sold as it is to farms near the factory, where it is fed fresh or ensiled — cheap, but perishable, heavy, and viable only over a short radius. Or it can be dried and pelleted, which makes a dense, stable, storable product that can be shipped anywhere and traded internationally.',
        },
        {
          type: 'paragraph',
          text: 'Drying is energy-intensive, and it is the reason beet pulp economics track energy prices closely. When energy is expensive, drying erodes the value it creates, and factories lean toward selling pressed pulp locally; when energy is cheap, the traded pellet is more attractive. The same pulp can therefore reach the market in quite different forms from one season to the next.',
        },
      ],
    },
    {
      id: 'feed-use',
      heading: 'Why feeders want it',
      body: [
        {
          type: 'paragraph',
          text: 'Beet pulp occupies a distinctive place in ruminant nutrition. Its energy is carried in highly fermentable fibre — chiefly pectin — rather than in starch, and rumen microbes ferment it readily without the rapid acid load that a starchy cereal produces. That gives feeders a way to add energy to a ration while keeping rumen conditions more stable than a cereal-based alternative would, which is why beet pulp has the informal reputation it does among nutritionists.',
        },
        {
          type: 'paragraph',
          text: 'It is fed to dairy and beef cattle, to sheep, and — very commonly — to horses, where the same fermentable-fibre character suits the equine hindgut. Dried pulp takes up a great deal of water and swells substantially, a property that matters practically in how it is prepared and fed.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Not a feeding recommendation',
          text: 'This entry describes the material and why it is used. It gives no inclusion rates, nutrient values, soaking instructions, or species guidance. Rations are a matter for qualified nutritional advice and jurisdiction-specific feed regulation.',
        },
      ],
    },
    {
      id: 'quality-and-handling',
      heading: 'Quality and handling',
      body: [
        {
          type: 'paragraph',
          text: 'Buyers of dried pulp look at moisture, residual sugar, ash — which largely reports how much soil came in with the beet and survived washing — molasses content where the product is molassed, and pellet durability, since a pellet that turns to dust in transit is worth less on arrival. Pressed pulp is judged mainly on dry matter, freshness, and how well it was ensiled if it was.',
        },
        {
          type: 'paragraph',
          text: 'Dried pellets store and ship like any dense feed pellet: kept dry, since they are hygroscopic and will swell, spoil, and mould if wetted, and watched for storage insects. Pressed pulp is the opposite — it is a perishable wet feed that must be fed or ensiled promptly, and it will not wait.',
        },
      ],
    },
  ],
  primaryUses: ['feed'],
  majorQualityAttributes: [
    'Moisture content (or dry matter, for pressed pulp)',
    'Residual sugar',
    'Ash content and soil contamination',
    'Molasses content, where molassed',
    'Pellet durability',
    'Freedom from mould and spoilage',
  ],
  processContext:
    'Left in the diffuser after hot-water extraction of sugar from beet cossettes, then pressed and either sold wet for local feeding or dried and pelleted for storage and trade.',
  storageContext:
    'Dried pellets are stored dry and are hygroscopic, swelling and moulding if wetted; pressed pulp is perishable and must be fed or ensiled promptly.',
  commodityCodes: [
    {
      system: 'HS',
      code: '2303.20',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Beet-pulp, bagasse and other waste of sugar manufacture. The subheading groups the solid residues of both beet and cane processing.',
    },
  ],
  connections: [
    { type: 'crop', slug: 'sugar-beet' },
    { type: 'livestock', slug: 'cattle' },
    { type: 'livestock', slug: 'horses' },
  ],
  relatedTopics: [{ type: 'commodity-product', slug: 'beet-molasses' }],
  glossaryTerms: ['ruminant', 'forage'],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Beet pulp as a sugar-industry co-product and its feed use',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Beet pulp as a fermentable fibre feed and its handling in ruminant systems',
    },
    {
      sourceId: 'ec-agri',
      citedFor:
        'Beet processing co-product streams and pressed versus dried pulp markets',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global trade in dried pellets; pressed pulp is local to beet factory catchments. Feed-ingredient regulation is jurisdiction-specific.',
  limitations: [
    'This is a reference description of the product, not a feed formulation, nutritional specification, or feeding recommendation.',
    'No nutrient values, dry matter figures, inclusion rates, or swelling ratios are given — composition varies with factory, beet, and product form.',
    'Feed use and labelling are governed by jurisdiction-specific feed regulations.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Beet Pulp: Co-Product of Sugar Beet Processing',
    description:
      'Beet pulp as a co-product: the extracted cossette pressed and pelleted, why its fermentable fibre suits ruminants and horses, and its drying economics.',
    keywords: [
      'beet pulp',
      'beet pulp pellets',
      'molassed beet pulp',
      'fermentable fibre',
      'ruminant feed',
    ],
  },
  structuredData: { article: true },
};
