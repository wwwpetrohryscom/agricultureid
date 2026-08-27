import type { ExtensionInstitution } from '@/types/extension';

/**
 * Publishers whose public extension mandate was checked, not assumed.
 *
 * A .edu domain proves nothing: a university research blog and a Cooperative
 * Extension service look alike from the outside. Each entry below records what
 * kind of body this is and the statement that establishes it, read from the
 * institution's own pages during the Wave 12 verification pass.
 *
 * `responsibleAuthorityId` is absent throughout, and that is correct: none of
 * these three is a government authority in the Wave 1–4 registry. Two are
 * land-grant universities and one is a levy board. Linking them to a
 * department of agriculture would invent a reporting line that does not exist.
 */
export const EXTENSION_INSTITUTIONS: ExtensionInstitution[] = [
  {
    id: 'psu-extension',
    officialName: 'Penn State Extension',
    mandate: 'land-grant-cooperative-extension',
    mandateBasis:
      'Penn State College of Agricultural Sciences describes Penn State Extension as "Building on the land-grant tradition". The extension site\'s own About page does not restate the land-grant basis, so the college page is the evidence used.',
    countryCode: 'USA',
    jurisdictionId: 'US-PA',
    homepageUrl: 'https://extension.psu.edu/',
    sourceReferences: ['ext-psu-extension'],
    lastVerifiedAt: '2026-08-27',
  },
  {
    id: 'ncsu-extension',
    officialName: 'NC State Extension',
    mandate: 'land-grant-cooperative-extension',
    mandateBasis:
      'NC State Extension states that NC State University and N.C. A&T State University run Cooperative Extension, staffing local offices in all 100 North Carolina counties and with the Eastern Band of Cherokee Indians.',
    countryCode: 'USA',
    jurisdictionId: 'US-NC',
    homepageUrl: 'https://www.ces.ncsu.edu/',
    sourceReferences: ['ext-ncsu-extension'],
    lastVerifiedAt: '2026-08-27',
  },
  {
    id: 'ahdb',
    officialName: 'Agriculture and Horticulture Development Board',
    mandate: 'statutory-levy-body',
    mandateBasis:
      'AHDB describes itself as "the independent, impartial public body that unlocks success in British agriculture", funded by a levy collected from British producers, with knowledge exchange among its stated purposes.',
    countryCode: 'GBR',
    homepageUrl: 'https://ahdb.org.uk/',
    sourceReferences: ['ext-ahdb'],
    lastVerifiedAt: '2026-08-27',
  },
];
