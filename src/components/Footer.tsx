import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-yuzu-cream-dark bg-yuzu-charcoal py-12 text-yuzu-cream/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:justify-between lg:px-8">
        <div>
          <p className="font-display text-lg text-yuzu-cream">{site.name}</p>
          <p className="mt-2 max-w-xs text-sm">{site.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-8 text-sm">
          <div>
            <p className="font-medium text-yuzu-cream">Contact</p>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="mt-2 block hover:text-yuzu-gold">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="mt-1 block hover:text-yuzu-gold">
              {site.email}
            </a>
          </div>
          <div>
            <p className="font-medium text-yuzu-cream">Salon</p>
            <Link href="#salon" className="mt-2 block hover:text-yuzu-gold">
              Location & hours
            </Link>
            <a
              href={site.bookingUrl}
              className="mt-1 block hover:text-yuzu-gold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book online
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-yuzu-cream/10 px-4 pt-8 sm:px-6 lg:px-8">
        <p className="text-xs text-yuzu-cream/50">
          © {new Date().getFullYear()} {site.name}. All rights reserved. ·{" "}
          <Link href="#" className="underline hover:text-yuzu-cream">
            Privacy
          </Link>
        </p>
      </div>
    </footer>
  );
}
