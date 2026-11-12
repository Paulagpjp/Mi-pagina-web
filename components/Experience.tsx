import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { agency, brands } from "@/lib/content";
import { toneSolid, type Tone } from "@/lib/tones";

type Brand = (typeof brands)[number];

function BrandCard({ b, i }: { b: Brand; i: number }) {
  const initials = b.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <Reveal delay={(i % 2) * 90} className="h-full">
      <article className="sticker-sm flex h-full flex-col overflow-hidden bg-white">
        {/* Logo de la marca; si aún no hay archivo, sus iniciales. */}
        <div
          className={`relative grid h-44 place-items-center border-b-[3px] border-ink px-8 ${
            b.logo?.dark ? "bg-ink" : b.logo ? "bg-cream" : toneSolid[b.tone as Tone]
          }`}
        >
          {!b.logo?.dark && (
            <div aria-hidden="true" className="dots-ink absolute inset-0 opacity-40" />
          )}
          {b.logo ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={b.logo.src}
              alt={`Logo de ${b.name}`}
              width={b.logo.w}
              height={b.logo.h}
              loading="lazy"
              className="relative max-h-[7.5rem] w-auto max-w-[80%] object-contain"
            />
          ) : (
            <span aria-hidden="true" className="display relative text-[5rem] leading-none">
              {initials}
            </span>
          )}
        </div>

        <div className={`border-b-[3px] border-ink px-6 py-4 ${toneSolid[b.tone as Tone]}`}>
          <h4 className="display text-[2rem] leading-none sm:text-[2.3rem]">{b.name}</h4>
          <p className="mt-2 text-[13px] font-bold uppercase tracking-[0.12em] opacity-85">
            {b.place}
          </p>
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <p className="text-[16px] font-semibold leading-relaxed">{b.summary}</p>
          <ul className="mt-5 space-y-3 border-t-2 border-ink/10 pt-5">
            {b.bullets.map((t) => (
              <li key={t} className="flex gap-3 text-[15px] font-medium leading-relaxed">
                <span className="mt-0.5 shrink-0 text-magenta">✦</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
          {b.instagram && (
            <div className="mt-auto pt-6">
              <a
                href={b.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost bg-white"
              >
                {b.handle} en Instagram ↗
              </a>
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export default function Experience() {
  const active = brands.filter((b) => b.status === "activa");
  const launching = brands.filter((b) => b.status === "lanzamiento");

  return (
    <section id="experiencia" className="section py-24 sm:py-32">
      <Reveal>
        <SectionHead
          eyebrow="Experiencia"
          title="Marcas que"
          accent="manejo hoy."
          lead="Cada cuenta tiene su estrategia, su parrilla y sus métricas. Estas son las marcas que llevo desde la agencia."
        />
      </Reveal>

      {/* Agencia */}
      <Reveal delay={80}>
        <article className="sticker mt-14 overflow-hidden bg-white">
          <div className="relative overflow-hidden bg-magenta px-7 py-10 text-white sm:px-10 sm:py-14">
            <div aria-hidden="true" className="dots absolute inset-0 opacity-70" />
            <div className="relative flex flex-wrap items-end justify-between gap-6">
              <div className="flex items-center gap-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={agency.logo.src}
                  alt={`Logo de ${agency.name}`}
                  width={agency.logo.w}
                  height={agency.logo.h}
                  loading="lazy"
                  className="h-24 w-24 shrink-0 rounded-2xl border-[3px] border-ink bg-black object-contain p-1.5 shadow-[5px_5px_0_0_#0B0B12] sm:h-32 sm:w-32"
                />
              <div>
                <p className="eyebrow opacity-80">{agency.role}</p>
                <h3 className="display mt-3 text-[3rem] leading-none sm:text-[4.5rem]">
                  {agency.name}
                </h3>
              </div>
              </div>
              <span className="display rounded-full border-[3px] border-white px-5 py-2 text-lg">
                {agency.period}
              </span>
            </div>
          </div>
          <p className="border-t-[3px] border-ink p-7 text-lg font-medium leading-relaxed sm:p-10 sm:text-xl">
            {agency.summary}
          </p>
        </article>
      </Reveal>

      <Reveal>
        <h3 className="eyebrow mt-16 text-magenta">
          <span className="h-[3px] w-6 bg-current" />
          Cuentas activas
        </h3>
      </Reveal>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {active.map((b, i) => (
          <BrandCard key={b.name} b={b} i={i} />
        ))}
      </div>

      <Reveal>
        <h3 className="eyebrow mt-16 text-magenta">
          <span className="h-[3px] w-6 bg-current" />
          Proyectos en lanzamiento
        </h3>
      </Reveal>
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {launching.map((b, i) => (
          <BrandCard key={b.name} b={b} i={i} />
        ))}
      </div>

      <Reveal delay={100}>
        <p className="mt-10 max-w-2xl text-[15px] font-semibold opacity-60">
          Si quieres ver parrillas, guiones o métricas de estas cuentas, te los
          muestro en una llamada.
        </p>
      </Reveal>
    </section>
  );
}
