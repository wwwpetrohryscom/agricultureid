import { ExternalLink } from '@/components/ui/ExternalLink';
import { TopicFigure } from '@/components/content/TopicFigure';
import { resolveImage } from '@/lib/content/registry';
import type { AnyContent } from '@/types/content';

/**
 * Lead figure for a content page. Renders a self-hosted, license-verified
 * photograph with a visible attribution caption when one is present; otherwise
 * an original on-topic SVG diagram (TopicFigure). Never hotlinks.
 */
export function ArticleFigure({ item }: { item: AnyContent }) {
  const image = resolveImage(item);

  if (!image) {
    return (
      <figure className="mt-8">
        <TopicFigure item={item} />
        <figcaption className="mt-2 text-xs text-ink-500">
          Illustrative diagram · AgricultureID (original)
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className="mt-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
        decoding="async"
        className="h-auto w-full rounded-card border border-ink-100 bg-parchment-100 object-cover"
      />
      <figcaption className="mt-2 text-xs leading-5 text-ink-500">
        {image.attribution ? (
          <span>{image.attribution}</span>
        ) : (
          <span>{image.alt}</span>
        )}
        {image.license && (
          <>
            {' '}
            <span aria-hidden="true">·</span>{' '}
            {image.licenseUrl ? (
              <ExternalLink
                href={image.licenseUrl}
                className="underline underline-offset-2 hover:text-forest-700"
              >
                {image.license}
              </ExternalLink>
            ) : (
              <span>{image.license}</span>
            )}
          </>
        )}
        {image.originalPage && (
          <>
            {' '}
            <span aria-hidden="true">·</span>{' '}
            <ExternalLink
              href={image.originalPage}
              className="underline underline-offset-2 hover:text-forest-700"
            >
              source
            </ExternalLink>
          </>
        )}
        {image.modifications && (
          <span className="mt-0.5 block text-ink-400">
            {image.modifications}
          </span>
        )}
        {(item.contentType === 'plant-disease' ||
          item.contentType === 'pest') && (
          <span className="mt-1 block italic text-ink-500">
            Illustrative only — visual symptoms or appearance alone may not be
            sufficient for reliable identification.
          </span>
        )}
      </figcaption>
    </figure>
  );
}
