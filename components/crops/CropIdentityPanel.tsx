import Link from 'next/link';
import type { CropIdentity } from '@/types/crop-identity';
import { CROP_GROUP_LABEL, IDENTITY_CAVEAT } from '@/types/crop-identity';
import { getSource } from '@/lib/sources/registry';
import { CROP_TAXA_PATH } from '@/lib/crops/paths';

const RANK_LABEL: Record<string, string> = {
  species: 'Species',
  subspecies: 'Subspecies',
  variety: 'Variety',
  form: 'Form',
  hybrid: 'Interspecific hybrid',
  nothosubspecies: 'Nothosubspecies',
  'cultivar-group': 'Cultivar group',
  genus: 'Genus-level crop concept',
  'species-complex': 'Species complex',
  'intergeneric-hybrid': 'Intergeneric hybrid',
};

/**
 * Verified botanical identity on a crop page.
 *
 * Renders nothing for a crop whose identity has not been verified yet — the
 * backfill runs wave by wave, and a page without one is a gap rather than a
 * claim that the plant has no taxonomy.
 *
 * Where the two authorities disagreed, both readings are shown. Displaying only
 * the published name would tell a reader there is one answer when the sources
 * say there are two, and a reader comparing this page with Kew or WFO would
 * find a difference with no explanation.
 */
export function CropIdentityPanel({ identity }: { identity?: CropIdentity }) {
  if (!identity) return null;
  const c = identity;

  return (
    <section
      className="mt-8 rounded-lg border border-ink-200 bg-parchment-50 p-5"
      aria-label="Verified botanical identity"
    >
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h2 className="font-serif text-lg text-forest-900">
          Botanical identity
        </h2>
        <span className="rounded-full border border-ink-200 px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-wide text-ink-600">
          {RANK_LABEL[c.taxonRank] ?? c.taxonRank}
        </span>
        {c.agreement !== 'agreed' && (
          <span className="rounded-full border border-clay-300 bg-clay-50 px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-wide text-clay-800">
            {c.agreement === 'disagreed'
              ? 'authorities differ'
              : 'single source'}
          </span>
        )}
      </div>

      <dl className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
        <div>
          <dt className="text-xs uppercase tracking-wide text-ink-500">
            Accepted name
          </dt>
          <dd className="text-ink-900">
            <em>{c.acceptedScientificName}</em>
            {c.botanicalAuthority && (
              <span className="ml-1 not-italic text-ink-600">
                {c.botanicalAuthority}
              </span>
            )}
          </dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide text-ink-500">
            Family
          </dt>
          <dd className="text-ink-900">{c.family}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide text-ink-500">
            Genus
          </dt>
          <dd className="text-ink-900">
            <em>{c.genus}</em>
          </dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide text-ink-500">
            Harvested part
          </dt>
          <dd className="text-ink-900">
            {c.harvestedParts.map((p) => p.replace(/-/g, ' ')).join(', ')}
          </dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide text-ink-500">
            Agricultural use
          </dt>
          <dd className="text-ink-900">
            {c.agriculturalUses.map((u) => u.replace(/-/g, ' ')).join(', ')}
          </dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide text-ink-500">
            Crop group
          </dt>
          <dd className="text-ink-900">
            {c.cropGroups.map((g) => CROP_GROUP_LABEL[g]).join(', ')}
          </dd>
        </div>
      </dl>

      {c.synonyms && c.synonyms.length > 0 && (
        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">
            Names kept alongside the accepted one
          </p>
          <dl className="mt-1 space-y-1 text-sm">
            {c.synonyms.map((s) => (
              <div key={s.name}>
                <dt className="inline italic text-ink-900">{s.name}</dt>
                <dd className="inline text-ink-700"> — {s.note}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      <div className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">
          What the authorities say
        </p>
        <dl className="mt-1 space-y-1 text-sm">
          {c.authorities.map((a) => {
            const s = getSource(a.sourceId);
            return (
              <div key={a.sourceId} className="flex flex-wrap gap-x-2">
                <dt className="text-ink-600">
                  {s ? (
                    <a
                      href={s.url}
                      rel="nofollow noopener"
                      className="text-forest-700 hover:underline"
                    >
                      {s.title}
                    </a>
                  ) : (
                    a.sourceId
                  )}
                </dt>
                <dd className="italic text-ink-900">{a.acceptedName}</dd>
              </div>
            );
          })}
        </dl>
      </div>

      {c.agreementNote && (
        <p className="mt-3 text-sm text-ink-700">{c.agreementNote}</p>
      )}

      {c.limitations && c.limitations.length > 0 && (
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-ink-700">
          {c.limitations.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      )}

      <p className="mt-3 text-xs text-ink-500">{IDENTITY_CAVEAT}</p>
      <p className="mt-2 text-sm">
        <Link href={CROP_TAXA_PATH} className="text-forest-700 hover:underline">
          Verified crop taxa
        </Link>
      </p>
    </section>
  );
}
