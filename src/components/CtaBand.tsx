import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import installer from "@/assets/installer.jpg";

export function CtaBand() {
  return (
    <section className="mx-auto max-w-[1170px] px-5 py-20">
      <div className="relative overflow-hidden rounded-lg border border-border shadow-2xl">
        <img
          src={installer}
          alt="Professional installer applying durable epoxy coating to a garage floor in Surrey, BC"
          loading="lazy"
          width={1400}
          height={900}
          className="h-[360px] w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/55 to-background/10" />
        <div className="absolute inset-0 flex flex-col justify-center gap-6 p-8 sm:p-14">
          <h2 className="max-w-[450px] text-4xl font-black leading-[0.98] sm:text-5xl text-pretty">
            Transform Your Floors with Surrey's Epoxy Coating Experts
          </h2>
          <Button asChild size="lg" className="w-fit h-auto px-8 py-3.5 text-xs font-bold uppercase tracking-wider">
            <Link to="/contact">Let's Get Started</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
