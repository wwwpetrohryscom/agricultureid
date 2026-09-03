import type { CropContent } from '@/types/content';

export const citrus: CropContent = {
  id: 'crop-citrus',
  slug: 'citrus',
  contentType: 'crop',
  title: 'Citrus',
  scientificName: 'Citrus',
  alternativeNames: ['Citrus fruit'],
  category: 'Fruit crop',
  subcategory: 'Evergreen tree fruit complex',
  botanicalFamily: 'Rutaceae (rue family)',
  lifecycle: 'Perennial',
  summary:
    'Citrus is a crop whose species boundaries were drawn after the fact: almost everything grown is a hybrid of three ancestral species, and the treatment this corpus follows makes sweet orange, grapefruit and mandarin three cultivar groups of one hybrid rather than three species.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Nearly all cultivated citrus descends from three ancestral species — citron, pummelo and mandarin — crossed and back-crossed for long enough that the results resist being described as species at all. Sweet orange, grapefruit, lemon and lime are each the product of that history rather than plants that arrived independently.',
    },
    {
      type: 'paragraph',
      text: 'This page exists because the crops in the group share a scope that none of them can state alone. Orange, grapefruit and mandarin are cultivar groups of one hybrid taxon under the treatment followed here; lemon and lime are separate hybrids; pomelo is one of the ancestors. A page about any one of them has to assume that arrangement, and none of them is the place to explain it.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Rutaceae (rue family)' },
    {
      label: 'Ancestral species',
      value:
        'Citron, pummelo and mandarin — Citrus medica, C. maxima and C. reticulata',
    },
    {
      label: 'Treatment followed',
      value:
        'Plants of the World Online, which sinks sweet orange and grapefruit into Citrus × aurantium',
    },
    {
      label: 'Consequence',
      value:
        'Orange, grapefruit and mandarin are cultivar groups of one hybrid taxon',
    },
    {
      label: 'Propagation',
      value:
        'Grafting onto rootstocks; apomictic nucellar seed reproduces the mother clonally',
    },
    {
      label: 'Principal disease',
      value: 'Huanglongbing, which has reshaped citrus industries worldwide',
    },
  ],
  sections: [
    {
      id: 'three-ancestors',
      heading: 'Three ancestors, and everything else',
      body: [
        {
          type: 'paragraph',
          text: 'Citron, pummelo and mandarin are the species from which cultivated citrus was assembled. Sweet orange and grapefruit are pummelo–mandarin hybrids; cultivated mandarins carry pummelo introgression into the ancestral mandarin genome. A crop page for any of them is a page about a hybrid, and the ancestry is not a historical footnote — it is why the fruits grade into one another and why the names have never settled.',
        },
      ],
    },
    {
      id: 'one-hybrid',
      heading: 'Why orange and grapefruit share a name',
      body: [
        {
          type: 'paragraph',
          text: 'Under the treatment this corpus follows, Citrus × sinensis and Citrus × paradisi are synonyms of Citrus × aurantium, and what distinguishes sweet orange, grapefruit and mandarin is a cultivar group within that hybrid. That is not a downgrade of any of them: it is a statement that the differences are horticultural rather than at species rank, and it is why the three share a parent taxon that had no page of its own until this one.',
        },
      ],
    },
    {
      id: 'apomixis',
      heading: 'Seed that is a clone',
      body: [
        {
          type: 'paragraph',
          text: 'Most cultivated citrus produces nucellar embryos — seed formed from maternal tissue without fertilisation — so a seedling can be a clone of its mother rather than a cross. That property preserved hybrid clones through centuries of propagation by seed, and it is why a citrus cultivar can be very old and genetically unchanged. It also complicates breeding, because a breeder raising seedlings has to distinguish the rare sexual offspring from the many maternal copies.',
        },
        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'grafting',
      heading: 'Grown on other roots',
      body: [
        {
          type: 'paragraph',
          text: 'Commercial citrus is grafted: the scion supplies the fruit and the rootstock supplies vigour, cold tolerance, soil adaptation and disease response. Rootstock choice is a separate decision from cultivar choice and often the more consequential one, and rootstock breeding is where much of the response to huanglongbing has been concentrated.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'hlb',
      heading: 'Huanglongbing',
      body: [
        {
          type: 'paragraph',
          text: 'Citrus greening has spread through most major producing regions and has removed orchards, cultivars and in places whole industries. It is transmitted by psyllids, there is no cure for an infected tree, and management is a combination of clean nursery material, vector control and tolerant rootstocks. No page about a citrus crop can be written without it.',
        },
      ],
    },
    {
      id: 'names',
      heading: 'Names that resolve to different plants',
      body: [
        {
          type: 'paragraph',
          text: '"Tangerine", "clementine", "satsuma" and "mandarin" overlap in markets and in law; "lime" names several unrelated hybrids; "kaffir lime" is a species grown for leaves rather than fruit and its common name is a slur in southern Africa. Matching a citrus record to a plant requires resolving the name before anything else, which is why citrus names are resolved through a name register before they are used rather than taken at face value.',
        },
      ],
    },
    {
      id: 'scope',
      heading: 'What this page covers and does not',
      body: [
        {
          type: 'paragraph',
          text: 'This page covers citrus as a crop group and the naming and hybrid structure the group shares. It does not carry the agronomy of any individual citrus crop. Orange, grapefruit, mandarin, lemon, lime and pomelo are each described separately, and the market and calendar evidence is attached to them rather than to this page — which is the point of the separation, because a series measured on oranges is not a series about citrus.',
        },
      ],
    },
    {
      id: 'trade',
      heading: 'A group the trade measures separately',
      body: [
        {
          type: 'paragraph',
          text: 'Citrus statistics are reported crop by crop — oranges, lemons and limes, grapefruit, tangerines — rather than as one commodity, so there is no citrus series to attach here. That separation in the data is the opposite of the taxonomy, where the boundaries collapse, and both facts are true at once.',
        },
        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'climate',
      heading: 'Where citrus is grown',
      body: [
        {
          type: 'paragraph',
          text: 'Citrus is subtropical: it needs warmth without hard frost, and the frost line rather than the tropics is what bounds commercial production. Within that band, fruit quality responds to the difference between day and night temperature, which is why the same cultivar behaves differently in a Mediterranean climate and a humid subtropical one.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'huanglongbing' },
    { type: 'plant-disease', slug: 'citrus-canker' },
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'gray-mold' },
  ],
  commonPests: [
    { type: 'pest', slug: 'psyllids' },
    { type: 'pest', slug: 'fruit-flies' },
    { type: 'pest', slug: 'scale-insects' },
    { type: 'pest', slug: 'spider-mites' },
    { type: 'pest', slug: 'aphids' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'alluvial-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'zinc' },
    { type: 'nutrient', slug: 'magnesium' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'humidity' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'farming-system', slug: 'precision-agriculture' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'irrigation-method', slug: 'micro-sprinkler-irrigation' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'waxing' },
    { type: 'post-harvest', slug: 'degreening' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'orange' },
    { type: 'crop', slug: 'grapefruit' },
    { type: 'crop', slug: 'lemon' },

    { type: 'crop', slug: 'mandarin' },
    { type: 'crop', slug: 'lime' },
    { type: 'crop', slug: 'pomelo' },
    { type: 'crop', slug: 'kaffir-lime' },
  ],
  glossaryTerms: ['perennial-crop', 'cultivar'],
  geographicScope:
    'Subtropical regions worldwide — the Mediterranean basin, Brazil, the United States, China, South Africa, Australia and Southeast Asia.',
  climateContext:
    'Subtropical evergreen; bounded by frost rather than by heat, with fruit quality responding to the day–night temperature difference.',
  limitations: [
    'Species boundaries within Citrus differ between treatments and have changed repeatedly. Names published as species by a source may resolve to cultivar groups here.',
    'This page carries no crop-specific agronomy; each citrus crop has its own page and its own evidence.',
    'Huanglongbing status and permitted controls differ by jurisdiction and are not reproduced here.',
  ],
  sourceReferences: [
    { sourceId: 'wfo-world-flora-online', citedFor: 'Genus circumscription' },
    {
      sourceId: 'powo-plants-of-the-world-online',
      citedFor: 'Accepted names and the Citrus × aurantium circumscription',
    },
    { sourceId: 'cabi', citedFor: 'Citrus compendium data' },
    { sourceId: 'fao', citedFor: 'Citrus production context' },
    { sourceId: 'eppo', citedFor: 'Huanglongbing regulatory status' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Citrus',
    description:
      'Citrus as a crop group: three ancestral species, why orange and grapefruit are cultivar groups of one hybrid, apomictic seed, grafting and huanglongbing.',
    keywords: [
      'citrus',
      'Citrus',
      'citrus hybrid complex',
      'citrus taxonomy',
      'huanglongbing',
    ],
  },
  structuredData: { article: true },
};
