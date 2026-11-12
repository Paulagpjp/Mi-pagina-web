import { contact, profile, whatsappUrl } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-[3px] border-ink bg-ink text-cream">
      <div className="section py-14">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="display text-[2.5rem] leading-none sm:text-[3.5rem]">
              Paula<span className="text-magenta">.</span>
            </p>
            <p className="mt-3 max-w-sm text-sm font-semibold text-cream/60">
              {profile.role}
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold">
            <li>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-magenta"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-magenta"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="hover:text-magenta"
              >
                Correo
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t-2 border-cream/20 pt-6 text-xs font-semibold uppercase tracking-[0.14em] text-cream/50">
          <p>
            © {year} {profile.name}
          </p>
          <p>Contenido · Comunidad · Métricas</p>
        </div>
      </div>
    </footer>
  );
}
