import {
  CROP_ET_METHODOLOGY_CAVEAT,
  CROP_STATISTICS_CAVEAT,
} from '@/lib/crops/editorial-boilerplate';

/**
 * Where the numbers a crop page discusses come from, said once.
 *
 * Wave 45 found this text in a hundred and twenty-three crop articles, written
 * ninety different ways across a hundred and fifty-six sentences: production
 * and trade figures are compiled by FAO and national agencies, they change,
 * and they should be read from the source rather than from a page like this
 * one. Ninety wordings of one policy is not ninety facts. It is one fact the
 * corpus was restating, slightly differently, every time a new article
 * mentioned production.
 *
 * So it stopped being prose. The statement is a constant, rendered here, on
 * every crop page rather than on the hundred and twenty-three that happened to
 * bring it up — which is also more honest, because it is true of the crops
 * whose articles never mentioned it too.
 *
 * The second sentence does the same job for crop water requirements. Fifteen
 * articles carried a methodology note about estimating them from
 * evapotranspiration against FAO reference methods; that is a statement about
 * how the quantity is defined, not about any crop.
 */
export function CropMethodologyNote() {
  return (
    <section
      className="mt-8 rounded-lg border border-ink-200 bg-parchment-50 p-5 text-sm text-ink-700"
      aria-label="How to read figures on this page"
    >
      <h2 className="font-serif text-base text-forest-900">
        How to read figures on this page
      </h2>
      <p className="mt-2">{CROP_STATISTICS_CAVEAT}</p>
      <p className="mt-2">{CROP_ET_METHODOLOGY_CAVEAT}</p>
    </section>
  );
}
