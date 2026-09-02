import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { PageIntro } from '@/components/content/PageIntro';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { getSource } from '@/lib/sources/registry';
import { hubPath, membershipOf } from '@/lib/crops/hubs';
import { CROP_TAXA_PATH } from '@/lib/crops/paths';
import { HUB_KIND_MEANING } from '@/types/crop-hubs';
import type { CropHub } from '@/types/crop-hubs';

/**
 * A crop hub.
 *
 * The member list is derived at render time from the identity layer, so it
 * cannot drift from the corpus. Published members link to their articles;
 * members held only as taxa are shown as such and link to the taxa directory,
 * because a reader looking for a crop should be told it exists here without
 * a page rather than not told at all.
 */
export function CropHubPage({ hub }: { hub: CropHub }) {
  const m = membershipOf(hub);
  const path = hubPath(hub);

  return (
    <>
      <JsonLd
        data={webPageSchema({
          name: hub.title,
          description: hub.definition,
          path,
        })}
      />
      <PageIntro title={hub.title} lead={hub.definition} />
      <Container>
        <p className="mt-2 text-sm text-ink-600">
          {HUB_KIND_MEANING[hub.kind]}
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div>
            {hub.sections.map((s) => (
              <section key={s.heading} className="mt-6 first:mt-0">
                <h2 className="font-serif text-xl text-forest-900">
                  {s.heading}
                </h2>
                <p className="mt-2 text-ink-800">{s.body}</p>
              </section>
            ))}

            {hub.contrasts.length > 0 && (
              <section className="mt-8 rounded-lg border border-ink-200 bg-parchment-50 p-5">
                <h2 className="font-serif text-lg text-forest-900">
                  What this is not
                </h2>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-ink-800">
                  {hub.contrasts.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <aside>
            <section
              className="rounded-lg border border-ink-200 bg-parchment-50 p-5"
              aria-label="Crops in this group"
            >
              <h2 className="font-serif text-lg text-forest-900">
                {m.published.length} published, {m.taxaOnly.length} held as taxa
              </h2>
              <p className="mt-1 text-xs text-ink-600">
                Membership is derived from the verified identities, not
                maintained as a list.
              </p>

              {m.published.length > 0 && (
                <ul className="mt-3 space-y-1 text-sm">
                  {m.published.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/crops/${c.cropPageSlug ?? c.slug}`}
                        className="text-forest-700 hover:underline"
                      >
                        {c.primaryCommonName}
                      </Link>
                      <span className="ml-2 italic text-ink-600">
                        {c.acceptedScientificName}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {m.taxaOnly.length > 0 && (
                <>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink-500">
                    Held as verified taxa, without an article
                  </p>
                  <p className="mt-1 text-sm text-ink-700">
                    {m.taxaOnly.map((c) => c.primaryCommonName).join(', ')}.
                  </p>
                  <p className="mt-2 text-sm">
                    <Link
                      href={CROP_TAXA_PATH}
                      className="text-forest-700 hover:underline"
                    >
                      Verified crop taxa
                    </Link>
                  </p>
                </>
              )}

              {hub.kind !== 'BOTANICAL_GENUS_HUB' && m.genera.length > 1 && (
                <p className="mt-4 text-xs text-ink-600">
                  Spans {m.genera.length} genera
                  {hub.kind === 'AGRICULTURAL_CROP_GROUP_HUB' &&
                    ` and ${m.families.length} families`}
                  .
                </p>
              )}
            </section>

            <section className="mt-6">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                What this grouping does not determine
              </h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink-700">
                {hub.limitations.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </section>

            <section className="mt-6">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                Sources
              </h2>
              <ul className="mt-2 space-y-1 text-sm">
                {hub.sourceIds.map((id) => {
                  const s = getSource(id);
                  return (
                    <li key={id}>
                      {s ? (
                        <a
                          href={s.url}
                          rel="nofollow noopener"
                          className="text-forest-700 hover:underline"
                        >
                          {s.title}
                        </a>
                      ) : (
                        id
                      )}
                    </li>
                  );
                })}
              </ul>
            </section>
          </aside>
        </div>
      </Container>
    </>
  );
}
