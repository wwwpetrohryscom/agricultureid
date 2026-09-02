import type { CropContent } from '@/types/content';

export const durumWheat: CropContent = {
  id: 'crop-durum-wheat',
  slug: 'durum-wheat',
  contentType: 'crop',
  title: 'Durum Wheat',
  scientificName: 'Triticum turgidum subsp. durum',
  alternativeNames: ['Macaroni wheat', 'Pasta wheat'],
  category: 'Cereal grain',
  subcategory: 'Tetraploid wheat',
  botanicalFamily: 'Poaceae (grass family)',
  lifecycle: 'Annual',
  summary:
    'Durum is the tetraploid wheat milled into semolina for pasta, couscous and bulgur. It is a different species from bread wheat, with its own quality grading built around kernel vitreousness and yellow pigment rather than baking performance.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Durum wheat is a tetraploid species carrying the A and B genomes, 28 chromosomes to bread wheat’s 42. The missing D genome is why the two behave so differently in a mill: durum endosperm fractures into coarse, angular semolina particles rather than fine flour, and its gluten forms a tenacious dough that extrudes and dries well but does not leaven into an open crumb.',
    },
    {
      type: 'paragraph',
      text: 'That single difference organises the entire crop. Durum is bought on kernel hardness and colour rather than on loaf volume, it is grown in drier and warmer environments than most bread wheat, and it moves through a separate trade with its own grades, contracts and price series.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Poaceae (grass family)' },
    { label: 'Ploidy', value: 'Tetraploid, 2n = 4x = 28, genomes AABB' },
    {
      label: 'Life cycle',
      value: 'Annual; spring and winter types both grown',
    },
    {
      label: 'Principal products',
      value: 'Semolina for pasta, couscous, bulgur and some regional breads',
    },
    {
      label: 'Share of world wheat',
      value: 'A small minority of total wheat area, traded as a distinct grain',
    },
    {
      label: 'Defining quality trait',
      value: 'Vitreous, amber, hard endosperm with high carotenoid pigment',
    },
  ],
  sections: [
    {
      id: 'not-bread-wheat',
      heading: 'Why durum is not simply a kind of bread wheat',
      body: [
        {
          type: 'paragraph',
          text: 'Common wheat arose when a tetraploid ancestor of durum hybridised with a wild goatgrass, adding the D genome. Everything the baking industry values — the extensibility that lets a dough trap gas and rise into a light crumb — traces largely to proteins encoded there. Durum never acquired them.',
        },
        {
          type: 'paragraph',
          text: 'Substituting one for the other therefore fails in both directions. Pasta made from bread-wheat flour loses firmness and clouds its cooking water; bread made from semolina is dense and close-textured. Agronomic advice, disease resistance ratings and grading standards written for bread wheat transfer to durum only where the underlying biology happens to coincide.',
        },
      ],
    },
    {
      id: 'where-grown',
      heading: 'Where it is grown',
      body: [
        {
          type: 'paragraph',
          text: 'Production concentrates in two very different settings. Around the Mediterranean — Italy, Spain, Greece, France, Turkey, Algeria, Morocco, Tunisia — durum is an autumn-sown crop maturing into a dry early summer, and the grain is consumed close to where it is grown. On the Canadian prairies and the northern plains of the United States it is a spring-sown crop of semi-arid short-season country, grown substantially for export.',
        },
        {
          type: 'paragraph',
          text: 'Kazakhstan, Mexico, India and Australia also grow durum in quantity. Because the Mediterranean and North American harvests are six months apart and both are exposed to drought, the traded price is unusually sensitive to a poor season in any one of a small number of origins.',
        },
      ],
    },
    {
      id: 'climate',
      heading: 'Climate and season',
      body: [
        {
          type: 'paragraph',
          text: 'Durum tolerates heat and drought during grain filling better than most bread wheat, which is part of why it persists in semi-arid regions. What it does not tolerate is rain at harvest: moisture on a ripe crop dulls the amber colour, can start sprouting, and in humid seasons opens the way to Fusarium infection.',
        },
        {
          type: 'paragraph',
          text: 'Winter types need vernalisation and are used where the winter is cold enough to be reliable but not cold enough to kill the stand; spring types dominate where it is not. The choice is a frost-risk decision made locally, not a quality decision.',
        },
      ],
    },
    {
      id: 'soils-rotation',
      heading: 'Soils and rotation',
      body: [
        {
          type: 'paragraph',
          text: 'Deep, well-structured soils that hold moisture through grain filling suit the crop best, and heavy clays and chernozems are both widely used. Waterlogging is poorly tolerated at any stage.',
        },
        {
          type: 'paragraph',
          text: 'Rotation matters more for durum than for many cereals because of disease pressure. Following a cereal, and especially following durum on durum, raises inoculum of the residue-borne leaf diseases and of Fusarium; a broadleaf or fallow break is the standard answer where the rotation allows one.',
        },
      ],
    },
    {
      id: 'nitrogen-protein',
      heading: 'Nitrogen and the protein target',
      body: [
        {
          type: 'paragraph',
          text: 'Protein content is a graded, priced trait in durum, not merely an agronomic outcome, and it interacts awkwardly with yield: the same nitrogen that raises yield dilutes protein unless supply is adequate late in the season. Growers aiming at a milling contract are managing a target, not a maximum.',
        },
        {
          type: 'paragraph',
          text: 'Protein also underpins vitreousness. A grain that finishes with too little nitrogen relative to its starch tends to fill with a starchy, opaque endosperm, and starchy kernels are downgraded even when the sample is otherwise sound.',
        },
      ],
    },
    {
      id: 'quality',
      heading: 'What the mill is buying',
      body: [
        {
          type: 'paragraph',
          text: 'Three traits carry most of the value. Vitreousness — a hard, translucent, amber endosperm — determines how cleanly the kernel breaks into semolina rather than flour. Carotenoid pigment, mostly lutein, gives the finished pasta its yellow colour, and is lost to oxidation during processing if lipoxygenase activity is high. Gluten strength governs whether cooked pasta stays firm or turns sticky.',
        },
        {
          type: 'paragraph',
          text: 'These traits are cultivar-determined and season-modified, which is why durum is bought on measured sample characteristics rather than on variety name alone.',
        },
      ],
    },
    {
      id: 'grading',
      heading: 'Grading and the trade',
      body: [
        {
          type: 'paragraph',
          text: 'Durum grading systems assess the proportion of hard vitreous kernels alongside the usual soundness factors, and downgrade for starchy or mottled grain, sprout damage and Fusarium-damaged kernels. The exact factors and their tolerances are set by national grading authorities and differ between origins.',
        },
        {
          type: 'paragraph',
          text: 'A durum sample and a bread-wheat sample are therefore not interchangeable even at equal protein: they are assessed against different standards and sold into different mills.',
        },
      ],
    },
    {
      id: 'diseases',
      heading: 'Disease pressure',
      body: [
        {
          type: 'paragraph',
          text: 'Fusarium head blight is the constraint that most often decides whether a durum crop is millable. Durum has generally offered fewer strong resistance sources than bread wheat, and because the disease leaves mycotoxin behind, an infected crop can be rejected outright rather than merely discounted.',
        },
        {
          type: 'paragraph',
          text: 'Leaf rust, stripe rust and the residue-borne blotches also matter, and rust races that are avirulent on local bread wheat cultivars are not necessarily avirulent on durum. Resistance ratings should be read from durum-specific trial data.',
        },
      ],
    },
    {
      id: 'cadmium',
      heading: 'Cadmium accumulation',
      body: [
        {
          type: 'paragraph',
          text: 'Durum takes up and accumulates more cadmium in the grain than bread wheat grown on the same soil. Because pasta wheat is consumed in quantity and regulatory maximum levels for cadmium in cereals apply to the traded grain, this is a marketing constraint and not only a food-safety one.',
        },
        {
          type: 'paragraph',
          text: 'Low-accumulating cultivars have been a deliberate breeding objective, particularly in Canada. Soil cadmium, pH and chloride all influence uptake, so the risk is site-specific and is managed with cultivar choice and, where required, testing.',
        },
      ],
    },
    {
      id: 'harvest-storage',
      heading: 'Harvest and storage',
      body: [
        {
          type: 'paragraph',
          text: 'The crop is combine-harvested and must be dried to a safe moisture for the storage period intended. Colour and vitreousness are preserved by getting the grain dry and keeping it dry; repeated wetting of a ripe or stored crop erodes exactly the traits the grade rewards.',
        },
        {
          type: 'paragraph',
          text: 'Segregation is important in stores that also hold bread wheat. Admixture is a grading defect in both directions, and durum is usually kept in its own bins and moved through its own handling path.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'fusarium-head-blight' },
    { type: 'plant-disease', slug: 'wheat-leaf-rust' },
    { type: 'plant-disease', slug: 'wheat-stripe-rust' },
    { type: 'plant-disease', slug: 'tan-spot' },
    { type: 'plant-disease', slug: 'stem-rust' },
  ],
  commonPests: [
    { type: 'pest', slug: 'hessian-fly' },
    { type: 'pest', slug: 'russian-wheat-aphid' },
    { type: 'pest', slug: 'cereal-leaf-beetle' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'chernozem' },
    { type: 'soil', slug: 'vertisol' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'commodity', slug: 'durum-wheat-grain' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'vernalization' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'machinery', slug: 'combine-harvester' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'barley' },
  ],
  glossaryTerms: ['crop-rotation'],
  geographicScope:
    'Global overview. Grading factors, sowing season and cadmium regulation are jurisdiction-specific and are not resolved here.',
  climateContext:
    'Semi-arid and Mediterranean cereal environments; tolerant of terminal heat and drought, intolerant of rain on the ripe crop.',
  limitations: [
    'Protein and vitreousness targets are set by individual contracts and national grading standards; no universal threshold applies.',
    'Fusarium head blight resistance ratings and rust race virulence are region-specific and change between seasons; consult current durum-specific trial data rather than bread-wheat ratings.',
    'Regulatory maximum levels for cadmium in cereals differ between jurisdictions and are not reproduced here.',
    'Production and trade statistics change annually and should be taken from primary datasets.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Durum wheat production and utilisation context',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'cimmyt',
      citedFor: 'Durum breeding, ploidy and quality traits',
    },
    { sourceId: 'cabi', citedFor: 'Durum disease and pest compendium data' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Durum Wheat',
    description:
      'Durum wheat as a distinct tetraploid species: how it differs from bread wheat, semolina quality, grading, Fusarium and cadmium constraints.',
    keywords: [
      'durum wheat',
      'Triticum turgidum subsp. durum',
      'semolina',
      'pasta wheat',
      'macaroni wheat',
    ],
  },
  structuredData: { article: true },
};
