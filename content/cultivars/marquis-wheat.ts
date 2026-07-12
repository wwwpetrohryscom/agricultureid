import type { CultivarContent } from '@/types/content';

export const marquisWheat: CultivarContent = {
  id: 'marquis-wheat',
  slug: 'marquis-wheat',
  contentType: 'cultivar',
  title: 'Marquis',
  acceptedName: 'Marquis',
  category: 'Wheat cultivar',
  parentCrop: { type: 'crop', slug: 'wheat' },
  botanicalTaxon: 'Triticum aestivum',
  cultivarType: 'Cultivar',
  breedingType: 'Cross-breeding (pedigree selection)',
  originCountry: 'Canada',
  originRegion:
    'Ottawa, Ontario (Central Experimental Farm, Dominion Experimental Farms)',
  yearReleased: '1909',
  breederOrInstitution:
    'Charles E. Saunders, Dominion Experimental Farms (Central Experimental Farm, Ottawa)',
  registrationStatus: 'historical',
  registrationAsOf: '2026-07-12',
  registryReferences: [
    {
      registry: 'USDA GRIN — National Small Grains Collection',
      sourceId: 'usda-grin',
      jurisdiction: 'United States',
      asOf: '2026-07-12',
      note: 'Historic hard red spring wheat conserved as germplasm; presence in a genebank reflects conservation, not current commercial registration.',
    },
  ],
  maturityClass: 'Early',
  growthHabit: 'Spring',
  intendedUse: [
    'Bread wheat (milling and bread flour)',
    'Historic foundation cultivar and breeding parent for North American hard red spring wheat',
  ],
  climateAdaptation:
    'Selected for the short growing seasons of the northern North American plains; its earlier maturity relative to the cultivars it replaced helped the crop ripen ahead of autumn frost.',
  qualityTraits: [
    'Hard red spring wheat with strong gluten and good bread-baking quality',
    'Early maturing relative to the North American spring wheats of its era',
  ],
  summary:
    'Marquis is a historic Canadian hard red spring bread wheat, selected in the early twentieth century for its early maturity and bread-baking quality, that became the dominant spring wheat of the North American plains and a foundation parent for later cultivars.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Marquis is a hard red spring bread wheat (Triticum aestivum) developed within the Dominion Experimental Farms program in Canada and selected by the Dominion Cerealist Charles E. Saunders. It arose from a cross between Hard Red Calcutta and Red Fife and was distributed to growers from 1909.',
    },
    {
      type: 'paragraph',
      text: 'Prized for maturing earlier than the cultivars it replaced and for its milling and bread-baking quality, Marquis was rapidly adopted across the Canadian Prairies and the northern United States and became one of the most widely grown spring wheats of the early twentieth century. It is now grown mainly as a heritage grain and is best known as a landmark in wheat breeding history.',
    },
  ],
  keyFacts: [
    { label: 'Crop', value: 'Wheat (bread wheat, Triticum aestivum)' },
    { label: 'Type', value: 'Hard red spring wheat cultivar' },
    { label: 'Origin', value: 'Canada (Central Experimental Farm, Ottawa)' },
    { label: 'Parentage', value: 'Hard Red Calcutta × Red Fife' },
    { label: 'Distributed to growers', value: '1909' },
    { label: 'Growth habit', value: 'Spring' },
    { label: 'Notable for', value: 'Early maturity and bread-baking quality' },
    {
      label: 'Registry status',
      value: 'Historical (heritage cultivar; conserved as germplasm)',
    },
  ],
  sections: [
    {
      id: 'history-and-development',
      heading: 'History and development',
      body: [
        {
          type: 'paragraph',
          text: 'Marquis was developed within the Canadian Dominion Experimental Farms program, whose cereal work was initiated under William Saunders and carried forward by his son Charles E. Saunders as Dominion Cerealist. It originated from a cross of Hard Red Calcutta with the older Canadian cultivar Red Fife, from which a superior early-maturing line was selected in the first years of the twentieth century.',
        },
        {
          type: 'paragraph',
          text: 'Seed was multiplied and distributed to farmers from 1909, first to a few hundred growers and then far more widely over the following seasons. Within roughly a decade Marquis had become the dominant spring wheat across large areas of the Canadian Prairies and the northern United States plains.',
        },
      ],
    },
    {
      id: 'classification-and-characteristics',
      heading: 'Classification and characteristics',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Species',
              description: 'Triticum aestivum (hexaploid bread wheat)',
            },
            { term: 'Market class', description: 'Hard red spring wheat' },
            { term: 'Growth habit', description: 'Spring (sown after winter)' },
            {
              term: 'Maturity',
              description:
                'Early; noted for ripening earlier than the spring wheats it displaced',
            },
            {
              term: 'End use',
              description:
                'Milling for bread flour; strong-gluten baking quality',
            },
          ],
        },
      ],
    },
    {
      id: 'legacy-and-use',
      heading: 'Legacy and use',
      body: [
        {
          type: 'paragraph',
          text: 'Marquis is regarded as a landmark cultivar in the history of North American wheat breeding and served as a parent for numerous later hard red spring wheats. Today it is grown chiefly as a heritage grain by specialty millers and bakers rather than as a mainstream commercial variety.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Descriptions here summarize documented history and grain characteristics. Agronomic performance depends on local climate, soils, and season and is not represented by universal values.',
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'growing-season' },
  ],
  geographicScope:
    'Documented Canadian hard red spring wheat cultivar historically grown across the North American plains; adaptation and performance are region- and season-specific.',
  climateContext:
    'Spring bread wheat bred for the short growing seasons of the northern North American plains.',
  limitations: [
    'Adaptation and trait notes are region- and season-specific, and performance varies by environment.',
    'Marquis is now a heritage cultivar; its current commercial registration status is not asserted here, and the release date reflects when seed was first distributed to growers.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-grin',
      citedFor:
        'Hard red spring wheat germplasm accession and characterization',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Role of Marquis in North American hard red spring wheat improvement',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General history of Marquis wheat (secondary)',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Marquis (wheat cultivar)',
    description:
      'Marquis, the historic Canadian hard red spring bread wheat selected by Charles Saunders and distributed from 1909: origin, parentage, and legacy.',
    keywords: [
      'Marquis wheat',
      'hard red spring wheat',
      'Charles Saunders',
      'heritage wheat cultivar',
    ],
  },
  structuredData: { article: true },
};
