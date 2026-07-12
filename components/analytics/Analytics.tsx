/**
 * WebmasterID Analytics integration point.
 *
 * This is intentionally INERT in Phase 1. It renders nothing unless BOTH
 * `NEXT_PUBLIC_WEBMASTERID_SITE_ID` and `NEXT_PUBLIC_WEBMASTERID_SRC` are
 * configured, so no analytics or third-party script loads without an explicit
 * site id and script URL being provided. Do not enable without authorization.
 */
export function Analytics() {
  const siteId = process.env.NEXT_PUBLIC_WEBMASTERID_SITE_ID;
  const src = process.env.NEXT_PUBLIC_WEBMASTERID_SRC;

  if (!siteId || !src) return null;

  return (
    <script
      src={src}
      data-site-id={siteId}
      defer
      // Loaded only when fully configured; no cookies or trackers otherwise.
    />
  );
}
