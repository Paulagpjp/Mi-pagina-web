import type { Metadata, Viewport } from "next";
import { Anton, Plus_Jakarta_Sans } from "next/font/google";
import { contact, profile } from "@/lib/content";
import { siteUrl } from "@/lib/site";
import "./globals.css";

/* Self-hosted by Next: no render-blocking request to fonts.googleapis.com. */
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-display",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Paula Penagos Gómez",
  url: siteUrl,
  image: `${siteUrl}${profile.photo}`,
  jobTitle: "Gestora de proyectos digitales · Agentes de IA · Automatización",
  email: `mailto:${contact.email}`,
  address: { "@type": "PostalAddress", addressCountry: "CO" },
  worksFor: {
    "@type": "Organization",
    name: "ZAKUMI Studio",
    url: contact.zakumi,
  },
  sameAs: [contact.linkedin, contact.instagram, contact.zakumi],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Paula Penagos Gómez — Agentes de IA, automatización y gestión de proyectos digitales",
  description:
    "Portafolio de Paula Penagos Gómez. Fundadora de ZAKUMI Studio. Diseño y despliego agentes de IA, automatizaciones y producto digital a medida. Servicios freelance para LATAM y España.",
  keywords: [
    "Paula Penagos Gómez",
    "agentes de IA",
    "automatización con IA",
    "n8n",
    "gestión de proyectos digitales",
    "ZAKUMI Studio",
    "freelance IA Colombia",
    "desarrollo Next.js",
    "chatbot WhatsApp con IA",
  ],
  authors: [{ name: "Paula Penagos Gómez", url: contact.linkedin }],
  creator: "Paula Penagos Gómez",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteUrl,
    title: "Paula Penagos Gómez — Agentes de IA, automatización y producto digital",
    description:
      "Convierto ideas en proyectos digitales que salen a producción: agentes de IA, automatizaciones y producto a medida.",
    siteName: "Paula Penagos Gómez",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Paula Penagos Gómez — Agentes de IA, automatización y gestión de proyectos digitales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paula Penagos Gómez — Agentes de IA y automatización",
    description:
      "Agentes de IA, automatizaciones y gestión de proyectos digitales. Fundadora de ZAKUMI Studio.",
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FFF7EE",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${anton.variable} ${jakarta.variable}`}>
      <head>
        <noscript>
          <style>{".reveal{opacity:1!important;transform:none!important}"}</style>
        </noscript>
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
