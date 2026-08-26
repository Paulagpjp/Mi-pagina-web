import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { techGroups } from "@/lib/content";

export default function Tech() {
  return (
    <section id="tecnologias" className="section py-24 sm:py-32">
      <Reveal>
        <SectionHead
          eyebrow="Tecnologías"
          title="Con qué"
          accent="construyo."
          lead="Herramientas que uso a diario en proyectos reales, no una lista para llenar el CV. Si trabajas con otras herramientas, me adapto."
        />
      </Reveal>

      <div className="mt-16 space-y-4">
        {techGroups.map((g, i) => (
          <Reveal key={g.group} delay={i * 70}>
            <div className="grid items-start gap-5 border-t-[3px] border-ink pt-6 md:grid-cols-[240px_1fr]">
              <h3 className="display text-2xl sm:text-[1.9rem]">
                <span className="mr-2 align-super text-xs text-magenta">
                  0{i + 1}
                </span>
                {g.group}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {g.items.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border-2 border-ink bg-white px-4 py-2 text-sm font-bold transition-colors duration-150 hover:bg-magenta hover:text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
