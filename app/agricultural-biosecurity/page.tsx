import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { PageIntro } from '@/components/content/PageIntro';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { buildMetadata } from '@/lib/seo/metadata';
import { BIOSECURITY_CAVEAT } from '@/types/biosecurity';
import { statusByList, BIOSECURITY_STATUS } from '@/lib/biosecurity/registry';
import { PUBLISHED_CONTENT, contentUrlPath } from '@/lib/content/registry';
import { getSource } from '@/lib/sources/registry';

const TITLE = 'Agricultural Biosecurity Listings';
const PATH = '/agricultural-biosecurity';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'Official biosecurity listings for pests and plant pathogens — which organisms appear on which official list, recorded verbatim and kept separate from where they occur.',
  path: PATH,
});

export default function BiosecurityPage() {
  const byList = statusByList();
  const organismOf = (slug: string) =>
    PUBLISHED_CONTENT.find(
      (c) =>
        (c.contentType === 'pest' || c.contentType === 'plant-disease') &&
        c.slug === slug,
    );

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'Official biosecurity listings for pests and plant pathogens.',
          path: PATH,
        })}
      />

      <PageIntro
        title={TITLE}
        lead="Which organisms appear on which official list — and what that listing actually means."
      >
        <p>
          Regulatory listing and biological occurrence are different facts. A
          pest can be widespread and unregulated, or absent and heavily
          regulated — absence is often the reason for the strictest listing.
          Nothing here infers one from the other.
        </p>
        <p>
          Each entry records the listed wording verbatim, because precision is
          the point: a listing for a single race or subspecies is not a listing
          for the whole species.
        </p>
      </PageIntro>

      <aside
        className="mt-6 rounded-lg border border-olive-200 bg-olive-50/60 p-4 text-sm text-ink-700"
        aria-label="Regulatory caveat"
      >
        {BIOSECURITY_CAVEAT}
      </aside>

      {[...byList.entries()].sort().map(([listName, entries]) => {
        const src = getSource(entries[0]?.sourceReferences[0] ?? '');
        return (
          <section key={listName} className="mt-10">
            <h2 className="font-serif text-xl text-forest-900">
              {listName}
              <span className="ml-2 text-sm font-normal text-ink-500">
                {entries.length}
              </span>
            </h2>
            {src && (
              <p className="mt-1 text-sm text-ink-600">
                {src.notes}{' '}
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest-700 hover:underline"
                >
                  Official list
                </a>
              </p>
            )}
            <ul className="mt-3 divide-y divide-ink-100 border-y border-ink-100">
              {entries
                .sort((a, b) => a.organismRef.localeCompare(b.organismRef))
                .map((e) => {
                  const organism = organismOf(e.organismRef);
                  return (
                    <li key={e.id} className="py-3">
                      <p className="font-medium text-ink-900">
                        {organism ? (
                          <Link
                            href={contentUrlPath(organism)}
                            className="text-forest-800 hover:underline"
                          >
                            {organism.title}
                          </Link>
                        ) : (
                          e.organismRef
                        )}
                        <span className="ml-2 text-xs text-ink-500">
                          {e.organismType}
                        </span>
                      </p>
                      {/* The list entry is the source's own words and the
                          status beside it is AgricultureID's vocabulary. They
                          are labelled apart because "recommended for
                          regulation as quarantine pests" is EPPO speaking and
                          `recommended-for-regulation` is not. */}
                      <p className="mt-1 text-sm italic text-ink-700">
                        &ldquo;{e.officialListEntry}&rdquo;
                        <span className="ml-2 text-xs not-italic text-ink-500">
                          entry as published on the {e.officialListName}
                          {e.listVersion ? ` (${e.listVersion})` : ''}
                        </span>
                      </p>
                      <p className="mt-1 text-xs text-ink-500">
                        AgricultureID records this as{' '}
                        <span className="rounded bg-olive-50 px-1 py-0.5 font-mono">
                          {e.regulatoryStatus}
                        </span>{' '}
                        — a value from RegulatoryStatus, not a quotation.
                      </p>
                    </li>
                  );
                })}
            </ul>
          </section>
        );
      })}

      <p className="mt-10 text-sm text-ink-600">
        {BIOSECURITY_STATUS.length} listings recorded across{' '}
        {new Set(BIOSECURITY_STATUS.map((s) => s.organismRef)).size} organisms.
      </p>
    </Container>
  );
}
