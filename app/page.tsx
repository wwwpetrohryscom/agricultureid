import Link from 'next/link';
import { ContentCard } from '@/components/cards/ContentCard';
import { SectionCard } from '@/components/cards/SectionCard';
import { Container } from '@/components/ui/Container';
import {
  cropsSorted,
  diseasesSorted,
  livestockSorted,
  pestsSorted,
  soilsSorted,
  PUBLISHED_CONTENT,
} from '@/lib/content/registry';
import { SOURCES } from '@/lib/sources/registry';
import { PRIMARY_NAV, SECTIONS } from '@/lib/site';

// Real, computed figures — never fabricated.
const ENTRY_COUNT = PUBLISHED_CONTENT.length;
const SOURCE_COUNT = SOURCES.length;

const TYPE_COUNTS: Record<string, number> = {
  '/crops': cropsSorted().length,
  '/soils': soilsSorted().length,
  '/plant-diseases': diseasesSorted().length,
  '/pests': pestsSorted().length,
  '/livestock': livestockSorted().length,
};

function sectionMeta(href: string): string | undefined {
  const n = TYPE_COUNTS[href];
  if (n === undefined) return 'Overview';
  return `${n} ${n === 1 ? 'entry' : 'entries'}`;
}

export default function HomePage() {
  const featuredCrops = cropsSorted().slice(0, 4);
  const recentlyReviewed = [...PUBLISHED_CONTENT]
    .sort((a, b) => ((a.reviewedAt ?? '') < (b.reviewedAt ?? '') ? 1 : -1))
    .slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-parchment-200 bg-gradient-to-b from-parchment-100 to-parchment-50">
        <Container className="py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="inline-flex items-center rounded-full border border-forest-200 bg-forest-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-forest-700">
              Global Agriculture Knowledge &amp; Intelligence
            </p>
            <h1 className="mt-5 font-serif text-5xl font-bold leading-[1.05] tracking-tight text-ink-900 sm:text-6xl">
              A structured, evidence-based reference for agriculture
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-700">
              AgricultureID brings together crops, soils, plant diseases, pests,
              livestock, and agricultural systems into one calm, well-sourced
              knowledge platform — built for farmers, agronomists, researchers,
              and students.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#explore"
                className="rounded-md bg-forest-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-forest-800"
              >
                Explore Agriculture
              </Link>
              <Link
                href="/crops"
                className="rounded-md border border-forest-300 bg-white px-5 py-3 text-sm font-semibold text-forest-700 transition-colors hover:bg-forest-50"
              >
                Browse Crops
              </Link>
            </div>
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              <Stat
                value={`${ENTRY_COUNT}`}
                label="Sourced reference entries"
              />
              <Stat value={`${SOURCE_COUNT}`} label="Authoritative sources" />
              <Stat value="5" label="Core knowledge domains" />
            </dl>
          </div>
        </Container>
      </section>

      {/* Topic exploration grid */}
      <Container id="explore" className="scroll-mt-20 py-16">
        <SectionHeading
          eyebrow="Explore"
          title="Browse the knowledge base"
          description="Each domain collects structured, sourced reference entries and overviews."
        />
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SECTIONS.filter((s) => s.active).map((s) => (
            <SectionCard
              key={s.href}
              label={s.label}
              href={s.href}
              description={s.description}
              meta={sectionMeta(s.href)}
            />
          ))}
        </ul>
      </Container>

      {/* Featured crop knowledge */}
      {featuredCrops.length > 0 && (
        <section className="border-y border-parchment-200 bg-parchment-100/60">
          <Container className="py-16">
            <div className="flex items-end justify-between gap-4">
              <SectionHeading
                eyebrow="Featured"
                title="Crop knowledge"
                description="In-depth, sourced entries on major crops."
              />
              <Link
                href="/crops"
                className="hidden shrink-0 text-sm font-semibold text-forest-700 hover:underline sm:block"
              >
                All crops →
              </Link>
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {featuredCrops.map((item) => (
                <ContentCard key={item.id} item={item} />
              ))}
            </ul>
          </Container>
        </section>
      )}

      {/* Agriculture systems */}
      <Container className="py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Systems"
              title="From soil to system"
              description="Agriculture is more than individual crops and animals. AgricultureID connects them through the systems, soils, water, and nutrition that sustain them."
            />
            <ul className="mt-6 space-y-3">
              {[
                {
                  href: '/farm-systems',
                  label: 'Farm systems',
                  note: 'Conventional, organic, regenerative, and protected cultivation.',
                },
                {
                  href: '/irrigation',
                  label: 'Irrigation',
                  note: 'Water management principles and efficiency considerations.',
                },
                {
                  href: '/plant-nutrition',
                  label: 'Plant nutrition',
                  note: 'Essential nutrients and nutrient-management principles.',
                },
              ].map((row) => (
                <li key={row.href}>
                  <Link
                    href={row.href}
                    className="group flex items-start gap-3 rounded-card border border-parchment-200 bg-white p-4 hover:border-forest-200"
                  >
                    <span className="mt-0.5 text-forest-500" aria-hidden="true">
                      ▪
                    </span>
                    <span>
                      <span className="font-semibold text-ink-900 group-hover:text-forest-700">
                        {row.label}
                      </span>
                      <span className="block text-sm text-ink-600">
                        {row.note}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-card border border-parchment-200 bg-white p-8">
            <h3 className="font-serif text-xl font-bold text-ink-900">
              Connected by a knowledge graph
            </h3>
            <p className="mt-3 leading-7 text-ink-700">
              Crops link to the soils they suit and the pests and diseases that
              affect them; diseases and pests link back to their host crops.
              These relationships are typed and validated, so navigation stays
              consistent as the platform grows.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {PRIMARY_NAV.slice(0, 6).map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="rounded-full border border-parchment-200 px-3 py-1 text-sm text-ink-700 hover:border-forest-200 hover:text-forest-700"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Evidence and methodology */}
      <section className="bg-forest-800 text-parchment-100">
        <Container className="py-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-forest-200">
                Evidence &amp; provenance
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-white">
                Built on sources you can check
              </h2>
              <p className="mt-4 max-w-xl leading-8 text-parchment-200">
                Every reference entry cites the authoritative organizations and
                publications it draws on — from FAO and USDA to research
                institutes, extension services, and official plant-protection
                and animal-health bodies. We document how sources are selected,
                and we are explicit about uncertainty and geographic scope.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/methodology"
                  className="rounded-md bg-parchment-50 px-4 py-2.5 text-sm font-semibold text-forest-800 hover:bg-white"
                >
                  Sources &amp; methodology
                </Link>
                <Link
                  href="/sources"
                  className="rounded-md border border-forest-500 px-4 py-2.5 text-sm font-semibold text-parchment-100 hover:bg-forest-700"
                >
                  Source registry
                </Link>
              </div>
            </div>
            <ul className="space-y-3 text-sm">
              {[
                'Authoritative, primary sources preferred over secondary commentary',
                'Explicit geographic scope and limitations on every entry',
                'No universal doses, dates, or yields presented without context',
                'A published corrections process for factual errors',
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-card bg-forest-700/60 p-4"
                >
                  <span aria-hidden="true" className="mt-0.5 text-olive-300">
                    ✓
                  </span>
                  <span className="text-parchment-100">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Data and tools preview */}
      <Container className="py-16">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-card border border-parchment-200 bg-white p-7">
            <h3 className="font-serif text-xl font-bold text-ink-900">
              Agricultural data
            </h3>
            <p className="mt-3 leading-7 text-ink-700">
              A guide to the authoritative statistical sources for agriculture —
              production, area, trade, and more — and how AgricultureID
              references them. We link to primary datasets rather than
              republishing figures that change each season.
            </p>
            <Link
              href="/agricultural-data"
              className="mt-4 inline-block text-sm font-semibold text-forest-700 hover:underline"
            >
              Explore agricultural data →
            </Link>
          </div>
          <div className="rounded-card border border-parchment-200 bg-white p-7">
            <h3 className="font-serif text-xl font-bold text-ink-900">
              Glossary
            </h3>
            <p className="mt-3 leading-7 text-ink-700">
              Clear definitions of key agronomic terms — from soil texture and
              evapotranspiration to integrated pest management — cross-linked to
              the entries that use them.
            </p>
            <Link
              href="/glossary"
              className="mt-4 inline-block text-sm font-semibold text-forest-700 hover:underline"
            >
              Open the glossary →
            </Link>
          </div>
        </div>
      </Container>

      {/* Recently reviewed */}
      {recentlyReviewed.length > 0 && (
        <section className="border-t border-parchment-200 bg-parchment-100/60">
          <Container className="py-16">
            <SectionHeading
              eyebrow="Recently reviewed"
              title="Latest reference entries"
              description="Entries reviewed as part of the initial launch set."
            />
            <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {recentlyReviewed.map((item) => (
                <ContentCard key={item.id} item={item} showType />
              ))}
            </ul>
          </Container>
        </section>
      )}
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="sr-only">{label}</dt>
      <dd>
        <span className="font-serif text-3xl font-bold text-forest-700">
          {value}
        </span>
        <span className="mt-1 block text-sm text-ink-600">{label}</span>
      </dd>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-wide text-olive-700">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-ink-900">
        {title}
      </h2>
      {description && (
        <p className="mt-3 leading-7 text-ink-600">{description}</p>
      )}
    </div>
  );
}
