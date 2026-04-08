import { testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <section
      className="border-t border-yuzu-cream-dark py-16 md:py-20 lg:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="testimonials-heading"
          className="font-display text-3xl font-medium tracking-tight text-yuzu-charcoal md:text-4xl"
        >
          Kind words
        </h2>
        <ul className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <li
              key={t.quote}
              className="rounded-2xl border border-yuzu-cream-dark bg-white/60 p-6 shadow-sm"
            >
              <blockquote className="text-yuzu-body leading-relaxed">
                “{t.quote}”
              </blockquote>
              <p className="mt-4 text-sm text-yuzu-muted">— {t.attribution}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
