/**
 * TODO PAULA: este es el único archivo que necesitas editar para cambiar textos,
 * servicios, cifras y datos de contacto. Los componentes leen de aquí.
 */

export const profile = {
  name: "Paula PG",
  shortName: "Paula",
  role: "Gestión de proyectos digitales · Agentes de IA · Automatización",
  location: "Colombia · Trabajo remoto para LATAM y España",
  tagline: ["Diseño", "sistemas que", "trabajan", "por ti."],
  intro:
    "Soy Paula. Convierto ideas dispersas en proyectos digitales que salen a producción: agentes de IA que atienden y venden, automatizaciones que eliminan trabajo repetitivo y equipos que entregan a tiempo. Cofundé ZAKUMI Studio para hacer exactamente eso.",
  photo: "/paula.webp",
  photoNarrow: "/paula-640.webp",
  available: true,
};

export const contact = {
  whatsapp: "573134276879",
  whatsappLabel: "+57 313 427 6879",
  whatsappMessage:
    "Hola Paula, vi tu portafolio y quiero hablar sobre un proyecto.",
  email: "zakumiestudio@gmail.com",
  linkedin: "https://www.linkedin.com/in/paulapjpg/",
  instagram: "https://www.instagram.com/zakumiestudio/",
  zakumi: "https://www.zakumistudio.com/",
};

