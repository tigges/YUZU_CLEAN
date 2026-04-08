import { site } from "@/lib/site";

export function Location() {
  const { streetAddress, addressLocality, postalCode, addressCountry } =
    site.address;
  const lines = [streetAddress, `${addressLocality} ${postalCode}`, addressCountry];

  return (
    <section
      id="salon"
      className="border-t border-yuzu-cream-dark py-16 md:py-20 lg:py-24"
      aria-labelledby="salon-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <h2
              id="salon-heading"
              className="font-display text-3xl font-medium tracking-tight text-yuzu-charcoal md:text-4xl"
            >
              Visit us
            </h2>
            <address className="mt-6 not-italic text-yuzu-body">
              {lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <p className="mt-4 text-sm text-yuzu-muted">
              Nearest tubes & buses — update this line with real travel copy.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={site.mapUrl}
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-yuzu-charcoal px-5 py-2.5 text-sm font-medium text-yuzu-charcoal hover:bg-yuzu-charcoal hover:text-yuzu-cream"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get directions
              </a>
              <a
                href={site.bookingUrl}
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-yuzu-gold px-5 py-2.5 text-sm font-semibold text-yuzu-charcoal hover:bg-yuzu-gold-hover"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book
              </a>
            </div>
          </div>
          <div
            className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-yuzu-cream-dark"
            aria-hidden
          >
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-yuzu-sage/30 to-yuzu-gold/20 p-8 text-center text-sm text-yuzu-muted">
              Map or salon photo — replace with static map image or embed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
