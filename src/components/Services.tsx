import { services } from "@/lib/site";

export function Services() {
  return (
    <section
      id="services"
      className="border-t border-yuzu-cream-dark bg-yuzu-cream py-16 md:py-20 lg:py-24"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="services-heading"
          className="font-display text-3xl font-medium tracking-tight text-yuzu-charcoal md:text-4xl"
        >
          Services
        </h2>
        <p className="mt-3 max-w-2xl text-yuzu-muted">
          Every appointment starts with a consultation. Tell us your routine—we’ll
          tailor the rest.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <li
              key={s.title}
              className="flex flex-col rounded-2xl border border-yuzu-cream-dark bg-yuzu-cream-dark/30 p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="font-display text-xl text-yuzu-charcoal">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-yuzu-body">
                {s.blurb}
              </p>
              <p className="mt-4 text-sm font-medium text-yuzu-sage">{s.from}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
