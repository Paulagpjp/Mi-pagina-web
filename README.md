# Portafolio — Paula Penagos Gómez

Portafolio personal de una sola página: perfil, servicios freelance, proyecto ZAKUMI Studio, stack tecnológico y gestión de proyectos.

Stack: **Next.js 14 (App Router) + TypeScript + Tailwind CSS**. Sin dependencias externas de UI.

---

## 1. Arrancarlo en tu computador

Necesitas Node.js 18.17 o superior ([nodejs.org](https://nodejs.org)).

```bash
cd paula-portfolio
npm install
npm run dev
```

Abre <http://localhost:3000>.

## 2. Añadir las imágenes

Copia tu foto dentro de la carpeta `public/`:

| Archivo | Qué es |
|---|---|
| `public/paula.jpeg` | Tu foto de perfil (vertical, mínimo 900 × 1200) |

Después de copiarla, ejecuta:

```bash
npm run optimize:images
```

Eso la convierte a `.webp` (pesa ~3× menos), genera la versión estrecha que se
sirve en móvil y borra el original. La web ya apunta al `.webp`.

Mientras no esté, la web muestra un placeholder con diseño — no se rompe nada.

`public/og.jpg` es la imagen que se ve al compartir el link por WhatsApp,
LinkedIn o X. Ya está hecha; solo hay que rehacerla si cambias el titular.

## 3. Editar los textos

**Todo el contenido vive en un solo archivo: `lib/content.ts`.** No necesitas tocar los componentes para cambiar textos, servicios, cifras, tecnologías, preguntas frecuentes ni datos de contacto.

```
lib/content.ts
├── profile          → nombre, rol, titular del hero, bio
├── contact          → WhatsApp, correo, LinkedIn, Instagram
├── stats            → las 4 cifras grandes
├── services         → los 6 servicios freelance
├── process          → los 4 pasos de tu metodología
├── techGroups       → tecnologías agrupadas por categoría
├── projects         → ZAKUMI (añade más objetos para más proyectos)
└── faqs             → preguntas frecuentes
```

Los colores están en `tailwind.config.ts` (`magenta`, `violet`, `lime`, `amber`, `cyan`, `ink`, `cream`).

## 4. Publicarlo

### Vercel (recomendado, gratis)

1. Sube la carpeta a un repositorio de GitHub.
2. Entra a [vercel.com](https://vercel.com) → **Add New Project** → importa el repo.
3. Vercel detecta Next.js solo. Clic en **Deploy**.
4. En **Settings → Domains** conectas tu dominio propio.

O desde la terminal:

```bash
npm i -g vercel
vercel
```

### Netlify

Build command `npm run build`, y añade el plugin oficial `@netlify/plugin-nextjs`.

---

## Estructura

```
app/
  layout.tsx       metadata, SEO, JSON-LD y fuentes (next/font, auto-alojadas)
  page.tsx         orden de las secciones
  globals.css      paleta, tipografía y clases base (.sticker, .btn, .display)
  robots.ts        genera /robots.txt
  sitemap.ts       genera /sitemap.xml
  icon.png         favicon (Next lo engancha solo)
  apple-icon.png   icono para iOS
  favicon.ico      favicon multi-tamaño para la pestaña
components/
  Nav.tsx          navegación sticky + menú móvil
  Hero.tsx         portada
  Marquee.tsx      cintas de texto en movimiento
  About.tsx        sobre mí + cifras
  Services.tsx     servicios freelance
  Projects.tsx     caso ZAKUMI
  Process.tsx      metodología de gestión de proyectos
  Tech.tsx         stack tecnológico
  Faq.tsx          preguntas frecuentes
  Contact.tsx      CTA final
  Footer.tsx
  Photo.tsx        imagen con placeholder si el archivo no existe
  Reveal.tsx       animación de entrada al hacer scroll
  SectionHead.tsx  título de sección reutilizable
lib/
  content.ts       ← TODO EL CONTENIDO EDITABLE
  site.ts          dominio público (NEXT_PUBLIC_SITE_URL)
  tones.ts         mapa de colores por acento
scripts/
  optimize-images.mjs  convierte /public a webp — npm run optimize:images
```

## Antes de publicar: el dominio

La URL canónica, el sitemap y la imagen de Open Graph salen de `lib/site.ts`.
En Vercel se resuelve solo con la URL del proyecto; en cuanto conectes un dominio
propio, añade la variable de entorno:

```
NEXT_PUBLIC_SITE_URL=https://tudominio.com
```

(Vercel → Settings → Environment Variables, y vuelve a desplegar.)

## Accesibilidad y rendimiento

Lighthouse contra el build de producción: **móvil 98 / 100 / 100 / 100 ·
escritorio 100 / 100 / 100 / 100**.

- Respeta `prefers-reduced-motion`: si el visitante desactiva animaciones, no se mueve nada.
- Contraste AA en todo el texto (el magenta es `#E2005A`, elegido para pasar 4.5:1
  tanto sobre crema como con texto blanco encima).
- Menú móvil con `aria-expanded` + `inert` cuando está cerrado; FAQ con acordeón
  accesible por teclado; enlace "saltar al contenido".
- Fuentes auto-alojadas con `next/font`: no hay petición bloqueante a Google Fonts.
- La foto del hero se precarga (es el LCP) y se sirve en dos anchos según pantalla.
- Cero librerías de animación: todo con CSS y Tailwind.

### Volver a auditar

```bash
npm run build
npm start -- -p 3005
npx lighthouse http://localhost:3005 --view                  # móvil
npx lighthouse http://localhost:3005 --preset=desktop --view # escritorio
```

Siempre contra el build de producción, nunca contra `npm run dev`.
