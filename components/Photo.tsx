"use client";

import { useState } from "react";

/**
 * Renders an image from /public. If the file isn't there yet, it shows a
 * designed placeholder instead of a broken image, so the site never looks
 * unfinished while Paula adds her assets.
 *
 * `width`/`height` son obligatorios: sin ellos el navegador no reserva el
 * hueco y la página salta al cargar la imagen (CLS).
 *
 * TODO PAULA: guarda tus imágenes en /public con estos nombres:
 *   /public/paula.jpeg → tu foto de perfil (npm run optimize:images la pasa a .webp)
 */
export default function Photo({
  src,
  alt,
  width,
  height,
  ratio = "aspect-[3/4]",
  label = "Añade tu imagen",
  hint,
  priority = false,
  srcSet,
  sizes,
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  ratio?: string;
  label?: string;
  hint?: string;
  /** Solo para la imagen del hero: la carga temprano porque es el LCP. */
  priority?: boolean;
  /** Variantes por ancho, para no mandarle al móvil la imagen de escritorio. */
  srcSet?: string;
  sizes?: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`dots-ink grid ${ratio} w-full place-items-center bg-gradient-to-br from-amber/60 via-cream to-magenta/30 ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="px-6 text-center">
          <span className="display block text-3xl text-ink/70">{label}</span>
          <span className="mt-2 block text-xs font-bold uppercase tracking-[0.16em] text-ink/60">
            {hint ?? src}
          </span>
        </div>
      </div>
    );
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      onError={() => setFailed(true)}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding={priority ? "sync" : "async"}
      className={`h-auto w-full object-cover ${className}`}
    />
  );
}
