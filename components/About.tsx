import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { stats } from "@/lib/content";
import { toneSolid, type Tone } from "@/lib/tones";

const pillars = [
  {
    title: "Ordeno el caos",
    body: "La mayoría de los proyectos digitales no fracasan por falta de talento, sino por falta de gestión. Yo defino el alcance, corto lo que no aporta y hago que el proyecto llegue a una fecha real de entrega.",
  },
  {
    title: "Traduzco negocio a tecnología",
    body: "Escucho el problema en el lenguaje de tu operación —«pierdo clientes porque no alcanzo a responder»— y lo devuelvo convertido en un sistema que lo resuelve.",
  },
  {
    title: "Entrego cosas que funcionan",
    body: "No entrego presentaciones ni promesas. Entrego agentes operando, flujos corriendo y sitios publicados, con documentación para que tu equipo los mantenga.",
  },
];

export default function About() {
  return (
    <section id="sobre-mi" className="section py-24 sm:py-32">
      <Reveal>
        <SectionHead
          eyebrow="Sobre mí"
          title="No solo construyo."
          accent="Hago que se entregue."
          lead="Vengo de la gestión de proyectos y me formé en inteligencia artificial aplicada. Esa combinación es lo que ofrezco: alguien que entiende el negocio, sabe qué se puede automatizar hoy y se encarga de que el proyecto llegue a producción."
        />
      </Reveal>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 90}>
            <article className="sticker h-full bg-white p-7">
              <span className="display text-5xl text-magenta">0{i + 1}</span>
              <h3 className="display mt-4 text-2xl">{p.title}</h3>
              <p className="mt-3 text-[15px] font-medium leading-relaxed opacity-75">
                {p.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Numbers strip */}
      <Reveal delay={120}>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className={`sticker-sm px-6 py-7 ${toneSolid[s.tone as Tone]}`}
            >
              <p className="display text-[3.2rem] leading-none">{s.value}</p>
              <p className="mt-2 text-[13px] font-bold leading-snug opacity-90">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
