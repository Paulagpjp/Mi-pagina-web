import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { stats } from "@/lib/content";
import { toneSolid, type Tone } from "@/lib/tones";

const pillars = [
  {
    title: "Estrategia antes que publicaciones",
    body: "Cada parrilla parte de un objetivo: generar confianza, educar, mostrar el producto o vender. Si una pieza no empuja ese objetivo, no se publica.",
  },
  {
    title: "Escribo como habla tu marca",
    body: "Guiones y copys con el tono de cada cuenta: cercano para una inmobiliaria, claro y responsable para una financiera. La comunidad tiene que reconocer a la marca en cada texto.",
  },
  {
    title: "Mido y ajusto",
    body: "Alcance, interacción, guardados, retención de reels y conversaciones iniciadas. Las métricas deciden qué se repite y qué cambia en la siguiente parrilla.",
  },
];

export default function About() {
  return (
    <section id="sobre-mi" className="section py-24 sm:py-32">
      <Reveal>
        <SectionHead
          eyebrow="Sobre mí"
          title="No solo publico."
          accent="Hago que tu marca converse."
          lead="Estudié Marketing Digital y me formé en marketing con inteligencia artificial, que uso para crear contenido y automatizar redes. Antes pasé años en atención al cliente y administración: sé lo que es responderle a una persona a tiempo, y eso hago con la comunidad de cada marca."
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
