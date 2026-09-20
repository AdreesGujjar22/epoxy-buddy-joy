import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { CtaBand } from "@/components/CtaBand";
import { services, site } from "@/lib/site";
import { serviceImage } from "@/lib/service-images";
import { useSuspenseQuery } from "@tanstack/react-query";
import { reviews } from "@/lib/reviews";
import { googleReviewsQuery } from "@/lib/google-reviews.functions";
import hero from "@/assets/hero-garage.jpg";
import metallic from "@/assets/metallic-epoxy.jpg";
import flake from "@/assets/flake-epoxy.jpg";
import sealed from "@/assets/sealed-concrete.jpg";
import installer from "@/assets/installer.jpg";

const featuredSlugs = [
  "metallic-epoxy-flooring",
  "garage-epoxy-flooring",
  "commercial-epoxy-flooring",
  "concrete-floor-sealing",
] as const;

const featuredServices = featuredSlugs
  .map((slug) => services.find((s) => s.slug === slug))
  .filter((s): s is (typeof services)[number] => Boolean(s))
  .slice(0, 4);

const serviceAlt: Record<string, string> = {
  "metallic-epoxy-flooring": "Glossy black and silver metallic epoxy floor installed in a Surrey, BC home",
  "garage-epoxy-flooring": "Grey flake epoxy garage floor coating in a two-car Surrey garage",
  "commercial-epoxy-flooring": "Commercial epoxy floor coating in a Metro Vancouver warehouse with safety line markings",
  "concrete-floor-sealing": "Polished and sealed concrete floor finished by Pacific Floors and Coatings",
};


const faqs = [
  {
    q: "How durable are epoxy floors, and how long do they last?",
    a: "A properly prepared and installed epoxy floor commonly lasts 10 to 20 years in a residential garage, and many years under heavy commercial traffic. Longevity comes down to surface prep, coating thickness, and how the floor is used.",
  },
  {
    q: "Are epoxy floors slippery when wet?",
    a: "A high-gloss coating can be slick when wet, so we can add an anti-slip aggregate to the top coat. We recommend it for entryways, wash bays, and any area that regularly sees water.",
  },
  {
    q: "How long does installation and curing take?",
    a: "Most residential garages are completed in one to two days. Light foot traffic is usually fine after 24 hours, and vehicles after roughly 72 hours depending on the system and temperature.",
  },
  {
    q: "Can you fix a cracked or pitted concrete slab?",
    a: "Yes. We diamond grind the slab, repair cracks, spalls, and pitting, and fill low spots before coating so the finished floor is smooth and well bonded.",
  },
  {
    q: "How much does a new epoxy floor cost?",
    a: "Pricing depends on square footage, slab condition, and the system you choose. We provide free on-site estimates so the quote reflects your actual floor.",
  },
  {
    q: "Do you install epoxy flooring outside Surrey, BC?",
    a: "We serve Surrey, BC and Metro Vancouver, including Burnaby, Richmond, Coquitlam, Langley, Delta, White Rock, and Abbotsford.",
  },
];

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Epoxy Flooring Company in Surrey | Pacific Floors & Coatings" },
      {
        name: "description",
        content:
          "Pacific Floors & Coatings installs metallic, flake, and solid epoxy flooring in Surrey, BC. Durable garage, commercial & industrial coatings. Free estimates.",
      },
      { property: "og:title", content: "Epoxy Flooring Company in Surrey | Pacific Floors & Coatings" },
      {
        property: "og:description",
        content:
          "Pacific Floors & Coatings installs metallic, flake, and solid epoxy flooring in Surrey, BC. Durable garage, commercial & industrial coatings. Free estimates.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://epoxy-clone-pro.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Epoxy Flooring Company in Surrey | Pacific Floors & Coatings" },
      {
        name: "twitter:description",
        content:
          "Pacific Floors & Coatings installs metallic, flake, and solid epoxy flooring in Surrey, BC. Durable garage, commercial & industrial coatings. Free estimates.",
      },
    ],
    links: [{ rel: "canonical", href: "https://epoxy-clone-pro.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Pacific Floors and Coatings",
          description: "Epoxy flooring and concrete coating contractor serving Surrey, BC and Metro Vancouver.",
          telephone: "+1-236-878-3386",
          email: "pacificfloorsandcoatings@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "7304 138 Street",
            addressLocality: "Surrey",
            addressRegion: "BC",
            postalCode: "V6J 3Y7",
            addressCountry: "CA",
          },
          areaServed: "Surrey, British Columbia",
          sameAs: [
            "https://www.tiktok.com/@pacificfloorsandcoatings",
            "https://www.instagram.com/pacificfloorsandcoatings",
            "https://www.facebook.com/profile.php?id=61575485291064",
          ],
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "30" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(googleReviewsQuery),
  errorComponent: ({ error }) => (
    <main className="mx-auto max-w-3xl px-4 py-24 text-center" role="alert">
      {error.message}
    </main>
  ),
  notFoundComponent: () => <main className="px-4 py-24 text-center">Page not found.</main>,
  component: Home,
});

