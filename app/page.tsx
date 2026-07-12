import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { BrandMark } from '@/components/ui/Logo';
import {
  contentUrlPath,
  cropsSorted,
  diseasesSorted,
  livestockSorted,
  pestsSorted,
  PUBLISHED_CONTENT,
  soilsSorted,
} from '@/lib/content/registry';
import { SOURCES } from '@/lib/sources/registry';
import { CONTENT_TYPE_LABEL, SECTIONS } from '@/lib/site';
import type { AnyContent } from '@/types/content';

const HERO_IMAGE = {
  src: '/images/agriculture-fields-golden-hour.jpg',
  alt: 'Golden-hour agricultural fields with harvested rows and distant hills in Pomar de Valdivia, Spain',
  creator: 'Jesús Gómez Fernández',
  sourceUrl:
    'https://commons.wikimedia.org/wiki/File:Harvested_fields_at_sunset_in_Pomar_de_Valdivia,_Palencia.jpg',
  license: 'CC BY 4.0',
  licenseUrl: 'https://creativecommons.org/licenses/by/4.0/deed.en',
} as const;

const TYPE_COUNTS: Record<string, number> = {
  '/crops': cropsSorted().length,
  '/soils': soilsSorted().length,
  '/plant-diseases': diseasesSorted().length,
  '/pests': pestsSorted().length,
  '/livestock': livestockSorted().length,
};

const EVIDENCE_POINTS = [
  'Evidence-led content',
  'Traceable sources',
  'Global scope',
  'Clearly dated updates',
] as const;

const TOPICS = [
  {
    href: '/crops',
    label: 'Crops',
    note: 'Crop profiles, agronomy, uses, and linked risks.',
    className: 'lg:col-span-5',
  },
  {
    href: '/soils',
    label: 'Soils',
    note: 'Texture, fertility, management, and crop suitability.',
    className: 'lg:col-span-3',
  },
  {
    href: '/plant-diseases',
    label: 'Plant Diseases',
    note: 'Identification, biology, hosts, and prevention principles.',
    className: 'lg:col-span-4',
  },
  {
    href: '/pests',
    label: 'Pests',
    note: 'Monitoring, host crops, and integrated management context.',
    className: 'lg:col-span-3',
  },
  {
    href: '/livestock',
    label: 'Livestock',
    note: 'Species, husbandry, nutrition, and welfare context.',
    className: 'lg:col-span-4',
  },
  {
    href: '/farm-systems',
    label: 'Farming Systems',
    note: 'How production systems connect crops, soils, water, and inputs.',
    className: 'lg:col-span-5',
  },
] as const;

const SYSTEM_NOTES = [
  {
    title: 'Global references',
    text: 'Entries describe broadly applicable concepts while naming the geographic scope and limitations of each page.',
  },
  {
    title: 'Local decisions',
    text: 'Rates, dates, varieties, pest thresholds, and regulatory controls remain local decisions tied to field conditions.',
  },
  {
    title: 'Connected context',
    text: 'Crops, soils, pests, diseases, and livestock are linked through typed relationships validated by the content graph.',
  },
] as const;

function sectionMeta(href: string): string {
  const count = TYPE_COUNTS[href];
  if (count === undefined) return 'Overview hub';
  return `${count} published ${count === 1 ? 'entry' : 'entries'}`;
}

function formatDate(date: string): string {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}

function sortByUpdatedDate(a: AnyContent, b: AnyContent): number {
  const dateCompare = b.updatedAt.localeCompare(a.updatedAt);
  if (dateCompare !== 0) return dateCompare;
  return a.title.localeCompare(b.title);
}

