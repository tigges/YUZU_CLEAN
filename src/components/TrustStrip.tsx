export function TrustStrip() {
  return (
    <section
      className="border-b border-yuzu-cream-dark bg-yuzu-cream-dark/40 py-6"
      aria-label="Trust and ratings"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <p className="text-sm font-medium text-yuzu-charcoal">
          ★★★★★ Rated on Google · New clients welcome
        </p>
        <p className="text-sm text-yuzu-muted">
          Cuts, colour & treatments · Unhurried consultations
        </p>
      </div>
    </section>
  );
}
