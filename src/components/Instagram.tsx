import { site } from "@/lib/site";

export function Instagram() {
  return (
    <section
      className="border-t border-yuzu-cream-dark bg-yuzu-cream-dark/30 py-16 md:py-20 lg:py-24"
      aria-labelledby="social-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id="social-heading"
              className="font-display text-3xl font-medium tracking-tight text-yuzu-charcoal md:text-4xl"
            >
              Follow the work
            </h2>
            <p className="mt-2 text-yuzu-muted">
              Daily cuts, colour and salon life on Instagram.
            </p>
          </div>
          <a
            href={site.instagram}
            className="inline-flex w-fit rounded-full border border-yuzu-charcoal px-5 py-2.5 text-sm font-medium text-yuzu-charcoal hover:bg-yuzu-charcoal hover:text-yuzu-cream"
            target="_blank"
            rel="noopener noreferrer"
          >
            @yuzuhairbeauty
          </a>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <li
              key={i}
              className="aspect-square rounded-lg bg-gradient-to-br from-yuzu-gold/25 to-yuzu-sage/40"
              aria-hidden
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