export default function HomePage() {
  const wheat = cropsSorted().find((item) => item.slug === 'wheat');
  const latest = [...PUBLISHED_CONTENT].sort(sortByUpdatedDate).slice(0, 4);
  const topics = TOPICS.flatMap((topic) => {
    const section = SECTIONS.find((item) => item.href === topic.href);
    return section ? [{ ...topic, section }] : [];
  });
  const sourceSample = SOURCES.slice(0, 6);

  return (
    <>
      <section className="relative isolate min-h-[570px] overflow-hidden bg-forest-950 text-white">
        <Image
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-forest-950/35" aria-hidden="true" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(13,31,22,0.86) 0%, rgba(13,31,22,0.62) 42%, rgba(13,31,22,0.16) 100%)',
          }}
          aria-hidden="true"
        />

        <Container className="relative z-10 flex min-h-[570px] items-center py-16 lg:py-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <BrandMark className="h-12 w-12 shrink-0 sm:h-14 sm:w-14" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e8d89e]">
                AgricultureID
              </p>
            </div>
            <h1 className="mt-6 font-serif text-5xl font-bold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Global Agriculture Knowledge
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-parchment-100">
              Evidence-based agricultural knowledge, practical context, and
              structured reference data for crops, soils, plant health,
              livestock, and farming systems.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#explore"
                className="rounded-md bg-forest-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-forest-800"
              >
                Explore Agriculture
              </Link>
              <Link
                href="/crops"
                className="rounded-md border border-white/60 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white hover:text-forest-950"
              >
                Browse Crops
              </Link>
            </div>
          </div>
        </Container>

        <p className="absolute bottom-3 right-4 z-10 max-w-[18rem] text-right text-[0.6875rem] leading-4 text-white/75">
          Photo:{' '}
          <a href={HERO_IMAGE.sourceUrl} className="underline hover:text-white">
            {HERO_IMAGE.creator}
          </a>
          {' via '}
          <a href={HERO_IMAGE.sourceUrl} className="underline hover:text-white">
            Wikimedia Commons
          </a>
          ,{' '}
          <a
            href={HERO_IMAGE.licenseUrl}
            className="underline hover:text-white"
          >
            {HERO_IMAGE.license}
          </a>
          . Cropped and resized from the original.
        </p>
      </section>

      <section className="border-b border-ink-100 bg-white">
        <Container className="py-5">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {EVIDENCE_POINTS.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <span
                  className="h-2.5 w-2.5 rounded-full bg-[#c7a44a]"
                  aria-hidden="true"
                />
                <span className="text-sm font-semibold text-ink-800">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Container id="explore" className="scroll-mt-20 py-16 lg:py-20">
        <SectionHeading
          eyebrow="Explore key topics"
          title="Structured agriculture, not a flat blog"
          description="The knowledge base is organized by domain, with each section connected through typed relationships and source-backed entries."
        />
        <div className="mt-9 grid grid-cols-1 gap-4 lg:grid-cols-12">
          {topics.map((topic) => (
            <Link
              key={topic.href}
              href={topic.href}
              className={`${topic.className} group rounded-card border border-ink-100 bg-white p-6 transition-colors hover:border-forest-200 hover:bg-[#FAFAF7]`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-olive-700">
                    {sectionMeta(topic.href)}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-bold text-forest-950 group-hover:text-forest-800">
                    {topic.label}
                  </h3>
                </div>
                <span
                  className="mt-1 text-lg text-[#c7a44a] transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  &rarr;
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-ink-600">
                {topic.section.description}
              </p>
              <p className="mt-5 border-t border-ink-100 pt-4 text-sm font-medium text-ink-800">
                {topic.note}
              </p>
            </Link>
          ))}
        </div>
      </Container>

      {wheat && (
        <section className="border-y border-ink-100 bg-[#FAFAF7]">
          <Container className="py-16 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-olive-700">
                  Featured crop
                </p>
                <h2 className="mt-2 font-serif text-4xl font-bold tracking-tight text-forest-950">
                  {wheat.title}
                </h2>
                {wheat.scientificName && (
                  <p className="mt-2 text-base italic text-ink-600">
                    {wheat.scientificName}
                  </p>
                )}
                <p className="mt-5 max-w-xl leading-7 text-ink-700">
                  {wheat.summary}
                </p>
                <dl className="mt-7 space-y-3">
                  {wheat.keyFacts.slice(0, 4).map((fact) => (
                    <div key={fact.label}>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                        {fact.label}
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-ink-800">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <Link
                  href={contentUrlPath(wheat)}
                  className="mt-8 inline-flex rounded-md bg-forest-800 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-forest-950"
                >
                  Read the wheat guide
                </Link>
              </div>

              <div className="rounded-card border border-ink-100 bg-white p-6 lg:p-8">
                <h3 className="font-serif text-2xl font-bold text-forest-950">
                  Why it matters in the registry
                </h3>
                <p className="mt-4 leading-7 text-ink-700">
                  Wheat links crop biology, soil suitability, water context,
                  plant disease, pest pressure, and source methodology in one
                  validated page. The article avoids universal rates and dates
                  where decisions are local.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <FactPanel
                    title="Geographic scope"
                    text={wheat.geographicScope}
                  />
                  {wheat.climateContext && (
                    <FactPanel
                      title="Climate context"
                      text={wheat.climateContext}
                    />
                  )}
                </div>
                <p className="mt-6 text-sm text-ink-500">
                  Updated {formatDate(wheat.updatedAt)}
                  {wheat.reviewedAt
                    ? `; reviewed ${formatDate(wheat.reviewedAt)}`
                    : ''}
                </p>
              </div>
            </div>
          </Container>
        </section>
      )}

      <section className="bg-white">
        <Container className="py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              eyebrow="Global knowledge and local context"
              title="A reference system built for regional judgment"
              description="AgricultureID separates stable reference knowledge from field decisions that depend on climate, regulation, soil tests, varieties, and production goals."
            />
            <div className="grid gap-4 sm:grid-cols-3">
              {SYSTEM_NOTES.map((item) => (
                <div
                  key={item.title}
                  className="border-l border-[#c7a44a] pl-5"
                >
                  <h3 className="font-serif text-xl font-bold text-forest-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-ink-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {latest.length > 0 && (
        <section className="border-t border-ink-100 bg-white">
          <Container className="py-16 lg:py-20">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                eyebrow="Latest knowledge"
                title="Recently updated entries"
                description="Selected from published registry entries using their recorded update dates."
              />
              <Link
                href="/sources"
                className="text-sm font-semibold text-forest-800 hover:underline"
              >
                View source registry
              </Link>
            </div>
            <ul className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {latest.map((item) => (
                <LatestItem key={item.id} item={item} />
              ))}
            </ul>
          </Container>
        </section>
      )}

      <section className="bg-forest-950 text-parchment-100">
        <Container className="py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-[#c7a44a]">
                Source methodology
              </p>
              <h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-white">
                Every claim needs provenance
              </h2>
              <p className="mt-5 max-w-2xl leading-8 text-parchment-200">
                AgricultureID cites sources through a structured registry. The
                current registry contains {SOURCES.length} source records, and
                published entries fail validation if citations do not resolve.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-parchment-300">
                Mentioned organizations are cited for public reference material;
                their presence is not an endorsement of AgricultureID.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/methodology"
                  className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-forest-950 transition-colors hover:bg-parchment-100"
                >
                  Read methodology
                </Link>
                <Link
                  href="/sources"
                  className="rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Browse sources
                </Link>
              </div>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {sourceSample.map((source) => (
                <li
                  key={source.id}
                  className="rounded-card border border-white/10 bg-white/[0.04] p-4"
                >
                  <p className="text-sm font-semibold text-white">
                    {source.organization}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-wide text-parchment-300">
                    {source.jurisdiction}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
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
      <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-forest-950 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 leading-7 text-ink-600">{description}</p>
      )}
    </div>
  );
}

function FactPanel({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-card border border-ink-100 bg-[#FAFAF7] p-4">
      <h4 className="text-xs font-semibold uppercase tracking-wide text-ink-500">
        {title}
      </h4>
      <p className="mt-2 text-sm leading-6 text-ink-700">{text}</p>
    </div>
  );
}

function LatestItem({ item }: { item: AnyContent }) {
  return (
    <li>
      <Link
        href={contentUrlPath(item)}
        className="group flex h-full flex-col rounded-card border border-ink-100 bg-white p-5 transition-colors hover:border-forest-200 hover:bg-[#FAFAF7]"
      >
        <p className="text-xs font-semibold uppercase tracking-wide text-olive-700">
          {CONTENT_TYPE_LABEL[item.contentType]}
        </p>
        <h3 className="mt-2 font-serif text-xl font-bold text-forest-950 group-hover:text-forest-800">
          {item.title}
        </h3>
        <p className="mt-3 line-clamp-4 flex-1 text-sm leading-6 text-ink-600">
          {item.summary}
        </p>
        <p className="mt-5 text-xs font-medium text-ink-500">
          Updated {formatDate(item.updatedAt)}
        </p>
      </Link>
    </li>
  );
}
