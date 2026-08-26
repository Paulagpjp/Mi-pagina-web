import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { process } from "@/lib/content";

export default function Process() {
  return (
    <section id="gestion" className="relative overflow-hidden bg-violet py-24 text-cream sm:py-32">
      <div aria-hidden="true" className="dots absolute inset-0 opacity-50" />

      <div className="section relative">
        <Reveal>
          <SectionHead
            invert
            eyebrow="Gestión de proyectos"
            title="Cómo trabajo"
            accent="contigo."
            lead="Esta es la parte que casi nadie te cuenta y la que más define si un proyecto sale bien. Mi método es el mismo para un agente de IA que para un ecommerce completo."
          />
        </Reveal>

        <ol className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <li key={p.step} className="h-full">
              <Reveal delay={i * 90} className="h-full">
                <div className="relative h-full rounded-3xl border-[3px] border-cream bg-cream p-7 text-ink">
                  <span className="display absolute -top-6 right-5 text-[4.5rem] leading-none text-violet opacity-25">
                    {p.step}
                  </span>
                  <h3 className="display relative text-2xl">{p.title}</h3>
                  <p className="relative mt-3 text-[15px] font-medium leading-relaxed opacity-75">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={120}>
          <blockquote className="mx-auto mt-20 max-w-3xl text-center">
            <p className="display text-[2rem] leading-tight sm:text-[3rem]">
              «Automatizar sin ordenar el proceso primero solo hace que{" "}
              <span className="text-lime">el desorden vaya más rápido</span>.»
            </p>
            <footer className="mt-6 text-sm font-bold uppercase tracking-[0.2em] opacity-70">
              — Paula Penagos Gómez
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
