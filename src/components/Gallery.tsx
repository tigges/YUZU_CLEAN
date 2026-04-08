const placeholders = [
  { label: "Colour", className: "bg-gradient-to-br from-amber-100/80 to-yuzu-sage/40" },
  { label: "Texture", className: "bg-gradient-to-br from-stone-200 to-yuzu-charcoal/20" },
  { label: "Cut", className: "bg-gradient-to-br from-yuzu-cream-dark to-yuzu-gold/30" },
  { label: "Detail", className: "bg-gradient-to-br from-yuzu-sage/50 to-stone-100" },
  { label: "Blow dry", className: "bg-gradient-to-br from-rose-100/60 to-yuzu-cream" },
  { label: "Salon", className: "bg-gradient-to-br from-yuzu-charcoal/30 to-yuzu-sage/30" },
];

export function Gallery() {
  return (
    <section
      id="gallery"
      className="border-t border-yuzu-cream-dark bg-yuzu-charcoal py-16 text-yuzu-cream md:py-20 lg:py-24"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="gallery-heading"
          className="font-display text-3xl font-medium tracking-tight md:text-4xl"
        >
          In the chair
        </h2>
        <p className="mt-3 max-w-2xl text-yuzu-cream/70">
          Swap these placeholders for your photography—consistent lighting reads most
          premium.
        </p>
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {placeholders.map((item) => (
            <li
              key={item.label}
              className={`aspect-square rounded-xl ${item.className} flex items-end p-4 text-xs font-medium text-yuzu-charcoal/70`}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
