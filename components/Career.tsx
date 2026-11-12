import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { career, education } from "@/lib/content";

export default function Career() {
  return (
    <section id="trayectoria" className="section py-24 sm:py-32">
      <Reveal>
        <SectionHead
          eyebrow="Trayectoria y formación"
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

      <Reveal>
        <h3 className="eyebrow mt-16 text-magenta">
          <span className="h-[3px] w-6 bg-current" />
          Formación
        </h3>
      </Reveal>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {education.map((e, i) => (
          <Reveal key={e.title} delay={(i % 2) * 80} className="h-full">
            <div className={`sticker-sm h-full p-6 ${i === 0 ? "bg-amber" : "bg-white"}`}>
              <p className={`eyebrow ${i === 0 ? "text-ink" : "text-magenta"}`}>{e.period}</p>
              <p className="display mt-2 text-[1.6rem] leading-tight">{e.title}</p>
              <p className="mt-2 text-sm font-bold opacity-70">{e.org}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
