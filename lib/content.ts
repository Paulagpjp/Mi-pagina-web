/**
 * TODO PAULA: este es el único archivo que necesitas editar para cambiar textos,
 * servicios, cifras y datos de contacto. Los componentes leen de aquí.
 */

export const profile = {
  name: "Paula PG",
  shortName: "Paula",
  role: "Community Manager · Estrategia de contenido · Redes sociales",
  location: "Bogotá, Colombia · Trabajo remoto",
  tagline: ["Contenido", "que conecta,", "marcas que", "conversan."],
  intro:
    "Soy Paula, Community Manager en Mindmarks Agency. Diseño y ejecuto la estrategia de contenido, escribo guiones y copys, gestiono la comunidad y mido cada cuenta para ajustar lo que no funciona. Hoy llevo marcas en Colombia y Panamá.",
  currentRole: "Community Manager en Mindmarks Agency",
  photo: "/paula.webp",
  photoNarrow: "/paula-640.webp",
  available: true,
};

export const contact = {
  whatsapp: "573007909522",
  whatsappLabel: "+57 300 790 9522",
  whatsappMessage:
    "Hola Paula, vi tu portafolio y quiero hablar sobre un proyecto.",
  email: "paulapjpg@gmail.com",
  linkedin: "https://www.linkedin.com/in/paulapjpg/",
  cv: "/HV_Paula_Penagos_CM.pdf",
};

