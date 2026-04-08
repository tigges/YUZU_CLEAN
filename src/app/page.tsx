import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Instagram } from "@/components/Instagram";
import { Intro } from "@/components/Intro";
import { JsonLd } from "@/components/JsonLd";
import { Location } from "@/components/Location";
import { Newsletter } from "@/components/Newsletter";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { TrustStrip } from "@/components/TrustStrip";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main id="main">
        <Hero />
        <TrustStrip />
        <Intro />
        <Services />
        <Location />
        <Gallery />
        <Testimonials />
        <Instagram />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
