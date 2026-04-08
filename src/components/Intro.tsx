import { site } from "@/lib/site";

export function Intro() {
  return (
    <section className="py-16 md:py-20 lg:py-24" aria-labelledby="intro-heading">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <h2
            id="intro-heading"
            className="font-display text-3xl font-medium tracking-tight text-yuzu-charcoal md:text-4xl"
          >
            Fresh perspective, familiar warmth.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-yuzu-body">
            {site.description}
          </p>
        </div>
        <ul className="space-y-6 border-l-2 border-yuzu-gold/50 pl-6">
          <li>
            <h3 className="font-medium text-yuzu-charcoal">Colour that suits you</h3>
            <p className="mt-1 text-yuzu-muted">
              Tonal work and maintenance plans that fit your lifestyle.
            </p>
          </li>
          <li>
            <h3 className="font-medium text-yuzu-charcoal">Cuts you can live in</h3>
            <p className="mt-1 text-yuzu-muted">
              Shapes that grow out gracefully and work between appointments.
            </p>
          </li>
          <li>
            <h3 className="font-medium text-yuzu-charcoal">A calm room</h3>
            <p className="mt-1 text-yuzu-muted">
              No rush, clear pricing, and stylists who explain as they go.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
