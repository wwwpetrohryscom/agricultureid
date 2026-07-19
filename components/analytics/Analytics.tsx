/**
 * WebmasterID analytics — loaded on every page (rendered from the root layout).
 *
 * These are PUBLIC, client-side identifiers supplied by the site owner, not
 * secrets: the same values are visible in the page source. The attribute names
 * below are WebmasterID's contract — the vendor's IIFE tracker reads `data-wmid`
 * and `data-endpoint` off its own `<script>` tag (located by `id`), so they must
 * match exactly.
 *
 * See `app/privacy/page.tsx` for the corresponding privacy disclosure. This
 * loads a third-party script and sends usage events to WebmasterID; it replaces
 * the earlier no-analytics phase.
 */
const WEBMASTERID_SITE_ID = 'wm_e5zinq4tbv63jqtx';
const WEBMASTERID_SRC = 'https://webmasterid.com/tracker.iife.min.js';
const WEBMASTERID_ENDPOINT =
  'https://webmasterid-ingest-api.vercel.app/api/events';

export function Analytics() {
  return (
    <script
      id="webmasterid-tracker"
      defer
      src={WEBMASTERID_SRC}
      data-wmid={WEBMASTERID_SITE_ID}
      data-endpoint={WEBMASTERID_ENDPOINT}
    />
  );
}
