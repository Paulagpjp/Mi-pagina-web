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
  jobTitle: "Community Manager",
  email: `mailto:${contact.email}`,
  address: { "@type": "PostalAddress", addressCountry: "CO" },
  worksFor: { "@type": "Organization", name: "Mindmarks Agency" },
  sameAs: [contact.linkedin],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Paula Penagos Gómez — Community Manager y estrategia de contenido",
  description:
    "Portafolio de Paula Penagos Gómez, Community Manager en Mindmarks Agency. Estrategia de contenido, parrillas, guiones para reels, copys, gestión de comunidad y métricas para marcas en Colombia y Panamá.",
  keywords: [
    "Paula Penagos Gómez",
    "community manager",
    "community manager Bogotá",
    "estrategia de contenido",
    "gestión de redes sociales",
    "parrilla de contenido",
    "guiones para reels",
    "Meta Business Suite",
    "Mindmarks Agency",
  ],
  authors: [{ name: "Paula Penagos Gómez", url: contact.linkedin }],
  creator: "Paula Penagos Gómez",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteUrl,
    title: "Paula Penagos Gómez — Community Manager",
    description:
      "Estrategia de contenido, parrillas, guiones, copys y gestión de comunidad para marcas en Colombia y Panamá.",
    siteName: "Paula Penagos Gómez",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Paula Penagos Gómez — Community Manager y estrategia de contenido",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paula Penagos Gómez — Community Manager",
    description:
      "Estrategia de contenido, parrillas, guiones, copys y gestión de comunidad. Community Manager en Mindmarks Agency.",
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