function Home() {
  const { data } = useSuspenseQuery(googleReviewsQuery);
  const list = data.reviews.length > 0 ? data.reviews : reviews.map((r) => ({ ...r, relativeTime: r.location }));
  const firstReview = list[0];
  const secondReview = list[1];

  if (!firstReview || !secondReview) return null;

  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-[680px] overflow-hidden">
          <img
            src={hero}
            alt="Metallic epoxy garage floor installed in Surrey, BC"
            width={1600}
            height={1008}
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/25" />
          <div className="relative mx-auto grid max-w-[1170px] items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.8fr] lg:py-24">
            <div className="max-w-[610px]">
              <p className="eyebrow">5-star flooring transformations</p>
              <h1 className="mt-4 text-4xl font-black leading-[1.08] sm:text-[55px]">
                Epoxy Flooring Company in Surrey BC
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-6 text-muted-foreground">
                Upgrade your space with a beautiful floor that's made to last. At Pacific Floors and Coatings we
                deliver clean, durable coatings for garages, basements, showrooms, and industrial
                spaces across Surrey, BC and Metro Vancouver.
              </p>
               <ul className="mt-6 space-y-2 text-xs font-bold uppercase">
                 <li>◉&nbsp; 10+ years of experience</li>
                 <li>◉&nbsp; Fast, well-managed installations</li>
                 <li>◉&nbsp; Competitive warranty on every job</li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/services"
                  className="rounded-md bg-primary px-6 py-3 text-xs font-bold text-primary-foreground transition hover:brightness-110"
                >
                  View Our Services
                </Link>
                <a
                  href={site.phoneHref}
                  className="rounded-md border border-border px-6 py-3 text-xs font-bold transition hover:border-primary"
                >
                  Call {site.phone}
                </a>
              </div>
            </div>
            <QuoteForm />
          </div>
        </section>

        <section className="relative border-t border-border bg-surface py-20">
          <div className="mx-auto max-w-[1170px] px-5">
          <p className="eyebrow">Our services</p>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="mt-2 text-3xl font-black sm:text-[36px]">
              Garage, Commercial & Industrial Epoxy Flooring
            </h2>
            <Link to="/services" className="text-sm font-semibold text-primary">
              View all services →
            </Link>
          </div>
          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {featuredServices.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group relative overflow-hidden rounded-md border border-border"
              >
                <img
                  src={serviceImage(s)}
                  alt={serviceAlt[s.slug] ?? `${s.title} in Surrey, BC`}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 lg:h-[300px]"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-background/90 px-5 py-4">
                  <h3 className="text-base font-bold">{s.title}</h3>
                  <span className="text-primary">→</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-9 text-center">
            <Link
              to="/services"
              className="inline-flex rounded-md bg-primary px-7 py-3 text-xs font-bold text-primary-foreground transition hover:brightness-110"
            >
              View All Services
            </Link>
          </div></div>

        </section>

        <section className="border-y border-primary/25 bg-background py-20">
          <div className="mx-auto grid max-w-[1170px] items-center gap-12 px-5 md:grid-cols-2">
            <figure className="order-2 border-l border-primary/40 pl-8 md:order-1">
              <blockquote className="text-lg leading-8 text-muted-foreground">“{firstReview.text}”</blockquote>
              <figcaption className="mt-6 text-sm font-bold text-foreground">{firstReview.name} <span className="font-normal text-muted-foreground">— {firstReview.location}</span></figcaption>
              <div className="mt-2 text-primary">★★★★★</div>
            </figure>
            <img src={metallic} alt="Luxury black metallic epoxy garage floor" className="order-1 h-[330px] w-full rounded-md object-cover md:order-2" loading="lazy" />
          </div>
        </section>

        <section className="border-b border-primary/25 bg-surface py-20">
          <div className="mx-auto grid max-w-[1170px] items-center gap-12 px-5 md:grid-cols-2">
            <img src={sealed} alt="Finished residential epoxy floor" className="h-[380px] w-full rounded-md object-cover" loading="lazy" />
            <div>
              <p className="eyebrow">Residential, commercial, industrial</p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-[36px]">Flooring Solutions for Any Project, From Single-Car Garages to Commercial & Industrial Spaces</h2>
              <p className="mt-5 text-sm leading-6 text-muted-foreground">Whether you're a homeowner, a business owner, or a general contractor, we deliver durable epoxy flooring and floor coating solutions tailored to your project needs. Our consultants help guide you through the ideal system for your space.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1170px] px-5 py-20">
          <p className="eyebrow">Our reviews speak for themselves</p>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              See what our customers have to say
            </h2>
            <Link to="/reviews" className="text-sm font-semibold text-primary">
              View all reviews →
            </Link>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Rated {site.rating} on Google from customers across Surrey, BC and Metro Vancouver.
          </p>
          <div className="mt-8 grid items-center gap-10 md:grid-cols-[1fr_1fr]">
            <img src={flake} alt="Completed Pacific Floors and Coatings garage floor" className="h-[330px] w-full rounded-md object-cover" loading="lazy" />
            <figure className="border-l border-primary/40 pl-8">
              <blockquote className="text-base leading-7 text-muted-foreground">“{secondReview.text}”</blockquote>
              <figcaption className="mt-5 text-sm font-bold">{secondReview.name}<span className="block text-xs font-normal text-muted-foreground">{secondReview.location}</span></figcaption>
              <div className="mt-2 text-primary">★★★★★</div>
            </figure>
          </div>
        </section>

        <section className="border-y border-border bg-surface py-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-center text-3xl font-extrabold sm:text-4xl">
              Frequently asked questions
            </h2>
            <div className="mt-8 space-y-3">
               {faqs.map((f) => (
                 <details key={f.q} className="border border-border bg-background/40 px-5 py-4">
                  <summary className="cursor-pointer list-none text-sm font-semibold">{f.q}</summary>
                  <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-20">
          <img src={installer} alt="Pacific Floors and Coatings crew serving Surrey, BC" className="absolute inset-0 h-full w-full object-cover opacity-15" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
          <div className="relative mx-auto grid max-w-[1170px] gap-12 px-5 md:grid-cols-2">
            <div>
              <p className="eyebrow">Local service areas</p>
              <h2 className="mt-3 text-3xl font-black sm:text-[36px]">Dedicated to Serving Surrey Businesses and Families</h2>
              <ul className="mt-6 space-y-4 text-sm leading-6 text-muted-foreground">
                <li><strong className="text-foreground">On-Site Consultations:</strong> Delivered commercial, industrial, and residential floor preparation guidance directly to your property.</li>
                <li><strong className="text-foreground">Fully Equipped Service Crews:</strong> Supported by professional diamond grinders and dustless vacuums.</li>
                <li><strong className="text-foreground">Comprehensive Regional Coverage:</strong> Offering transparent pricing throughout Surrey, BC and Metro Vancouver.</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-primary">
                {['Surrey','Burnaby','Coquitlam','Richmond','Delta','Langley','Abbotsford'].map((area) => <span key={area}>{area}</span>)}
              </div>
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
