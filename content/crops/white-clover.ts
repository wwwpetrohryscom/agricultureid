import type { CropContent } from '@/types/content';

export const whiteClover: CropContent = {
  id: 'crop-white-clover',
  slug: 'white-clover',
  contentType: 'crop',
  title: 'White Clover',
  scientificName: 'Trifolium repens',
  alternativeNames: ['Dutch clover', 'Ladino clover'],
  category: 'Forage crop',
  subcategory: 'Stoloniferous perennial legume',
  botanicalFamily: 'Fabaceae (legume family)',
  lifecycle: 'Perennial',
  summary:
    'White clover is the legume of grazed pasture. It spreads by stolons rather than from a crown, which lets it survive close and repeated grazing that would end a taprooted legume, and it supplies fixed nitrogen to the grass growing with it.',
  introduction: [
    {
      type: 'paragraph',
      text: 'White clover is not managed as a crop in its own right so much as a component of a sward. It is sown with grass, grazed with grass, and judged by what proportion of the sward it holds — and the whole of its agronomy follows from one structural fact: it grows along the ground on stolons, rooting at the nodes, rather than upward from a crown.',
    },
    {
      type: 'paragraph',
      text: 'That is what makes it the pasture legume. A grazing animal that bites into a crown-forming legume removes the growing points; a grazing animal working over a stoloniferous one leaves a network of rooted stems at ground level from which the plant regrows.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Fabaceae (legume family)' },
    {
      label: 'Growth form',
      value: 'Stoloniferous perennial, rooting at the nodes',
    },
    {
      label: 'Persistence unit',
      value: 'The stolon network, not the individual plant',
    },
    {
      label: 'Nitrogen',
      value: 'Fixed in symbiosis with Rhizobium leguminosarum bv. trifolii',
    },
    {
      label: 'Cultivar descriptor',
      value:
        'Leaf size class — small, medium, large — matched to grazing intensity',
    },
    { label: 'Typical use', value: 'Grazed pasture in mixture with grass' },
  ],
  sections: [
    {
      id: 'stolons',
      heading: 'The stolon is the plant',
      body: [
        {
          type: 'paragraph',
          text: 'A white clover stand is better understood as one spreading network than as a population of individuals. Stolons creep across the soil surface, root at the nodes, branch, and eventually the older connecting sections die, leaving what were branches as independent plants. A sward can therefore persist for many years without a single original plant surviving in it.',
        },
        {
          type: 'paragraph',
          text: 'Under grazing, persistence is a question of how much stolon is present rather than how much leaf. A sward that looks thin in autumn but carries a dense stolon base will recover; one grazed so hard that the stolon network is broken up will not, whatever the spring weather does.',
        },
      ],
    },
    {
      id: 'leaf-size',
      heading: 'Leaf size is the selection decision',
      body: [
        {
          type: 'paragraph',
          text: 'Cultivars are grouped by leaf size, and the classes correspond to different trade-offs rather than to quality. Small-leaved types produce many stolons and tolerate hard, frequent grazing; large-leaved types produce more yield per unit of stolon and suit lax grazing or cutting, but thin out under close continuous stocking.',
        },
        {
          type: 'paragraph',
          text: 'Matching leaf size to the grazing system is the primary cultivar decision, and it is a decision about the animal as much as the plant. Sheep graze closer than cattle, and a sward that persists under cattle can be lost under sheep at the same stocking pressure.',
        },
      ],
    },
    {
      id: 'nitrogen',
      heading: 'Fixed nitrogen, and what suppresses it',
      body: [
        {
          type: 'paragraph',
          text: 'White clover fixes atmospheric nitrogen in symbiosis with Rhizobium bacteria, meeting its own requirement and supplying the companion grass through root turnover, decaying stolon and returned dung and urine. In a well-balanced sward this substitutes for a substantial part of a fertiliser programme.',
        },
        {
          type: 'paragraph',
          text: 'Applied nitrogen works against that in two ways at once. It suppresses fixation directly, and it makes the grass grow faster, which shades the clover at ground level. A heavily fertilised ryegrass sward loses its clover, so the nitrogen decision and the clover decision cannot be made separately.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment',
      body: [
        {
          type: 'paragraph',
          text: 'Seed is very small and must be sown shallow into a firm seedbed. The seedling is slow relative to a companion grass, so the grass sowing rate is normally reduced where clover content matters — establishing the clover is harder than establishing the grass, and a vigorous grass at a full rate will win.',
        },
        {
          type: 'paragraph',
          text: 'Where clover has been grown before, the appropriate rhizobia are usually already present. On reclaimed or long-arable ground with no clover history, inoculated seed is the inexpensive way to avoid a stand that establishes and then goes pale for want of a symbiont.',
        },
      ],
    },
    {
      id: 'grazing',
      heading: 'Grazing management',
      body: [
        {
          type: 'paragraph',
          text: 'White clover tolerates close grazing better than any other common forage legume, and it still persists best when given recovery periods rather than grazed continuously to a low residual. The practical target is a sward in which the clover is neither shaded out by ungrazed grass nor stripped back to bare stolon.',
        },
        {
          type: 'paragraph',
          text: 'Clover content varies through the season by nature. It is lowest in early spring, when cool soils suit grass better, and rises through summer; judging a sward by its clover content in April is judging it at the point it looks worst.',
        },
      ],
    },
    {
      id: 'bloat',
      heading: 'Bloat',
      body: [
        {
          type: 'paragraph',
          text: 'White clover is a bloat risk for ruminants. It contains little condensed tannin, and rapidly fermenting soluble protein released in the rumen can produce a stable foam that the animal cannot eructate. The risk is highest on lush, high-clover swards grazed by hungry stock.',
        },
        {
          type: 'paragraph',
          text: 'Management is a matter of intake control rather than of avoiding clover: filling animals before turnout, avoiding sudden moves onto a high-clover sward, and using anti-foaming agents where local practice does. This is a categorical hazard of the crop, not a reason to exclude it.',
        },
      ],
    },
    {
      id: 'pests',
      heading: 'What thins a stand',
      body: [
        {
          type: 'paragraph',
          text: 'Sclerotinia crown and stem rot kills plants over winter in wet conditions, and stem eelworm damages the growing points on the stolon, which is the tissue the stand depends on. Slugs remove seedlings during establishment and are most damaging in direct-drilled swards.',
        },
        {
          type: 'paragraph',
          text: 'Because the stolon network is what persists, damage to stolons matters more than damage to leaf. A stand can lose most of its visible leaf to a pest and recover; one that loses stolon does not.',
        },
      ],
    },
    {
      id: 'seed',
      heading: 'Grown for seed',
      body: [
        {
          type: 'paragraph',
          text: 'Seed production is concentrated in regions with reliably dry summers, and the crop is managed to encourage flowering rather than vegetative spread — the opposite of grazing management. Bees are required: white clover florets are shallower than red clover and are worked efficiently by honeybees.',
        },
        {
          type: 'paragraph',
          text: 'Seed shatters readily when ripe, and harvest timing is a compromise between shattering losses and immature seed. Crops are often desiccated to bring the stand to an even moisture before combining.',
        },
      ],
    },
    {
      id: 'role',
      heading: 'Where it sits among forage legumes',
      body: [
        {
          type: 'paragraph',
          text: 'Alfalfa and red clover are cut crops with deep taproots and short productive lives; white clover is a grazed crop with a shallow, spreading habit and no fixed lifespan. The three are not substitutes, and a farm can reasonably grow all of them for different fields and different purposes.',
        },
        {
          type: 'paragraph',
          text: 'The comparison that matters for white clover is not against those but against applied nitrogen, because that is the input it replaces and the input that removes it.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'sclerotinia' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'root-rot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'slugs' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'weevils' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'clay-soil' },
    { type: 'soil', slug: 'gleysol' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'climate', slug: 'growing-season' },
    { type: 'climate', slug: 'drought' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'machinery', slug: 'seed-drill' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'red-clover' },
    { type: 'crop', slug: 'perennial-ryegrass' },
    { type: 'crop', slug: 'alfalfa' },
  ],
  glossaryTerms: ['forage', 'perennial-crop', 'ruminant'],
  geographicScope:
    'Temperate grassland regions worldwide. Cultivar leaf-size recommendations and grazing targets are national.',
  climateContext:
    'Cool temperate; shallow-rooted and less drought-tolerant than taprooted forage legumes, tolerant of close defoliation.',
  limitations: [
    'Clover content in a sward varies seasonally and between years; a single observation is not a measure of stand condition.',
    'Nitrogen substitution rates depend on clover content, soil and management and are set by national guidance rather than by a universal figure.',
    'Bloat risk is treated here as categorical. Susceptibility varies with animal, sward and feeding management, and local veterinary guidance governs.',
    'Leaf-size classes are national conventions and are not directly comparable between recommended lists.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Forage legume production and pasture systems',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Grazing management and clover in grass swards',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Trifolium repens compendium data' },
    { sourceId: 'usda-ars', citedFor: 'Forage legume and rhizobia research' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'White Clover',
    description:
      'Trifolium repens as a grazed forage legume: stolon-based persistence, leaf-size classes, nitrogen fixation and what suppresses it, bloat risk.',
    keywords: [
      'white clover',
      'Trifolium repens',
      'stolon',
      'pasture legume',
      'nitrogen fixation',
    ],
  },
  structuredData: { article: true },
};
