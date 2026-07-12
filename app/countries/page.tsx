import type { Metadata } from 'next';
import Link from 'next/link';
import { PageIntro } from '@/components/content/PageIntro';
import { Container } from '@/components/ui/Container';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { pageBreadcrumbs } from '@/lib/seo/breadcrumbs';
import { buildMetadata } from '@/lib/seo/metadata';
import { profilesSorted, regionProfiles } from '@/lib/geo/registry';
import { countryPath, regionPath } from '@/lib/geo/paths';

const TITLE = 'Countries';
const PATH = '/countries';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'Country agriculture profiles — stable farming-system overviews paired with dated, versioned statistics from official datasets (World Bank / FAO).',
  path: PATH,
});

export default function CountriesPage() {
  const regions = regionProfiles();
  const profiles = profilesSorted();

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'Country agriculture profiles with stable overviews and dated official statistics.',
          path: PATH,
        })}
      />
      <PageIntro
        eyebrow="Geographic intelligence"
        title="Country agriculture profiles"
        lead="Each profile separates a stable, descriptive overview of a country’s farming systems from dated, versioned statistics drawn from official datasets. Statistics always carry a year, unit, source, and dataset version."
        crumbs={pageBreadcrumbs(TITLE, PATH)}
      />

      {profiles.length === 0 ? (
        <p className="mt-6 text-ink-600">
          Country profiles are being prepared.
        </p>
      ) : (
        <div className="mt-8 space-y-8">
          {regions.map((r) => {
            const inRegion = profiles.filter((p) => p.region === r.name);
            if (inRegion.length === 0) return null;
            return (
              <section key={r.slug} aria-labelledby={`r-${r.slug}`}>
                <h2
                  id={`r-${r.slug}`}
                  className="font-serif text-xl font-bold text-ink-900"
                >
                  <Link
                    href={regionPath(r.slug)}
                    className="hover:text-forest-700"
                  >
                    {r.name}
                  </Link>
                </h2>
                <ul className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                  {inRegion.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={countryPath(p.slug)}
                        className="block rounded-card border border-ink-100 bg-white px-3 py-2 text-sm font-medium text-forest-950 transition hover:border-olive-300"
                      >
                        {p.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      )}
    </Container>
  );
}
