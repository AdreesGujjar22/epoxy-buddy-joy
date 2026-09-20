import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import installer from "@/assets/installer.jpg";
import flake from "@/assets/flake-epoxy.jpg";

export const Route = createFileRoute("/about")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "About Pacific Floors and Coatings | Surrey BC Epoxy Team" },
      {
        name: "description",
        content:
          "Pacific Floors and Coatings provides premium epoxy flooring and concrete coating for homeowners and businesses across Surrey, BC and Metro Vancouver.",
      },
      { property: "og:title", content: "About Pacific Floors and Coatings" },
      {
        property: "og:description",
        content: "Premium custom flooring across Surrey, BC, built on preparation and clear communication.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://epoxy-clone-pro.lovable.app/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://epoxy-clone-pro.lovable.app/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <Header />
      <main>
        <section className="mx-auto max-w-4xl px-4 py-16 text-center">
          <p className="eyebrow">Get to know Pacific Floors and Coatings</p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Premium custom flooring across Surrey, BC
          </h1>
          <p className="mt-5 text-muted-foreground">
            We provide epoxy flooring and concrete coating services for homeowners and businesses
            across Surrey, BC and Metro Vancouver. Built on quality work and clear
            communication, we make upgrading your floors a stress-free experience.
          </p>
        </section>

        <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-16 md:grid-cols-2">
          <img
            src={installer}
            alt="Pacific Floors and Coatings installer preparing a floor"
            loading="lazy"
            width={1400}
            height={900}
            className="h-full w-full rounded-xl border border-border object-cover"
          />
          <div className="panel p-7">
            <h2 className="text-xl font-bold">Who we are</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              With over ten years of combined experience across our installation team, we deliver
              clean, durable, professionally finished floors with a strong focus on surface
              preparation, attention to detail, and long-term performance.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              We work on garages, basements, workshops, showrooms, and commercial and industrial
              spaces for clients who want a higher standard of workmanship and a finish that is
              built to last.
            </p>
          </div>
        </section>

        <section className="bg-surface py-16">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-2xl font-extrabold">Our mission</h2>
            <p className="mt-5 text-muted-foreground">
              To provide premium flooring solutions with a commitment to quality work and materials,
              proper preparation, and long-lasting results — a floor that looks polished, performs
              reliably, and reflects a higher standard of care from start to finish.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2">
          <div className="panel p-7">
            <h2 className="text-xl font-bold">Why we're better</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              We focus on the parts of the job that matter most: proper preparation, attention to
              detail, and results built to last. A quality floor is about more than looking good on
              day one — long-term performance depends on the care taken before and during
              installation.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              We don't rush or take shortcuts. Every floor we hand over is one we would be happy to
              put our name on.
            </p>
          </div>
          <img
            src={flake}
            alt="Finished flake epoxy floor in a Surrey basement"
            loading="lazy"
            width={1200}
            height={800}
            className="h-full w-full rounded-xl border border-border object-cover"
          />
        </section>

        <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-20 md:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-3xl font-extrabold">Ready to get started? Let's talk about your project.</h2>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li>10+ years of epoxy experience</li>
              <li>Free on-site estimates</li>
              <li>5.0 Google rating</li>
            </ul>
          </div>
          <QuoteForm heading="Get your free quote" />
        </section>
      </main>
      <Footer />
    </>
  );
}