export const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
  contact.whatsappMessage,
)}`;

export const stats = [
  { value: "+52h", label: "de formación certificada en IA aplicada", tone: "magenta" },
  { value: "3", label: "disciplinas: IA, software y marca", tone: "violet" },
  { value: "24/7", label: "operando los agentes que despliego", tone: "lime" },
  { value: "0", label: "plantillas: cada proyecto se arma a medida", tone: "amber" },
] as const;

export const services = [
  {
    n: "01",
    title: "Agentes de IA para WhatsApp y Telegram",
    summary:
      "Un agente que atiende, califica y cierra ventas por ti, 24/7, con el tono de tu marca.",
    bullets: [
      "Diseño de la conversación y del criterio de venta",
      "Integración con WhatsApp Business API y Telegram",
      "Escalado a una persona real cuando hay intención de compra",
      "Panel para revisar conversaciones y resultados",
    ],
    tone: "magenta",
  },
  {
    n: "02",
    title: "Automatización de procesos",
    summary:
      "Identifico el trabajo repetitivo de tu operación y lo saco de las manos de tu equipo.",
    bullets: [
      "Flujos en n8n conectando tus herramientas actuales",
      "Gmail, Drive, Calendar, Sheets, CRM y pasarelas de pago",
      "Reportes que se generan y se envían solos",
      "Documentación para que tu equipo lo mantenga",
    ],
    tone: "violet",
  },
  {
    n: "03",
    title: "Gestión de proyectos digitales",
    summary:
      "Entro como la persona que ordena el proyecto: alcance, tiempos, entregables y comunicación.",
    bullets: [
      "Discovery y definición de alcance realista",
      "Roadmap por sprints con entregables visibles",
      "Coordinación entre diseño, desarrollo y cliente",
      "QA y control de calidad antes de cada entrega",
    ],
    tone: "amber",
  },
  {
    n: "04",
    title: "Producto digital: landings, ecommerce y CRM",
    summary:
      "Sitios y plataformas construidos a medida, rápidos y pensados para convertir.",
    bullets: [
      "Landing pages con copy y CTAs orientados a acción",
      "Tiendas con catálogo, carrito, checkout y pagos",
      "CRM con IA que clasifica y prioriza leads",
      "SEO técnico, medición y mejora continua",
    ],
    tone: "cyan",
  },
  {
    n: "05",
    title: "Contenido y creatividad con IA",
    summary:
      "Producción audiovisual y contenido para redes con metodología, no improvisación.",
    bullets: [
      "Estrategia de contenido por objetivo, no por moda",
      "Guiones, piezas y reels producidos con IA",
      "Identidad visual consistente en todos los canales",
      "Calendario y medición de resultados",
    ],
    tone: "lime",
  },
  {
    n: "06",
    title: "Asistentes personales de IA",
    summary:
      "Un asistente siempre disponible que gestiona tu bandeja, tu agenda y tu información.",
    bullets: [
      "Responde y resume correos automáticamente",
      "Gestiona calendario, citas y seguimientos",
      "Consulta datos de internet en tiempo real",
      "Con criterios de seguridad y control de accesos",
    ],
    tone: "magenta",
  },
] as const;

export const process = [
  {
    step: "01",
    title: "Diagnóstico",
    body: "Entiendo tu operación antes de proponer nada. Qué se repite, dónde se pierde tiempo y qué se puede automatizar hoy.",
  },
  {
    step: "02",
    title: "Alcance y roadmap",
    body: "Definimos entregables concretos, fechas y responsables. Nada de proyectos abiertos sin fin ni presupuestos elásticos.",
  },
  {
    step: "03",
    title: "Construcción por sprints",
    body: "Entrego en bloques que puedes ver y probar. Iteramos con tu feedback en vez de esperar al final para descubrir errores.",
  },
  {
    step: "04",
    title: "Entrega y acompañamiento",
    body: "Documentación, capacitación a tu equipo y medición de resultados. El proyecto se queda funcionando sin depender de mí.",
  },
] as const;

export const techGroups = [
  {
    group: "IA & Agentes",
    items: [
      "Claude (Anthropic)",
      "OpenAI",
      "Gemini",
      "Claude Code",
      "Claude Cowork",
      "Google Antigravity",
      "OpenClaw",
      "Manus",
    ],
  },
  {
    group: "Automatización & Datos",
    items: ["n8n", "Apify", "APIs REST", "Webhooks", "PostgreSQL", "Google Workspace"],
  },
  {
    group: "Desarrollo",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP", "Vercel"],
  },
  {
    group: "Canales & Producto",
    items: [
      "WhatsApp Business API",
      "Telegram",
      "Pasarelas de pago",
      "CRM",
      "SEO técnico",
      "Analítica",
    ],
  },
  {
    group: "Gestión",
    items: [
      "Discovery",
      "Roadmapping",
      "Sprints",
      "Notion",
      "QA funcional",
      "Comunicación con cliente",
    ],
  },
] as const;

export const marqueeWords = [
  "Agentes de IA",
  "Automatización",
  "Gestión de proyectos",
  "Software a medida",
  "Producto digital",
  "Identidad de marca",
  "Contenido con IA",
  "n8n",
];

export const projects = [
  {
    name: "ZAKUMI Studio",
    kind: "Emprendimiento propio · Fundadora",
    year: "2026",
    url: "https://www.zakumistudio.com/",
    summary:
      "Estudio de IA, software a medida y marca desde Colombia. Lo fundé para juntar las tres disciplinas bajo un mismo techo: sin intermediarios entre quien diseña, quien programa y quien despliega los agentes.",
    images: [
      {
        src: "/zakumi/zakumi-agente-whatsapp.webp",
        w: 1600,
        h: 900,
        alt: "Agente de IA de ZAKUMI conversando con un cliente por WhatsApp",
        caption: "Agente de ventas por WhatsApp, en producción",
      },
      {
        src: "/zakumi/zakumi-crm.webp",
        w: 1600,
        h: 900,
        alt: "Zakumi CRM mostrando el pipeline de leads clasificados por IA",
        caption: "CRM con IA: leads clasificados y priorizados",
      },
      {
        src: "/zakumi/zakumi-landing.webp",
        w: 1600,
        h: 1200,
        alt: "Landing page diseñada por ZAKUMI Studio orientada a conversión",
        caption: "Landings y producto digital orientados a conversión",
      },
    ],
    highlights: [
      "Agentes de IA que atienden y venden por WhatsApp y Telegram, 24/7",
      "CRM multimodelo (Anthropic, Gemini, OpenAI) que clasifica y prioriza leads",
      "Landings y ecommerce a medida con pasarela de pagos integrada",
      "Identidad visual y sistemas de marca end-to-end",
    ],
    stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Tailwind", "GSAP", "n8n", "Claude"],
    role: [
      "Dirección del estudio y relación con clientes",
      "Definición de alcance y roadmap de cada proyecto",
      "Diseño de los flujos agénticos y de la lógica de venta",
      "Control de calidad y entrega final",
    ],
    tone: "magenta",
  },
] as const;

export const faqs = [
  {
    q: "¿Trabajas por proyecto o por horas?",
    a: "Por proyecto, con alcance y entregables definidos desde el inicio. Para acompañamientos largos o soporte continuo manejo un retainer mensual.",
  },
  {
    q: "¿Necesito saber de tecnología para contratarte?",
    a: "No. Parte de mi trabajo es traducir: tú me cuentas el problema del negocio y yo defino la solución técnica, la construyo y te la entrego funcionando y documentada.",
  },
  {
    q: "¿Cuánto tarda un agente de IA en estar operando?",
    a: "Un agente de atención y ventas para WhatsApp suele estar en producción en 2 a 4 semanas, dependiendo de cuántas integraciones y casos de uso necesites.",
  },
  {
    q: "¿Trabajas con equipos que ya tienen desarrollador?",
    a: "Sí. En esos casos entro como gestora de proyecto o como especialista en IA y automatización, integrándome al equipo que ya existe.",
  },
] as const;
