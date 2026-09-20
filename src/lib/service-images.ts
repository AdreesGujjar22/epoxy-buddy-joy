import metallic from "@/assets/metallic-epoxy.jpg";
import flake from "@/assets/flake-epoxy.jpg";
import solid from "@/assets/solid-epoxy.jpg";
import sealed from "@/assets/sealed-concrete.jpg";
import type { Service } from "./services";

export const serviceImages: Record<Service["image"], string> = {
  metallic,
  flake,
  solid,
  sealed,
};

export function serviceImage(service: Service): string {
  return serviceImages[service.image];
}
