import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Modules } from "@/components/sections/Modules";
import { Timeline } from "@/components/sections/Timeline";
import { Challenge } from "@/components/sections/Challenge";
import { HowToBuy } from "@/components/sections/HowToBuy";
import { Offer } from "@/components/sections/Offer";
import { Faq } from "@/components/sections/Faq";
import { SupportCta } from "@/components/sections/SupportCta";
import { JsonLd } from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo-principal">
        <Hero />
        <About />
        <Modules />
        <Timeline />
        <Challenge />
        <HowToBuy />
        <Offer />
        <Faq />
        <SupportCta />
      </main>
      <Footer />
      <WhatsAppFloat />
      <JsonLd />
    </>
  );
}
