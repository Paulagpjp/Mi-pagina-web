"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { faqs } from "@/lib/content";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section py-24 sm:py-32">
      <Reveal>
        <SectionHead
          eyebrow="Preguntas frecuentes"
          title="Antes de"
          accent="escribirme."
        />
      </Reveal>

      <div className="mt-14 space-y-4">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={f.q} delay={i * 60}>
              <div
                className={`sticker-sm overflow-hidden transition-colors duration-200 ${
                  isOpen ? "bg-amber" : "bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-boton-${i}`}
                  className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                >
                  <span className="display text-lg sm:text-xl">{f.q}</span>
                  <span
                    className={`display grid h-8 w-8 shrink-0 place-items-center rounded-full border-2 border-ink text-lg transition-transform duration-200 ${
                      isOpen ? "rotate-45 bg-ink text-cream" : "bg-cream"
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-boton-${i}`}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-[15px] font-medium leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
