import type { Metadata } from 'next';
import { HubIndex } from '@/components/content/HubIndex';
import { CROP_HUBS } from '@/data/crop-hubs';
import { hubPath, hubsOfKind } from '@/lib/crops/hubs';
import { HUB_KINDS } from '@/types/crop-hubs';
import { cropsSorted } from '@/lib/content/registry';
import { buildMetadata } from '@/lib/seo/metadata';
import Link from 'next/link';
import { CROP_TAXA_PATH } from '@/lib/crops/paths';
import { CROP_IDENTITIES, dataOnlyIdentities } from '@/lib/crops/identity';

const TITLE = 'Crops';
const PATH = '/crops';
const DESCRIPTION =
  'Field, cereal, oilseed, and horticultural crops — with botanical classification, climate and soil requirements, agronomy, and associated pests and diseases.';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'Reference entries on major crops: classification, climate and soil requirements, agronomy, nutrition, diseases, pests, harvest, and uses — each fully sourced.',
  path: PATH,
});

export default function CropsPage() {
  return (
    <HubIndex
      title={TITLE}
      path={PATH}
      description={DESCRIPTION}
      items={cropsSorted()}
      note="Agronomic details such as sowing dates, input rates, and yields are highly region-specific. Entries describe principles and requirements rather than universal prescriptions."
      aside={
        <>
          <section className="mt-6 max-w-3xl rounded-lg border border-ink-200 bg-parchment-50 p-4">
            <h2 className="font-serif text-lg text-forest-900">
              Browse by group, family or genus
            </h2>
            <p className="mt-1 text-sm text-ink-700">
              {CROP_HUBS.length} hubs, each covering enough crops to be worth
              navigating and saying something true of the group rather than of
              its largest member. The corpus holds 74 families and 213 genera; a
              taxon existing is not a reason to publish a page about it.
            </p>
            {HUB_KINDS.map((kind) => {
              const hs = hubsOfKind(kind);
              if (!hs.length) return null;
              return (
                <p key={kind} className="mt-2 text-sm">
                  {hs.map((h, i) => (
                    <span key={h.slug}>
                      {i > 0 && ' · '}
                      <Link
                        href={hubPath(h)}
                        className="text-forest-700 hover:underline"
                      >
                        {h.title}
                      </Link>
                    </span>
                  ))}
                </p>
              );
            })}
          </section>
          <section className="mt-6 max-w-3xl rounded-lg border border-ink-200 bg-parchment-50 p-4">
            <h2 className="font-serif text-lg text-forest-900">
              Verified crop taxa
            </h2>
            <p className="mt-1 text-sm text-ink-700">
              AgricultureID holds a checked botanical identity for{' '}
              {CROP_IDENTITIES.length} cultivated crops — the accepted name, its
              rank, family and genus, each resolved against two independent
              taxonomic authorities. {dataOnlyIdentities().length} of them are
              taxa held without an encyclopedia article, so they appear in the
              directory rather than as pages of their own.
            </p>
            <p className="mt-2 text-sm">
              <Link
                href={CROP_TAXA_PATH}
                className="text-forest-700 hover:underline"
              >
                Browse verified crop taxa
              </Link>
            </p>
          </section>
        </>
      }
    />
  );
}
