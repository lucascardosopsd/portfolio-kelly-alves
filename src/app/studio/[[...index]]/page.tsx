import { notFound } from "next/navigation";

/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

const isProduction = process.env.NODE_ENV === "production";
const isStudioEnabledInProd = process.env.NEXT_PUBLIC_ENABLE_STUDIO === "true";

export default async function StudioWrapper() {
  if (isProduction && !isStudioEnabledInProd) {
    notFound();
  }

  const [{ NextStudio }, { default: config }] = await Promise.all([
    import("next-sanity/studio"),
    import("../../../../sanity.config"),
  ]);

  return <NextStudio config={config} />;
}
