import { queryOptions } from "@tanstack/react-query";
import { createServerFn } from "@tanstack/react-start";
import { site } from "@/lib/site";

export type GoogleReview = {
  name: string;
  location: string;
  text: string;
  rating: number;
  relativeTime: string;
  profilePhoto?: string | undefined;
};

export type GoogleReviewsResult = {
  rating: number | null;
  total: number | null;
  reviews: GoogleReview[];
  error?: string;
};

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_maps";

let cache: { at: number; value: GoogleReviewsResult } | null = null;
const TTL = 1000 * 60 * 60 * 6;

export const getGoogleReviews = createServerFn({ method: "GET" }).handler(
  async (): Promise<GoogleReviewsResult> => {
    if (cache && Date.now() - cache.at < TTL) return cache.value;

    const lovableKey = process.env["LOVABLE_API_KEY"];
    const mapsKey = process.env["GOOGLE_MAPS_API_KEY"];
    if (!lovableKey || !mapsKey) {
      return { rating: null, total: null, reviews: [], error: "Google reviews are not configured." };
    }

    try {
      const response = await fetch(`${GATEWAY_URL}/places/v1/places/${site.placeId}`, {
        headers: {
          Authorization: `Bearer ${lovableKey}`,
          "X-Connection-Api-Key": mapsKey,
          "X-Goog-FieldMask": "rating,userRatingCount,reviews",
        },
      });

      if (!response.ok) {
        const body = await response.text();
        console.error(`Google Places request failed [${response.status}]: ${body}`);
        return { rating: null, total: null, reviews: [], error: "Could not load Google reviews." };
      }

      const data = (await response.json()) as {
        rating?: number;
        userRatingCount?: number;
        reviews?: Array<{
          rating?: number;
          text?: { text?: string };
          originalText?: { text?: string };
          relativePublishTimeDescription?: string;
          authorAttribution?: { displayName?: string; photoUri?: string };
        }>;
      };

      const reviews: GoogleReview[] = (data.reviews ?? [])
        .map((r) => ({
          name: r.authorAttribution?.displayName ?? "Google reviewer",
          location: "Google review",
          text: r.text?.text ?? r.originalText?.text ?? "",
          rating: r.rating ?? 5,
          relativeTime: r.relativePublishTimeDescription ?? "",
          profilePhoto: r.authorAttribution?.photoUri,
        }))
        .filter((r) => r.text.length > 0);

      const value: GoogleReviewsResult = {
        rating: data.rating ?? null,
        total: data.userRatingCount ?? null,
        reviews,
      };
      cache = { at: Date.now(), value };
      return value;
    } catch (error) {
      console.error("Google reviews fetch error", error);
      return { rating: null, total: null, reviews: [], error: "Could not load Google reviews." };
    }
  },
);

export const googleReviewsQuery = queryOptions({
  queryKey: ["google-reviews"],
  queryFn: () => getGoogleReviews(),
  staleTime: 1000 * 60 * 60,
});
