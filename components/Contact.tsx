import Reveal from "./Reveal";
import { contact, profile, whatsappUrl } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contacto" className="section pb-24 sm:pb-32">
      <Reveal>
        <div className="sticker relative overflow-hidden bg-magenta px-7 py-16 text-white sm:px-14 sm:py-20">
          <div aria-hidden="true" className="dots absolute inset-0 opacity-70" />

          <div className="relative mx-auto max-w-3xl text-center">
            <span className="eyebrow justify-center opacity-80">
              Abierta a nuevas oportunidades
            </span>

            <h2 className="display mt-5 text-[3rem] leading-[0.9] sm:text-[5rem]">
              Hablemos.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg font-medium text-white/90">
              Si buscas una Community Manager para tu equipo o tu marca, escríbeme.
              Te respondo por WhatsApp o por correo.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white text-ink"
              >
                WhatsApp {contact.whatsappLabel}
              </a>
              <a href={`mailto:${contact.email}`} className="btn-ink">
                Enviar un correo
              </a>
              <a
                href={contact.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-amber text-ink"
              >
                Ver hoja de vida
              </a>
            </div>

            <div className="mt-12 grid gap-4 border-t-2 border-white/30 pt-8 text-left sm:grid-cols-3">
              <div>
                <p className="eyebrow opacity-70">Correo</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-1 block break-all font-bold hover:underline"
                >
                  {contact.email}
                </a>
              </div>
              <div>
                <p className="eyebrow opacity-70">LinkedIn</p>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block font-bold hover:underline"
                >
                  /in/paulapjpg
                </a>
              </div>
              <div>
                <p className="eyebrow opacity-70">Ubicación</p>
                <p className="mt-1 font-bold">{profile.location}</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
