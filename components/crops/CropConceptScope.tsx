import Link from 'next/link';
import { CONCEPT_BY_SLUG } from '@/data/crop-identity/concepts';
import { HOMONYM_RESOLUTIONS } from '@/data/crop-identity/homonyms';
import { CONCEPT_KIND_MEANING } from '@/types/crop-concepts';
import { CROP_TAXA_PATH } from '@/lib/crops/paths';
import { constituentDestination } from '@/lib/crops/identity';

const HELD_LABEL: Record<string, string> = {
  'own-identity': 'held as a verified taxon',
  'cultivar-group-only': 'held only as a cultivar group',
  'not-held': 'not held by this corpus',
};

/**
 * What the reader gets when they follow the link, said before they follow it.
 *
 * A held taxon with no page of its own is listed in the verified-taxa
 * register. Sending someone there under the same wording as a link to a full
 * page would be the same mistake in nicer clothes, so the destination is
 * named.
 */
const REGISTER_SUFFIX = ' — listed in the taxa register, no page of its own';

/**
 * What this page covers, when that is more than one plant.
 *
 * A reader on the cotton page is entitled to know that "cotton" is four
 * species, that one of them has its own page and the others do not, and that
 * the page they are reading is therefore about a trade name rather than a
 * plant. Sixteen pages in this corpus are in that position and none of them
 * said so; the scope lived in an internal note.
 *
 * The `heldAs` column is the part that must not be softened. Saying a species
 * is "not held" on a public page is uncomfortable and it is the truth: two of
 * the macadamia species are named here precisely because the corpus does not
 * hold them, and a reader looking for one should not be left hunting.
 */
function ConstituentHolding({
  heldAs,
  identitySlug,
}: {
  heldAs: string;
  identitySlug?: string;
}) {
  const label = HELD_LABEL[heldAs] ?? heldAs;
  if (heldAs === 'not-held') return <>{label}</>;
  const dest = constituentDestination(identitySlug);
  if (dest.kind === 'unheld') return <>{label}</>;
  return (
    <>
      <Link href={dest.href} className="text-forest-700 hover:underline">
        {label}
      </Link>
      {dest.kind === 'register' ? (
        <span className="text-ink-600">{REGISTER_SUFFIX}</span>
      ) : null}
    </>
  );
}

export function CropConceptScope({ slug }: { slug: string }) {
  const concept = CONCEPT_BY_SLUG.get(slug);
  if (!concept) return null;

  return (
    <section
      className="mt-8 rounded-lg border border-ink-200 bg-parchment-50 p-5"
      aria-label="What this page covers"
    >
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h2 className="font-serif text-lg text-forest-900">
          What this page covers
        </h2>
        <span className="rounded-full border border-clay-300 bg-clay-50 px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-wide text-clay-800">
          {concept.kind.replace(/-/g, ' ')}
        </span>
      </div>

      <p className="mt-3 text-ink-800">{concept.scopeStatement}</p>
      <p className="mt-2 text-sm text-ink-600">
        {CONCEPT_KIND_MEANING[concept.kind]}
      </p>

      <table className="mt-4 w-full border-collapse text-sm">
        <caption className="sr-only">
          Taxa covered by this page, and whether this corpus holds each of them
        </caption>
        <thead>
          <tr className="border-b border-ink-200 text-left">
            <th scope="col" className="py-1 pr-3 font-medium text-ink-600">
              Taxon
            </th>
            <th scope="col" className="py-1 pr-3 font-medium text-ink-600">
              In this corpus
            </th>
            <th scope="col" className="py-1 font-medium text-ink-600">
              Role
            </th>
          </tr>
        </thead>
        <tbody>
          {concept.constituents.map((t) => (
            <tr key={t.scientificName} className="border-b border-ink-100">
              <td className="py-2 pr-3 align-top">
                <em className="text-ink-900">{t.scientificName}</em>
                <span className="block text-ink-600">{t.commonName}</span>
              </td>
              <td className="py-2 pr-3 align-top text-ink-700">
                <ConstituentHolding
                  heldAs={t.heldAs}
                  identitySlug={t.identitySlug}
                />
              </td>
              <td className="py-2 align-top text-ink-700">{t.role}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="mt-3 text-sm text-ink-700">
        <span className="font-medium">
          When a taxon here earns its own page:
        </span>{' '}
        {concept.splitCriterion}
      </p>
      <p className="mt-3 text-sm">
        <Link href={CROP_TAXA_PATH} className="text-forest-700 hover:underline">
          Verified crop taxa
        </Link>
      </p>
    </section>
  );
}

/**
 * A warning for a page whose accepted binomial another author used for a
 * different plant.
 *
 * This exists because search cannot be stopped from bringing someone here. A
 * reader who types "Sorghum bicolor Kuntze" is looking for a plant that is not
 * this one, and the tokens they typed match this page well enough that they
 * will land on it whatever the crosswalk says. The only place the mistake can
 * be corrected is here.
 */
export function CropHomonymNote({
  slug,
  scientificName,
}: {
  slug: string;
  scientificName: string;
}) {
  const h = HOMONYM_RESOLUTIONS.find(
    (r) =>
      r.identitySlugs.includes(slug) &&
      r.name.toLowerCase() === scientificName.toLowerCase(),
  );
  if (!h) return null;
  const others = h.senses.filter((s) => s.author !== h.corpusTakes);
  if (!others.length) return null;

  return (
    <aside
      className="mt-6 rounded-lg border border-clay-300 bg-clay-50 p-4 text-sm"
      aria-label="Ambiguous scientific name"
    >
      <p className="font-medium text-clay-900">
        <em>{h.name}</em> has been used for more than one plant.
      </p>
      <p className="mt-1 text-ink-800">
        This page is <em>{h.name}</em> {h.corpusTakes}. Other authors applied
        the same binomial to different plants:
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-ink-700">
        {others.map((s) => (
          <li key={s.author}>
            <em>{h.name}</em> {s.author} — {s.resolvesTo}
          </li>
        ))}
      </ul>
    </aside>
  );
}
