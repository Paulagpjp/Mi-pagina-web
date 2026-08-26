/**
 * Dominio público del sitio. En Vercel se resuelve solo; para un dominio propio
 * define NEXT_PUBLIC_SITE_URL en las variables de entorno del proyecto.
 * De este valor dependen la URL canónica, el sitemap y la imagen de Open Graph.
 *
 * Vive aparte de content.ts porque ahí `process` es el array de fases del
 * método de trabajo y taparía la global de Node.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
