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
              Recibiendo nuevos proyectos
            </span>

            <h2 className="display mt-5 text-[3rem] leading-[0.9] sm:text-[5rem]">
              Hablemos de
              <br />
              tu marca.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg font-medium text-white/90">
              Sin formularios eternos y sin compromiso. Escríbeme, me cuentas cómo
              está tu marca en redes y te digo con honestidad cómo puedo ayudarte.
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
              <a href={contact.cv} download className="btn bg-amber text-ink">
                Descargar hoja de vida
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
