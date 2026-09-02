import type { CropContent } from '@/types/content';

export const lowbushBlueberry: CropContent = {
  id: 'crop-lowbush-blueberry',
  slug: 'lowbush-blueberry',
  contentType: 'crop',
  title: 'Lowbush Blueberry',
  scientificName: 'Vaccinium angustifolium',
  alternativeNames: ['Wild blueberry', 'Sweet lowbush blueberry'],
  category: 'Fruit crop',
  subcategory: 'Managed native fruit stand',
  botanicalFamily: 'Ericaceae (heath family)',
  lifecycle: 'Perennial',
  summary:
    'Lowbush blueberry is not planted. Commercial fields are native stands that were already there, managed on a two-year cycle in which the whole field is mown or burned to the ground and cropped only in alternate years.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Almost every fruit crop begins with planting. Lowbush blueberry does not. Commercial fields in Maine and Atlantic Canada are naturally occurring stands on glacial outwash plains and uplands, cleared of competing vegetation and brought into management rather than established from nursery stock.',
    },
    {
      type: 'paragraph',
      text: 'Management runs on a two-year cycle. After harvest the field is pruned to the ground by mowing or burning; the following season is entirely vegetative; the season after that the same ground flowers and crops. Half the acreage is out of production at any time by design.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Ericaceae (heath family)' },
    {
      label: 'Origin of fields',
      value: 'Managed native stands, not planted orchards',
    },
    {
      label: 'Production cycle',
      value: 'Two years: one prune year, one crop year',
    },
    {
      label: 'Pruning method',
      value: 'Mown or burned to ground level after harvest',
    },
    {
      label: 'Genetic structure',
      value: 'A mosaic of many wild clones within a single field',
    },
    {
      label: 'Principal regions',
      value: 'Maine, and the Atlantic provinces and Quebec in Canada',
    },
  ],
  sections: [
    {
      id: 'not-planted',
      heading: 'A crop that was already there',
      body: [
        {
          type: 'paragraph',
          text: 'Fields are developed by removing trees and competing vegetation from land that already carries native lowbush blueberry, and the plants spread by rhizome to fill the ground. There is no planting density, no cultivar decision and no replant date, which puts this crop outside the framework almost every other fruit crop is described in.',
        },
      ],
    },
    {
      id: 'two-year',
      heading: 'The two-year cycle',
      body: [
        {
          type: 'paragraph',
          text: 'After the August harvest, plants are pruned to ground level by flail mowing or by burning. The next full season produces stems, leaves and buds with no crop. The season after that the field flowers and is harvested. Growers therefore operate two blocks out of phase so that something is cropping every year.',
        },
      ],
    },
    {
      id: 'clonal-mosaic',
      heading: 'A field of many clones',
      body: [
        {
          type: 'paragraph',
          text: 'Because the stand is wild, a single field is a mosaic of genetically distinct clones that differ in berry size, colour, ripening date and vigour, and the patchwork is visible from the air. Uniformity that a planted crop takes for granted does not exist here, and harvest date is a compromise across clones.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'pollination',
      heading: 'Heavily pollinator-dependent',
      body: [
        {
          type: 'paragraph',
          text: 'The crop needs intensive insect pollination during a short bloom, and commercial fields import managed bees at high stocking rates alongside the native bumblebees and solitary bees that the surrounding landscape supports. Pollination supply, not flower number, is frequently the yield-limiting step.',
        },
      ],
    },
    {
      id: 'acid-soil',
      heading: 'Acid, low-fertility ground',
      body: [
        {
          type: 'paragraph',
          text: 'Lowbush blueberry occupies strongly acid, sandy, low-fertility soils where few crops compete, and it depends on ericoid mycorrhizal associations for nutrient uptake. Correcting those soils towards a conventional fertility target works against the crop rather than for it.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'weeds',
      heading: 'Weeds are the central management problem',
      body: [
        {
          type: 'paragraph',
          text: 'Because the crop is low, slow and cannot be cultivated between rows, perennial weeds that tolerate the same acid ground are the main threat, and they are managed across the prune year rather than during cropping. Research attention in the crop is disproportionately weed research for this reason.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Raked and machine-harvested',
      body: [
        {
          type: 'paragraph',
          text: 'Fruit is harvested with hand rakes on rough or stony ground and with mechanical harvesters where terrain allows, and the stony glacial ground that suits the plant is what keeps hand raking in use. Almost all of the crop is frozen rather than sold fresh.',
        },
      ],
    },
    {
      id: 'not-highbush',
      heading: 'Not the same crop as highbush blueberry',
      body: [
        {
          type: 'paragraph',
          text: 'Highbush blueberry is a different species, planted in rows as bushes and sold largely fresh. Lowbush is a managed native ground cover sold largely frozen. Yield figures, agronomy and market data for one do not describe the other, and the shared word "blueberry" hides that.',
        },
      ],
    },
    {
      id: 'frost',
      heading: 'Frost during bloom',
      body: [
        {
          type: 'paragraph',
          text: 'Because the plants are only a few centimetres tall, bloom sits in the coldest air layer on a still night, and radiation frost damage is worse than for a taller crop on the same site. Field selection favours slopes and air drainage for exactly this reason.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'gray-mold' },
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
  ],
  commonPests: [
    { type: 'pest', slug: 'spotted-wing-drosophila' },
    { type: 'pest', slug: 'fruit-flies' },
    { type: 'pest', slug: 'leaf-rollers' },
    { type: 'pest', slug: 'aphids' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'podzol' },
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'peat-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'iron' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'chilling-requirement' },
    { type: 'climate', slug: 'growing-season' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'field-heat-removal' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'blueberry' },
    { type: 'crop', slug: 'cranberry' },
    { type: 'crop', slug: 'blackcurrant' },
  ],
  glossaryTerms: ['perennial-crop'],
  geographicScope:
    'Maine in the United States, and Nova Scotia, New Brunswick, Prince Edward Island, Newfoundland and Quebec in Canada.',
  climateContext:
    'Cold temperate; strongly acid soils, a short season and radiation frost at bloom are the defining conditions.',
  limitations: [
    'Pruning method and cycle timing vary between regions and operations; the two-year cycle is the general pattern rather than a fixed schedule.',
    'Yields vary widely between fields because clone composition differs, and field-level figures are not transferable.',
    'This page describes the managed lowbush crop and not highbush blueberry, which is a different species and system.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-plants',
      citedFor: 'Classification, nomenclature and native distribution',
    },
    { sourceId: 'umn-extension', citedFor: 'Blueberry production guidance' },
    {
      sourceId: 'ca-ns-agri',
      citedFor: 'Nova Scotia wild blueberry production',
    },
    { sourceId: 'usda-nass', citedFor: 'United States production statistics' },
    { sourceId: 'cabi', citedFor: 'Vaccinium angustifolium compendium data' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Lowbush Blueberry',
    description:
      'Vaccinium angustifolium as a crop: managed native stands rather than plantings, the two-year prune and crop cycle, clonal mosaics and pollination demand.',
    keywords: [
      'lowbush blueberry',
      'wild blueberry',
      'Vaccinium angustifolium',
      'managed native stand',
      'two-year pruning cycle',
    ],
  },
  structuredData: { article: true },
};
