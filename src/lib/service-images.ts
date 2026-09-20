import metallic from "@/assets/metallic-epoxy.jpg";
import flake from "@/assets/flake-epoxy.jpg";
import solid from "@/assets/solid-epoxy.jpg";
import sealed from "@/assets/sealed-concrete.jpg";
import garage from "@/assets/garage-epoxy.jpg";
import commercial from "@/assets/commercial-epoxy.jpg";
import type { Service } from "./services";

export const serviceImages: Record<Service["image"], string> = {
  metallic,
  flake,
  solid,
  sealed,
};

/** Slug-specific photography so each service page shows a matching floor type. */
const slugImages: Record<string, string> = {
  "epoxy-floor-coatings": solid,
  "epoxy-flooring": metallic,
  "garage-epoxy-flooring": garage,
  "garage-floor-coatings": garage,
  "residential-epoxy-flooring": garage,
  "metallic-epoxy-flooring": metallic,
  "flake-epoxy-flooring": flake,
  "quartz-epoxy-flooring": flake,
  "stone-epoxy-flooring": sealed,
  "polyaspartic-floor-coatings": flake,
  "polyurethane-floor-coatings": solid,
  "concrete-floor-coatings": sealed,
  "concrete-floor-sealing": sealed,
  "concrete-resurfacing": sealed,
  "concrete-repairs": sealed,
  "concrete-patio-flooring": sealed,
  "floor-polishing": sealed,
  "marble-floor-installation": metallic,
  "floor-installation": flake,
  "epoxy-floor-installation": metallic,
  "epoxy-coating-contractor": metallic,
  "concrete-coating-contractor": solid,
  "commercial-epoxy-flooring": commercial,
  "commercial-floor-coatings": commercial,
  "industrial-epoxy-flooring": commercial,
  "warehouse-floor-coatings": commercial,
  "parkade-floor-coatings": commercial,
  "commercial-kitchen-floor-coatings": commercial,
  "food-safe-floor-coatings": commercial,
  "restaurant-floor-coatings": commercial,
};

export function serviceImage(service: Service): string {
  return slugImages[service.slug] ?? serviceImages[service.image];
}

export { garage as garageImage, commercial as commercialImage };
