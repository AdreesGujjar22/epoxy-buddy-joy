import { createFileRoute } from "@tanstack/react-router";
import { getRouterInstance } from "@tanstack/react-start";
import { services, serviceAreas } from "@/lib/site";
import {
  isSitemapRouteIncluded,
  sitemapPathForLocation,
  sitemapStaticPaths,
  sitemapXML,
  type SitemapEntry,
} from "@/lib/sitemap";

const BASE_URL = "https://epoxy-clone-pro.lovable.app";

export const Route = createFileRoute("/sitemap.xml")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async () => {
        const router = await getRouterInstance();
        const entries: SitemapEntry[] = sitemapStaticPaths(router).map((path) => ({ path }));

        const slugRouteId = "/services/$slug";
        if (isSitemapRouteIncluded(router.routesById[slugRouteId])) {
          for (const service of services) {
            const location = router.buildLocation({
              to: "/services/$slug",
              params: { slug: service.slug },
              search: () => ({}),
              hash: "",
            });
            const path = sitemapPathForLocation(router, location, slugRouteId);
            if (path) entries.push({ path });
          }
        }

        const areaRouteId = "/service-areas/$slug";
        if (isSitemapRouteIncluded(router.routesById[areaRouteId])) {
          for (const area of serviceAreas) {
            const location = router.buildLocation({
              to: "/service-areas/$slug",
              params: { slug: area.slug },
              search: () => ({}),
              hash: "",
            });
            const path = sitemapPathForLocation(router, location, areaRouteId);
            if (path) entries.push({ path });
          }
        }

        if (entries.length === 0) {
          return new Response("No pages are included in this sitemap.", {
            status: 404,
            headers: { "Cache-Control": "no-store" },
          });
        }

        return new Response(sitemapXML(BASE_URL, entries), {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
