import { publicSiteUrl, site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: site.name,
    description: site.description,
    url: publicSiteUrl,
    telephone: site.phone,
    email: site.email,
    image: `${publicSiteUrl}/og.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.streetAddress,
      addressLocality: site.address.addressLocality,
      postalCode: site.address.postalCode,
      addressCountry: site.address.addressCountry,
    },
    openingHoursSpecification: site.openingHours.map((spec) => {
      const [dayPart, hoursPart] = spec.split(" ");
      const dayMap: Record<string, string> = {
        Mo: "Monday",
        Tu: "Tuesday",
        We: "Wednesday",
        Th: "Thursday",
        Fr: "Friday",
        Sa: "Saturday",
        Su: "Sunday",
      };
      const [opens, closes] = hoursPart.split("-");
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: dayMap[dayPart] ?? dayPart,
        opens,
        closes,
      };
    }),
    sameAs: [site.instagram],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
