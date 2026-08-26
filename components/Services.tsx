import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { services, whatsappUrl } from "@/lib/content";
import { toneSolid, type Tone } from "@/lib/tones";

export default function Services() {
  return (
    <section id="servicios" className="relative bg-ink py-24 text-cream sm:py-32">
      <div aria-hidden="true" className="dots absolute inset-0 opacity-60" />

      <div className="section relative">
        <Reveal>
          <SectionHead
            invert
            eyebrow="Servicios freelance"
            title="Lo que puedo"
            accent="hacer por ti."
            lead="Trabajo por proyecto, con alcance y fechas definidas desde el primer día. Puedes contratar una sola cosa de esta lista o el paquete completo."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={(i % 2) * 90}>
              <article className="group h-full rounded-3xl border-[3px] border-cream/25 bg-white/[0.04] p-7 transition-colors duration-200 hover:border-cream hover:bg-white/[0.08]">
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`inline-grid h-12 w-12 place-items-center rounded-full border-2 border-ink font-display text-lg ${
                      toneSolid[s.tone as Tone]
                    }`}
                  >
                    {s.n}
                  </span>
                  <span className="text-2xl opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    ↗
                  </span>
                </div>

                <h3 className="display mt-6 text-[1.7rem] leading-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-[15px] font-medium leading-relaxed text-cream/70">
                  {s.summary}
                </p>

                <ul className="mt-6 space-y-2.5 border-t-2 border-cream/15 pt-5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm font-medium">
                      <span className="mt-0.5 shrink-0 text-lime">▸</span>
                      <span className="text-cream/85">{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mt-14 flex flex-col items-start gap-6 rounded-3xl border-[3px] border-lime bg-lime/10 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="display text-2xl sm:text-3xl">
                ¿No sabes cuál necesitas?
              </p>
              <p className="mt-2 max-w-lg text-[15px] font-medium text-cream/75">
                Cuéntame el problema en dos líneas y te digo si se resuelve con un
                agente, con una automatización o con nada de esto.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lime shrink-0"
            >
              Contarle mi caso
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
