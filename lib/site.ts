/**
 * Dominio público del sitio. De aquí salen la URL canónica, el sitemap y la
 * imagen de Open Graph.
 *
 * Se resuelve solo en Vercel y en Netlify. Con un dominio propio, define
 * NEXT_PUBLIC_SITE_URL en las variables de entorno del proyecto.
 *
 * Vive aparte de content.ts porque ahí `process` es el array de fases del
 * método de trabajo y taparía la global de Node.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit;

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;

  // Netlify expone la URL principal del sitio en URL durante el build.
  if (process.env.NETLIFY && process.env.URL) return process.env.URL;

  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();
