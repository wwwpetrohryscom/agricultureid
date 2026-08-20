import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { PageIntro } from '@/components/content/PageIntro';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { buildMetadata } from '@/lib/seo/metadata';
import { countryName, getProfileByCode, countryPath } from '@/lib/geo/registry';
import {
  listedAuthorities,
  publishedAuthorities,
  authorityPath,
  humanizeToken,
  presentAuthorityTypes,
  presentGovernmentLevels,
  presentResponsibilityAreas,
} from '@/lib/authorities/registry';
import { AuthorityNonAffiliationNotice } from '@/components/authorities/AuthorityNonAffiliationNotice';

const TITLE = 'Agricultural Authorities';
const PATH = '/agricultural-authorities';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'A verified directory of official public bodies responsible for agriculture — ministries, departments, inspection services, plant-health and statistics authorities — each with its official website and the evidence it was verified against.',
  path: PATH,
});

export default function AgriculturalAuthoritiesPage() {
  const listed = listedAuthorities();
  const published = publishedAuthorities();
  const publishedSlugs = new Set(published.map((a) => a.slug));

  // Group by jurisdiction so the directory reads geographically rather than as
  // an undifferentiated card wall.
  const supranational = listed.filter(
    (a) => a.governmentLevel === 'supranational',
  );
  const byCountry = new Map<string, typeof listed>();
  for (const a of listed) {
    if (!a.countryCode) continue;
    const bucket = byCountry.get(a.countryCode) ?? [];
    bucket.push(a);
    byCountry.set(a.countryCode, bucket);
  }
  const countries = [...byCountry.keys()].sort((a, b) =>
    countryName(a).localeCompare(countryName(b)),
  );

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'Verified directory of official agricultural authorities and departments.',
          path: PATH,
        })}
      />

      <PageIntro
        title={TITLE}
        lead="Official public bodies responsible for agriculture, verified against government sources."
      >
        <p>
          Every body listed here was checked against an official government
          source, and each entry records the URL, the date, and what was
          actually observed. Nothing is inferred from an organisation’s name: a
          department is not credited with running a seed registry or holding
          plant-health competence unless its own published material says so.
        </p>
        <p>
          Entries with enough verified detail have their own page. The rest are
          listed as directory records — real and verified, but not yet carrying
          enough evidence to justify a page of their own.
        </p>
      </PageIntro>

      <AuthorityNonAffiliationNotice />

      <section className="mt-8" aria-labelledby="coverage">
        <h2 id="coverage" className="sr-only">
          Coverage
        </h2>
        <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            ['Authorities', listed.length],
            ['With full profiles', published.length],
            [
              'Jurisdictions',
              countries.length + (supranational.length ? 1 : 0),
            ],
            ['Responsibility areas', presentResponsibilityAreas().length],
          ].map(([label, value]) => (
            <div
              key={String(label)}
              className="rounded-lg border border-ink-100 bg-white p-4"
            >
              <dt className="text-xs uppercase tracking-wide text-ink-500">
                {label}
              </dt>
              <dd className="mt-1 font-serif text-2xl text-forest-900">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {supranational.length > 0 && (
        <AuthorityGroup
          heading="Supranational"
          items={supranational}
          publishedSlugs={publishedSlugs}
        />
      )}

      {countries.map((code) => (
        <AuthorityGroup
          key={code}
          heading={countryName(code)}
          headingHref={
            getProfileByCode(code)
              ? countryPath(getProfileByCode(code)!.slug)
              : undefined
          }
          items={byCountry.get(code)!}
          publishedSlugs={publishedSlugs}
        />
      ))}

      <section className="mt-12 rounded-lg border border-ink-100 bg-[#FAFAF7] p-5">
        <h2 className="font-serif text-lg text-forest-900">Facets present</h2>
        <p className="mt-1 text-sm text-ink-600">
          Only values that actually occur in the registry are shown.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <FacetList
            label="Government level"
            values={presentGovernmentLevels()}
          />
          <FacetList label="Authority type" values={presentAuthorityTypes()} />
          <FacetList
            label="Responsibilities"
            values={presentResponsibilityAreas()}
          />
        </div>
      </section>
    </Container>
  );
}

function FacetList({ label, values }: { label: string; values: string[] }) {
  if (values.length === 0) return null;
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-500">
        {label}
      </h3>
      <ul className="mt-2 flex flex-wrap gap-1.5">
        {values.map((v) => (
          <li
            key={v}
            className="rounded-full border border-ink-200 bg-white px-2 py-0.5 text-xs text-ink-700"
          >
            {humanizeToken(v)}
          </li>
        ))}
      </ul>
    </div>
  );
}

function AuthorityGroup({
  heading,
  headingHref,
  items,
  publishedSlugs,
}: {
  heading: string;
  headingHref?: string;
  items: ReturnType<typeof listedAuthorities>;
  publishedSlugs: Set<string>;
}) {
  return (
    <section className="mt-10">
      <h2 className="font-serif text-xl text-forest-900">
        {headingHref ? (
          <Link href={headingHref} className="hover:underline">
            {heading}
          </Link>
        ) : (
          heading
        )}
      </h2>
      <ul className="mt-3 divide-y divide-ink-100 border-y border-ink-100">
        {items.map((a) => {
          const hasPage = publishedSlugs.has(a.slug);
          return (
            <li key={a.id} className="py-3">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="font-medium text-ink-900">
                  {hasPage ? (
                    <Link
                      href={authorityPath(a.slug)}
                      className="text-forest-800 hover:underline"
                    >
                      {a.officialName}
                    </Link>
                  ) : (
                    a.officialName
                  )}
                  {a.shortName && (
                    <span className="ml-2 text-sm text-ink-500">
                      {a.shortName}
                    </span>
                  )}
                </p>
                <span className="text-xs text-ink-500">
                  {humanizeToken(a.authorityType)}
                </span>
              </div>
              <p className="mt-1 text-sm text-ink-600">{a.summary}</p>
              <p className="mt-1 text-xs">
                <a
                  href={a.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest-700 underline-offset-2 hover:underline"
                >
                  Official website
                </a>
                {!hasPage && (
                  <span className="ml-3 text-ink-500">
                    Directory record — verified, no detail page yet
                  </span>
                )}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
