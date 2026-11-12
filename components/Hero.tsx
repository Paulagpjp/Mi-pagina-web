import Photo from "./Photo";
import { contact, profile, whatsappUrl } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-10 sm:pt-16">
      {/* Decorative background blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-violet/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-[38rem] h-80 w-80 rounded-full bg-magenta/20 blur-3xl"
      />

      <div className="section relative grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        {/* ---------- Copy ---------- */}
        <div>
          {profile.available && (
            <span className="chip mb-6 bg-lime">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-ink" />
              </span>
              Disponible para nuevas marcas
            </span>
          )}

          {/* leading propio: .display usa 0.86, que con cuatro líneas de Anton
              hace que se pisen entre ellas y con el resalte magenta. */}
          <h1 className="display text-[3.4rem] leading-[0.95] sm:text-[5rem] lg:text-[6.2rem]">
            {profile.tagline.map((line, i) => (
              <span key={line} className="block">
                {i === 3 ? (
                  <span className="relative inline-block">
                    <span className="relative z-10 text-white">{line}</span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-[-0.35em] top-[0.03em] -bottom-[0.05em] -z-0 -rotate-1 rounded-2xl bg-magenta"
                    />
                  </span>
                ) : (
                  line
                )}
              </span>
            ))}
          </h1>

          <p className="mt-7 max-w-xl text-lg font-medium leading-relaxed sm:text-xl">
            {profile.intro}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-magenta"
            >
              Trabajemos juntos →
            </a>
            <a href="#experiencia" className="btn-ghost bg-white">
              Ver mi trabajo
            </a>
            <a
              href={contact.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost bg-amber"
            >
              Ver hoja de vida ↗
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-2 gap-x-8 gap-y-5 border-t-[3px] border-ink pt-7">
            <div>
              <dt className="eyebrow opacity-60">Rol</dt>
              <dd className="mt-1 font-bold leading-snug">
                {profile.currentRole}
              </dd>
            </div>
            <div>
              <dt className="eyebrow opacity-60">Base</dt>
              <dd className="mt-1 font-bold leading-snug">{profile.location}</dd>
            </div>
          </dl>
        </div>

        {/* ---------- Photo ---------- */}
        <div className="relative mx-auto w-full max-w-[380px] lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border-[3px] border-ink bg-amber"
          />
          <div className="sticker relative overflow-hidden rounded-[2rem] bg-white">
            <Photo
              src={profile.photo}
              srcSet={`${profile.photoNarrow} 640w, ${profile.photo} 768w`}
              sizes="(min-width: 1024px) 460px, 380px"
              alt={`Retrato de ${profile.name}, Community Manager`}
              width={768}
              height={1024}
              priority
              label="Tu foto aquí"
              hint="guárdala en /public/paula.jpeg"
            />
          </div>

          {/* Floating badge: name */}
          <div className="sticker-sm absolute -bottom-6 -left-3 max-w-[220px] rotate-[-3deg] bg-cream px-4 py-3 sm:-left-8">
            <p className="display text-lg leading-tight">{profile.name}</p>
            <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-magenta">
              Community Manager
            </p>
          </div>

          {/* Floating badge: rotating seal */}
          <div className="absolute -right-3 -top-8 hidden h-24 w-24 place-items-center rounded-full border-[3px] border-ink bg-violet text-white sm:grid">
            <span className="display animate-spin-slow text-[10px] leading-tight tracking-[0.1em]">
              CM
              <br />
              ✦
              <br />
              2026
            </span>
          </div>
        </div>
      </div>

      {/* Social row */}
      <div className="section mt-20 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-bold">
        <span className="eyebrow opacity-70">Encuéntrame en</span>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-magenta decoration-[3px] underline-offset-4 hover:text-magenta"
        >
          LinkedIn
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-magenta decoration-[3px] underline-offset-4 hover:text-magenta"
        >
          WhatsApp {contact.whatsappLabel}
        </a>
        <a
          href={`mailto:${contact.email}`}
          className="underline decoration-magenta decoration-[3px] underline-offset-4 hover:text-magenta"
        >
          {contact.email}
        </a>
      </div>
    </section>
  );
}