export const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
  contact.whatsappMessage,
)}`;

export const stats = [
  { value: "5", label: "marcas a cargo en Mindmarks Agency", tone: "magenta" },
  { value: "2", label: "países: Colombia y Panamá", tone: "violet" },
  { value: "3", label: "marcas en lanzamiento digital desde cero", tone: "lime" },
  { value: "IA", label: "aplicada a la creación de contenido y la automatización de redes", tone: "amber" },
] as const;

export const services = [
  {
    n: "01",
    title: "Estrategia de contenido",
    summary:
      "Defino qué publica tu marca, para quién y con qué objetivo, antes de diseñar una sola pieza.",
    bullets: [
      "Pilares de contenido según el objetivo: confianza, educación, producto o venta",
      "Estrategias por ciclos de cuatro semanas en redes y otras plataformas digitales",
      "Tendencias y formatos del momento adaptados a la voz de la marca",
      "Campañas alineadas con los equipos de marketing y ventas",
    ],
    tone: "magenta",
  },
  {
    n: "02",
    title: "Parrillas, guiones y copys",
    summary:
      "La parrilla del mes lista, con guiones detallados para reels y textos que suenan a tu marca.",
    bullets: [
      "Parrilla mensual de publicaciones e historias diarias",
      "Guiones detallados para reels comerciales",
      "Copys con llamados a la acción claros",
      "Programación en Instagram y Facebook desde Meta Business Suite",
    ],
    tone: "violet",
  },
  {
    n: "03",
    title: "Gestión y moderación de comunidad",
    summary:
      "La marca conversa con su audiencia: preguntas atendidas a tiempo y relaciones que generan lealtad.",
    bullets: [
      "Atención y moderación de comentarios y mensajes directos",
      "Respuesta cuidada a comentarios negativos para que no escalen a una crisis",
      "Respuestas automáticas y llamados a la acción por palabra clave hacia WhatsApp",
      "Contenido que invita a participar: preguntas, encuestas e historias",
    ],
    tone: "amber",
  },
  {
    n: "04",
    title: "Lanzamiento digital de marcas",
    summary:
      "Para marcas que arrancan de cero: dejo las cuentas listas y la estrategia en marcha.",
    bullets: [
      "Configuración de Meta Business Suite, Instagram y Facebook",
      "Creación de la cuenta publicitaria",
      "Acompañamiento en la página web y el CRM",
      "Estrategia de arranque enfocada en confianza y prueba social",
    ],
    tone: "cyan",
  },
  {
    n: "05",
    title: "Métricas e informes",
    summary:
      "Mido cada cuenta para decidir con datos qué se repite y qué se cambia en la parrilla.",
    bullets: [
      "Alcance, interacción y crecimiento de seguidores",
      "Retención de reels, guardados y compartidos",
      "Visitas al perfil y conversaciones iniciadas",
      "Ajuste de la estrategia semana a semana o mes a mes",
    ],
    tone: "lime",
  },
  {
    n: "06",
    title: "Marketing con inteligencia artificial",
    summary:
      "Uso la IA para crear contenido más rápido y automatizar redes, sin que la marca pierda su voz.",
    bullets: [
      "Ideas, guiones y piezas apoyadas con IA",
      "Producción de reels con herramientas de IA",
      "Automatización de respuestas y publicaciones en redes",
      "El criterio y el tono siempre los pongo yo",
    ],
    tone: "magenta",
  },
] as const;

export const process = [
  {
    step: "01",
    title: "Diagnóstico de marca",
    body: "Reviso la cuenta, el público y la competencia: qué se ha publicado, qué funcionó y qué está pidiendo la comunidad.",
  },
  {
    step: "02",
    title: "Estrategia y parrilla",
    body: "Con el equipo de la marca definimos los pilares y los mensajes clave; armo la parrilla del mes con guiones y copys, y todo se aprueba antes de publicarse.",
  },
  {
    step: "03",
    title: "Publicación y comunidad",
    body: "Programo en Meta Business Suite y atiendo comentarios y mensajes para que ningún prospecto se quede esperando.",
  },
  {
    step: "04",
    title: "Medición y ajuste",
    body: "Reviso las métricas de cada cuenta. Lo que funciona se repite, lo que no se cambia en la siguiente parrilla.",
  },
] as const;

export const techGroups = [
  {
    group: "Redes y Meta",
    items: [
      "Meta Business Suite",
      "Instagram",
      "Facebook",
      "Reels e historias",
      "Cuenta publicitaria de Meta",
      "WhatsApp Business",
    ],
  },
  {
    group: "Contenido y comunidad",
    items: [
      "Estrategia de contenido",
      "Parrillas mensuales",
      "Guiones para reels",
      "Copys",
      "Gestión de comunidad",
      "Respuestas automáticas",
    ],
  },
  {
    group: "Métricas",
    items: [
      "Alcance",
      "Interacción",
      "Retención de reels",
      "Guardados y compartidos",
      "Crecimiento de seguidores",
      "Conversaciones iniciadas",
    ],
  },
  {
    group: "Inteligencia artificial",
    items: ["ChatGPT", "Claude", "Gemini", "Manus", "Creación de contenido con IA", "Automatización de redes"],
  },
  {
    group: "Gestión",
    items: [
      "Google Workspace",
      "Microsoft Office",
      "Informes y presentaciones",
      "Relación con clientes",
    ],
  },
] as const;

export const marqueeWords = [
  "Community Manager",
  "Estrategia de contenido",
  "Parrillas",
  "Guiones para reels",
  "Copys",
  "Gestión de comunidad",
  "Métricas",
  "Meta Business Suite",
];

/** Experiencia principal: la agencia y las marcas que lleva. */
export const agency = {
  name: "Mindmarks Agency",
  role: "Community Manager",
  period: "Junio 2026 – actualidad",
  logo: { src: "/marcas/mindmarks.webp", w: 460, h: 480 },
  summary:
    "Gestiono la presencia digital de las marcas que me asigna la agencia: diseño la estrategia de contenido, planeo las parrillas, escribo guiones para reels, redacto los copys y gestiono la comunidad. Mido y analizo las métricas de cada cuenta —alcance, interacción, crecimiento de seguidores y mensajes— para evaluar el desempeño y ajustar la estrategia.",
};

export const brands = [
  {
    name: "FácilHome",
    handle: "@facilhomepa",
    instagram: "https://www.instagram.com/facilhomepa/",
    logo: { src: "/marcas/facilhome.webp", w: 480, h: 145, dark: false },
    place: "Panamá",
    status: "activa",
    summary:
      "Proyectos de vivienda en David, Chiriquí: Villas de Santa Teresa, Santa Catalina y el lanzamiento de Villas de Santa Ana.",
    bullets: [
      "Parrilla mensual de contenido y guiones detallados para reels comerciales",
      "Contenido de avance de obra, beneficios de cada proyecto, financiación y campañas como Black Friday",
      "Programación en Instagram y Facebook desde Meta Business Suite",
      "Automatizaciones y atención de comentarios y mensajes",
      "Seguimiento de alcance, interacción y mensajes para ajustar la parrilla mes a mes",
    ],
    tone: "magenta",
  },
  {
    name: "FacilCredit",
    handle: "@facilcreditoficial",
    instagram: "https://www.instagram.com/facilcreditoficial/",
    logo: { src: "/marcas/facilcredit.webp", w: 480, h: 106, dark: false },
    place: "Servicios financieros",
    status: "activa",
    summary:
      "Empresa financiera con microcréditos, créditos de consumo, crédito PYME y factoring.",
    bullets: [
      "Estrategia de contenido de 4 semanas: educación financiera, confianza y seguridad, producto y conversión",
      "Parrilla con historias diarias y llamados a la acción por palabra clave que llevan a los prospectos a WhatsApp",
      "Copys con tono cercano y comunicación responsable",
      "Medición semanal de alcance, retención de reels, guardados, compartidos, visitas al perfil y conversaciones iniciadas",
    ],
    tone: "violet",
  },
  {
    name: "Colvag Security",
    handle: null,
    instagram: null,
    logo: { src: "/marcas/colvag.webp", w: 451, h: 540, dark: true },
    place: "Bogotá",
    status: "lanzamiento",
    summary:
      "Empresa de seguridad electrónica: cámaras, grabadores, redes y monitoreo remoto.",
    bullets: [
      "Lanzamiento digital desde cero: Meta Business Suite, Instagram, Facebook y cuenta publicitaria",
      "Acompañamiento en la creación de la página web y del CRM",
      "Estrategia de contenido enfocada en confianza y prueba social",
    ],
    tone: "cyan",
  },
  {
    name: "Medispro",
    handle: null,
    instagram: null,
    logo: { src: "/marcas/medispro.webp", w: 480, h: 309, dark: false },
    place: "Insumos médicos",
    status: "lanzamiento",
    summary: "Empresa de insumos médicos.",
    bullets: [
      "Community management: contenido, parrilla y posicionamiento de la marca en redes",
    ],
    tone: "lime",
  },
  {
    name: "Casa Yambú",
    handle: "@casayambu",
    instagram: "https://www.instagram.com/casayambu/",
    logo: { src: "/marcas/casa-yambu.webp", w: 480, h: 351, dark: false },
    place: "Bogotá",
    status: "lanzamiento",
    summary: "Casa de talleres y eventos inspirados en la música.",
    bullets: [
      "Configuración y puesta en marcha de las redes de la marca",
      "Contenido para dar a conocer sus talleres y eventos",
    ],
    tone: "amber",
  },
] as const;

/** Trayectoria administrativa y comercial: va como experiencia, sin protagonismo. */
export const career = [
  {
    role: "Analista Administrativa · Coordinación y Proveedores VIP",
    org: "Metro Línea 1",
    period: "2024 – 2026",
    note: "Proveedores corporativos, eventos institucionales, presupuesto y un equipo de más de 10 personas.",
  },
  {
    role: "Administradora de Punto de Venta",
    org: "ZARA – TEXMODA",
    period: "2024",
    note: "Equipo comercial, metas de venta y atención al cliente.",
  },
  {
    role: "Subadministradora · Belleza y Skincare",
    org: "Trendy Shop Bogotá",
    period: "2023 – 2024",
    note: "Ayudé a posicionar una tienda nueva; asesoría en skincare y maquillaje, fidelización de clientes.",
  },
  {
    role: "1.ª Asistente Administrativa",
    org: "Academia de Idiomas SMART",
    period: "2020 – 2022",
    note: "Apoyo a coordinación académica y administrativa.",
  },
  {
    role: "Auxiliar Administrativa",
    org: "AGM Salud – Servisalud QCL IPS",
    period: "2020",
    note: "Operación de sede, informes y atención a usuarios.",
  },
  {
    role: "Secretaria · Centro de Negocios",
    org: "SAEJ",
    period: "2019",
    note: "Administración del coworking y agenda de eventos empresariales.",
  },
] as const;

export const faqs = [
  {
    q: "¿Qué incluye tu gestión de redes?",
    a: "Estrategia de contenido, parrilla mensual, guiones para reels, copys, programación en Meta Business Suite, atención de comentarios y mensajes, e informe de métricas para ajustar el mes siguiente.",
  },
  {
    q: "¿Trabajas con marcas que empiezan de cero?",
    a: "Sí. Configuro Meta Business Suite, Instagram, Facebook y la cuenta publicitaria, y arranco con una estrategia enfocada en generar confianza desde la primera publicación.",
  },
  {
    q: "¿Cómo sé si el contenido está funcionando?",
    a: "Con métricas, no con impresiones. Reviso alcance, interacción, retención de reels, guardados, compartidos, visitas al perfil y conversaciones iniciadas, y con eso ajusto la parrilla.",
  },
  {
    q: "¿Qué haces si hay comentarios negativos o una crisis?",
    a: "Respondo rápido, con calma y por el canal correcto: lo público se atiende en público y lo delicado pasa a mensaje privado. Antes de responder lo alineo con el equipo de la marca para que el mensaje sea uno solo.",
  },
  {
    q: "¿Dónde entra la inteligencia artificial?",
    a: "Estudié Marketing Digital y me formé en marketing con inteligencia artificial. La uso para crear contenido más rápido y automatizar redes, pero la estrategia, el tono y lo que se publica los decido yo.",
  },
] as const;
