/**
 * Wave 43 — an owner for every parent taxon that two or more crop pages share.
 *
 * The queue is computed, not listed: any taxon with two or more crop identities
 * sitting under it has a scope those crops share, and that scope needs exactly
 * one owner. Six taxa qualified and none of them had one.
 *
 * Two of the six were blocking crops. Mandarin had been stopped in Wave 39 and
 * turnip and swede declined in Wave 40, each for the same reason stated three
 * different ways: publishing the child would leave the parent's shared facts in
 * no page at all. Those three, plus makrut lime, are published in this wave
 * because the parent scope now exists — which is the order the rule requires,
 * and the reverse of what a queue-driven wave would have done.
 *
 * The other four had no blocked child and are owned by records rather than
 * pages. A page has to earn a reader and "Beta vulgaris" earns nobody: the
 * crops under it are sugar beet, beetroot and chard, and anyone looking for
 * those wants those pages. Citrus is the opposite case and got a page.
 */
import type { TaxonScopeOwnership } from '@/types/crop-taxon-ownership';

export const TAXON_SCOPE_OWNERSHIP: readonly TaxonScopeOwnership[] = [
  {
    parentTaxon: 'Citrus × aurantium',
    ownerKind: 'crop-concept',
    ownerSlug: 'citrus',
    rationale:
      'A page, because "citrus" is a word readers use and the hybrid structure genuinely needs explaining: three of the corpus\'s citrus pages are cultivar groups of this one hybrid and none of them can say so without becoming a page about the genus. The concept page owns the scope and the concept record lists the children, so the claim is checked against the concept layer rather than asserted here.',
    publishedChildren: ['grapefruit', 'mandarin', 'orange'],
    taxonOnlyChildren: [],
    conceptLevelEvidence: [
      'The three-ancestor hybrid history, which is a property of the group and not of any one cultivar group within it.',
      'The naming instability between treatments — Citrus × sinensis and Citrus × paradisi sunk into this taxon — which reaches every child equally.',
    ],
    sourceIds: [
      'powo-plants-of-the-world-online',
      'wfo-world-flora-online',
      'faostat',
    ],
    reviewedAt: '2026-09-03',
  },
  {
    parentTaxon: 'Brassica oleracea',
    ownerKind: 'taxon-scope-record',
    ownerSlug: 'brassica-oleracea',
    rationale:
      'Six published crops sit under this species and no reader searches for it: they search for cabbage, broccoli, cauliflower, kale, kohlrabi or brussels sprouts. A species page would be a page nobody arrives at carrying facts that belong on six pages that people do arrive at. The Brassicaceae and Brassica hubs already give the group a route; what they cannot do is state a scope, which is what this record is for.',
    publishedChildren: [
      'broccoli',
      'brussels-sprouts',
      'cabbage',
      'cauliflower',
      'kale',
      'kohlrabi',
    ],
    taxonOnlyChildren: [],
    conceptLevelEvidence: [
      'Clubroot, which persists in soil for many years and constrains every crop in the species equally — it is a property of the rotation, not of any one cultivar group.',
      'The shared pest complex — flea beetles, diamondback moth, cabbage looper, aphids — which does not distinguish between the cultivar groups.',
      'That all six are one species and therefore give no rotational break from one another, which is the single most consequential thing the group shares.',
    ],
    sourceIds: [
      'powo-plants-of-the-world-online',
      'wfo-world-flora-online',
      'ahdb',
    ],
    reviewedAt: '2026-09-03',
  },
  {
    parentTaxon: 'Brassica rapa',
    ownerKind: 'taxon-scope-record',
    ownerSlug: 'brassica-rapa',
    rationale:
      'A record and not a species page, because the infraspecific taxonomy of this species is contested and the agricultural forms are not. Several classification systems are in current use, mixing subspecies, varieties and cultivar groups, and the literature calls for a recircumscription. Publishing a species page with cultivar groups hanging off it would assert one of those systems over the others. Pak choi is pak choi under all of them, so the forms are the pages and the species is a record.',
    publishedChildren: ['chinese-cabbage', 'pak-choi', 'turnip'],
    taxonOnlyChildren: ['turnip-rape'],
    conceptLevelEvidence: [
      'Clubroot and the brassica pest complex, shared with Brassica oleracea and with the species as a whole.',
      'The contested infraspecific classification itself, which is a fact about the species and must not be restated as a fact about any one form.',
      'Bolting after vernalisation, which is a property of the biennial species and bounds the sowing window of every form of it.',
    ],
    sourceIds: [
      'powo-plants-of-the-world-online',
      'wfo-world-flora-online',
      'cabi',
    ],
    reviewedAt: '2026-09-03',
  },
  {
    parentTaxon: 'Beta vulgaris',
    ownerKind: 'taxon-scope-record',
    ownerSlug: 'beta-vulgaris',
    rationale:
      'Sugar beet, beetroot and chard are one species selected in three directions — for stored sucrose, for a table root and for leaf and petiole — and the differences a reader needs are on those three pages. The species itself has no market, no calendar and no reader, so it is owned by a record.',
    publishedChildren: ['beetroot', 'sugar-beet', 'swiss-chard'],
    taxonOnlyChildren: [],
    conceptLevelEvidence: [
      'Bolting after vernalisation, which affects all three forms and is why each is sown to avoid cold in the seedling stage.',
      'Cercospora leaf spot and the beet cyst nematode, which do not distinguish between the forms and therefore constrain them as one rotation.',
    ],
    sourceIds: [
      'powo-plants-of-the-world-online',
      'wfo-world-flora-online',
      'cabi',
    ],
    reviewedAt: '2026-09-03',
  },
  {
    parentTaxon: 'Triticum turgidum',
    ownerKind: 'crop-concept',
    ownerSlug: 'wheat',
    rationale:
      'Durum and emmer are both subspecies of Triticum turgidum, and the wheat concept declared in Wave 41 already lists them as constituents. That concept is keyed to Triticum aestivum and covers wheat as a crop rather than as a genus, which is the arrangement that matches how the crop is grown, traded and searched for. Adding a second owner for the tetraploid species would give both crops two parents.',
    publishedChildren: ['durum-wheat', 'emmer'],
    taxonOnlyChildren: [],
    conceptLevelEvidence: [
      'That the wheats divide by ploidy and by whether the glume adheres, which is a statement about the group and is what the wheat concept exists to make.',
    ],
    sourceIds: [
      'powo-plants-of-the-world-online',
      'wfo-world-flora-online',
      'faostat',
    ],
    reviewedAt: '2026-09-03',
  },
  {
    parentTaxon: 'Capsicum annuum',
    ownerKind: 'taxon-scope-record',
    ownerSlug: 'capsicum-annuum',
    rationale:
      'Chili pepper and sweet pepper are two cultivar groups of one species divided by pungency and by use, and the chili pepper concept explicitly excludes sweet pepper — correctly, because a page about pungent peppers cannot carry a vegetable sold by size and colour. That leaves the species itself unowned, and a record is the honest owner: the split that matters to a reader is the one the two pages already make.',
    publishedChildren: ['chili-pepper', 'sweet-pepper'],
    taxonOnlyChildren: [],
    conceptLevelEvidence: [
      'That both are one species and interbreed freely, which is why seed production for either requires isolation from the other and why a pungent fruit can appear in a sweet crop.',
      'The shared solanaceous disease and pest complex, which gives no rotational break between them or from tomato, potato and eggplant.',
    ],
    sourceIds: [
      'powo-plants-of-the-world-online',
      'wfo-world-flora-online',
      'faostat',
    ],
    reviewedAt: '2026-09-03',
  },
];

export const OWNERSHIP_BY_TAXON = new Map(
  TAXON_SCOPE_OWNERSHIP.map((o) => [o.parentTaxon, o]),
);
