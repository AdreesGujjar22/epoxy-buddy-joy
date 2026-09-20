import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { googleReviewsQuery } from "@/lib/google-reviews.functions";
import { site } from "@/lib/site";
import { BadgeCheck } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  staticData: { sitemap: true },
  loader: ({ context }) => context.queryClient.ensureQueryData(googleReviewsQuery),
  head: () => ({
    meta: [
      { title: "Epoxy Flooring Reviews Surrey | Pacific Floors & Coatings" },
      {
        name: "description",
        content:
          "Read Google reviews from Surrey and Metro Vancouver homeowners and businesses who chose Pacific Floors & Coatings for durable epoxy flooring installations.",
      },
      { property: "og:title", content: "Epoxy Flooring Reviews Surrey | Pacific Floors & Coatings" },
      {
        property: "og:description",
        content: "Read Google reviews from Surrey and Metro Vancouver homeowners and businesses who chose Pacific Floors & Coatings for durable epoxy flooring installations.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://epoxy-clone-pro.lovable.app/reviews" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Epoxy Flooring Reviews Surrey | Pacific Floors & Coatings" },
      {
        name: "twitter:description",
        content: "Read Google reviews from Surrey and Metro Vancouver homeowners and businesses who chose Pacific Floors & Coatings for durable epoxy flooring installations.",
      },
    ],
    links: [{ rel: "canonical", href: "https://epoxy-clone-pro.lovable.app/reviews" }],
  }),
  errorComponent: ({ error }) => (
    <main className="mx-auto max-w-3xl px-4 py-24 text-center" role="alert">
      {error.message}
    </main>
  ),
  notFoundComponent: () => <main className="px-4 py-24 text-center">No reviews found.</main>,
  component: Reviews,
});

function Reviews() {
  const { data } = useSuspenseQuery(googleReviewsQuery);
  const rating = data.rating ? data.rating.toFixed(1) : site.rating;

  return (
    <>
      <Header />
      <main>
        <section className="mx-auto max-w-3xl px-4 py-16 text-center">
          <p className="eyebrow">Real results, real feedback</p>
          <h1 className="mt-3 text-4xl font-black sm:text-5xl">Customer reviews</h1>
          <p className="mt-5 text-muted-foreground">
             Customer feedback from Surrey and Metro Vancouver homeowners and businesses who chose
            Pacific Floors and Coatings. Rated {rating}
            {data.total ? ` from ${data.total} Google reviews` : " on Google"}.
          </p>
          <a
            href={`https://search.google.com/local/reviews?placeid=${site.placeId}`}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block text-sm font-semibold text-primary"
          >
            Read all reviews on Google →
          </a>
        </section>

        <section className="mx-auto grid max-w-6xl gap-5 px-4 pb-16 md:grid-cols-2">
          {data.reviews.map((r) => (
            <figure key={`${r.name}-${r.relativeTime}`} className="interactive-panel border-l-2 border-l-primary p-6">
              <div className="text-primary" aria-label={`${r.rating} out of 5 stars`}>{"★".repeat(Math.round(r.rating))}</div>
              <blockquote className="mt-3 text-sm text-muted-foreground">“{r.text}”</blockquote>
              <figcaption className="mt-4 flex items-center gap-3 text-sm font-semibold">
                {r.profilePhoto && (
                  <img src={r.profilePhoto} alt="" width={32} height={32} className="h-8 w-8 rounded-full" loading="lazy" />
                )}
                <span>
                  <span className="flex items-center gap-1.5">
                    {r.name}
                    {r.verified && <BadgeCheck className="h-4 w-4 text-primary" aria-label="Verified customer review" />}
                  </span>
                  <span className="block text-xs font-normal text-muted-foreground">
                    {r.relativeTime}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </section>

        <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-20 md:grid-cols-2">
          <h2 className="text-3xl font-extrabold">Your floors could be next.</h2>
          <QuoteForm heading="Get your free quote" />
        </section>
      </main>
      <Footer />
    </>
  );
}
