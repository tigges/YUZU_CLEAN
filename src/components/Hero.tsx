import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      className="relative flex min-h-[70vh] items-end pb-16 pt-28 sm:pb-20 sm:pt-32 md:min-h-[75vh]"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 bg-yuzu-charcoal"
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-br from-yuzu-charcoal via-[#2a2622] to-yuzu-sage/40" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c4a35a' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-yuzu-gold">
          {site.neighbourhood}
        </p>
        <h1
          id="hero-heading"
          className="font-display max-w-3xl text-4xl font-medium leading-tight tracking-tight text-yuzu-cream sm:text-5xl md:text-6xl"
        >
          Hair & beauty with room to breathe.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-yuzu-cream/85">
          {site.tagline}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={site.bookingUrl}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-yuzu-gold px-6 py-3 text-sm font-semibold text-yuzu-charcoal transition-colors hover:bg-yuzu-gold-hover"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book consultation
          </a>
          <a
            href="#services"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-yuzu-cream/40 px-6 py-3 text-sm font-medium text-yuzu-cream transition-colors hover:border-yuzu-cream hover:bg-yuzu-cream/10"
          >
            View services
          </a>
        </div>
      </div>
    </section>
  );
}
