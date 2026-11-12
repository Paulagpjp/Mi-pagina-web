import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Career from "@/components/Career";
import Process from "@/components/Process";
import Tech from "@/components/Tech";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { marqueeWords } from "@/lib/content";

export default function Home() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:border-[3px] focus:border-ink focus:bg-lime focus:px-5 focus:py-3 focus:text-sm focus:font-extrabold focus:uppercase focus:tracking-[0.12em]"
      >
        Saltar al contenido
      </a>

      <Nav />

      <main id="contenido">
        <Hero />

        <Marquee words={marqueeWords} />

        <About />
        <Services />
        <Experience />
        <Process />
        <Career />

        <Marquee
          words={["Abierta a nuevas oportunidades", "Community Manager", "Bogotá · Remoto o híbrido"]}
          className="bg-lime text-ink"
          speed="animate-marquee-fast"
          starColor="text-magenta"
        />

        <Tech />
        <Faq />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
