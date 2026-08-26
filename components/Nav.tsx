"use client";

import { useEffect, useRef, useState } from "react";
import { profile, whatsappUrl } from "@/lib/content";

const links = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#tecnologias", label: "Tecnologías" },
  { href: "#contacto", label: "Contacto" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // React 18 no renderiza `inert` como prop, así que se pone a mano.
  useEffect(() => {
    const node = drawerRef.current;
    if (!node) return;
    if (open) node.removeAttribute("inert");
    else node.setAttribute("inert", "");
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "border-b-[3px] border-ink bg-cream/95 backdrop-blur"
            : "border-b-[3px] border-transparent"
        }`}
      >
        <nav className="section flex h-[72px] items-center justify-between">
          <a
            href="#top"
            className="display text-xl leading-none tracking-normal sm:text-2xl"
          >
            Paula<span className="text-magenta">.</span>
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative text-sm font-bold after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-0 after:bg-magenta after:transition-all after:duration-200 hover:after:w-full"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full border-[3px] border-ink bg-magenta px-5 py-2.5 text-xs font-extrabold uppercase tracking-[0.12em] text-white shadow-[4px_4px_0_0_#0B0B12] transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              Hablemos
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-movil"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-ink bg-white lg:hidden"
            >
              <div className="flex flex-col gap-[5px]">
                <span
                  className={`block h-[3px] w-5 bg-ink transition-transform ${
                    open ? "translate-y-[8px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-[3px] w-5 bg-ink transition-opacity ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-[3px] w-5 bg-ink transition-transform ${
                    open ? "-translate-y-[8px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile drawer. Cerrado queda fuera de pantalla pero seguiría siendo
          navegable con Tab, así que se marca inert + aria-hidden. */}
      <div
        id="menu-movil"
        ref={drawerRef}
        aria-hidden={!open}
        className={`fixed inset-x-0 top-[72px] bottom-0 z-40 border-t-[3px] border-ink bg-cream px-5 py-8 transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-1">
          {links.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="display block border-b-2 border-ink/15 py-4 text-4xl"
              >
                <span className="mr-3 align-super text-xs text-magenta">
                  0{i + 1}
                </span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="btn-magenta mt-8 w-full"
        >
          Escríbeme por WhatsApp
        </a>

        <p className="mt-6 text-sm font-semibold opacity-70">{profile.location}</p>
      </div>
    </header>
  );
}
