import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Music2 } from "lucide-react";
import { Logo } from "./Logo";
import { services, site } from "@/lib/site";

const popular = services.slice(0, 8);

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-[1170px] gap-10 px-5 py-14 text-left md:grid-cols-[1.5fr_0.8fr_0.8fr]">
        <div className="text-left">
          <div className="flex justify-start">
            <Logo />
          </div>
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={site.phoneHref} className="hover:text-foreground">{site.phone}</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-foreground">{site.email}</a>
            </li>
            <li>
              <a href={site.mapLink} target="_blank" rel="noreferrer" className="hover:text-foreground">
                {site.address}
              </a>
            </li>
          </ul>
          <div className="mt-5 flex justify-start gap-3">
            <a href={site.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-muted-foreground transition hover:text-primary"><Instagram size={18} /></a>
            <a href={site.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="text-muted-foreground transition hover:text-primary"><Facebook size={18} /></a>
            <a href={site.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted-foreground transition hover:text-primary"><Linkedin size={18} /></a>
            <a href={site.socials.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok" className="text-muted-foreground transition hover:text-primary"><Music2 size={18} /></a>
          </div>
        </div>
        <div>
          <p className="eyebrow">Company</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About Us</Link></li>
            <li><Link to="/service-areas" className="hover:text-foreground">Service Areas</Link></li>
            <li><Link to="/reviews" className="hover:text-foreground">Reviews</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Popular services</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {popular.map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-foreground">
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/services" className="font-semibold text-primary hover:brightness-110">
                All services →
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-[10px] text-muted-foreground">
        © {new Date().getFullYear()} {site.name}. Proudly serving Surrey, BC and Metro Vancouver.
      </div>
    </footer>
  );
}
