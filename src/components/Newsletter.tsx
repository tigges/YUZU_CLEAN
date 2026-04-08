export function Newsletter() {
  return (
    <section
      id="contact"
      className="border-t border-yuzu-cream-dark py-16 md:py-20 lg:py-24"
      aria-labelledby="newsletter-heading"
    >
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <h2
          id="newsletter-heading"
          className="font-display text-3xl font-medium tracking-tight text-yuzu-charcoal md:text-4xl"
        >
          Notes from the salon
        </h2>
        <p className="mt-4 text-yuzu-muted">
          Occasional tips, first access to appointments and quiet launches. No spam.
        </p>
        <form
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
          action="#"
          method="post"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className="min-h-[48px] w-full rounded-full border border-yuzu-cream-dark bg-white px-5 text-yuzu-charcoal placeholder:text-yuzu-muted focus:border-yuzu-gold focus:outline-none focus:ring-2 focus:ring-yuzu-gold/30 sm:max-w-sm"
          />
          <button
            type="submit"
            className="min-h-[48px] rounded-full bg-yuzu-charcoal px-8 text-sm font-medium text-yuzu-cream hover:bg-yuzu-charcoal/90"
          >
            Sign up
          </button>
        </form>
        <p className="mt-4 text-xs text-yuzu-muted">
          Wire this form to Mailchimp, Resend, or your ESP—honeypot recommended.
        </p>
      </div>
    </section>
  );
}
