import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/pacific-floors-logo.png.asset.json";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`inline-flex shrink-0 ${className}`} aria-label="Pacific Floors and Coatings home">
      <img
        src={logoAsset.url}
        alt="Pacific Floors and Coatings"
        width={903}
        height={270}
        className="h-10 w-auto max-w-[210px] object-contain sm:h-12 sm:max-w-[270px]"
      />
    </Link>
  );
}
