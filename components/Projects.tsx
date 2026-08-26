import Photo from "./Photo";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <section id="proyectos" className="section py-24 sm:py-32">
      <Reveal>
        <SectionHead
          eyebrow="Proyectos"
          title="Lo que he"
          accent="construido."
          lead="Mi mejor caso de estudio es el estudio que fundé. Aquí no hay maquetas: es un negocio operando, con clientes reales y agentes atendiendo en producción."
        />
      </Reveal>

      {projects.map((p) => (
        <Reveal key={p.name} delay={80}>
          <article className="sticker mt-14 overflow-hidden bg-white">
            {/* Header band */}
            <div className="relative overflow-hidden border-b-[3px] border-ink bg-magenta px-7 py-10 text-white sm:px-10 sm:py-14">
              <div aria-hidden="true" className="dots absolute inset-0 opacity-70" />

              <div className="relative flex flex-wrap items-end justify-between gap-6">
                <div>
                  <p className="eyebrow opacity-80">{p.kind}</p>
                  <h3 className="display mt-3 text-[3rem] leading-none sm:text-[4.5rem]">
                    {p.name}
                  </h3>
                </div>
                <span className="display rounded-full border-[3px] border-white px-5 py-2 text-lg">
                  {p.year}
                </span>
              </div>
            </div>

            {/* Gallery */}
            <div className="grid gap-6 border-b-[3px] border-ink bg-cream p-7 sm:grid-cols-2 sm:p-10">
              {p.images.map((img, i) => {
                const ratio = i === 0 ? "aspect-[16/9]" : "aspect-[16/10]";
                return (
                  <figure
                    key={img.src}
                    className={`group ${i === 0 ? "sm:col-span-2" : ""} ${
                      i === 1 ? "sm:rotate-[0.5deg]" : ""
                    } ${i === 2 ? "sm:rotate-[-0.5deg]" : ""}`}
                  >
                    <div className="sticker-sm overflow-hidden bg-ink transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-0">
                      <Photo
                        src={img.src}
                        alt={img.alt}
                        width={img.w}
                        height={img.h}
                        ratio={ratio}
                        label="Imagen del proyecto"
                        className={`${ratio} transition-transform duration-500 group-hover:scale-[1.03]`}
                      />
                    </div>
                    <figcaption className="eyebrow mt-3 opacity-70">
                      <span className="h-[3px] w-4 shrink-0 bg-magenta" />
                      {img.caption}
                    </figcaption>
                  </figure>
                );
              })}
            </div>

            {/* Body */}
            <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-lg font-medium leading-relaxed">{p.summary}</p>

                <h4 className="eyebrow mt-9 text-magenta">
                  <span className="h-[3px] w-6 bg-current" />
                  Qué incluye
                </h4>
                <ul className="mt-4 space-y-3">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-3 font-medium">
                      <span className="mt-1 shrink-0 text-magenta">✦</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-9 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ink mt-9"
                >
                  Visitar zakumistudio.com →
                </a>
              </div>

              {/* My role */}
              <aside className="sticker-sm h-fit bg-cream p-6">
                <h4 className="display text-2xl">Mi rol</h4>
                <ul className="mt-5 space-y-4">
                  {p.role.map((r, i) => (
                    <li key={r} className="flex gap-3">
                      <span className="display shrink-0 text-lg text-violet">
                        0{i + 1}
                      </span>
                      <span className="text-[15px] font-medium leading-relaxed">
                        {r}
                      </span>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </article>
        </Reveal>
      ))}

      <Reveal delay={100}>
        <p className="mt-10 max-w-2xl text-[15px] font-semibold opacity-60">
          Trabajo bajo acuerdos de confidencialidad con varios clientes. Si quieres
          ver casos concretos —agentes, CRMs o automatizaciones ya entregadas— te los
          muestro en una llamada.
        </p>
      </Reveal>
    </section>
  );
}
