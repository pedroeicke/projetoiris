import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Concept } from "@/components/sections/Concept";
import { Approach } from "@/components/sections/Approach";
import { Audience } from "@/components/sections/Audience";
import { Founder } from "@/components/sections/Founder";
import { Care } from "@/components/sections/Care";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <Concept />
        <Approach />
        <Audience />
        <Founder />
        <Care />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
