/** Update before launch: real address, phone, booking URL, coordinates, social handles. */
export const site = {
  name: "Yuzu Hair & Beauty",
  tagline: "London hair & beauty, calm and precise.",
  description:
    "A relaxed London salon for cuts, colour and treatments—with space to breathe and stylists who listen.",
  neighbourhood: "Central London",
  address: {
    streetAddress: "123 Example Street",
    addressLocality: "London",
    postalCode: "W1A 1AA",
    addressCountry: "GB",
  },
  phone: "+44 20 0000 0000",
  email: "hello@yuzuhairbeauty.co.uk",
  bookingUrl: "https://example.com/book",
  instagram: "https://www.instagram.com/",
  openingHours: ["Mo 09:00-19:00", "Tu 09:00-19:00", "We 09:00-19:00", "Th 09:00-20:00", "Fr 09:00-20:00", "Sa 09:00-18:00"],
  mapUrl: "https://maps.google.com/?q=London",
} as const;

export const services = [
  {
    title: "Cut & style",
    blurb: "Precision cuts, restyles and blow-dries tailored to your routine.",
    from: "From £65",
  },
  {
    title: "Colour",
    blurb: "Balayage, glossing and colour correction with healthy-hair priority.",
    from: "Consultation",
  },
  {
    title: "Treatments",
    blurb: "Deep conditioning, scalp care and shine rituals.",
    from: "From £35",
  },
  {
    title: "Beauty add-ons",
    blurb: "Brows, finishing touches—ask when you book.",
    from: "Add-on",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Finally a salon that feels calm. My colour has never looked this natural.",
    attribution: "Google review",
  },
  {
    quote: "They actually listen—left with a cut I can style at home.",
    attribution: "Client",
  },
  {
    quote: "Luxury without the attitude. Already rebooked.",
    attribution: "Google review",
  },
] as const;
