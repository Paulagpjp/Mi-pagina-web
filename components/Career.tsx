import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { career } from "@/lib/content";

export default function Career() {
  return (
    <section id="trayectoria" className="section py-24 sm:py-32">
      <Reveal>
        <SectionHead
          eyebrow="Trayectoria"
          title="Antes de las redes,"
          accent="la operación."
          lead="Más de seis años en cargos administrativos y comerciales. De ahí traigo la organización, el servicio al cliente y el trato con gerencia que hoy sostienen cada parrilla."
        />
      </Reveal>

      <ol className="mt-14">
        {career.map((c, i) => (
          <li key={c.org}>
            <Reveal delay={i * 50}>
              <div className="grid gap-2 border-t-[3px] border-ink py-6 md:grid-cols-[140px_1fr_1.1fr] md:gap-8">
                <span className="display text-xl text-magenta">{c.period}</span>
                <div>
                  <p className="display text-[1.5rem] leading-tight">{c.org}</p>
                  <p className="mt-1 text-sm font-bold opacity-70">{c.role}</p>
                </div>
                <p className="text-[15px] font-medium leading-relaxed opacity-75">{c.note}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
