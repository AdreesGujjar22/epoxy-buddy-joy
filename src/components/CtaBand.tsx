import { Link } from "@tanstack/react-router";
import installer from "@/assets/installer.jpg";

export function CtaBand() {
  return (
    <section className="mx-auto max-w-[1170px] px-5 py-20">
      <div className="relative overflow-hidden rounded-lg border border-border">
        <img
          src={installer}
          alt="Installer applying an epoxy coating to a garage floor"
          loading="lazy"
          width={1400}
          height={900}
          className="h-[360px] w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/55 to-background/10" />
        <div className="absolute inset-0 flex flex-col justify-center gap-6 p-8 sm:p-14">
          <h2 className="max-w-[450px] text-4xl font-black leading-[0.98] sm:text-5xl">
            Transform Your Floors with Surrey's Epoxy Coating Experts
          </h2>
          <Link
            to="/contact"
            className="w-fit rounded-md bg-primary px-6 py-3 text-xs font-bold text-primary-foreground transition hover:brightness-110"
          >
            Let's Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
